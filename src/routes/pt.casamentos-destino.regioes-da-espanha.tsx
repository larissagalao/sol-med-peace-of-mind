import { createFileRoute } from "@tanstack/react-router";
import { RegionHubPage } from "@/page-views/RegionHubPage";
import { buildHubHead } from "@/lib/region-head";

export const Route = createFileRoute("/pt/casamentos-destino/regioes-da-espanha")({
  head: () => buildHubHead("pt"),
  component: () => <RegionHubPage lang="pt" />,
});
