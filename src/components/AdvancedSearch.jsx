import { useLang } from "../context/LangContext.jsx";
import { NUTRIENT_UNITS } from "../data/foods.js";
import { GOALS, RANGE_KEYS } from "../search.js";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { GOAL_ICONS } from "../icons.jsx";

/** Collapsible panel: health goals, nutrient min/max, hide unhealthy. Fully controlled. */
export default function AdvancedSearch({ open, onToggle, goals, onGoals, ranges, onRanges, hideUnhealthy, onHideUnhealthy, onReset, activeCount }) {
  const { t, fill, num } = useLang();

  const toggleGoal = id => onGoals(goals.includes(id) ? goals.filter(g => g !== id) : [...goals, id]);
  const setRange = (key, idx, val) => {
    const cur = ranges[key] || ["", ""];
    const next = { ...ranges, [key]: idx === 0 ? [val, cur[1]] : [cur[0], val] };
    if (next[key][0] === "" && next[key][1] === "") delete next[key];
    onRanges(next);
  };

  return (
    <div className="mb-5 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-700/25 dark:text-brand-100"><SlidersHorizontal className="h-4 w-4" aria-hidden="true" /></span>
          <span>
            <span className="block font-semibold">{t.advanced}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{t.advancedHint}</span>
          </span>
        </span>
        <span className="flex items-center gap-2">
          {activeCount > 0 && (
            <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-semibold text-white">
              {fill(t.activeFilters, { n: activeCount })}
            </span>
          )}
          <ChevronDown className={`h-5 w-5 text-slate-400 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </span>
      </button>

      {open && (
        <div className="space-y-6 border-t border-slate-100 px-4 py-5 dark:border-slate-800">
          <section>
            <h3 className="mb-2 text-sm font-bold">{t.goalsTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {Object.keys(GOALS).map(id => {
                const on = goals.includes(id);
                const Icon = GOAL_ICONS[id];
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleGoal(id)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition ${
                      on
                        ? "border-brand-500 bg-brand-500 text-white"
                        : "border-slate-200 hover:border-brand-500 dark:border-slate-700"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" /> {t.goals[id]}
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-bold">{t.rangesTitle}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {RANGE_KEYS.map(k => {
                const [min, max] = ranges[k] || ["", ""];
                const on = min !== "" || max !== "";
                return (
                  <div key={k} className={`rounded-xl border p-2.5 ${on ? "border-brand-500 bg-brand-50/50 dark:bg-brand-700/10" : "border-slate-200 dark:border-slate-700"}`}>
                    <p className="mb-1.5 text-xs font-semibold">
                      {t.short[k]} <span className="font-normal text-slate-400">({t.units[NUTRIENT_UNITS[k]]})</span>
                    </p>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number" min="0" inputMode="decimal" value={min} placeholder={t.min} aria-label={`${t.short[k]} ${t.min}`}
                        onChange={e => setRange(k, 0, e.target.value)}
                        className="w-full min-w-0 rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
                      />
                      <span className="text-slate-400">–</span>
                      <input
                        type="number" min="0" inputMode="decimal" value={max} placeholder={t.max} aria-label={`${t.short[k]} ${t.max}`}
                        onChange={e => setRange(k, 1, e.target.value)}
                        className="w-full min-w-0 rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={hideUnhealthy}
                onChange={e => onHideUnhealthy(e.target.checked)}
                className="h-4 w-4 accent-brand-500"
              />
              {t.hideUnhealthy}
            </label>
            <button
              type="button"
              onClick={onReset}
              disabled={activeCount === 0}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:border-red-400 hover:text-red-500 disabled:opacity-40 dark:border-slate-700"
            >
              <X className="h-4 w-4" aria-hidden="true" /> {t.resetFilters} {activeCount > 0 && `(${num(activeCount)})`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
