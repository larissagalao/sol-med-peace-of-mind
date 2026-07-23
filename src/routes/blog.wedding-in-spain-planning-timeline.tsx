import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/wedding-in-spain-planning-timeline")({
  head: () => buildPostHead("wedding-in-spain-planning-timeline", "en"),
  component: () => <ArticlePage postKey="wedding-in-spain-planning-timeline" lang="en" />,
});
