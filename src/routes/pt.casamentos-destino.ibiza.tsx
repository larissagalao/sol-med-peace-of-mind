import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/pt/casamentos-destino/ibiza")({
  head: () => buildRegionHead("ibiza", "pt"),
  component: () => <RegionPage regionKey="ibiza" lang="pt" />,
});
