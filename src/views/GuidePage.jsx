"use client";

import { Link } from "../router.jsx";
import { ArrowRight, Candy, CircleCheck, CircleSlash, CircleX, CookingPot, Droplets, Footprints, Milk, PieChart, Sparkles } from "lucide-react";

const HABIT_ICONS = { Candy, CircleSlash, CookingPot, Droplets, Footprints, Milk };
import { FOODS } from "../data/foods.js";
import { HABITS, PLATE } from "../data/extras.js";
import { MYTHS } from "../data/myths.js";
import { useLang } from "../context/LangContext.jsx";
import FoodImage from "../components/FoodImage.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";

const T = {
  en: {
    title: "Healthy eating guide", sub: "Simple, practical rules for everyday Bangladeshi meals",
    plateTitle: "The balanced plate", plateSub: "How to fill your plate at lunch and dinner",
    habitsTitle: "Daily habits", habitsSub: "Small things that make a big difference",
    mythTitle: "Myths vs facts", mythSub: "Common beliefs, checked",
    myth: "Myth", fact: "Fact",
    note: "General guidance for healthy adults. Children, pregnant women, older people and anyone with a medical condition should follow advice from a doctor or nutritionist.",
  },
  bn: {
    title: "স্বাস্থ্যকর খাবারের গাইড", sub: "প্রতিদিনের দেশি খাবারের জন্য সহজ ও কার্যকর নিয়ম",
    plateTitle: "সুষম প্লেট", plateSub: "দুপুর ও রাতের খাবারে থালা কীভাবে সাজাবেন",
    habitsTitle: "দৈনিক অভ্যাস", habitsSub: "ছোট অভ্যাস, বড় পরিবর্তন",
    mythTitle: "ভুল ধারণা বনাম সত্য", mythSub: "প্রচলিত বিশ্বাস, যাচাই করে দেখা",
    myth: "ভুল ধারণা", fact: "সত্য",
    note: "সুস্থ প্রাপ্তবয়স্কদের জন্য সাধারণ নির্দেশনা। শিশু, গর্ভবতী নারী, বয়স্ক ও কোনো রোগ থাকলে চিকিৎসক বা পুষ্টিবিদের পরামর্শ মেনে চলুন।",
  },
};

function PlateChart() {
  let acc = 0;
  const stops = PLATE.map(p => {
    const from = acc;
    acc += p.pct;
    return `${p.color} ${from}% ${acc}%`;
  }).join(", ");
  return (
    <div className="relative mx-auto aspect-square w-64 max-w-full rounded-full p-3 shadow-xl ring-8 ring-slate-100 dark:ring-slate-800" style={{ background: `conic-gradient(${stops})` }}>
      <div className="absolute inset-[30%] rounded-full bg-white shadow-inner dark:bg-slate-900" />
    </div>
  );
}

export default function GuidePage() {
  const { lang, name, num } = useLang();
  const s = T[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header>
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">{s.title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{s.sub}</p>
      </header>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 dark:border-slate-800 dark:bg-slate-900">
        <SectionHeader icon={PieChart} title={s.plateTitle} sub={s.plateSub} />
        <div className="grid items-center gap-8 lg:grid-cols-[18rem_1fr]">
          <PlateChart />
          <ul className="grid gap-3 sm:grid-cols-2">
            {PLATE.map(p => (
              <li key={p.key} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="flex items-center gap-2 font-bold">
                  <span className="h-3 w-3 rounded-full" style={{ background: p.color }} />
                  {p[lang][0]} <span className="ml-auto text-sm text-slate-400">~{num(p.pct)}%</span>
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p[lang][1]}</p>
                <div className="mt-3 flex gap-2">
                  {p.foods.map(id => {
                    const f = FOODS.find(x => x.id === id);
                    return (
                      <Link key={id} to={`/foods/${id}`} title={name(f)} className="block">
                        <FoodImage food={f} className="h-12 w-12 rounded-lg ring-2 ring-white transition hover:scale-110 dark:ring-slate-900" />
                      </Link>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 dark:border-slate-800 dark:bg-slate-900">
        <SectionHeader icon={Sparkles} title={s.habitsTitle} sub={s.habitsSub} />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {HABITS.map(h => {
            const Icon = HABIT_ICONS[h.icon] || Sparkles;
            return (
              <li key={h.icon} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm dark:bg-slate-900 dark:text-brand-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-medium">{h[lang]}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-8">
        <SectionHeader icon={CircleCheck} title={s.mythTitle} sub={s.mythSub} />
        <div className="grid gap-4 md:grid-cols-2">
          {MYTHS.slice(0, 4).map((m, i) => (
            <article key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <p className="flex gap-2 bg-red-50 px-4 py-3 font-semibold text-red-800 dark:bg-red-500/10 dark:text-red-300">
                <CircleX className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span><span className="text-xs tracking-wide uppercase opacity-70">{s.myth}: </span>{m.myth[lang]}</span>
              </p>
              <p className="flex gap-2 px-4 py-3 text-slate-700 dark:text-slate-300">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                <span><span className="text-xs font-semibold tracking-wide text-brand-600 uppercase">{s.fact}: </span>{m.fact[lang]}</span>
              </p>
            </article>
          ))}
        </div>
        <Link to="/food-myths" className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline dark:text-brand-300">
          {lang === "bn" ? `সবগুলো ${num(MYTHS.length)}টি ভুল ধারণা দেখুন` : `See all ${MYTHS.length} myths`} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      <p className="mt-8 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-400">{s.note}</p>
    </div>
  );
}
