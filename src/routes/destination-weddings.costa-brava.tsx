import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/destination-weddings/costa-brava")({
  head: () => buildRegionHead("costa-brava", "en"),
  component: () => <RegionPage regionKey="costa-brava" lang="en" />,
});
