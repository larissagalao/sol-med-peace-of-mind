import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/destination-weddings/mallorca")({
  head: () => buildRegionHead("mallorca", "en"),
  component: () => <RegionPage regionKey="mallorca" lang="en" />,
});
