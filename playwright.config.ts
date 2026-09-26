import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",

  use: {
    baseURL,
    trace: "on-first-retry",
  },

  /**
   * Usa el Chrome instalado en el sistema (`channel: "chrome"`) en vez del
   * Chromium que Playwright descarga aparte. El CDN de Playwright da timeout
   * desde esta red, y los runners de GitHub Actions ya traen Chrome.
   * Si prefieres el Chromium empaquetado: `npx playwright install chromium`
   * y quita el `channel` de aquí.
   */
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], channel: "chrome" } },
    { name: "mobile", use: { ...devices["Pixel 7"], channel: "chrome" } },
  ],

  /**
   * Corre contra el build de producción en un puerto propio, para no chocar
   * con el `npm run dev` que puedas tener abierto en el 3000.
   *
   * Las variables de contacto son de relleno a propósito: los tests
   * interceptan /api/contact y nunca llegan a Resend. Si alguna petición se
   * escapara del mock, el endpoint respondería 503 en vez de enviar un
   * correo real a la consulta.
   */
  webServer: {
    command: `npm run build && npm run start -- --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      RESEND_API_KEY: "",
      CONTACT_TO_EMAIL: "",
      CONTACT_FROM_EMAIL: "",
    },
  },
});
