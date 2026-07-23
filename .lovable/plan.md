# Add 3 new articles + 1 FAQ Q&A

Reuses `ArticlePage`, `buildPostHead`, and the existing FAQ pipeline. No routing, canonical, hreflang, or existing schema changes beyond additive entries.

## 1. New blog articles (EN + PT)

Each article: 900–1,200 words, one H1, unique title/description, semantic body blocks (h2/h3/p/ul/quote/callout), soft CTA to the discovery call, and 2–3 internal links to related pages (regions, /services, /destination-weddings-spain, sibling articles). BlogPosting + BreadcrumbList JSON-LD comes automatically from `buildPostHead` (author Larissa Ribeiro, org publisher, datePublished, dateModified, image, inLanguage).

| Key | EN slug | PT slug |
|---|---|---|
| `why-get-married-in-spain` | `/blog/why-get-married-in-spain` | `/pt/blog/por-que-casar-na-espanha` |
| `common-mistakes-planning-a-wedding-in-spain` | `/blog/common-mistakes-planning-a-wedding-in-spain` | `/pt/blog/erros-comuns-ao-planejar-casamento-na-espanha` |
| `getting-married-in-spain-legal-requirements` | `/blog/getting-married-in-spain-legal-requirements` | `/pt/blog/casar-legalmente-na-espanha-como-estrangeiro` |

Article 3 covers legal + civil-vs-symbolic. Legal specifics stay as clear, checkable claims (residency/registry basics, apostilled documents, notice period, symbolic ceremony as the usual path for international couples) with a callout that final requirements depend on the autonomous community and are confirmed with the local Registro Civil.

Brand voice: calm, personal, warm, Mediterranean, trustworthy. Avoid "luxury", "dream come true", "unforgettable moments", "your special day", "passionate about weddings".

## 2. FAQ addition (EN + PT)

Add one new item — "Why hire a local wedding planner in Spain?" / "Por que contratar um wedding planner local na Espanha?" — to the existing FAQ array in `src/i18n/content.ts`. The FAQPage JSON-LD in `src/routes/faq.tsx` and `src/routes/pt.faq.tsx` is generated from that same array via `faqJsonLd(getContent(lang).faq.items)`, so it updates in place — no second block.

## 3. Wiring

- `src/i18n/blog.ts`: add 3 keys to `POST_KEYS`, EN+PT slugs in `POST_SLUGS`, hero image mapping in `IMAGE` (reuse existing editorial imagery — no new asset generation), and the EN+PT `PostContent` bodies.
- Route files (6): `src/routes/blog.why-get-married-in-spain.tsx`, `blog.common-mistakes-planning-a-wedding-in-spain.tsx`, `blog.getting-married-in-spain-legal-requirements.tsx`, and the three PT siblings under `src/routes/pt.blog.*.tsx`. Each is 5 lines following the existing template.
- `src/routes/sitemap[.]xml.ts`: no code change needed — it iterates `POST_KEYS` automatically.
- Add contextual internal links from Destination and relevant Region pages to the new legal article.

## 4. Out of scope

No deletions, no redirects, no image regeneration, no design-system changes, no changes to existing article content, no navbar/footer edits beyond what the automatic Journal listing already covers.

Reply "build it" to proceed.
