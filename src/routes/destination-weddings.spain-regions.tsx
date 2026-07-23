import { createFileRoute } from "@tanstack/react-router";
import { RegionHubPage } from "@/page-views/RegionHubPage";
import { buildHubHead } from "@/lib/region-head";

export const Route = createFileRoute("/destination-weddings/spain-regions")({
  head: () => buildHubHead("en"),
  component: () => <RegionHubPage lang="en" />,
});
