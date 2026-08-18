import type { Faq } from "@/data/services";
import { Reveal } from "./Reveal";

/**
 * Preguntas frecuentes en acordeón nativo.
 *
 * Cada respuesta está escrita para poder leerse suelta, fuera de su contexto:
 * repite el sujeto, incluye la cifra y no depende del párrafo anterior. Esa es la
 * diferencia entre una respuesta que un buscador generativo puede citar y una que
 * no. El HTML contiene siempre el texto completo, abierto o cerrado.
 */
export function FaqList({
  faqs,
  titleId,
}: {
  faqs: readonly Faq[];
  titleId?: string;
}) {
  return (
    <div aria-labelledby={titleId} className="border-t border-hairline">
      {faqs.map((faq, i) => (
        <Reveal key={faq.q} delay={Math.min(i, 5) * 0.04}>
          <details className="group border-b border-hairline">
            <summary className="flex items-start justify-between gap-6 py-6 text-left">
              <h3 className="max-w-2xl text-balance font-display text-lg leading-snug text-tiza transition-colors duration-300 group-hover:text-brasa motion-reduce:transition-none sm:text-xl">
                {faq.q}
              </h3>
              <span aria-hidden="true" className="faq-marca" />
            </summary>
            <p className="max-w-2xl pb-7 text-sm leading-relaxed text-niebla sm:text-base">
              {faq.a}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
