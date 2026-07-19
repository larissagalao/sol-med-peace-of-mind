// All copy for the site — English and Portuguese.
// Keep strings in sync between languages. No fallback: every field must exist in both.
//
// Localization rule (PT): industry terms "Wedding Planner", "Wedding Planning"
// and "Destination Wedding" are intentionally kept in English in Portuguese
// copy — they are commonly used by Portuguese-speaking clients.

import type { Lang } from "./routes";

export type Testimonial = {
  quote: string;
  couple: string;
  origin: string;
  region: string;
};

export type FaqItem = { q: string; a: string };

export type PageMeta = {
  title: string;
  description: string;
};

export type PricingTier = {
  label: string;
  range: string;
  note: string;
};

export type Content = {
  brand: { name: string; tagline: string };
  nav: {
    home: string;
    about: string;
    services: string;
    destination: string;
    testimonials: string;
    faq: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
  };
  footer: {
    tagline: string;
    columns: { explore: string; company: string; contact: string };
    based: string;
    email: string;
    rights: string;
    legal: string;
  };
  common: {
    bookCall: string;
    scheduleConsult: string;
    learnMore: string;
    readMore: string;
    exploreServices: string;
    startPlanning: string;
    getInTouch: string;
    viewAll: string;
    languageLabel: string;
    scrollCue: string;
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
  };
  home: {
    meta: PageMeta;
    hero: {
      eyebrow: string;
      title: string;
      body: string;
      primary: string;
      secondary: string;
    };
    promise: { eyebrow: string; title: string; body: string[] };
    trust: { label: string }[];
    services: {
      eyebrow: string;
      title: string;
      intro: string;
      items: { name: string; body: string }[];
    };
    process: {
      eyebrow: string;
      title: string;
      intro: string;
      steps: { name: string; body: string }[];
    };
    regions: {
      eyebrow: string;
      title: string;
      intro: string;
      items: { name: string; body: string }[];
    };
    testimonialsSection: { eyebrow: string; title: string };
  };
  about: {
    meta: PageMeta;
    hero: { eyebrow: string; title: string; body: string };
    story: { title: string; body: string[] };
    trust: { title: string; items: { name: string; body: string }[] };
    philosophy: { title: string; body: string[] };
    boutique: {
      eyebrow: string;
      title: string;
      lead: string;
      body: string[];
      stat: { number: string; label: string };
    };
    howWeWork: { title: string; steps: { name: string; body: string }[] };
  };
  services: {
    meta: PageMeta;
    hero: { eyebrow: string; title: string; body: string };
    intro: string;
    items: {
      name: string;
      tagline: string;
      body: string;
      includes: string[];
      idealFor: string;
    }[];
    concierge: { title: string; body: string; items: string[] };
    pricing: {
      eyebrow: string;
      title: string;
      intro: string;
      tiers: PricingTier[];
      disclaimer: string;
      flexibility: string;
      venueNote: string;
    };
  };
  destination: {
    meta: PageMeta;
    hero: { eyebrow: string; title: string; body: string };
    sections: { id: string; title: string; body: string[]; list?: string[] }[];
    regions: { key: string; name: string; body: string }[];
    mistakes: { title: string; items: string[] };
    closing: { title: string; body: string };
  };
  testimonials: {
    meta: PageMeta;
    hero: { eyebrow: string; title: string; body: string };
    items: Testimonial[];
    caseStudy: {
      eyebrow: string;
      title: string;
      couple: string;
      location: string;
      dateLabel: string;
      story: string[];
      highlightsTitle: string;
      highlights: string[];
      galleryEyebrow: string;
      galleryTitle: string;
      galleryNote: string;
    };
  };
  faq: {
    meta: PageMeta;
    hero: { eyebrow: string; title: string; body: string };
    items: FaqItem[];
    closing: { title: string; body: string };
  };
  contact: {
    meta: PageMeta;
    hero: { eyebrow: string; title: string; body: string };
    trustTitle: string;
    trustPoints: string[];
    formLabels: {
      name: string; partner: string; email: string;
      date: string; region: string; guests: string; budget: string;
      message: string; submit: string;
      placeholders: { name: string; partner: string; email: string; message: string };
      regionOptions: string[];
      guestOptions: string[];
      budgetOptions: string[];
    };
    success: { title: string; body: string };
    error: { title: string; body: string };
    directContact: { label: string; email: string };
  };
};

/* ---------- ENGLISH ---------- */
const en: Content = {
  brand: { name: "Sol Mediterraneo", tagline: "Weddings Co." },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    destination: "Weddings in Spain",
    testimonials: "Real Wedding",
    faq: "FAQ",
    contact: "Contact",
    cta: "Book a Discovery Call",
    menu: "Menu",
    close: "Close",
  },
  footer: {
    tagline: "You keep living your life. We take care of everything in Spain.",
    columns: { explore: "Explore", company: "Company", contact: "Get in touch" },
    based: "Based in Spain. Planning for couples worldwide.",
    email: "hello@solmediterraneoweddings.com",
    rights: "All rights reserved.",
    legal: "A boutique destination wedding consultancy.",
  },
  common: {
    bookCall: "Book a Discovery Call",
    scheduleConsult: "Schedule a Consultation",
    learnMore: "Learn more",
    readMore: "Read more",
    exploreServices: "Explore our services",
    startPlanning: "Let's start planning",
    getInTouch: "Get in touch",
    viewAll: "View all",
    languageLabel: "Language",
    scrollCue: "Scroll to explore",
  },
  ctaBanner: {
    eyebrow: "The next step",
    title: "Let's have a quiet conversation about your wedding.",
    body: "A 30-minute discovery call — no pressure, no scripts. You tell us what you're picturing, we tell you honestly whether we're the right people to bring it to life in Spain.",
    button: "Book a Discovery Call",
  },

  home: {
    meta: {
      title: "Sol Mediterraneo Weddings Co. — Destination Wedding Planner in Spain",
      description:
        "A boutique Destination Wedding planner in Spain. We plan quiet, elegant weddings for international couples — so you can keep living your life while we take care of everything on the ground.",
    },
    hero: {
      eyebrow: "Destination Weddings in Spain",
      title: "You keep living your life.\nWe take care of everything in Spain.",
      body: "Sol Mediterraneo is a boutique wedding consultancy for international couples getting married in Spain. Local expertise, one point of contact, and a calmer path from first idea to the last song.",
      primary: "Book a Discovery Call",
      secondary: "How we work",
    },
    promise: {
      eyebrow: "Our promise",
      title: "We don't sell Wedding Planning. We sell peace of mind.",
      body: [
        "Planning a wedding from another country shouldn't feel like a second full-time job. Different language, different suppliers, different rules, different currency — from abroad, every small decision grows a little heavier than it should.",
        "We are your trusted local partner on the ground. We speak the languages, we know the venues, we've worked with the vendors for years. You keep your calendar. We keep everything in Spain organized, honest, and moving forward.",
      ],
    },
    trust: [
      { label: "One point of contact" },
      { label: "English & Portuguese" },
      { label: "Local vendors, vetted" },
      { label: "On the ground in Spain" },
    ],
    services: {
      eyebrow: "How we help",
      title: "Four ways to plan with us",
      intro: "Every couple arrives at a different stage. We meet you where you are.",
      items: [
        { name: "Full Planning", body: "From the first venue longlist to the last vendor invoice. We coordinate every decision, meeting, and moving piece — you enjoy the process, we hold the map." },
        { name: "Partial Planning", body: "You've started. Perhaps you have a venue, or a date, or a rough idea. We step in, review what's on the table, and take the remaining planning off your hands." },
        { name: "Wedding Day Coordination", body: "You've planned the wedding. We step in as your local coordinator to manage suppliers, timelines, and every detail on the day — so you can actually enjoy it." },
        { name: "Elopements & Micro-weddings", body: "Intimate ceremonies of two to thirty. Legal or symbolic. A cliff above the sea, a small chapel, a private terrace — quietly and beautifully arranged." },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A calmer path to a wedding in Spain",
      intro: "Four steady steps — from a first conversation to the moment you toast under the olive trees.",
      steps: [
        { name: "Discovery call", body: "A quiet 30-minute call. You tell us the story so far — dates, guest count, what you're picturing. We share honestly whether we're a good fit." },
        { name: "Proposal & design", body: "A tailored planning proposal, a curated shortlist of venues, and a first design direction shaped around who you are — not a template." },
        { name: "Planning & coordination", body: "Regular check-ins on your calendar. We handle the vendors, the contracts, the language, the logistics. You approve the decisions that matter to you." },
        { name: "The wedding week", body: "We are with you on the ground from arrival to farewell brunch. You are a guest at your own wedding. That is the whole point." },
      ],
    },
    regions: {
      eyebrow: "Where couples marry",
      title: "The regions we know by heart",
      intro: "We plan across Spain, with a boutique focus on Catalonia and the Balearics.",
      items: [
        { name: "Barcelona", body: "Elegant city weddings in restored palaces, private rooftops, and Modernista courtyards." },
        { name: "Catalonia", body: "Vineyards, masias, country houses, sea views, olive groves and charming villages. Far more than Barcelona." },
        { name: "Costa Brava", body: "Beach ceremonies, sea cliffs, Mediterranean villas and pine-scented coves." },
        { name: "Mallorca", body: "Luxury seaside venues, olive groves, and stone fincas across the Tramuntana." },
        { name: "Ibiza", body: "Elegant beach weddings, boutique luxury and slow sunset ceremonies." },
        { name: "Andalusia", body: "Historic estates, tiled courtyards, orange trees and old-world Spanish elegance." },
      ],
    },
    testimonialsSection: {
      eyebrow: "In their own words",
      title: "A couple who trusted us with Spain.",
    },
  },

  about: {
    meta: {
      title: "About — Sol Mediterraneo Weddings Co.",
      description:
        "Meet Sol Mediterraneo — a boutique Destination Wedding consultancy in Spain, planning weddings for international couples. Brazilian founder living in Spain, bridging both worlds.",
    },
    hero: {
      eyebrow: "About us",
      title: "Your trusted local partner in Spain.",
      body: "Planning a wedding abroad shouldn't feel overwhelming. We act as your single point of contact on the ground — simplifying decisions, coordinating locally, and removing the uncertainty of planning from another country.",
    },
    story: {
      title: "Our story",
      body: [
        "I'm Brazilian. I built my life in Spain — and along the way I learned this country the slow way: living in it, cooking in it, arguing about wine in it, driving its back roads on a Sunday.",
        "Sol Mediterraneo was born out of a simple observation: international couples were falling in love with the idea of a wedding in Spain, and then quietly drowning in the logistics of pulling it off from abroad. Different language, different suppliers, a different way of doing business.",
        "Because I understand international couples and I understand the local Spanish wedding world, I bridge the two naturally. Nothing gets lost in translation — culturally or literally.",
      ],
    },
    trust: {
      title: "Why couples trust us",
      items: [
        { name: "Bridging two worlds", body: "Brazilian by origin, based in Spain. I understand how international couples think, and I understand how Spanish and Catalan suppliers actually work. That combination is the whole point." },
        { name: "One team, from first email to farewell", body: "You will not be handed off to a junior coordinator after signing. The person you meet on the discovery call is the person who runs your wedding week." },
        { name: "We work in your language", body: "Fluent English and native Portuguese. I work with Spanish and Catalan suppliers every week, so every conversation with your vendors goes through me — in the language that works." },
        { name: "Our vendors are our long-term partners", body: "We work with the same florists, chefs, photographers, and musicians year after year. You get quality that has been vetted for you — no surprises on the day." },
        { name: "Honesty over upsell", body: "If a decision won't move the wedding forward, we'll tell you. If a supplier is a poor fit, we'll steer you elsewhere. We are advisors first." },
        { name: "Fewer weddings, deeper care", body: "We deliberately cap the number of weddings we take each year. Your wedding is not one of many — it has our full attention." },
      ],
    },
    philosophy: {
      title: "Our planning philosophy",
      body: [
        "A wedding in Spain should feel like the best version of a long, slow, sunlit dinner — with people you love, in a place you'll return to for the rest of your life. That is what we plan for.",
        "We are not maximalists. We do not chase trends. We favour natural materials, honest food, generous light, and a rhythm that lets you actually be there. Elegance, to us, is what's left after you remove the noise.",
      ],
    },
    boutique: {
      eyebrow: "Boutique by design",
      title: "A maximum of 12 weddings a year.",
      lead: "We intentionally cap the calendar. It is the single most important decision we make.",
      body: [
        "Twelve weddings a year is what allows us to give every couple personalized attention, real availability when you need us, exceptional organization on the day, and a close relationship that lasts long after the last song.",
        "It means we know your parents' names. It means we answer the phone. It means your wedding week has our whole team, not a fragment of it.",
      ],
      stat: { number: "12", label: "weddings per year, maximum" },
    },
    howWeWork: {
      title: "How we work with you",
      steps: [
        { name: "We listen first", body: "Before we propose anything, we want to understand who you are as a couple — how you like to gather, how you like to eat, what you have quietly always wanted." },
        { name: "We simplify decisions", body: "You will not be sent forty vendor options and asked to choose. We shortlist ruthlessly. Two or three considered choices, with our honest recommendation." },
        { name: "We handle Spain, in Spain", body: "Venues, licenses, translations, tastings, room blocks, transport — the entire local machinery is ours to run." },
        { name: "We stay calm when things move", body: "Weddings are living things. Suppliers get sick. Rain arrives. Guests change plans. Our job is to absorb all of that so you never feel it." },
      ],
    },
  },

  services: {
    meta: {
      title: "Services — Wedding Planning in Spain | Sol Mediterraneo",
      description:
        "Full planning, partial planning, wedding day coordination, and elopement services for Destination Weddings in Spain. Discover the right level of support for your wedding.",
    },
    hero: {
      eyebrow: "Services",
      title: "The right level of support, and no more.",
      body: "Every couple arrives at a different point. Some come to us with only a country in mind. Others already have a venue and simply want a calmer path forward. Here is how we work.",
    },
    intro:
      "Our services are boutique by design. We take on a maximum of twelve weddings a year so that every couple has the full attention of the same team from first email to farewell.",
    items: [
      {
        name: "Full Planning",
        tagline: "End to end, everything included.",
        body: "For couples who want to arrive in Spain and simply be present. From venue search to the last vendor invoice, we run the entire process on your behalf, in your time zone.",
        includes: [
          "Discovery, brief, and tailored planning proposal",
          "Curated venue shortlist and site visits (in person or via video)",
          "Complete design direction and mood boards",
          "Vendor sourcing, negotiation, and contracts",
          "Legal or symbolic ceremony coordination",
          "Guest logistics, accommodation blocks, transport",
          "Detailed production timeline",
          "Full on-site coordination during the wedding week",
        ],
        idealFor: "Couples living abroad who want a single trusted partner in Spain.",
      },
      {
        name: "Partial Planning",
        tagline: "You've started. We take it from here.",
        body: "For couples who have made a start — perhaps a venue, a date, or a shortlist of vendors — and want a local partner to review, refine, and carry the rest of the planning to the finish line.",
        includes: [
          "Full audit of everything booked so far",
          "Vendor gap analysis and recommendations",
          "Design refinement and cohesion",
          "Contract and budget review",
          "Production timeline and run sheet",
          "On-site coordination during the wedding week",
        ],
        idealFor: "Couples who have started planning themselves but want the wedding week handled locally.",
      },
      {
        name: "Wedding Day Coordination",
        tagline: "You planned it. We run it.",
        body: "For couples who have planned their own wedding but want an experienced local coordinator to manage suppliers, timelines and every detail on the day — so you can be fully present, not on the phone.",
        includes: [
          "Handover meeting to absorb everything you've built",
          "Vendor confirmation and single point of contact in the final weeks",
          "Detailed run-of-show and minute-by-minute timeline",
          "On-site coordination from set-up to farewell",
          "Ceremony cueing and reception flow",
          "Discreet problem-solving throughout the day",
        ],
        idealFor: "Couples who have done the planning themselves and want the wedding day handled by a professional on the ground.",
      },
      {
        name: "Elopements & Micro-Weddings",
        tagline: "Intimate ceremonies, up to 30 guests.",
        body: "A cliff above the Mediterranean. A stone chapel above the olive groves. A private terrace with the ten people who matter most. Quiet, beautiful, and thoughtfully arranged.",
        includes: [
          "Location scouting and permits",
          "Legal or symbolic ceremony coordination",
          "Officiant, photographer, florist, hair & makeup",
          "Intimate dinner at a curated restaurant or private villa",
          "Transport and hotel recommendations",
          "On-the-day coordination",
        ],
        idealFor: "Couples who want the day itself to be small, slow, and unforgettable.",
      },
    ],
    concierge: {
      title: "Destination Concierge",
      body: "For every couple we plan with, we quietly extend our care beyond the ceremony — because your guests are travelling too. It's included in every package.",
      items: [
        "Curated accommodation blocks in boutique hotels",
        "Welcome bags and local recommendations",
        "Rehearsal dinner and farewell brunch design",
        "Guest excursions — sailing, tastings, cultural visits",
        "Airport transfers and in-country transport",
      ],
    },
    pricing: {
      eyebrow: "Investment",
      title: "A wedding budget is a conversation, not a price list.",
      intro:
        "There is no fixed price for a wedding in Spain. Your investment depends on guest count, region, venue, season, level of luxury, and the logistics of the week. What we can share are honest reference ranges from the weddings we plan.",
      tiers: [
        { label: "Elopements", range: "€3,000 – €9,000+", note: "Two to a small handful of guests. Location, officiant, small dinner." },
        { label: "Weddings around 30 guests", range: "€20,000 – €45,000+", note: "Intimate micro-weddings at a boutique villa or restaurant." },
        { label: "Weddings of 30–100 guests", range: "€35,000 – €120,000+", note: "Full weddings across a weekend, with the guest experience built around them." },
      ],
      disclaimer:
        "These are reference ranges only, not fixed prices. Every wedding is unique, and each proposal is tailored to your priorities, guest count, location, season and overall vision.",
      flexibility:
        "We are happy to work together to design a celebration that aligns with your available investment while protecting the quality, organization and experience we believe in. Whatever the number, we plan against it honestly.",
      venueNote:
        "Venues in particular can vary significantly with season, duration and guest count. The same venue may cost €7,000 in low season and €21,000 on a peak-summer Saturday. We steer you toward the season and structure that gives you the most wedding for your investment.",
    },
  },

  destination: {
    meta: {
      title: "Destination Weddings in Spain — The Complete Guide | Sol Mediterraneo",
      description:
        "Everything international couples need to know about planning a Destination Wedding in Spain: legal requirements, costs, regions, timeline, and common mistakes to avoid.",
    },
    hero: {
      eyebrow: "The complete guide",
      title: "Destination Weddings in Spain.",
      body: "A calm, honest guide for international couples planning a wedding in Spain from abroad. What to expect, what to avoid, and what makes this country worth the trip.",
    },
    sections: [
      {
        id: "why-spain",
        title: "Why get married in Spain",
        body: [
          "Spain is one of the most rewarding Destination Wedding countries in Europe. It offers Mediterranean light, an outdoor culture built around long meals, world-class food and wine, and an infrastructure of boutique villas, historic estates, and hotels equipped to host international weddings.",
          "For couples flying in from Brazil, the United States, the United Kingdom, Canada, Australia, or elsewhere in Europe, Spain also offers something less obvious: a warmth of hospitality that makes the whole week feel like the wedding, not just the ceremony.",
        ],
      },
      {
        id: "legal-requirements",
        title: "Legal requirements for foreigners",
        body: [
          "Foreign couples can absolutely get legally married in Spain, but the requirements vary depending on residency, nationality, and religion. In practice, most international couples we work with choose one of two paths:",
        ],
        list: [
          "Legal ceremony abroad + symbolic ceremony in Spain — the most common choice. Couples marry legally in their home country (a short registry visit) and hold their full symbolic ceremony in Spain. This gives complete freedom on venue, timing, and officiant.",
          "Full legal ceremony in Spain — possible but paperwork-heavy for non-residents. Requires certified translations, apostilles, medical certificates in some regions, and residency of at least one partner in most autonomous communities.",
        ],
      },
      {
        id: "civil-vs-symbolic",
        title: "Civil vs symbolic ceremony",
        body: [
          "A civil ceremony is the legally binding version — the paperwork, the registrar, the signatures that make the marriage official in the eyes of the state. In Spain, for non-residents, a civil ceremony is administratively heavy: certified translations, apostilles, in some regions medical certificates, and residency requirements that vary by autonomous community. It has to happen where the paperwork allows, on the day the registrar allows, in the language the registrar uses.",
          "A symbolic ceremony carries the same emotion and meaning — the vows, the rings, the readings, the officiant of your choosing, the friends who cry — without the legal machinery. It can happen anywhere: a cliff above the sea, a garden, a stone chapel, a rooftop, an olive grove. It can be in your language. It can be on the exact day and hour you want. There is no registrar. There is no waiting list.",
          "For international couples, a symbolic ceremony is almost always the easiest and most beautiful choice. The overwhelming majority of the couples we work with — well over ninety percent — get legally married in a short registry visit back home (often months before, sometimes the week before), and then travel to Spain for the wedding that actually feels like the wedding. Full freedom on venue, timing, officiant, and format, and zero risk that a bureaucratic detail could reshape the day.",
          "Whichever path you choose, we coordinate the paperwork, the officiant, and the ceremony flow so the day itself feels seamless.",
        ],
      },
      {
        id: "costs",
        title: "How much a wedding in Spain costs",
        body: [
          "There is no fixed price for a wedding in Spain — investment depends on guest count, region, venue, season, level of luxury and logistics. What we can share are honest reference ranges. These are ranges, not quotes.",
        ],
        list: [
          "Elopements — typically around €3,000 to €9,000+",
          "Weddings around 30 guests — typically €20,000 to €45,000+",
          "Weddings of 30 to 100 guests — typically €35,000 to €120,000+",
          "Venue cost alone varies significantly with season: the same venue may be €7,000 in low season and €21,000 in high season",
        ],
      },
      {
        id: "regions",
        title: "The best regions in Spain for weddings",
        body: ["We work across the country with a boutique focus on the regions below."],
      },
      {
        id: "timeline",
        title: "A realistic planning timeline",
        body: [
          "For couples planning from abroad, we recommend 12–18 months of runway for a full wedding, and 4–6 months for an elopement. Peak-season weekends (June, July, September) in Ibiza, Mallorca, and Costa Brava book out earliest — often 18 months in advance.",
        ],
      },
      {
        id: "common-mistakes",
        title: "Common mistakes couples make",
        body: ["The five mistakes we most often see couples make when planning from abroad — and how to avoid them:"],
      },
      {
        id: "why-local",
        title: "Why hire a local Wedding Planner in Spain",
        body: [
          "Distance is the real cost of a Destination Wedding. A local planner is not a luxury — it's the mechanism that keeps distance from becoming stress. Vendors return calls faster to a local number. Contracts read differently in Spanish. Site visits happen this Tuesday instead of on your next flight.",
          "You could plan a wedding in Spain from abroad. Most couples we speak to could, in theory. Very few enjoy it.",
        ],
      },
    ],
    regions: [
      { key: "barcelona", name: "Barcelona", body: "Restored palaces, Modernista courtyards, and rooftop ceremonies with the Mediterranean on the horizon. Ideal for couples who want a wedding that feels like a city." },
      { key: "catalonia", name: "Catalonia (beyond Barcelona)", body: "Catalonia is much more than its capital. Inland: vineyards in the Penedès and Priorat, historic masias, and country estates surrounded by rolling hills. On the coast: sea views, cliffside villas, and Mediterranean landscapes. Throughout: olive groves, charming stone villages, and boutique estates that feel like they've been waiting for you. Some of our favourite weddings happen here." },
      { key: "costa-brava", name: "Costa Brava", body: "Cliffside villas, whitewashed chapels, and pine-scented coves an hour from Barcelona. The most cinematic coastline in Catalonia." },
      { key: "mallorca", name: "Mallorca", body: "Stone fincas in the Tramuntana mountains, olive-grove ceremonies, and boutique coastal hotels. Quiet, refined, and increasingly booked." },
      { key: "ibiza", name: "Ibiza", body: "Whitewashed country estates, candlelit dinners under the pines, and long warm evenings. For couples who want Ibiza's beauty without the club scene." },
      { key: "andalusia", name: "Andalusia", body: "Hilltop haciendas, courtyard patios, orange trees, and old-world Spanish elegance. Slower, warmer, and full of character." },
      { key: "seville", name: "Seville", body: "The soul of Andalusia. Tiled palaces, orange-tree courtyards, and a city that celebrates until dawn. Ideal for weddings that want warmth, flamenco culture, and a distinctly Spanish night." },
      { key: "granada", name: "Granada", body: "The Alhambra on the horizon, cármenes with garden views, and a slower, more intimate rhythm. A romantic choice for couples drawn to history and quiet beauty." },
    ],
    mistakes: {
      title: "Five mistakes to avoid",
      items: [
        "Booking a venue before understanding the guest experience around it — hotels, transport, and the surrounding town matter as much as the venue itself.",
        "Assuming vendors will speak English fluently in every region. Many of the best ones don't, and translation quietly becomes your job.",
        "Underestimating logistics for guests: room blocks, transfers, welcome dinners, and farewell brunches take real coordination.",
        "Signing contracts translated by online tools. Spanish wedding contracts have quirks — deposits, cancellation windows, force majeure — that read very differently in the original.",
        "Trying to see everything on one short visit. Site visits work best when they are focused, planned, and translated in real time.",
      ],
    },
    closing: {
      title: "The next step is a conversation.",
      body: "If you're thinking seriously about Spain, book a discovery call. Thirty minutes, no pressure, honest answers to whatever you're weighing up.",
    },
  },

  testimonials: {
    meta: {
      title: "A Real Wedding in Spain — Case Study | Sol Mediterraneo",
      description:
        "A close look at one of the international weddings we planned in Spain — the couple, the location, the planning journey, and what made it feel like theirs.",
    },
    hero: {
      eyebrow: "A real wedding",
      title: "One wedding, told properly.",
      body: "We stay small on purpose. Rather than a wall of quotes, here is a proper look at one of the weddings we planned — the couple, the place, and what it took to make it feel effortless.",
    },
    items: [
      {
        quote: "We live in São Paulo. We had never been to the Costa Brava. From the very first call, it felt like we finally had someone on our side in Spain. Everything — and I mean everything — was handled.",
        couple: "Beatriz & Rafael",
        origin: "São Paulo, Brazil",
        region: "Costa Brava",
      },
    ],
    caseStudy: {
      eyebrow: "Case study",
      title: "Beatriz & Rafael, a Costa Brava wedding.",
      couple: "Beatriz & Rafael",
      location: "A private villa above the Costa Brava, Catalonia",
      dateLabel: "Late September — golden hour every hour",
      story: [
        "Beatriz and Rafael live in São Paulo. They had never been to the Costa Brava. What they had was a picture in their heads — a long dinner table, a cliff, the Mediterranean somewhere in the frame, and forty people they actually wanted to spend a weekend with.",
        "We started the planning nine months out, entirely by video. Together we shortlisted three venues along the coast, ran a two-day scouting trip when they flew in that spring, and locked the villa in a single afternoon. From there, the rest of the planning happened in weekly calls on their São Paulo schedule.",
        "The wedding itself unfolded over three days: a welcome dinner in a small fishing village, a symbolic ceremony at sunset on the villa's terrace, a long dinner under the olive trees, and a farewell brunch by the pool the next morning. Nothing rushed. Nothing missing.",
      ],
      highlightsTitle: "Planning highlights",
      highlights: [
        "Nine months of remote planning, weekly video calls",
        "A two-day scouting trip with three shortlisted venues",
        "Symbolic ceremony coordinated locally; legal ceremony held in Brazil",
        "Curated vendor team: florist, chef, photographer, DJ, officiant",
        "Three-day guest experience — welcome dinner, wedding, brunch",
        "Full on-the-ground coordination for the entire wedding week",
      ],
      galleryEyebrow: "The wedding, in pictures",
      galleryTitle: "A closer look.",
      galleryNote: "Full gallery coming soon. The photographs from Beatriz and Rafael's wedding are being finished by the photographer and will replace the placeholders below.",
    },
  },

  faq: {
    meta: {
      title: "FAQ — Wedding Planning in Spain for International Couples | Sol Mediterraneo",
      description:
        "Answers to the most common questions from international couples planning a wedding in Spain: legal requirements, costs, travel, language, payments, and more.",
    },
    hero: {
      eyebrow: "Frequently asked",
      title: "The questions couples ask us first.",
      body: "If you're planning from abroad, you likely have the same questions we hear every week. Here are honest, up-to-date answers.",
    },
    items: [
      { q: "Can foreigners legally get married in Spain?", a: "Yes. Non-resident couples can marry legally in Spain, though paperwork and requirements vary by autonomous community and religion. Most international couples we work with choose to marry legally in their home country and hold a symbolic ceremony in Spain — this gives full freedom on venue and timing without the residency and translation requirements. We handle the coordination either way." },
      { q: "How much does a wedding in Spain cost?", a: "There is no fixed price — it depends on guest count, region, venue, season, level of luxury and logistics. As reference ranges: elopements typically €3,000–€9,000+, weddings around 30 guests €20,000–€45,000+, and weddings of 30–100 guests €35,000–€120,000+. Every proposal is tailored to your priorities, and we're happy to plan against whatever investment you're working with." },
      { q: "How many times do we need to travel to Spain?", a: "Most of our couples visit once or twice before the wedding week — a first trip for venue visits and a second closer to the date for tastings and final decisions. We host video walkthroughs of everything else, so nothing depends on you being here." },
      { q: "Do you help with guest accommodation?", a: "Yes. Guest logistics are included in every package — hotel blocks, welcome bags, transport, rehearsal dinners, and farewell brunches. Your guests will feel looked after from the moment they land." },
      { q: "Do you work with English-speaking vendors?", a: "We work with a curated network of vendors — florists, chefs, photographers, musicians, officiants — who are used to international weddings. Where a vendor prefers Spanish, we act as the language bridge on every call, email, and contract." },
      { q: "How do payments work?", a: "You pay each vendor directly, in Euros, through their own contracts — we never sit in the middle of your money. Our own fee is billed transparently in stages: a booking fee, planning milestones, and a final balance in the month before the wedding." },
      { q: "How far in advance should we start planning?", a: "For a full wedding, 12–18 months. For an elopement, 4–6 months. Peak-season Saturdays in Ibiza, Mallorca, and Costa Brava book out fastest — often 18 months in advance." },
      { q: "Do you speak Portuguese?", a: "Yes. Portuguese is my first language and English is fluent. I work with Spanish and Catalan suppliers every week, so I act as the language bridge with the local vendor world on every call, email and contract." },
      { q: "What regions of Spain do you cover?", a: "We plan across Spain with a boutique focus on Catalonia (Barcelona, Costa Brava and the countryside beyond), the Balearics (Mallorca, Ibiza), and Andalusia (including Seville and Granada). If you are drawn to another region, tell us on the discovery call — we may still be the right team." },
      { q: "What if it rains?", a: "Rain planning is part of our planning process, not an afterthought. Every wedding we run includes a carefully thought-through weather contingency — the tent, the alternative indoor space, the timing shifts — decided calmly, months in advance. When a backup solution requires additional spend (renting a tent, reserving an indoor venue), it is built into your wedding budget from the beginning, so nothing is a surprise later. Those costs sit with you as part of the wedding investment; our role is making sure every scenario is already planned and rehearsed, so on the day itself you never make that call under pressure." },
      { q: "How do we start?", a: "The first step is a 30-minute discovery call — no pressure, no scripts. You tell us what you're picturing, we tell you honestly whether we're the right team to bring it to life in Spain." },
    ],
    closing: {
      title: "Still have questions?",
      body: "The fastest way to get honest answers is a short call. Bring anything you're weighing up — we'll tell you what we would do, and whether we should be doing it together.",
    },
  },

  contact: {
    meta: {
      title: "Contact — Book a Discovery Call | Sol Mediterraneo",
      description:
        "Book a 30-minute discovery call with Sol Mediterraneo. Honest advice, boutique planning, and a calmer path to your wedding in Spain.",
    },
    hero: {
      eyebrow: "Get in touch",
      title: "Let's have a quiet conversation.",
      body: "A 30-minute discovery call — no pressure, no scripts. You tell us what you're picturing. We tell you honestly whether we're the right people to bring it to life in Spain.",
    },
    trustTitle: "What happens next",
    trustPoints: [
      "You'll hear back from us within one business day.",
      "We'll schedule a 30-minute video call at a time that works in your zone.",
      "If we're a fit, we send a tailored planning proposal within a week.",
      "If we're not, we'll say so — and often point you to someone who is.",
    ],
    formLabels: {
      name: "Your name",
      partner: "Partner's name",
      email: "Email",
      date: "Approximate wedding date",
      region: "Region in Spain",
      guests: "Approximate guest count",
      budget: "Approximate total budget",
      message: "Anything else we should know",
      submit: "Send message",
      placeholders: { name: "Full name", partner: "Full name", email: "you@example.com", message: "The story so far, in a few lines..." },
      regionOptions: ["Not sure yet", "Barcelona", "Catalonia", "Costa Brava", "Mallorca", "Ibiza", "Andalusia", "Seville", "Granada", "Somewhere else"],
      guestOptions: ["Just the two of us", "Under 30", "30–60", "60–100", "100–150", "150+"],
      budgetOptions: ["Under €10,000", "€10,000–€30,000", "€30,000–€60,000", "€60,000–€120,000", "€120,000+", "Rather discuss on the call"],
    },
    success: {
      title: "Thank you — your message is on its way.",
      body: "We'll be in touch within one business day to schedule a discovery call. In the meantime, feel free to reply to our confirmation email with anything else you'd like us to know.",
    },
    error: {
      title: "Something went wrong sending your message.",
      body: "We couldn't send your message right now. Please try again in a moment, or email us directly at hello@solmediterraneoweddings.com and we'll get right back to you.",
    },
    directContact: { label: "Prefer email?", email: "hello@solmediterraneoweddings.com" },
  },
};

/* ---------- PORTUGUÊS ---------- */
const pt: Content = {
  brand: { name: "Sol Mediterraneo", tagline: "Weddings Co." },
  nav: {
    home: "Início",
    about: "Sobre",
    services: "Serviços",
    destination: "Casar na Espanha",
    testimonials: "Casamento Real",
    faq: "Perguntas",
    contact: "Contato",
    cta: "Agende uma conversa",
    menu: "Menu",
    close: "Fechar",
  },
  footer: {
    tagline: "Você segue com a sua vida. Nós cuidamos de tudo na Espanha.",
    columns: { explore: "Explorar", company: "A empresa", contact: "Fale com a gente" },
    based: "Baseados na Espanha. Planejamos para casais no mundo inteiro.",
    email: "hello@solmediterraneoweddings.com",
    rights: "Todos os direitos reservados.",
    legal: "Consultoria boutique em Destination Weddings.",
  },
  common: {
    bookCall: "Agende uma conversa",
    scheduleConsult: "Agendar consulta",
    learnMore: "Saiba mais",
    readMore: "Continuar lendo",
    exploreServices: "Conheça nossos serviços",
    startPlanning: "Vamos começar",
    getInTouch: "Entre em contato",
    viewAll: "Ver tudo",
    languageLabel: "Idioma",
    scrollCue: "Role para explorar",
  },
  ctaBanner: {
    eyebrow: "O próximo passo",
    title: "Vamos ter uma conversa tranquila sobre o seu casamento.",
    body: "Uma conversa de 30 minutos — sem pressão, sem roteiros. Você conta o que está imaginando, e nós dizemos, com honestidade, se somos as pessoas certas para tornar isso real na Espanha.",
    button: "Agende uma conversa",
  },

  home: {
    meta: {
      title: "Sol Mediterraneo Weddings Co. — Wedding Planner de Destination Weddings na Espanha",
      description:
        "Consultoria boutique de Wedding Planning para Destination Weddings na Espanha. Planejamos casamentos elegantes e tranquilos para casais internacionais — enquanto você segue com a sua vida, nós cuidamos de tudo aqui.",
    },
    hero: {
      eyebrow: "Destination Weddings na Espanha",
      title: "Você segue com a sua vida.\nNós cuidamos de tudo na Espanha.",
      body: "A Sol Mediterraneo é uma consultoria boutique de Wedding Planning para casais internacionais que se casam na Espanha. Especialistas locais, um único ponto de contato e um caminho mais calmo, da primeira ideia à última música.",
      primary: "Agende uma conversa",
      secondary: "Como trabalhamos",
    },
    promise: {
      eyebrow: "Nossa promessa",
      title: "Não vendemos Wedding Planning. Vendemos tranquilidade.",
      body: [
        "Planejar um casamento em outro país não deveria virar um segundo trabalho de tempo integral. Outro idioma, outros fornecedores, outras regras, outra moeda — vista de fora, cada pequena decisão pesa um pouco mais do que deveria.",
        "Somos o seu parceiro local de confiança na Espanha. Conhecemos os lugares, trabalhamos com os fornecedores há anos e falamos a sua língua. Você mantém a sua agenda. Nós mantemos tudo aqui organizado, honesto e em movimento.",
      ],
    },
    trust: [
      { label: "Um único ponto de contato" },
      { label: "Inglês e português" },
      { label: "Fornecedores locais avaliados" },
      { label: "Presentes na Espanha" },
    ],
    services: {
      eyebrow: "Como ajudamos",
      title: "Quatro formas de planejar com a gente",
      intro: "Cada casal chega em um momento diferente. Nós nos adaptamos ao seu.",
      items: [
        { name: "Wedding Planning Completo", body: "Do primeiro contato com os locais à última fatura de fornecedor. Coordenamos cada decisão, cada reunião, cada detalhe — você aproveita o processo, nós seguramos o mapa." },
        { name: "Wedding Planning Parcial", body: "Você já começou. Talvez tenha um local, uma data ou uma ideia inicial. Entramos, revisamos o que já está definido e assumimos o resto do planejamento." },
        { name: "Coordenação no Dia", body: "Você já planejou o casamento. Entramos como coordenadores locais para conduzir fornecedores, cronograma e cada detalhe no dia — para que você possa estar de fato presente." },
        { name: "Elopements & Mini-casamentos", body: "Cerimônias íntimas, de duas a trinta pessoas. Legal ou simbólica. Um penhasco sobre o mar, uma pequena capela, um terraço reservado — organizado com calma e beleza." },
      ],
    },
    process: {
      eyebrow: "Como trabalhamos",
      title: "Um caminho mais calmo até um casamento na Espanha",
      intro: "Quatro passos firmes — de uma primeira conversa ao brinde debaixo das oliveiras.",
      steps: [
        { name: "Conversa inicial", body: "Uma conversa tranquila de 30 minutos. Você conta a história até aqui — datas, número de convidados, o que está imaginando. Nós dizemos com honestidade se combinamos." },
        { name: "Proposta e design", body: "Uma proposta personalizada, uma seleção curada de locais e uma primeira direção estética construída em torno de quem vocês são — sem templates." },
        { name: "Planejamento e coordenação", body: "Reuniões regulares no seu calendário. Cuidamos dos fornecedores, contratos, idioma e logística. Você aprova as decisões que importam." },
        { name: "A semana do casamento", body: "Estamos com vocês em campo, da chegada ao brunch de despedida. Vocês são convidados no próprio casamento. É esse o ponto." },
      ],
    },
    regions: {
      eyebrow: "Onde os casais se casam",
      title: "As regiões que conhecemos de cor",
      intro: "Planejamos em toda a Espanha, com foco boutique na Catalunha e nas Ilhas Baleares.",
      items: [
        { name: "Barcelona", body: "Casamentos urbanos elegantes em palácios restaurados, rooftops privados e pátios modernistas." },
        { name: "Catalunha", body: "Vinhedos, masias, casas de campo, vistas para o mar, olivais e vilarejos encantadores. Muito além de Barcelona." },
        { name: "Costa Brava", body: "Cerimônias à beira-mar, falésias, villas mediterrâneas e vistas para o oceano." },
        { name: "Mallorca", body: "Locais de luxo à beira-mar, olivais e fincas de pedra na serra de Tramuntana." },
        { name: "Ibiza", body: "Casamentos elegantes na praia, luxo boutique e cerimônias tranquilas ao pôr do sol." },
        { name: "Andaluzia", body: "Propriedades históricas, pátios de azulejos, laranjeiras e a elegância espanhola de outro tempo." },
      ],
    },
    testimonialsSection: {
      eyebrow: "Nas palavras deles",
      title: "Um casal que confiou a Espanha à gente.",
    },
  },

  about: {
    meta: {
      title: "Sobre — Sol Mediterraneo Weddings Co.",
      description:
        "Conheça a Sol Mediterraneo — consultoria boutique de Destination Weddings na Espanha. Fundadora brasileira vivendo na Espanha, fazendo a ponte entre casais internacionais e o mundo dos fornecedores locais.",
    },
    hero: {
      eyebrow: "Sobre nós",
      title: "Seu parceiro local de confiança na Espanha.",
      body: "Planejar um casamento no exterior não deveria ser sobrecarregante. Somos o seu único ponto de contato em campo — simplificando decisões, coordenando localmente e removendo a incerteza de planejar de longe.",
    },
    story: {
      title: "Nossa história",
      body: [
        "Sou brasileira. Construí a minha vida na Espanha — e no caminho aprendi este país devagar: morando, cozinhando, discutindo sobre vinho, dirigindo por estradas secundárias no domingo.",
        "A Sol Mediterraneo nasceu de uma observação simples: casais internacionais se apaixonavam pela ideia de um casamento na Espanha e, em seguida, se afogavam em silêncio na logística de fazer isso acontecer de longe. Outro idioma, outros fornecedores, outra forma de fazer negócios.",
        "Como entendo casais internacionais e entendo o mundo dos fornecedores de casamento espanhóis e catalães, faço a ponte entre os dois de forma natural. Nada se perde na tradução — cultural nem literal.",
      ],
    },
    trust: {
      title: "Por que os casais confiam na gente",
      items: [
        { name: "A ponte entre dois mundos", body: "Brasileira de origem, baseada na Espanha. Entendo como casais internacionais pensam e entendo como os fornecedores espanhóis e catalães trabalham. Essa combinação é o ponto principal." },
        { name: "Uma equipe, do primeiro e-mail à despedida", body: "Você não será repassado para um coordenador júnior depois de assinar. Quem te conhece na primeira conversa é quem conduz a semana do casamento." },
        { name: "Trabalhamos no seu idioma", body: "Português nativo e inglês fluente. Trabalho com fornecedores espanhóis e catalães toda semana, então cada conversa com eles passa por mim — no idioma que funciona." },
        { name: "Nossos fornecedores são parceiros de longa data", body: "Trabalhamos com os mesmos floristas, chefs, fotógrafos e músicos ano após ano. Qualidade avaliada por nós — sem surpresas no dia." },
        { name: "Honestidade acima de venda", body: "Se uma decisão não faz o casamento avançar, dizemos. Se um fornecedor não combina, sugerimos outro caminho. Somos consultores antes de qualquer coisa." },
        { name: "Menos casamentos, mais cuidado", body: "Limitamos deliberadamente o número de casamentos por ano. O seu não é mais um da lista — tem a nossa atenção inteira." },
      ],
    },
    philosophy: {
      title: "Nossa filosofia de planejamento",
      body: [
        "Um casamento na Espanha deveria ter o gosto da melhor versão de um jantar longo, lento e ensolarado — com quem vocês amam, num lugar em que vão querer voltar pelo resto da vida. É para isso que planejamos.",
        "Não somos maximalistas. Não perseguimos tendências. Preferimos materiais naturais, comida honesta, luz generosa e um ritmo que permite estar de fato ali. Elegância, para nós, é o que sobra depois de tirar o ruído.",
      ],
    },
    boutique: {
      eyebrow: "Boutique por escolha",
      title: "No máximo 12 casamentos por ano.",
      lead: "Limitamos a agenda de propósito. É a decisão mais importante que tomamos.",
      body: [
        "Doze casamentos por ano é o que nos permite oferecer a cada casal atenção personalizada, disponibilidade real quando precisam de nós, organização excepcional no dia e uma relação próxima que dura muito além da última música.",
        "Significa que sabemos o nome dos seus pais. Significa que atendemos o telefone. Significa que a sua semana de casamento tem a nossa equipe inteira, não um pedaço dela.",
      ],
      stat: { number: "12", label: "casamentos por ano, no máximo" },
    },
    howWeWork: {
      title: "Como trabalhamos com você",
      steps: [
        { name: "Primeiro escutamos", body: "Antes de propor qualquer coisa, queremos entender quem vocês são — como gostam de receber, como gostam de comer, o que sempre quiseram, mesmo em silêncio." },
        { name: "Simplificamos decisões", body: "Você não vai receber quarenta opções de fornecedor para escolher. Selecionamos com rigor. Duas ou três opções pensadas, com uma recomendação honesta." },
        { name: "Cuidamos da Espanha, na Espanha", body: "Locais, licenças, traduções, degustações, blocos de hotel, transporte — a máquina local inteira é nossa." },
        { name: "Mantemos a calma quando as coisas mudam", body: "Casamentos são vivos. Fornecedores adoecem. Chove. Convidados mudam de plano. Nosso trabalho é absorver tudo isso para que vocês nem sintam." },
      ],
    },
  },

  services: {
    meta: {
      title: "Serviços — Wedding Planning na Espanha | Sol Mediterraneo",
      description:
        "Wedding Planning completo, parcial, coordenação no dia e elopements para Destination Weddings na Espanha. Descubra o nível de suporte certo para o seu casamento.",
    },
    hero: {
      eyebrow: "Serviços",
      title: "O nível certo de suporte, e nada além.",
      body: "Cada casal chega em um ponto diferente. Alguns só sabem o país. Outros já têm o local e querem apenas um caminho mais calmo até o fim. Aqui está como trabalhamos.",
    },
    intro:
      "Nossos serviços são boutique por natureza. Aceitamos no máximo doze casamentos por ano para que cada casal tenha a atenção total da mesma equipe, do primeiro e-mail à despedida.",
    items: [
      {
        name: "Wedding Planning Completo",
        tagline: "Início ao fim, tudo incluído.",
        body: "Para casais que querem chegar à Espanha e simplesmente estar presentes. Da busca por locais à última fatura, conduzimos todo o processo, no seu fuso.",
        includes: [
          "Descoberta, briefing e proposta de Wedding Planning sob medida",
          "Seleção curada de locais e visitas (presenciais ou por vídeo)",
          "Direção de design completa e painéis de referência",
          "Seleção, negociação e contratos com fornecedores",
          "Coordenação da cerimônia legal ou simbólica",
          "Logística de convidados, bloqueios de hotel e transporte",
          "Cronograma de produção detalhado",
          "Coordenação total em campo durante a semana do casamento",
        ],
        idealFor: "Casais no exterior que querem um único parceiro de confiança na Espanha.",
      },
      {
        name: "Wedding Planning Parcial",
        tagline: "Você começou. Nós assumimos daqui.",
        body: "Para casais que já iniciaram — talvez um local, uma data ou uma lista de fornecedores — e querem um parceiro local para revisar, refinar e conduzir o restante do planejamento até o fim.",
        includes: [
          "Auditoria completa de tudo o que já foi contratado",
          "Análise de lacunas e recomendações",
          "Refinamento e coesão do design",
          "Revisão de contratos e orçamento",
          "Cronograma de produção e roteiro do dia",
          "Coordenação em campo na semana do casamento",
        ],
        idealFor: "Casais que começaram sozinhos e querem a semana do casamento nas mãos de alguém local.",
      },
      {
        name: "Coordenação no Dia",
        tagline: "Você planejou. Nós conduzimos.",
        body: "Para casais que planejaram o próprio casamento, mas querem um coordenador local experiente para conduzir fornecedores, cronograma e cada detalhe no dia — para que possam de fato estar presentes.",
        includes: [
          "Reunião de transição para absorver tudo o que vocês construíram",
          "Confirmação com fornecedores e ponto de contato único nas semanas finais",
          "Roteiro detalhado do dia, minuto a minuto",
          "Coordenação em campo, da montagem à despedida",
          "Condução da cerimônia e do fluxo da recepção",
          "Resolução discreta de imprevistos durante o dia",
        ],
        idealFor: "Casais que já planejaram o casamento sozinhos e querem o dia conduzido por um profissional em campo.",
      },
      {
        name: "Elopements & Mini-casamentos",
        tagline: "Cerimônias íntimas, até 30 convidados.",
        body: "Um penhasco sobre o Mediterrâneo. Uma capela de pedra acima do olival. Um terraço reservado com as dez pessoas que mais importam. Tranquilo, bonito e cuidadosamente arranjado.",
        includes: [
          "Curadoria de locais e licenças",
          "Coordenação da cerimônia legal ou simbólica",
          "Celebrante, fotógrafo, florista, cabelo e maquiagem",
          "Jantar íntimo em restaurante ou villa privada",
          "Recomendações de transporte e hospedagem",
          "Coordenação no dia",
        ],
        idealFor: "Casais que querem o dia em si pequeno, lento e inesquecível.",
      },
    ],
    concierge: {
      title: "Concierge para Convidados",
      body: "Para cada casal com quem planejamos, estendemos o cuidado além da cerimônia — porque os seus convidados também estão viajando. Está incluído em todos os pacotes.",
      items: [
        "Blocos curados de hospedagem em hotéis boutique",
        "Kits de boas-vindas e recomendações locais",
        "Design do jantar de ensaio e do brunch de despedida",
        "Passeios para convidados — velejar, degustações, visitas culturais",
        "Transfers de aeroporto e transporte em campo",
      ],
    },
    pricing: {
      eyebrow: "Investimento",
      title: "Orçamento de casamento é uma conversa, não uma tabela de preços.",
      intro:
        "Não existe preço fixo para um casamento na Espanha. O investimento depende do número de convidados, da região, do local, da temporada, do nível de luxo e da logística da semana. O que podemos compartilhar são faixas de referência honestas, tiradas dos casamentos que planejamos.",
      tiers: [
        { label: "Elopements", range: "€3.000 – €9.000+", note: "De dois a poucos convidados. Local, celebrante, um jantar pequeno." },
        { label: "Casamentos com cerca de 30 convidados", range: "€20.000 – €45.000+", note: "Mini-casamentos íntimos em uma villa boutique ou restaurante." },
        { label: "Casamentos de 30 a 100 convidados", range: "€35.000 – €120.000+", note: "Casamentos completos ao longo de um fim de semana, com a experiência dos convidados construída em volta." },
      ],
      disclaimer:
        "Estas são faixas de referência apenas, não valores fixos. Cada casamento é único, e cada proposta é feita sob medida para as suas prioridades, número de convidados, local, temporada e visão geral.",
      flexibility:
        "Ficamos felizes em desenhar junto com vocês uma celebração alinhada ao investimento disponível, sem abrir mão da qualidade, da organização e da experiência em que acreditamos. Qualquer que seja o valor, planejamos com honestidade em torno dele.",
      venueNote:
        "Os locais em particular variam muito com temporada, duração e número de convidados. O mesmo local pode custar €7.000 em baixa temporada e €21.000 num sábado de alta temporada. Ajudamos a escolher a época e o formato que oferecem o máximo de casamento pelo seu investimento.",
    },
  },

  destination: {
    meta: {
      title: "Casar na Espanha — O Guia Completo de Destination Weddings | Sol Mediterraneo",
      description:
        "Tudo o que casais internacionais precisam saber para planejar um Destination Wedding na Espanha: requisitos legais, custos, regiões, cronograma e erros a evitar.",
    },
    hero: {
      eyebrow: "Guia completo",
      title: "Destination Weddings na Espanha.",
      body: "Um guia calmo e honesto para casais internacionais que planejam se casar na Espanha de longe. O que esperar, o que evitar e por que este país vale a viagem.",
    },
    sections: [
      {
        id: "why-spain",
        title: "Por que se casar na Espanha",
        body: [
          "A Espanha é um dos destinos mais recompensadores da Europa para um Destination Wedding. Oferece a luz mediterrânea, uma cultura ao ar livre construída em torno de refeições longas, gastronomia e vinhos de nível mundial e uma infraestrutura de villas boutique, propriedades históricas e hotéis prontos para receber casamentos internacionais.",
          "Para casais que voam do Brasil, dos Estados Unidos, do Reino Unido, do Canadá, da Austrália ou de qualquer parte da Europa, a Espanha também oferece algo menos óbvio: um calor de hospitalidade que faz a semana inteira parecer o casamento — não só a cerimônia.",
        ],
      },
      {
        id: "legal-requirements",
        title: "Requisitos legais para estrangeiros",
        body: [
          "Casais estrangeiros podem se casar legalmente na Espanha, mas os requisitos variam conforme a residência, a nacionalidade e a religião. Na prática, a maior parte dos casais internacionais escolhe um destes dois caminhos:",
        ],
        list: [
          "Cerimônia legal no país de origem + cerimônia simbólica na Espanha — a escolha mais comum. Os casais se casam legalmente em casa (uma rápida visita ao cartório) e realizam a cerimônia simbólica completa na Espanha. Isso garante liberdade total de local, horário e celebrante.",
          "Cerimônia legal completa na Espanha — possível, mas burocrática para não residentes. Exige traduções juramentadas, apostilas, atestados médicos em algumas regiões e residência de pelo menos um dos noivos na maior parte das comunidades autônomas.",
        ],
      },
      {
        id: "civil-vs-symbolic",
        title: "Cerimônia civil vs simbólica",
        body: [
          "A cerimônia civil é a versão legalmente reconhecida — a burocracia, o cartório, as assinaturas que tornam o casamento oficial para o Estado. Na Espanha, para não residentes, uma cerimônia civil é administrativamente pesada: traduções juramentadas, apostilas, em algumas regiões atestados médicos, e exigências de residência que variam por comunidade autônoma. Precisa acontecer onde a papelada permite, no dia em que o cartório permite, no idioma em que o cartório fala.",
          "A cerimônia simbólica carrega a mesma emoção e o mesmo significado — votos, alianças, leituras, um celebrante à sua escolha, os amigos emocionados — sem a máquina legal. Pode acontecer em qualquer lugar: um penhasco sobre o mar, um jardim, uma capela de pedra, um rooftop, um olival. Pode ser no seu idioma. Pode ser no dia e na hora exatos que vocês quiserem. Sem cartório. Sem fila de espera.",
          "Para casais internacionais, a cerimônia simbólica é quase sempre a escolha mais simples e mais bonita. A grande maioria dos casais que atendemos — bem mais de noventa por cento — se casa legalmente numa rápida visita ao cartório de casa (muitas vezes meses antes, às vezes na semana anterior) e viaja para a Espanha para o casamento que de fato parece casamento. Liberdade total sobre local, horário, celebrante e formato — e zero risco de um detalhe burocrático reescrever o dia.",
          "Em qualquer um dos caminhos, coordenamos a documentação, o celebrante e o fluxo da cerimônia para que o dia em si flua sem esforço.",
        ],
      },
      {
        id: "costs",
        title: "Quanto custa um casamento na Espanha",
        body: [
          "Não existe preço fixo para um casamento na Espanha — o investimento depende de número de convidados, região, local, temporada, nível de luxo e logística. O que podemos compartilhar são faixas de referência honestas. São faixas, não orçamentos.",
        ],
        list: [
          "Elopements — em geral entre €3.000 e €9.000+",
          "Casamentos com cerca de 30 convidados — em geral entre €20.000 e €45.000+",
          "Casamentos de 30 a 100 convidados — em geral entre €35.000 e €120.000+",
          "O local por si só varia bastante com a temporada: o mesmo local pode custar €7.000 na baixa e €21.000 na alta temporada",
        ],
      },
      {
        id: "regions",
        title: "As melhores regiões da Espanha para casar",
        body: ["Atendemos o país inteiro com foco boutique nas regiões abaixo."],
      },
      {
        id: "timeline",
        title: "Um cronograma realista de planejamento",
        body: [
          "Para casais planejando de longe, recomendamos 12 a 18 meses de antecedência para um casamento completo e 4 a 6 meses para um elopement. Fins de semana de alta temporada (junho, julho, setembro) em Ibiza, Mallorca e Costa Brava esgotam primeiro — muitas vezes 18 meses antes.",
        ],
      },
      {
        id: "common-mistakes",
        title: "Erros comuns dos casais",
        body: ["Os cinco erros que mais vemos casais cometerem ao planejar de longe — e como evitá-los:"],
      },
      {
        id: "why-local",
        title: "Por que contratar um Wedding Planner local na Espanha",
        body: [
          "A distância é o verdadeiro custo de um Destination Wedding. Um Wedding Planner local não é luxo — é o mecanismo que impede a distância de virar estresse. Fornecedores respondem mais rápido a um número local. Contratos leem diferente em espanhol. Visitas técnicas acontecem nesta terça, e não no seu próximo voo.",
          "Você poderia planejar um casamento na Espanha de longe. Em tese, a maior parte dos casais que conhecemos poderia. Poucos aproveitam.",
        ],
      },
    ],
    regions: [
      { key: "barcelona", name: "Barcelona", body: "Palácios restaurados, pátios modernistas e cerimônias em rooftops com o Mediterrâneo no horizonte. Ideal para casais que querem um casamento com espírito de cidade." },
      { key: "catalonia", name: "Catalunha (além de Barcelona)", body: "A Catalunha é muito mais do que sua capital. No interior: vinhedos do Penedès e Priorat, masias históricas e casas de campo cercadas de colinas. No litoral: vistas para o mar, villas em falésias e paisagens mediterrâneas. Em todo lugar: olivais, vilarejos de pedra e propriedades boutique que parecem ter esperado por vocês. Alguns dos nossos casamentos favoritos acontecem aqui." },
      { key: "costa-brava", name: "Costa Brava", body: "Villas em falésias, capelas caiadas e enseadas de pinheiros a uma hora de Barcelona. O litoral mais cinematográfico da Catalunha." },
      { key: "mallorca", name: "Mallorca", body: "Fincas de pedra na serra de Tramuntana, cerimônias entre oliveiras e hotéis boutique à beira-mar. Discreta, refinada e cada vez mais requisitada." },
      { key: "ibiza", name: "Ibiza", body: "Fincas rurais brancas, jantares à luz de velas sob os pinheiros e noites longas e quentes. Para casais que querem a beleza de Ibiza sem o clima de balada." },
      { key: "andalusia", name: "Andaluzia", body: "Haciendas nas colinas, pátios de azulejos, laranjeiras e a elegância espanhola de outro tempo. Mais lenta, mais quente e cheia de caráter." },
      { key: "seville", name: "Sevilha", body: "A alma da Andaluzia. Palácios com azulejos, pátios de laranjeiras e uma cidade que celebra até o amanhecer. Ideal para casamentos que querem calor, cultura flamenca e uma noite genuinamente espanhola." },
      { key: "granada", name: "Granada", body: "A Alhambra no horizonte, cármenes com vistas para o jardim e um ritmo mais lento e íntimo. Escolha romântica para casais atraídos por história e beleza silenciosa." },
    ],
    mistakes: {
      title: "Cinco erros a evitar",
      items: [
        "Reservar um local antes de entender a experiência do convidado ao redor — hotéis, transporte e a cidade próxima importam tanto quanto o local em si.",
        "Presumir que os fornecedores falarão inglês fluente em toda região. Muitos dos melhores não falam, e a tradução acaba virando, em silêncio, o seu trabalho.",
        "Subestimar a logística dos convidados: bloqueios de quartos, transfers, jantares de boas-vindas e brunches de despedida exigem coordenação real.",
        "Assinar contratos traduzidos por ferramentas online. Contratos de casamento em espanhol têm particularidades — depósitos, janelas de cancelamento, força maior — que soam muito diferentes no original.",
        "Querer ver tudo em uma única viagem curta. Visitas técnicas funcionam quando são focadas, planejadas e traduzidas em tempo real.",
      ],
    },
    closing: {
      title: "O próximo passo é uma conversa.",
      body: "Se você está pensando seriamente em Espanha, agende uma conversa. Trinta minutos, sem pressão, com respostas honestas para o que estiver pesando na balança.",
    },
  },

  testimonials: {
    meta: {
      title: "Casamento Real na Espanha — Estudo de Caso | Sol Mediterraneo",
      description:
        "Um olhar detalhado sobre um dos casamentos internacionais que planejamos na Espanha — o casal, o lugar, o processo de planejamento e o que fez tudo parecer sem esforço.",
    },
    hero: {
      eyebrow: "Um casamento real",
      title: "Um casamento, contado como merece.",
      body: "Ficamos pequenos de propósito. No lugar de uma parede de citações, um olhar cuidadoso sobre um dos casamentos que planejamos — o casal, o lugar e o que foi preciso para tudo parecer natural.",
    },
    items: [
      {
        quote: "Moramos em São Paulo. Nunca tínhamos ido à Costa Brava. Desde a primeira conversa, senti que finalmente tínhamos alguém do nosso lado na Espanha. Tudo — literalmente tudo — foi resolvido.",
        couple: "Beatriz & Rafael",
        origin: "São Paulo, Brasil",
        region: "Costa Brava",
      },
    ],
    caseStudy: {
      eyebrow: "Estudo de caso",
      title: "Beatriz & Rafael, um casamento na Costa Brava.",
      couple: "Beatriz & Rafael",
      location: "Uma villa privada sobre a Costa Brava, Catalunha",
      dateLabel: "Fim de setembro — golden hour a cada hora",
      story: [
        "Beatriz e Rafael moram em São Paulo. Nunca tinham ido à Costa Brava. O que eles tinham era uma imagem na cabeça — uma mesa longa de jantar, um penhasco, o Mediterrâneo em algum lugar do quadro, e quarenta pessoas com quem realmente queriam passar um fim de semana.",
        "Começamos o planejamento nove meses antes, inteiramente por vídeo. Juntos selecionamos três locais no litoral, organizamos uma viagem de dois dias quando eles vieram na primavera, e fechamos a villa em uma tarde. Dali em diante, o resto do planejamento aconteceu em reuniões semanais no fuso deles.",
        "O casamento em si se desdobrou em três dias: um jantar de boas-vindas num pequeno vilarejo de pescadores, uma cerimônia simbólica ao pôr do sol no terraço da villa, um longo jantar debaixo das oliveiras, e um brunch de despedida à beira da piscina na manhã seguinte. Nada corrido. Nada faltando.",
      ],
      highlightsTitle: "Destaques do planejamento",
      highlights: [
        "Nove meses de planejamento remoto, com reuniões semanais por vídeo",
        "Uma viagem de dois dias visitando três locais pré-selecionados",
        "Cerimônia simbólica coordenada localmente; cerimônia legal no Brasil",
        "Equipe curada de fornecedores: florista, chef, fotógrafo, DJ, celebrante",
        "Experiência de três dias — jantar de boas-vindas, casamento, brunch",
        "Coordenação total em campo durante toda a semana do casamento",
      ],
      galleryEyebrow: "O casamento, em imagens",
      galleryTitle: "Um olhar mais próximo.",
      galleryNote: "Galeria completa em breve. As fotografias do casamento de Beatriz e Rafael estão sendo finalizadas pelo fotógrafo e substituirão os placeholders abaixo.",
    },
  },

  faq: {
    meta: {
      title: "Perguntas Frequentes — Wedding Planning na Espanha | Sol Mediterraneo",
      description:
        "Respostas para as perguntas mais comuns de casais internacionais planejando um casamento na Espanha: requisitos legais, custos, viagens, idioma e pagamentos.",
    },
    hero: {
      eyebrow: "Perguntas frequentes",
      title: "As dúvidas que os casais nos trazem primeiro.",
      body: "Se você está planejando de longe, provavelmente tem as mesmas perguntas que ouvimos toda semana. Aqui estão respostas honestas e atualizadas.",
    },
    items: [
      { q: "Estrangeiros podem se casar legalmente na Espanha?", a: "Sim. Casais não residentes podem se casar legalmente na Espanha, mas a documentação e os requisitos variam conforme a comunidade autônoma e a religião. A maior parte dos casais internacionais com quem trabalhamos opta por se casar legalmente no país de origem e fazer uma cerimônia simbólica na Espanha — isso garante liberdade total de local e horário, sem exigências de residência e tradução. Coordenamos os dois caminhos." },
      { q: "Quanto custa um casamento na Espanha?", a: "Não existe preço fixo — depende do número de convidados, da região, do local, da temporada, do nível de luxo e da logística. Como faixas de referência: elopements em geral €3.000–€9.000+, casamentos com cerca de 30 convidados €20.000–€45.000+, e casamentos de 30 a 100 convidados €35.000–€120.000+. Cada proposta é feita sob medida, e ficamos felizes em planejar dentro do investimento disponível." },
      { q: "Quantas vezes precisamos viajar à Espanha?", a: "A maior parte dos nossos casais viaja uma ou duas vezes antes da semana do casamento — uma primeira visita para conhecer locais e uma segunda mais perto da data para degustações e decisões finais. Fazemos videochamadas para o resto, para que nada dependa da sua presença aqui." },
      { q: "Vocês ajudam com a hospedagem dos convidados?", a: "Sim. A logística dos convidados está inclusa em todos os pacotes — bloqueios de hotel, kits de boas-vindas, transporte, jantares de ensaio e brunches de despedida. Seus convidados se sentem acolhidos desde o momento em que pousam." },
      { q: "Vocês trabalham com fornecedores que falam inglês?", a: "Trabalhamos com uma rede curada de fornecedores — floristas, chefs, fotógrafos, músicos, celebrantes — acostumados a casamentos internacionais. Quando algum prefere o espanhol, servimos de ponte em cada e-mail, ligação e contrato." },
      { q: "Como funcionam os pagamentos?", a: "Você paga cada fornecedor diretamente, em euros, pelos contratos deles — nunca entramos no meio do seu dinheiro. Nossos honorários são cobrados de forma transparente, em etapas: taxa inicial, marcos de planejamento e saldo final no mês anterior ao casamento." },
      { q: "Com quanta antecedência devemos começar a planejar?", a: "Para um casamento completo, 12 a 18 meses. Para um elopement, 4 a 6 meses. Sábados de alta temporada em Ibiza, Mallorca e Costa Brava esgotam mais rápido — muitas vezes 18 meses antes." },
      { q: "Vocês falam português?", a: "Sim. Português é a minha primeira língua e o inglês é fluente. Trabalho com fornecedores espanhóis e catalães toda semana, então faço a ponte com o mundo dos fornecedores locais em cada ligação, e-mail e contrato." },
      { q: "Que regiões da Espanha vocês atendem?", a: "Planejamos em toda a Espanha, com foco boutique em Catalunha (Barcelona, Costa Brava e o interior além dela), Ilhas Baleares (Mallorca, Ibiza) e Andaluzia (incluindo Sevilha e Granada). Se você tem outra região em mente, conte na conversa — pode ser que ainda sejamos a equipe certa." },
      { q: "E se chover?", a: "O planejamento de chuva faz parte do nosso processo de planejamento, não é um detalhe deixado para depois. Cada casamento que organizamos inclui uma contingência climática cuidadosamente pensada — a tenda, o espaço interno alternativo, os ajustes de horário — decidida com calma, meses antes. Quando a solução de backup exige um custo adicional (alugar uma tenda, reservar um espaço interno), esse custo é incluído no orçamento do casamento desde o início, para que nada seja surpresa depois. Esses custos ficam com vocês como parte do investimento do casamento; o nosso papel é garantir que cada cenário já esteja planejado e ensaiado, para que no dia vocês nunca precisem tomar essa decisão sob pressão." },
      { q: "Como começamos?", a: "O primeiro passo é uma conversa de 30 minutos — sem pressão, sem roteiros. Você conta o que está imaginando, e nós dizemos com honestidade se somos a equipe certa para tornar isso real na Espanha." },
    ],
    closing: {
      title: "Ainda tem perguntas?",
      body: "O caminho mais rápido para respostas honestas é uma conversa curta. Traga o que estiver pesando — dizemos o que faríamos e se deveríamos estar fazendo juntos.",
    },
  },

  contact: {
    meta: {
      title: "Contato — Agende uma Conversa | Sol Mediterraneo",
      description:
        "Agende uma conversa de 30 minutos com a Sol Mediterraneo. Conselhos honestos, Wedding Planning boutique e um caminho mais calmo até o seu casamento na Espanha.",
    },
    hero: {
      eyebrow: "Fale com a gente",
      title: "Vamos ter uma conversa tranquila.",
      body: "Uma conversa de 30 minutos — sem pressão, sem roteiros. Você conta o que está imaginando. Nós dizemos, com honestidade, se somos as pessoas certas para tornar isso real na Espanha.",
    },
    trustTitle: "O que acontece a seguir",
    trustPoints: [
      "Retornamos em até um dia útil.",
      "Agendamos uma videochamada de 30 minutos no seu fuso.",
      "Se combinarmos, enviamos uma proposta personalizada em até uma semana.",
      "Se não combinarmos, dizemos — e muitas vezes indicamos alguém melhor para você.",
    ],
    formLabels: {
      name: "Seu nome",
      partner: "Nome do parceiro(a)",
      email: "E-mail",
      date: "Data aproximada do casamento",
      region: "Região na Espanha",
      guests: "Número aproximado de convidados",
      budget: "Orçamento total aproximado",
      message: "Algo mais que devemos saber",
      submit: "Enviar mensagem",
      placeholders: { name: "Nome completo", partner: "Nome completo", email: "voce@exemplo.com", message: "A história até aqui, em poucas linhas..." },
      regionOptions: ["Ainda não sei", "Barcelona", "Catalunha", "Costa Brava", "Mallorca", "Ibiza", "Andaluzia", "Sevilha", "Granada", "Outro lugar"],
      guestOptions: ["Só nós dois", "Menos de 30", "30–60", "60–100", "100–150", "150+"],
      budgetOptions: ["Menos de €10.000", "€10.000–€30.000", "€30.000–€60.000", "€60.000–€120.000", "€120.000+", "Prefiro discutir na conversa"],
    },
    success: {
      title: "Obrigado — sua mensagem está a caminho.",
      body: "Entraremos em contato em até um dia útil para agendar uma conversa. Enquanto isso, sinta-se à vontade para responder ao nosso e-mail de confirmação com qualquer outra coisa que quiser nos contar.",
    },
    error: {
      title: "Algo deu errado ao enviar sua mensagem.",
      body: "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes ou escreva diretamente para hello@solmediterraneoweddings.com que retornaremos o quanto antes.",
    },
    directContact: { label: "Prefere e-mail?", email: "hello@solmediterraneoweddings.com" },
  },
};

const dict = { en, pt } as const;

export function useContent(lang: Lang): Content {
  return dict[lang];
}

export function getContent(lang: Lang): Content {
  return dict[lang];
}
