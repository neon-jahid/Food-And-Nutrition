# Development Progress

## Phase 0: Audit & plan (2026-11-02)

**Completed**
- Inspected the full codebase (stack, routes, components, data, SEO, responsive behaviour, performance).
- `docs/EXISTING_WEBSITE_AUDIT.md`: audit with the Keep / Improve / Add table.
- `docs/IMPLEMENTATION_PLAN.md`: architecture proposal, schema, phases, risks, open decisions.

**Decisions (2026-11-02):** rename to Food & Nutrition; React Router framework mode + Supabase; USDA FDC + Bangladesh FCT verification; baseline committed.

**Pending inputs from owner:** hosting target, Supabase project URL + anon key, USDA FDC API key, nutrition reviewer.

**Database changes:** none (no database exists yet).

**Known issues** (from the audit): no 404 route, no SPA rewrite config, no per-value nutrient provenance, 1.33 MB main bundle, no tests.

**Next step:** Phase 1a, the foundation (routing/prerender, bilingual URLs, redirects, meta/sitemap, legal pages, Playwright).
