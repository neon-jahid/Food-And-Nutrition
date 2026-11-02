/*
 * Site identity and deploy-time configuration.
 *
 * Set these in a `.env` file (see docs/DEVELOPMENT_PROGRESS.md):
 *   VITE_SITE_URL=https://your-domain.com      ← REQUIRED for correct canonical / sitemap / Open Graph URLs
 *   VITE_CONTACT_EMAIL=hello@your-domain.com   ← optional; shown on /contact when set
 */
export const SITE_URL = (import.meta.env?.VITE_SITE_URL || "https://food-and-nutrition.example").replace(/\/$/, "");
export const SITE_URL_CONFIGURED = Boolean(import.meta.env?.VITE_SITE_URL);
export const CONTACT_EMAIL = import.meta.env?.VITE_CONTACT_EMAIL || "";

export const SITE = {
  name: { en: "Food & Nutrition", bn: "খাবার ও পুষ্টি" },
  tagline: { en: "Know Your Food. Understand Your Nutrition.", bn: "খাবার চিনুন, পুষ্টি বুঝুন।" },
  description: {
    en: "A smarter way to explore food, nutrition, healthy eating and everyday wellness.",
    bn: "খাবার, পুষ্টি, স্বাস্থ্যকর খাওয়া ও প্রতিদিনের সুস্থতা জানার একটি সহজ ও বুদ্ধিদীপ্ত উপায়।",
  },
  ogImage: "/og-image.png",
};
