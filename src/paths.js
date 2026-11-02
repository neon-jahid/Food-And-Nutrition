/*
 * Single source of truth for public URLs.
 * Pure ESM (no JSX, no browser APIs) — imported by the app, react-router.config.js and build scripts.
 *
 * All public pages live under a language prefix: /en/... and /bn/...
 * Paths below are written WITHOUT the prefix.
 */
import { CATEGORIES, FOODS } from "./data/foods.js";
import { POSTS } from "./data/blog.js";
import { PLANTS } from "./data/plants.js";

export const LANGS = ["en", "bn"];
export const DEFAULT_LANG = "en";

/** Category id → URL slug (/foods/<slug>). */
export const CATEGORY_SLUGS = {
  fruits: "fruits",
  vegetables: "vegetables",
  grains: "grains",
  pulses: "legumes-beans",
  fish: "fish-seafood",
  meat: "meat-poultry",
  dairy: "dairy-eggs",
  nuts: "nuts-seeds",
  spices: "herbs-spices",
  beverages: "beverages",
  dishes: "bangladeshi-foods",
};
export const CATEGORY_BY_SLUG = Object.fromEntries(Object.entries(CATEGORY_SLUGS).map(([id, slug]) => [slug, id]));

/** Food URL slug. Kept equal to the existing food id so links and saved data stay valid. */
export const foodSlug = food => food.id;

/** Static pages (no params). */
export const STATIC_PATHS = [
  "/",
  "/foods",
  "/tools",
  "/learn",
  "/plants",
  "/food-guide",
  "/food-guide/food-storage",
  "/food-guide/meal-times",
  "/nutrition/vitamins",
  "/nutrition/minerals",
  "/nutrition/deficiency",
  "/food-myths",
  "/mens-health",
  "/womens-health",
  "/pregnancy",
  "/coffee",
  "/anti-aging",
  "/blog",
  "/about",
  "/contact",
  "/editorial-policy",
  "/references",
  "/privacy-policy",
  "/terms",
  "/medical-disclaimer",
];

/** Every public path (unprefixed). */
export function allPublicPaths() {
  return [
    ...STATIC_PATHS,
    ...CATEGORIES.map(c => `/foods/${CATEGORY_SLUGS[c.id]}`),
    ...FOODS.map(f => `/foods/${foodSlug(f)}`),
    ...PLANTS.map(p => `/plants/${p.id}`),
    ...POSTS.map(p => `/blog/${p.slug}`),
  ];
}

/** "/foods" → "/en/foods"; "/" → "/en". */
export const withLang = (lang, path) => (path === "/" ? `/${lang}` : `/${lang}${path}`);

/** Strip a leading /en or /bn. */
export function stripLang(pathname) {
  const m = pathname.match(/^\/(en|bn)(?=\/|$)/);
  return m ? pathname.slice(m[0].length) || "/" : pathname;
}

/**
 * Old (pre-2026-11) URLs → new unprefixed paths. Used by in-app redirect routes and
 * by the generated host redirect file. Patterns use :param placeholders.
 */
export const LEGACY_REDIRECTS = [
  ["/food/:id", "/foods/:id"],
  ["/foods", "/foods"],
  ["/tools", "/tools"],
  ["/guide", "/food-guide"],
  ["/learn", "/learn"],
  ["/plants", "/plants"],
  ["/storage", "/food-guide/food-storage"],
  ["/meals", "/food-guide/meal-times"],
  ["/vitamins", "/nutrition/vitamins"],
  ["/minerals", "/nutrition/minerals"],
  ["/deficiency", "/nutrition/deficiency"],
  ["/myths", "/food-myths"],
  ["/mens-health", "/mens-health"],
  ["/womens-health", "/womens-health"],
  ["/blog", "/blog"],
  ["/blog/:slug", "/blog/:slug"],
];

/** Same old paths, but already moved inside the /:lang tree (e.g. /en/storage). */
export const MOVED_PATHS = {
  "/guide": "/food-guide",
  "/storage": "/food-guide/food-storage",
  "/meals": "/food-guide/meal-times",
  "/vitamins": "/nutrition/vitamins",
  "/minerals": "/nutrition/minerals",
  "/deficiency": "/nutrition/deficiency",
  "/myths": "/food-myths",
};
