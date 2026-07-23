import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/erros-comuns-ao-planejar-casamento-na-espanha")({
  head: () => buildPostHead("common-mistakes-planning-a-wedding-in-spain", "pt"),
  component: () => <ArticlePage postKey="common-mistakes-planning-a-wedding-in-spain" lang="pt" />,
});
