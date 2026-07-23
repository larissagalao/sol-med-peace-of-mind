import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import {
  POST_KEYS,
  POST_SLUGS,
  getBlogIndex,
  getPost,
  getPostImage,
} from "@/i18n/blog";

function formatDate(iso: string, lang: Lang) {
  try {
    return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function BlogIndexPage({ lang }: { lang: Lang }) {
  const idx = getBlogIndex(lang);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-editorial pt-16 md:pt-24 pb-10">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{idx.hero.eyebrow}</div>
          <h1 className="text-balance">{idx.hero.h1}</h1>
          <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed max-w-2xl">
            {idx.hero.intro}
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="container-editorial pb-24">
        <div className="border-t border-navy/10">
          {POST_KEYS.map((key) => {
            const post = getPost(key, lang);
            const img = getPostImage(key, lang);
            const href = POST_SLUGS[key][lang];
            return (
              <Link
                key={key}
                to={href}
                className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-10 border-b border-navy/10"
              >
                <div className="md:col-span-4 aspect-[4/3] overflow-hidden bg-navy/5">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-8">
                  <div className="text-[0.68rem] tracking-[0.28em] uppercase text-navy/55 mb-3">
                    {post.hero.eyebrow} · {formatDate(post.datePublished, lang)} · {post.hero.readingTime}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight group-hover:text-gold transition-colors">
                    {post.hero.h1}
                  </h2>
                  <p className="mt-4 text-navy/75 leading-relaxed max-w-2xl">{post.hero.dek}</p>
                  <span className="mt-6 inline-block text-sm tracking-widest uppercase text-gold">
                    {idx.cardCta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
