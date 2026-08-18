import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const service = getService("paginas-web")!;

export const metadata: Metadata = buildMetadata({
  title: service.meta.title,
  description: service.meta.description,
  path: "/servicios/paginas-web",
  keywords: service.keywords,
});

export default function Page() {
  return <ServicePage service={service} />;
}
