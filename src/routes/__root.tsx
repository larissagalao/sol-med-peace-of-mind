import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "../i18n/LanguageProvider";
import { SITE_CONFIG } from "../config/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-6 flex justify-center">404</div>
        <h1 className="text-5xl">Page not found</h1>
        <p className="mt-4 text-navy/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">This page didn't load</h1>
        <p className="mt-4 text-navy/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-outline">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Sol Mediterraneo Weddings Co.",
  description:
    "Boutique destination wedding planner in Spain, specializing in weddings for international couples.",
  url: SITE_CONFIG.url,
  areaServed: [{ "@type": "Country", name: "Spain" }],
  knowsLanguage: ["en", "pt", "es", "ca"],
  email: SITE_CONFIG.contactEmail,
  address: { "@type": "PostalAddress", addressCountry: "ES" },
  sameAs: [],
};

const GA_ID = SITE_CONFIG.gaMeasurementId;
const GA_INIT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sol Mediterraneo Weddings Co." },
      {
        name: "description",
        content:
          "Boutique destination wedding planner in Spain for international couples. You keep living your life. We take care of everything in Spain.",
      },
      { property: "og:site_name", content: "Sol Mediterraneo Weddings Co." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#faf5ec" },
      { property: "og:title", content: "Sol Mediterraneo Weddings Co." },
      { name: "twitter:title", content: "Sol Mediterraneo Weddings Co." },
      { property: "og:description", content: "Boutique destination wedding planner in Spain for international couples. You keep living your life. We take care of everything in Spain." },
      { name: "twitter:description", content: "Boutique destination wedding planner in Spain for international couples. You keep living your life. We take care of everything in Spain." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa4b7f82-15a4-4f0b-b41e-c8bf1eca534f/id-preview-5b3bf4ad--cbdb4a1e-5f3d-454a-8e72-90fd987913e5.lovable.app-1784320535653.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa4b7f82-15a4-4f0b-b41e-c8bf1eca534f/id-preview-5b3bf4ad--cbdb4a1e-5f3d-454a-8e72-90fd987913e5.lovable.app-1784320535653.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/brand-mark.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ORG_JSONLD) },
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
      { children: GA_INIT },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  const initialLang =
    typeof window !== "undefined" &&
    (window.location.pathname === "/pt" || window.location.pathname.startsWith("/pt/"))
      ? "pt"
      : "en";

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider initialLang={initialLang}>
        {/* Required: nested routes render here. */}
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
