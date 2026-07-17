import type { Lang } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";

export function TestimonialsPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.testimonials;

  return (
    <SiteLayout>
      <section className="container-editorial pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
          <h1 className="text-balance">{t.hero.title}</h1>
          <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed">{t.hero.body}</p>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {t.items.map((it, i) => (
            <figure
              key={i}
              className={`p-10 md:p-14 flex flex-col ${
                i % 3 === 0 ? "bg-sand/50" : i % 3 === 1 ? "bg-ivory border border-border" : "bg-navy text-ivory"
              }`}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className={i % 3 === 2 ? "text-gold-soft" : "text-gold"}
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 7h4v4H7v3h6V7H7zm10 0h-4v4h4v3h-6V7z" opacity=".4" />
                <path d="M9.5 5C6.5 5 4 7.5 4 10.5v6h6v-6H7c0-1.65 1.35-3 3-3l.5-2.5zm10 0c-3 0-5.5 2.5-5.5 5.5v6h6v-6H17c0-1.65 1.35-3 3-3L20 5z" />
              </svg>
              <blockquote className={`mt-6 font-serif text-2xl md:text-[1.65rem] leading-snug flex-1 ${i % 3 === 2 ? "text-ivory" : "text-navy"}`}>
                "{it.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="hairline mb-4" />
                <div className={`text-sm tracking-widest uppercase ${i % 3 === 2 ? "text-ivory" : "text-navy"}`}>
                  {it.couple}
                </div>
                <div className={`text-xs mt-1 ${i % 3 === 2 ? "text-ivory/60" : "text-navy/60"}`}>
                  {it.origin} · {it.region}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}

export function testimonialsJsonLd(lang: Lang) {
  const c = getContent(lang);
  return c.testimonials.items.map((it) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: it.quote,
    author: { "@type": "Person", name: it.couple },
    itemReviewed: {
      "@type": "Organization",
      name: "Sol Mediterraneo Weddings Co.",
    },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  }));
}
