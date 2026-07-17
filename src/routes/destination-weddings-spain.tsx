import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage, destinationArticleJsonLd } from "@/page-views/DestinationPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/destination-weddings-spain")({
  head: () => {
    const base = buildHead({ pageId: "destination", lang: "en" });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(destinationArticleJsonLd("en")) },
      ],
    };
  },
  component: () => <DestinationPage lang="en" />,
});
