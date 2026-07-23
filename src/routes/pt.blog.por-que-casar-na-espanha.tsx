import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/por-que-casar-na-espanha")({
  head: () => buildPostHead("why-get-married-in-spain", "pt"),
  component: () => <ArticlePage postKey="why-get-married-in-spain" lang="pt" />,
});
