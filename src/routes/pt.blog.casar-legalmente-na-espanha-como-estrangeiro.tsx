import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/casar-legalmente-na-espanha-como-estrangeiro")({
  head: () => buildPostHead("getting-married-in-spain-legal-requirements", "pt"),
  component: () => <ArticlePage postKey="getting-married-in-spain-legal-requirements" lang="pt" />,
});
