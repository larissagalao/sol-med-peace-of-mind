import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/why-get-married-in-spain")({
  head: () => buildPostHead("why-get-married-in-spain", "en"),
  component: () => <ArticlePage postKey="why-get-married-in-spain" lang="en" />,
});
