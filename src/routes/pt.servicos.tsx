import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/page-views/ServicesPage";
import { buildHead } from "@/lib/page-head";
import { servicesJsonLd } from "@/lib/services-jsonld";

export const Route = createFileRoute("/pt/servicos")({
  head: () => {
    const base = buildHead({ pageId: "services", lang: "pt" });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(servicesJsonLd("pt")) },
      ],
    };
  },
  component: () => <ServicesPage lang="pt" />,
});
