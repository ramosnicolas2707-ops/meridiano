import { finalCta } from "@/data/home";
import { site, whatsappLink } from "@/data/site";
import { Container, Cta, Kicker } from "./ui";
import { Reveal } from "./Reveal";

/**
 * Cierre. El texto de los botones es el mismo que se usa en la nav, en el pie y
 * en la página de contacto: "Escribir por WhatsApp" siempre dice lo mismo y hace
 * siempre lo mismo.
 */
export function FinalCta({
  mensaje = "Hola Meridiano. Quiero contarles un proyecto.",
}: {
  mensaje?: string;
}) {
  return (
    <section className="relative bg-humo py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal className="costura-filete max-w-3xl">
          <Kicker>{finalCta.kicker}</Kicker>
          <h2 className="mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-[3.5rem]">
            {finalCta.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-niebla sm:text-lg">
            {finalCta.body}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Cta href={whatsappLink(mensaje)} external>
              {finalCta.primary}
            </Cta>
            <Cta href={`mailto:${site.contact.email}`} variant="ghost" external>
              {finalCta.secondary}
            </Cta>
          </div>

          <p className="mt-8 text-sm text-niebla">
            O usa el{" "}
            <a href="/contacto" className="enlace-costura hover:text-tiza">
              formulario de contacto
            </a>
            . También leemos {site.contact.email} y contestamos por WhatsApp al{" "}
            <span className="tnum">{site.contact.whatsappDisplay}</span>.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
