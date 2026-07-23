import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/page-views/BlogIndexPage";
import { buildBlogIndexHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/")({
  head: () => buildBlogIndexHead("en"),
  component: () => <BlogIndexPage lang="en" />,
});
