import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Proyectos de Meridiano en producción";

export default function Image() {
  return renderOg({
    kicker: "Proyectos",
    title: "Trabajo que ya está en producción",
  });
}
