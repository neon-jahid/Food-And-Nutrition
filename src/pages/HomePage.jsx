import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, FOODS, SUBGROUPS } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import { GOALS, parseRanges, searchFoods, stringifyRanges } from "../search.js";
import CategoryChips from "../components/CategoryChips.jsx";
import FoodCard from "../components/FoodCard.jsx";
import SearchBox from "../components/SearchBox.jsx";
import AdvancedSearch from "../components/AdvancedSearch.jsx";
import FoodImage from "../components/FoodImage.jsx";
import { LayoutGrid, SearchX, X } from "lucide-react";
import { HealthGoals, RecentlyViewed, SectionHeader, SeasonalNow, TipOfDay, TopLists, ToolsCta } from "../components/HomeSections.jsx";
import { CategoryIcon } from "../icons.jsx";

const HERO_FOODS = ["hilsa", "mango", "spinach", "egg"];

export default function HomePage({ compare, onToggleCompare }) {
  const { t, lang, fill, name, num } = useLang();
  // every filter lives in the URL, so "back" from a food page restores it and links are shareable
  const [params, setParams] = useSearchParams();
  const category = CATEGORIES.some(c => c.id === params.get("cat")) ? params.get("cat") : "all";
  const query = params.get("q") || "";
  const sort = params.get("sort") || (query ? "relevance" : "name");
  const groups = SUBGROUPS[category] || [];
  const subId = groups.some(g => g.id === params.get("sub")) ? params.get("sub") : "all";
  const goals = (params.get("goals") || "").split(",").filter(g => GOALS[g]);
  const ranges = parseRanges(params.get("range"));
  const hideUnhealthy = params.get("healthy") === "1";
  const [advOpen, setAdvOpen] = useState(() => goals.length > 0 || Object.keys(ranges).length > 0 || hideUnhealthy);

  const update = patch => {
    const next = new URLSearchParams(params);
    Object.entries(patch).forEach(([k, v]) => (v && v !== "all" ? next.set(k, v) : next.delete(k)));
    setParams(next, { replace: true });
  };

  const activeCount = goals.length + Object.keys(ranges).length + (hideUnhealthy ? 1 : 0);
  const browsing = !!query || category !== "all" || activeCount > 0;

  const pickGoal = id => {
    update({ goals: id });
    setAdvOpen(true);
    requestAnimationFrame(() => document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" }));
  };

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
    return list.sort(sorters[sort] || sorters.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category, subId, params, sort, lang, name]);

  const activeCat = CATEGORIES.find(c => c.id === category);
  const sortOptions = [
    ...(query ? [["relevance", lang === "bn" ? "প্রাসঙ্গিকতা" : "Relevance"]] : []),
    ["name", t.sortName], ["calAsc", t.sortCaloriesAsc], ["calDesc", t.sortCaloriesDesc],
    ["protein", t.sortProtein], ["fiber", t.sortFiber], ["vitC", t.sortVitC], ["iron", t.sortIron],
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        {/* decorative HD photo strip */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] grid-cols-2 grid-rows-2 gap-3 py-8 pr-6 xl:grid" aria-hidden="true">
          {HERO_FOODS.map((id, i) => {
            const f = FOODS.find(x => x.id === id);
            return (
              <FoodImage
                key={id}
                food={f}
                hd
                eager
                sizes="240px"
                className={`h-full min-h-0 w-full rounded-2xl shadow-lg ring-4 ring-white/70 dark:ring-slate-900/70 ${i % 2 ? "translate-y-4" : "-translate-y-1"}`}
              />
            );
          })}
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16 xl:pr-[40%]">
          <div className="text-center xl:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{t.heroTitle}</h1>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 xl:mx-0 dark:text-slate-400">
              {fill(t.heroText, { count: FOODS.length, cats: CATEGORIES.length })}
            </p>
          </div>
          <div className="mt-7">
            <SearchBox value={query} onChange={q => update({ q, sort: "" })} />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16">
        {/* discovery sections — hidden while the user is searching or filtering, so results come first */}
        {!browsing && (
          <>
            <HealthGoals onPick={pickGoal} />
            <SeasonalNow />
            <RecentlyViewed />
            <TipOfDay />
          </>
        )}

        <div id="browse" className="scroll-mt-20">
          {!browsing && <div className="mt-12"><SectionHeader icon={LayoutGrid} title={lang === "bn" ? "সব খাবার" : "All foods"} sub={fill(t.heroText, { count: FOODS.length, cats: CATEGORIES.length })} /></div>}
        </div>
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
          <p className="text-sm text-slate-500 dark:text-slate-400">{fill(t.showing, { n: results.length })}</p>
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((r, i) => (
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
        ) : (
          <div className="py-16 text-center text-slate-500">
            <SearchX className="mx-auto mb-3 h-10 w-10 text-slate-400" aria-hidden="true" />
            <p>{t.noResults}</p>
            {activeCount > 0 && (
              <button type="button" onClick={() => update({ goals: "", range: "", healthy: "" })} className="mt-3 inline-flex items-center gap-1 font-semibold text-brand-600 hover:underline">
                <X className="h-4 w-4" aria-hidden="true" /> {t.resetFilters}
              </button>
            )}
          </div>
        )}

        {!browsing && (
          <>
            <TopLists />
            <ToolsCta />
          </>
        )}
      </div>
    </>
  );
}
