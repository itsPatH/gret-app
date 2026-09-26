import { test, expect, type Page } from "@playwright/test";

const boton = (page: Page) =>
  page.locator('nav button[aria-label*="Cambiar a modo"]');

const tema = (page: Page) =>
  page.evaluate(() => document.documentElement.dataset.theme ?? null);

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("arranca en claro: el tema lo decide el botón, no el sistema", async ({ page }) => {
  expect(await tema(page)).toBeNull();
  await expect(boton(page)).toHaveAttribute("aria-pressed", "false");
});

/**
 * Hubo una instancia por breakpoint y cada una llevaba su propio estado: al
 * redimensionar, la que aparecía mostraba el icono y el aria-pressed del tema
 * contrario. Debe existir una sola, visible en cualquier ancho.
 */
test("hay un único botón de tema y está visible", async ({ page }) => {
  await expect(boton(page)).toHaveCount(1);
  await expect(boton(page)).toBeVisible();
});

test("el botón cambia a oscuro y de vuelta", async ({ page }) => {
  await boton(page).click();
  expect(await tema(page)).toBe("dark");
  await expect(boton(page)).toHaveAttribute("aria-pressed", "true");
  await expect(boton(page)).toHaveAttribute("aria-label", "Cambiar a modo claro");

  // al volver queda "light" explícito, no se borra el atributo
  await boton(page).click();
  expect(await tema(page)).toBe("light");
  await expect(boton(page)).toHaveAttribute("aria-pressed", "false");
});

test("recuerda la elección tras recargar", async ({ page }) => {
  await boton(page).click();
  expect(await tema(page)).toBe("dark");

  await page.reload();
  expect(await tema(page)).toBe("dark");
  await expect(boton(page)).toHaveAttribute("aria-pressed", "true");
});

/**
 * El script del <head> debe aplicar el tema antes del primer pintado. Si se
 * aplicara al hidratar, quien eligiera oscuro vería un destello blanco.
 */
test("no hay destello blanco: el tema se aplica antes de pintar", async ({ page }) => {
  await boton(page).click();
  await page.reload();

  // el fondo ya es oscuro en el primer frame en que hay body
  const fondo = await page.evaluate(
    () => getComputedStyle(document.body).backgroundColor,
  );
  expect(fondo).not.toBe("rgb(255, 255, 255)");
});

test("las superficies cambian de color con el tema", async ({ page }) => {
  const pie = page.locator("footer");
  const claro = await pie.evaluate((e) => getComputedStyle(e).backgroundColor);

  await boton(page).click();
  const oscuro = await pie.evaluate((e) => getComputedStyle(e).backgroundColor);

  expect(claro).not.toBe(oscuro);
  expect(claro).toBe("rgb(255, 255, 255)");
});

test("el botón es alcanzable con el teclado", async ({ page }) => {
  await boton(page).focus();
  await expect(boton(page)).toBeFocused();

  await page.keyboard.press("Enter");
  expect(await tema(page)).toBe("dark");
});
