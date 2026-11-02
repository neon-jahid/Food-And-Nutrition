import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { PLANTS } from "./src/data/plants.js";
import { POSTS } from "./src/data/blog.js";
import { siteConfig } from "./scripts/env.mjs";

// Read .env with the same (BOM-safe, validated) reader as the sitemap script and hand the
// cleaned values to Vite — existing process.env values take priority over Vite's own .env parsing.
const mode = process.argv.includes("dev") ? "development" : "production";
const { siteUrl, contactEmail } = siteConfig(mode);
if (siteUrl) process.env.VITE_SITE_URL = siteUrl;
if (contactEmail) process.env.VITE_CONTACT_EMAIL = contactEmail;

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  // counts shown in the hero, computed here so the home page doesn't download the plant and blog data
  define: {
    __PLANT_COUNT__: JSON.stringify(PLANTS.length),
    __POST_COUNT__: JSON.stringify(POSTS.length),
  },
});
