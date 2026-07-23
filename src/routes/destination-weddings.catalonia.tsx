import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/destination-weddings/catalonia")({
  head: () => buildRegionHead("catalonia", "en"),
  component: () => <RegionPage regionKey="catalonia" lang="en" />,
});
