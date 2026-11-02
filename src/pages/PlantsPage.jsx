import { useMemo, useState } from "react";
import { Link, useSearchParams } from "../router.jsx";
import { useHydrated } from "../hooks.js";
import { ArrowUpRight, ChevronDown, HandHeart, Leaf, ShieldAlert, Sprout } from "lucide-react";
import { PLANTS, PLANT_TAGS } from "../data/plants.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import FoodImage from "../components/FoodImage.jsx";
import { Disclaimer, EmptyState, FilterChips, PageHero, SearchInput, foodById, matches } from "../components/PageKit.jsx";

const T = {
  en: {
    title: "Medicinal plants", sub: "Herbs and plants used in Bangladeshi homes for generations — what they're used for, how to use them and when to be careful.",
    learn: "Learn", search: "Search plant or use (e.g. tulsi, cough, skin)…", parts: "Parts used", uses: "Traditionally used for",
    how: "How to use", cautions: "Cautions", more: "How to use & cautions", less: "Show less", nutrition: "Nutrition facts",
    none: "No plant matches your search.", all: "All", count: "{n} plants",
    note: "Herbal remedies can interact with medicines and are not a replacement for treatment. Pregnant or breastfeeding women, children and anyone on regular medicine should ask a doctor before using herbs in medicinal amounts.",
  },
  bn: {
    title: "ঔষধি গাছ", sub: "প্রজন্মের পর প্রজন্ম ধরে বাংলাদেশের ঘরে ব্যবহৃত ভেষজ — কী কাজে লাগে, কীভাবে ব্যবহার করবেন এবং কখন সাবধান থাকবেন।",
    learn: "জানুন", search: "গাছ বা ব্যবহার খুঁজুন (যেমন: তুলসী, কাশি, ত্বক)…", parts: "ব্যবহৃত অংশ", uses: "প্রচলিত ব্যবহার",
    how: "কীভাবে ব্যবহার করবেন", cautions: "সতর্কতা", more: "ব্যবহারবিধি ও সতর্কতা", less: "কম দেখুন", nutrition: "পুষ্টি তথ্য",
    none: "আপনার খোঁজার সাথে কোনো গাছ মেলেনি।", all: "সব", count: "{n}টি গাছ",
    note: "ভেষজ ওষুধের সাথে প্রতিক্রিয়া করতে পারে এবং এটি চিকিৎসার বিকল্প নয়। গর্ভবতী বা স্তন্যদানকারী মা, শিশু এবং নিয়মিত ওষুধ খান এমন যে কেউ ওষুধ হিসেবে ভেষজ ব্যবহারের আগে চিকিৎসকের পরামর্শ নিন।",
  },
};

function PlantCard({ p }) {
  const { lang } = useLang();
  const s = T[lang];
  const [open, setOpen] = useState(false);
  const c = tone(p.tone);
  const food = p.foodId && foodById(p.foodId);

  return (
    <article id={p.id} className="card group flex scroll-mt-24 flex-col overflow-hidden">
      <div className={`h-1.5 bg-gradient-to-r ${c.bar}`} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          {food ? (
            <FoodImage food={food} className="h-14 w-14 shrink-0 rounded-2xl" />
          ) : (
            <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${c.soft}`}>
              <Leaf className="h-7 w-7" aria-hidden="true" />
            </span>
          )}
          <div className="min-w-0">
            <h2 className="text-lg leading-snug font-bold text-slate-900 dark:text-white">{p.name[lang]}</h2>
            <p className="text-sm text-slate-500 italic dark:text-slate-400">{p.sci}</p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.summary[lang]}</p>

        <p className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <Sprout className="h-3.5 w-3.5" aria-hidden="true" /> {s.parts}: {p.parts[lang]}
        </p>

        <h3 className="mt-4 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white">
          <HandHeart className="h-4 w-4 text-brand-600 dark:text-brand-300" aria-hidden="true" /> {s.uses}
        </h3>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          {p.uses[lang].map(u => (
            <li key={u} className="flex gap-2">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br ${c.bar}`} />
              {u}
            </li>
          ))}
        </ul>

        {open && (
          <div className="mt-4 animate-pop space-y-4 border-t border-slate-100 pt-4 dark:border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{s.how}</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                {p.howToUse[lang].map(x => (
                  <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-red-50 p-3 dark:bg-red-500/10">
              <h3 className="flex items-center gap-1.5 text-sm font-bold text-red-800 dark:text-red-300">
                <ShieldAlert className="h-4 w-4" aria-hidden="true" /> {s.cautions}
              </h3>
              <ul className="mt-1.5 space-y-1 text-sm text-red-900/90 dark:text-red-200/90">
                {p.cautions[lang].map(x => <li key={x}>• {x}</li>)}
              </ul>
            </div>
            {food && (
              <Link to={`/foods/${food.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300">
                {s.nutrition} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="mt-auto inline-flex items-center justify-center gap-1 self-stretch rounded-xl pt-4 text-sm font-semibold text-brand-700 transition hover:text-brand-800 dark:text-brand-300"
        >
          {open ? s.less : s.more}
          <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
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
  const setTag = id => setParams(id === "all" ? {} : { tag: id }, { replace: true });
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
