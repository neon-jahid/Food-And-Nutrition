# Existing Website Audit

_Audit date: 2026-11-02 · Scope: full repository at `D:\New folder\SQA\Food And Nutrition knowledge` · Branch: `master`_

## 1. Summary

The current site, branded **NutriBase**, is a **client-side React single-page app with no backend**. All content is bilingual (English/বাংলা) and stored as JavaScript data files that ship inside the bundle. Content and UI are in good shape: 214 foods with real photos, rich health content, 10 learning guides, a blog and two calculators. There is **no server, database, authentication, admin panel, test suite, per-page SEO or deployment configuration**.

So most of the brief's "content" modules can be upgraded in place. The "platform" modules (accounts, saved data across devices, admin and editorial workflow, community, newsletter, OCR, bilingual indexable URLs) need new infrastructure.

## 2. Technology stack

| Layer | Current |
|---|---|
| Build tool | Vite 8 (`vite.config.js`: React + Tailwind plugins only) |
| UI | React 19, JavaScript (no TypeScript) |
| Routing | `react-router-dom` 7, `BrowserRouter` (client-side only, declarative mode) |
| Styling | Tailwind CSS 4 with tokens in `src/index.css` (`--color-brand-*`, `--color-accent-*`); custom utilities `card`, `icon-btn`, `text-gradient` |
| Icons | `lucide-react` |
| Fonts | `@fontsource-variable/inter`, `@fontsource-variable/noto-sans-bengali` (self-hosted) |
| State and persistence | React state + `localStorage` through `src/utils.js` `storage` (keys `nutribase.*`: `lang`, `theme`, `accent`, `compare`, `plate`, `recent`) |
| i18n | `src/i18n.js` (UI strings), `src/context/LangContext.jsx` (`?lang=` URL override, Bangla digits), per-page `T = { en, bn }` objects |
| Theming | `src/context/ThemeContext.jsx`: light/dark/auto + 5 accent palettes, applied before paint in `index.html` |
| Backend / API | **None** |
| Database | **None.** Data lives in `src/data/*.js` |
| Auth | **None** |
| Tests | **None** (no test runner, no linter config) |
| Hosting / CI | **None in repo** (no Vercel/Netlify config, no SPA rewrite rules, no CI) |

## 3. Folder structure

```
index.html                 theme pre-paint script, single <title>/<meta description>
public/
  favicon.svg
  images/foods/*.webp      214 thumbnails (≤720px)
  images/foods/hd/*.webp   184 large versions (≤1600px)
src/
  main.jsx, App.jsx        providers, routes, footer, scroll manager, compare modal
  nav.js                   primary nav + Learn groups (single source for header, drawer, footer, /learn)
  tones.js, hooks.js, icons.jsx, utils.js, search.js, i18n.js
  context/                 LangContext, ThemeContext
  components/              Header (mega menu, drawer, bottom tabs), Hero, SearchBox, AdvancedSearch,
                           FoodCard, FoodImage, NutritionFacts, MacroBar, CompareModal, MealGuide,
                           HomeSections, PageKit (PageHero, FilterChips, SearchInput, FoodChips…), ThemeMenu…
  pages/                   Home, Foods, Food, Tools, Guide, Learn, Plants, Storage, Nutrients (vitamins/minerals),
                           Deficiency, Myths, Blog, BlogPost, GenderHealth (men/women), Meals
  data/
    foods.js               214 foods × 10 nutrients, categories, sub-groups, daily values, units
    details/*.js           long-form health content (64 foods)
    points/*.js            benefit/warning bullet points (all 214 foods)
    imageCredits.json      photo source, author, licence, Commons page per food
    extras.js              seasons, tips, plate, habits
    plants.js              44 medicinal plants + 12 tags
    storage.js, micronutrients.js, deficiency.js, myths.js, blog.js, genderHealth.js, meals.js
```

## 4. Existing routes

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero (search, popular chips, real counts), meal-time guide, health goals, seasonal, recently viewed, tip of the day, food preview, top lists, learn grid, blog, tools CTA |
| `/foods` | Food list | Query-string filters: `q`, `cat`, `sub`, `sort`, `goals`, `range`, `healthy`; advanced search |
| `/food/:id` | Food detail | Nutrition facts, macro bar, %DV, benefit points, details (64 foods), photo credit, related foods, prev/next |
| `/tools` | Tools | My-plate calculator (`#plate`), BMI + calorie needs (`#bmi`, Asian BMI cut-offs, Mifflin-St Jeor) |
| `/guide` | Healthy eating guide | Balanced plate, habits, 4 myths + link |
| `/learn` | Learn hub | All guides + latest posts |
| `/vitamins`, `/minerals` | Micronutrient guides | 11 vitamins, 10 minerals |
| `/deficiency` | Deficiency guide | 10 deficiencies |
| `/plants` | Medicinal plants | 44 plants, `?tag=` filter, `#id` anchors |
| `/storage` | Food storage | 9 groups, fridge zones, spoilage signs, safety rules |
| `/myths` | Myths vs facts | 27 myths, quiz-style reveal |
| `/meals` | Meal-time guide | Breakfast / lunch / snack / dinner |
| `/mens-health`, `/womens-health` | Men's / women's health | Topics + period guide |
| `/blog`, `/blog/:slug` | Blog | 8 bilingual posts |
| `*` | Falls through to FoodPage | Shows "food not found" (**no real 404 page**) |

## 5. Audit table

| Area | Existing status | Required action |
|---|---|---|
| **Homepage** | Modern and working: real search with suggestions, real counts, meal guide, goals, seasonal, top lists, learn and blog sections. Hero headline and placeholder differ from the brief, and the hero uses more gradients than the brief allows. No newsletter, featured recipes or comparison preview. | **Improve**: new copy, calmer hero, add recipes, comparison-preview and newsletter sections, check section order. Keep everything else. |
| **Navigation** | Sticky header, Learn mega menu, mobile drawer, bottom tab bar, breadcrumbs on new pages, grouped footer. Driven by `src/nav.js`. | **Keep / Improve**: add Recipes, Tools sub-pages, Food Guide group and account menu; legal links in footer. |
| **Branding** | Name "NutriBase / নিউট্রিবেস", tagline "Nutrition facts of everyday foods". The brief names the site "Food & Nutrition". | **Decision needed** (see plan §8). |
| **Food database** | 214 foods in 11 categories, EN/BN names, 10 nutrients per 100 g, real Wikimedia photos with licence data, benefit points for all, long-form details for 64. Values are labelled "approximate" with only a site-wide source note. **No per-value source, reference, verified date, scientific name, raw/cooked state, serving sizes, vitamins A/D/B12, magnesium, zinc or sodium.** | **Improve / Add**: a source-tracked nutrient model, more nutrients, serving sizes, raw/cooked, slugs, "Oils & Fats" category. Keep existing IDs, photos and content. |
| **Food search and filter** | Real fuzzy search (EN/BN, nutrients, health problems), category and sub-group filters, nutrient range filters, goal filter, 8 sort orders. | **Keep**, then extend to new nutrients and favourites. |
| **Food comparison** | Modal comparing up to 3 foods (stored in localStorage), table view. No dedicated page, serving-size control or charts. | **Improve**: dedicated `/tools/food-comparison` with shareable URL, serving sizes, bar charts, difference highlighting. Reuse the existing compare state. |
| **Nutrition tools** | 2 tools: plate calculator (real data) and BMI/calorie (correct formulas). On one page; no per-tool URLs, unit switching or methodology section. | **Improve + Add**: split into `/tools/*`; add BMR, TDEE, protein, water, macros, ideal weight, age and recipe calculators with methodology and limitations. |
| **Recipes** | **None.** 4 meal-time example plates only. | **Add** module (data + pages); recipe nutrition computed from the food database. |
| **Plants / herbs** | 44 bilingual plants with uses, how to use, cautions and tags. No active compounds, references, or split between evidence and tradition. | **Improve**: add sci/local names (partly present), active compounds, evidence level per claim, references; per-plant URLs. |
| **Food label analyzer** | **None.** | **Add**: client-side OCR (Tesseract.js) with editable values; no server needed. |
| **Meal planner / grocery** | **None** (static meal-time guide only). | **Add**: works locally without an account; syncs when a backend exists. |
| **Seasonal calendar** | Bangladesh month data for ~55 foods (`extras.js`), "In season now" on home. No calendar page, no country selection. | **Improve**: full calendar page; country support only where a real data source exists. |
| **Storage and safety** | Storage page (9 groups, tips, signs, fridge zones). No thawing, leftovers or hygiene sections; no references. | **Improve**: add the missing topics and cite FSIS/WHO/BFSA. |
| **Blog / learning** | 8 bilingual articles, 27 myths, vitamins, minerals, deficiency, men's and women's health, meal guide. **No references on articles**, no quiz, comments, Q&A, newsletter or expert review. | **Improve**: add references and "reviewed by" fields. **Add** quiz (static). Comments, Q&A and newsletter need a backend. |
| **User accounts / dashboard** | **None.** Personal data (compare, plate, recents) is in localStorage only. | **Add** (needs backend). |
| **Admin panel / CMS** | **None.** Content is edited in source files. | **Add** (needs backend), or use a headless CMS (see plan). |
| **Database** | **None.** | **Add**: new schema; seed it from the existing data files so no content is lost. |
| **SEO** | One static `<title>` and description in `index.html`; `document.title` changed per language only. No per-page meta, canonical, sitemap, robots.txt, Open Graph, structured data or hreflang. Client-rendered, so crawlers without JS see an empty `<div id="root">`. | **Improve (major)**: prerender or SSR, per-route meta, sitemap, robots, OG, JSON-LD, `/en` and `/bn` URLs with hreflang. |
| **Responsive UI** | Verified at desktop, 500px and dark mode; mobile drawer and bottom tabs; safe-area insets. Older pages (Foods, Food, Tools) still use the older card style. | **Keep / Improve**: unify the card style on older pages and check tablet widths. |
| **Accessibility** | Good basics: aria labels, `aria-expanded`, radiogroups, focus rings on new components, `prefers-reduced-motion` on theme fade. Not audited with tools. | **Improve**: run an axe audit and fix contrast, focus order and the drawer focus trap. |
| **Performance** | Main JS chunk is **1.33 MB (312 KB gzip)**, mostly data files; new pages are lazy-loaded. Images are WebP with lazy loading and a shimmer. | **Improve**: move data into per-route or API loading; per-food content chunks. |
| **Security** | No backend, so little attack surface. No CSP. Nothing secret in the repo. | **Add** when the backend arrives: RLS / server validation, rate limiting, upload checks. |
| **Testing / QA** | **None.** | **Add**: Playwright smoke and journey tests; a data-integrity test (food IDs, en/bn parity, digits). |
| **Images / media** | 214 real Commons photos, credits stored per food, credit shown on food page and footer. No AI images found (checked metadata and visually). | **Keep**; add an attribution page (`/references`). |
| **Legal pages** | **None** (disclaimers are inline only). | **Add**: about, contact, editorial policy, references, privacy, terms, medical disclaimer. |

## 6. Known errors and limitations

1. **No 404 route.** Unknown URLs render FoodPage's "not found", and the host will return HTTP 200.
2. **No SPA fallback config.** Deep links such as `/blog/x` will 404 on a static host unless rewrites are added.
3. **Nutrition values have no per-value provenance**, which the brief's reliability rules require. The existing note says "approximate, from USDA FDC and South Asian tables".
4. **Only 10 nutrients**, so the vitamin and mineral guides cannot be backed by per-food numbers for A, D, B12, zinc, magnesium and so on.
5. Long-form details exist for only **64 of 214** foods.
6. The bundle is large because all content ships in JavaScript.
7. Blog, plant, myth and gender-health content was written for this project and **has not been expert-reviewed**; articles carry no inline references yet.
8. URL scheme `/food/:id` differs from the brief's `/foods/:slug` and needs a redirect.
9. The most recent changes (new hero, meal guide, `/meals`) are **uncommitted** in the working tree.
