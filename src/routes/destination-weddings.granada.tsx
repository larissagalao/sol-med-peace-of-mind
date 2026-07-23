import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/destination-weddings/granada")({
  head: () => buildRegionHead("granada", "en"),
  component: () => <RegionPage regionKey="granada" lang="en" />,
});
