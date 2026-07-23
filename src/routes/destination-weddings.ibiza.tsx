import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/destination-weddings/ibiza")({
  head: () => buildRegionHead("ibiza", "en"),
  component: () => <RegionPage regionKey="ibiza" lang="en" />,
});
