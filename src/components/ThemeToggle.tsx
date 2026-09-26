"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const CLAVE_TEMA = "gret-tema";

type Tema = "light" | "dark";

/**
 * El tema real lo aplica el script de layout.tsx antes del primer pintado.
 * Este componente solo lo lee y lo cambia, así que arranca sin icono: en el
 * servidor no hay forma de saber qué eligió esta persona, y pintar un icono
 * a ciegas provocaría un desajuste de hidratación y un parpadeo.
 */
const ThemeToggle = () => {
  const [tema, setTema] = useState<Tema | null>(null);

  useEffect(() => {
    setTema(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const alternar = () => {
    const siguiente: Tema = tema === "dark" ? "light" : "dark";
    setTema(siguiente);
    document.documentElement.dataset.theme = siguiente;
    try {
      localStorage.setItem(CLAVE_TEMA, siguiente);
    } catch {
      // modo privado o almacenamiento bloqueado: el tema vale para esta visita
    }
  };

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={
        tema === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
      }
      aria-pressed={tema === "dark"}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-borde-fuerte text-suave hover:text-titulo hover:border-suave transition-colors"
    >
      {tema === null ? null : tema === "dark" ? (
        <FiSun className="text-base" />
      ) : (
        <FiMoon className="text-base" />
      )}
    </button>
  );
};

export default ThemeToggle;
