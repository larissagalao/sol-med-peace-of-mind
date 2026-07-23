import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/common-mistakes-planning-a-wedding-in-spain")({
  head: () => buildPostHead("common-mistakes-planning-a-wedding-in-spain", "en"),
  component: () => <ArticlePage postKey="common-mistakes-planning-a-wedding-in-spain" lang="en" />,
});
