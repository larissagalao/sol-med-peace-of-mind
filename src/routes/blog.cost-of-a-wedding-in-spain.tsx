import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/cost-of-a-wedding-in-spain")({
  head: () => buildPostHead("cost-of-a-wedding-in-spain", "en"),
  component: () => <ArticlePage postKey="cost-of-a-wedding-in-spain" lang="en" />,
});
