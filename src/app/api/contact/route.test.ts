import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { NextRequest } from "next/server";

const { sendMock } = vi.hoisted(() => ({ sendMock: vi.fn() }));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

import { POST } from "./route";

/**
 * El rate limit vive en un Map a nivel de módulo, así que se comparte entre
 * tests. Cada test usa su propia IP para no consumir la cuota de los demás.
 */
let ipCounter = 0;
const nextIp = () => `10.0.0.${++ipCounter}`;

function req(body: unknown, ip = nextIp()) {
  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const valido = {
  name: "María Pérez",
  email: "maria@example.com",
  message: "Quisiera agendar una consulta para mi hija.",
};

beforeEach(() => {
  vi.stubEnv("RESEND_API_KEY", "re_test_key");
  vi.stubEnv("CONTACT_TO_EMAIL", "destino@example.com");
  vi.stubEnv("CONTACT_FROM_EMAIL", "contacto@example.com");
  sendMock.mockReset();
  sendMock.mockResolvedValue({ data: { id: "msg_1" }, error: null });
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("configuración", () => {
  it("responde 503 y no envía si falta la API key", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const res = await POST(req(valido));
    expect(res.status).toBe(503);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("responde 503 si falta el destinatario", async () => {
    vi.stubEnv("CONTACT_TO_EMAIL", "");
    const res = await POST(req(valido));
    expect(res.status).toBe(503);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("no filtra el motivo real del fallo al cliente", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const body = await (await POST(req(valido))).json();
    expect(JSON.stringify(body)).not.toMatch(/RESEND_API_KEY|api[_ ]?key/i);
  });
});

describe("validación", () => {
  it("rechaza un cuerpo que no es JSON", async () => {
    const res = await POST(req("{no es json"));
    expect(res.status).toBe(400);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rechaza campos ausentes", async () => {
    const res = await POST(req({}));
    expect(res.status).toBe(400);
  });

  it("rechaza campos que solo tienen espacios", async () => {
    const res = await POST(req({ ...valido, name: "   " }));
    expect(res.status).toBe(400);
  });

  it("rechaza tipos que no son string", async () => {
    const res = await POST(req({ ...valido, name: 42 }));
    expect(res.status).toBe(400);
  });

  it("rechaza un email con formato inválido", async () => {
    const res = await POST(req({ ...valido, email: "no-es-un-email" }));
    expect(res.status).toBe(400);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rechaza un mensaje que excede el límite", async () => {
    const res = await POST(req({ ...valido, message: "a".repeat(5001) }));
    expect(res.status).toBe(400);
  });

  it("acepta un mensaje justo en el límite", async () => {
    const res = await POST(req({ ...valido, message: "a".repeat(5000) }));
    expect(res.status).toBe(200);
  });
});

describe("honeypot", () => {
  it("finge éxito y no envía cuando el campo trampa viene lleno", async () => {
    const res = await POST(req({ ...valido, website: "http://spam.example" }));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("envía con normalidad si el campo trampa viene vacío", async () => {
    const res = await POST(req({ ...valido, website: "" }));
    expect(res.status).toBe(200);
    expect(sendMock).toHaveBeenCalledOnce();
  });
});

describe("envío", () => {
  it("envía con los datos del formulario y responde ok", async () => {
    const res = await POST(req(valido));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });

    const args = sendMock.mock.calls[0][0];
    expect(args.from).toBe("contacto@example.com");
    expect(args.to).toBe("destino@example.com");
    expect(args.subject).toContain(valido.name);
    expect(args.text).toContain(valido.message);
  });

  it("pone replyTo con el correo de quien escribe, para poder responderle", async () => {
    await POST(req(valido));
    expect(sendMock.mock.calls[0][0].replyTo).toBe(valido.email);
  });

  it("responde 502 si Resend devuelve error", async () => {
    sendMock.mockResolvedValue({ data: null, error: { message: "dominio no verificado" } });
    const res = await POST(req(valido));
    expect(res.status).toBe(502);
  });

  it("no expone el error interno de Resend al cliente", async () => {
    sendMock.mockResolvedValue({ data: null, error: { message: "dominio no verificado" } });
    const body = await (await POST(req(valido))).json();
    expect(JSON.stringify(body)).not.toContain("dominio no verificado");
  });
});

describe("rate limit", () => {
  it("permite 3 envíos por IP y bloquea el cuarto con 429", async () => {
    const ip = "192.168.50.1";
    const codigos: number[] = [];
    for (let i = 0; i < 4; i++) {
      codigos.push((await POST(req(valido, ip))).status);
    }
    expect(codigos.slice(0, 3)).toEqual([200, 200, 200]);
    expect(codigos[3]).toBe(429);
  });

  it("cuenta por IP: otra IP no arrastra el bloqueo", async () => {
    const bloqueada = "192.168.50.2";
    for (let i = 0; i < 4; i++) await POST(req(valido, bloqueada));

    const res = await POST(req(valido, "192.168.50.3"));
    expect(res.status).toBe(200);
  });

  it("no llama a Resend cuando bloquea", async () => {
    const ip = "192.168.50.4";
    for (let i = 0; i < 3; i++) await POST(req(valido, ip));
    sendMock.mockClear();

    const res = await POST(req(valido, ip));
    expect(res.status).toBe(429);
    expect(sendMock).not.toHaveBeenCalled();
  });
});
