import { useMemo } from "react";
import { useHydrated, useSearch } from "../hooks.js";
import { Link } from "../router.jsx";
import {
  ArrowRight, BookOpen, Calculator, CalendarDays, Clock, Dumbbell, Lightbulb, Shield, Sprout, Stethoscope, Trophy, Wheat,
} from "lucide-react";
import { CATEGORIES, FOODS } from "../data/foods.js";
import { SEASON_NAMES, TIPS, inSeason } from "../data/extras.js";
import { useLang } from "../context/LangContext.jsx";
import { GOALS } from "../searchMeta.js";
import { GOAL_ICONS } from "../icons.jsx";
import { storage } from "../utils.js";
import FoodImage from "./FoodImage.jsx";

const T = {
  en: {
    goalsTitle: "Find foods for a health problem", goalsSub: "Pick a goal to see foods that may help",
    foods: "foods",
    seasonTitle: "In season now", seasonSub: "Fresh local produce for {month}",
    topTitle: "Top foods", topSub: "Per 100 g (spices & drinks excluded)",
    top: { protein: "Most protein", iron: "Most iron", calcium: "Most calcium", fiber: "Most fiber" },
    tipTitle: "Tip of the day",
    recentTitle: "Recently viewed",
    toolsTitle: "Plan your meals", toolsSub: "Free tools and guides",
    plate: ["My plate calculator", "Add what you ate and see total calories & nutrients"],
    bmi: ["BMI & calorie needs", "Find your healthy weight range and daily calories"],
    guide: ["Healthy eating guide", "Balanced plate, daily habits and myths vs facts"],
    open: "Open",
  },
  bn: {
    goalsTitle: "সমস্যা অনুযায়ী খাবার খুঁজুন", goalsSub: "একটি লক্ষ্য বাছুন — যেসব খাবার উপকারী হতে পারে তা দেখুন",
    foods: "টি খাবার",
    seasonTitle: "এখন মৌসুম", seasonSub: "{month} মাসের তাজা দেশি ফল-সবজি",
    topTitle: "সেরা তালিকা", topSub: "প্রতি ১০০ গ্রামে (মসলা ও পানীয় বাদে)",
    top: { protein: "সবচেয়ে বেশি আমিষ", iron: "সবচেয়ে বেশি আয়রন", calcium: "সবচেয়ে বেশি ক্যালসিয়াম", fiber: "সবচেয়ে বেশি আঁশ" },
    tipTitle: "আজকের টিপস",
    recentTitle: "সম্প্রতি দেখা খাবার",
    toolsTitle: "খাবারের পরিকল্পনা করুন", toolsSub: "বিনামূল্যে টুলস ও গাইড",
    plate: ["আমার প্লেট ক্যালকুলেটর", "কী খেলেন যোগ করুন — মোট ক্যালরি ও পুষ্টি দেখুন"],
    bmi: ["BMI ও ক্যালরির চাহিদা", "আপনার সুস্থ ওজনের সীমা ও দৈনিক ক্যালরি জানুন"],
    guide: ["স্বাস্থ্যকর খাবারের গাইড", "সুষম প্লেট, দৈনিক অভ্যাস ও ভুল ধারণা বনাম সত্য"],
    open: "খুলুন",
  },
};

export function SectionHeader({ icon: Icon, title, sub, action }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-700/25 dark:text-brand-100">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">{title}</h2>
          {sub && <p className="text-sm text-slate-500 dark:text-slate-400">{sub}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

/** Small photo tile linking to a food page. */
function FoodTile({ food, extra }) {
  const { name } = useLang();
  return (
    <Link
      to={`/foods/${food.id}`}
      className="group w-36 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md sm:w-40 dark:border-slate-800 dark:bg-slate-900"
    >
      <FoodImage food={food} fit="contain" className="aspect-square w-full" imgClassName="transition duration-500 group-hover:scale-105" />
      <div className="p-2.5">
        <p className="truncate text-sm font-semibold">{name(food)}</p>
        {extra && <p className="truncate text-xs text-slate-500 dark:text-slate-400">{extra}</p>}
      </div>
    </Link>
  );
}

export function HealthGoals({ onPick }) {
  const { t, lang, num } = useLang();
  const s = T[lang];
  const search = useSearch();
  const counts = useMemo(
    () => search && Object.fromEntries(Object.keys(GOALS).map(g => [g, search.searchFoods({ goals: [g] }).length])),
    [search],
  );
  return (
    <section className="mt-12">
      <SectionHeader icon={Stethoscope} title={s.goalsTitle} sub={s.goalsSub} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {Object.keys(GOALS).map(id => {
          const Icon = GOAL_ICONS[id];
          return (
            <button
              key={id}
              type="button"
              onClick={() => onPick(id)}
              className="group flex flex-col items-start gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-700/25 dark:text-brand-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-semibold leading-snug">{t.goals[id]}</span>
              {counts ? (
                <span className="text-xs text-slate-500 dark:text-slate-400">{num(counts[id])}{lang === "bn" ? s.foods : ` ${s.foods}`}</span>
              ) : (
                <span className="img-skeleton h-4 w-16 rounded" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function SeasonalNow() {
  const { lang, fill } = useLang();
  const s = T[lang];
  const hydrated = useHydrated();
  if (!hydrated) return null; // depends on today's month
  const month = new Date().getMonth() + 1;
  const foods = FOODS.filter(f => inSeason(f.id, month));
  if (!foods.length) return null;
  return (
    <section className="mt-12">
      <SectionHeader icon={CalendarDays} title={s.seasonTitle} sub={fill(s.seasonSub, { month: SEASON_NAMES[lang][month] })} />
      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
        {foods.map(f => {
          const cat = CATEGORIES.find(c => c.id === f.cat);
          return <FoodTile key={f.id} food={f} extra={cat[lang]} />;
        })}
      </div>
    </section>
  );
}

export function TopLists() {
  const { lang, fmt, unit, name } = useLang();
  const s = T[lang];
  const pool = FOODS.filter(f => f.cat !== "spices" && f.cat !== "beverages");
  const lists = [
    ["protein", Dumbbell], ["iron", Shield], ["calcium", Trophy], ["fiber", Wheat],
  ];
  return (
    <section className="mt-12">
      <SectionHeader icon={Trophy} title={s.topTitle} sub={s.topSub} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {lists.map(([key, Icon]) => {
          const top = [...pool].sort((a, b) => b.n[key] - a.n[key]).slice(0, 5);
          return (
            <div key={key} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-3 flex items-center gap-2 font-bold">
                <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" /> {s.top[key]}
              </h3>
              <ol className="space-y-2">
                {top.map((f, i) => (
                  <li key={f.id}>
                    <Link to={`/foods/${f.id}`} className="flex items-center gap-3 rounded-xl p-1 transition hover:bg-slate-50 dark:hover:bg-slate-800">
                      <span className="w-4 text-center text-xs font-bold text-slate-400">{i + 1}</span>
                      <FoodImage food={f} className="h-10 w-10 shrink-0 rounded-lg" />
                      <span className="min-w-0 flex-1 truncate text-sm font-medium">{name(f)}</span>
                      <span className="shrink-0 text-xs font-semibold text-brand-600 dark:text-brand-100">{fmt(f.n[key])} {unit(key)}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function TipOfDay() {
  const { lang } = useLang();
  const s = T[lang];
  const hydrated = useHydrated();
  if (!hydrated) return null; // depends on today's date
  const day = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const tip = TIPS[day % TIPS.length];
  return (
    <section className="mt-12 flex gap-4 rounded-3xl bg-gradient-to-br from-amber-50 to-brand-50 p-5 ring-1 ring-amber-100 sm:p-6 dark:from-amber-500/10 dark:to-brand-700/10 dark:ring-slate-800">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-400 text-white shadow-sm">
        <Lightbulb className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <h2 className="font-extrabold text-amber-900 dark:text-amber-200">{s.tipTitle}</h2>
        <p className="mt-1 leading-relaxed text-slate-700 dark:text-slate-300">{tip[lang]}</p>
      </div>
    </section>
  );
}

export function RecentlyViewed() {
  const { lang } = useLang();
  const s = T[lang];
  const hydrated = useHydrated();
  if (!hydrated) return null; // read from this browser's storage
  const foods = storage.get("recent", []).map(id => FOODS.find(f => f.id === id)).filter(Boolean);
  if (!foods.length) return null;
  return (
    <section className="mt-12">
      <SectionHeader icon={Clock} title={s.recentTitle} />
      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
        {foods.map(f => <FoodTile key={f.id} food={f} />)}
      </div>
    </section>
  );
}

export function ToolsCta() {
  const { lang } = useLang();
  const s = T[lang];
  const items = [
    ["/tools#plate", Calculator, s.plate],
    ["/tools#bmi", Sprout, s.bmi],
    ["/food-guide", BookOpen, s.guide],
  ];
  return (
    <section className="mt-12">
      <SectionHeader icon={Calculator} title={s.toolsTitle} sub={s.toolsSub} />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(([to, Icon, [title, desc]]) => (
          <Link
            key={to}
            to={to}
            className="group flex flex-col gap-3 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-5 text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Icon className="h-7 w-7" aria-hidden="true" />
            <span className="text-lg font-bold">{title}</span>
            <span className="text-sm text-white/85">{desc}</span>
            <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold">
              {s.open} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
