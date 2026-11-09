"use client";

import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "../router.jsx";
import { useHydrated } from "../hooks.js";
import { CATEGORY_SLUGS } from "../paths.js";
import { CATEGORIES, FOODS, SUBGROUPS } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import { GOALS, parseRanges, searchFoods, stringifyRanges } from "../search.js";
import CategoryChips from "../components/CategoryChips.jsx";
import FoodCard from "../components/FoodCard.jsx";
import SearchBox from "../components/SearchBox.jsx";
import AdvancedSearch from "../components/AdvancedSearch.jsx";
import { ChevronDown, SearchX, X } from "lucide-react";
import { CategoryIcon } from "../icons.jsx";

const PAGE_SIZE = 24;

// how many cards were revealed for a given filter set — survives "back" from a food page
const readShown = key => {
  try {
    const v = Number(sessionStorage.getItem(`shown:${key}`));
    return v > PAGE_SIZE ? v : PAGE_SIZE;
  } catch {
    return PAGE_SIZE;
  }
};
const saveShown = (key, n) => {
  try { sessionStorage.setItem(`shown:${key}`, String(n)); } catch { /* storage unavailable */ }
};

const NO_PARAMS = new URLSearchParams();
// "all" means "no filter" for category controls only; it is an ordinary word in the search box
const hasValue = (k, v) => v && !(v === "all" && (k === "cat" || k === "sub"));

export default function FoodsPage({ compare, onToggleCompare, fixedCategory }) {
  const { t, lang, fill, name, num } = useLang();
  const navigate = useNavigate();
  const hydrated = useHydrated();
  // every filter lives in the URL, so "back" from a food page restores it and links are shareable.
  // The prerendered HTML has no query string, so params are only read once hydrated.
  const [urlParams, setParams] = useSearchParams();
  const params = hydrated ? urlParams : NO_PARAMS;
  const category = fixedCategory || (CATEGORIES.some(c => c.id === params.get("cat")) ? params.get("cat") : "all");
  const query = params.get("q") || "";
  const sort = params.get("sort") || (query ? "relevance" : "name");
  const groups = SUBGROUPS[category] || [];
  const subId = groups.some(g => g.id === params.get("sub")) ? params.get("sub") : "all";
  const goals = (params.get("goals") || "").split(",").filter(g => Object.hasOwn(GOALS, g));
  const ranges = parseRanges(params.get("range"));
  const hideUnhealthy = params.get("healthy") === "1";
  const [advOpen, setAdvOpen] = useState(false);
  const hasAdvanced = goals.length > 0 || Object.keys(ranges).length > 0 || hideUnhealthy;
  useEffect(() => { if (hasAdvanced) setAdvOpen(true); }, [hasAdvanced]);

  // any change to filters/sort starts the list again from the first page
  const filterKey = `${category}|${params.toString()}`;
  const [shown, setShown] = useState(() => ({ key: "", n: PAGE_SIZE }));
  const visible = !hydrated ? PAGE_SIZE : shown.key === filterKey ? shown.n : readShown(filterKey);
  useEffect(() => saveShown(filterKey, visible), [filterKey, visible]);

  const update = patch => {
    const next = new URLSearchParams(params);
    // a category change moves to that category's own URL (/foods/fruits), keeping other filters
    if ("cat" in patch) {
      next.delete("cat");
      next.delete("sub");
      Object.entries(patch).forEach(([k, v]) => k !== "cat" && (hasValue(k, v) ? next.set(k, v) : next.delete(k)));
      const qs = next.toString();
      const path = patch.cat && patch.cat !== "all" ? `/foods/${CATEGORY_SLUGS[patch.cat]}` : "/foods";
      navigate(qs ? `${path}?${qs}` : path, { preventScrollReset: true });
      return;
    }
    Object.entries(patch).forEach(([k, v]) => (hasValue(k, v) ? next.set(k, v) : next.delete(k)));
    setParams(next, { replace: true, preventScrollReset: true });
  };

  const activeCount = goals.length + Object.keys(ranges).length + (hideUnhealthy ? 1 : 0);

  const results = useMemo(() => {
    const list = searchFoods({ query, category, sub: subId, goals, ranges, hideUnhealthy });
    const desc = key => (a, b) => b.food.n[key] - a.food.n[key];
    const byName = (a, b) => name(a.food).localeCompare(name(b.food), lang);
    const sorters = {
      relevance: (a, b) => b.score - a.score || byName(a, b),
      name: byName,
      calAsc: (a, b) => a.food.n.calories - b.food.n.calories,
      calDesc: desc("calories"),
      protein: desc("protein"),
      fiber: desc("fiber"),
      vitC: desc("vitC"),
      iron: desc("iron"),
    };
    return list.sort(Object.hasOwn(sorters, sort) ? sorters[sort] : sorters.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category, subId, params, sort, lang, name]);

  const page = results.slice(0, visible);
  const remaining = results.length - page.length;

  const activeCat = CATEGORIES.find(c => c.id === category);
  const sortOptions = [
    ...(query ? [["relevance", lang === "bn" ? "প্রাসঙ্গিকতা" : "Relevance"]] : []),
    ["name", t.sortName], ["calAsc", t.sortCaloriesAsc], ["calDesc", t.sortCaloriesDesc],
    ["protein", t.sortProtein], ["fiber", t.sortFiber], ["vitC", t.sortVitC], ["iron", t.sortIron],
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {lang === "bn" ? "সব খাবার" : "All foods"}
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
              {fill(t.heroText, { count: FOODS.length, cats: CATEGORIES.length })}
            </p>
          </div>
          <div className="mt-6">
            <SearchBox value={query} onChange={q => update({ q, sort: "" })} />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16">
        <CategoryChips active={category} onChange={cat => update({ cat, sub: "" })} />

        <AdvancedSearch
          open={advOpen}
          onToggle={() => setAdvOpen(o => !o)}
          goals={goals}
          onGoals={g => update({ goals: g.join(",") })}
          ranges={ranges}
          onRanges={r => update({ range: stringifyRanges(r) })}
          hideUnhealthy={hideUnhealthy}
          onHideUnhealthy={v => update({ healthy: v ? "1" : "" })}
          onReset={() => update({ goals: "", range: "", healthy: "" })}
          activeCount={activeCount}
        />

        {activeCat && (
          <div className="mb-5 flex items-center gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white shadow-sm dark:bg-slate-800"><CategoryIcon id={activeCat.id} className="h-7 w-7" /></span>
            <div>
              <h2 className="text-lg font-bold">{activeCat[lang]}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">{lang === "bn" ? activeCat.descBn : activeCat.descEn}</p>
            </div>
          </div>
        )}

        {groups.length > 0 && (
          <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {[{ id: "all", en: t.allCategories, bn: t.allCategories, ids: FOODS.filter(f => f.cat === category) },
              ...groups].map(g => {
              const on = g.id === subId;
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => update({ sub: g.id })}
                  className={`flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm whitespace-nowrap transition ${
                    on
                      ? "border-slate-800 bg-slate-800 text-white dark:border-white dark:bg-white dark:text-slate-900"
                      : "border-slate-200 bg-white hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900"
                  }`}
                >
                  {g[lang]}
                  <span className="text-xs opacity-60">{num(g.ids.length)}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500 dark:text-slate-400" aria-live="polite">{fill(t.showing, { n: results.length })}</p>
          <label className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            {t.sortBy}
            <select
              value={sort}
              onChange={e => update({ sort: e.target.value })}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              {sortOptions.map(([v, label]) => <option key={v} value={v}>{label}</option>)}
            </select>
          </label>
        </div>

        {results.length ? (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {page.map((r, i) => (
                <FoodCard
                  key={r.food.id}
                  food={r.food}
                  match={r.snippet}
                  eager={i < 8}
                  inCompare={compare.includes(r.food.id)}
                  onToggleCompare={() => onToggleCompare(r.food.id)}
                />
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {lang === "bn"
                  ? `${num(results.length)}টির মধ্যে ${num(page.length)}টি দেখানো হচ্ছে`
                  : `Showing ${num(page.length)} of ${num(results.length)}`}
              </p>
              <div className="h-1.5 w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800" aria-hidden="true">
                <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${(page.length / results.length) * 100}%` }} />
              </div>
              {remaining > 0 && (
                <button
                  type="button"
                  onClick={() => setShown({ key: filterKey, n: visible + PAGE_SIZE })}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-600"
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  {lang === "bn"
                    ? `আরও দেখুন (${num(Math.min(PAGE_SIZE, remaining))}টি)`
                    : `Load more (${num(Math.min(PAGE_SIZE, remaining))})`}
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="py-16 text-center text-slate-500">
            <SearchX className="mx-auto mb-3 h-10 w-10 text-slate-500 dark:text-slate-400" aria-hidden="true" />
            <p>{t.noResults}</p>
            {activeCount > 0 && (
              <button type="button" onClick={() => update({ goals: "", range: "", healthy: "" })} className="mt-3 inline-flex items-center gap-1 font-semibold text-brand-700 dark:text-brand-400 hover:underline">
                <X className="h-4 w-4" aria-hidden="true" /> {t.resetFilters}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
