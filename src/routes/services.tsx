import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/page-views/ServicesPage";
import { buildHead } from "@/lib/page-head";
import { servicesJsonLd } from "@/lib/services-jsonld";

export const Route = createFileRoute("/services")({
  head: () => {
    const base = buildHead({ pageId: "services", lang: "en" });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(servicesJsonLd("en")) },
      ],
    };
  },
  component: () => <ServicesPage lang="en" />,
});
