"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, whatsappLink } from "@/data/site";

const MENSAJE_WA =
  "Hola Meridiano. Vengo de la web y quiero contarles un proyecto.";

export function Nav() {
  const [abierto, setAbierto] = useState(false);
  const [desplazado, setDesplazado] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const alScroll = () => setDesplazado(window.scrollY > 24);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  // El menú móvil se cierra al navegar y con Escape.
  useEffect(() => setAbierto(false), [pathname]);

  useEffect(() => {
    if (!abierto) return;
    const alTeclado = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    document.addEventListener("keydown", alTeclado);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", alTeclado);
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 motion-reduce:transition-none ${
        desplazado || abierto
          ? "border-b border-hairline bg-carbon/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-[4.5rem] w-full max-w-[var(--ancho-contenido)] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — ir al inicio`}
        >
          {/* El logotipo es la costura: una línea de 2 px. */}
          <span
            aria-hidden="true"
            className="block h-4 w-0.5 bg-brasa transition-[height] duration-300 group-hover:h-5 motion-reduce:transition-none"
          />
          <span className="font-display text-lg tracking-tight">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const activo = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={activo ? "page" : undefined}
                  className={`enlace-costura text-sm ${
                    activo ? "text-brasa" : "text-niebla hover:text-tiza"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="hidden text-sm text-niebla transition-colors hover:text-tiza sm:block lg:hidden xl:block motion-reduce:transition-none"
          >
            Contacto
          </Link>
          <a
            href={whatsappLink(MENSAJE_WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-brasa px-4 py-2.5 text-sm font-medium text-carbon transition-colors duration-300 hover:bg-tiza sm:inline-block motion-reduce:transition-none"
          >
            Escribir por WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="sr-only">
              {abierto ? "Cerrar el menú" : "Abrir el menú"}
            </span>
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-tiza transition-transform duration-300 motion-reduce:transition-none ${
                  abierto ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-tiza transition-transform duration-300 motion-reduce:transition-none ${
                  abierto ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {abierto ? (
        <div
          id="menu-movil"
          className="border-t border-hairline bg-carbon lg:hidden"
        >
          <ul className="mx-auto w-full max-w-[var(--ancho-contenido)] px-5 py-4 sm:px-8">
            {[...nav, { href: "/contacto", label: "Contacto" }].map((item) => (
              <li key={item.href} className="border-b border-hairline last:border-0">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-4 text-base"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-brasa">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto w-full max-w-[var(--ancho-contenido)] px-5 pb-6 sm:px-8">
            <a
              href={whatsappLink(MENSAJE_WA)}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brasa px-4 py-3.5 text-center text-sm font-medium text-carbon"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
