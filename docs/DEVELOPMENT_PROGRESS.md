# Development Progress

## How to run

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload (`react-router dev`) |
| `npm run build` | Writes sitemap/robots/redirects → prerenders every page to `build/client` → writes `404.html` |
| `npm run preview` | Serves `build/client` like a static host (redirects + real 404) on http://localhost:4173 |
| `npm run test:data` | Data-integrity checks (food references, en/bn parity, Bangla digits, paths) |
| `npm run test:e2e` | Playwright against the production build (uses installed Google Chrome) |
| `npm test` | Both test suites |

**Deploy:** upload `build/client` to any static host. Before building for production, copy `.env.example` to `.env` and set `VITE_SITE_URL`. `public/_redirects` (generated) holds the 301 rules in Netlify / Cloudflare Pages format; other hosts need the same rules in their own format.

---

## Phase 1a: Foundation (2026-11-02), complete

**Completed**
- **Routing:** moved to React Router 7 framework mode with static prerendering (`ssr: false`). **512 pages** are built to HTML: 255 paths × en/bn, plus `/` and the 404 page. Page components were kept; each route module adds `meta`.
- **Bilingual URLs:** `/en/...` and `/bn/...`. Language comes from the URL; the switch keeps the same page, query and hash. `/` sends visitors to their saved or browser language, with links to both for crawlers.
- **New URL scheme** (per the brief): `/foods/:slug`, category pages `/foods/fruits`, `/foods/fish-seafood` and others, `/food-guide/*`, `/nutrition/*`, `/food-myths`.
- **Redirects:** every old URL (`/food/:id`, `/storage`, `/myths`…) gets a 301 rule in `_redirects`, with a `?lang=bn` variant and an in-app fallback. Moved paths inside a language (`/en/storage`) are forwarded too.
- **Real 404** (status 404 from `404.html`) and an error boundary.
- **SEO on every page:** title, description, canonical, hreflang (en, bn, x-default), Open Graph, Twitter card, JSON-LD (`WebSite` + `SearchAction` on home, `BreadcrumbList` everywhere, `Article` on posts). Plus `sitemap.xml` with hreflang alternates, `robots.txt`, and a branded `og-image.png`.
- **Branding:** "Food & Nutrition / খাবার ও পুষ্টি", tagline "Know Your Food. Understand Your Nutrition." Hero copy and search placeholder from the brief; calmer hero background.
- **New pages:** about, contact, editorial policy, privacy policy, terms, medical disclaimer (`src/data/legal.js`, facts only; no invented contact details), and references (data sources with verified links plus all 214 photo credits). The footer has a legal links row.
- **Hydration safety:** theme, compare list, plate/BMI calculators, recently viewed, seasonal, tip of the day, meal-time "now" badge, URL query and hash now load after hydration, so there are no mismatches. `usePersistentState` no longer overwrites saved data on first render.
- **Tests:** `scripts/check-data.mjs` (shown to catch a broken reference) and **75 Playwright tests**, all passing:
  - every static page × 2 languages (status, `lang`, h1, title, canonical, hreflang, description, **zero console errors**)
  - content readable without JavaScript
  - search → food page, search → results
  - language switch, category page, compare persistence, theme persistence
  - legacy redirects, 404s, root language pick, sitemap/robots
  - mobile drawer and bottom tabs, no horizontal overflow on 5 pages

**New files:** `react-router.config.js`, `playwright.config.js`, `.env.example`, `src/root.jsx`, `src/routes.js`, `src/routes/*.jsx` (24), `src/paths.js`, `src/site.js`, `src/seo.js`, `src/pageMeta.js`, `src/router.jsx`, `src/components/NotFound.jsx`, `src/pages/LegalPage.jsx`, `src/pages/ReferencesPage.jsx`, `src/data/legal.js`, `scripts/{generate-seo,postbuild,serve,check-data}.mjs`, `tests/*.spec.js`, `public/og-image.png`.

**Modified:** `vite.config.js`, `package.json` (scripts, deps), `.gitignore`, `src/context/{LangContext,ThemeContext}.jsx`, `src/hooks.js`, `src/i18n.js`, `src/nav.js`, `src/components/{Header,Hero,HomeSections,MealGuide,SearchBox,…}.jsx` (localized links), `src/pages/*` (new paths, hydration guards).

**Removed:** `index.html`, `src/main.jsx`, `src/App.jsx` (replaced by `src/root.jsx` + `src/routes.js`), and the `@vitejs/plugin-react` and `react-router-dom` dependencies (superseded).

**Dependencies added:** `react-router`, `@react-router/node`, `@react-router/dev`, `@playwright/test`.

**Database changes:** none.

**Known issues / follow-ups**
- `VITE_SITE_URL` is not set yet, so canonical, sitemap and OG URLs use a placeholder domain. **Must be set before deploying.**
- Contact page shows no address until `VITE_CONTACT_EMAIL` is set.
- The shared data chunk is ~760 KB (all foods + search). Per-route data loading is planned for Phase 5.
- localStorage keys keep the `nutribase.` prefix on purpose, so returning visitors keep their saved settings.

**Next:** Phase 1b, the food data upgrade: extra nutrients, serving sizes, raw/cooked, per-value source and verified date, "estimated" badges, favourites. **Needs a USDA FoodData Central API key.**

---

## Phase 0: Audit & plan (2026-11-02), complete

- `docs/EXISTING_WEBSITE_AUDIT.md` and `docs/IMPLEMENTATION_PLAN.md`.
- **Decisions:** rename to Food & Nutrition; React Router framework mode + Supabase; USDA FDC + Bangladesh FCT verification; baseline committed (`d9abdbb`).
- **Pending inputs from owner:** hosting target, Supabase project URL + anon key, USDA FDC API key, nutrition reviewer.
