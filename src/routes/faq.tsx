import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/page-views/FaqPage";
import { faqJsonLd } from "@/components/site/FAQ";
import { getContent } from "@/i18n/content";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/faq")({
  head: () => {
    const base = buildHead({ pageId: "faq", lang: "en" });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(getContent("en").faq.items)) },
      ],
    };
  },
  component: () => <FaqPage lang="en" />,
});
