import type { Metadata } from "next";
import { Container, Cta, Kicker, Section } from "@/components/ui";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada | Meridiano" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section plano="carbon" className="pt-40 md:pt-48">
      <Container>
        <div className="costura-filete max-w-3xl">
          <Kicker>Error 404</Kicker>
          <h1 className="mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Esta dirección no existe
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-niebla">
            El enlace está roto o la página cambió de sitio. Desde aquí puedes
            volver al inicio o ir directo a un servicio.
          </p>

          <div className="mt-10">
            <Cta href="/">Volver al inicio</Cta>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="enlace-costura text-sm text-niebla hover:text-tiza"
                >
                  {service.card}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
