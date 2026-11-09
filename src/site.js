/*
 * Site identity and deploy-time configuration.
 *
 * Set these in a `.env` file (see docs/DEVELOPMENT_PROGRESS.md):
 *   VITE_SITE_URL=https://your-domain.com      ← REQUIRED for correct canonical / sitemap / Open Graph URLs
 *   VITE_CONTACT_EMAIL=hello@your-domain.com   ← optional; shown on /contact when set
 *   VITE_GOOGLE_SITE_VERIFICATION=abc123       ← optional; proves site ownership to Google Search Console
 */
// next.config.mjs reads the VITE_* settings above and passes them on as NEXT_PUBLIC_*
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://food-and-nutrition.example").replace(/\/$/, "");
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";
/** Google Tag Manager container; the Google Analytics setup itself lives in that container. */
export const GTM_ID = "GTM-NHXRSKMF";

export const SITE = {
  name: { en: "Food & Nutrition", bn: "খাবার ও পুষ্টি" },
  tagline: { en: "Know Your Food. Understand Your Nutrition.", bn: "খাবার চিনুন, পুষ্টি বুঝুন।" },
  description: {
    en: "A smarter way to explore food, nutrition, healthy eating and everyday wellness.",
    bn: "খাবার, পুষ্টি, স্বাস্থ্যকর খাওয়া ও প্রতিদিনের সুস্থতা জানার একটি সহজ ও বুদ্ধিদীপ্ত উপায়।",
  },
  ogImage: "/og-image.png",
  logo: "/favicon.svg",
};
