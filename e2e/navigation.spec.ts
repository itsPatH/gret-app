import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("las tres secciones ancladas existen en la página", async ({ page }) => {
  for (const id of ["hero", "about", "visitame"]) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
});

/**
 * Ubicaciones y Contacto se fusionaron en una sola sección: por separado
 * empujaban el formulario hasta 3,4 pantallas de scroll.
 */
test("visitame reúne las direcciones y el formulario", async ({ page }) => {
  const seccion = page.locator("#visitame");
  await expect(seccion.getByRole("heading", { name: "Barquisimeto" })).toBeVisible();
  await expect(seccion.getByRole("heading", { name: "Cabudare" })).toBeVisible();
  await expect(seccion.locator("form")).toHaveCount(1);
});

test("el Hero lleva a las ubicaciones sin tener que buscarlas", async ({ page }) => {
  const atajo = page.locator('#hero a[href="#visitame"]');
  await expect(atajo).toBeVisible();
});

test("el enlace del menú lleva a la sección correspondiente", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "en móvil los enlaces viven en el menú desplegable");

  await page.locator("nav").getByRole("link", { name: "Visítame", exact: true }).click();

  await expect(page.locator("#visitame")).toBeInViewport({ timeout: 5000 });
});

/**
 * react-scroll genera <a> sin href, y un ancla sin href no es un elemento
 * interactivo: no recibe foco ni se anuncia como enlace. Eso dejaba la
 * navegación principal fuera del alcance del teclado (WCAG 2.1.1, nivel A).
 */
test("los enlaces del menú son enlaces de verdad, no anclas vacías", async ({ page }) => {
  const enlaces = page.locator("nav a[href^='#']");
  await expect(enlaces).not.toHaveCount(0);

  for (const destino of ["#hero", "#about", "#visitame"]) {
    await expect(page.locator(`nav a[href='${destino}']`).first()).toHaveCount(1);
  }
});

test("se puede navegar el menú con el teclado", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "en móvil el menú se abre con el botón");

  const enlace = page.locator("nav").getByRole("link", { name: "Visítame", exact: true });
  await enlace.focus();
  await expect(enlace).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page.locator("#visitame")).toBeInViewport({ timeout: 5000 });
});

test("la página declara el idioma español", async ({ page }) => {
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
});

test("hay un único h1 y describe a la doctora", async ({ page }) => {
  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toHaveCount(1);
  await expect(h1).toContainText("Gretzalid Meléndez");
});

test("las imágenes con contenido llevan texto alternativo", async ({ page }) => {
  // las decorativas llevan alt="" a propósito: deben quedar fuera del árbol
  const sinAlt = page.locator("img:not([alt])");
  await expect(sinAlt).toHaveCount(0);
});

test.describe("menú móvil", () => {
  // El menú hamburguesa solo existe bajo el breakpoint md de Tailwind,
  // así que estas pruebas corren en el proyecto "mobile" de la config.
  test.skip(({ isMobile }) => !isMobile, "solo aplica en viewport móvil");

  test("se abre, se cierra con Escape y con un clic fuera", async ({ page }) => {
    const boton = page.getByRole("button", { name: "Abrir menú" });

    await expect(boton).toHaveAttribute("aria-expanded", "false");

    await boton.click();
    await expect(boton).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(boton).toHaveAttribute("aria-expanded", "false");

    await boton.click();
    await expect(boton).toHaveAttribute("aria-expanded", "true");
    await page.locator("#about").click({ position: { x: 10, y: 10 } });
    await expect(boton).toHaveAttribute("aria-expanded", "false");
  });

  test("el botón apunta al menú que controla", async ({ page }) => {
    const boton = page.getByRole("button", { name: "Abrir menú" });
    const id = await boton.getAttribute("aria-controls");
    expect(id).toBeTruthy();
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  });
});
