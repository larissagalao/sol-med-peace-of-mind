import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/custo-de-um-casamento-na-espanha")({
  head: () => buildPostHead("cost-of-a-wedding-in-spain", "pt"),
  component: () => <ArticlePage postKey="cost-of-a-wedding-in-spain" lang="pt" />,
});
