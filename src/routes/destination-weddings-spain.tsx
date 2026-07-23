import { createFileRoute, redirect } from "@tanstack/react-router";

// 301 redirect: the old destination page has been consolidated into the
// regions hub. Both server-rendered requests and client navigations resolve
// via the beforeLoad redirect below.
export const Route = createFileRoute("/destination-weddings-spain")({
  beforeLoad: () => {
    throw redirect({
      to: "/destination-weddings/spain-regions",
      statusCode: 301,
    });
  },
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/destination-weddings/spain-regions" },
        }),
    },
  },
});
