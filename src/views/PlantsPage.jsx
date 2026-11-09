"use client";

import { useMemo, useState } from "react";
import { Link, useSearchParams } from "../router.jsx";
import { useHydrated } from "../hooks.js";
import { ArrowRight, HandHeart, Leaf, Sprout } from "lucide-react";
import { PLANTS, PLANT_TAGS } from "../data/plants.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import PlantImage from "../components/PlantImage.jsx";
import { Disclaimer, EmptyState, FilterChips, PageHero, SearchInput, matches } from "../components/PageKit.jsx";

const T = {
  en: {
    title: "Medicinal plants", sub: "Herbs and plants used in Bangladeshi homes for generations — what they're used for, how to use them and when to be careful.",
    learn: "Learn", search: "Search plant or use (e.g. tulsi, cough, skin)…", parts: "Parts used", uses: "Traditionally used for",
    how: "How to use", cautions: "Cautions", more: "Full details, how to use & cautions", less: "Show less", nutrition: "Nutrition facts",
    none: "No plant matches your search.", all: "All", count: "{n} plants",
    note: "Herbal remedies can interact with medicines and are not a replacement for treatment. Pregnant or breastfeeding women, children and anyone on regular medicine should ask a doctor before using herbs in medicinal amounts.",
  },
  bn: {
    title: "ঔষধি গাছ", sub: "প্রজন্মের পর প্রজন্ম ধরে বাংলাদেশের ঘরে ব্যবহৃত ভেষজ — কী কাজে লাগে, কীভাবে ব্যবহার করবেন এবং কখন সাবধান থাকবেন।",
    learn: "জানুন", search: "গাছ বা ব্যবহার খুঁজুন (যেমন: তুলসী, কাশি, ত্বক)…", parts: "ব্যবহৃত অংশ", uses: "প্রচলিত ব্যবহার",
    how: "কীভাবে ব্যবহার করবেন", cautions: "সতর্কতা", more: "বিস্তারিত, ব্যবহারবিধি ও সতর্কতা", less: "কম দেখুন", nutrition: "পুষ্টি তথ্য",
    none: "আপনার খোঁজার সাথে কোনো গাছ মেলেনি।", all: "সব", count: "{n}টি গাছ",
    note: "ভেষজ ওষুধের সাথে প্রতিক্রিয়া করতে পারে এবং এটি চিকিৎসার বিকল্প নয়। গর্ভবতী বা স্তন্যদানকারী মা, শিশু এবং নিয়মিত ওষুধ খান এমন যে কেউ ওষুধ হিসেবে ভেষজ ব্যবহারের আগে চিকিৎসকের পরামর্শ নিন।",
  },
};

function PlantCard({ p }) {
  const { lang } = useLang();
  const s = T[lang];
  const c = tone(p.tone);

  return (
    <article id={p.id} data-reveal className="card group relative flex scroll-mt-24 flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <PlantImage plant={p} alt={p.name[lang]} className="aspect-[16/10] w-full transition duration-500 group-hover:scale-105" />
        <div className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${c.bar}`} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg leading-snug font-bold text-slate-900 dark:text-white">
          {/* stretched link: the whole card opens the plant's page */}
          <Link to={`/plants/${p.id}`} className="after:absolute after:inset-0 group-hover:text-brand-700 dark:group-hover:text-brand-300">{p.name[lang]}</Link>
        </h2>
        <p className="text-sm text-slate-500 italic dark:text-slate-400">{p.sci}</p>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.summary[lang]}</p>

        <p className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <Sprout className="h-3.5 w-3.5" aria-hidden="true" /> {s.parts}: {p.parts[lang]}
        </p>

        <h3 className="mt-4 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white">
          <HandHeart className="h-4 w-4 text-brand-600 dark:text-brand-300" aria-hidden="true" /> {s.uses}
        </h3>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          {p.uses[lang].slice(0, 3).map(u => (
            <li key={u} className="flex gap-2">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${c.bar}`} />
              {u}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-700 dark:text-brand-300">
          {s.more} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}

export default function PlantsPage() {
  const { lang, fill } = useLang();
  const s = T[lang];
  const [q, setQ] = useState("");
  const [urlParams, setParams] = useSearchParams();
  const params = useHydrated() ? urlParams : new URLSearchParams();
  const tag = PLANT_TAGS.some(t => t.id === params.get("tag")) ? params.get("tag") : "all";
  const setTag = id => setParams(id === "all" ? {} : { tag: id }, { replace: true, preventScrollReset: true });
  const list = useMemo(
    () => PLANTS.filter(p =>
      (tag === "all" || p.tags?.includes(tag)) &&
      matches(q, p.name.en, p.name.bn, p.sci, p.uses.en, p.uses.bn, p.summary.en, p.summary.bn)
    ),
    [q, tag]
  );

  return (
    <>
      <PageHero icon={Leaf} eyebrow={{ to: "/learn", label: s.learn }} title={s.title} sub={s.sub}>
        <div className="flex flex-wrap items-center gap-3">
          <SearchInput value={q} onChange={setQ} placeholder={s.search} />
          <span className="text-sm text-slate-500 dark:text-slate-400">{fill(s.count, { n: list.length })}</span>
        </div>
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <FilterChips
          label={s.title}
          value={tag}
          onChange={setTag}
          options={[
            { id: "all", label: s.all, count: PLANTS.length },
            ...PLANT_TAGS.map(t => ({ id: t.id, label: t[lang], count: PLANTS.filter(p => p.tags?.includes(t.id)).length })).filter(o => o.count),
          ]}
        />
        <div className="mt-6" />
        {list.length ? (
          <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map(p => <PlantCard key={p.id} p={p} />)}
          </div>
        ) : (
          <EmptyState>{s.none}</EmptyState>
        )}
        <Disclaimer>{s.note}</Disclaimer>
      </div>
    </>
  );
}
