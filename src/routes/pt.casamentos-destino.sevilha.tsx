import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/pt/casamentos-destino/sevilha")({
  head: () => buildRegionHead("seville", "pt"),
  component: () => <RegionPage regionKey="seville" lang="pt" />,
});
