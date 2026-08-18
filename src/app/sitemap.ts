import type { MetadataRoute } from "next";
import { serviceSlugs } from "@/data/services";
import { site } from "@/data/site";

/** Sitemap generado por código: si se añade un servicio, aparece solo. */
export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  const rutas = [
    { path: "/", priority: 1 },
    ...serviceSlugs.map((slug) => ({
      path: `/servicios/${slug}`,
      priority: 0.9,
    })),
    { path: "/proyectos", priority: 0.7 },
    { path: "/contacto", priority: 0.7 },
  ];

  return rutas.map(({ path, priority }) => ({
    url: new URL(path, site.url).toString(),
    lastModified: ahora,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
