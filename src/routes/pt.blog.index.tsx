import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/page-views/BlogIndexPage";
import { buildBlogIndexHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/")({
  head: () => buildBlogIndexHead("pt"),
  component: () => <BlogIndexPage lang="pt" />,
});
