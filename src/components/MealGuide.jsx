import { useEffect, useState } from "react";
import { useHydrated } from "../hooks.js";
import { Link } from "../router.jsx";
import { ArrowRight, Ban, CircleCheck, Clock, Coffee, Flame, Lightbulb, MoonStar, Sun, Sunrise } from "lucide-react";
import { MEALS, currentMeal } from "../data/meals.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import FoodImage from "./FoodImage.jsx";
import { foodById } from "./PageKit.jsx";

export const MEAL_ICONS = { breakfast: Sunrise, lunch: Sun, snack: Coffee, dinner: MoonStar };

const T = {
  en: { now: "Now", plates: "Good plate ideas", good: "Include", avoid: "Limit", tip: "Tip", kcal: "kcal", more: "Full meal guide" },
  bn: { now: "এখন", plates: "ভালো খাবারের উদাহরণ", good: "রাখুন", avoid: "কমান", tip: "টিপস", kcal: "ক্যালরি", more: "পুরো খাবার গাইড" },
};

function PlateCard({ plate, hide }) {
  const { lang, num } = useLang();
  const foods = plate.foods.map(foodById).filter(Boolean);
  return (
    <li className={`group items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-3 transition hover:border-brand-300 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800/40 ${hide ? "hidden sm:flex" : "flex"}`}>
      <div className="flex shrink-0 -space-x-3">
        {foods.slice(0, 3).map(f => (
          <Link key={f.id} to={`/foods/${f.id}`} title={f[lang]} className="block rounded-full ring-2 ring-white transition hover:z-10 hover:scale-110 dark:ring-slate-900">
            <FoodImage food={f} className="h-11 w-11 rounded-full" />
          </Link>
        ))}
      </div>
      <div className="min-w-0">
        <p className="text-sm leading-snug font-semibold text-slate-800 dark:text-slate-100">{plate.name[lang]}</p>
        <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <Flame className="h-3 w-3 text-orange-500" aria-hidden="true" /> ~{num(plate.kcal)} {T[lang].kcal}
        </p>
      </div>
    </li>
  );
}

/** Time-of-day meal guide with tabs. `compact` hides the long lists (home page). */
export default function MealGuide({ compact = false, initial }) {
  const { lang } = useLang();
  const s = T[lang];
  const hydrated = useHydrated();
  const nowId = hydrated ? currentMeal().id : null;
  const valid = MEALS.some(m => m.id === initial);
  const [active, setActive] = useState(valid ? initial : MEALS[0].id);
  // once we know the visitor's clock, open the meal for "now" (unless a specific one was requested)
  useEffect(() => { if (hydrated && !valid) setActive(currentMeal().id); }, [hydrated, valid]);
  const meal = MEALS.find(m => m.id === active);
  const c = tone(meal.tone);
  const Icon = MEAL_ICONS[meal.id];

  return (
    <div className="card overflow-hidden">
      {/* tabs */}
      <div role="tablist" aria-label={s.plates} className="grid grid-cols-2 gap-1 border-b border-slate-100 bg-slate-50/70 p-1.5 sm:grid-cols-4 dark:border-slate-800 dark:bg-slate-950/30">
        {MEALS.map(m => {
          const TabIcon = MEAL_ICONS[m.id];
          const on = m.id === active;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              id={`meal-tab-${m.id}`}
              aria-selected={on}
              aria-controls="meal-panel"
              onClick={() => setActive(m.id)}
              className={`flex min-w-0 items-center gap-2 rounded-2xl px-2.5 py-2 text-left transition sm:gap-2.5 sm:px-3 sm:py-2.5 ${
                on ? "bg-white shadow-sm dark:bg-slate-900" : "hover:bg-white/60 dark:hover:bg-slate-900/50"
              }`}
            >
              <span className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-xl sm:h-9 sm:w-9 ${on ? tone(m.tone).solid : tone(m.tone).soft}`}>
                <TabIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
                {m.id === nowId && <span className="absolute -top-1 -right-1 h-2.5 w-2.5 animate-pulse rounded-full bg-brand-500 ring-2 ring-white dark:ring-slate-900" aria-hidden="true" />}
              </span>
              <span className="min-w-0">
                <span className={`block truncate text-[13px] font-bold sm:text-sm ${on ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"}`}>{m.name[lang]}</span>
                <span className="block truncate text-[11px] text-slate-500 dark:text-slate-400">
                  {m.id === nowId && <span className="font-bold text-brand-600 dark:text-brand-300">{s.now} · </span>}
                  {m.time[lang]}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div id="meal-panel" role="tabpanel" aria-labelledby={`meal-tab-${meal.id}`} key={meal.id} className="animate-pop p-4 sm:p-6">
        <div className="flex flex-wrap items-start gap-4">
          <span className={`h-14 w-14 shrink-0 place-items-center rounded-2xl ${c.soft} ${compact ? "hidden sm:grid" : "grid"}`}>
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{meal.name[lang]}</h3>
            <p className="mt-0.5 flex flex-wrap gap-x-3 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{meal.time[lang]}</span>
              <span>{meal.share[lang]}</span>
            </p>
            <p className={`mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 ${compact ? "hidden sm:block" : ""}`}>{meal.why[lang]}</p>
          </div>
        </div>

        <h4 className="mt-4 mb-3 text-xs sm:mt-5 font-semibold tracking-wide text-slate-400 uppercase">{s.plates}</h4>
        <ul className="grid gap-3 sm:grid-cols-2">
          {meal.plates.map((p, i) => <PlateCard key={p.name.en} plate={p} hide={compact && i > 1} />)}
        </ul>

        {!compact && (
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl bg-brand-50/70 p-4 dark:bg-brand-500/10">
              <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-brand-700 dark:text-brand-300"><CircleCheck className="h-4 w-4" aria-hidden="true" />{s.good}</h4>
              <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                {meal.good[lang].map(x => <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{x}</li>)}
              </ul>
            </section>
            <section className="rounded-2xl bg-red-50/70 p-4 dark:bg-red-500/10">
              <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-red-700 dark:text-red-300"><Ban className="h-4 w-4" aria-hidden="true" />{s.avoid}</h4>
              <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                {meal.avoid[lang].map(x => <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />{x}</li>)}
              </ul>
            </section>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className={`gap-2 text-sm text-slate-700 dark:text-slate-300 ${compact ? "hidden sm:flex" : "flex"}`}>
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
            <span><span className="font-bold text-slate-900 dark:text-white">{s.tip}: </span>{meal.tip[lang]}</span>
          </p>
          {compact && (
            <Link to={`/food-guide/meal-times#${meal.id}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300">
              {s.more} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
