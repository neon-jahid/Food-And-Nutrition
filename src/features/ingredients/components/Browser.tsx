"use client";

/* Search box, filters and result grid. Filters live in the URL, so results can be shared. */
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, ENTRIES, STATUS_LABELS, VOCAB } from "../lib/repository.client";
import { filterEntries } from "../lib/search";
import { useLang, useSearchParams } from "../lib/site";
import { STRINGS } from "../strings";
import { APPLICATION_IDS, CATEGORY_IDS, ORIGINS, STATUS_IDS, type ApplicationId, type CategoryId, type Origin, type StatusId } from "../types";
import { IngredientCard } from "./Parts";

/** A value from the address bar, kept only if it is one of the allowed options. */
const allowed = <T extends string>(value: string | null, options: readonly T[]): T | "" => (value && (options as readonly string[]).includes(value) ? (value as T) : "");

function Select({ label, value, onChange, options, anyLabel }: { label: string; value: string; onChange: (v: string) => void; options: [string, string][]; anyLabel: string }) {
  return (
    <label className="block min-w-0 text-sm">
      <span className="mb-1 block font-medium text-forest-900 dark:text-stone-200">{label}</span>
      <select
        value={value} onChange={e => onChange(e.target.value)}
        className="w-full min-w-0 rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-forest-950 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-600/20 dark:border-forest-700 dark:bg-forest-950 dark:text-white"
      >
        <option value="">{anyLabel}</option>
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
    </label>
  );
}

export default function Browser({ fixedCategory, searchLabel }: { fixedCategory?: CategoryId; searchLabel?: string }) {
  const { lang, num } = useLang();
  const s = STRINGS[lang];
  const [params, setParams] = useSearchParams();

  const q = params.get("q") ?? "";
  const category = fixedCategory ?? allowed<CategoryId>(params.get("cat"), CATEGORY_IDS);
  const origin = allowed<Origin>(params.get("origin"), ORIGINS);
  const status = allowed<StatusId>(params.get("status"), STATUS_IDS);
  const application = allowed<ApplicationId>(params.get("app"), APPLICATION_IDS);

  const results = useMemo(() => filterEntries(ENTRIES, { q, category, origin, status, application }), [q, category, origin, status, application]);
  const hasFilters = Boolean(q || origin || status || application || (!fixedCategory && category));

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
      <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <div className="space-y-4 rounded-2xl border border-stone-200 bg-white p-4 dark:border-forest-800 dark:bg-forest-950">
          <p className="flex items-center gap-2 font-semibold text-forest-900 dark:text-white"><SlidersHorizontal className="h-4 w-4" aria-hidden="true" />{s.filters}</p>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-forest-900 dark:text-stone-200">{searchLabel ?? s.searchLabel}</span>
            <span className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-3 py-2 focus-within:border-forest-600 focus-within:ring-2 focus-within:ring-forest-600/20 dark:border-forest-700 dark:bg-forest-950">
              <Search className="h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
              <input
                type="search" value={q} onChange={e => update("q", e.target.value)} placeholder="E211, C7H5NaO2…" autoComplete="off"
                className="w-full min-w-0 bg-transparent text-forest-950 outline-none placeholder:text-stone-500 dark:text-white dark:placeholder:text-stone-400"
              />
            </span>
          </label>
          {!fixedCategory && <Select label={s.category} anyLabel={s.any} value={category} onChange={v => update("cat", v)} options={CATEGORIES.map(c => [c.id, c.name[lang]])} />}
          <Select label={s.origin} anyLabel={s.any} value={origin} onChange={v => update("origin", v)} options={ORIGINS.map(o => [o, VOCAB.origins[o][lang]])} />
          <Select label={s.status} anyLabel={s.any} value={status} onChange={v => update("status", v)} options={STATUS_LABELS.map(l => [l.id, l.name[lang]])} />
          <Select label={s.application} anyLabel={s.any} value={application} onChange={v => update("app", v)} options={APPLICATION_IDS.map(a => [a, VOCAB.applications[a][lang]])} />
          {hasFilters && (
            <button type="button" onClick={() => setParams({}, { replace: true })} className="inline-flex items-center gap-1 text-sm font-semibold text-forest-700 hover:underline dark:text-forest-200">
              <X className="h-3.5 w-3.5" aria-hidden="true" />{s.clearFilters}
            </button>
          )}
        </div>
      </aside>

      <div className="min-w-0">
        <p aria-live="polite" className="mb-3 text-sm font-medium text-stone-700 dark:text-stone-300">{num(results.length)}{lang === "en" ? " " : ""}{results.length === 1 ? s.result : s.results}</p>
        {results.length ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.map(e => <motion.li key={e.id} layout="position" transition={{ duration: 0.2 }} className="min-w-0"><IngredientCard item={e} lang={lang} /></motion.li>)}
          </ul>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 p-10 text-center dark:border-forest-700">
            <p className="font-semibold text-forest-900 dark:text-white">{s.noResults}</p>
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{s.noResultsSub}</p>
          </div>
        )}
      </div>
    </div>
  );
}
