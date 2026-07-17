import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage, testimonialsJsonLd } from "@/page-views/TestimonialsPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/pt/depoimentos")({
  head: () => {
    const base = buildHead({ pageId: "testimonials", lang: "pt" });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(testimonialsJsonLd("pt")) },
      ],
    };
  },
  component: () => <TestimonialsPage lang="pt" />,
});
