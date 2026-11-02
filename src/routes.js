import { index, route } from "@react-router/dev/routes";
import { LEGACY_REDIRECTS } from "./paths.js";

const LEGAL_PAGES = ["about", "contact", "editorial-policy", "privacy-policy", "terms", "medical-disclaimer"];

export default [
  index("routes/entry.jsx"),

  route(":lang", "routes/lang.jsx", [
    index("routes/home.jsx"),
    // one route for /foods, /foods/<category> and /foods/<food>: switching category filters keeps
    // the list mounted (no remount → no scroll jump, no flash)
    route("foods/:slug?", "routes/food.jsx"),
    route("tools", "routes/tools.jsx"),
    route("learn", "routes/learn.jsx"),
    route("plants", "routes/plants.jsx"),
    route("plants/:slug", "routes/plant.jsx"),
    route("food-guide", "routes/food-guide.jsx"),
    route("food-guide/food-storage", "routes/food-storage.jsx"),
    route("food-guide/meal-times", "routes/meal-times.jsx"),
    route("nutrition/vitamins", "routes/vitamins.jsx"),
    route("nutrition/minerals", "routes/minerals.jsx"),
    route("nutrition/deficiency", "routes/deficiency.jsx"),
    route("food-myths", "routes/food-myths.jsx"),
    route("mens-health", "routes/mens-health.jsx"),
    route("womens-health", "routes/womens-health.jsx"),
    route("pregnancy", "routes/pregnancy.jsx"),
    route("coffee", "routes/coffee.jsx"),
    route("anti-aging", "routes/anti-aging.jsx"),
    route("blog", "routes/blog.jsx"),
    route("blog/:slug", "routes/blog-post.jsx"),
    route("references", "routes/references.jsx"),
    ...LEGAL_PAGES.map(p => route(p, "routes/legal.jsx", { id: `legal-${p}` })),
    route("*", "routes/not-found.jsx"),
  ]),

  // pre-2026-11 URLs (no language prefix) → client redirect; hosts also get 301 rules
  ...LEGACY_REDIRECTS.map(([from], i) => route(from.slice(1), "routes/legacy.jsx", { id: `legacy-${i}` })),
];
