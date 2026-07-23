import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/pt/casamentos-destino/maiorca")({
  head: () => buildRegionHead("mallorca", "pt"),
  component: () => <RegionPage regionKey="mallorca" lang="pt" />,
});
