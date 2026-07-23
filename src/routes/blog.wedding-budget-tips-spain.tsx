import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/wedding-budget-tips-spain")({
  head: () => buildPostHead("wedding-budget-tips-spain", "en"),
  component: () => <ArticlePage postKey="wedding-budget-tips-spain" lang="en" />,
});
