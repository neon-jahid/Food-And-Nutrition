import { CATEGORIES, FOODS } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import { CategoryIcon } from "../icons.jsx";

const counts = FOODS.reduce((acc, f) => ({ ...acc, [f.cat]: (acc[f.cat] || 0) + 1 }), {});

export default function CategoryChips({ active, onChange }) {
  const { t, lang, num } = useLang();
  const items = [
    { id: "all", label: t.allCategories, count: FOODS.length },
    ...CATEGORIES.map(c => ({ id: c.id, label: c[lang], count: counts[c.id] || 0 })),
  ];

  return (
    <nav aria-label="Categories" className="-mx-4 my-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
      {items.map(c => {
        const on = c.id === active;
        return (
          <button
            key={c.id}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(c.id)}
            className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
              on
                ? "border-brand-500 bg-brand-500 text-white shadow-md shadow-brand-500/20"
                : "border-slate-200 bg-white hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:text-brand-100"
            }`}
          >
            <CategoryIcon id={c.id} tone={!on} />
            {c.label}
            <span className={`rounded-full px-1.5 text-xs ${on ? "bg-white/25" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"}`}>
              {num(c.count)}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
