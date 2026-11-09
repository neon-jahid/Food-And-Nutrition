/*
 * Next.js with static export: every public page in both languages is written to out/ as plain
 * files (no server needed), and hosts serve them the same way as any static site.
 * Redirects and the 404 page are host-level: see scripts/vercel-config.mjs and scripts/postbuild.mjs.
 */
import { PLANTS } from "./src/data/plants.js";
import { POSTS } from "./src/data/blog.js";
import { readEnv, siteConfig } from "./scripts/env.mjs";

// Read .env with the same (BOM-safe, validated) reader as the sitemap script, so they always agree.
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const { siteUrl, contactEmail } = siteConfig(mode);

export default {
  output: "export",
  trailingSlash: false,
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl || "",
    NEXT_PUBLIC_CONTACT_EMAIL: contactEmail || "",
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: readEnv(mode).VITE_GOOGLE_SITE_VERIFICATION || process.env.VITE_GOOGLE_SITE_VERIFICATION || "",
    // counts shown in the hero, set here so the home page doesn't download the plant and blog data
    NEXT_PUBLIC_PLANT_COUNT: String(PLANTS.length),
    NEXT_PUBLIC_POST_COUNT: String(POSTS.length),
  },
};
