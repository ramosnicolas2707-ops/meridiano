import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * Se permite explícitamente el paso a los rastreadores de los buscadores con IA.
 * El sitio está escrito para ser citado: precios en tablas, respuestas
 * autocontenidas y datos estructurados. Bloquearlos sería trabajar en contra.
 */
const RASTREADORES_IA = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...RASTREADORES_IA.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
    host: site.url,
  };
}
