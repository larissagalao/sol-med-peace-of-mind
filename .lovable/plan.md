
# Sol Mediterraneo Weddings Co. — Build Plan

A boutique, editorial, trust-first website for a destination wedding planner in Spain, targeting international couples. Bilingual (EN/PT), SEO-optimized, conversion-focused.

## Visual direction (locked from brief)

- **Feel:** boutique Mediterranean hotel meets editorial magazine. Calm, refined, spacious.
- **Palette:** warm white / ivory background, sand & stone neutrals, deep navy for text, burnt gold accent, muted olive as secondary.
- **Typography:** editorial serif for display (à la the logo — "Sol Mediterraneo" wordmark) paired with a refined sans for body. Fonts: **Cormorant Garamond** (display serif) + **Inter** (body) — loaded via `<link>` in `__root.tsx` per Tailwind v4 rules.
- **Layout:** generous whitespace, large photography, asymmetric editorial grids, thin gold hairlines, small caps eyebrows.
- **Motion:** restrained — soft fade/rise on scroll, no bounce.

## Design system (`src/styles.css`)

Semantic tokens in oklch: `--background` (warm white), `--foreground` (deep navy), `--primary` (deep navy), `--accent` (burnt gold), `--olive`, `--sand`, `--stone`, `--ivory`. Custom fonts, radii, elegant shadow, hairline border. Button variants: `primary` (navy), `outline` (hairline gold), `ghost`.

## Reusable components (`src/components/site/`)

Navbar (with language switcher), Footer, Hero, SectionEyebrow, CTA Banner, ServiceCard, FeatureCard, ProcessStep, Timeline, Testimonial, TestimonialCarousel, FAQ (accordion + Schema), Stats, LocationCard, ImageGallery, SectionDivider, Button variants, Form fields, Logo (SVG recreation of the sun mark).

## i18n

- Custom lightweight context: `LanguageProvider` in `__root.tsx`.
- Detects `navigator.language` on first visit → `pt` if starts with `pt`, else `en`.
- Persists to `localStorage` (`sol.lang`).
- URL strategy: EN at `/`, `/about`, `/services`, `/destination-weddings-spain`, `/testimonials`, `/faq`, `/contact`. PT mirrored at `/pt`, `/pt/sobre`, `/pt/servicos`, `/pt/casar-na-espanha`, `/pt/depoimentos`, `/pt/faq`, `/pt/contato`.
- Language switcher navigates to the mirrored route.
- Auto-redirect on first `/` visit if PT browser and no stored preference.
- `hreflang` alternates + `x-default` on each route's `head()`.

## Routes & content

Each route: unique `<title>`, meta description, og:title/description/url, canonical (relative), semantic H1/H2/H3, JSON-LD where relevant. `og:image` only on leaf routes with a real hero image (generated).

1. **Home** (`/`, `/pt`) — hero with generated Mediterranean villa photo, promise statement ("You keep living your life. We take care of everything in Spain."), trust strip, services preview (3 cards), "How we work" 4-step process, regions preview, testimonial carousel, CTA banner. Organization + LocalBusiness JSON-LD.
2. **About** (`/about`, `/pt/sobre`) — Our Story, Why Couples Trust Us, Planning Philosophy, How We Work, team-adjacent editorial imagery, CTA, mini-FAQ.
3. **Services** (`/services`, `/pt/servicos`) — Full Planning, Partial Planning, Elopements & Micro-weddings, Destination Concierge. Each with inclusions, deliverables, ideal-for.
4. **Destination Weddings in Spain** (`/destination-weddings-spain`, `/pt/casar-na-espanha`) — SEO pillar page: Why Spain, Legal requirements, Civil vs symbolic, Costs, Best regions (Barcelona / Costa Brava / Mallorca / Ibiza / Andalusia), Timeline, Common mistakes, Why local planner. Article JSON-LD.
5. **Testimonials** (`/testimonials`, `/pt/depoimentos`) — editorial testimonial grid with couple names, origin country, wedding region, quote. Review JSON-LD.
6. **FAQ** (`/faq`, `/pt/faq`) — expanded FAQ (foreigners marrying in Spain, cost, travel frequency, accommodation, English-speaking vendors, payment, timeline, etc.). FAQPage JSON-LD.
7. **Contact** (`/contact`, `/pt/contato`) — discovery-call form (name, partners, email, wedding date, region, guest count, budget range, message). Client-side only for now (no backend); shows confirmation on submit. Prominent trust reassurance next to form.

## Images

Generate 6–8 editorial hero/section images: Mediterranean villa terrace, Costa Brava sea view, olive grove tablescape, Barcelona architecture detail, boutique hotel interior, elegant place setting, natural-light couple silhouette. Reuse across pages to control cost.

## SEO & discoverability

- `robots.txt` under `public/`.
- `sitemap.xml` server route (`src/routes/sitemap[.]xml.ts`) with all 14 routes (7 × 2 langs), relative BASE_URL (no domain yet).
- Root head: charset, viewport, site defaults, org JSON-LD.
- Per-route head: full metadata + hreflang.

## Out of scope for this build

- Backend / form persistence (Cloud not enabled — form is client-only until user wants submissions stored/emailed).
- Blog + individual venue/city landing pages (nav is structured so they can be added later).
- CMS.

## Delivery

Given the scope, I'll ship in one pass: tokens & fonts → shared components + i18n → all routes with EN+PT content → sitemap/robots → verify build & preview. Then hand over for review before iterating on copy or generating more imagery.

Approve and I'll start building.
