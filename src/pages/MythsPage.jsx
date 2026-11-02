import { useMemo, useState } from "react";
import { CircleCheck, CircleHelp, CircleX, Eye, EyeOff, Scale } from "lucide-react";
import { MYTH_CATS, MYTHS } from "../data/myths.js";
import { useLang } from "../context/LangContext.jsx";
import { EmptyState, FilterChips, PageHero, SearchInput, matches } from "../components/PageKit.jsx";

const T = {
  en: {
    title: "Food myths vs facts", sub: "Common food beliefs you hear at home and online — checked against the evidence. Guess first, then reveal the answer.",
    learn: "Learn", all: "All", search: "Search a belief (e.g. egg, rice, papaya)…", myth: "Myth", partly: "Partly true", fact: "The fact",
    reveal: "Reveal the fact", hide: "Hide", showAll: "Show all answers", hideAll: "Quiz mode", none: "No myth matches your search.",
    revealed: "{n} of {total} revealed",
  },
  bn: {
    title: "খাবার নিয়ে ভুল ধারণা বনাম সত্য", sub: "ঘরে ও অনলাইনে শোনা প্রচলিত খাদ্য-বিশ্বাস — প্রমাণের ভিত্তিতে যাচাই করা। আগে অনুমান করুন, তারপর উত্তর দেখুন।",
    learn: "জানুন", all: "সব", search: "একটি বিশ্বাস খুঁজুন (যেমন: ডিম, ভাত, পেঁপে)…", myth: "ভুল ধারণা", partly: "আংশিক সত্য", fact: "আসল সত্য",
    reveal: "সত্যটা দেখুন", hide: "লুকান", showAll: "সব উত্তর দেখুন", hideAll: "কুইজ মোড", none: "আপনার খোঁজার সাথে কোনো ভুল ধারণা মেলেনি।",
    revealed: "{total}টির মধ্যে {n}টি দেখা হয়েছে",
  },
};

function MythCard({ m, shown, onToggle }) {
  const { lang } = useLang();
  const s = T[lang];
  const partly = m.verdict === "partly";
  const cat = MYTH_CATS.find(c => c.id === m.cat);
  return (
    <article data-reveal className="card flex flex-col overflow-hidden">
      <div className="flex-1 p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
            partly ? "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300" : "bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300"
          }`}>
            {partly ? <Scale className="h-3.5 w-3.5" aria-hidden="true" /> : <CircleX className="h-3.5 w-3.5" aria-hidden="true" />}
            {partly ? s.partly : s.myth}
          </span>
          {cat && <span className="text-xs font-medium text-slate-400">{cat[lang]}</span>}
        </div>
        <p className="text-lg leading-snug font-bold text-slate-900 dark:text-white">“{m.myth[lang]}”</p>
      </div>
      {shown ? (
        <div className="animate-pop border-t border-brand-100 bg-brand-50/70 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
          <p className="flex gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-300" aria-hidden="true" />
            <span><span className="font-bold text-brand-700 dark:text-brand-300">{s.fact}: </span>{m.fact[lang]}</span>
          </p>
          <button type="button" onClick={onToggle} className="mt-3 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white">{s.hide}</button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center justify-center gap-2 border-t border-slate-100 py-3.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 dark:border-slate-800 dark:text-brand-300 dark:hover:bg-brand-500/10"
        >
          <Eye className="h-4 w-4" aria-hidden="true" /> {s.reveal}
        </button>
      )}
    </article>
  );
}

export default function MythsPage() {
  const { lang, fill } = useLang();
  const s = T[lang];
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(() => new Set());

  const list = useMemo(
    () => MYTHS.map((m, i) => ({ ...m, i })).filter(m =>
      (cat === "all" || m.cat === cat) && matches(q, m.myth.en, m.myth.bn, m.fact.en, m.fact.bn)
    ),
    [cat, q]
  );
  const allShown = list.length > 0 && list.every(m => shown.has(m.i));

  const toggle = i => setShown(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });
  const toggleAll = () => setShown(prev => {
    const next = new Set(prev);
    list.forEach(m => (allShown ? next.delete(m.i) : next.add(m.i)));
    return next;
  });

  return (
    <>
      <PageHero icon={CircleHelp} eyebrow={{ to: "/learn", label: s.learn }} title={s.title} sub={s.sub}>
        <SearchInput value={q} onChange={setQ} placeholder={s.search} />
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <FilterChips
              label={s.title}
              value={cat}
              onChange={setCat}
              options={[{ id: "all", label: s.all, count: MYTHS.length }, ...MYTH_CATS.map(c => ({ id: c.id, label: c[lang], count: MYTHS.filter(m => m.cat === c.id).length }))]}
            />
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="text-sm text-slate-500 dark:text-slate-400">{fill(s.revealed, { n: list.filter(m => shown.has(m.i)).length, total: list.length })}</span>
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
            >
              {allShown ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
              {allShown ? s.hideAll : s.showAll}
            </button>
          </div>
        </div>

        <div className="mt-6">
          {list.length ? (
            <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
              {list.map(m => <MythCard key={m.i} m={m} shown={shown.has(m.i)} onToggle={() => toggle(m.i)} />)}
            </div>
          ) : (
            <EmptyState>{s.none}</EmptyState>
          )}
        </div>
      </div>
    </>
  );
}
