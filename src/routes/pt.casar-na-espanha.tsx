import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/pt/casar-na-espanha")({
  beforeLoad: () => {
    throw redirect({
      to: "/pt/casamentos-destino/regioes-da-espanha",
      statusCode: 301,
    });
  },
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/pt/casamentos-destino/regioes-da-espanha" },
        }),
    },
  },
});
