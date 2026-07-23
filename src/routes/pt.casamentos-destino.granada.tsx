import { createFileRoute } from "@tanstack/react-router";
import { RegionPage } from "@/page-views/RegionPage";
import { buildRegionHead } from "@/lib/region-head";

export const Route = createFileRoute("/pt/casamentos-destino/granada")({
  head: () => buildRegionHead("granada", "pt"),
  component: () => <RegionPage regionKey="granada" lang="pt" />,
});
