import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contactar a Meridiano";

export default function Image() {
  return renderOg({
    kicker: "Contacto",
    title: "Cuéntanos qué necesitas construir",
    price: "Respuesta en 24 h hábiles",
  });
}
