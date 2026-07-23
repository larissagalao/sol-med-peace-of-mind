import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/destination-weddings/seville")({
  head: () => buildRegionHead("seville", "en"),
  component: () => <RegionPage regionKey="seville" lang="en" />,
});
