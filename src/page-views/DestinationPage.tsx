import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import costaBrava from "@/assets/costa-brava.jpg";
import mallorca from "@/assets/mallorca.jpg";
import ibiza from "@/assets/ibiza.jpg";
import barcelona from "@/assets/barcelona.jpg";
import andalusia from "@/assets/andalusia.jpg";
import catalonia from "@/assets/catalonia.jpg";
import oliveGrove from "@/assets/olive-grove.jpg";
import interior from "@/assets/interior.jpg";

// Map keyed by destination.regions[].key
const REGION_IMAGE_BY_KEY: Record<string, string> = {
  barcelona,
  catalonia,
  "costa-brava": costaBrava,
  mallorca,
  ibiza,
  andalusia,
  seville: oliveGrove,
  granada: interior,
};

export function DestinationPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.destination;

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate -mt-20 pt-20 overflow-hidden">
        <img
          src={costaBrava}
          alt="Costa Brava coastline in Spain"
          width={1600}
          height={1100}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/50 to-ivory" aria-hidden />
        <div className="relative container-editorial py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
            <h1 className="text-balance">{t.hero.title}</h1>
            <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed max-w-2xl">{t.hero.body}</p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <div className="eyebrow mb-4">Guide</div>
              <ul className="space-y-3 text-sm">
                {t.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-navy/70 hover:text-gold transition-colors">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5 space-y-20">
            {t.sections.map((s, idx) => (
              <section id={s.id} key={s.id} className="scroll-mt-24">
                <div className="eyebrow mb-4">{String(idx + 1).padStart(2, "0")}</div>
                <h2 className="text-balance">{s.title}</h2>
                <div className="mt-6 space-y-5 text-lg text-navy/80 leading-relaxed">
                  {s.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {s.list && (
                  <ul className="mt-6 space-y-3">
                    {s.list.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-navy/80">
                        <span className="mt-3 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.id === "regions" && (
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {t.regions.map((r) => (
                      <article key={r.key} className="group">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={REGION_IMAGE_BY_KEY[r.key] ?? oliveGrove}
                            alt={`${r.name} wedding scene`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="mt-5 text-navy">{r.name}</h3>
                        <p className="mt-2 text-navy/75 leading-relaxed text-base">{r.body}</p>
                      </article>
                    ))}
                  </div>
                )}

                {s.id === "common-mistakes" && (
                  <ol className="mt-8 space-y-6">
                    {t.mistakes.items.map((it, i) => (
                      <li key={i} className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="font-serif text-3xl text-gold/60 leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-navy/80 leading-relaxed">{it}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            ))}

            <section className="p-10 md:p-14 bg-sand/60 border-l-2 border-gold">
              <h2 className="text-balance">{t.closing.title}</h2>
              <p className="mt-4 text-lg text-navy/80 leading-relaxed">{t.closing.body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={SITE_CONFIG.discoveryCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {c.common.bookCall}
                </a>
                <Link to={ROUTES.services[lang]} className="btn-outline">{c.common.exploreServices}</Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <CTABanner />
    </SiteLayout>
  );
}

export function destinationArticleJsonLd(lang: Lang) {
  const c = getContent(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.destination.meta.title,
    description: c.destination.meta.description,
    inLanguage: lang,
    author: { "@type": "Organization", name: "Sol Mediterraneo Weddings Co." },
    publisher: { "@type": "Organization", name: "Sol Mediterraneo Weddings Co." },
  };
}
