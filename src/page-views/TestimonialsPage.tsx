import type { Lang } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";

import atBrideGarden from "@/assets/at-bride-garden.jpeg.asset.json";
import atHandsUnderTable from "@/assets/at-hands-under-table.jpeg.asset.json";
import atRingsShoulder from "@/assets/at-rings-shoulder.jpeg.asset.json";
import atLaceVeilChandelier from "@/assets/at-lace-veil-chandelier.jpeg.asset.json";
import atChampagneTower from "@/assets/at-champagne-tower.jpeg.asset.json";
import atStepsKiss from "@/assets/at-steps-kiss-bw.jpeg.asset.json";
import atCakeCutting from "@/assets/at-cake-cutting-bw.jpeg.asset.json";
import atReceptionKiss from "@/assets/at-reception-kiss-bw.jpeg.asset.json";
import atPolaroidGuestbook from "@/assets/at-polaroid-guestbook.jpeg.asset.json";
import atVeilNight from "@/assets/at-veil-night-candid.jpeg.asset.json";

interface Frame {
  src: string;
  alt: string;
  aspect: string;
  span: string;
}

/** A & T — September 2026. Editorial gallery, curated rather than exhaustive. */
const GALLERY: Frame[] = [
  {
    src: atHandsUnderTable.url,
    alt: "The couple holding hands beneath the dinner table",
    aspect: "aspect-[4/3]",
    span: "md:col-span-3",
  },
  {
    src: atRingsShoulder.url,
    alt: "The couple's hands with gold wedding bands, resting on the bride's lace shoulder",
    aspect: "aspect-[4/3]",
    span: "md:col-span-3",
  },
  {
    src: atLaceVeilChandelier.url,
    alt: "The bride lifting her long lace veil beneath a chandelier",
    aspect: "aspect-[3/4]",
    span: "md:col-span-2",
  },
  {
    src: atChampagneTower.url,
    alt: "The bride placing a coupe atop the champagne tower in the garden",
    aspect: "aspect-[3/4]",
    span: "md:col-span-2",
  },
  {
    src: atStepsKiss.url,
    alt: "Black and white portrait of the couple kissing on stone steps, the lace veil trailing behind",
    aspect: "aspect-[3/4]",
    span: "md:col-span-2",
  },
  {
    src: atCakeCutting.url,
    alt: "Black and white photograph of the couple cutting the cake beside the dessert table",
    aspect: "aspect-[4/5]",
    span: "md:col-span-3",
  },
  {
    src: atReceptionKiss.url,
    alt: "Black and white photograph of the couple kissing across the candlelit dinner table",
    aspect: "aspect-[4/5]",
    span: "md:col-span-3",
  },
  {
    src: atPolaroidGuestbook.url,
    alt: "A guest filling the polaroid guestbook on the lawn",
    aspect: "aspect-[4/5]",
    span: "md:col-span-3",
  },
  {
    src: atVeilNight.url,
    alt: "The couple laughing beneath the veil at night, string lights above",
    aspect: "aspect-[4/5]",
    span: "md:col-span-3",
  },
];

function GalleryImage({ frame }: { frame: Frame }) {
  return (
    <figure className={`relative ${frame.aspect} overflow-hidden ${frame.span}`}>
      <img
        src={frame.src}
        alt={frame.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover shadow-soft"
      />
    </figure>
  );
}

export function TestimonialsPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.testimonials;
  const cs = t.caseStudy;

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
          <p className="md:col-span-5 font-serif text-xl italic text-navy/70 leading-relaxed self-end">
            {lang === "pt"
              ? "Um fim de semana de setembro. Uma propriedade privada no interior da Espanha. Planejado de longe, sentido como casa."
              : "A September weekend. A private estate in the Spanish countryside. Planned from abroad, felt like home."}
          </p>
        </div>
      </section>

      {/* LEAD IMAGE */}
      <section className="container-editorial pb-16">
        <figure className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img
            src={atBrideGarden.url}
            alt="The bride in an ivory gown with a lace cape, standing on the lawn at golden hour"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_38%] shadow-elegant"
          />
        </figure>
      </section>

      {/* STORY */}
      <section className="container-editorial pb-16 md:pb-24">
        <div className="space-y-6 text-lg text-navy/80 leading-relaxed text-justify hyphens-auto">
          {cs.story.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* RESERVED FOR THEIR TESTIMONIAL */}
      <section className="bg-sand/40 py-24 md:py-32">
        <div className="container-editorial max-w-2xl mx-auto text-center">
          <svg width="32" height="32" viewBox="0 0 24 24" className="mx-auto text-gold/50" fill="currentColor" aria-hidden>
            <path d="M9.5 5C6.5 5 4 7.5 4 10.5v6h6v-6H7c0-1.65 1.35-3 3-3l.5-2.5zm10 0c-3 0-5.5 2.5-5.5 5.5v6h6v-6H17c0-1.65 1.35-3 3-3L20 5z" />
          </svg>
          <p className="mt-10 font-serif text-2xl md:text-3xl italic text-navy/70 leading-relaxed text-balance">
            {cs.testimonialNote}
          </p>
          <div className="mt-12">
            <div className="hairline mx-auto mb-4" />
            <div className="text-sm tracking-widest uppercase text-navy">{cs.couple}</div>
            <div className="text-xs text-navy/60 mt-1">{cs.dateLabel}</div>
          </div>
        </div>
      </section>

      {/* THE WEEKEND */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-5">{lang === "pt" ? "O fim de semana" : "The weekend"}</div>
            <h2 className="text-balance">{cs.highlightsTitle}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-navy/85 leading-relaxed">
            {cs.highlights.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-4">{cs.galleryEyebrow}</div>
          <h2 className="text-balance">{cs.galleryTitle}</h2>
          <p className="mt-6 text-navy/70 leading-relaxed">{cs.galleryNote}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {GALLERY.map((frame) => (
            <GalleryImage key={frame.src} frame={frame} />
          ))}
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
