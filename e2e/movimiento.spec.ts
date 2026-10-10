import { test, expect, type Page } from "@playwright/test";

const IDENTIDAD = ["none", "matrix(1, 0, 0, 1, 0, 0)"];

const transform = (page: Page, selector: string) =>
  page.locator(selector).first().evaluate((e) => getComputedStyle(e).transform);

const opacidad = (page: Page, selector: string) =>
  page.locator(selector).first().evaluate((e) => getComputedStyle(e).opacity);

/** El botón de tema pinta su icono en un efecto: si está, React ya hidrató. */
const hidratado = (page: Page) =>
  expect(page.locator('nav button[aria-label*="Cambiar a modo"] svg')).toHaveCount(1);

const RETRATO = "#hero figure";
const PRIMERA_DIRECCION = "#visitame .rounded-lg.p-6";

test.describe("con movimiento", () => {
  /**
   * El retrato es lo más grande de la primera pantalla. Chrome no cuenta
   * como pintado un elemento con opacidad cero, así que si entrara con
   * fundido retrasaría el LCP: solo gira y baja, nunca es transparente.
   */
  test("el retrato no arranca transparente", async ({ page }) => {
    await page.goto("/");
    expect(await opacidad(page, RETRATO)).toBe("1");
  });

  test("el retrato se asienta en su posición final", async ({ page }) => {
    await page.goto("/");
    await expect
      .poll(() => transform(page, RETRATO), { timeout: 3000 })
      .toMatch(/^(none|matrix\(1, 0, 0, 1, 0, 0\))$/);
  });

  test("las direcciones esperan a estar en pantalla para aparecer", async ({ page }) => {
    await page.goto("/");
    await hidratado(page);
    expect(await opacidad(page, PRIMERA_DIRECCION)).toBe("0");

    await page.locator(PRIMERA_DIRECCION).first().scrollIntoViewIfNeeded();
    await expect.poll(() => opacidad(page, PRIMERA_DIRECCION), { timeout: 3000 }).toBe("1");
    expect(IDENTIDAD).toContain(await transform(page, PRIMERA_DIRECCION));
  });
});

test.describe("con movimiento reducido", () => {
  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
  });

  test("los anclas saltan sin desplazamiento animado", async ({ page }) => {
    const comportamiento = await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    );
    expect(comportamiento).toBe("auto");
  });

  /**
   * Con movimiento normal el retrato espera 150 ms y tarda 700 en asentarse.
   * Con la preferencia activa tiene que estar recto casi en cuanto React
   * hidrata; medio segundo de margen separa con claridad los dos casos.
   */
  test("el retrato aparece ya recto, sin girar", async ({ page }) => {
    await hidratado(page);
    await expect
      .poll(() => transform(page, RETRATO), { timeout: 500 })
      .toMatch(/^(none|matrix\(1, 0, 0, 1, 0, 0\))$/);
  });

  test("el enlace del menú salta directo a la sección", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "en móvil el menú está en el desplegable");
    await hidratado(page);

    await page.locator("nav").getByRole("link", { name: "Visítame", exact: true }).click();

    // react-scroll anima 500 ms por defecto; aquí debe llegar casi de inmediato
    await expect
      .poll(
        () => page.locator("#visitame").evaluate((e) => Math.abs(e.getBoundingClientRect().top - 80)),
        { timeout: 250 },
      )
      .toBeLessThan(20);
  });
});
