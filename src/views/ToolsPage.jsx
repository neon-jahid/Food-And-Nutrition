"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useDismiss, usePersistentState, useSearch } from "../hooks.js";

const BMI_DEFAULTS = { sex: "male", age: 30, weight: 65, height: 165, act: 1 };
import { Link, useLocation } from "../router.jsx";
import { Activity, Calculator, Plus, Ruler, Search, Trash2 } from "lucide-react";
import { DAILY_VALUES, FOODS } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import { NUTRIENT_KEYS } from "../utils.js";
import { MacroBar, MacroLegend } from "../components/MacroBar.jsx";
import FoodImage from "../components/FoodImage.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";

const T = {
  en: {
    title: "Nutrition tools", sub: "Simple calculators to plan healthy meals",
    plateTitle: "My plate calculator", plateSub: "Add foods and amounts — see the total for the meal or the whole day",
    add: "Add a food…", empty: "Your plate is empty. Search above and add foods (e.g. rice, dal, rui, egg).",
    food: "Food", amount: "Amount", clear: "Clear plate", total: "Total", ofDaily: "of daily value",
    bmiTitle: "BMI & daily calorie needs", bmiSub: "Uses Asian BMI cut-offs and the Mifflin-St Jeor equation",
    sex: "Sex", male: "Male", female: "Female", age: "Age (years)", weight: "Weight (kg)", height: "Height (cm)",
    activity: "Activity level",
    levels: ["Mostly sitting", "Light (walk 1–3 days/week)", "Moderate (3–5 days/week)", "Active (6–7 days/week)", "Very active / physical work"],
    bmi: "BMI", calories: "Calories per day", maintain: "to maintain weight", lose: "to lose ~0.5 kg/week",
    protein: "Protein", water: "Water", perDay: "per day", healthyRange: "Healthy weight for your height",
    cats: ["Underweight", "Healthy", "Overweight", "Obese"],
    adultsOnly: "These formulas are for adults (18 and over). Children need growth charts instead.", childGuide: "See the child nutrition guide",
    note: "Estimates only — needs differ with health conditions, pregnancy and age. Ask a doctor or nutritionist for a personal plan.",
  },
  bn: {
    title: "পুষ্টি টুলস", sub: "স্বাস্থ্যকর খাবার পরিকল্পনার সহজ ক্যালকুলেটর",
    plateTitle: "আমার প্লেট ক্যালকুলেটর", plateSub: "খাবার ও পরিমাণ যোগ করুন — এক বেলা বা সারা দিনের মোট পুষ্টি দেখুন",
    add: "খাবার যোগ করুন…", empty: "আপনার প্লেট খালি। উপরে খুঁজে খাবার যোগ করুন (যেমন: ভাত, ডাল, রুই, ডিম)।",
    food: "খাবার", amount: "পরিমাণ", clear: "প্লেট খালি করুন", total: "মোট", ofDaily: "দৈনিক চাহিদার",
    bmiTitle: "BMI ও দৈনিক ক্যালরির চাহিদা", bmiSub: "এশীয়দের BMI সীমা ও Mifflin-St Jeor সূত্র অনুযায়ী",
    sex: "লিঙ্গ", male: "পুরুষ", female: "নারী", age: "বয়স (বছর)", weight: "ওজন (কেজি)", height: "উচ্চতা (সেমি)",
    activity: "দৈনিক কাজের মাত্রা",
    levels: ["বেশিরভাগ সময় বসে থাকি", "হালকা (সপ্তাহে ১–৩ দিন হাঁটা)", "মাঝারি (সপ্তাহে ৩–৫ দিন)", "সক্রিয় (সপ্তাহে ৬–৭ দিন)", "খুব সক্রিয় / শারীরিক পরিশ্রম"],
    bmi: "BMI", calories: "দৈনিক ক্যালরি", maintain: "ওজন ঠিক রাখতে", lose: "সপ্তাহে ~০.৫ কেজি কমাতে",
    protein: "আমিষ", water: "পানি", perDay: "প্রতিদিন", healthyRange: "আপনার উচ্চতায় সুস্থ ওজন",
    cats: ["কম ওজন", "সুস্থ ওজন", "অতিরিক্ত ওজন", "স্থূলতা"],
    adultsOnly: "এই হিসাবগুলো প্রাপ্তবয়স্কদের (১৮ বছর ও তার বেশি) জন্য। শিশুদের জন্য গ্রোথ চার্ট দেখতে হয়।", childGuide: "শিশুর পুষ্টি গাইড দেখুন",
    note: "এগুলো আনুমানিক হিসাব — রোগ, গর্ভাবস্থা ও বয়সভেদে চাহিদা আলাদা। ব্যক্তিগত পরিকল্পনার জন্য চিকিৎসক বা পুষ্টিবিদের পরামর্শ নিন।",
  },
};

// typed amounts aren't limited by the input's min and max attributes
const clampG = g => Math.min(2000, Math.max(0, Number(g) || 0));

const field = "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-slate-700 dark:bg-slate-950";

function PlateCalculator() {
  const { t, lang, num, fmt, unit, name } = useLang();
  const s = T[lang];
  const [items, setItems] = usePersistentState("plate", [], v => (Array.isArray(v) ? v.filter(x => FOODS.some(f => f.id === x?.id)) : []));
  const [q, setQ] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const searchRef = useRef(null);
  useDismiss(searchRef, listOpen, () => setListOpen(false));

  const search = useSearch(q.trim() !== "");
  const results = useMemo(() => (search ? search.suggest(q, 6) : []), [search, q]);
  const add = id => {
    setItems(list => (list.some(x => x.id === id) ? list : [...list, { id, g: 100 }]));
    setQ("");
  };
  const setG = (id, g) => setItems(list => list.map(x => (x.id === id ? { ...x, g } : x)));

  const totals = useMemo(() => {
    const out = Object.fromEntries(NUTRIENT_KEYS.map(k => [k, 0]));
    items.forEach(({ id, g }) => {
      const f = FOODS.find(x => x.id === id);
      NUTRIENT_KEYS.forEach(k => (out[k] += (f.n[k] * clampG(g)) / 100));
    });
    return out;
  }, [items]);

  return (
    <section id="plate" className="scroll-mt-20 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 dark:border-slate-800 dark:bg-slate-900">
      <SectionHeader icon={Calculator} title={s.plateTitle} sub={s.plateSub} />

      <div ref={searchRef} className="relative max-w-xl">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-400" aria-hidden="true" />
          <input value={q} aria-label={s.add} onChange={e => { setQ(e.target.value); setListOpen(true); }} onFocus={() => setListOpen(true)} onKeyDown={e => e.key === "Escape" && setListOpen(false)} placeholder={s.add} className={`${field} pl-9`} />
        </div>
        {q && listOpen && results.length > 0 && (
          <ul className="absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
            {results.map(r => (
              <li key={r.food.id}>
                <button type="button" onClick={() => add(r.food.id)} className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-brand-50 dark:hover:bg-slate-800">
                  <FoodImage food={r.food} className="h-9 w-9 shrink-0 rounded-lg" />
                  <span className="flex-1 truncate">{name(r.food)}</span>
                  <Plus className="h-4 w-4 text-brand-700 dark:text-brand-400" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {items.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-500 dark:border-slate-700">{s.empty}</p>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <ul className="space-y-2 lg:col-span-2">
            {items.map(({ id, g }) => {
              const f = FOODS.find(x => x.id === id);
              return (
                <li key={id} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-2 dark:border-slate-700">
                  <FoodImage food={f} className="h-12 w-12 shrink-0 rounded-xl" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{name(f)}</p>
                    <p className="text-xs text-slate-500">{fmt((f.n.calories * clampG(g)) / 100)} {t.kcal}</p>
                  </div>
                  <input
                    type="number" min="0" max="2000" value={g} aria-label={`${s.amount} ${name(f)}`}
                    onChange={e => setG(id, e.target.value)}
                    className="w-20 rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950"
                  />
                  <span className="text-sm text-slate-500">{t.grams}</span>
                  <button type="button" onClick={() => setItems(list => list.filter(x => x.id !== id))} aria-label={`${t.removeCompare} ${name(f)}`} className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 dark:text-slate-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10">
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
            <li>
              <button type="button" onClick={() => setItems([])} className="mt-1 text-sm font-semibold text-red-500 hover:underline">{s.clear}</button>
            </li>
          </ul>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
              <p className="text-sm text-slate-500">{s.total}</p>
              <p className="text-4xl font-extrabold text-brand-700 dark:text-brand-100">
                {fmt(totals.calories)} <span className="text-base font-medium text-slate-500">{t.kcal}</span>
              </p>
              <p className="text-xs text-slate-500">{num(Math.round((totals.calories / DAILY_VALUES.calories) * 100))}% {s.ofDaily}</p>
              <MacroBar n={totals} className="mt-4 h-3" />
              <MacroLegend n={totals} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {NUTRIENT_KEYS.filter(k => k !== "calories").map(k => {
                const pct = (totals[k] / DAILY_VALUES[k]) * 100;
                return (
                  <div key={k} className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                    <p className="text-xs text-slate-500">{t.short[k]}</p>
                    <p className="font-bold">{fmt(totals[k])} <span className="text-xs font-normal">{unit(k)}</span></p>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <span className={`block h-full rounded-full ${k === "sugar" ? "bg-amber-500" : "bg-brand-500"}`} style={{ width: `${Math.min(pct, 100)}%` }} />
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{num(Math.round(pct))}%</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const ACTIVITY = [1.2, 1.375, 1.55, 1.725, 1.9];

function BmiCalculator() {
  const { lang, num, fmt } = useLang();
  const s = T[lang];
  const [form, setForm] = usePersistentState("bmi", BMI_DEFAULTS, v => ({ ...BMI_DEFAULTS, ...(v && typeof v === "object" ? v : {}) }));
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const w = Number(form.weight), h = Number(form.height), a = Number(form.age);
  const valid = w > 20 && w < 300 && h > 100 && h < 250 && a >= 18 && a < 110;
  const m = h / 100;
  // rounded first, so the category always agrees with the number on screen
  const bmi = valid ? Math.round((w / (m * m)) * 10) / 10 : 0;
  // WHO cut-offs for Asian populations
  const catIdx = bmi < 18.5 ? 0 : bmi < 23 ? 1 : bmi < 27.5 ? 2 : 3;
  const catColor = ["text-sky-600", "text-brand-700 dark:text-brand-400", "text-amber-600", "text-red-600"][catIdx];
  const bmr = 10 * w + 6.25 * h - 5 * a + (form.sex === "male" ? 5 : -161);
  const tdee = bmr * ACTIVITY[form.act];

  return (
    <section id="bmi" className="scroll-mt-20 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 dark:border-slate-800 dark:bg-slate-900">
      <SectionHeader icon={Ruler} title={s.bmiTitle} sub={s.bmiSub} />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          <div role="group" aria-label={s.sex} className="col-span-2 text-sm font-semibold">
            {s.sex}
            <div className="mt-1 grid grid-cols-2 gap-2">
              {["male", "female"].map(x => (
                <button key={x} type="button" onClick={() => set("sex", x)} aria-pressed={form.sex === x}
                  className={`rounded-xl border px-3 py-2 font-medium ${form.sex === x ? "border-brand-500 bg-brand-500 text-white" : "border-slate-200 dark:border-slate-700"}`}>
                  {s[x]}
                </button>
              ))}
            </div>
          </div>
          {[["age", s.age], ["weight", s.weight], ["height", s.height]].map(([k, label]) => (
            <label key={k} className={`text-sm font-semibold ${k === "age" ? "col-span-2 sm:col-span-1" : ""}`}>
              {label}
              <input type="number" value={form[k]} onChange={e => set(k, e.target.value)} className={`${field} mt-1 font-normal`} />
            </label>
          ))}
          <label className="col-span-2 text-sm font-semibold">
            {s.activity}
            <select value={form.act} onChange={e => set("act", Number(e.target.value))} className={`${field} mt-1 font-normal`}>
              {s.levels.map((l, i) => <option key={i} value={i}>{l}</option>)}
            </select>
          </label>
        </div>

        {!valid && a > 0 && a < 18 && (
          <p className="self-start rounded-2xl bg-slate-50 p-5 text-sm text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
            {s.adultsOnly} <Link to="/child-nutrition" className="font-semibold text-brand-700 underline dark:text-brand-300">{s.childGuide}</Link>
          </p>
        )}
        {valid && (
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
              <p className="text-sm text-slate-500">{s.bmi}</p>
              <p className={`text-4xl font-extrabold ${catColor}`}>{fmt(bmi)} <span className="text-lg">· {s.cats[catIdx]}</span></p>
              <div className="relative mt-3 flex h-2 overflow-hidden rounded-full">
                <span className="w-[22%] bg-sky-400" /><span className="w-[18%] bg-brand-500" /><span className="w-[18%] bg-amber-400" /><span className="flex-1 bg-red-500" />
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {s.healthyRange}: <strong>{num(Math.round(18.5 * m * m))}–{num(Math.round(22.9 * m * m))}</strong> {lang === "bn" ? "কেজি" : "kg"}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <p className="flex items-center gap-1.5 text-sm text-slate-500"><Activity className="h-4 w-4" aria-hidden="true" /> {s.calories}</p>
              <p className="text-2xl font-extrabold">{num(Math.round(tdee / 10) * 10)}</p>
              <p className="text-xs text-slate-500">{s.maintain}</p>
              {/* a weight-loss target makes no sense when it would be under 1,200 kcal or the person is underweight */}
              {tdee - 500 >= 1200 && bmi >= 18.5 && (
                <>
                  <p className="mt-2 text-lg font-bold text-brand-700 dark:text-brand-100">{num(Math.round((tdee - 500) / 10) * 10)}</p>
                  <p className="text-xs text-slate-500">{s.lose}</p>
                </>
              )}
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <div>
                <p className="text-sm text-slate-500">{s.protein}</p>
                <p className="text-xl font-bold">{num(Math.round(w * 0.8))}–{num(Math.round(w * 1))} {lang === "bn" ? "গ্রাম" : "g"}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">{s.water}</p>
                <p className="text-xl font-bold">{fmt(Math.round(w * 0.033 * 10) / 10)} {lang === "bn" ? "লিটার" : "L"}</p>
              </div>
              <p className="text-xs text-slate-500">{s.perDay}</p>
            </div>
          </div>
        )}
      </div>
      <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">{s.note}</p>
    </section>
  );
}

export default function ToolsPage() {
  const { lang } = useLang();
  const s = T[lang];
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }));
  }, [hash]);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <header>
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">{s.title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{s.sub}</p>
      </header>
      <PlateCalculator />
      <BmiCalculator />
    </div>
  );
}
