// Region landing pages — content for hub + 6 spokes, EN + PT.
// Kept separate from content.ts to avoid bloating the core dictionary.
// PT preserves "Wedding Planner", "Wedding Planning" and "Destination Wedding"
// in English per the site's localization rule.

import type { Lang } from "./routes";

export type RegionKey =
  | "catalonia"
  | "costa-brava"
  | "ibiza"
  | "mallorca"
  | "granada"
  | "seville";

export const REGION_KEYS: RegionKey[] = [
  "catalonia",
  "costa-brava",
  "ibiza",
  "mallorca",
  "granada",
  "seville",
];

export type RegionSlugs = { en: string; pt: string };

// Hub slugs
export const HUB_SLUGS: RegionSlugs = {
  en: "/destination-weddings/spain-regions",
  pt: "/pt/casamentos-destino/regioes-da-espanha",
};

export const REGION_SLUGS: Record<RegionKey, RegionSlugs> = {
  catalonia:     { en: "/destination-weddings/catalonia",   pt: "/pt/casamentos-destino/catalunha" },
  "costa-brava": { en: "/destination-weddings/costa-brava", pt: "/pt/casamentos-destino/costa-brava" },
  ibiza:         { en: "/destination-weddings/ibiza",       pt: "/pt/casamentos-destino/ibiza" },
  mallorca:      { en: "/destination-weddings/mallorca",    pt: "/pt/casamentos-destino/maiorca" },
  granada:       { en: "/destination-weddings/granada",     pt: "/pt/casamentos-destino/granada" },
  seville:       { en: "/destination-weddings/seville",     pt: "/pt/casamentos-destino/sevilha" },
};

export type RegionSection = { title: string; body: string[]; list?: string[] };
export type RegionFaq = { q: string; a: string };

export type RegionContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string };
  character: RegionSection;
  venueTypes: RegionSection;
  ceremony: RegionSection;
  season: RegionSection;
  gettingThere: RegionSection;
  sampleDay: RegionSection;
  faq: RegionFaq[];
  related: RegionKey[];
  closing: { title: string; body: string };
};

export type HubContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string };
  lead: string[];
  choose: { title: string; body: string; questions: string[] };
  regionsIntro: { title: string; body: string };
  cards: Record<RegionKey, { name: string; blurb: string; bestFor: string }>;
  closing: { title: string; body: string };
};

/* ============================ ENGLISH ============================ */

const enHub: HubContent = {
  meta: {
    title: "Where to Get Married in Spain | Regions Guide",
    description:
      "A boutique guide to the best regions for a destination wedding in Spain — Catalonia, Costa Brava, Ibiza, Mallorca, Granada and Seville.",
  },
  hero: {
    eyebrow: "Destination Weddings in Spain",
    h1: "Where to get married in Spain",
    intro:
      "Six regions, six very different weddings. This is the quiet guide we walk our couples through before we ever discuss venues — so the place you choose actually matches the day you're picturing.",
  },
  lead: [
    "Spain is not one country when it comes to weddings. A masia in the Catalan countryside feels nothing like a whitewashed finca in Ibiza, and a Sevillian palace has a different soul than a Mallorcan estate above the sea.",
    "As a boutique Wedding Planner working exclusively on Destination Weddings in Spain, we help international couples narrow the map before they narrow the guest list. Below is our honest read on the six regions we know best.",
  ],
  choose: {
    title: "How to choose your region",
    body:
      "Before you fall in love with a venue, fall in love with a rhythm. These are the questions we ask on every discovery call.",
    questions: [
      "Do you want the sea in the frame, or the countryside quiet around you?",
      "How many of your guests are flying in — and from where?",
      "Are you drawn to the polish of a boutique hotel or the character of a private estate?",
      "Is the party the centerpiece, or the ceremony?",
      "How much heat can your guests genuinely tolerate in July and August?",
    ],
  },
  regionsIntro: {
    title: "The six regions we plan in",
    body:
      "Every region below is one we work in regularly. Click through to read the long-form guide — venue types, ceremony logistics, season, and how a real day unfolds.",
  },
  cards: {
    catalonia: {
      name: "Catalonia",
      blurb: "Old masias, vineyards and country houses an hour from Barcelona.",
      bestFor: "Couples who want countryside quiet without leaving mainland Spain.",
    },
    "costa-brava": {
      name: "Costa Brava",
      blurb: "Pine-covered coves, cliffside estates and the softer end of the Mediterranean.",
      bestFor: "Sea-view ceremonies with a slightly slower, more private feel.",
    },
    ibiza: {
      name: "Ibiza",
      blurb: "Whitewashed fincas, sunset ceremonies and a barefoot elegance.",
      bestFor: "Couples who want the party to matter as much as the vows.",
    },
    mallorca: {
      name: "Mallorca",
      blurb: "Stone estates in the Tramuntana, olive groves and quiet luxury.",
      bestFor: "Refined, understated weddings with easy flights from Europe.",
    },
    granada: {
      name: "Granada",
      blurb: "Moorish palaces, the Alhambra on the horizon and Andalusian romance.",
      bestFor: "Couples drawn to history, architecture and a smaller guest list.",
    },
    seville: {
      name: "Seville",
      blurb: "Palacios, orange trees and flamenco in the courtyards.",
      bestFor: "A wedding that feels unmistakably, joyfully Spanish.",
    },
  },
  closing: {
    title: "Not sure which region is yours?",
    body:
      "That is exactly what a discovery call is for. Bring your rough vision — we'll help you narrow the map before you narrow anything else.",
  },
};

const enRegions: Record<RegionKey, RegionContent> = {
  catalonia: {
    meta: {
      title: "Wedding Planner in Catalonia | Masias & Vineyards",
      description:
        "Boutique Wedding Planner for Destination Weddings in Catalonia — old masias, vineyards and country estates an hour from Barcelona.",
    },
    hero: {
      eyebrow: "Destination Wedding in Catalonia",
      h1: "Get married in a Catalan masia, vineyard or country estate",
      intro:
        "Catalonia is where couples come when they want countryside without giving up an international airport. Stone masias, Penedès vineyards and hillside estates — all within an hour of Barcelona.",
    },
    character: {
      title: "The feel of a Catalan wedding",
      body: [
        "Catalonia rewards couples who like a slower, more grounded day. Ceremonies happen under old plane trees, dinners spill from a masia's inner courtyard onto a terrace, and the music carries out over vineyards or fields of olive trees.",
        "It is not flashy. It is deeply considered — the kind of wedding where the food, the wine and the setting do the talking, and the guests find themselves talking in low voices for the first hour because everything is that quiet.",
      ],
    },
    venueTypes: {
      title: "Venue types",
      body: [
        "The three shapes a Catalan wedding usually takes:",
      ],
      list: [
        "Masias — restored 16th–18th century farmhouses with private grounds, perfect for 40–150 guests.",
        "Wineries in the Penedès and Priorat — for couples who want the estate and the tasting in the same weekend.",
        "Country houses and small castles in the Empordà — a more refined register, often with on-site accommodation for 20–40.",
      ],
    },
    ceremony: {
      title: "Ceremony logistics",
      body: [
        "For most international couples we recommend a symbolic ceremony at the venue — it can be held anywhere on the property, at any hour, in any language, and it looks and feels exactly like a legal wedding to your guests.",
        "The legal paperwork is then done at home before or after the trip. A full civil ceremony in Catalonia is possible but requires long residency requirements that rarely fit a destination timeline.",
      ],
    },
    season: {
      title: "When to marry",
      body: [
        "May, June and September are the sweet spot — warm days, cool evenings, and the countryside at its greenest or its most golden.",
        "July and August are beautiful but genuinely hot inland; we plan around late-afternoon ceremonies and long, cool dinners under the stars.",
        "October is underrated: the light is cinematic and the harvest gives every menu a story.",
      ],
    },
    gettingThere: {
      title: "Getting there",
      body: [
        "Barcelona–El Prat (BCN) is the arrival airport for almost every Catalan wedding — direct flights from most of Europe and the Americas.",
        "Girona (GRO) is a useful second option for weddings in the Empordà. From either airport, most of our venues sit within a 45–90 minute drive.",
      ],
    },
    sampleDay: {
      title: "How a day tends to unfold",
      body: [
        "17:00 — Guests arrive by shuttle from the coast or the city, greeted with vermouth in the shade.",
        "18:00 — Symbolic ceremony under an old tree or in the masia courtyard.",
        "19:00 — Aperitivo with local cava, jamón and small plates on the terrace.",
        "21:00 — Long-table dinner as the sun goes down.",
        "23:30 — Music opens up. Dancing until the shuttles leave at 03:00.",
      ],
    },
    faq: [
      {
        q: "Can we bring our own celebrant?",
        a: "Yes. For symbolic ceremonies you can bring a friend or officiant from home, or we introduce you to bilingual celebrants we trust.",
      },
      {
        q: "How many guests fit a masia?",
        a: "Most sit comfortably between 60 and 130. We plan for smaller guest counts on more intimate estates, and always visit the venue before recommending it.",
      },
    ],
    related: ["costa-brava", "mallorca"],
    closing: {
      title: "A Catalan wedding, planned quietly",
      body:
        "We only take on twelve weddings a year. If Catalonia is calling you, a discovery call is the calmest way to see whether we're the right team to build it with you.",
    },
  },

  "costa-brava": {
    meta: {
      title: "Wedding Planner on the Costa Brava | Sea-View Estates",
      description:
        "Boutique Wedding Planner for Destination Weddings on the Costa Brava — pine-covered coves, cliffside villas and refined seaside estates.",
    },
    hero: {
      eyebrow: "Destination Wedding on the Costa Brava",
      h1: "Get married on the pine-covered coves of the Costa Brava",
      intro:
        "The Costa Brava is the softer, more private end of the Spanish Mediterranean. Pine forests down to the water, cliffside villas, and a coastline that has kept its character.",
    },
    character: {
      title: "The feel of a Costa Brava wedding",
      body: [
        "This is where you come if you want the sea in the frame but not the crowds. The coves are small, the villages are stone, and the light in late afternoon does most of the work for your photographer.",
        "It suits couples who want elegance without gloss — long dinners on a terrace above the water, guests barefoot on stone after midnight, the sound of pines instead of a DJ echoing off high-rises.",
      ],
    },
    venueTypes: {
      title: "Venue types",
      body: ["Three shapes the Costa Brava tends to take:"],
      list: [
        "Cliffside private villas — a full weekend takeover for 30–80 guests.",
        "Boutique seaside hotels — polished service, on-site accommodation, minimal logistics.",
        "Empordà country estates just inland — ten minutes from the coast, with more space and more privacy.",
      ],
    },
    ceremony: {
      title: "Ceremony logistics",
      body: [
        "A symbolic ceremony on a terrace, in a cove or in a private garden is what most of our international couples choose — flexible, bilingual, and legally uncomplicated.",
        "Civil ceremonies at Costa Brava town halls are possible but come with residency and paperwork timelines that rarely suit a destination guest list. We plan around symbolic and pair it with the legal ceremony at home.",
      ],
    },
    season: {
      title: "When to marry",
      body: [
        "Late May through June, and all of September — warm sea, long light, and evenings you can sit out in without a jacket.",
        "July and August are peak season on the coast: beautiful, but louder and more expensive. We plan around it when couples want it.",
        "Early October is quietly one of our favourite windows — the water is still swimmable, the light is honey, and prices ease.",
      ],
    },
    gettingThere: {
      title: "Getting there",
      body: [
        "Girona (GRO) is 30–60 minutes from most Costa Brava venues.",
        "Barcelona (BCN) adds an hour of driving but opens up direct long-haul flights for guests coming from the Americas or Asia.",
      ],
    },
    sampleDay: {
      title: "How a day tends to unfold",
      body: [
        "17:30 — Guests gather in a small cove or on a cliffside terrace.",
        "18:00 — Symbolic ceremony as the light begins to soften.",
        "19:00 — Aperitivo with cava and local seafood on the terrace above the water.",
        "21:00 — Dinner under strung lights, tables opened to the horizon.",
        "23:30 — Dancing on stone until the last guest wanders home.",
      ],
    },
    faq: [
      {
        q: "Can guests actually swim?",
        a: "Yes — most of our couples plan a welcome swim the morning of the wedding and a recovery lunch by the water the day after.",
      },
      {
        q: "How private are cliffside villas?",
        a: "Very. We work only with venues that offer full private takeover so the day belongs to you and your guests, not to a hotel schedule.",
      },
    ],
    related: ["catalonia", "mallorca"],
    closing: {
      title: "A Costa Brava wedding, without the noise",
      body:
        "We plan a small number of weddings a year on the Costa Brava. A discovery call is the quiet first step.",
    },
  },

  ibiza: {
    meta: {
      title: "Wedding Planner in Ibiza | Fincas & Sunset Ceremonies",
      description:
        "Boutique Wedding Planner for Destination Weddings in Ibiza — whitewashed fincas, sunset ceremonies and a barefoot Mediterranean elegance.",
    },
    hero: {
      eyebrow: "Destination Wedding in Ibiza",
      h1: "Get married in a whitewashed Ibizan finca at sunset",
      intro:
        "Ibiza rewards couples who want the party to matter as much as the vows. Whitewashed fincas, salt in the air, and sunsets that do half the styling for you.",
    },
    character: {
      title: "The feel of an Ibiza wedding",
      body: [
        "There is a version of Ibiza that has nothing to do with clubs — old fincas at the end of long dirt roads, olive trees, bougainvillea, and a barefoot elegance that only this island really does.",
        "Our Ibiza weddings live in that world. Long tables under fig trees, ceremonies at golden hour, and a dance floor that stays full until the sky starts to lighten.",
      ],
    },
    venueTypes: {
      title: "Venue types",
      body: ["Three shapes an Ibiza wedding usually takes:"],
      list: [
        "Private fincas — full-weekend takeover for 40–150 guests, often with on-site accommodation for the closest family.",
        "Boutique agroturismos — smaller, polished, and easier for a shorter three-night trip.",
        "Beach clubs and seafront venues — for couples who want the water directly in the frame.",
      ],
    },
    ceremony: {
      title: "Ceremony logistics",
      body: [
        "Almost all of our Ibiza couples do a symbolic ceremony at the finca, timed to the last hour of light. You can hold it anywhere on the property, in any language, and it feels exactly like a legal wedding to your guests.",
        "Legal paperwork happens at home. Civil ceremonies on the island are technically possible but the residency requirements rarely fit an international timeline.",
      ],
    },
    season: {
      title: "When to marry",
      body: [
        "May, June, September and early October — warm days, forgiving heat, and the island less crowded than in high summer.",
        "July and August are Ibiza at its most Ibiza: possible, spectacular, and priced accordingly. We plan around late ceremonies and dawn breakfasts when couples choose these months.",
      ],
    },
    gettingThere: {
      title: "Getting there",
      body: [
        "Ibiza (IBZ) is the only airport on the island, with direct flights from most European cities in summer.",
        "For guests from the Americas we route them via Madrid or Barcelona; the connecting flight is short and civilised.",
      ],
    },
    sampleDay: {
      title: "How a day tends to unfold",
      body: [
        "18:30 — Guests arrive at the finca; cold towels and cava under the trees.",
        "19:30 — Symbolic ceremony as the light turns gold.",
        "20:30 — Aperitivo in the garden, small plates and Ibizan wine.",
        "22:00 — Dinner at long tables under strung lights.",
        "00:30 — Dance floor opens. Breakfast at sunrise for anyone still standing.",
      ],
    },
    faq: [
      {
        q: "How loud can the music be?",
        a: "Most private fincas have strict noise curfews after midnight. We know which venues allow the party to run late, and match couples to the right one.",
      },
      {
        q: "Do we need to book the whole weekend?",
        a: "For most fincas, yes — a two- or three-night takeover is standard and honestly the best way to enjoy the island.",
      },
    ],
    related: ["mallorca", "costa-brava"],
    closing: {
      title: "An Ibiza wedding, planned calmly",
      body:
        "Ibiza can be chaotic to plan from abroad. It is not chaotic to plan with us. A discovery call is the quiet first step.",
    },
  },

  mallorca: {
    meta: {
      title: "Wedding Planner in Mallorca | Tramuntana & Coastal Estates",
      description:
        "Boutique Wedding Planner for Destination Weddings in Mallorca — stone estates in the Tramuntana, olive groves and understated island luxury.",
    },
    hero: {
      eyebrow: "Destination Wedding in Mallorca",
      h1: "Get married on a Mallorcan estate above the sea",
      intro:
        "Mallorca is Ibiza's more refined cousin. Stone estates in the Serra de Tramuntana, olive groves that go on for kilometres, and quiet luxury without the party-island reputation.",
    },
    character: {
      title: "The feel of a Mallorca wedding",
      body: [
        "Mallorca suits couples who want elegance without noise. Estates in the Tramuntana feel like they've always been there; coastal fincas have direct sea views without a boardwalk in the frame.",
        "The service culture on the island is genuinely refined, which makes a large guest count feel effortless. It is our most reliable region for a wedding that looks understated and runs faultlessly.",
      ],
    },
    venueTypes: {
      title: "Venue types",
      body: ["Three shapes a Mallorca wedding takes:"],
      list: [
        "Tramuntana estates — stone, mountains, olive groves, 40–150 guests.",
        "Coastal fincas — sea views, private grounds, easier logistics for older guests.",
        "Boutique country hotels — full takeover with on-site rooms for 20–40 guests.",
      ],
    },
    ceremony: {
      title: "Ceremony logistics",
      body: [
        "Symbolic ceremonies at the venue are the default for international couples — flexible, bilingual, and legally simple when paired with paperwork at home.",
        "Palma has more civil-ceremony infrastructure than most Spanish cities but the residency timelines are still meaningful; we walk you through both paths on the discovery call.",
      ],
    },
    season: {
      title: "When to marry",
      body: [
        "Late May through June, and September — warm, dry, and the light is Mediterranean-clean.",
        "July and August are hot but bearable near the coast; the Tramuntana holds cooler evenings even in high summer.",
        "October is one of the best-kept secrets on the island — the sea is warm, the crowds are gone, and the light is remarkable.",
      ],
    },
    gettingThere: {
      title: "Getting there",
      body: [
        "Palma de Mallorca (PMI) has direct flights from most European capitals and strong connections from the Americas via Madrid or Barcelona.",
        "Most of our venues are 30–60 minutes from the airport.",
      ],
    },
    sampleDay: {
      title: "How a day tends to unfold",
      body: [
        "17:30 — Guests arrive at an estate above the sea; cava on the terrace.",
        "18:30 — Symbolic ceremony in an olive grove or on a stone terrace.",
        "19:30 — Aperitivo with local wine and small plates.",
        "21:00 — Dinner under strung lights, mountains or sea in the frame.",
        "23:30 — Dancing until curfew, then a late-night bar for the closest circle.",
      ],
    },
    faq: [
      {
        q: "Is Mallorca calmer than Ibiza?",
        a: "Meaningfully, yes. The island is bigger, the estates are more spread out, and the service culture is more traditional. It suits a more refined register.",
      },
      {
        q: "How large a wedding can we plan here?",
        a: "Comfortably up to 200 on the right estate. We stay under 150 for the version of the day most of our couples want.",
      },
    ],
    related: ["ibiza", "costa-brava"],
    closing: {
      title: "A Mallorcan wedding, quietly planned",
      body:
        "We plan a limited number of Mallorca weddings a year. A discovery call is where we listen first and recommend later.",
    },
  },

  granada: {
    meta: {
      title: "Wedding Planner in Granada | Moorish Palaces & Andalusia",
      description:
        "Boutique Wedding Planner for Destination Weddings in Granada — Moorish palaces, Alhambra views and intimate Andalusian romance.",
    },
    hero: {
      eyebrow: "Destination Wedding in Granada",
      h1: "Get married with the Alhambra on the horizon",
      intro:
        "Granada is for couples drawn to history, architecture and a smaller, more soulful guest list. Moorish palaces, cármenes above the old city, and a light that only Andalusia has.",
    },
    character: {
      title: "The feel of a Granada wedding",
      body: [
        "Granada is a slower, more literary wedding. It rewards small guest lists, long dinners, and couples who want their day to feel woven into a place rather than staged on top of it.",
        "The city itself does most of the atmosphere — Moorish tilework, jasmine in the courtyards, the Alhambra glowing across the valley at night. You do not need to over-style a Granada wedding.",
      ],
    },
    venueTypes: {
      title: "Venue types",
      body: ["Three shapes a Granada wedding takes:"],
      list: [
        "Cármenes — historic walled houses in the Albaicín with private gardens and Alhambra views, best for 20–60 guests.",
        "Restored palacios in the historic centre — for a more architectural, formal register.",
        "Country cortijos in the surrounding Vega — olive groves, mountains, and space for 60–120 guests.",
      ],
    },
    ceremony: {
      title: "Ceremony logistics",
      body: [
        "Symbolic ceremonies work beautifully in Granada courtyards and gardens, and are what most international couples choose. Bilingual celebrants are easy to arrange.",
        "Civil ceremonies in Granada are possible but the residency timelines are strict; for international couples we almost always recommend the symbolic-in-Spain, legal-at-home path.",
      ],
    },
    season: {
      title: "When to marry",
      body: [
        "May, early June, September and October — warm, dry, and the light in the old city is exceptional.",
        "July and August in Granada are genuinely hot; we plan around late ceremonies and long, cool evening dinners.",
        "Winter weddings in Granada are underrated — clear skies, snow on the Sierra Nevada in the background, and the city almost to yourself.",
      ],
    },
    gettingThere: {
      title: "Getting there",
      body: [
        "Granada (GRX) has limited direct flights, mostly from Madrid and Barcelona.",
        "Málaga (AGP) is 90 minutes by road and often the more practical entry for international guests.",
        "Seville (SVQ) is about 2.5 hours by road or train and works well if you're pairing Granada with a few days in Andalusia.",
      ],
    },
    sampleDay: {
      title: "How a day tends to unfold",
      body: [
        "19:00 — Guests gather in a walled garden as the heat lifts.",
        "19:30 — Symbolic ceremony under the trees, Alhambra on the horizon.",
        "20:30 — Aperitivo with sherry, jamón and Andalusian small plates.",
        "22:00 — Long-table dinner in the courtyard.",
        "00:30 — Live flamenco or a small band; dancing until the city calls it a night.",
      ],
    },
    faq: [
      {
        q: "Can we get married inside the Alhambra?",
        a: "Only in very limited, historically-approved formats. We are honest with couples about what is realistic and steer most toward cármenes and palacios with Alhambra views instead.",
      },
      {
        q: "Is Granada the right city for a large guest count?",
        a: "It is at its best under 80 guests. For larger weddings in Andalusia we usually recommend Seville or a country cortijo outside the city.",
      },
    ],
    related: ["seville", "mallorca"],
    closing: {
      title: "A Granada wedding, quietly built",
      body:
        "Small, considered, romantic. If that is the wedding you're picturing, a discovery call is the first calm step.",
    },
  },

  seville: {
    meta: {
      title: "Wedding Planner in Seville | Palacios & Andalusian Weddings",
      description:
        "Boutique Wedding Planner for Destination Weddings in Seville — palacios, orange-tree courtyards and unmistakably Spanish celebrations.",
    },
    hero: {
      eyebrow: "Destination Wedding in Seville",
      h1: "Get married in a Sevillian palacio",
      intro:
        "Seville is a wedding that feels unmistakably Spanish. Palacios with tiled courtyards, orange trees in bloom, flamenco after midnight, and a city that knows how to celebrate better than almost anywhere in Europe.",
    },
    character: {
      title: "The feel of a Seville wedding",
      body: [
        "There is nothing quiet about a Seville wedding, and nothing that should be. This is a city built around joy, ritual and long tables — and a wedding here inherits all of it.",
        "It suits couples who want the day to feel deeply Spanish rather than deliberately restrained. Colour, music, food that keeps arriving, and dancing that starts earlier than you'd expect.",
      ],
    },
    venueTypes: {
      title: "Venue types",
      body: ["Three shapes a Seville wedding takes:"],
      list: [
        "Palacios in the historic centre — tiled courtyards, colonnades, 60–150 guests.",
        "Haciendas outside the city — restored working estates with olive groves and private grounds, 80–200 guests.",
        "Cortijos in the countryside — for a more rural, horse-and-open-fires register.",
      ],
    },
    ceremony: {
      title: "Ceremony logistics",
      body: [
        "Symbolic ceremonies in a palacio courtyard or a hacienda garden are the default and, for international couples, almost always the easier path — bilingual celebrants, no residency timelines, full freedom on location and hour.",
        "Civil ceremonies at Seville town halls are possible but require weeks of paperwork in Spain; we plan the legal ceremony at home in most cases.",
      ],
    },
    season: {
      title: "When to marry",
      body: [
        "April, May and early June — the orange trees are in bloom, the courtyards are cool, and the light is Andalusian at its best.",
        "September and October — warm days, warm nights, harvest wines, quiet city.",
        "July and August in Seville are famously hot. We do not recommend them unless there is a specific reason; when we plan them, everything happens after sunset.",
      ],
    },
    gettingThere: {
      title: "Getting there",
      body: [
        "Seville (SVQ) has direct flights from most European capitals.",
        "For long-haul guests, Madrid connects in under an hour by plane or 2h30 on the AVE high-speed train, which many guests find more comfortable.",
      ],
    },
    sampleDay: {
      title: "How a day tends to unfold",
      body: [
        "19:00 — Guests gather in a tiled courtyard, sherry and small plates in the shade.",
        "20:00 — Symbolic ceremony under the arches as the heat lifts.",
        "21:00 — Aperitivo with jamón, gazpacho and Andalusian wines.",
        "22:30 — Dinner at long tables, courtyard lit with candles.",
        "01:00 — Flamenco or a live band; dancing until the city is quiet.",
      ],
    },
    faq: [
      {
        q: "How hot is too hot?",
        a: "We steer couples away from mid-July through August, unless the wedding is fully after dark and the venue has serious shade and cooling.",
      },
      {
        q: "Can we pair Seville with another city?",
        a: "Yes — Granada, Jerez and the coast all pair beautifully. We often plan a Seville wedding weekend with a smaller welcome dinner in another Andalusian town.",
      },
    ],
    related: ["granada", "catalonia"],
    closing: {
      title: "A Seville wedding, planned with care",
      body:
        "Seville can feel overwhelming from abroad; it should never feel overwhelming to plan. A discovery call is the quiet first step.",
    },
  },
};

/* ============================ PORTUGUESE ============================ */

const ptHub: HubContent = {
  meta: {
    title: "Onde Casar na Espanha | Guia por Regiões",
    description:
      "Um guia boutique das melhores regiões para um Destination Wedding na Espanha — Catalunha, Costa Brava, Ibiza, Maiorca, Granada e Sevilha.",
  },
  hero: {
    eyebrow: "Destination Weddings na Espanha",
    h1: "Onde casar na Espanha",
    intro:
      "Seis regiões, seis casamentos completamente diferentes. Este é o guia tranquilo que oferecemos aos nossos casais antes mesmo de falarmos em venues — para que o lugar escolhido combine com o dia que vocês estão imaginando.",
  },
  lead: [
    "A Espanha não é um único país quando o assunto é casamento. Uma masia no interior catalão é outra coisa em relação a uma finca caiada em Ibiza, e um palácio sevilhano tem uma alma diferente de uma propriedade maiorquina sobre o mar.",
    "Como Wedding Planner boutique dedicada exclusivamente a Destination Weddings na Espanha, ajudamos casais internacionais a estreitar o mapa antes de estreitar a lista de convidados. Abaixo, nossa leitura honesta das seis regiões que mais conhecemos.",
  ],
  choose: {
    title: "Como escolher a sua região",
    body:
      "Antes de se apaixonar por um venue, apaixone-se por um ritmo. Estas são as perguntas que fazemos em toda discovery call.",
    questions: [
      "Vocês querem o mar no enquadramento ou o silêncio do interior ao redor?",
      "Quantos convidados virão de avião — e de onde?",
      "Vocês são mais atraídos pelo requinte de um hotel boutique ou pelo caráter de uma propriedade privada?",
      "A festa é o centro do dia, ou a cerimônia é?",
      "Quanto calor os seus convidados realmente aguentam em julho e agosto?",
    ],
  },
  regionsIntro: {
    title: "As seis regiões em que planejamos",
    body:
      "Cada região abaixo é uma em que trabalhamos com regularidade. Clique para ler o guia completo — tipos de venue, logística da cerimônia, estação e como um dia real se desenrola.",
  },
  cards: {
    catalonia: {
      name: "Catalunha",
      blurb: "Masias antigas, vinícolas e casas de campo a uma hora de Barcelona.",
      bestFor: "Casais que querem o silêncio do interior sem sair da Espanha continental.",
    },
    "costa-brava": {
      name: "Costa Brava",
      blurb: "Enseadas de pinheiros, propriedades no penhasco e o lado mais suave do Mediterrâneo.",
      bestFor: "Cerimônias com vista para o mar, num ritmo mais privado e tranquilo.",
    },
    ibiza: {
      name: "Ibiza",
      blurb: "Fincas caiadas, cerimônias ao pôr do sol e uma elegância descalça.",
      bestFor: "Casais que querem que a festa importe tanto quanto os votos.",
    },
    mallorca: {
      name: "Maiorca",
      blurb: "Propriedades de pedra na Tramuntana, olivais e um luxo silencioso.",
      bestFor: "Casamentos refinados e discretos, com voos fáceis da Europa.",
    },
    granada: {
      name: "Granada",
      blurb: "Palácios mouriscos, a Alhambra no horizonte e romantismo andaluz.",
      bestFor: "Casais atraídos por história, arquitetura e uma lista de convidados menor.",
    },
    seville: {
      name: "Sevilha",
      blurb: "Palacios, laranjeiras e flamenco nos pátios.",
      bestFor: "Um casamento que é inconfundivelmente, alegremente espanhol.",
    },
  },
  closing: {
    title: "Ainda em dúvida sobre qual região é a sua?",
    body:
      "É exatamente para isso que serve uma discovery call. Traga a sua visão inicial — nós ajudamos a estreitar o mapa antes de qualquer outra coisa.",
  },
};

const ptRegions: Record<RegionKey, RegionContent> = {
  catalonia: {
    meta: {
      title: "Wedding Planner na Catalunha | Masias e Vinícolas",
      description:
        "Wedding Planner boutique para Destination Weddings na Catalunha — masias antigas, vinícolas e propriedades a uma hora de Barcelona.",
    },
    hero: {
      eyebrow: "Destination Wedding na Catalunha",
      h1: "Case-se numa masia catalã, vinícola ou propriedade de campo",
      intro:
        "A Catalunha é para casais que querem o interior sem abrir mão de um aeroporto internacional. Masias de pedra, vinícolas do Penedès e propriedades no Empordà — todas a menos de uma hora de Barcelona.",
    },
    character: {
      title: "A atmosfera de um casamento catalão",
      body: [
        "A Catalunha recompensa casais que gostam de um dia mais lento e mais enraizado. Cerimônias sob plátanos antigos, jantares que fluem do pátio da masia para o terraço, e música que se espalha pelos vinhedos ou olivais.",
        "Não é ostentoso. É profundamente pensado — o tipo de casamento em que a comida, o vinho e o cenário conduzem a conversa, e os convidados falam baixo na primeira hora só porque tudo está muito tranquilo.",
      ],
    },
    venueTypes: {
      title: "Tipos de venue",
      body: ["Os três formatos mais comuns de um casamento catalão:"],
      list: [
        "Masias — casas rurais restauradas dos séculos 16 a 18, com terrenos privados, ideais para 40–150 convidados.",
        "Vinícolas no Penedès e no Priorat — para casais que querem a propriedade e a degustação no mesmo fim de semana.",
        "Casas senhoriais e pequenos castelos no Empordà — registro mais refinado, muitas vezes com hospedagem no local para 20–40.",
      ],
    },
    ceremony: {
      title: "Logística da cerimônia",
      body: [
        "Para a maioria dos casais internacionais, recomendamos uma cerimônia simbólica no venue — pode ser em qualquer ponto da propriedade, a qualquer hora, em qualquer idioma, e parece exatamente um casamento legal para os convidados.",
        "A parte legal é feita no país de origem antes ou depois da viagem. Uma cerimônia civil na Catalunha é possível, mas exige tempos de residência que raramente cabem no calendário de um Destination Wedding.",
      ],
    },
    season: {
      title: "Quando casar",
      body: [
        "Maio, junho e setembro são o ponto ideal — dias quentes, noites frescas e o interior no auge do verde ou do dourado.",
        "Julho e agosto são lindos, mas realmente quentes no interior; planejamos com cerimônias no fim da tarde e jantares longos sob as estrelas.",
        "Outubro é subestimado: a luz é cinematográfica e a colheita dá história a cada menu.",
      ],
    },
    gettingThere: {
      title: "Como chegar",
      body: [
        "Barcelona–El Prat (BCN) é o aeroporto de chegada para quase todo casamento catalão — voos diretos da maior parte da Europa e das Américas.",
        "Girona (GRO) é uma boa segunda opção para casamentos no Empordà. De qualquer um deles, a maioria dos nossos venues está a 45–90 minutos de carro.",
      ],
    },
    sampleDay: {
      title: "Como um dia costuma se desenrolar",
      body: [
        "17h — Convidados chegam de shuttle vindos da costa ou da cidade, recebidos com vermute à sombra.",
        "18h — Cerimônia simbólica sob uma árvore antiga ou no pátio da masia.",
        "19h — Aperitivo com cava local, jamón e petiscos no terraço.",
        "21h — Jantar em mesa longa enquanto o sol se põe.",
        "23h30 — A música abre. Dança até os shuttles partirem às 3h.",
      ],
    },
    faq: [
      {
        q: "Podemos trazer nosso próprio celebrante?",
        a: "Sim. Para cerimônias simbólicas, vocês podem trazer um amigo ou celebrante de casa, ou apresentamos celebrantes bilíngues em quem confiamos.",
      },
      {
        q: "Quantos convidados cabem numa masia?",
        a: "A maioria acomoda confortavelmente entre 60 e 130. Planejamos números menores em propriedades mais intimistas e sempre visitamos o venue antes de recomendá-lo.",
      },
    ],
    related: ["costa-brava", "mallorca"],
    closing: {
      title: "Um casamento catalão, planejado em silêncio",
      body:
        "Aceitamos apenas doze casamentos por ano. Se a Catalunha está chamando vocês, uma discovery call é o caminho mais tranquilo para descobrir se somos a equipe certa para construí-lo com vocês.",
    },
  },

  "costa-brava": {
    meta: {
      title: "Wedding Planner na Costa Brava | Propriedades à Beira-Mar",
      description:
        "Wedding Planner boutique para Destination Weddings na Costa Brava — enseadas de pinheiros, villas em penhascos e propriedades refinadas junto ao mar.",
    },
    hero: {
      eyebrow: "Destination Wedding na Costa Brava",
      h1: "Case-se nas enseadas de pinheiros da Costa Brava",
      intro:
        "A Costa Brava é o lado mais suave e mais privado do Mediterrâneo espanhol. Florestas de pinheiros que descem até a água, villas em penhascos e um litoral que preservou seu caráter.",
    },
    character: {
      title: "A atmosfera de um casamento na Costa Brava",
      body: [
        "É aqui que vocês vêm se quiserem o mar no enquadramento sem as multidões. As enseadas são pequenas, as vilas são de pedra, e a luz do fim da tarde faz metade do trabalho do fotógrafo.",
        "Combina com casais que querem elegância sem verniz — jantares longos num terraço sobre a água, convidados descalços na pedra depois da meia-noite, o som dos pinheiros no lugar de um DJ ecoando em prédios altos.",
      ],
    },
    venueTypes: {
      title: "Tipos de venue",
      body: ["Três formatos que a Costa Brava costuma assumir:"],
      list: [
        "Villas privadas em penhascos — takeover de fim de semana inteiro para 30–80 convidados.",
        "Hotéis boutique à beira-mar — serviço polido, hospedagem no local, logística mínima.",
        "Propriedades no Empordà, um pouco para o interior — dez minutos da costa, com mais espaço e mais privacidade.",
      ],
    },
    ceremony: {
      title: "Logística da cerimônia",
      body: [
        "Uma cerimônia simbólica num terraço, numa enseada ou num jardim privado é o que a maioria dos casais internacionais escolhe — flexível, bilíngue e sem complicação legal.",
        "Cerimônias civis nas prefeituras da Costa Brava são possíveis, mas exigem prazos de residência e papelada que raramente combinam com uma lista de convidados internacional. Planejamos a simbólica e a legal fica para casa.",
      ],
    },
    season: {
      title: "Quando casar",
      body: [
        "Do final de maio a junho e todo setembro — mar quente, luz longa e noites em que dá para ficar do lado de fora sem casaco.",
        "Julho e agosto são alta temporada na costa: lindos, mais barulhentos e mais caros. Planejamos quando os casais querem.",
        "O início de outubro é discretamente uma das nossas janelas favoritas — a água ainda dá para nadar, a luz é mel e os preços aliviam.",
      ],
    },
    gettingThere: {
      title: "Como chegar",
      body: [
        "Girona (GRO) fica a 30–60 minutos da maioria dos venues da Costa Brava.",
        "Barcelona (BCN) adiciona uma hora de estrada, mas abre voos diretos de longa distância para convidados vindos das Américas ou da Ásia.",
      ],
    },
    sampleDay: {
      title: "Como um dia costuma se desenrolar",
      body: [
        "17h30 — Convidados se reúnem numa pequena enseada ou num terraço no penhasco.",
        "18h — Cerimônia simbólica enquanto a luz começa a suavizar.",
        "19h — Aperitivo com cava e frutos do mar locais no terraço sobre a água.",
        "21h — Jantar sob luzes suspensas, mesas abertas para o horizonte.",
        "23h30 — Dança na pedra até o último convidado ir embora.",
      ],
    },
    faq: [
      {
        q: "Os convidados conseguem nadar?",
        a: "Sim — a maioria dos nossos casais planeja um banho de boas-vindas na manhã do casamento e um almoço de recuperação junto à água no dia seguinte.",
      },
      {
        q: "Quão privadas são as villas em penhascos?",
        a: "Muito. Trabalhamos só com venues que oferecem takeover privado completo, para que o dia pertença a vocês e aos seus convidados — não à agenda de um hotel.",
      },
    ],
    related: ["catalonia", "mallorca"],
    closing: {
      title: "Um casamento na Costa Brava, sem barulho",
      body:
        "Planejamos um número pequeno de casamentos por ano na Costa Brava. Uma discovery call é o primeiro passo silencioso.",
    },
  },

  ibiza: {
    meta: {
      title: "Wedding Planner em Ibiza | Fincas e Cerimônias ao Pôr do Sol",
      description:
        "Wedding Planner boutique para Destination Weddings em Ibiza — fincas caiadas, cerimônias ao pôr do sol e uma elegância mediterrânea descalça.",
    },
    hero: {
      eyebrow: "Destination Wedding em Ibiza",
      h1: "Case-se numa finca caiada de Ibiza ao pôr do sol",
      intro:
        "Ibiza recompensa casais que querem que a festa importe tanto quanto os votos. Fincas caiadas, cheiro de sal no ar e pôr do sol que faz metade do styling por vocês.",
    },
    character: {
      title: "A atmosfera de um casamento em Ibiza",
      body: [
        "Existe uma versão de Ibiza que nada tem a ver com clubs — fincas antigas ao fim de longas estradas de terra, oliveiras, buganvílias e uma elegância descalça que só esta ilha realmente tem.",
        "Nossos casamentos em Ibiza vivem nesse mundo. Mesas longas sob figueiras, cerimônias na hora dourada e uma pista de dança que fica cheia até o céu começar a clarear.",
      ],
    },
    venueTypes: {
      title: "Tipos de venue",
      body: ["Três formatos mais comuns de um casamento em Ibiza:"],
      list: [
        "Fincas privadas — takeover de fim de semana inteiro para 40–150 convidados, muitas vezes com hospedagem no local para a família mais próxima.",
        "Agroturismos boutique — menores, polidos e mais fáceis para uma viagem mais curta de três noites.",
        "Beach clubs e venues à beira-mar — para casais que querem a água diretamente no enquadramento.",
      ],
    },
    ceremony: {
      title: "Logística da cerimônia",
      body: [
        "Quase todos os nossos casais em Ibiza fazem cerimônia simbólica na finca, na última hora de luz. Pode acontecer em qualquer ponto da propriedade, em qualquer idioma, e parece exatamente um casamento legal para os convidados.",
        "A parte legal fica para casa. Cerimônias civis na ilha são tecnicamente possíveis, mas os prazos de residência raramente cabem num calendário internacional.",
      ],
    },
    season: {
      title: "Quando casar",
      body: [
        "Maio, junho, setembro e início de outubro — dias quentes, calor ameno e ilha menos cheia do que no auge do verão.",
        "Julho e agosto são Ibiza no seu mais Ibiza: possível, espetacular e com preço à altura. Planejamos com cerimônias tardias e cafés da manhã ao amanhecer quando os casais escolhem esses meses.",
      ],
    },
    gettingThere: {
      title: "Como chegar",
      body: [
        "Ibiza (IBZ) é o único aeroporto da ilha, com voos diretos da maior parte das capitais europeias no verão.",
        "Para convidados vindos das Américas, roteamos via Madrid ou Barcelona; a conexão é curta e civilizada.",
      ],
    },
    sampleDay: {
      title: "Como um dia costuma se desenrolar",
      body: [
        "18h30 — Convidados chegam à finca; toalhas geladas e cava sob as árvores.",
        "19h30 — Cerimônia simbólica enquanto a luz vira dourada.",
        "20h30 — Aperitivo no jardim, petiscos e vinho ibicenco.",
        "22h — Jantar em mesas longas sob luzes suspensas.",
        "00h30 — Pista de dança abre. Café da manhã ao nascer do sol para quem aguentar.",
      ],
    },
    faq: [
      {
        q: "Quão alta pode ser a música?",
        a: "A maioria das fincas privadas tem restrições rígidas de ruído depois da meia-noite. Sabemos quais venues permitem que a festa avance e combinamos o casal com o venue certo.",
      },
      {
        q: "Precisamos reservar o fim de semana inteiro?",
        a: "Na maioria das fincas, sim — um takeover de duas ou três noites é o padrão e, honestamente, a melhor forma de aproveitar a ilha.",
      },
    ],
    related: ["mallorca", "costa-brava"],
    closing: {
      title: "Um casamento em Ibiza, planejado com calma",
      body:
        "Ibiza pode ser caótica de planejar do exterior. Não é caótica de planejar com a gente. Uma discovery call é o primeiro passo silencioso.",
    },
  },

  mallorca: {
    meta: {
      title: "Wedding Planner em Maiorca | Tramuntana e Propriedades Costeiras",
      description:
        "Wedding Planner boutique para Destination Weddings em Maiorca — propriedades de pedra na Tramuntana, olivais e um luxo discreto de ilha.",
    },
    hero: {
      eyebrow: "Destination Wedding em Maiorca",
      h1: "Case-se numa propriedade maiorquina acima do mar",
      intro:
        "Maiorca é a prima mais refinada de Ibiza. Propriedades de pedra na Serra de Tramuntana, olivais que se estendem por quilômetros e um luxo silencioso, sem a fama de ilha de festa.",
    },
    character: {
      title: "A atmosfera de um casamento em Maiorca",
      body: [
        "Maiorca combina com casais que querem elegância sem barulho. As propriedades na Tramuntana parecem sempre ter estado ali; as fincas costeiras têm vista direta para o mar sem calçadão no enquadramento.",
        "A cultura de serviço da ilha é genuinamente refinada, o que faz uma lista grande de convidados parecer sem esforço. É a nossa região mais confiável para um casamento que soa discreto e funciona impecável.",
      ],
    },
    venueTypes: {
      title: "Tipos de venue",
      body: ["Três formatos que um casamento em Maiorca assume:"],
      list: [
        "Propriedades na Tramuntana — pedra, montanhas, olivais, 40–150 convidados.",
        "Fincas costeiras — vista para o mar, terrenos privados, logística mais fácil para convidados mais velhos.",
        "Hotéis boutique de campo — takeover completo com quartos no local para 20–40 convidados.",
      ],
    },
    ceremony: {
      title: "Logística da cerimônia",
      body: [
        "Cerimônias simbólicas no venue são o padrão para casais internacionais — flexíveis, bilíngues e simples do ponto de vista legal quando combinadas com a papelada em casa.",
        "Palma tem mais estrutura para cerimônia civil do que a maioria das cidades espanholas, mas os prazos de residência ainda são consideráveis; explicamos os dois caminhos na discovery call.",
      ],
    },
    season: {
      title: "Quando casar",
      body: [
        "Do final de maio a junho e setembro — quente, seco e luz mediterrânea limpa.",
        "Julho e agosto são quentes, mas suportáveis perto da costa; a Tramuntana mantém noites mais frescas mesmo no auge do verão.",
        "Outubro é um dos segredos mais bem guardados da ilha — o mar está quente, o público sumiu e a luz é notável.",
      ],
    },
    gettingThere: {
      title: "Como chegar",
      body: [
        "Palma de Maiorca (PMI) tem voos diretos da maior parte das capitais europeias e boas conexões das Américas via Madrid ou Barcelona.",
        "A maioria dos nossos venues está a 30–60 minutos do aeroporto.",
      ],
    },
    sampleDay: {
      title: "Como um dia costuma se desenrolar",
      body: [
        "17h30 — Convidados chegam a uma propriedade acima do mar; cava no terraço.",
        "18h30 — Cerimônia simbólica num olival ou num terraço de pedra.",
        "19h30 — Aperitivo com vinho local e petiscos.",
        "21h — Jantar sob luzes suspensas, montanhas ou mar no enquadramento.",
        "23h30 — Dança até o toque de recolher, depois um bar noturno para o círculo mais próximo.",
      ],
    },
    faq: [
      {
        q: "Maiorca é mais tranquila que Ibiza?",
        a: "Significativamente, sim. A ilha é maior, as propriedades são mais espalhadas e a cultura de serviço é mais tradicional. Combina com um registro mais refinado.",
      },
      {
        q: "Que tamanho de casamento cabe aqui?",
        a: "Confortavelmente até 200 na propriedade certa. Ficamos abaixo de 150 para a versão do dia que a maioria dos nossos casais quer.",
      },
    ],
    related: ["ibiza", "costa-brava"],
    closing: {
      title: "Um casamento maiorquino, planejado em silêncio",
      body:
        "Planejamos um número limitado de casamentos em Maiorca por ano. Uma discovery call é onde escutamos primeiro e recomendamos depois.",
    },
  },

  granada: {
    meta: {
      title: "Wedding Planner em Granada | Palácios Mouriscos e Andaluzia",
      description:
        "Wedding Planner boutique para Destination Weddings em Granada — palácios mouriscos, vistas para a Alhambra e romantismo andaluz intimista.",
    },
    hero: {
      eyebrow: "Destination Wedding em Granada",
      h1: "Case-se com a Alhambra no horizonte",
      intro:
        "Granada é para casais atraídos por história, arquitetura e uma lista de convidados menor e mais afetiva. Palácios mouriscos, cármenes acima da cidade antiga e uma luz que só a Andaluzia tem.",
    },
    character: {
      title: "A atmosfera de um casamento em Granada",
      body: [
        "Granada é um casamento mais lento e mais literário. Recompensa listas pequenas, jantares longos e casais que querem que o dia pareça tecido no lugar, não montado por cima dele.",
        "A própria cidade faz quase toda a atmosfera — azulejos mouriscos, jasmim nos pátios, a Alhambra iluminada do outro lado do vale à noite. Um casamento em Granada não precisa ser estilizado demais.",
      ],
    },
    venueTypes: {
      title: "Tipos de venue",
      body: ["Três formatos que um casamento em Granada assume:"],
      list: [
        "Cármenes — casas históricas muradas no Albaicín com jardins privados e vista da Alhambra, ideais para 20–60 convidados.",
        "Palacios restaurados no centro histórico — para um registro mais arquitetônico e formal.",
        "Cortijos no campo da Vega — olivais, montanhas e espaço para 60–120 convidados.",
      ],
    },
    ceremony: {
      title: "Logística da cerimônia",
      body: [
        "Cerimônias simbólicas funcionam lindamente em pátios e jardins de Granada, e são a escolha da maioria dos casais internacionais. Celebrantes bilíngues são fáceis de organizar.",
        "Cerimônias civis em Granada são possíveis, mas os prazos de residência são rígidos; para casais internacionais quase sempre recomendamos o caminho simbólica-na-Espanha, legal-em-casa.",
      ],
    },
    season: {
      title: "Quando casar",
      body: [
        "Maio, início de junho, setembro e outubro — quente, seco e a luz da cidade antiga é excepcional.",
        "Julho e agosto em Granada são realmente quentes; planejamos com cerimônias tardias e jantares longos e frescos à noite.",
        "Casamentos de inverno em Granada são subestimados — céu limpo, neve na Serra Nevada ao fundo e a cidade quase só para vocês.",
      ],
    },
    gettingThere: {
      title: "Como chegar",
      body: [
        "Granada (GRX) tem voos diretos limitados, principalmente de Madrid e Barcelona.",
        "Málaga (AGP) fica a 90 minutos de estrada e costuma ser a entrada mais prática para convidados internacionais.",
        "Sevilha (SVQ) fica a cerca de 2h30 de estrada ou trem e funciona bem se vocês emendarem Granada com alguns dias na Andaluzia.",
      ],
    },
    sampleDay: {
      title: "Como um dia costuma se desenrolar",
      body: [
        "19h — Convidados se reúnem num jardim murado enquanto o calor cede.",
        "19h30 — Cerimônia simbólica sob as árvores, Alhambra no horizonte.",
        "20h30 — Aperitivo com sherry, jamón e petiscos andaluzes.",
        "22h — Jantar em mesa longa no pátio.",
        "00h30 — Flamenco ao vivo ou uma pequena banda; dança até a cidade dormir.",
      ],
    },
    faq: [
      {
        q: "Podemos nos casar dentro da Alhambra?",
        a: "Apenas em formatos muito limitados e historicamente aprovados. Somos honestos com os casais sobre o que é realista e conduzimos a maioria a cármenes e palacios com vista para a Alhambra.",
      },
      {
        q: "Granada é a cidade certa para muitos convidados?",
        a: "Ela brilha mais abaixo de 80 convidados. Para casamentos maiores na Andaluzia costumamos recomendar Sevilha ou um cortijo no campo, fora da cidade.",
      },
    ],
    related: ["seville", "mallorca"],
    closing: {
      title: "Um casamento em Granada, silenciosamente construído",
      body:
        "Pequeno, considerado, romântico. Se for esse o casamento que estão imaginando, uma discovery call é o primeiro passo tranquilo.",
    },
  },

  seville: {
    meta: {
      title: "Wedding Planner em Sevilha | Palacios e Casamentos Andaluzes",
      description:
        "Wedding Planner boutique para Destination Weddings em Sevilha — palacios, pátios de laranjeiras e celebrações inconfundivelmente espanholas.",
    },
    hero: {
      eyebrow: "Destination Wedding em Sevilha",
      h1: "Case-se num palacio sevilhano",
      intro:
        "Sevilha é um casamento inconfundivelmente espanhol. Palacios com pátios de azulejos, laranjeiras em flor, flamenco depois da meia-noite e uma cidade que sabe celebrar melhor do que quase qualquer outra na Europa.",
    },
    character: {
      title: "A atmosfera de um casamento em Sevilha",
      body: [
        "Não há nada silencioso num casamento sevilhano — e nem deveria haver. É uma cidade construída em torno de alegria, ritual e mesas longas — e um casamento aqui herda tudo isso.",
        "Combina com casais que querem que o dia soe profundamente espanhol e não deliberadamente contido. Cor, música, comida que não para de chegar e dança que começa mais cedo do que se espera.",
      ],
    },
    venueTypes: {
      title: "Tipos de venue",
      body: ["Três formatos que um casamento em Sevilha assume:"],
      list: [
        "Palacios no centro histórico — pátios azulejados, colunatas, 60–150 convidados.",
        "Haciendas fora da cidade — propriedades restauradas com olivais e terrenos privados, 80–200 convidados.",
        "Cortijos no campo — para um registro mais rural, com cavalos e fogo aberto.",
      ],
    },
    ceremony: {
      title: "Logística da cerimônia",
      body: [
        "Cerimônias simbólicas num pátio de palacio ou num jardim de hacienda são o padrão e, para casais internacionais, quase sempre o caminho mais fácil — celebrantes bilíngues, sem prazos de residência, liberdade total de local e horário.",
        "Cerimônias civis nas prefeituras sevilhanas são possíveis, mas exigem semanas de papelada na Espanha; na maioria dos casos planejamos a parte legal em casa.",
      ],
    },
    season: {
      title: "Quando casar",
      body: [
        "Abril, maio e início de junho — as laranjeiras em flor, os pátios frescos e a luz andaluza no seu melhor.",
        "Setembro e outubro — dias quentes, noites quentes, vinhos de colheita e cidade tranquila.",
        "Julho e agosto em Sevilha são famosamente quentes. Não recomendamos, a menos que haja um motivo específico; quando planejamos, tudo acontece depois do pôr do sol.",
      ],
    },
    gettingThere: {
      title: "Como chegar",
      body: [
        "Sevilha (SVQ) tem voos diretos da maior parte das capitais europeias.",
        "Para convidados de longa distância, Madrid conecta em menos de uma hora de avião ou 2h30 no AVE de alta velocidade, o que muitos convidados acham mais confortável.",
      ],
    },
    sampleDay: {
      title: "Como um dia costuma se desenrolar",
      body: [
        "19h — Convidados se reúnem num pátio azulejado, sherry e petiscos à sombra.",
        "20h — Cerimônia simbólica sob os arcos enquanto o calor cede.",
        "21h — Aperitivo com jamón, gaspacho e vinhos andaluzes.",
        "22h30 — Jantar em mesas longas, pátio iluminado por velas.",
        "01h — Flamenco ou banda ao vivo; dança até a cidade silenciar.",
      ],
    },
    faq: [
      {
        q: "Quão quente é quente demais?",
        a: "Conduzimos os casais para fora do meio de julho até agosto, a menos que o casamento seja inteiramente depois de escurecer e o venue tenha sombra e climatização sérias.",
      },
      {
        q: "Podemos emendar Sevilha com outra cidade?",
        a: "Sim — Granada, Jerez e a costa combinam lindamente. Muitas vezes planejamos um fim de semana de casamento em Sevilha com um welcome dinner menor em outra cidade andaluza.",
      },
    ],
    related: ["granada", "catalonia"],
    closing: {
      title: "Um casamento em Sevilha, planejado com cuidado",
      body:
        "Sevilha pode parecer avassaladora do exterior; nunca deveria parecer avassaladora de planejar. Uma discovery call é o primeiro passo silencioso.",
    },
  },
};

/* ============================ ACCESS ============================ */

export function getHub(lang: Lang): HubContent {
  return lang === "pt" ? ptHub : enHub;
}

export function getRegion(key: RegionKey, lang: Lang): RegionContent {
  return (lang === "pt" ? ptRegions : enRegions)[key];
}
