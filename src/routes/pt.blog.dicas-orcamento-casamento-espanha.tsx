import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/dicas-orcamento-casamento-espanha")({
  head: () => buildPostHead("wedding-budget-tips-spain", "pt"),
  component: () => <ArticlePage postKey="wedding-budget-tips-spain" lang="pt" />,
});
