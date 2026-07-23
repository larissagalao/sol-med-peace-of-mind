import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/wedding-regions-in-spain-compared")({
  head: () => buildPostHead("wedding-regions-in-spain-compared", "en"),
  component: () => <ArticlePage postKey="wedding-regions-in-spain-compared" lang="en" />,
});
