import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import { MacroBar } from "./MacroBar.jsx";
import FoodImage from "./FoodImage.jsx";
import { BenefitPreview } from "./BenefitPoints.jsx";
import { ArrowRight, Scale, Search } from "lucide-react";
import { CategoryIcon } from "../icons.jsx";

export default function FoodCard({ food, match, eager = false, inCompare, onToggleCompare }) {
  const { t, lang, fmt, unit, name, altName } = useLang();
  const cat = CATEGORIES.find(c => c.id === food.cat);
  const macros = [
    ["bg-protein", "protein"],
    ["bg-carbs", "carbs"],
    ["bg-fat", "fat"],
  ];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <FoodImage
          food={food}
          eager={eager}
          fit="contain"
          className="absolute inset-0 h-full w-full"
          imgClassName="transition duration-500 group-hover:scale-105"
        />
        {/* soft gradient keeps the badges readable on bright photos */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent" />
        <span className="absolute top-2 left-2 inline-flex max-w-[70%] items-center gap-1.5 truncate rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/85 dark:text-slate-200">
          <CategoryIcon id={cat.id} className="h-3.5 w-3.5 shrink-0" /> {cat[lang]}
        </span>
        <button
          type="button"
          onClick={onToggleCompare}
          title={inCompare ? t.removeCompare : t.addCompare}
          aria-label={inCompare ? t.removeCompare : t.addCompare}
          aria-pressed={inCompare}
          className={`absolute top-2 right-2 z-10 grid h-9 w-9 place-items-center rounded-full text-sm shadow-sm backdrop-blur transition ${
            inCompare ? "bg-brand-500 text-white" : "bg-white/90 hover:bg-white dark:bg-slate-900/85"
          }`}
        >
          <Scale className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="line-clamp-2 text-lg leading-snug font-bold text-slate-900 dark:text-white">
            {/* stretched link makes the whole card clickable */}
            <Link to={`/food/${food.id}`} className="outline-none after:absolute after:inset-0 focus-visible:underline">
              {name(food)}
            </Link>
          </h3>
          <p className="line-clamp-1 text-sm text-slate-500 dark:text-slate-400">{altName(food)}</p>
        </div>

        <div className="flex items-baseline gap-1.5">
          <strong className="text-2xl font-extrabold text-brand-600 dark:text-brand-100">{fmt(food.n.calories)}</strong>
          <span className="text-xs text-slate-500 dark:text-slate-400">{t.kcal} · {t.per100g}</span>
        </div>

        <MacroBar n={food.n} />

        <dl className="grid grid-cols-3 gap-2 text-center">
          {macros.map(([color, key]) => (
            <div key={key} className="rounded-lg bg-slate-50 px-1 py-1.5 dark:bg-slate-800/60">
              <dt className="flex items-center justify-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                <i className={`h-2 w-2 shrink-0 rounded-full ${color}`} />
                {t.short[key]}
              </dt>
              <dd className="text-sm font-semibold whitespace-nowrap">{fmt(food.n[key])} {unit(key)}</dd>
            </div>
          ))}
        </dl>

        {match ? (
          <p className="flex gap-2 rounded-lg bg-amber-50 px-2.5 py-2 text-sm text-amber-900 dark:bg-amber-500/10 dark:text-amber-200">
            <Search className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="line-clamp-3">{match[lang]}</span>
          </p>
        ) : (
          <BenefitPreview id={food.id} />
        )}

        <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-semibold text-brand-600 group-hover:underline dark:text-brand-100">
          {t.seeDetails} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}
