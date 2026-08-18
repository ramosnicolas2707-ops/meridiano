"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const ANCHO_CONTENIDO = 1248; // = --ancho-contenido, en px

/**
 * La costura, ya fuera del hero.
 *
 * Entra desde el centro de la pantalla —exactamente donde estaba la costura del
 * hero, que se apaga a la vez— y se va al margen izquierdo, donde se queda como
 * indicador de progreso durante el resto de la página. Es la misma línea.
 *
 * Se oculta por debajo de 768 px: en móvil no hay margen que le sobre.
 */
export function ScrollSeam() {
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const [vp, setVp] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const medir = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, []);

  const margen = Math.max(24, (vp.w - ANCHO_CONTENIDO) / 2);
  const centro = vp.w / 2 - 1;
  const recorrido = Math.max(vp.h * 0.8, 1);

  const left = useTransform(
    scrollY,
    [0, recorrido],
    reduce ? [margen, margen] : [centro, margen],
    { clamp: true },
  );

  const opacity = useTransform(
    scrollY,
    [recorrido * 0.3, recorrido * 0.85],
    [0, 1],
    { clamp: true },
  );

  const avance = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // Sin medidas todavía (primer render en servidor y en cliente): no se pinta.
  if (vp.w === 0) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ left, opacity }}
      className="pointer-events-none fixed inset-y-0 z-30 hidden w-0.5 md:block"
    >
      <div className="absolute inset-0 bg-hairline" />
      <motion.div
        style={{ scaleY: reduce ? scrollYProgress : avance }}
        className="absolute inset-0 origin-top bg-brasa"
      />
    </motion.div>
  );
}
