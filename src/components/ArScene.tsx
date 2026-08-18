"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { arSection } from "@/data/home";
import { Container, Kicker } from "./ui";
import { Reveal } from "./Reveal";

/**
 * El momento del menú con realidad aumentada.
 *
 * Es la única escena del sitio que se permite algo más que un fundido, y sigue
 * subordinada a la costura: el plato se despega de la mesa al entrar en viewport
 * y la sombra se cierra debajo. Representación abstracta a propósito — un render
 * falso de un plato real sería peor que una figura honesta.
 */
export function ArScene() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "center 0.45"],
  });

  const alturaPlato = useTransform(scrollYProgress, [0, 1], [44, -52]);
  const escalaSombra = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacidadSombra = useTransform(scrollYProgress, [0, 1], [0.55, 0.25]);

  return (
    <section className="relative bg-pizarra py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="costura-filete max-w-xl">
            <Kicker>{arSection.kicker}</Kicker>
            <h2 className="mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-[3.25rem]">
              {arSection.title}
            </h2>

            {arSection.body.map((parrafo) => (
              <p
                key={parrafo.slice(0, 24)}
                className="mt-5 text-base leading-relaxed text-niebla"
              >
                {parrafo}
              </p>
            ))}

            <ol className="mt-10 space-y-4">
              {arSection.steps.map((paso) => (
                <li key={paso.n} className="flex gap-4 text-sm text-tiza">
                  <span className="tnum shrink-0 font-display text-brasa">
                    {paso.n}
                  </span>
                  {paso.text}
                </li>
              ))}
            </ol>

            <Link
              href={arSection.href}
              className="group mt-10 inline-flex items-center gap-2.5 bg-brasa px-6 py-3.5 text-sm font-medium text-carbon transition-colors duration-300 hover:bg-tiza motion-reduce:transition-none"
            >
              {arSection.cta}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              >
                →
              </span>
            </Link>
          </div>

          {/* La escena. Decorativa: todo lo que dice está también en el texto. */}
          <Reveal className="justify-self-center lg:justify-self-end">
            <div
              ref={ref}
              aria-hidden="true"
              className="relative h-[26rem] w-[17rem] select-none sm:h-[30rem] sm:w-[19rem]"
              style={{ perspective: "900px" }}
            >
              {/* Marco de teléfono: lo que el comensal tiene en la mano. */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-hairline-fuerte bg-carbon shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
                {/* Vista de cámara: la mesa, en perspectiva. */}
                <div className="absolute inset-0 bg-[radial-gradient(130%_90%_at_50%_15%,#232323_0%,#0a0a0a_72%)]">
                  {/* La mesa. Plano claro para que la sombra del plato se vea. */}
                  <div
                    className="absolute inset-x-[-55%] bottom-[-14%] h-[76%]"
                    style={{
                      transform: "rotateX(66deg)",
                      transformOrigin: "bottom center",
                      backgroundColor: "rgba(237,234,227,.055)",
                      backgroundImage:
                        "linear-gradient(rgba(237,234,227,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(237,234,227,.14) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                      maskImage:
                        "linear-gradient(to bottom, transparent, #000 35%)",
                    }}
                  />

                  {/* Sombra proyectada. Se cierra a medida que el plato sube. */}
                  <motion.div
                    style={
                      reduce
                        ? { scale: 0.72, opacity: 0.3 }
                        : { scale: escalaSombra, opacity: opacidadSombra }
                    }
                    className="absolute bottom-[31%] left-1/2 h-7 w-48 -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,#000_35%,transparent_100%)] blur-[6px]"
                  />

                  {/* El plato, despegado de la mesa. */}
                  <motion.div
                    style={reduce ? { y: -58 } : { y: alturaPlato }}
                    className="absolute bottom-[30%] left-1/2 flex -translate-x-1/2 flex-col items-center"
                  >
                    <div
                      className="relative h-[7.5rem] w-52"
                      style={{ transform: "rotateX(62deg)" }}
                    >
                      <div className="absolute inset-0 rounded-[50%] border-2 border-brasa/70 bg-[radial-gradient(closest-side,#2a2a2a,#131313)] shadow-[0_0_60px_-10px_rgba(255,92,26,.55)]" />
                      <div className="absolute inset-[16%] rounded-[50%] border border-hairline-fuerte" />
                      <div className="absolute inset-[33%] rounded-[50%] bg-brasa/70" />
                    </div>

                    {/* Etiqueta anclada al objeto, como en una vista de AR. */}
                    <div className="-mt-3 flex items-center gap-2 border border-hairline-fuerte bg-carbon/90 px-3 py-1.5 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-brasa" />
                      <span className="text-[0.7rem] text-tiza">
                        Lomo al carbón
                      </span>
                      <span className="kicker text-brasa">3D</span>
                    </div>
                  </motion.div>

                  {/* Código QR sobre la mesa, al fondo. */}
                  <div className="absolute bottom-[11%] left-1/2 h-10 w-10 -translate-x-1/2 border border-hairline-fuerte bg-carbon p-1">
                    <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-px">
                      {[1, 0, 1, 0, 1, 0, 1, 1, 0].map((celda, i) => (
                        <span
                          key={i}
                          className={celda ? "bg-tiza" : "bg-transparent"}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Barra superior del visor. */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4">
                  <span className="kicker text-niebla">Menú AR</span>
                  <span className="kicker text-brasa">A escala real</span>
                </div>

                {/* Pie del visor: refuerza que no hay app de por medio. */}
                <div className="absolute inset-x-0 bottom-0 px-5 py-4 text-center">
                  <span className="kicker text-niebla">
                    Sin descargar nada
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
