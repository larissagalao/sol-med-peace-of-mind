import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE_CONFIG } from "@/config/site";
import {
  BLOG_INDEX,
  POST_SLUGS,
  getPost,
  getPostImage,
  type Block,
  type PostKey,
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

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="font-serif text-3xl md:text-4xl text-navy mt-14 mb-5 text-balance">{block.text}</h2>;
    case "h3":
      return <h3 className="font-serif text-xl md:text-2xl text-navy mt-8 mb-3">{block.text}</h3>;
    case "p":
      return <p className="text-lg text-navy/80 leading-relaxed mt-4">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-navy/85 leading-relaxed">
              <span className="text-gold pt-1">•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-2xl text-navy/85 italic">
          <p>&ldquo;{block.text}&rdquo;</p>
          {block.cite && <cite className="mt-3 block not-italic text-sm tracking-widest uppercase text-navy/55">— {block.cite}</cite>}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="mt-8 bg-ivory-warm border-l-2 border-gold px-6 py-5">
          {block.title && <div className="eyebrow mb-2">{block.title}</div>}
          <p
            className="text-navy/85 leading-relaxed [&_a]:text-gold [&_a:hover]:text-navy [&_a]:transition-colors [&_a]:underline [&_a]:decoration-gold/40 [&_a]:underline-offset-4"
            dangerouslySetInnerHTML={{ __html: block.body }}
          />
        </aside>
      );
  }
}

export function ArticlePage({ postKey, lang }: { postKey: PostKey; lang: Lang }) {
  const post = getPost(postKey, lang);
  const img = getPostImage(postKey, lang);
  const journalLabel = lang === "pt" ? "O Diário" : "The Journal";

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-editorial pt-12 md:pt-20 pb-6">
        <div className="max-w-3xl">
          <div className="text-sm text-navy/60 mb-6">
            <Link to={BLOG_INDEX[lang]} className="hover:text-gold transition-colors">
              ← {journalLabel}
            </Link>
          </div>
          <div className="eyebrow mb-6">{post.hero.eyebrow}</div>
          <h1 className="text-balance">{post.hero.h1}</h1>
          <p className="mt-6 text-lg md:text-xl text-navy/80 leading-relaxed max-w-2xl">{post.hero.dek}</p>
          <div className="mt-8 text-[0.68rem] tracking-[0.28em] uppercase text-navy/55">
            Larissa Ribeiro · {formatDate(post.datePublished, lang)} · {post.hero.readingTime}
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="container-editorial">
        <div className="aspect-[16/9] overflow-hidden bg-navy/5">
          <img src={img.src} alt={img.alt} width={1600} height={900} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* BODY */}
      <article className="container-editorial py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          {post.body.map((b, i) => (
            <RenderBlock key={i} block={b} />
          ))}

          {/* CTA */}
          <div className="mt-16 border-t border-navy/10 pt-10">
            <div className="eyebrow mb-3">{lang === "pt" ? "Próximo passo" : "The next step"}</div>
            <h2 className="font-serif text-3xl text-navy mb-4 text-balance">{post.cta.title}</h2>
            <p className="text-lg text-navy/80 leading-relaxed">{post.cta.body}</p>
            <a
              href={SITE_CONFIG.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex"
            >
              {post.cta.button}
            </a>
          </div>

          {/* RELATED */}
          <div className="mt-16">
            <div className="eyebrow mb-5">{post.relatedTitle}</div>
            <ul className="space-y-3">
              {post.related.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    className="group inline-flex items-baseline gap-3 font-serif text-xl text-navy hover:text-gold transition-colors"
                  >
                    <span className="text-gold">→</span>
                    <span className="underline decoration-gold/30 underline-offset-4 group-hover:decoration-gold">
                      {r.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BACK LINK */}
          <div className="mt-16 pt-8 border-t border-navy/10">
            <Link
              to={BLOG_INDEX[lang]}
              className="text-sm tracking-widest uppercase text-gold hover:text-navy transition-colors"
            >
              ← {lang === "pt" ? "Voltar ao Diário" : "Back to the Journal"}
            </Link>
          </div>
        </div>
      </article>

      {/* Note: intentionally no <CTABanner /> here — the article ends with its own soft CTA. */}
    </SiteLayout>
  );
}

/**
 * How to add a new post
 * ----------------------
 * 1. Add a new key to `PostKey` and `POST_KEYS` in src/i18n/blog.ts.
 * 2. Add EN + PT slugs in `POST_SLUGS`, plus a hero image mapping in `IMAGE`.
 * 3. Add EN + PT `PostContent` bodies (title, meta, hero, body blocks, cta, related).
 * 4. Create two route files:
 *      src/routes/blog.<en-slug>.tsx
 *      src/routes/pt.blog.<pt-slug>.tsx
 *    Each is 5 lines — see any existing blog article route as a copy-paste template.
 * 5. The sitemap picks up new posts automatically from POST_KEYS/POST_SLUGS.
 */
