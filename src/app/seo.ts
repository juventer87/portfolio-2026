/*
  Centralized SEO configuration. Set NEXT_PUBLIC_SITE_URL in the deploy
  environment to your production origin; the fallback is only for local builds.
*/
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mohammedvaseeuddin.com"
).replace(/\/$/, "");

export const SITE_NAME = "Mohammed Vaseeuddin";

export const SITE_TITLE =
  "Mohammed Vaseeuddin · Brand & GTM Strategy, GCC & MENA";

export const SITE_DESCRIPTION =
  "Solo brand and go-to-market strategist for enterprise industrial, media-facade, and LED display businesses across the GCC, MENA, and India. 22 brand systems and 11 market-entry studies, authored end to end by one person.";

// Premium B2B discoverability. Lives in <head>, never in the visible header.
export const SITE_KEYWORDS = [
  "B2B brand strategy",
  "go-to-market strategy",
  "GCC market entry",
  "MENA market entry strategy",
  "enterprise industrial branding",
  "media facade strategy",
  "outdoor LED display marketing",
  "LED display technology go-to-market",
  "construction materials marketing",
  "industrial product launch",
  "regional GTM consultant",
  "brand positioning and naming",
  "Mohammed Vaseeuddin",
];
