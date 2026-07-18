// Central site configuration — swap the hero image or Google Calendar URL
// here without touching component code.
import heroDefault from "@/assets/hero-villa.jpg";

export const SITE_CONFIG = {
  // Google Calendar booking link used by every "Book a Discovery Call" CTA.
  discoveryCallUrl: "https://calendar.app.google/mC9za9NbVJc1cZVu6",
  // Default hero image for the home page. Swap this constant to change the
  // hero background across the site without any layout change.
  heroImage: heroDefault,
  // Google Analytics measurement id.
  gaMeasurementId: "G-8BDDE8ZMJ0",
} as const;
