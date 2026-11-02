# Implementation Plan

_Companion to `docs/EXISTING_WEBSITE_AUDIT.md`. Status: **approved 2026-11-02**; decisions recorded in §8._

## 1. Guiding decision: upgrade the stack, don't replace it

The current React 19 + Vite + Tailwind 4 code is modern and works well. The brief requires capabilities it lacks: indexable bilingual URLs with per-page metadata, accounts, a database, an admin workflow and server-side validation. Those can be added **without discarding the React components**:

| Need | Recommended addition | Why not a full migration to Next.js |
|---|---|---|
| SEO: per-page meta, prerendered HTML, `/en/…` and `/bn/…`, sitemap | **React Router 7 framework mode** with `prerender` (the router is already a dependency, v7.18). Public pages are built to static HTML; components stay as they are. | Next.js would mean rewriting routing, data loading and the build for ~25 pages and porting every component, for the same SEO result. |
| Database, auth, file storage, row-level security | **Supabase** (Postgres + Auth + Storage). Schema via SQL migrations in `supabase/migrations`, security via RLS policies. | Matches the brief's suggested Postgres/Supabase Auth with no custom server to run. |
| Admin / editorial workflow | In-app `/admin` area (lazy-loaded, role-gated) backed by Supabase tables and RLS. | No separate admin app to maintain. |
| Charts | Small hand-rolled SVG/CSS bars (already used: `MacroBar`). Add **Recharts** only if a chart truly needs it. | Avoids a heavy dependency for simple bars. |
| Forms / validation | **Zod** schemas shared between forms and DB writes; plain controlled inputs (as today). | React Hook Form only if forms get complex (admin). |
| OCR | **Tesseract.js** in the browser (worker, eng + ben models), lazy-loaded on the analyzer page only. | No API key, no uploads to a server, private by default. |
| Tests | **Playwright** (journeys) + a Node data-integrity script. | — |
| Language | Stay on JavaScript; new modules may use JSDoc types. Converting to TypeScript later is optional. | Converting 9k+ lines gives no user value now. |

**Fallback if you don't want a backend yet:** everything except accounts, admin, community and newsletter can ship as a static site. Saved foods, meal plans and grocery lists stay in localStorage, and can be synced to Supabase later without UI changes.

## 2. What stays unchanged (KEEP)

- All 214 foods, their IDs, names, photos, image credits, benefit points and long-form details.
- All existing guides and their content: vitamins, minerals, deficiency, plants, storage, myths, men's/women's health, meals, blog.
- Search engine (`src/search.js`), advanced filters, health goals, sorting.
- Header / mega menu / drawer / bottom tabs (`src/nav.js` stays the single nav source), theme system (light/dark/auto + accents), language system, Bangla typography.
- The plate calculator and BMI/Mifflin-St Jeor logic (moved, not rewritten).
- Existing URLs keep working (redirects where the scheme changes).

## 3. What will be improved (IMPROVE)

| Item | Change |
|---|---|
| Homepage | Brief's hero copy and placeholder; fewer gradients; add featured recipes, comparison preview, popular tools and newsletter sections. |
| Food model | Add `slug`, scientific name, raw/cooked state, serving sizes, extra nutrients (vit A, D, B12, folate, Mg, Zn, Na, sat. fat, chol.), per-value source and verified date. Show "estimated" vs "verified" badges and "no data" instead of 0. |
| Food page | Per-serving toggle, raw vs cooked (where data exists), storage info, related recipes, sources and references block, last-verified date, save to favourites. |
| Comparison | Dedicated page with shareable URL (`?foods=brownrice,whiterice`), serving sizes, bars, difference highlights. Keep the compare modal as a quick tray. |
| Tools | One URL per tool, metric/imperial, methodology and limitations panel, validation messages. |
| Plants | Per-plant pages, active compounds, evidence level (Traditional / Limited / Moderate / Strong) per claim, references. |
| Storage & safety | Add thawing, leftovers, hygiene and preservation sections with FSIS / WHO / BFSA references; move under `/food-guide/*`. |
| Blog & guides | `references[]` and `reviewedBy` / `reviewedAt` fields rendered on every health article; "not yet expert-reviewed" label until a reviewer signs off. |
| SEO | Per-route title, description, canonical, OG/Twitter, JSON-LD (`WebSite`, `BreadcrumbList`, `Article`, `Recipe`), `sitemap.xml`, `robots.txt`, hreflang. |
| Performance | Content data loaded per route / from DB instead of one 1.3 MB bundle. |

## 4. What will be replaced (REPLACE — narrowly)

| Item | Replacement | Reason |
|---|---|---|
| `BrowserRouter` declarative routes in `App.jsx` | React Router framework-mode `routes.js` + `prerender` | Needed for static HTML per URL and `meta()` per route. Page components unchanged. |
| `/food/:id` URL scheme | `/foods/:slug` (+ `/en`, `/bn` prefixes) | Required by brief. **301 redirects** from every old URL. |
| `?lang=` query switch | Path prefix `/en`, `/bn` | Indexable bilingual URLs. `?lang=` keeps working and redirects. |
| Catch-all `*` → FoodPage | Real 404 page | Correct status and UX. |

## 5. New features (ADD)

Recipes module · Food label analyzer (OCR) · Meal planner + grocery list (+ PDF export via print stylesheet) · Seasonal calendar page · Nutrition quiz · Extra calculators (BMR, TDEE, protein, water, macros, ideal weight, age, recipe) · `/nutrition/*` macro guides (protein, carbs, fats, fibre) · Accounts (login, register, profile, saved foods/recipes/comparisons, calculator history) · Admin (foods, nutrients, sources, references, recipes, plants, articles, users, Q&A, comments, media, settings; Draft → Review → Approved → Published; roles Administrator / Editor / Nutrition Reviewer) · Q&A, comments with moderation · Newsletter subscription (double opt-in; email provider needed) · Legal pages · Playwright tests · `docs/DEVELOPMENT_PROGRESS.md`.

## 6. Database (new; nothing to migrate from, so no risk to existing records)

There is no existing database, so the "never drop tables" rule is easy to keep. The first migration creates the schema, and a **seed script imports the current `src/data/*.js` files**, so no content is retyped or lost. The JS files stay in git as the backup and source of truth until the admin panel takes over.

Initial migration `0001_init.sql` (all tables have `id`, `created_at`, `updated_at`, `created_by`, `updated_by`; content tables add `status` enum `draft | review | approved | published`):

| Table | Key columns / constraints |
|---|---|
| `food_categories` | `slug` unique, `sort_order` |
| `foods` | `slug` unique, `legacy_id` unique (current IDs → redirects), `category_id` FK, `scientific_name`, `image_*`, `status` |
| `food_translations` | (`food_id`, `locale`) unique; `name`, `alt_names`, `description`, `benefits`, `risks`, `storage` |
| `nutrients` | `code` unique (`energy_kcal`, `protein_g`…), `unit`, `daily_value` |
| `food_sources` | name, publisher, url, licence, version (e.g. USDA FDC SR Legacy, INFS Bangladesh FCT 2013) |
| `food_references` | citation, url / doi, `source_id` FK |
| `food_nutrients` | (`food_id`, `nutrient_id`, `prep_state`, `source_id`) unique; `amount`, `basis` (`per_100g`), `reference_id` FK, `verified_at`, `is_estimate` |
| `serving_sizes` | `food_id` FK, label (en/bn), grams |
| `recipes`, `recipe_ingredients` | ingredient → `food_id` FK + grams; nutrition computed, never typed in by hand |
| `plants` (+ `plant_claims` with `evidence_level`, `reference_id`) | |
| `articles` (+ `article_references`) | `reviewed_by`, `reviewed_at` |
| `user_profiles` | 1:1 `auth.users`, `role` (`user | editor | reviewer | admin`), locale, units |
| `bookmarks` | (`user_id`, `entity_type`, `entity_id`) unique |
| `food_comparisons`, `meal_plans`, `meal_plan_items`, `grocery_lists`, `grocery_items`, `calculator_history` | owner-only RLS |
| `user_questions`, `comments`, `food_reviews` | moderation `status`, rate-limited inserts |
| `newsletter_subscribers` | email unique, `confirmed_at`, token |

Indexes on every FK, `slug`, `status`, and (`food_id`, `nutrient_id`). RLS: public read of `published` rows only; writes by role; personal tables owner-only.

## 7. Phases (each ends with: build ✓, console clean ✓, Playwright ✓, regression check ✓, progress doc updated)

| Phase | Scope | Needs backend? |
|---|---|---|
| **0** | Audit + plan (this doc) · commit current work as a baseline | No |
| **1a** | Foundation: framework-mode routing + prerender, `/en`/`/bn` URLs, redirects, 404, per-route meta, sitemap, robots, OG/JSON-LD, legal pages, homepage copy, Playwright set-up, data-integrity test | No |
| **1b** | Food data upgrade: slugs, extra nutrients, serving sizes, raw/cooked, per-value sources & verified dates, "estimated" badges, favourites (local) | No (needs data source decision, §8.3) |
| **2** | Tools: comparison page, BMR, TDEE, calorie, protein, water, macros, ideal weight, age, recipe calculator; methodology panels | No |
| **3** | Recipes, plant pages + evidence levels, meal planner & grocery list (local), seasonal calendar, food-guide restructure, article references, quiz | No |
| **4** | Supabase: schema + seed, auth, dashboard & cloud sync, admin + editorial workflow, Q&A/comments/moderation, newsletter, label analyzer (OCR) | **Yes** |
| **5** | Performance, accessibility audit, security review, full Playwright regression, deployment config | Yes (for deploy) |

Phases 1–3 deliver almost every public-facing module without any infrastructure cost.

## 8. Decisions

**Decided 2026-11-02**
- **Branding:** rename to **Food & Nutrition**, tagline "Know Your Food. Understand Your Nutrition." Keep the logo mark and colours.
- **Architecture:** React Router 7 framework mode with prerendering, plus **Supabase**. No Next.js migration.
- **Nutrition data:** re-verify against **USDA FoodData Central** and the **INFS Bangladesh FCT 2013**. Show values as "estimated" until verified.
- **Baseline:** prior work committed to master before Phase 1.

**Still open:** hosting target, the Supabase project (URL + anon key), a USDA FDC API key, and a named nutrition reviewer.

Original questions:

1. **Branding**: rename "NutriBase" to "Food & Nutrition" with the new tagline, or keep NutriBase?
2. **Architecture**: approve React Router framework mode + Supabase (recommended), choose Next.js migration, or stay static-only for now?
3. **Nutrition data source**: re-verify all 214 foods against **USDA FoodData Central** (free API key from api.data.gov) and the **INFS Bangladesh Food Composition Table 2013** for local foods? Until then, current values are shown with an "estimated" label.
4. **Hosting**: where will this be deployed (Vercel, Netlify, cPanel, other)? This decides the redirect and rewrite format.
5. **Expert review**: is there a nutritionist who can be the "Nutrition Reviewer"? Without one, health content stays marked "not yet reviewed".

## 9. Dependencies and risks

| Risk | Impact | Mitigation |
|---|---|---|
| Re-verifying nutrient values changes numbers users have seen | Medium | Show source and date per value; keep a changelog; flag big differences for review. |
| Bangladesh FCT is a PDF, not an API | Medium | One-time, checked transcription into `food_nutrients` with the table's code per row. |
| URL change from `/food/:id` | High for SEO if mishandled | 301 map generated from `legacy_id`; Playwright test checks every old URL. |
| Framework-mode switch touches every route | Medium | Done first, alone, with the screenshot and regression suite before any feature work. |
| OCR accuracy (Bangla labels especially) | Medium | Every extracted value editable, confidence shown, never auto-trusted. |
| Health claims liability | High | References on every claim, evidence levels, reviewer workflow, medical-disclaimer page. |
| Supabase free-tier limits / vendor lock-in | Low | Plain Postgres SQL migrations; portable. |
| Community features attract spam | Medium | Moderation queue default, rate limits, captcha (hCaptcha/Turnstile, needs key). |
| Newsletter needs an email provider | Low | Integration point + docs; provider key in server env only. |
| Bundle size grows with recipes and plants | Medium | Per-route data loading; prerendered HTML; lazy admin and OCR chunks. |
