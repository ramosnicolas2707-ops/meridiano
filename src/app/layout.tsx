import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollSeam } from "@/components/ScrollSeam";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import { organizationLd, websiteLd } from "@/lib/seo";

/**
 * next/font descarga los binarios en tiempo de build y los sirve desde el propio
 * dominio. No queda ninguna petición a fonts.googleapis.com en tiempo de
 * ejecución, así que la fuente nunca bloquea el primer render.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
  variable: "--fuente-display",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.claim,
  applicationName: site.name,
  authors: [{ name: site.founder.name }],
  creator: site.name,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={`${fraunces.variable} ${archivo.variable}`}>
      <body className="antialiased">
        {/* Datos estructurados de organización y de sitio, en todas las páginas. */}
        <JsonLd data={[organizationLd(), websiteLd()]} />

        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-brasa focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-carbon"
        >
          Saltar al contenido
        </a>

        <ScrollSeam />
        <Nav />

        <main id="contenido">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
