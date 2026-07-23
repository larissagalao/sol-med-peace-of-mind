// Blog / Journal — index + articles, EN + PT.
// Kept separate from content.ts. PT preserves "Wedding Planner",
// "Wedding Planning" and "Destination Wedding" in English per the site's
// localization rule.

import type { Lang } from "./routes";

export type PostKey =
  | "cost-of-a-wedding-in-spain"
  | "wedding-in-spain-planning-timeline"
  | "wedding-regions-in-spain-compared"
  | "wedding-budget-tips-spain"
  | "what-is-a-destination-wedding"
  | "why-get-married-in-spain"
  | "common-mistakes-planning-a-wedding-in-spain"
  | "getting-married-in-spain-legal-requirements";

export const POST_KEYS: PostKey[] = [
  "cost-of-a-wedding-in-spain",
  "wedding-in-spain-planning-timeline",
  "wedding-regions-in-spain-compared",
  "wedding-budget-tips-spain",
  "what-is-a-destination-wedding",
  "why-get-married-in-spain",
  "common-mistakes-planning-a-wedding-in-spain",
  "getting-married-in-spain-legal-requirements",
];


export const BLOG_INDEX: Record<Lang, string> = {
  en: "/blog",
  pt: "/pt/blog",
};

export const POST_SLUGS: Record<PostKey, Record<Lang, string>> = {
  "cost-of-a-wedding-in-spain": {
    en: "/blog/cost-of-a-wedding-in-spain",
    pt: "/pt/blog/custo-de-um-casamento-na-espanha",
  },
  "wedding-in-spain-planning-timeline": {
    en: "/blog/wedding-in-spain-planning-timeline",
    pt: "/pt/blog/planejamento-casamento-espanha-cronograma",
  },
  "wedding-regions-in-spain-compared": {
    en: "/blog/wedding-regions-in-spain-compared",
    pt: "/pt/blog/regioes-para-casar-na-espanha-comparadas",
  },
  "wedding-budget-tips-spain": {
    en: "/blog/wedding-budget-tips-spain",
    pt: "/pt/blog/dicas-orcamento-casamento-espanha",
  },
  "what-is-a-destination-wedding": {
    en: "/blog/what-is-a-destination-wedding",
    pt: "/pt/blog/o-que-e-um-destination-wedding",
  },
  "why-get-married-in-spain": {
    en: "/blog/why-get-married-in-spain",
    pt: "/pt/blog/por-que-casar-na-espanha",
  },
  "common-mistakes-planning-a-wedding-in-spain": {
    en: "/blog/common-mistakes-planning-a-wedding-in-spain",
    pt: "/pt/blog/erros-comuns-ao-planejar-casamento-na-espanha",
  },
  "getting-married-in-spain-legal-requirements": {
    en: "/blog/getting-married-in-spain-legal-requirements",
    pt: "/pt/blog/casar-legalmente-na-espanha-como-estrangeiro",
  },
};

/* ---------- Types ---------- */

// A rich body block. Kept intentionally small so the template stays simple.
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title?: string; body: string };

export type RelatedLink = {
  label: string;
  href: string; // absolute path; can be a post or a service/region page
};

export type PostContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    dek: string; // one-sentence deck
    readingTime: string; // e.g. "8 min read"
  };
  datePublished: string; // ISO
  dateModified: string;  // ISO
  image: string; // imported asset path (bundler URL)
  imageAlt: string;
  body: Block[];
  cta: {
    title: string;
    body: string;
    button: string;
  };
  relatedTitle: string;
  related: RelatedLink[];
};

export type BlogIndexContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
  };
  cardCta: string;
};

/* ---------- Shared assets ---------- */

import costaBrava from "@/assets/costa-brava.jpg";
import oliveGrove from "@/assets/olive-grove.jpg";
import mallorca from "@/assets/mallorca.jpg";
import tablescape from "@/assets/tablescape.jpg";
import andalusia from "@/assets/andalusia.jpg";

const IMAGE: Record<PostKey, { src: string; alt: { en: string; pt: string } }> = {
  "cost-of-a-wedding-in-spain": {
    src: tablescape,
    alt: {
      en: "A long, quietly styled wedding table in Spain, set with linen and candles.",
      pt: "Mesa longa de casamento na Espanha, com linho e velas.",
    },
  },
  "wedding-in-spain-planning-timeline": {
    src: oliveGrove,
    alt: {
      en: "An olive grove in Spain at golden hour, a common setting for ceremonies.",
      pt: "Olival na Espanha na hora dourada, cenário comum de cerimônias.",
    },
  },
  "wedding-regions-in-spain-compared": {
    src: mallorca,
    alt: {
      en: "Stone estate in the Mallorcan countryside overlooking the Mediterranean.",
      pt: "Propriedade em pedra no interior de Mallorca com vista para o Mediterrâneo.",
    },
  },
  "wedding-budget-tips-spain": {
    src: costaBrava,
    alt: {
      en: "A quiet cove on the Costa Brava — a common Spanish wedding backdrop.",
      pt: "Enseada tranquila na Costa Brava — cenário frequente de casamentos.",
    },
  },
  "what-is-a-destination-wedding": {
    src: andalusia,
    alt: {
      en: "Andalusian courtyard with orange trees — the imagery couples picture.",
      pt: "Pátio andaluz com laranjeiras — a imagem que casais imaginam.",
    },
  },
  "why-get-married-in-spain": {
    src: mallorca,
    alt: {
      en: "A stone estate above the Mediterranean — the kind of place couples come to Spain for.",
      pt: "Uma propriedade em pedra acima do Mediterrâneo — o tipo de lugar pelo qual casais escolhem a Espanha.",
    },
  },
  "common-mistakes-planning-a-wedding-in-spain": {
    src: tablescape,
    alt: {
      en: "A long, quietly styled wedding table in Spain — considered planning, not spectacle.",
      pt: "Mesa longa e discretamente estilizada de casamento na Espanha — planejamento considerado.",
    },
  },
  "getting-married-in-spain-legal-requirements": {
    src: oliveGrove,
    alt: {
      en: "An olive grove in Spain — a common setting for symbolic ceremonies.",
      pt: "Olival na Espanha — cenário comum para cerimônias simbólicas.",
    },
  },
};

export function getPostImage(key: PostKey, lang: Lang) {
  return { src: IMAGE[key].src, alt: IMAGE[key].alt[lang] };
}

/* ---------- Publish dates (owner can update) ---------- */

const DATES: Record<PostKey, { datePublished: string; dateModified: string }> = {
  "cost-of-a-wedding-in-spain":            { datePublished: "2026-06-01", dateModified: "2026-06-01" },
  "wedding-in-spain-planning-timeline":    { datePublished: "2026-06-05", dateModified: "2026-06-05" },
  "wedding-regions-in-spain-compared":     { datePublished: "2026-06-10", dateModified: "2026-06-10" },
  "wedding-budget-tips-spain":             { datePublished: "2026-06-15", dateModified: "2026-06-15" },
  "what-is-a-destination-wedding":         { datePublished: "2026-06-20", dateModified: "2026-06-20" },
  "why-get-married-in-spain":                            { datePublished: "2026-07-01", dateModified: "2026-07-01" },
  "common-mistakes-planning-a-wedding-in-spain":         { datePublished: "2026-07-08", dateModified: "2026-07-08" },
  "getting-married-in-spain-legal-requirements":         { datePublished: "2026-07-15", dateModified: "2026-07-15" },
};

/* ============================ ENGLISH ============================ */

const enIndex: BlogIndexContent = {
  meta: {
    title: "The Journal | Sol Mediterraneo Weddings Co.",
    description:
      "Honest, in-depth notes on planning a destination wedding in Spain — costs, timelines, regions and the small decisions that make the day feel like yours.",
  },
  hero: {
    eyebrow: "The Journal",
    h1: "Notes on planning a wedding in Spain",
    intro:
      "We write what we would tell a friend planning from abroad — nothing salesy, nothing padded. Read the guides below, then come find us when you're ready to talk.",
  },
  cardCta: "Read the article",
};

const enPosts: Record<PostKey, PostContent> = {
  "cost-of-a-wedding-in-spain": {
    meta: {
      title: "How Much Does a Wedding in Spain Cost? A Realistic Breakdown",
      description:
        "A calm, honest guide to what a destination wedding in Spain actually costs — elopements, mid-size and larger weddings, and what shifts the number most.",
    },
    hero: {
      eyebrow: "Budget",
      h1: "How Much Does a Wedding in Spain Cost?",
      dek: "A clear breakdown of what shapes the number — from an intimate elopement to a full-weekend celebration.",
      readingTime: "10 min read",
    },
    ...DATES["cost-of-a-wedding-in-spain"],
    image: IMAGE["cost-of-a-wedding-in-spain"].src,
    imageAlt: IMAGE["cost-of-a-wedding-in-spain"].alt.en,
    body: [
      { type: "p", text: "Almost every couple who writes to us starts with a version of the same question: what does a wedding in Spain actually cost? It is the most honest question there is, and it deserves an honest answer — not a single glossy number, but a range, and the reasoning behind it." },
      { type: "p", text: "Below is how we frame budget on discovery calls. Treat every figure as a working reference, not a quote — the same guest count on the same weekend can cost very differently depending on region, venue type, food and drink choices, and how much of the weekend you want the wedding to occupy." },

      { type: "h2", text: "Three broad shapes, three broad ranges" },
      { type: "p", text: "Most of the weddings we plan fall into one of three shapes. Naming them helps you see where your own vision might land before we get into individual line items." },

      { type: "h3", text: "Elopements and micro-weddings (2–12 guests)" },
      { type: "p", text: "Typical total investment: €3,000 – €9,000+, excluding travel and stay for the couple." },
      { type: "p", text: "An elopement in Spain is often the most joyful, least stressful version of the day. Two of you, or a small handful of people, a ceremony in a place that means something, a long lunch after. The number depends less on guest count and more on which region you choose, whether you want a photographer for the full day, and how curated the food and styling are." },

      { type: "h3", text: "Intimate weddings (around 30 guests)" },
      { type: "p", text: "Typical total investment: €20,000 – €45,000+." },
      { type: "p", text: "This is the shape that most surprises couples — a 30-guest wedding in Spain done well is not a small budget, because most of the fixed costs (venue takeover, planning, photography, flowers, music) don't scale down linearly. What you gain is a day that feels genuinely personal: one long table, real conversation, and space to breathe." },

      { type: "h3", text: "Full weddings (roughly 30–100 guests)" },
      { type: "p", text: "Typical total investment: €35,000 – €120,000+." },
      { type: "p", text: "The range is wide because the choices are wide. A country masia dinner for 60 sits at one end. A full-weekend takeover of a private estate with welcome dinner, ceremony, seated meal and late-night party sits at the other. Both are beautiful; they are simply different weddings." },

      { type: "h2", text: "What actually moves the number" },
      { type: "p", text: "Once we know your rough shape, five variables do most of the moving. If your first figure feels too high or too low, one of these is usually the reason." },

      { type: "h3", text: "1. Region and season" },
      { type: "p", text: "Ibiza in August and Mallorca in September carry a premium — venues, staff and accommodation are all in demand. The Costa Brava, Catalan countryside, Granada and Seville are typically more forgiving on price, especially in May, June and early October. The same guest count can shift by 20–40% just by moving the map pin or the weekend." },

      { type: "h3", text: "2. Venue type and exclusivity" },
      { type: "p", text: "A restored masia rented for a single day is one number. That same masia rented for a full weekend, with the wedding party sleeping on site, is another. Private full-weekend takeover is often the biggest single lever on your budget — and, for many couples, the choice that most changes how the wedding feels." },

      { type: "h3", text: "3. Food and drink" },
      { type: "p", text: "This is usually the largest line item after venue. A generous aperitivo, a considered menu with local wine and a proper open bar is worth investing in — it is what your guests will remember. The gap between an efficient banquet menu and a chef-led experience is real, and worth understanding early." },

      { type: "h3", text: "4. Guest count" },
      { type: "p", text: "The counterintuitive part: cutting the list by ten people rarely saves as much as couples expect, because so many costs are fixed. Cutting by thirty, or moving from a weekend takeover to a single-day event, saves meaningfully more." },

      { type: "h3", text: "5. Weekend footprint" },
      { type: "p", text: "One ceremony and dinner is one budget. Adding a welcome dinner, a farewell brunch and transport across three days is another. It is worth deciding early whether you want a wedding or a wedding weekend — both are lovely, they are just different investments." },

      { type: "h2", text: "What our planning fee looks like" },
      { type: "p", text: "We are a boutique studio and we cap our year at twelve weddings. Our planning fee is quoted as a fixed number for the scope you actually need — full planning, partial planning, or day-of coordination — and not as a percentage of your total spend. There are ranges and structures we can walk you through on a call." },

      { type: "callout", title: "See how we can help", body: "Our services page lays out the three ways we work with couples, from wedding day coordination through full planning." },

      { type: "h2", text: "How to read a first estimate without panic" },
      { type: "p", text: "The most useful thing we can do on a first call is give you an honest range for your shape of wedding, in your preferred region, in your preferred month — and tell you where the flex actually is. Numbers only get scary when they arrive with no context." },
      { type: "p", text: "If a first estimate is higher than you were hoping, there are usually calm, non-cynical ways to bring it down: shifting the season, choosing a region with a softer price floor, adjusting the weekend footprint, or trimming the guest list in a considered way. If it is much lower than you expected, that is worth understanding too — a suspiciously low number is often hiding something." },

      { type: "h2", text: "The short answer" },
      { type: "p", text: "There is no single \"cost of a wedding in Spain.\" There is your wedding, in your region, in your month, at your guest count. Once we know those, we can put a real range in front of you within a single conversation — and you can decide, calmly, whether to keep going." },
    ],
    cta: {
      title: "Ready to see your real range?",
      body: "A 30-minute discovery call is the calmest way to turn all of this into a number you can actually plan around.",
      button: "Book a Discovery Call",
    },
    relatedTitle: "Keep reading",
    related: [
      { label: "Budget adjustments that actually save money", href: "/blog/wedding-budget-tips-spain" },
      { label: "Where to get married in Spain — regions compared", href: "/blog/wedding-regions-in-spain-compared" },
      { label: "Our services and how we work", href: "/services" },
    ],
  },

  "wedding-in-spain-planning-timeline": {
    meta: {
      title: "Planning a Wedding in Spain From Abroad: Month-by-Month Timeline",
      description:
        "A calm, realistic timeline for planning a destination wedding in Spain from another country — what to decide when, and what can safely wait.",
    },
    hero: {
      eyebrow: "Planning",
      h1: "Planning a Wedding in Spain From Abroad: A Month-by-Month Timeline",
      dek: "A quiet, month-by-month plan for couples building a Spanish wedding from another country.",
      readingTime: "9 min read",
    },
    ...DATES["wedding-in-spain-planning-timeline"],
    image: IMAGE["wedding-in-spain-planning-timeline"].src,
    imageAlt: IMAGE["wedding-in-spain-planning-timeline"].alt.en,
    body: [
      { type: "p", text: "Planning a wedding in a country you don't live in feels bigger than it is. The reason isn't the language or the distance — it is that everything looks like it needs to happen at once. It doesn't. A destination wedding in Spain has a rhythm, and once you can see the rhythm, the whole project becomes calm." },
      { type: "p", text: "The timeline below assumes roughly twelve months of runway. It works for shorter windows too — we regularly plan beautiful weddings on eight or even six months' notice — but twelve gives you room to choose slowly and change your mind once." },

      { type: "h2", text: "12–10 months out — shape and place" },
      { type: "ul", items: [
        "Decide the shape: elopement, intimate wedding, or full-weekend celebration.",
        "Agree the rough guest count band (not the list yet — the band).",
        "Choose the region, or shortlist two. This is the single decision that unlocks everything else.",
        "Book a discovery call with a planner and start budget conversations in real ranges, not fantasy numbers.",
        "Set a preferred weekend and one backup weekend.",
      ] },

      { type: "h2", text: "10–8 months out — venue and anchors" },
      { type: "ul", items: [
        "Visit or virtually tour a shortlist of venues; sign with the one that feels right, not just the one that photographs best.",
        "Confirm your planner and the scope of their involvement (full, partial, coordination).",
        "Lock in your photographer — the good ones book earliest.",
        "Send a save-the-date so international guests can plan flights early.",
      ] },

      { type: "h2", text: "8–6 months out — the creative core" },
      { type: "ul", items: [
        "Choose the caterer or confirm the venue's in-house team, and start menu conversations.",
        "Book florals, music (ceremony musicians, DJ or band), and hair and makeup.",
        "Decide on ceremony type — for most international couples, a symbolic ceremony at the venue is simplest.",
        "Begin the legal paperwork if you want a civil marriage at home before or after the trip.",
        "Open a booking block at nearby hotels for guests, or coordinate on-site accommodation.",
      ] },

      { type: "h2", text: "6–4 months out — the weekend takes shape" },
      { type: "ul", items: [
        "Design the weekend: welcome dinner, ceremony day, farewell brunch — decide what you actually want, not what you feel obligated to include.",
        "Finalise your guest list and send formal invitations.",
        "Confirm transport (guest shuttles, wedding-party cars).",
        "Do a tasting with your caterer.",
        "Start dress and suit fittings if you haven't already.",
      ] },

      { type: "h2", text: "4–2 months out — details and logistics" },
      { type: "ul", items: [
        "Build the seating plan as RSVPs come in.",
        "Finalise stationery, signage, favours.",
        "Confirm your celebrant or officiant and share the ceremony structure.",
        "Talk contingency: a rain plan is standard in any responsibly-planned Spanish wedding, not a sign that something is going wrong.",
        "Send guests a practical welcome note: how to get there, what to pack, dress code, the weekend rundown.",
      ] },

      { type: "h2", text: "1 month out — the calm before" },
      { type: "ul", items: [
        "Final numbers to caterer, florist and venue.",
        "Full run-of-day timeline shared with every vendor.",
        "Payments and tips organised.",
        "Confirm all guest transport times.",
        "Pack the emergency kit; hand the planning brain to your planner.",
      ] },

      { type: "h2", text: "The week of" },
      { type: "p", text: "This is where a good planner earns their keep. Vendor confirmations, welcome bags in rooms, a final walkthrough of the venue, and — most importantly — the two of you doing as little as humanly possible. The wedding should arrive to you, not the other way around." },

      { type: "h2", text: "What can safely wait — and what really can't" },
      { type: "p", text: "Couples worry most about the wrong things. Menus, favours and stationery can wait. Venue, planner, photographer and rough guest count cannot — those four decisions are what everything else hangs off, and the best options genuinely book out first." },

      { type: "h2", text: "Planning shorter than twelve months" },
      { type: "p", text: "It is entirely doable. Eight months is comfortable for most weddings. Six is possible with the right region, the right weekend and a planner already deep in the local network. The trade-off is choice: you'll be selecting from what's still available, not from the entire universe of venues. That is often a blessing." },
    ],
    cta: {
      title: "Where does your timeline start?",
      body: "A short discovery call helps us see your runway honestly and tell you whether it's plenty, tight, or ambitious.",
      button: "Book a Discovery Call",
    },
    relatedTitle: "Keep reading",
    related: [
      { label: "What is a destination wedding, exactly?", href: "/blog/what-is-a-destination-wedding" },
      { label: "How much does a wedding in Spain cost?", href: "/blog/cost-of-a-wedding-in-spain" },
      { label: "Destination weddings in Spain — full guide", href: "/destination-weddings-spain" },
    ],
  },

  "wedding-regions-in-spain-compared": {
    meta: {
      title: "Where to Get Married in Spain: The Regions Compared",
      description:
        "A calm, honest comparison of the best regions for a wedding in Spain — Catalonia, Costa Brava, Ibiza, Mallorca, Granada and Seville.",
    },
    hero: {
      eyebrow: "Regions",
      h1: "Where to Get Married in Spain: The Regions Compared",
      dek: "Six regions, six very different weddings — and how to tell which one is yours.",
      readingTime: "11 min read",
    },
    ...DATES["wedding-regions-in-spain-compared"],
    image: IMAGE["wedding-regions-in-spain-compared"].src,
    imageAlt: IMAGE["wedding-regions-in-spain-compared"].alt.en,
    body: [
      { type: "p", text: "Spain is not one country when it comes to weddings. A masia in the Catalan countryside feels nothing like a whitewashed finca in Ibiza, and a Sevillian palace has a different soul than a Mallorcan estate above the sea. Choosing the region is not a small aesthetic decision — it sets the rhythm of the entire weekend." },
      { type: "p", text: "Below is our honest read on the six regions we plan in most often. Read them slowly. The right region is usually the one that keeps quietly coming back to you." },

      { type: "h2", text: "Catalonia — countryside, without leaving mainland Spain" },
      { type: "p", text: "Old stone masias, Penedès vineyards and hillside estates, mostly within an hour of Barcelona. Catalonia rewards couples who want a grounded, slower day: dinner spilling from a courtyard onto a terrace, music carrying out over olive trees, and guests speaking in low voices for the first hour because everything is that quiet." },
      { type: "p", text: "Best for: couples who want countryside quiet without the logistics of an island." },
      { type: "callout", body: "Read the full guide: <a href=\"/destination-weddings/catalonia\">Weddings in Catalonia</a>." },

      { type: "h2", text: "Costa Brava — pines, coves and the softer Mediterranean" },
      { type: "p", text: "The Costa Brava is the softer, more private end of the Spanish coast: pine forests down to the water, cliffside villas, and coves that have kept their character. It suits couples who want the sea in the frame but not the crowds — long dinners on a terrace above the water, guests barefoot on stone after midnight." },
      { type: "p", text: "Best for: sea-view ceremonies with a slightly slower, more private feel." },
      { type: "callout", body: "Read the full guide: <a href=\"/destination-weddings/costa-brava\">Weddings on the Costa Brava</a>." },

      { type: "h2", text: "Ibiza — whitewashed fincas and sunset ceremonies" },
      { type: "p", text: "There is a version of Ibiza that has nothing to do with clubs — old fincas at the end of long dirt roads, olive trees, bougainvillea, and a barefoot elegance only this island really does. Our Ibiza weddings live in that world: long tables under fig trees, ceremonies at golden hour, and a dance floor that stays full until the sky lightens." },
      { type: "p", text: "Best for: couples who want the party to matter as much as the vows." },
      { type: "callout", body: "Read the full guide: <a href=\"/destination-weddings/ibiza\">Weddings in Ibiza</a>." },

      { type: "h2", text: "Mallorca — stone estates and quiet luxury" },
      { type: "p", text: "Mallorca is the calm, considered end of the Balearic islands. Stone estates in the Tramuntana, olive groves, and a coastline that keeps its dignity. Direct flights from most of Europe make it one of the easiest islands to get guests to, and one of the most forgiving to plan in." },
      { type: "p", text: "Best for: refined, understated weddings with easy access." },
      { type: "callout", body: "Read the full guide: <a href=\"/destination-weddings/mallorca\">Weddings in Mallorca</a>." },

      { type: "h2", text: "Granada — Moorish palaces and the Alhambra on the horizon" },
      { type: "p", text: "Granada is for couples drawn to history and architecture. Small palaces with tiled courtyards, quiet gardens, and the Alhambra always somewhere in the light. It suits smaller guest counts and couples who want a wedding that could not have happened anywhere else in the world." },
      { type: "p", text: "Best for: intimate weddings with a strong sense of place." },
      { type: "callout", body: "Read the full guide: <a href=\"/destination-weddings/granada\">Weddings in Granada</a>." },

      { type: "h2", text: "Seville — palacios, orange trees and joy" },
      { type: "p", text: "Seville is the region that feels most unmistakably Spanish. Palacios with orange trees in the courtyard, flamenco you didn't schedule but somehow arrives, and a warmth in the light and the people that shifts the whole tone of the weekend upward. It is a joyful place to marry." },
      { type: "p", text: "Best for: a wedding that feels unmistakably, joyfully Spanish." },
      { type: "callout", body: "Read the full guide: <a href=\"/destination-weddings/seville\">Weddings in Seville</a>." },

      { type: "h2", text: "How to actually choose" },
      { type: "p", text: "The questions we ask on every discovery call, in the order that matters most:" },
      { type: "ul", items: [
        "Do you want the sea in the frame, or the countryside quiet around you?",
        "How many of your guests are flying in, and from where? Easy airports change everything.",
        "Are you drawn to the polish of a boutique hotel or the character of a private estate?",
        "Is the party the centerpiece of the weekend, or the ceremony?",
        "How much heat can your guests genuinely tolerate in July and August?",
      ] },
      { type: "p", text: "There is rarely one right answer. There is usually one that is more you — and once you can see it, everything downstream (venue, weekend, timeline) becomes easier to decide." },

      { type: "h2", text: "The regions we don't plan in — and why" },
      { type: "p", text: "We work in the six regions above because we know them the way a local friend does, not the way a website does. There are other beautiful places in Spain to marry; we simply refer those to other planners we trust, rather than pretend to a knowledge we don't have. Boutique work only holds up if the boundaries are honest." },
    ],
    cta: {
      title: "Still narrowing the map?",
      body: "That is exactly what a discovery call is for. Bring your rough vision — we'll help you narrow before you narrow anything else.",
      button: "Book a Discovery Call",
    },
    relatedTitle: "Keep reading",
    related: [
      { label: "Where to get married in Spain — regions hub", href: "/destination-weddings/spain-regions" },
      { label: "What is a destination wedding, exactly?", href: "/blog/what-is-a-destination-wedding" },
      { label: "Month-by-month planning timeline", href: "/blog/wedding-in-spain-planning-timeline" },
    ],
  },

  "wedding-budget-tips-spain": {
    meta: {
      title: "Budget Adjustments That Actually Save Money on a Spain Wedding",
      description:
        "Real, non-cynical ways to bring a Spanish destination wedding budget down without losing what makes the day feel like yours.",
    },
    hero: {
      eyebrow: "Budget",
      h1: "Budget Adjustments That Actually Save Money on a Spain Wedding",
      dek: "The changes that meaningfully move the number — and the ones that don't.",
      readingTime: "8 min read",
    },
    ...DATES["wedding-budget-tips-spain"],
    image: IMAGE["wedding-budget-tips-spain"].src,
    imageAlt: IMAGE["wedding-budget-tips-spain"].alt.en,
    body: [
      { type: "p", text: "There is a whole internet's worth of wedding-budget advice that quietly makes weddings worse. Skip the flowers. Skip the photographer. Make your own invitations at 2 a.m. six weeks out. Most of it saves less than it promises and costs more than you can see." },
      { type: "p", text: "This is the opposite list. These are the adjustments we actually watch save couples real money on Spanish weddings, without hollowing out the day. Some are boring. That is why they work." },

      { type: "h2", text: "1. Shift the weekend, not the wedding" },
      { type: "p", text: "The single biggest lever in Spain is when you marry. A Saturday in Ibiza in August is one price. A Friday in the Catalan countryside in early October is another. Same guest count, similar quality, meaningfully different number. If you are open on dates, ask your planner what the shoulder-season and weekday options look like before you fix anything." },

      { type: "h2", text: "2. Rethink the region, not the ambition" },
      { type: "p", text: "The vision you have — long tables under lights, a sea view, an old stone building — exists in more than one region. Sometimes it exists at a much softer price floor an hour inland. Catalonia and Andalusia in particular tend to give you more room to breathe than the peak islands." },

      { type: "h2", text: "3. Cut thirty, not ten" },
      { type: "p", text: "The counterintuitive part of wedding budgets: cutting ten guests rarely saves what people expect, because most costs are fixed. Cutting thirty starts to move real numbers — smaller venue tier, smaller F&B minimums, fewer transport buses, less rental. If a shorter list is on the table at all, take it seriously." },

      { type: "h2", text: "4. Choose one showpiece, not five" },
      { type: "p", text: "Weddings feel considered when one or two things are unmistakably beautiful. They feel expensive and diluted when everything is competing. Pick your one showpiece — a spectacular tablescape, a chef-led menu, a live band, a truly stunning venue — and let the other elements be quietly good, not spectacular." },

      { type: "h2", text: "5. Trust in-house F&B when it's genuinely good" },
      { type: "p", text: "Many Spanish venues have in-house catering that is excellent, and bringing in an external caterer means paying corkage, kitchen fees and staffing on top. When the in-house team is good, take it. When it isn't, don't. This is exactly the kind of judgement a planner earns their fee on." },

      { type: "h2", text: "6. Shorten the weekend footprint" },
      { type: "p", text: "A welcome dinner, a ceremony day, and a farewell brunch is three events, three transport blocks, and three logistics windows. If the wedding day itself is where your heart is, letting go of one of the bookends can save meaningfully without changing the wedding at all." },

      { type: "h2", text: "7. Invest in the planner, not in what a planner replaces" },
      { type: "p", text: "This isn't a sales line — it is a pattern we watch. Couples who try to save by skipping planning tend to spend more on individual line items that a planner would have negotiated, and to add stress that shows up in the photos. If planning fees don't fit, hire less scope (day-of coordination, for example) rather than skipping it entirely." },
      { type: "callout", title: "See our three tiers", body: "Our services page lays out full planning, partial planning and day-of coordination so you can see which shape fits." },

      { type: "h2", text: "What we don't recommend cutting" },
      { type: "ul", items: [
        "Photography. It is the one part of the day you keep forever.",
        "The bar. A thin bar is more memorable than a thin menu, and not in the way you want.",
        "Guest comfort — shade, water, shuttles in the heat. Uncomfortable guests read as cheap regardless of budget.",
        "Contingency for weather. In Spain a rain plan is standard practice; skipping it doesn't save money, it just adds risk you'll pay for anyway.",
      ] },

      { type: "h2", text: "The honest headline" },
      { type: "p", text: "The couples we see save the most aren't the ones who chase small cuts. They are the ones who make one or two big, calm structural decisions early — the region, the season, the shape of the weekend — and then stop tinkering. The wedding gets simpler and better at the same time." },
    ],
    cta: {
      title: "Talk it through with us",
      body: "A 30-minute discovery call is the fastest way to see which of these actually apply to your wedding and which don't.",
      button: "Book a Discovery Call",
    },
    relatedTitle: "Keep reading",
    related: [
      { label: "How much does a wedding in Spain cost?", href: "/blog/cost-of-a-wedding-in-spain" },
      { label: "Our services and how we work", href: "/services" },
      { label: "Month-by-month planning timeline", href: "/blog/wedding-in-spain-planning-timeline" },
    ],
  },

  "what-is-a-destination-wedding": {
    meta: {
      title: "What Is a Destination Wedding — and How to Start Planning Yours",
      description:
        "A calm introduction to destination weddings — what actually defines them, how they differ from a wedding at home, and how to take the first step.",
    },
    hero: {
      eyebrow: "Getting started",
      h1: "What Is a Destination Wedding — and How to Start Planning Yours",
      dek: "A calm introduction for couples considering marrying somewhere that isn't home.",
      readingTime: "8 min read",
    },
    ...DATES["what-is-a-destination-wedding"],
    image: IMAGE["what-is-a-destination-wedding"].src,
    imageAlt: IMAGE["what-is-a-destination-wedding"].alt.en,
    body: [
      { type: "p", text: "A destination wedding is any wedding that happens somewhere other than where the couple lives. That is the whole definition. It doesn't have to be a beach, it doesn't have to be abroad, and it doesn't have to be small." },
      { type: "p", text: "What makes destination weddings different, in practice, is that the couple isn't near the venue day-to-day, most guests are traveling to be there, and the day is often part of a longer weekend rather than a single afternoon. Everything else — the tone, the size, the formality — is a choice." },

      { type: "h2", text: "Why couples choose them" },
      { type: "p", text: "The reasons we hear most often, in the order we hear them:" },
      { type: "ul", items: [
        "The place matters to them — a country one of them is from, or a region they return to together.",
        "They want fewer guests, more time. Distance is a gentle filter, and the guests who come genuinely want to be there.",
        "Weekends, not hours. Destination weddings usually stretch across two or three days, which changes the whole rhythm of the celebration.",
        "A slightly slower, more considered day. When you can't do it all at home, you tend to stop trying.",
      ] },

      { type: "h2", text: "What is different about planning one" },
      { type: "p", text: "The mechanics change more than the emotions. You will do more of the planning by video call than in person. Site visits become deliberate trips instead of a Saturday drive. Local knowledge — of vendors, of paperwork, of which venues are as good as their photos — becomes disproportionately important. This is the reason destination weddings and boutique planners tend to belong together." },

      { type: "h2", text: "The legal question, honestly" },
      { type: "p", text: "This is where most couples get their first wave of worry, and it is almost always over-thought. In most destinations, including Spain, a symbolic ceremony at your chosen venue — with a celebrant, your vows, and everything your guests would recognise as a wedding — is what actually happens on the day. The legal marriage is then done at home, either just before or just after the trip." },
      { type: "p", text: "It is calmer, cheaper and more flexible than the alternative. Full civil ceremonies in another country are possible but almost always carry residency and paperwork requirements that don't fit an international guest list. A good planner will explain the trade-off honestly and let you choose." },

      { type: "h2", text: "The first three decisions" },
      { type: "p", text: "Almost every destination wedding rests on three early decisions, in this order:" },
      { type: "ul", items: [
        "Country and region. Not the venue yet — the region. This one choice sets the rhythm of the whole weekend.",
        "Rough shape and guest count band. Elopement, intimate wedding, or full-weekend celebration. And a range, not a fixed list.",
        "Weekend and backup weekend. Give yourself two options; the right venue may open one and not the other.",
      ] },
      { type: "p", text: "Everything else — venue, vendors, styling, menus — becomes much easier once those three are decided. Trying to choose them all at once is what makes destination planning feel overwhelming." },

      { type: "h2", text: "When to bring in a planner" },
      { type: "p", text: "Earlier than most couples think. Not because you can't research on your own — you absolutely can — but because a good planner saves you from investing weeks in a direction that quietly doesn't work. Even a single discovery call, before anything is booked, tends to save the whole rest of the process." },
      { type: "p", text: "The kind of planner you want for a destination wedding is one who lives where the wedding is, works only in a small number of regions, and is honest about which weddings are and aren't the right fit for them. Boutique caps exist for a reason." },

      { type: "h2", text: "A quiet first step" },
      { type: "p", text: "If you are somewhere in the middle of \"maybe Spain, maybe somewhere else, definitely not sure yet,\" the calmest first step is a conversation, not a spreadsheet. A discovery call is 30 minutes. It costs nothing. Bring your rough vision — we'll help you see it more clearly, and tell you honestly whether we're the right team to build it with you." },
    ],
    cta: {
      title: "Curious whether Spain is your place?",
      body: "A discovery call is the calmest way to test the idea before you commit to anything.",
      button: "Book a Discovery Call",
    },
    relatedTitle: "Keep reading",
    related: [
      { label: "Where to get married in Spain — regions compared", href: "/blog/wedding-regions-in-spain-compared" },
      { label: "Month-by-month planning timeline", href: "/blog/wedding-in-spain-planning-timeline" },
      { label: "Destination weddings in Spain — full guide", href: "/destination-weddings-spain" },
    ],
  },

  "why-get-married-in-spain": {
    meta: {
      title: "Why Get Married in Spain? A Calm Case for a Spanish Wedding",
      description:
        "Why so many international couples choose Spain — the light, the food, the pace, the ease of gathering people, and the regions that fit different weddings.",
    },
    hero: {
      eyebrow: "Getting started",
      h1: "Why Get Married in Spain?",
      dek: "The honest reasons couples keep choosing Spain — and how to tell whether it is the right fit for yours.",
      readingTime: "8 min read",
    },
    ...DATES["why-get-married-in-spain"],
    image: IMAGE["why-get-married-in-spain"].src,
    imageAlt: IMAGE["why-get-married-in-spain"].alt.en,
    body: [
      { type: "p", text: "Couples come to Spain for different reasons — a grandparent from Andalusia, a summer in Ibiza that never quite left them, a first trip together to Barcelona. What they share is a sense that the country makes hosting easy. The food is generous, the light is long, the pace slows down after lunch, and people know how to sit at a table for four hours without checking a phone. A wedding here inherits all of that." },
      { type: "p", text: "This isn't a sales piece. It is an honest read on why Spain works for a destination wedding, and where it doesn't — so you can decide with your eyes open." },

      { type: "h2", text: "The light, and what it does to a day" },
      { type: "p", text: "From May to early October, Spain gives you a long, warm golden hour that reliably lasts more than an hour. Ceremonies land in that light almost by accident. Photographers you'd have to fly in elsewhere will already be here. This is a small technical thing that shapes how the whole day feels." },

      { type: "h2", text: "Food that carries the celebration" },
      { type: "p", text: "In Spain a wedding meal is not a five-minute course between speeches. It is the celebration. An aperitivo that runs an hour longer than planned because nobody wants to move indoors. A menu built around local produce, without preciousness. Wine your guests will remember by name. You don't have to fight the culture to make the food matter — it already does." },

      { type: "h2", text: "Guests actually come" },
      { type: "p", text: "Spain sits at the centre of Europe's flight map and is a straightforward long-haul destination from the Americas. Barcelona, Palma, Ibiza, Madrid, Málaga and Seville all have direct routes from most major cities. In practice, RSVPs are higher for a Spanish wedding than for many closer destinations, because people already wanted an excuse to come." },

      { type: "h2", text: "A country of very different weddings" },
      { type: "p", text: "Spain is not one aesthetic. A masia in the Catalan hills, a finca in Ibiza, a palacio in Seville and a stone estate in Mallorca are four completely different weddings — and all of them are Spain. That variety means your wedding can look like you, not like a template." },
      { type: "ul", items: [
        "Catalonia — countryside masias and vineyards, within an hour of Barcelona.",
        "Costa Brava — pine forests, quiet coves and cliffside villas.",
        "Ibiza — whitewashed fincas, sunset ceremonies, dance floors that stay full.",
        "Mallorca — stone estates in the Tramuntana, understated and easy to reach.",
        "Granada — small palaces with tiled courtyards and the Alhambra on the horizon.",
        "Seville — palacios with orange trees, warmth in the light and the people.",
      ] },
      { type: "callout", body: "Read the full comparison: <a href=\"/blog/wedding-regions-in-spain-compared\">Where to get married in Spain — the regions compared</a>." },

      { type: "h2", text: "Legally simpler than couples expect" },
      { type: "p", text: "Most international couples who marry in Spain do the legal marriage at home and hold a symbolic ceremony here on the day. That single decision removes almost all of the paperwork friction and gives you full freedom on venue, celebrant and timing. Full civil ceremonies in Spain are possible but usually carry residency and document requirements that don't fit an international guest list — a good planner will walk you through both paths honestly." },
      { type: "callout", body: "Read more: <a href=\"/blog/getting-married-in-spain-legal-requirements\">Getting legally married in Spain as a foreigner — civil vs symbolic</a>." },

      { type: "h2", text: "A reasonable, honest range on cost" },
      { type: "p", text: "Spain is not the cheapest country in Europe to marry in, and it isn't the most expensive. The range is wide because the choices are wide: an elopement can sit around €3,000–€9,000, a 30-guest wedding around €20,000–€45,000, and a full 30–100 guest celebration anywhere from €35,000 to €120,000+. What Spain buys you at every level is a certain generosity — good food, real wine, staff who care — that doesn't always exist at the same price elsewhere." },

      { type: "h2", text: "Where Spain might not be your place" },
      { type: "p", text: "Some couples read this and know quickly. Others don't, and that is worth saying. Spain may not be right if peak summer heat is a hard no for your guests, if you want a fully legal foreign civil ceremony on the day without extra bureaucracy, or if your guest list is concentrated somewhere with no direct flight and a tight budget for travel. Those are honest reasons to look elsewhere — we say so on discovery calls when they apply." },

      { type: "h2", text: "The short version" },
      { type: "p", text: "Spain works because the whole country already knows how to host. The light, the food, the pace and the range of regions do most of the heavy lifting; a good planner just makes sure you get to enjoy them. If that sounds like the wedding you're picturing, it probably is." },
    ],
    cta: {
      title: "Wondering whether Spain is your place?",
      body: "A 30-minute discovery call is the calmest way to talk it through, region by region, before anything is booked.",
      button: "Book a Discovery Call",
    },
    relatedTitle: "Keep reading",
    related: [
      { label: "Where to get married in Spain — regions compared", href: "/blog/wedding-regions-in-spain-compared" },
      { label: "Getting legally married in Spain as a foreigner", href: "/blog/getting-married-in-spain-legal-requirements" },
      { label: "Destination weddings in Spain — full guide", href: "/destination-weddings-spain" },
    ],
  },

  "common-mistakes-planning-a-wedding-in-spain": {
    meta: {
      title: "Common Mistakes Couples Make Planning a Wedding in Spain",
      description:
        "The mistakes we see most often when international couples plan a Spanish destination wedding — and calm, practical ways to avoid each one.",
    },
    hero: {
      eyebrow: "Planning",
      h1: "Common Mistakes Couples Make When Planning a Wedding in Spain",
      dek: "Nothing dramatic — just the quiet, avoidable missteps that make destination planning harder than it needs to be.",
      readingTime: "9 min read",
    },
    ...DATES["common-mistakes-planning-a-wedding-in-spain"],
    image: IMAGE["common-mistakes-planning-a-wedding-in-spain"].src,
    imageAlt: IMAGE["common-mistakes-planning-a-wedding-in-spain"].alt.en,
    body: [
      { type: "p", text: "Most wedding-planning mistakes are not dramatic. They don't ruin the day. They just quietly cost money, add stress, or shift the wedding a little further away from what the couple actually wanted. From ten years of planning in Spain, these are the ones we see most often — and, more importantly, how to sidestep each one." },

      { type: "h2", text: "1. Booking the venue before the region is settled" },
      { type: "p", text: "It is easy to fall in love with a photograph. It is much harder to unpick that decision once deposits are paid and half your friends have booked flights. The region — Catalonia, Ibiza, Mallorca, Andalusia — sets the rhythm of the whole weekend: heat, travel time, the feel of the light, the kind of food that fits. Choose the region first, then the venue." },

      { type: "h3", text: "How to avoid it" },
      { type: "p", text: "Give yourself two or three weekends of doing nothing but reading about regions. Talk to a planner honestly about what your Saturday should feel like. Only then look at venues." },

      { type: "h2", text: "2. Underestimating the summer heat" },
      { type: "p", text: "July and August in Seville, Granada or inland Mallorca can push past 40°C. Guests in wool suits sweat through the ceremony. Elderly relatives struggle. Outdoor ceremonies at 2 p.m. become genuinely uncomfortable. Late June and September usually solve it; a shaded ceremony window and cold drinks on arrival always help." },

      { type: "h2", text: "3. Treating the rain plan as pessimism" },
      { type: "p", text: "Spain is sunny. It also rains, sometimes hard, especially in shoulder season. A serious rain plan — a tent option, an indoor alternative, agreed cut-off times to make the call — is standard in any well-planned Spanish wedding. Skipping it doesn't save money; it just moves the cost to the week of the wedding, under pressure." },

      { type: "h2", text: "4. Copying an at-home wedding into a foreign country" },
      { type: "p", text: "The white marquee, the specific band, the caterer from home — every insistence on replicating something exactly usually adds cost, logistics or friction. Spain has its own version of most of these, often better, at a fraction of the effort. The best destination weddings borrow from the country instead of importing over it." },

      { type: "h2", text: "5. Trying to save by skipping a planner" },
      { type: "p", text: "It is the most expensive kind of saving we see. Couples spend more on individual vendors than a local planner would have negotiated, book venues that don't fit, and arrive at the wedding week exhausted. If a full planning fee doesn't fit, a partial or day-of coordination almost always does — and both pay for themselves." },
      { type: "callout", title: "See how we work", body: "Our services page lays out full planning, partial planning and wedding day coordination side by side." },

      { type: "h2", text: "6. Not visiting once before the wedding week" },
      { type: "p", text: "You don't need three trips. But one visit — venue walkthrough, tasting, meeting the planner in person — meaningfully changes how confident you feel in the final months. Weddings planned entirely on video can still be beautiful, and we do them; couples who visit once always sleep better." },

      { type: "h2", text: "7. Confusing legal marriage with symbolic ceremony" },
      { type: "p", text: "Most international couples end up doing the legal marriage at home and holding a symbolic ceremony in Spain — it is calmer, cheaper and more flexible. The mistake is not knowing that early, and getting anxious about paperwork that turns out not to apply. Ask the question in the first month, decide, then stop worrying about it." },
      { type: "callout", body: "Read more: <a href=\"/blog/getting-married-in-spain-legal-requirements\">Getting legally married in Spain as a foreigner</a>." },

      { type: "h2", text: "8. Booking wedding-adjacent vendors too late" },
      { type: "p", text: "Photography, music and hair and makeup all book earlier than most couples expect in Spain — the good ones are locked six to twelve months out. If you're going to be picky about anything, be picky about these three, and be early." },

      { type: "h2", text: "9. Over-scheduling the weekend" },
      { type: "p", text: "Welcome dinner, hike, ceremony, dinner, brunch, sunset boat, farewell lunch. Ambition looks great on a document and exhausts everyone by Saturday afternoon. The best wedding weekends breathe — one or two anchor moments a day, real gaps in between, guests choosing what they want to do." },

      { type: "h2", text: "10. Not writing a guest guide" },
      { type: "p", text: "A one-page guide — how to fly in, where to stay, dress code, transport plan, dietary options — solves 80% of the questions guests ask you at 11 p.m. the night before. Send it with the invitations, update it a month before. It is a small kindness that pays back everywhere." },

      { type: "h2", text: "11. Fixating on Instagram and ignoring the room" },
      { type: "p", text: "A wedding needs to look beautiful in the moment, not just in a saved reel. Uplighting that flatters the room, seating that lets people talk, a band that reads the floor — these decisions barely photograph and change everything. Design the day for the people in it first." },

      { type: "h2", text: "12. Waiting to have a discovery call" },
      { type: "p", text: "The single most avoidable mistake. Couples spend months reading, spreadsheeting, tab-hoarding — and then in one 30-minute call with a planner, get more clarity than the previous three months combined. Talk early. It saves the rest of the process." },

      { type: "h2", text: "The quiet pattern behind all of them" },
      { type: "p", text: "Almost every mistake on this list is a version of the same thing: making detail decisions before structural ones. Region before venue. Rain plan before Pinterest board. Planner before caterer. Guest guide before favours. When the big decisions come first, everything downstream feels lighter." },
    ],
    cta: {
      title: "Talk it through before you commit",
      body: "A discovery call is where most of these mistakes get pre-empted — in 30 minutes, before anything is booked.",
      button: "Book a Discovery Call",
    },
    relatedTitle: "Keep reading",
    related: [
      { label: "Month-by-month planning timeline", href: "/blog/wedding-in-spain-planning-timeline" },
      { label: "Budget adjustments that actually save money", href: "/blog/wedding-budget-tips-spain" },
      { label: "Our services and how we work", href: "/services" },
    ],
  },

  "getting-married-in-spain-legal-requirements": {
    meta: {
      title: "Getting Legally Married in Spain as a Foreigner: Civil vs Symbolic",
      description:
        "The honest, up-to-date guide to marrying legally in Spain as a foreign couple — civil ceremony requirements, symbolic ceremony, paperwork and timelines.",
    },
    hero: {
      eyebrow: "Legal",
      h1: "Getting Legally Married in Spain as a Foreigner: Civil vs Symbolic Ceremony",
      dek: "What the law actually asks of foreign couples marrying in Spain — and why most choose a symbolic ceremony here and a civil marriage at home.",
      readingTime: "10 min read",
    },
    ...DATES["getting-married-in-spain-legal-requirements"],
    image: IMAGE["getting-married-in-spain-legal-requirements"].src,
    imageAlt: IMAGE["getting-married-in-spain-legal-requirements"].alt.en,
    body: [
      { type: "p", text: "There are two questions couples ask us most often about the legal side of marrying in Spain. Can we legally get married here as foreigners? And, if we can, should we? The honest answers are yes, and usually not — for reasons that have nothing to do with red tape scaremongering and everything to do with how the two paths actually work in practice." },
      { type: "p", text: "This is a plain-language walkthrough of both options. Anything specific to your citizenship, residency status or autonomous community needs to be confirmed with a local Registro Civil or a Spanish family lawyer — the rules move, and they vary from region to region. We flag every claim you should verify rather than take on faith." },

      { type: "callout", title: "One important caveat", body: "Legal rules for foreign marriages in Spain vary by autonomous community, nationality and religion, and change from time to time. Treat everything below as an accurate general orientation, not legal advice, and confirm the specifics that apply to you with the local Registro Civil or a Spanish family lawyer before making decisions." },

      { type: "h2", text: "The two ceremonies you'll hear about" },
      { type: "p", text: "Almost every foreign couple marrying in Spain is choosing between two structures." },
      { type: "h3", text: "Option A — full civil ceremony in Spain" },
      { type: "p", text: "A legally binding marriage under Spanish law, performed by a civil authority (typically the Registro Civil, an ayuntamiento, or a notary depending on the region). You are legally married the moment the ceremony ends; the marriage is then recorded in the Spanish civil registry and, with an apostilled certificate, recognised in your home country." },
      { type: "h3", text: "Option B — legal marriage at home, symbolic ceremony in Spain" },
      { type: "p", text: "You marry legally in your home country (usually a short registry appointment) either before or after the trip. In Spain, on the day, you have a symbolic ceremony at the venue of your choice: a celebrant of your choosing, your vows, rings, readings, and everything your guests would recognise as a wedding — with no legal effect, and no legal restrictions on venue, timing or celebrant." },

      { type: "h2", text: "Why most international couples choose the symbolic route" },
      { type: "p", text: "This is not a bias of ours — it is a pattern. The symbolic-plus-legal-at-home path removes almost every friction point that comes with foreign civil marriage in Spain, and adds only one small errand at home." },
      { type: "ul", items: [
        "Full freedom on venue: masias, fincas, private estates, cliffside terraces — none of which are usually authorised for legal civil ceremonies.",
        "Full freedom on timing: sunset ceremonies, weekday weddings, whatever suits the day.",
        "Full freedom on celebrant: someone bilingual, someone who knows you, someone who can lead the ceremony in your language.",
        "No residency requirement to worry about.",
        "No document translation and apostille chain to schedule against the wedding date.",
        "No language barrier during the ceremony itself.",
      ] },
      { type: "p", text: "The one trade-off: a separate legal appointment at home. For most couples this is a 20-minute registry visit with two witnesses, done quietly a few weeks before or after the trip. Many treat it as a private moment; some tell no one until after the Spanish celebration." },

      { type: "h2", text: "What a full civil ceremony in Spain actually requires" },
      { type: "p", text: "If you would still prefer to marry legally in Spain — for family, symbolic or practical reasons — here is the honest picture of what the process typically involves. Details vary by autonomous community; verify with the local Registro Civil that will handle your file." },
      { type: "h3", text: "1. A residency link" },
      { type: "p", text: "Spanish civil marriage generally requires at least one of the partners to be a Spanish resident, or to have established sufficient residency in the municipality where you want to marry — historically two years of continuous residency, though this varies. Purely non-resident foreign couples usually cannot marry legally in Spain in a civil ceremony without meeting this requirement." },
      { type: "h3", text: "2. The document file" },
      { type: "p", text: "A complete civil-marriage file typically includes, for each partner: valid passport, full birth certificate, certificate of no impediment (or equivalent from your home country stating you are free to marry), proof of residency (empadronamiento), and a sworn declaration of civil status. All foreign documents usually need an apostille and a sworn translation into Spanish (traducción jurada). This assembly is the slowest step; allow months, not weeks." },
      { type: "h3", text: "3. The registry interview and notice period" },
      { type: "p", text: "Once the file is submitted to the Registro Civil, there is a review process — often including an interview — followed by a public-notice period before the marriage can take place. The full timeline from first document to legal ceremony commonly runs six months or longer, depending on region and workload." },
      { type: "h3", text: "4. The ceremony itself" },
      { type: "p", text: "The civil ceremony is conducted in Spanish by an authorised official at an authorised venue — typically the Registro Civil office, the town hall, a notary, or a venue that has been formally approved for civil weddings. Not every beautiful private venue in Spain is authorised, which is one of the most common surprises for foreign couples." },
      { type: "callout", title: "Verify before assuming", body: "Requirements, residency thresholds and authorised venues differ across autonomous communities and change over time. Confirm the current rules with the local Registro Civil or a Spanish family lawyer before building a wedding plan around a full civil ceremony in Spain." },

      { type: "h2", text: "Religious ceremonies" },
      { type: "p", text: "Catholic and certain other religious ceremonies performed in Spain can carry legal effect when performed by an officiant recognised by the Spanish state and registered with the civil registry. Requirements for foreign couples still apply. If a religious ceremony is central for you, treat it as a third path with its own paperwork — and start it early." },

      { type: "h2", text: "A short decision framework" },
      { type: "p", text: "In our experience, the choice usually resolves cleanly against these questions:" },
      { type: "ul", items: [
        "Do you want to marry at a private venue that isn't authorised for civil ceremonies? → Symbolic in Spain, legal at home.",
        "Is neither partner a Spanish resident? → Symbolic in Spain, legal at home.",
        "Do you want the ceremony conducted in your own language, by someone who knows you? → Symbolic in Spain, legal at home.",
        "Do you have Spanish residency, want the legal moment to be here, and are comfortable with the paperwork timeline? → Consider a full civil ceremony in Spain.",
      ] },

      { type: "h2", text: "What a symbolic ceremony feels like" },
      { type: "p", text: "This is the piece that reassures couples most. A well-run symbolic ceremony in Spain is indistinguishable from a wedding to everyone in the room. There is an aisle, music, readings, vows, rings, a celebrant who has met you and can lead the ceremony in your language, an emotional structure, and — if you want it — a symbolic act (a handfasting, a sand ceremony, a shared cup, a tree planting). None of it is legally binding. All of it is genuinely a wedding." },

      { type: "h2", text: "The most common quiet trap" },
      { type: "p", text: "The mistake we see most is couples committing to a beautiful private venue and only afterwards asking whether a full civil ceremony can happen there. Usually it can't. If your heart is set on a specific private estate, plan for a symbolic ceremony on the day and a civil marriage at home. Reverse the order and you will spend months trying to make the paperwork fit the venue instead of the wedding fit the wedding." },

      { type: "h2", text: "How we can help" },
      { type: "p", text: "As planners, we don't act as your lawyer — but we know the questions to ask, the timelines to protect, and the vendors (celebrants, translators, notaries) who work fluently with foreign couples. On a discovery call we can tell you, in one conversation, which of the two paths fits your situation and how to sequence it against the wedding date." },
    ],
    cta: {
      title: "Not sure which path fits?",
      body: "A 30-minute discovery call is the calmest way to talk through your specific situation — nationalities, residency, venue, timeline — and decide.",
      button: "Book a Discovery Call",
    },
    relatedTitle: "Keep reading",
    related: [
      { label: "Destination weddings in Spain — full guide", href: "/destination-weddings-spain" },
      { label: "Why get married in Spain?", href: "/blog/why-get-married-in-spain" },
      { label: "Common mistakes couples make planning a wedding in Spain", href: "/blog/common-mistakes-planning-a-wedding-in-spain" },
    ],
  },
};

/* ============================ PORTUGUESE ============================ */

const ptIndex: BlogIndexContent = {
  meta: {
    title: "O Diário | Sol Mediterraneo Weddings Co.",
    description:
      "Notas honestas e detalhadas sobre planejar um Destination Wedding na Espanha — custos, cronogramas, regiões e as pequenas decisões que fazem o dia parecer seu.",
  },
  hero: {
    eyebrow: "O Diário",
    h1: "Notas sobre planejar um casamento na Espanha",
    intro:
      "Escrevemos o que diríamos a uma amiga planejando do exterior — nada vendedor, nada enrolado. Leia os guias abaixo e nos procure quando quiser conversar.",
  },
  cardCta: "Ler o artigo",
};

const ptPosts: Record<PostKey, PostContent> = {
  "cost-of-a-wedding-in-spain": {
    meta: {
      title: "Quanto Custa um Casamento na Espanha? Um Panorama Realista",
      description:
        "Um guia calmo e honesto sobre o que um Destination Wedding na Espanha realmente custa — elopements, casamentos médios e maiores, e o que mais move o número.",
    },
    hero: {
      eyebrow: "Orçamento",
      h1: "Quanto Custa um Casamento na Espanha?",
      dek: "Um panorama claro do que molda o número — do elopement íntimo à celebração de fim de semana inteiro.",
      readingTime: "10 min de leitura",
    },
    ...DATES["cost-of-a-wedding-in-spain"],
    image: IMAGE["cost-of-a-wedding-in-spain"].src,
    imageAlt: IMAGE["cost-of-a-wedding-in-spain"].alt.pt,
    body: [
      { type: "p", text: "Quase todo casal que nos escreve começa com uma versão da mesma pergunta: quanto custa, de verdade, um casamento na Espanha? É a pergunta mais honesta que existe, e merece uma resposta honesta — não um único número lustroso, mas uma faixa, e o raciocínio por trás dela." },
      { type: "p", text: "Abaixo está como enquadramos orçamento nas nossas conversas iniciais. Trate cada valor como referência de trabalho, não como cotação — o mesmo número de convidados no mesmo fim de semana pode custar de forma muito diferente conforme região, tipo de venue, escolhas de comida e bebida e quanto do fim de semana você quer que o casamento ocupe." },

      { type: "h2", text: "Três formatos amplos, três faixas amplas" },
      { type: "p", text: "A maioria dos casamentos que planejamos entra em um de três formatos. Nomeá-los ajuda a enxergar onde a sua visão pode se encaixar antes de entrarmos em linhas individuais." },

      { type: "h3", text: "Elopements e micro-casamentos (2–12 convidados)" },
      { type: "p", text: "Investimento total típico: €3.000 – €9.000+, sem contar viagem e hospedagem do casal." },
      { type: "p", text: "Um elopement na Espanha costuma ser a versão mais alegre e menos estressante do dia. Vocês dois, ou um punhado de pessoas, uma cerimônia em um lugar que significa algo, um almoço longo depois. O número depende menos do número de convidados e mais da região, do fotógrafo, da comida e da estética." },

      { type: "h3", text: "Casamentos íntimos (cerca de 30 convidados)" },
      { type: "p", text: "Investimento total típico: €20.000 – €45.000+." },
      { type: "p", text: "É o formato que mais surpreende casais — um casamento de 30 convidados bem feito na Espanha não é um orçamento pequeno, porque a maior parte dos custos fixos (venue, planejamento, fotografia, flores, música) não escala de forma linear. O que se ganha é um dia genuinamente pessoal: uma mesa longa, conversa real e espaço para respirar." },

      { type: "h3", text: "Casamentos completos (aproximadamente 30–100 convidados)" },
      { type: "p", text: "Investimento total típico: €35.000 – €120.000+." },
      { type: "p", text: "A faixa é ampla porque as escolhas são amplas. Um jantar em masia para 60 fica de um lado. Uma tomada exclusiva de fim de semana em propriedade privada, com welcome dinner, cerimônia, jantar sentado e festa até tarde, do outro. Ambos são bonitos; são simplesmente casamentos diferentes." },

      { type: "h2", text: "O que de fato move o número" },
      { type: "p", text: "Uma vez definido o formato, cinco variáveis fazem quase todo o movimento. Se sua primeira estimativa parecer alta ou baixa demais, uma delas costuma ser a razão." },

      { type: "h3", text: "1. Região e temporada" },
      { type: "p", text: "Ibiza em agosto e Mallorca em setembro têm prêmio de preço — venues, equipe e hospedagem estão todos em alta demanda. Costa Brava, interior da Catalunha, Granada e Sevilha costumam ser mais generosos, especialmente em maio, junho e início de outubro. O mesmo número de convidados pode variar 20–40% só mudando o ponto no mapa ou o fim de semana." },

      { type: "h3", text: "2. Tipo de venue e exclusividade" },
      { type: "p", text: "Uma masia restaurada alugada por um dia é um número. A mesma masia alugada por um fim de semana inteiro, com a família dormindo no local, é outro. A tomada exclusiva do fim de semana costuma ser a maior alavanca do orçamento — e, para muitos casais, a escolha que mais muda a sensação do casamento." },

      { type: "h3", text: "3. Comida e bebida" },
      { type: "p", text: "Costuma ser a maior linha depois do venue. Um aperitivo generoso, um menu pensado com vinho local e um bar bem servido vale o investimento — é o que os convidados vão lembrar. O intervalo entre um banquete eficiente e uma experiência assinada por chef é real e vale entender cedo." },

      { type: "h3", text: "4. Número de convidados" },
      { type: "p", text: "O contraintuitivo: cortar dez pessoas raramente economiza tanto quanto se espera, porque muitos custos são fixos. Cortar trinta, ou passar de um fim de semana inteiro para um evento de um dia só, economiza bem mais." },

      { type: "h3", text: "5. Extensão do fim de semana" },
      { type: "p", text: "Uma cerimônia e um jantar é um orçamento. Adicionar welcome dinner, brunch de despedida e transporte por três dias é outro. Vale decidir cedo se você quer um casamento ou um fim de semana de casamento — ambos são lindos, são apenas investimentos diferentes." },

      { type: "h2", text: "Como funciona a nossa taxa de planejamento" },
      { type: "p", text: "Somos um estúdio boutique e limitamos o ano a doze casamentos. Nossa taxa é cotada como valor fixo para o escopo que você realmente precisa — Wedding Planning completo, parcial, ou apenas coordenação do dia — e não como percentual do gasto total. Podemos passar as faixas e estruturas em uma conversa." },

      { type: "callout", title: "Veja como podemos ajudar", body: "A página de serviços descreve as três formas como trabalhamos, da coordenação do dia ao Wedding Planning completo." },

      { type: "h2", text: "Como ler a primeira estimativa sem pânico" },
      { type: "p", text: "O mais útil que podemos fazer em uma primeira conversa é dar uma faixa honesta para o seu formato de casamento, na sua região preferida, no seu mês preferido — e mostrar onde há flexibilidade real. Números só assustam quando chegam sem contexto." },
      { type: "p", text: "Se a primeira estimativa vier acima do esperado, quase sempre há caminhos calmos, sem cinismo, para trazer o número: mudar a temporada, escolher uma região com piso de preço mais suave, ajustar o fim de semana, ou reduzir a lista de forma considerada. Se vier muito abaixo, isso também merece atenção — um número suspeitosamente baixo costuma esconder algo." },

      { type: "h2", text: "A resposta curta" },
      { type: "p", text: "Não existe um único \"custo de casamento na Espanha\". Existe o seu casamento, na sua região, no seu mês, com o seu número de convidados. Uma vez definidos esses pontos, conseguimos colocar uma faixa real na sua frente em uma única conversa — e você pode decidir, com calma, se quer seguir." },
    ],
    cta: {
      title: "Pronto para ver a sua faixa real?",
      body: "Uma conversa de 30 minutos é a forma mais calma de transformar tudo isso em um número com que dá para planejar.",
      button: "Agende uma conversa",
    },
    relatedTitle: "Continue lendo",
    related: [
      { label: "Ajustes de orçamento que economizam de verdade", href: "/pt/blog/dicas-orcamento-casamento-espanha" },
      { label: "Onde casar na Espanha — regiões comparadas", href: "/pt/blog/regioes-para-casar-na-espanha-comparadas" },
      { label: "Nossos serviços e como trabalhamos", href: "/pt/servicos" },
    ],
  },

  "wedding-in-spain-planning-timeline": {
    meta: {
      title: "Planejando um Casamento na Espanha do Exterior: Cronograma Mês a Mês",
      description:
        "Um cronograma calmo e realista para planejar um Destination Wedding na Espanha do exterior — o que decidir quando, e o que pode esperar.",
    },
    hero: {
      eyebrow: "Planejamento",
      h1: "Planejando um Casamento na Espanha do Exterior: Um Cronograma Mês a Mês",
      dek: "Um plano tranquilo, mês a mês, para casais construindo um casamento espanhol de outro país.",
      readingTime: "9 min de leitura",
    },
    ...DATES["wedding-in-spain-planning-timeline"],
    image: IMAGE["wedding-in-spain-planning-timeline"].src,
    imageAlt: IMAGE["wedding-in-spain-planning-timeline"].alt.pt,
    body: [
      { type: "p", text: "Planejar um casamento em um país onde você não mora parece maior do que é. A razão não é o idioma nem a distância — é que tudo parece precisar acontecer ao mesmo tempo. Não precisa. Um Destination Wedding na Espanha tem um ritmo, e assim que você enxerga o ritmo, o projeto inteiro fica calmo." },
      { type: "p", text: "O cronograma abaixo assume cerca de doze meses de janela. Também funciona em janelas menores — regularmente planejamos casamentos lindos em oito ou seis meses — mas doze dão espaço para escolher devagar e mudar de ideia uma vez." },

      { type: "h2", text: "12–10 meses antes — formato e lugar" },
      { type: "ul", items: [
        "Decidir o formato: elopement, casamento íntimo ou celebração de fim de semana.",
        "Combinar a faixa aproximada de convidados (não a lista ainda — a faixa).",
        "Escolher a região, ou pré-selecionar duas. É a decisão que destrava todo o resto.",
        "Agendar uma discovery call com um Wedding Planner e começar a conversa de orçamento em faixas reais.",
        "Definir um fim de semana preferido e um alternativo.",
      ] },

      { type: "h2", text: "10–8 meses antes — venue e âncoras" },
      { type: "ul", items: [
        "Visitar (presencial ou por vídeo) uma lista curta de venues; fechar com o que sente certo, não só o que fotografa melhor.",
        "Confirmar o Wedding Planner e o escopo de envolvimento (completo, parcial, coordenação).",
        "Reservar o fotógrafo — os bons fecham agenda primeiro.",
        "Enviar save-the-date para que convidados internacionais organizem voos com antecedência.",
      ] },

      { type: "h2", text: "8–6 meses antes — o núcleo criativo" },
      { type: "ul", items: [
        "Escolher o buffet ou confirmar o time interno do venue e começar as conversas de menu.",
        "Reservar florais, música (cerimônia, DJ ou banda) e beleza.",
        "Decidir o tipo de cerimônia — para a maioria dos casais internacionais, a cerimônia simbólica no venue é a mais simples.",
        "Iniciar a papelada legal, se quiser casamento civil em casa antes ou depois da viagem.",
        "Abrir bloqueio em hotéis próximos ou coordenar hospedagem no venue.",
      ] },

      { type: "h2", text: "6–4 meses antes — o fim de semana toma forma" },
      { type: "ul", items: [
        "Desenhar o fim de semana: welcome dinner, dia da cerimônia, brunch de despedida — decidir o que vocês querem, não o que se sentem obrigados a incluir.",
        "Fechar a lista e enviar os convites formais.",
        "Confirmar transporte (shuttles dos convidados, carros dos noivos).",
        "Fazer degustação com o buffet.",
        "Começar as provas de vestido e traje, se ainda não começaram.",
      ] },

      { type: "h2", text: "4–2 meses antes — detalhes e logística" },
      { type: "ul", items: [
        "Montar o mapa de mesas conforme os RSVPs chegam.",
        "Fechar papelaria, sinalização e lembranças.",
        "Confirmar o celebrante e alinhar a estrutura da cerimônia.",
        "Conversar contingência: plano de chuva é padrão em qualquer casamento espanhol bem planejado, não sinal de que algo vai mal.",
        "Enviar aos convidados um guia prático: como chegar, o que levar, dress code, a agenda do fim de semana.",
      ] },

      { type: "h2", text: "1 mês antes — a calma antes" },
      { type: "ul", items: [
        "Números finais para buffet, floricultura e venue.",
        "Cronograma completo do dia compartilhado com todos os fornecedores.",
        "Pagamentos e gorjetas organizados.",
        "Todos os horários de transporte dos convidados confirmados.",
        "Montar o kit de emergência; passar o cérebro do planejamento ao seu Wedding Planner.",
      ] },

      { type: "h2", text: "A semana do casamento" },
      { type: "p", text: "É aqui que um bom planner justifica o valor. Confirmações com fornecedores, welcome bags nos quartos, walkthrough final no venue, e — mais importante — vocês dois fazendo o mínimo humanamente possível. O casamento deve chegar até vocês, não o contrário." },

      { type: "h2", text: "O que pode esperar — e o que não pode" },
      { type: "p", text: "Casais se preocupam mais com as coisas erradas. Menu, lembranças e papelaria podem esperar. Venue, Wedding Planner, fotógrafo e faixa de convidados não podem — essas quatro decisões sustentam todo o resto, e as melhores opções realmente fecham agenda primeiro." },

      { type: "h2", text: "Planejamento em menos de doze meses" },
      { type: "p", text: "É totalmente viável. Oito meses é confortável para a maioria dos casamentos. Seis é possível com a região certa, o fim de semana certo e um planner já mergulhado na rede local. O trade-off é escolha: você escolhe entre o que ainda está disponível, não entre o universo inteiro de venues. Frequentemente isso é uma bênção." },
    ],
    cta: {
      title: "Onde começa o seu cronograma?",
      body: "Uma discovery call rápida ajuda a olhar sua janela honestamente e dizer se é folgada, apertada ou ambiciosa.",
      button: "Agende uma conversa",
    },
    relatedTitle: "Continue lendo",
    related: [
      { label: "O que é, exatamente, um Destination Wedding?", href: "/pt/blog/o-que-e-um-destination-wedding" },
      { label: "Quanto custa um casamento na Espanha?", href: "/pt/blog/custo-de-um-casamento-na-espanha" },
      { label: "Destination Wedding na Espanha — guia completo", href: "/pt/casar-na-espanha" },
    ],
  },

  "wedding-regions-in-spain-compared": {
    meta: {
      title: "Onde Casar na Espanha: As Regiões Comparadas",
      description:
        "Uma comparação calma e honesta das melhores regiões para casar na Espanha — Catalunha, Costa Brava, Ibiza, Mallorca, Granada e Sevilha.",
    },
    hero: {
      eyebrow: "Regiões",
      h1: "Onde Casar na Espanha: As Regiões Comparadas",
      dek: "Seis regiões, seis casamentos bem diferentes — e como descobrir qual é o seu.",
      readingTime: "11 min de leitura",
    },
    ...DATES["wedding-regions-in-spain-compared"],
    image: IMAGE["wedding-regions-in-spain-compared"].src,
    imageAlt: IMAGE["wedding-regions-in-spain-compared"].alt.pt,
    body: [
      { type: "p", text: "A Espanha não é um só país quando se fala em casamento. Uma masia no interior catalão não tem nada a ver com uma finca branca em Ibiza, e um palácio sevilhano tem outra alma de uma propriedade mallorquina acima do mar. Escolher a região não é uma pequena decisão estética — ela define o ritmo do fim de semana inteiro." },
      { type: "p", text: "Abaixo, nossa leitura honesta das seis regiões em que mais trabalhamos. Leia devagar. A região certa costuma ser aquela que fica voltando à sua cabeça, em silêncio." },

      { type: "h2", text: "Catalunha — interior, sem deixar a Espanha continental" },
      { type: "p", text: "Masias antigas em pedra, vinhedos do Penedès e propriedades nas encostas, quase todos a uma hora de Barcelona. A Catalunha premia casais que querem um dia mais devagar, mais aterrado: o jantar saindo do pátio para o terraço, a música indo por cima das oliveiras, e os convidados falando baixo na primeira hora porque tudo é assim, silencioso." },
      { type: "p", text: "Ideal para: quem quer o silêncio do interior sem a logística de uma ilha." },
      { type: "callout", body: "Guia completo: <a href=\"/pt/casamentos-destino/catalunha\">Casar na Catalunha</a>." },

      { type: "h2", text: "Costa Brava — pinheiros, enseadas e o Mediterrâneo mais suave" },
      { type: "p", text: "A Costa Brava é o lado mais suave e mais privado do litoral espanhol: pinheiros até a água, villas nos penhascos, enseadas que mantiveram o caráter. Combina com casais que querem o mar na moldura mas não a multidão — jantares longos no terraço acima da água, convidados descalços na pedra depois da meia-noite." },
      { type: "p", text: "Ideal para: cerimônias com vista para o mar em ritmo mais privado." },
      { type: "callout", body: "Guia completo: <a href=\"/pt/casamentos-destino/costa-brava\">Casar na Costa Brava</a>." },

      { type: "h2", text: "Ibiza — fincas brancas e cerimônias no pôr do sol" },
      { type: "p", text: "Existe uma Ibiza que não tem nada a ver com clubes — fincas antigas no fim de estradas de terra, oliveiras, bougainvilles e uma elegância descalça que só essa ilha faz de verdade. Nossos casamentos em Ibiza vivem nesse mundo: mesas longas debaixo das figueiras, cerimônias na hora dourada, pista cheia até o céu começar a clarear." },
      { type: "p", text: "Ideal para: casais que querem que a festa importe tanto quanto os votos." },
      { type: "callout", body: "Guia completo: <a href=\"/pt/casamentos-destino/ibiza\">Casar em Ibiza</a>." },

      { type: "h2", text: "Mallorca — propriedades de pedra e luxo tranquilo" },
      { type: "p", text: "Mallorca é o lado calmo e considerado das Baleares. Propriedades em pedra na Tramuntana, olivais e uma costa que mantém a dignidade. Voos diretos de quase toda a Europa a tornam uma das ilhas mais fáceis de reunir convidados, e das mais generosas para planejar." },
      { type: "p", text: "Ideal para: casamentos refinados e discretos com acesso fácil." },
      { type: "callout", body: "Guia completo: <a href=\"/pt/casamentos-destino/maiorca\">Casar em Mallorca</a>." },

      { type: "h2", text: "Granada — palácios mouros e a Alhambra no horizonte" },
      { type: "p", text: "Granada é para casais atraídos por história e arquitetura. Pequenos palácios com pátios de azulejos, jardins silenciosos e a Alhambra sempre em algum lugar na luz. Combina com listas menores e casais que querem um casamento que não poderia ter acontecido em nenhum outro lugar do mundo." },
      { type: "p", text: "Ideal para: casamentos íntimos com forte senso de lugar." },
      { type: "callout", body: "Guia completo: <a href=\"/pt/casamentos-destino/granada\">Casar em Granada</a>." },

      { type: "h2", text: "Sevilha — palácios, laranjeiras e alegria" },
      { type: "p", text: "Sevilha é a região que mais parece inconfundivelmente espanhola. Palácios com laranjeiras no pátio, um flamenco que ninguém agendou mas que aparece, e um calor na luz e nas pessoas que sobe o tom do fim de semana inteiro. É um lugar alegre para casar." },
      { type: "p", text: "Ideal para: um casamento que soa inconfundivelmente, alegremente espanhol." },
      { type: "callout", body: "Guia completo: <a href=\"/pt/casamentos-destino/sevilha\">Casar em Sevilha</a>." },

      { type: "h2", text: "Como escolher, de verdade" },
      { type: "p", text: "As perguntas que fazemos em toda discovery call, na ordem que importa:" },
      { type: "ul", items: [
        "Você quer o mar na moldura, ou o silêncio do interior em volta?",
        "Quantos convidados chegam de avião, e de onde? Aeroportos fáceis mudam tudo.",
        "Você é mais atraída pelo polimento de um hotel boutique ou pelo caráter de uma propriedade privada?",
        "A festa é o centro do fim de semana, ou a cerimônia?",
        "Quanto calor os seus convidados aguentam de verdade em julho e agosto?",
      ] },
      { type: "p", text: "Raramente há uma resposta única. Normalmente há uma que é mais sua — e uma vez que ela aparece, tudo depois (venue, fim de semana, cronograma) fica mais fácil de decidir." },

      { type: "h2", text: "As regiões em que não planejamos — e por quê" },
      { type: "p", text: "Trabalhamos nas seis regiões acima porque as conhecemos como uma amiga local, não como um site. Há outros lugares lindos para casar na Espanha; simplesmente indicamos para outros planners de confiança, em vez de fingir um conhecimento que não temos. Trabalho boutique só se sustenta se as fronteiras forem honestas." },
    ],
    cta: {
      title: "Ainda afunilando o mapa?",
      body: "É exatamente para isso que serve uma discovery call. Traga a sua visão inicial — ajudamos a afunilar antes de afunilar qualquer outra coisa.",
      button: "Agende uma conversa",
    },
    relatedTitle: "Continue lendo",
    related: [
      { label: "Regiões da Espanha — hub", href: "/pt/casamentos-destino/regioes-da-espanha" },
      { label: "O que é, exatamente, um Destination Wedding?", href: "/pt/blog/o-que-e-um-destination-wedding" },
      { label: "Cronograma mês a mês", href: "/pt/blog/planejamento-casamento-espanha-cronograma" },
    ],
  },

  "wedding-budget-tips-spain": {
    meta: {
      title: "Ajustes de Orçamento Que Realmente Economizam em um Casamento na Espanha",
      description:
        "Formas reais e sem cinismo de reduzir o orçamento de um Destination Wedding espanhol sem perder o que faz o dia parecer seu.",
    },
    hero: {
      eyebrow: "Orçamento",
      h1: "Ajustes de Orçamento Que Realmente Economizam em um Casamento na Espanha",
      dek: "As mudanças que movem o número de verdade — e as que não movem.",
      readingTime: "8 min de leitura",
    },
    ...DATES["wedding-budget-tips-spain"],
    image: IMAGE["wedding-budget-tips-spain"].src,
    imageAlt: IMAGE["wedding-budget-tips-spain"].alt.pt,
    body: [
      { type: "p", text: "Existe uma internet inteira de conselhos de orçamento de casamento que silenciosamente pioram casamentos. Corta as flores. Corta o fotógrafo. Faz os convites você mesma às duas da manhã seis semanas antes. Quase tudo economiza menos do que promete e custa mais do que se enxerga." },
      { type: "p", text: "Esta é a lista oposta. São os ajustes que vemos, de verdade, poupar dinheiro em casamentos espanhóis sem esvaziar o dia. Alguns são chatos. É por isso que funcionam." },

      { type: "h2", text: "1. Mude o fim de semana, não o casamento" },
      { type: "p", text: "A maior alavanca na Espanha é quando você casa. Um sábado em Ibiza em agosto é um preço. Uma sexta no interior catalão no começo de outubro é outro. Mesmo número de convidados, qualidade parecida, número bem diferente. Se datas são flexíveis, peça ao Wedding Planner as opções de baixa temporada e dias de semana antes de fixar qualquer coisa." },

      { type: "h2", text: "2. Repense a região, não a ambição" },
      { type: "p", text: "A visão que você tem — mesas longas com luzinhas, vista para o mar, um prédio antigo de pedra — existe em mais de uma região. Às vezes existe com um piso de preço muito mais suave a uma hora do interior. Catalunha e Andaluzia, em particular, tendem a dar mais espaço para respirar do que as ilhas em alta." },

      { type: "h2", text: "3. Corte trinta, não dez" },
      { type: "p", text: "A parte contraintuitiva do orçamento de casamento: cortar dez convidados raramente economiza o que se espera, porque a maior parte dos custos é fixa. Cortar trinta começa a mover números reais — venue de outra faixa, mínimos de F&B menores, menos ônibus, menos aluguel. Se uma lista mais curta está minimamente na mesa, leve a sério." },

      { type: "h2", text: "4. Escolha um destaque, não cinco" },
      { type: "p", text: "Casamentos parecem considerados quando uma ou duas coisas são inconfundivelmente lindas. Parecem caros e diluídos quando tudo compete. Escolha o seu destaque — uma mesa espetacular, um menu de chef, uma banda ao vivo, um venue realmente incrível — e deixe o resto ser silenciosamente bom, não espetacular." },

      { type: "h2", text: "5. Confie no F&B interno quando é bom mesmo" },
      { type: "p", text: "Muitos venues espanhóis têm buffet interno excelente, e trazer um buffet externo significa pagar rolha, taxa de cozinha e equipe por cima. Quando o time interno é bom, aceite. Quando não é, não aceite. É exatamente o tipo de julgamento em que um Wedding Planner justifica o valor." },

      { type: "h2", text: "6. Encurte o fim de semana" },
      { type: "p", text: "Welcome dinner, dia da cerimônia e brunch de despedida são três eventos, três blocos de transporte e três janelas de logística. Se o coração está no dia do casamento em si, abrir mão de uma das pontas pode economizar bastante sem mudar o casamento em si." },

      { type: "h2", text: "7. Invista no planner, não no que ele substitui" },
      { type: "p", text: "Isso não é frase de vendas — é um padrão que a gente observa. Casais que tentam economizar pulando planejamento acabam gastando mais em linhas individuais que um planner teria negociado, e acumulando estresse que aparece nas fotos. Se a taxa completa não cabe, contrate menos escopo (coordenação do dia, por exemplo) em vez de pular." },
      { type: "callout", title: "Veja nossas três faixas", body: "A página de serviços mostra Wedding Planning completo, parcial e coordenação do dia para você ver qual formato serve." },

      { type: "h2", text: "O que não recomendamos cortar" },
      { type: "ul", items: [
        "Fotografia. É a única parte do dia que você guarda para sempre.",
        "O bar. Um bar magro é mais lembrado do que um menu magro, e não do jeito que você quer.",
        "Conforto dos convidados — sombra, água, shuttles no calor. Convidados desconfortáveis lêem-se como \"barato\" independentemente do orçamento.",
        "Contingência de tempo. Na Espanha, plano de chuva é prática padrão; pular não economiza, só adiciona um risco que você acaba pagando de outro jeito.",
      ] },

      { type: "h2", text: "O resumo honesto" },
      { type: "p", text: "Os casais que vemos economizar mais não são os que perseguem pequenos cortes. São os que tomam uma ou duas decisões estruturais grandes e calmas cedo — a região, a temporada, o formato do fim de semana — e param de mexer. O casamento fica mais simples e melhor ao mesmo tempo." },
    ],
    cta: {
      title: "Vamos conversar",
      body: "Uma discovery call de 30 minutos é o jeito mais rápido de ver quais desses ajustes se aplicam ao seu casamento e quais não.",
      button: "Agende uma conversa",
    },
    relatedTitle: "Continue lendo",
    related: [
      { label: "Quanto custa um casamento na Espanha?", href: "/pt/blog/custo-de-um-casamento-na-espanha" },
      { label: "Nossos serviços e como trabalhamos", href: "/pt/servicos" },
      { label: "Cronograma mês a mês", href: "/pt/blog/planejamento-casamento-espanha-cronograma" },
    ],
  },

  "what-is-a-destination-wedding": {
    meta: {
      title: "O Que É um Destination Wedding — e Como Começar a Planejar o Seu",
      description:
        "Uma introdução calma a Destination Weddings — o que os define, como diferem de um casamento em casa, e como dar o primeiro passo.",
    },
    hero: {
      eyebrow: "Começando",
      h1: "O Que É um Destination Wedding — e Como Começar a Planejar o Seu",
      dek: "Uma introdução calma para casais considerando casar em um lugar que não é onde moram.",
      readingTime: "8 min de leitura",
    },
    ...DATES["what-is-a-destination-wedding"],
    image: IMAGE["what-is-a-destination-wedding"].src,
    imageAlt: IMAGE["what-is-a-destination-wedding"].alt.pt,
    body: [
      { type: "p", text: "Um Destination Wedding é qualquer casamento que acontece em outro lugar que não onde o casal mora. Essa é a definição inteira. Não precisa ser praia, não precisa ser no exterior, e não precisa ser pequeno." },
      { type: "p", text: "O que faz Destination Weddings diferentes, na prática, é que o casal não está perto do venue no dia a dia, a maioria dos convidados viaja para estar lá, e o dia costuma ser parte de um fim de semana mais longo em vez de uma tarde só. Tudo o mais — o tom, o tamanho, a formalidade — é escolha." },

      { type: "h2", text: "Por que casais escolhem" },
      { type: "p", text: "Os motivos que mais ouvimos, na ordem em que aparecem:" },
      { type: "ul", items: [
        "O lugar importa — um país de origem de um deles, ou uma região à qual voltam juntos.",
        "Menos convidados, mais tempo. A distância é um filtro gentil, e quem vem quer estar lá de verdade.",
        "Fim de semana, não algumas horas. Destination Weddings costumam se estender por dois ou três dias, o que muda o ritmo inteiro.",
        "Um dia mais devagar, mais considerado. Quando você não consegue fazer tudo em casa, tende a parar de tentar.",
      ] },

      { type: "h2", text: "O que muda no planejamento" },
      { type: "p", text: "A mecânica muda mais do que as emoções. Você vai fazer mais do planejamento por vídeo do que presencialmente. As visitas ao local viram viagens deliberadas em vez de um sábado de carro. Conhecimento local — de fornecedores, de papelada, de quais venues são tão bons quanto as fotos — vira desproporcionalmente importante. É por isso que Destination Weddings e Wedding Planners boutique tendem a andar juntos." },

      { type: "h2", text: "A questão legal, com honestidade" },
      { type: "p", text: "É onde a maioria dos casais tem a primeira onda de preocupação, e quase sempre é preocupação demais. Na maioria dos destinos, incluindo a Espanha, uma cerimônia simbólica no venue escolhido — com celebrante, seus votos, e tudo o que os convidados reconheceriam como casamento — é o que de fato acontece no dia. O casamento civil é feito em casa, um pouco antes ou depois da viagem." },
      { type: "p", text: "É mais calmo, mais barato e mais flexível do que a alternativa. Cerimônias civis completas em outro país são possíveis, mas quase sempre trazem exigências de residência e prazos de papelada que não cabem numa lista internacional de convidados. Um bom planner explica o trade-off com honestidade e deixa você escolher." },

      { type: "h2", text: "As três primeiras decisões" },
      { type: "p", text: "Quase todo Destination Wedding se apoia em três decisões iniciais, nesta ordem:" },
      { type: "ul", items: [
        "País e região. Ainda não o venue — a região. Essa única escolha define o ritmo do fim de semana inteiro.",
        "Formato aproximado e faixa de convidados. Elopement, casamento íntimo ou celebração de fim de semana. E uma faixa, não uma lista fixa.",
        "Fim de semana e alternativa. Dê a si mesma duas opções; o venue certo pode abrir uma e não a outra.",
      ] },
      { type: "p", text: "Todo o resto — venue, fornecedores, estética, menus — fica muito mais fácil uma vez que esses três estão decididos. Tentar decidir todos ao mesmo tempo é o que faz o planejamento de destino parecer sobrecarregado." },

      { type: "h2", text: "Quando chamar um Wedding Planner" },
      { type: "p", text: "Mais cedo do que a maioria dos casais imagina. Não porque você não consiga pesquisar sozinha — consegue —, mas porque um bom planner poupa você de investir semanas numa direção que silenciosamente não funciona. Só uma discovery call, antes de qualquer reserva, já tende a poupar o resto do processo." },
      { type: "p", text: "O tipo de planner que você quer para um Destination Wedding é alguém que vive onde o casamento é, trabalha em poucas regiões e é honesto sobre quais casamentos são ou não o encaixe certo. Limites boutique existem por uma razão." },

      { type: "h2", text: "Um primeiro passo tranquilo" },
      { type: "p", text: "Se você está em algum ponto de \"talvez Espanha, talvez outro lugar, definitivamente não sei ainda\", o primeiro passo mais calmo é uma conversa, não uma planilha. Uma discovery call são 30 minutos. Não custa nada. Traga a sua visão inicial — ajudamos a enxergar com mais clareza e dizemos honestamente se somos o time certo para construir com vocês." },
    ],
    cta: {
      title: "Curiosa se a Espanha é o seu lugar?",
      body: "Uma discovery call é a forma mais calma de testar a ideia antes de se comprometer com qualquer coisa.",
      button: "Agende uma conversa",
    },
    relatedTitle: "Continue lendo",
    related: [
      { label: "Onde casar na Espanha — regiões comparadas", href: "/pt/blog/regioes-para-casar-na-espanha-comparadas" },
      { label: "Cronograma mês a mês", href: "/pt/blog/planejamento-casamento-espanha-cronograma" },
      { label: "Destination Wedding na Espanha — guia completo", href: "/pt/casar-na-espanha" },
    ],
  },
};

/* ---------- Public accessors ---------- */

export function getBlogIndex(lang: Lang): BlogIndexContent {
  return lang === "pt" ? ptIndex : enIndex;
}

export function getPost(key: PostKey, lang: Lang): PostContent {
  return (lang === "pt" ? ptPosts : enPosts)[key];
}
