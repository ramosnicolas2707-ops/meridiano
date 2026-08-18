import type { Metadata } from "next";

import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Container, Kicker, Section } from "@/components/ui";
import type { Faq } from "@/data/services";
import { conditions, site, whatsappLink } from "@/data/site";
import { breadcrumbLd, buildMetadata, faqLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contacto: cotiza tu página web o tienda online",
  description:
    "Escribe a Meridiano por WhatsApp o correo. Respuesta en menos de 24 horas hábiles con alcance, precio y fecha. Estudio de desarrollo web en Bogotá, Colombia.",
  path: "/contacto",
  keywords: ["contactar desarrollador web Colombia", "cotizar página web"],
});

const migas: Crumb[] = [
  { name: "Inicio", path: "/" },
  { name: "Contacto", path: "/contacto" },
];

const faqContacto: Faq[] = [
  {
    q: "¿En cuánto tiempo responde Meridiano?",
    a: "En menos de 24 horas hábiles, de lunes a viernes entre 8:00 y 18:00, hora de Colombia. La respuesta incluye alcance, precio y fecha estimada de entrega.",
  },
  {
    q: "¿La primera llamada tiene costo?",
    a: "No. La llamada inicial de 30 minutos es gratuita y sirve para revisar si Meridiano es el estudio correcto para el proyecto. Si no lo es, se dice en esa misma llamada.",
  },
  {
    q: "¿Qué información conviene tener lista antes de escribir?",
    a: "Qué vendes o qué haces, cuántos productos o páginas necesitas, para cuándo lo necesitas y dos o tres ejemplos de sitios que te gusten. Con eso alcanza para cotizar.",
  },
];

export default function Contacto() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(migas), faqLd(faqContacto)]} />

      <Section plano="carbon" className="pt-32 md:pt-40 lg:pt-44">
        <Container>
          <Breadcrumbs items={migas} />

          <div className="costura-filete mt-10 max-w-4xl">
            <Kicker>Contacto</Kicker>
            <h1 className="mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
              Cuéntanos qué necesitas construir
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-tiza">
              Respondemos en menos de 24 horas hábiles con alcance, precio y
              fecha. Si tu proyecto no es para nosotros, te lo decimos en la
              primera llamada.
            </p>
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <ContactForm />

            <div className="border-t border-hairline pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h2 className="kicker text-niebla">Canales directos</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a
                    href={whatsappLink(
                      "Hola Meridiano. Quiero cotizar un proyecto.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="enlace-costura"
                  >
                    Escribir por WhatsApp
                  </a>
                  <span className="tnum mt-1 block text-niebla">
                    {site.contact.whatsappDisplay}
                  </span>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="enlace-costura"
                  >
                    {site.contact.email}
                  </a>
                </li>
              </ul>

              <h2 className="kicker mt-10 text-niebla">Dónde estamos</h2>
              <p className="mt-4 text-sm leading-relaxed text-niebla">
                {site.address.city}, {site.address.country}. Trabajamos de forma
                remota con clientes en {site.serviceArea.slice(1, -1).join(", ")}{" "}
                y {site.serviceArea[site.serviceArea.length - 1]}.
              </p>

              <h2 className="kicker mt-10 text-niebla">Horario</h2>
              <p className="mt-4 text-sm leading-relaxed text-niebla">
                Lunes a viernes, 8:00 a 18:00, hora de Colombia (GMT-5).
              </p>

              <h2 className="kicker mt-10 text-niebla">Condiciones</h2>
              <dl className="mt-4 space-y-4">
                {conditions.map((c) => (
                  <div key={c.label}>
                    <dt className="text-sm font-medium text-tiza">
                      {c.label}: <span className="text-brasa">{c.value}</span>
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-niebla">
                      {c.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section plano="pizarra">
        <Container>
          <Reveal className="costura-filete max-w-3xl">
            <Kicker>Preguntas frecuentes</Kicker>
            <h2
              id="faq-contacto"
              className="mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl"
            >
              Antes de escribir
            </h2>
          </Reveal>
          <div className="mt-12">
            <FaqList faqs={faqContacto} titleId="faq-contacto" />
          </div>
        </Container>
      </Section>
    </>
  );
}
