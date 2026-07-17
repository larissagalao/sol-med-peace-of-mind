import { createFileRoute } from "@tanstack/react-router";
import { DestinationPage, destinationArticleJsonLd } from "@/page-views/DestinationPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/pt/casar-na-espanha")({
  head: () => {
    const base = buildHead({ pageId: "destination", lang: "pt" });
    return {
      ...base,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(destinationArticleJsonLd("pt")) },
      ],
    };
  },
  component: () => <DestinationPage lang="pt" />,
});
