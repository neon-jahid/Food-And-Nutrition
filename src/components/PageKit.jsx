import { Link } from "../router.jsx";
import { ChevronRight, Info, Search, X } from "lucide-react";
import { FOODS } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import FoodImage from "./FoodImage.jsx";

const FOOD_BY_ID = Object.fromEntries(FOODS.map(f => [f.id, f]));
export const foodById = id => FOOD_BY_ID[id];

/** Gradient page header with breadcrumb, icon, title and optional stats / children. */
export function PageHero({ icon: Icon, eyebrow, title, sub, children }) {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/90 via-white/60 to-accent-500/5 dark:from-brand-500/10 dark:via-slate-950/40 dark:to-accent-500/5" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-500/15" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-300">{t.home}</Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          {eyebrow && (
            <>
              <Link to={eyebrow.to} className="hover:text-brand-600 dark:hover:text-brand-300">{eyebrow.label}</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            </>
          )}
          <span className="truncate text-slate-700 dark:text-slate-200" aria-current="page">{title}</span>
        </nav>
        <div className="flex items-start gap-4">
          {Icon && (
            <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30 sm:grid">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
          )}
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h1>
            {sub && <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">{sub}</p>}
          </div>
        </div>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

/** Horizontal, scrollable pill filter. options: [{ id, label, count? }] */
export function FilterChips({ options, value, onChange, label }) {
  const { num } = useLang();
  return (
    <div role="radiogroup" aria-label={label} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
      {options.map(o => {
        const on = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o.id)}
            className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-4 text-sm font-semibold transition ${
              on
                ? "border-transparent bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                : "border-slate-200 bg-white/80 text-slate-600 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-brand-300"
            }`}
          >
            {o.label}
            {o.count != null && <span className={`text-xs ${on ? "opacity-70" : "text-slate-400"}`}>{num(o.count)}</span>}
          </button>
        );
      })}
    </div>
  );
}

export function SearchInput({ value, onChange, placeholder }) {
  return (
    <label className="relative block w-full max-w-md">
      <span className="sr-only">{placeholder}</span>
      <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white/90 pr-10 pl-11 text-sm shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-slate-700 dark:bg-slate-900/80 [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button type="button" onClick={() => onChange("")} className="absolute top-1/2 right-2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Clear">
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </label>
  );
}

/** Row of small linked food photos with names. */
export function FoodChips({ ids, size = "md" }) {
  const { name } = useLang();
  const foods = ids.map(foodById).filter(Boolean);
  if (!foods.length) return null;
  const img = size === "sm" ? "h-7 w-7" : "h-8 w-8";
  return (
    <ul className="flex flex-wrap gap-1.5">
      {foods.map(f => (
        <li key={f.id}>
          <Link
            to={`/foods/${f.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white py-0.5 pr-3 pl-0.5 text-xs font-medium text-slate-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:text-brand-300"
          >
            <FoodImage food={f} className={`${img} rounded-full`} />
            {name(f)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Disclaimer({ children }) {
  const { t } = useLang();
  return (
    <p className="mt-10 flex gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4 text-sm leading-relaxed text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
      <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{children || t.disclaimer}</span>
    </p>
  );
}

export function EmptyState({ children }) {
  return <p className="card p-10 text-center text-slate-500 dark:text-slate-400">{children}</p>;
}

/** Case-insensitive match of a query against any of the given strings. */
export const matches = (q, ...parts) => {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  return parts.flat().filter(Boolean).some(p => String(p).toLowerCase().includes(s));
};
