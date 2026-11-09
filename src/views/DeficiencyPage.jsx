"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "../router.jsx";
import { ArrowRight, ChevronDown, ShieldCheck, Stethoscope, UserRound, Utensils } from "lucide-react";
import { DEFICIENCIES } from "../data/deficiency.js";
import { MINERALS, VITAMINS } from "../data/micronutrients.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import { Disclaimer, FoodChips, PageHero } from "../components/PageKit.jsx";

const T = {
  en: {
    title: "Deficiency guide", sub: "Common nutrient deficiencies in Bangladesh — the warning signs, who is most at risk and the everyday foods that help prevent them.",
    learn: "Learn", symptoms: "Signs & symptoms", atRisk: "Who is at risk", foods: "Foods that help", prevent: "How to prevent it",
    doctor: "See a doctor", nutrient: "Learn about", expandAll: "Expand all", collapseAll: "Collapse all",
  },
  bn: {
    title: "অভাবজনিত রোগ গাইড", sub: "বাংলাদেশে প্রচলিত পুষ্টির ঘাটতি — সতর্কসংকেত, কারা বেশি ঝুঁকিতে এবং কোন প্রতিদিনের খাবার এগুলো প্রতিরোধে সাহায্য করে।",
    learn: "জানুন", symptoms: "লক্ষণ ও উপসর্গ", atRisk: "কারা ঝুঁকিতে", foods: "উপকারী খাবার", prevent: "কীভাবে প্রতিরোধ করবেন",
    doctor: "চিকিৎসকের কাছে যান", nutrient: "আরও জানুন", expandAll: "সব খুলুন", collapseAll: "সব বন্ধ করুন",
  },
};

const NUTRIENTS = [...VITAMINS.map(v => ({ ...v, page: "/nutrition/vitamins" })), ...MINERALS.map(m => ({ ...m, page: "/nutrition/minerals" }))];

function List({ items, dot }) {
  return (
    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
      {items.map(x => (
        <li key={x} className="flex gap-2"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />{x}</li>
      ))}
    </ul>
  );
}

function DeficiencyItem({ d, open, onToggle }) {
  const { lang } = useLang();
  const s = T[lang];
  const c = tone(d.tone);
  const nutrient = NUTRIENTS.find(n => n.id === d.nutrient);

  return (
    <article id={d.id} className={`card scroll-mt-24 overflow-hidden transition ${open ? `ring-2 ${c.ring}` : ""}`}>
      <h2>
        <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={`${d.id}-panel`} className="flex w-full items-center gap-4 p-5 text-left">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-sm font-black ${c.solid}`}>
            {nutrient?.symbol || <Utensils className="h-5 w-5" aria-hidden="true" />}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-lg leading-snug font-bold text-slate-900 dark:text-white">{d.name[lang]}</span>
            <span className={`block text-sm text-slate-500 dark:text-slate-400 ${open ? "" : "line-clamp-1"}`}>{d.summary[lang]}</span>
          </span>
          <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </h2>

      {open && (
        <div id={`${d.id}-panel`} className="animate-pop border-t border-slate-100 p-5 dark:border-slate-800">
          <div className="grid gap-5 md:grid-cols-2">
            <section>
              <h3 className="mb-2 flex items-center gap-1.5 font-bold text-slate-900 dark:text-white"><Stethoscope className="h-4 w-4 text-red-500" aria-hidden="true" />{s.symptoms}</h3>
              <List items={d.symptoms[lang]} dot="bg-red-400" />
            </section>
            <section>
              <h3 className="mb-2 flex items-center gap-1.5 font-bold text-slate-900 dark:text-white"><UserRound className="h-4 w-4 text-amber-500" aria-hidden="true" />{s.atRisk}</h3>
              <List items={d.atRisk[lang]} dot="bg-amber-400" />
            </section>
            <section>
              <h3 className="mb-2 flex items-center gap-1.5 font-bold text-slate-900 dark:text-white"><ShieldCheck className="h-4 w-4 text-brand-700 dark:text-brand-400" aria-hidden="true" />{s.prevent}</h3>
              <List items={d.prevent[lang]} dot="bg-brand-500" />
            </section>
            <section>
              <h3 className="mb-2 flex items-center gap-1.5 font-bold text-slate-900 dark:text-white"><Utensils className="h-4 w-4 text-sky-500" aria-hidden="true" />{s.foods}</h3>
              <FoodChips ids={d.foods} />
            </section>
          </div>
          <p className="mt-5 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white">{s.doctor}: </span>{d.doctor[lang]}
          </p>
          {nutrient && (
            <Link to={`${nutrient.page}#${nutrient.id}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300">
              {s.nutrient}: {nutrient.name[lang]} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      )}
    </article>
  );
}

export default function DeficiencyPage() {
  const { lang } = useLang();
  const s = T[lang];
  const { hash } = useLocation();
  const [open, setOpen] = useState(() => new Set([DEFICIENCIES[0]?.id]));

  // following a link like /deficiency#anemia opens that item
  useEffect(() => {
    const id = hash.slice(1);
    if (id) setOpen(prev => new Set(prev).add(id));
  }, [hash]);

  const toggle = id => setOpen(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const allOpen = open.size >= DEFICIENCIES.length;

  return (
    <>
      <PageHero icon={Stethoscope} eyebrow={{ to: "/learn", label: s.learn }} title={s.title} sub={s.sub} />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => setOpen(allOpen ? new Set() : new Set(DEFICIENCIES.map(d => d.id)))}
            className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-semibold text-slate-600 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300"
          >
            {allOpen ? s.collapseAll : s.expandAll}
          </button>
        </div>
        <div className="space-y-4">
          {DEFICIENCIES.map(d => <DeficiencyItem key={d.id} d={d} open={open.has(d.id)} onToggle={() => toggle(d.id)} />)}
        </div>
        <Disclaimer />
      </div>
    </>
  );
}
