"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ENTRADA } from "./Movimiento";

const etapas = [
  {
    etapa: "Formación",
    texto: (
      <>
        Médico egresada de la Universidad Centroccidental Lisandro Alvarado,
        con mención <em>magna cum laude</em>.
      </>
    ),
  },
  {
    etapa: "Especialidad",
    texto: <>Pediatría en el Hospital Universitario Pediátrico Dr. Agustín Zubillaga.</>,
  },
  {
    etapa: "Hoy",
    texto: <>Docente en la UCLA y pediatra adjunto de la Policlínica de Cabudare.</>,
  },
];

/**
 * El trazo punteado con rizo y el avión de papel vienen del mural de su
 * consulta, el que se ve en la foto de Instagram de al lado. Son trazos
 * finos en el color del texto, como las líneas negras de la pared.
 *
 * Al entrar en pantalla el trazo se dibuja de arriba abajo y el avión llega
 * planeando al final, una sola vez. El trazo es punteado, así que no se puede
 * animar con pathLength (usa el mismo stroke-dasharray que hace los puntos):
 * se destapa con un clip-path. Con movimiento reducido todo aparece ya en su
 * sitio.
 */
const Recorrido = () => {
  const reducido = useReducedMotion();
  // con la preferencia activa las duraciones caen a cero en vez de saltarse
  // la animación: así el HTML del servidor es el mismo en ambos casos
  const t = (duracion: number, retraso: number) =>
    reducido ? { duration: 0 } : { duration: duracion, delay: retraso, ease: "easeInOut" as const };

  const trazo = (duracion: number, retraso: number): Variants => ({
    oculto: { clipPath: "inset(0 0 100% 0)" },
    visible: { clipPath: "inset(0 0 0% 0)", transition: t(duracion, retraso) },
  });

  const punto = (retraso: number): Variants => ({
    oculto: { opacity: 0 },
    visible: { opacity: 1, transition: t(0.2, retraso) },
  });

  const avion: Variants = {
    oculto: { opacity: 0, x: -18, y: -22, rotate: -40 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -12,
      transition: reducido
        ? { duration: 0 }
        : { duration: 0.7, delay: 1.45, ease: ENTRADA.curva },
    },
  };

  return (
    <motion.ol initial="oculto" whileInView="visible" viewport={ENTRADA.viewport}>
      {etapas.map((e, i) => {
        const ultima = i === etapas.length - 1;
        return (
          <li key={e.etapa} className="grid grid-cols-[2.5rem_1fr] gap-4">
            <div className="flex flex-col items-center">
              {ultima ? (
                <motion.svg
                  variants={avion}
                  viewBox="0 0 40 28"
                  aria-hidden="true"
                  className="w-9 h-7 shrink-0 text-titulo"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                >
                  <path d="M1 12 L39 1 L25 27 L18 16 Z M18 16 L39 1 M18 16 L17 25 L22 20" />
                </motion.svg>
              ) : (
                <motion.span
                  variants={punto(i === 0 ? 0.3 : 1.0)}
                  aria-hidden="true"
                  className="mt-1.5 w-3 h-3 shrink-0 rounded-full border-[1.4px] border-titulo"
                />
              )}

              {/* el rizo solo en el primer tramo, como en el mural */}
              {i === 0 && (
                <motion.svg
                  variants={trazo(0.7, 0.35)}
                  viewBox="0 0 40 80"
                  aria-hidden="true"
                  className="w-10 flex-1 min-h-20 my-1 text-titulo/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                >
                  <path d="M20 0 C20 16, 34 22, 32 38 C30 54, 8 52, 10 38 C12 26, 32 34, 28 56 C26 68, 20 70, 20 80" />
                </motion.svg>
              )}
              {i > 0 && !ultima && (
                <motion.span
                  variants={trazo(0.4, 1.05)}
                  aria-hidden="true"
                  className="flex-1 border-l-[1.4px] border-dashed border-titulo/70 my-1.5"
                />
              )}
            </div>

            <div className={ultima ? "pt-1" : "pb-9"}>
              <p className="text-xs uppercase tracking-[0.14em] text-suave mb-1">
                {e.etapa}
              </p>
              <p className="text-cuerpo font-light leading-relaxed">{e.texto}</p>
            </div>
          </li>
        );
      })}
    </motion.ol>
  );
};

export default Recorrido;
