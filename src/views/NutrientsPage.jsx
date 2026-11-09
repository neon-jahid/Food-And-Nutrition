"use client";

import { useMemo, useState } from "react";
import { Link } from "../router.jsx";
import { ArrowRight, CircleAlert, FlaskConical, Gem, Lightbulb, Target, TriangleAlert } from "lucide-react";
import { MINERALS, VITAMINS } from "../data/micronutrients.js";
import { DEFICIENCIES } from "../data/deficiency.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import { EmptyState, FilterChips, FoodChips, PageHero, SearchInput, matches, Disclaimer, foodById } from "../components/PageKit.jsx";

const T = {
  en: {
    learn: "Learn", all: "All", role: "What it does", rda: "Daily need", sources: "Best food sources", lacking: "If you don't get enough",
    excess: "Too much", tip: "Tip", deficiency: "Read about the deficiency", none: "Nothing matches your search.",
    vitamins: {
      title: "Vitamin guide", sub: "The essential vitamins your body needs in small amounts — what each one does, how much you need and the best desi foods for it.",
      search: "Search vitamin, food or role (e.g. B12, eyes, egg)…", kinds: { fat: "Fat-soluble", water: "Water-soluble" },
      other: { to: "/nutrition/minerals", label: "Mineral guide" },
    },
    minerals: {
      title: "Mineral guide", sub: "Minerals build bones, carry oxygen and keep nerves and muscles working. Here's how to get enough from everyday food.",
      search: "Search mineral, food or role (e.g. iron, bones, dal)…", kinds: { macro: "Major minerals", trace: "Trace minerals" },
      other: { to: "/nutrition/vitamins", label: "Vitamin guide" },
    },
  },
  bn: {
    learn: "জানুন", all: "সব", role: "কী কাজ করে", rda: "দৈনিক চাহিদা", sources: "সেরা খাদ্য উৎস", lacking: "ঘাটতি হলে",
    excess: "বেশি হলে", tip: "টিপস", deficiency: "অভাবজনিত রোগ সম্পর্কে পড়ুন", none: "আপনার খোঁজার সাথে কিছু মেলেনি।",
    vitamins: {
      title: "ভিটামিন গাইড", sub: "শরীরের অল্প পরিমাণে দরকারি প্রধান ভিটামিনগুলো — কোনটির কী কাজ, কতটুকু দরকার এবং কোন দেশি খাবারে বেশি পাওয়া যায়।",
      search: "ভিটামিন, খাবার বা কাজ খুঁজুন (যেমন: বি১২, চোখ, ডিম)…", kinds: { fat: "চর্বিতে দ্রবণীয়", water: "পানিতে দ্রবণীয়" },
      other: { to: "/nutrition/minerals", label: "খনিজ গাইড" },
    },
    minerals: {
      title: "খনিজ গাইড", sub: "খনিজ হাড় গড়ে, অক্সিজেন বহন করে এবং স্নায়ু ও পেশি সচল রাখে। প্রতিদিনের খাবার থেকে কীভাবে যথেষ্ট পাবেন, জেনে নিন।",
      search: "খনিজ, খাবার বা কাজ খুঁজুন (যেমন: আয়রন, হাড়, ডাল)…", kinds: { macro: "প্রধান খনিজ", trace: "অণু খনিজ" },
      other: { to: "/nutrition/vitamins", label: "ভিটামিন গাইড" },
    },
  },
};

function NutrientCard({ n, s }) {
  const { lang } = useLang();
  const c = tone(n.tone);
  const def = DEFICIENCIES.find(d => d.nutrient === n.id);
  return (
    <article id={n.id} className="card scroll-mt-24 overflow-hidden">
      <div className="flex items-center gap-4 p-5 pb-4">
        <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-lg font-black tracking-tight shadow-sm ${c.solid}`}>{n.symbol}</span>
        <div className="min-w-0">
          <h2 className="text-lg leading-snug font-bold text-slate-900 dark:text-white">{n.name[lang]}</h2>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{s.kinds[n.kind]}</p>
        </div>
      </div>

      <div className="space-y-4 px-5 pb-5">
        <div>
          <h3 className="mb-1.5 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">{s.role}</h3>
          <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            {n.role[lang].map(r => (
              <li key={r} className="flex gap-2"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.solid}`} />{r}</li>
            ))}
          </ul>
        </div>

        <p className={`flex items-start gap-2 rounded-xl px-3 py-2 text-sm font-medium ${c.soft}`}>
          <Target className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span><span className="font-bold">{s.rda}:</span> {n.rda[lang]}</span>
        </p>

        <div>
          <h3 className="mb-2 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">{s.sources}</h3>
          <FoodChips ids={n.sources} size="sm" />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
            <p className="flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400"><CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />{s.lacking}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{n.lacking[lang]}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
            <p className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400"><TriangleAlert className="h-3.5 w-3.5" aria-hidden="true" />{s.excess}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{n.excess[lang]}</p>
          </div>
        </div>

        <p className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
          <span><span className="font-semibold text-slate-900 dark:text-white">{s.tip}:</span> {n.tip[lang]}</span>
        </p>

        {def && (
          <Link to={`/nutrition/deficiency#${def.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300">
            {s.deficiency} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}

export default function NutrientsPage({ kind }) {
  const { lang } = useLang();
  const base = T[lang];
  const s = { ...base, ...base[kind] };
  const data = kind === "vitamins" ? VITAMINS : MINERALS;
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");

  const list = useMemo(
    () => data.filter(n =>
      (filter === "all" || n.kind === filter) &&
      matches(q, n.symbol, n.name.en, n.name.bn, n.role.en, n.role.bn, n.sources.flatMap(id => [foodById(id)?.en, foodById(id)?.bn]))
    ),
    [data, filter, q]
  );

  const kinds = Object.keys(s.kinds);
  return (
    <>
      <PageHero icon={kind === "vitamins" ? FlaskConical : Gem} eyebrow={{ to: "/learn", label: s.learn }} title={s.title} sub={s.sub}>
        <div className="flex flex-col gap-4">
          <SearchInput value={q} onChange={setQ} placeholder={s.search} />
          {/* quick jump strip */}
          <div className="flex flex-wrap gap-1.5">
            {data.map(n => (
              <a key={n.id} href={`#${n.id}`} title={n.name[lang]} className={`grid h-9 min-w-9 place-items-center rounded-xl px-2 text-xs font-black transition hover:scale-105 ${tone(n.tone).soft}`}>
                {n.symbol}
              </a>
            ))}
          </div>
        </div>
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <FilterChips
          label={s.title}
          value={filter}
          onChange={setFilter}
          options={[{ id: "all", label: s.all, count: data.length }, ...kinds.map(k => ({ id: k, label: s.kinds[k], count: data.filter(n => n.kind === k).length }))]}
        />
        <div className="mt-6">
          {list.length ? (
            <div className="grid items-start gap-5 md:grid-cols-2">
              {list.map(n => <NutrientCard key={n.id} n={n} s={s} />)}
            </div>
          ) : (
            <EmptyState>{s.none}</EmptyState>
          )}
        </div>
        <Link to={s.other.to} className="card mt-10 flex items-center justify-between gap-3 p-5 font-bold text-slate-900 transition hover:border-brand-400 dark:text-white">
          {s.other.label} <ArrowRight className="h-5 w-5 text-brand-700 dark:text-brand-400" aria-hidden="true" />
        </Link>
        <Disclaimer />
      </div>
    </>
  );
}
