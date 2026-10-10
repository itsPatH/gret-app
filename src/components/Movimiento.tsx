"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "framer-motion";

/**
 * Una sola escala de movimiento para todo el sitio. Antes el formulario
 * entraba con 20 px en 0,5 s y el pie con 40 px en 0,6 s; por encima de
 * ~20 px o ~400 ms la entrada se percibe lenta en vez de natural.
 */
export const ENTRADA = {
  duracion: 0.4,
  desplazamiento: 16,
  curva: [0.22, 1, 0.36, 1] as const,
  // se dispara un poco después de asomar, no en el primer píxel
  viewport: { once: true, margin: "0px 0px -60px 0px" },
};

/**
 * Respeta prefers-reduced-motion en todo lo que esté debajo: con la
 * preferencia activa, framer-motion salta los desplazamientos y rotaciones
 * directamente a su estado final y solo conserva los fundidos. Hay gente
 * que la activa por mareo o migraña.
 */
export const MovimientoConfig = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

/** Fundido con subida corta al entrar en pantalla, una sola vez. */
export const Aparecer = ({
  children,
  retraso = 0,
  className,
}: {
  children: ReactNode;
  retraso?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: ENTRADA.desplazamiento }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={ENTRADA.viewport}
    transition={{ duration: ENTRADA.duracion, ease: ENTRADA.curva, delay: retraso }}
  >
    {children}
  </motion.div>
);

/**
 * El retrato del Hero entra como una foto que se deja sobre la mesa: un
 * par de grados de giro que se asientan en cero.
 *
 * Sin fundido a propósito: es el elemento más grande de la primera pantalla
 * y Chrome no cuenta como pintado un elemento con opacidad cero, así que
 * hacerlo aparecer desde transparente retrasaría el LCP.
 */
export const FotoAsentandose = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.figure
    className={className}
    initial={{ rotate: -2.5, y: 10 }}
    animate={{ rotate: 0, y: 0 }}
    transition={{ duration: 0.7, ease: ENTRADA.curva, delay: 0.15 }}
  >
    {children}
  </motion.figure>
);
