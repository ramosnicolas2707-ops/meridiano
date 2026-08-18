import { process } from "@/data/home";
import { Reveal } from "./Reveal";

/**
 * Proceso de trabajo.
 *
 * Está en el sitio porque cada paso trae información contractual concreta: quién
 * entrega qué, cuándo se paga, cuántas revisiones hay. Un proceso genérico de
 * cuatro pasos no aportaría nada al cliente y no estaría aquí.
 */
export function Process() {
  return (
    <ol className="mt-14 border-l border-hairline">
      {process.steps.map((paso, i) => (
        <li key={paso.n} className="relative">
          <Reveal delay={i * 0.05} className="pb-12 pl-7 sm:pl-10">
            {/* Nodo de la costura: marca cada paso sobre la línea. */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 h-0.5 w-4 -translate-x-px bg-brasa"
            />

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="tnum kicker text-brasa">{paso.n}</span>
              <h3 className="text-balance font-display text-xl sm:text-2xl">
                {paso.title}
              </h3>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-niebla sm:text-base">
              {paso.body}
            </p>

            <p className="mt-3 text-sm font-medium text-tiza">{paso.you}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
