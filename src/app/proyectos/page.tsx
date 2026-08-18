import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Container, Kicker, Section } from "@/components/ui";
import { projects } from "@/data/projects";
import { breadcrumbLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos: e-commerce, páginas web y menús con realidad aumentada",
  description:
    "Casos de Meridiano: un catálogo de más de 700 referencias, tiendas con cierre por WhatsApp, un menú con realidad aumentada de 15 platos y sitios corporativos con blog.",
  path: "/proyectos",
  keywords: [
    "portafolio desarrollo web Colombia",
    "casos de e-commerce Latinoamérica",
    "menú con realidad aumentada",
  ],
});

const migas: Crumb[] = [
  { name: "Inicio", path: "/" },
  { name: "Proyectos", path: "/proyectos" },
];

export default function Proyectos() {
  return (
    <>
      <JsonLd data={breadcrumbLd(migas)} />

      <Section plano="carbon" className="pt-32 md:pt-40 lg:pt-44">
        <Container>
          <Breadcrumbs items={migas} />

          <div className="costura-filete mt-10 max-w-4xl">
            <Kicker>Proyectos</Kicker>
            <h1 className="mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
              Trabajo que ya está en producción
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-tiza">
              Cada caso dice qué estaba roto, qué se construyó y con qué cifras.
              Los nombres están reservados hasta tener autorización escrita de
              cada cliente.
            </p>
          </div>
        </Container>
      </Section>

      <Section plano="pizarra">
        <Container>
          <ul className="space-y-20 lg:space-y-28">
            {projects.map((project, i) => (
              <li key={project.slug}>
                <Reveal>
                  <article className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                    <div
                      className={
                        i % 2 === 1 ? "lg:order-2 lg:pl-4" : "lg:pr-4"
                      }
                    >
                      <div className="relative aspect-[8/5] overflow-hidden border border-hairline bg-humo">
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={i === 0}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="kicker text-brasa">
                          {project.serviceLabel}
                        </span>
                        <span aria-hidden="true" className="text-niebla">
                          ·
                        </span>
                        <span className="kicker text-niebla">
                          {project.city}
                        </span>
                        <span aria-hidden="true" className="text-niebla">
                          ·
                        </span>
                        <span className="kicker tnum text-niebla">
                          {project.year}
                        </span>
                      </div>

                      <h2 className="mt-5 text-balance text-2xl leading-tight sm:text-3xl">
                        {project.name}
                      </h2>

                      <p className="mt-5 text-base leading-relaxed text-tiza">
                        {project.summary}
                      </p>

                      <div className="mt-7 space-y-4 border-l-2 border-brasa pl-5">
                        <p className="text-sm leading-relaxed text-niebla">
                          <strong className="font-medium text-tiza">
                            El problema.{" "}
                          </strong>
                          {project.challenge}
                        </p>
                        <p className="text-sm leading-relaxed text-niebla">
                          <strong className="font-medium text-tiza">
                            Qué se hizo.{" "}
                          </strong>
                          {project.outcome}
                        </p>
                      </div>

                      <dl className="mt-8 grid gap-6 border-t border-hairline pt-6 sm:grid-cols-3">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <dt className="text-xs leading-snug text-niebla">
                              {m.label}
                            </dt>
                            <dd className="tnum mt-1 font-display text-xl text-brasa">
                              {m.value}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <ul className="mt-7 flex flex-wrap gap-2">
                        {project.stack.map((t) => (
                          <li
                            key={t}
                            className="border border-hairline px-3 py-1.5 text-xs text-niebla"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/servicios/${project.service}`}
                        className="enlace-costura mt-8 inline-block text-sm"
                      >
                        Ver planes de {project.serviceLabel.toLowerCase()}
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta mensaje="Hola Meridiano. Vi los proyectos y quiero hablar del mío." />
    </>
  );
}
