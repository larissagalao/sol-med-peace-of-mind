import type { Lang } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";

/**
 * A single case study. Photo gallery uses styled placeholders — the six
 * frames below are ready to be swapped for real photos when the couple's
 * gallery is delivered.
 */
function GalleryPlaceholder({ label, aspect }: { label: string; aspect: string }) {
  return (
    <div
      className={`relative ${aspect} bg-sand border border-border overflow-hidden group`}
      role="img"
      aria-label={`Photo placeholder — ${label}`}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--gold) 20%, transparent) 0%, color-mix(in oklab, var(--sand) 100%, transparent) 60%, color-mix(in oklab, var(--navy) 8%, transparent) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <circle cx="9" cy="11" r="2" />
          <path d="M3 17l5-5 4 4 3-3 6 6" />
        </svg>
        <div className="mt-4 eyebrow text-navy/60">{label}</div>
      </div>
    </div>
  );
}

export function TestimonialsPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.testimonials;
  const cs = t.caseStudy;
  const quote = t.items[0];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-editorial pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
          <h1 className="text-balance">{t.hero.title}</h1>
          <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed">{t.hero.body}</p>
        </div>
      </section>

      {/* CASE STUDY HEADER */}
      <section className="container-editorial pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end pt-10 border-t border-border">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">{cs.eyebrow}</div>
            <h2 className="text-balance">{cs.title}</h2>
          </div>
          <div className="md:col-span-5 space-y-3 text-sm text-navy/70">
            <div className="flex gap-3">
              <span className="eyebrow text-navy/50 shrink-0 w-24">Couple</span>
              <span className="text-navy">{cs.couple}</span>
            </div>
            <div className="flex gap-3">
              <span className="eyebrow text-navy/50 shrink-0 w-24">Location</span>
              <span className="text-navy">{cs.location}</span>
            </div>
            <div className="flex gap-3">
              <span className="eyebrow text-navy/50 shrink-0 w-24">Date</span>
              <span className="text-navy">{cs.dateLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD IMAGE PLACEHOLDER */}
      <section className="container-editorial pb-16">
        <GalleryPlaceholder label="Cover · Costa Brava" aspect="aspect-[16/9]" />
      </section>

      {/* STORY */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-5">The story</div>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-navy/80 leading-relaxed">
            {cs.story.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-navy text-ivory py-24 md:py-32">
        <div className="container-editorial max-w-4xl mx-auto text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" className="mx-auto text-gold-soft" fill="currentColor" aria-hidden>
            <path d="M9.5 5C6.5 5 4 7.5 4 10.5v6h6v-6H7c0-1.65 1.35-3 3-3l.5-2.5zm10 0c-3 0-5.5 2.5-5.5 5.5v6h6v-6H17c0-1.65 1.35-3 3-3L20 5z" />
          </svg>
          <blockquote className="mt-8 font-serif text-3xl md:text-4xl leading-snug text-ivory text-balance">
            "{quote.quote}"
          </blockquote>
          <div className="mt-10">
            <div className="hairline mx-auto mb-4" />
            <div className="text-sm tracking-widest uppercase text-ivory">{quote.couple}</div>
            <div className="text-xs text-ivory/60 mt-1">{quote.origin} · {quote.region}</div>
          </div>
        </div>
      </section>

      {/* PLANNING HIGHLIGHTS */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Planning</div>
            <h2 className="text-balance">{cs.highlightsTitle}</h2>
          </div>
          <ul className="md:col-span-7 md:col-start-6 space-y-4">
            {cs.highlights.map((h, i) => (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-5 pb-4 border-b border-border">
                <span className="font-serif text-2xl text-gold leading-none pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-navy/85 leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY PLACEHOLDERS */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-4">{cs.galleryEyebrow}</div>
          <h2 className="text-balance">{cs.galleryTitle}</h2>
          <p className="mt-6 text-navy/70 leading-relaxed">{cs.galleryNote}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          <div className="md:col-span-4"><GalleryPlaceholder label="Ceremony" aspect="aspect-[4/3]" /></div>
          <div className="md:col-span-2"><GalleryPlaceholder label="Portrait" aspect="aspect-[3/4]" /></div>
          <div className="md:col-span-2"><GalleryPlaceholder label="Details" aspect="aspect-square" /></div>
          <div className="md:col-span-2"><GalleryPlaceholder label="Tablescape" aspect="aspect-square" /></div>
          <div className="md:col-span-2"><GalleryPlaceholder label="Golden hour" aspect="aspect-square" /></div>
          <div className="md:col-span-3"><GalleryPlaceholder label="Reception" aspect="aspect-[4/3]" /></div>
          <div className="md:col-span-3"><GalleryPlaceholder label="Farewell brunch" aspect="aspect-[4/3]" /></div>
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href={SITE_CONFIG.discoveryCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {c.common.bookCall}
          </a>
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
    itemReviewed: { "@type": "Organization", name: "Sol Mediterraneo Weddings Co." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  }));
}
