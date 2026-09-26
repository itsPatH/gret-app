import { test, expect, type Page } from "@playwright/test";

/**
 * Todas las pruebas interceptan /api/contact. El formulario envía correos
 * de verdad a la consulta de la doctora, así que ninguna petición de test
 * puede llegar al servidor.
 */
async function mockContact(
  page: Page,
  status: number,
  body: Record<string, unknown>,
  onCall?: (payload: Record<string, unknown>) => void,
) {
  await page.route("**/api/contact", async (route) => {
    onCall?.(route.request().postDataJSON());
    await route.fulfill({
      status,
      contentType: "application/json",
      body: JSON.stringify(body),
    });
  });
}

/**
 * Acotado al <form>: el Footer tiene un enlace con aria-label "Correo
 * electrónico" que colisiona con la etiqueta del campo.
 */
const formulario = (page: Page) => page.locator("form");

async function rellenar(page: Page) {
  const form = formulario(page);
  await form.getByLabel("Nombre completo").fill("María Pérez");
  await form.getByLabel("Correo electrónico").fill("maria@example.com");
  await form.getByLabel("Mensaje").fill("Quisiera agendar una consulta.");
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("envía el formulario y muestra la confirmación", async ({ page }) => {
  let enviado: Record<string, unknown> | undefined;
  await mockContact(page, 200, { ok: true }, (p) => (enviado = p));

  await rellenar(page);
  await page.getByRole("button", { name: "Enviar mensaje" }).click();

  await expect(page.getByText("¡Mensaje enviado!")).toBeVisible();
  expect(enviado).toMatchObject({
    name: "María Pérez",
    email: "maria@example.com",
  });
});

test("muestra el mensaje de error que devuelve el servidor", async ({ page }) => {
  await mockContact(page, 502, { error: "No se pudo enviar el mensaje." });

  await rellenar(page);
  await page.getByRole("button", { name: "Enviar mensaje" }).click();

  const alerta = formulario(page).getByRole("alert");
  await expect(alerta).toBeVisible();
  await expect(alerta).toContainText("No se pudo enviar el mensaje.");
  // el formulario sigue en pantalla para poder reintentar
  await expect(page.getByRole("button", { name: "Enviar mensaje" })).toBeVisible();
});

test("explica el bloqueo cuando el servidor responde 429", async ({ page }) => {
  await mockContact(page, 429, { error: "Demasiados intentos. Intenta de nuevo más tarde." });

  await rellenar(page);
  await page.getByRole("button", { name: "Enviar mensaje" }).click();

  await expect(formulario(page).getByRole("alert")).toContainText("Demasiados intentos");
});

test("conserva lo escrito cuando falla el envío", async ({ page }) => {
  await mockContact(page, 502, { error: "No se pudo enviar el mensaje." });

  await rellenar(page);
  await page.getByRole("button", { name: "Enviar mensaje" }).click();
  await expect(formulario(page).getByRole("alert")).toBeVisible();

  // perder el mensaje escrito obligaría a teclearlo otra vez
  await expect(formulario(page).getByLabel("Mensaje")).toHaveValue(
    "Quisiera agendar una consulta.",
  );
});

test("bloquea el botón mientras envía, para no duplicar mensajes", async ({ page }) => {
  let llamadas = 0;
  await page.route("**/api/contact", async (route) => {
    llamadas++;
    await new Promise((r) => setTimeout(r, 1200));
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });

  await rellenar(page);
  const boton = page.getByRole("button", { name: "Enviar mensaje" });
  await boton.click();

  await expect(page.getByRole("button", { name: "Enviando..." })).toBeDisabled();
  await expect(page.getByText("¡Mensaje enviado!")).toBeVisible({ timeout: 5000 });
  expect(llamadas).toBe(1);
});

test("el navegador frena el envío si faltan campos obligatorios", async ({ page }) => {
  let llamadas = 0;
  await mockContact(page, 200, { ok: true }, () => llamadas++);

  await page.getByRole("button", { name: "Enviar mensaje" }).click();

  expect(llamadas).toBe(0);
  await expect(formulario(page).getByLabel("Nombre completo")).toBeFocused();
});

test("el campo trampa está oculto y fuera del recorrido de tabulación", async ({ page }) => {
  const honeypot = page.locator('input[name="website"]');
  await expect(honeypot).toHaveCount(1);
  await expect(honeypot).not.toBeInViewport();
  await expect(honeypot).toHaveAttribute("tabindex", "-1");
  await expect(honeypot).toHaveAttribute("aria-hidden", "true");
});
