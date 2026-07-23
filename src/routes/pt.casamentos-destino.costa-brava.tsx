import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/pt/casamentos-destino/costa-brava")({
  head: () => buildRegionHead("costa-brava", "pt"),
  component: () => <RegionPage regionKey="costa-brava" lang="pt" />,
});
