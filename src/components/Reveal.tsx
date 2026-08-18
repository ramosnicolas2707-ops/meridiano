"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Retardo en segundos. Para escalonar listas: index * 0.06. */
  delay?: number;
};

/**
 * Revelado al entrar en viewport. Una sola animación en todo el sitio:
 * opacidad y 24 px de desplazamiento vertical. Nada más.
 *
 * Con prefers-reduced-motion el contenido se renderiza visible y quieto.
 *
 * La clase `revelado` no es decorativa: el HTML sale del servidor con el estado
 * inicial (opacidad 0) y, si el usuario tiene el movimiento reducido, React no
 * limpia ese estilo en línea durante la hidratación. La regla CSS asociada a
 * esta clase fuerza la visibilidad y evita que la sección quede en blanco.
 */
export function Reveal({ children, className = "", delay = 0 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={`revelado ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`revelado ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
