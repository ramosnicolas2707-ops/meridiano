import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--ancho-contenido)] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Sección con plano de profundidad. La separación entre secciones se hace por
 * cambio de fondo y por aire, nunca con un borde visible.
 */
export function Section({
  children,
  plano = "carbon",
  className = "",
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  plano?: "carbon" | "pizarra" | "humo";
  className?: string;
  id?: string;
  as?: "section" | "div";
}) {
  const fondo = {
    carbon: "bg-carbon",
    pizarra: "bg-pizarra",
    humo: "bg-humo",
  }[plano];

  return (
    <Tag
      id={id}
      className={`relative ${fondo} py-20 md:py-28 lg:py-32 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker text-brasa">{children}</p>;
}

/**
 * Encabezado de sección. El filete izquierdo es la costura del hero,
 * ya convertida en regla de 2 px.
 */
export function SectionHeader({
  kicker,
  title,
  intro,
  level = 2,
  className = "",
}: {
  kicker?: string;
  title: string;
  intro?: string;
  level?: 2 | 3;
  className?: string;
}) {
  const Heading = level === 2 ? "h2" : "h3";

  return (
    <Reveal className={`costura-filete max-w-3xl ${className}`}>
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <Heading
        className={`mt-4 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl`}
      >
        {title}
      </Heading>
      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-niebla sm:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  /** true para wa.me, mailto y enlaces fuera del sitio. */
  external?: boolean;
  className?: string;
};

/**
 * Botón. El texto dice exactamente qué pasa al pulsarlo y se mantiene igual
 * en todo el flujo: si aquí dice "Escribir por WhatsApp", en el destino
 * también dice "Escribir por WhatsApp".
 */
export function Cta({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: CtaProps) {
  const base =
    "group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 motion-reduce:transition-none";

  const estilos =
    variant === "solid"
      ? "bg-brasa text-carbon hover:bg-tiza"
      : "border border-hairline-fuerte text-tiza hover:border-brasa hover:text-brasa";

  const contenido = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${estilos} ${className}`}
      >
        {contenido}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${estilos} ${className}`}>
      {contenido}
    </Link>
  );
}

/** Lista con marca de check. Se usa en "qué incluye" y en los planes. */
export function ListaSi({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-tiza">
          <span aria-hidden="true" className="mt-[0.35rem] shrink-0 text-brasa">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 6.2 4.3 9.5 11 2.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Lista de exclusiones. Sin color de alarma: es información, no advertencia. */
export function ListaNo({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 border-b border-hairline pb-4 text-sm leading-relaxed text-niebla last:border-0"
        >
          <span aria-hidden="true" className="mt-[0.45rem] shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
