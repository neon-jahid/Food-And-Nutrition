import { useState } from "react";
import { Link } from "react-router-dom";
import { Archive, CircleAlert, Clock, Lightbulb, Refrigerator, Snowflake, Sun, Thermometer } from "lucide-react";
import { FRIDGE_ZONES, SPOILAGE_SIGNS, STORAGE_GROUPS, STORAGE_TIPS } from "../data/storage.js";
import { useLang } from "../context/LangContext.jsx";
import FoodImage from "../components/FoodImage.jsx";
import { FilterChips, PageHero, foodById } from "../components/PageKit.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";

const T = {
  en: {
    title: "Food storage guide", sub: "How and where to keep everyday foods so they stay fresh, nutritious and safe — and how long they last.",
    learn: "Learn", all: "All", keeps: "Keeps", tipsTitle: "Golden rules of food safety", tipsSub: "Simple habits that prevent food poisoning",
    zonesTitle: "Where things go in the fridge", zonesSub: "Each shelf has a different temperature",
    signsTitle: "Signs food has gone bad", signsSub: "When in doubt, throw it out",
    where: { counter: "Room temp", pantry: "Dry pantry", fridge: "Fridge", freezer: "Freezer" },
    temps: [["Fridge", "0–4 °C"], ["Freezer", "−18 °C"], ["Danger zone", "5–60 °C"]],
  },
  bn: {
    title: "খাবার সংরক্ষণ গাইড", sub: "প্রতিদিনের খাবার কোথায় ও কীভাবে রাখলে তাজা, পুষ্টিকর ও নিরাপদ থাকে — আর কতদিন ভালো থাকে।",
    learn: "জানুন", all: "সব", keeps: "ভালো থাকে", tipsTitle: "খাদ্য নিরাপত্তার মূল নিয়ম", tipsSub: "সহজ অভ্যাস, যা খাদ্যে বিষক্রিয়া ঠেকায়",
    zonesTitle: "ফ্রিজে কোন জিনিস কোথায়", zonesSub: "প্রতিটি তাকের তাপমাত্রা আলাদা",
    signsTitle: "খাবার নষ্ট হওয়ার লক্ষণ", signsSub: "সন্দেহ হলে ফেলে দিন",
    where: { counter: "ঘরের তাপমাত্রা", pantry: "শুকনো জায়গা", fridge: "ফ্রিজ", freezer: "ফ্রিজার" },
    temps: [["ফ্রিজ", "০–৪ °সে"], ["ফ্রিজার", "−১৮ °সে"], ["বিপদসীমা", "৫–৬০ °সে"]],
  },
};

const WHERE = {
  counter: { icon: Sun, cls: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300" },
  pantry: { icon: Archive, cls: "bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300" },
  fridge: { icon: Refrigerator, cls: "bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300" },
  freezer: { icon: Snowflake, cls: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300" },
};

function WhereBadge({ where }) {
  const { lang } = useLang();
  const w = WHERE[where] || WHERE.pantry;
  const Icon = w.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${w.cls}`}>
      <Icon className="h-3.5 w-3.5" aria-hidden="true" /> {T[lang].where[where]}
    </span>
  );
}

function ItemCard({ item }) {
  const { lang } = useLang();
  const food = item.foodId && foodById(item.foodId);
  const head = (
    <div className="flex items-center gap-3">
      {food ? (
        <FoodImage food={food} className="h-12 w-12 shrink-0 rounded-xl" />
      ) : (
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800"><Archive className="h-5 w-5" aria-hidden="true" /></span>
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate font-bold text-slate-900 dark:text-white">{item.name[lang]}</p>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {T[lang].keeps}: <strong className="text-slate-700 dark:text-slate-200">{item.life[lang]}</strong>
        </p>
      </div>
    </div>
  );
  return (
    <li className="card flex flex-col gap-3 p-4">
      {food ? <Link to={`/food/${food.id}`} className="rounded-xl hover:opacity-90">{head}</Link> : head}
      <WhereBadge where={item.where} />
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.tip[lang]}</p>
    </li>
  );
}

export default function StoragePage() {
  const { lang, num } = useLang();
  const s = T[lang];
  const [group, setGroup] = useState("all");
  const groups = group === "all" ? STORAGE_GROUPS : STORAGE_GROUPS.filter(g => g.id === group);

  return (
    <>
      <PageHero icon={Refrigerator} eyebrow={{ to: "/learn", label: s.learn }} title={s.title} sub={s.sub}>
        <div className="flex flex-wrap gap-3">
          {s.temps.map(([k, v], i) => (
            <div key={k} className="card flex items-center gap-3 px-4 py-3">
              <Thermometer className={`h-5 w-5 ${["text-sky-500", "text-indigo-500", "text-red-500"][i]}`} aria-hidden="true" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{k}</p>
                <p className="font-extrabold text-slate-900 dark:text-white">{v}</p>
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <FilterChips
          label={s.title}
          value={group}
          onChange={setGroup}
          options={[{ id: "all", label: s.all }, ...STORAGE_GROUPS.map(g => ({ id: g.id, label: g.title[lang], count: g.items.length }))]}
        />

        <div className="mt-6 space-y-10">
          {groups.map(g => (
            <section key={g.id} aria-labelledby={`st-${g.id}`}>
              <h2 id={`st-${g.id}`} className="mb-4 text-xl font-extrabold text-slate-900 dark:text-white">{g.title[lang]}</h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map(item => <ItemCard key={item.name.en} item={item} />)}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <section className="card p-5 sm:p-7">
            <SectionHeader icon={Refrigerator} title={s.zonesTitle} sub={s.zonesSub} />
            <ol className="overflow-hidden rounded-2xl border-4 border-slate-200 dark:border-slate-700">
              {FRIDGE_ZONES.map((z, i) => (
                <li key={z.zone.en} className={`flex gap-3 border-b border-slate-200 p-3 last:border-b-0 dark:border-slate-700 ${i % 2 ? "bg-sky-50/60 dark:bg-sky-500/5" : "bg-white dark:bg-slate-900"}`}>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky-500 text-xs font-bold text-white">{num(i + 1)}</span>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{z.zone[lang]}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{z.items[lang]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="card p-5 sm:p-7">
            <SectionHeader icon={CircleAlert} title={s.signsTitle} sub={s.signsSub} />
            <ul className="space-y-2.5">
              {SPOILAGE_SIGNS.map(x => (
                <li key={x.en} className="flex gap-3 rounded-2xl bg-red-50/80 p-3 text-sm text-red-900 dark:bg-red-500/10 dark:text-red-200">
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {x[lang]}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-10">
          <SectionHeader icon={Lightbulb} title={s.tipsTitle} sub={s.tipsSub} />
          <ol className="grid gap-3 sm:grid-cols-2">
            {STORAGE_TIPS.map((x, i) => (
              <li key={x.en} className="card flex gap-3 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">{num(i + 1)}</span>
                <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{x[lang]}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
