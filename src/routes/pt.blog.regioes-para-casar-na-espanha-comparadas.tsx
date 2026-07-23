import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/regioes-para-casar-na-espanha-comparadas")({
  head: () => buildPostHead("wedding-regions-in-spain-compared", "pt"),
  component: () => <ArticlePage postKey="wedding-regions-in-spain-compared" lang="pt" />,
});
