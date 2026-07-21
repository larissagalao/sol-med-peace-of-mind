// Central site configuration — swap the hero image or Google Calendar URL
// here without touching component code.
import heroDefault from "@/assets/hero-villa.jpg";

export const SITE_CONFIG = {
  // Canonical production origin, NO trailing slash. Used to build absolute
  // URLs for canonical/og/hreflang tags and the sitemap.
  url: "https://www.solmediterraneoweddings.com",
  // Default Open Graph / Twitter share image (relative path served from
  // public/). Made absolute with SITE_CONFIG.url where needed.
  ogImagePath: "/og-image.jpg",
  // Public-facing contact email used across the site and structured data.
  contactEmail: "hello@solmediterraneoweddings.com",
  // Google Calendar booking link used by every "Book a Discovery Call" CTA.
  discoveryCallUrl: "https://calendar.app.google/mC9za9NbVJc1cZVu6",
  // Default hero image for the home page. Swap this constant to change the
  // hero background across the site without any layout change.
  heroImage: heroDefault,
  // Google Analytics measurement id.
  gaMeasurementId: "G-8BDDE8ZMJ0",
  // Instagram profile.
  instagramHandle: "@solmediterraneo.weddings",
  instagramUrl: "https://www.instagram.com/solmediterraneo.weddings",
  // WhatsApp contact.
  // WhatsApp contact. The URL includes a pre-filled message so a tap opens
  // the chat with the greeting already typed.
  whatsappNumber: "+34 615 589 115",
  whatsappUrl:
    "https://wa.me/34615589115?text=" +
    encodeURIComponent(
      "Hi Sol Mediterraneo! I'd love to learn more about planning our wedding in Spain.",
    ),

