import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage, testimonialsJsonLd } from "@/page-views/TestimonialsPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/testimonials")({
  head: () => {
    const base = buildHead({ pageId: "testimonials", lang: "en" });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(testimonialsJsonLd("en")) },
      ],
    };
  },
  component: () => <TestimonialsPage lang="en" />,
});
