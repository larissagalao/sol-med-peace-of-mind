import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/getting-married-in-spain-legal-requirements")({
  head: () => buildPostHead("getting-married-in-spain-legal-requirements", "en"),
  component: () => <ArticlePage postKey="getting-married-in-spain-legal-requirements" lang="en" />,
});
