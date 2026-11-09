"use client";

import { Link } from "../router.jsx";
import {
  ArrowRight, Ban, Bone, Brain, CircleCheck, CircleX, Coffee, Droplet, Eye, Flame, Heart, Hourglass, Leaf, Lightbulb,
  ListChecks, Moon, ShieldCheck, Sparkles, Star, Sun, Sunrise, TriangleAlert, Utensils,
} from "lucide-react";
import { ANTI_AGING } from "../data/antiAging.js";
import { PLANTS } from "../data/plants.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import { Disclaimer, FoodChips, PageHero, foodById } from "../components/PageKit.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";
import FoodImage from "../components/FoodImage.jsx";
import PlantImage from "../components/PlantImage.jsx";

const ICONS = { Bone, Brain, Coffee, Droplet, Eye, Flame, Heart, Moon, ShieldCheck, Sparkles, Sun, Sunrise };

const T = {
  en: {
    learn: "Learn", title: "Anti-ageing foods",
    howTitle: "How food slows ageing", howSub: "Four ways your plate protects your cells",
    starsTitle: "Top anti-ageing foods", starsSub: "Affordable, everyday foods with the strongest benefits — tap any food for full nutrition facts",
    areasTitle: "Food for every part of the body", areasSub: "What to eat, what to limit and healthy habits",
    nutrients: "Key nutrients", best: "Best foods", why: "What to eat & why", limit: "Limit or avoid", tips: "Healthy habits",
    agersTitle: "What makes you age faster", agersSub: "Cut these back and every food above works better",
    habitsTitle: "6 daily habits for healthy ageing",
    dayTitle: "A sample anti-ageing day", daySub: "Simple Bangladeshi meals — swap in what's in season",
    mythsTitle: "Anti-ageing myths", myth: "Myth", fact: "Fact",
    plantsTitle: "Herbs traditionally used for skin & hair", plantsSub: "Read the cautions before trying any", allPlants: "See all medicinal plants",
    note: "No food can stop ageing. These foods support healthy ageing as part of a varied diet together with sun protection, activity, good sleep and no tobacco.",
  },
  bn: {
    learn: "জানুন", title: "অ্যান্টি-এজিং খাবার",
    howTitle: "খাবার কীভাবে বার্ধক্য ধীর করে", howSub: "আপনার প্লেট চারভাবে কোষকে রক্ষা করে",
    starsTitle: "সেরা অ্যান্টি-এজিং খাবার", starsSub: "সাশ্রয়ী, প্রতিদিনের খাবার যেগুলোর উপকার সবচেয়ে বেশি — পূর্ণ পুষ্টিগুণ দেখতে যেকোনো খাবারে চাপুন",
    areasTitle: "শরীরের প্রতিটি অংশের জন্য খাবার", areasSub: "কী খাবেন, কী কমাবেন ও সুস্থ অভ্যাস",
    nutrients: "প্রধান পুষ্টি উপাদান", best: "সেরা খাবার", why: "কী খাবেন ও কেন", limit: "কমান বা এড়িয়ে চলুন", tips: "সুস্থ অভ্যাস",
    agersTitle: "যেসব কারণে দ্রুত বুড়িয়ে যান", agersSub: "এগুলো কমালে ওপরের প্রতিটি খাবার আরও ভালো কাজ করে",
    habitsTitle: "সুস্থভাবে বয়স বাড়ার ৬টি দৈনিক অভ্যাস",
    dayTitle: "অ্যান্টি-এজিং দিনের একটি নমুনা", daySub: "সহজ দেশি খাবার — মৌসুম অনুযায়ী বদলে নিন",
    mythsTitle: "অ্যান্টি-এজিং নিয়ে ভুল ধারণা", myth: "ভুল ধারণা", fact: "সত্য",
    plantsTitle: "ত্বক ও চুলের যত্নে প্রচলিত ভেষজ", plantsSub: "ব্যবহারের আগে সতর্কতা পড়ুন", allPlants: "সব ঔষধি গাছ দেখুন",
    note: "কোনো খাবারই বয়স বাড়া থামাতে পারে না। বৈচিত্র্যময় খাবারের পাশাপাশি রোদ থেকে সুরক্ষা, নড়াচড়া, ভালো ঘুম ও তামাকমুক্ত জীবন — এসবের সাথে এই খাবারগুলো সুস্থভাবে বয়স বাড়তে সাহায্য করে।",
  },
};

const DATA = ANTI_AGING;

function Bullets({ items, dot = "bg-brand-500" }) {
  return (
    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
      {items.map(x => (
        <li key={x} className="flex gap-2"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />{x}</li>
      ))}
    </ul>
  );
}

function StarFood({ item }) {
  const { lang, name } = useLang();
  const f = foodById(item.id);
  if (!f) return null;
  return (
    <Link to={`/foods/${f.id}`} className="card group flex gap-3 p-3 transition hover:-translate-y-0.5 hover:shadow-lg">
      <FoodImage food={f} className="h-16 w-16 shrink-0 rounded-2xl" />
      <span className="min-w-0">
        <span className="block font-bold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">{name(f)}</span>
        <span className="mt-0.5 inline-block rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">{item.key[lang]}</span>
        <span className="mt-1 block text-xs leading-relaxed text-slate-600 dark:text-slate-400">{item.why[lang]}</span>
      </span>
    </Link>
  );
}

function AreaCard({ a, s }) {
  const { lang } = useLang();
  const c = tone(a.tone);
  const Icon = ICONS[a.icon] || Sparkles;
  return (
    <article id={a.id} className="card scroll-mt-24 overflow-hidden">
      <div className={`h-1.5 bg-gradient-to-r ${c.bar}`} />
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${c.soft}`}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{a.title[lang]}</h3>
            <p className="mt-1 text-slate-600 dark:text-slate-400">{a.summary[lang]}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">{s.nutrients}:</span>
          {a.nutrients[lang].map(n => (
            <span key={n} className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.soft}`}>{n}</span>
          ))}
        </div>

        <div className="mt-5">
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><Utensils className="h-4 w-4 text-brand-700 dark:text-brand-300" aria-hidden="true" />{s.best}</h4>
          <FoodChips ids={a.eat} />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <section>
            <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><CircleCheck className="h-4 w-4 text-brand-700 dark:text-brand-300" aria-hidden="true" />{s.why}</h4>
            <Bullets items={a.eatWhy[lang]} />
          </section>
          <section>
            <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><Ban className="h-4 w-4 text-red-500" aria-hidden="true" />{s.limit}</h4>
            <Bullets items={a.limit[lang]} dot="bg-red-400" />
          </section>
          <section>
            <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><Lightbulb className="h-4 w-4 text-amber-500" aria-hidden="true" />{s.tips}</h4>
            <Bullets items={a.tips[lang]} dot="bg-amber-400" />
          </section>
        </div>
      </div>
    </article>
  );
}

export default function AntiAgingPage() {
  const { lang, num, t } = useLang();
  const s = T[lang];
  const plants = PLANTS.filter(p => p.tags?.includes("skin"));

  return (
    <>
      <PageHero icon={Hourglass} eyebrow={{ to: "/learn", label: s.learn }} title={s.title} sub={DATA.intro[lang]}>
        <nav aria-label={s.areasTitle} className="flex flex-wrap gap-2">
          <a href="#top-foods" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-500/25 transition hover:brightness-105">
            <Star className="h-4 w-4" aria-hidden="true" /> {s.starsTitle}
          </a>
          {DATA.areas.map(a => {
            const Icon = ICONS[a.icon] || Sparkles;
            return (
              <a key={a.id} href={`#${a.id}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-brand-300">
                <Icon className="h-4 w-4" aria-hidden="true" /> {a.title[lang]}
              </a>
            );
          })}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <section>
          <SectionHeader icon={Sparkles} title={s.howTitle} sub={s.howSub} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DATA.how.map(h => {
              const c = tone(h.tone);
              const Icon = ICONS[h.icon] || Sparkles;
              return (
                <div key={h.title.en} className="card p-5">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl ${c.soft}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-3 font-bold text-slate-900 dark:text-white">{h.title[lang]}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{h.body[lang]}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="top-foods" className="mt-12 scroll-mt-24">
          <SectionHeader icon={Star} title={s.starsTitle} sub={s.starsSub} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DATA.stars.map(item => <StarFood key={item.id} item={item} />)}
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader icon={Hourglass} title={s.areasTitle} sub={s.areasSub} />
          <div className="space-y-5">
            {DATA.areas.map(a => <AreaCard key={a.id} a={a} s={s} />)}
          </div>
        </section>

        <section className="mt-12 grid gap-4 lg:grid-cols-2">
          <div className="card p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-red-600 dark:text-red-400"><TriangleAlert className="h-5 w-5" aria-hidden="true" />{s.agersTitle}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{s.agersSub}</p>
            <ul className="mt-4 space-y-3">
              {DATA.agers.map(x => {
                const [title, body] = x[lang];
                return (
                  <li key={x.en[0]} className="flex gap-3">
                    <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
                    <span className="text-sm"><span className="font-bold text-slate-900 dark:text-white">{title}: </span><span className="text-slate-600 dark:text-slate-400">{body}</span></span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="card p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-brand-700 dark:text-brand-300"><ListChecks className="h-5 w-5" aria-hidden="true" />{s.habitsTitle}</h2>
            <ol className="mt-4 space-y-3">
              {DATA.habits.map((h, i) => (
                <li key={h.en} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white">{num(i + 1)}</span>
                  {h[lang]}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader icon={Utensils} title={s.dayTitle} sub={s.daySub} />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DATA.day.map(d => {
              const c = tone(d.tone);
              const Icon = ICONS[d.icon] || Sun;
              return (
                <li key={d.meal.en} className={`card p-4 ring-1 ${c.ring}`}>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${c.soft}`}><Icon className="h-3.5 w-3.5" aria-hidden="true" />{d.meal[lang]}</span>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{d.menu[lang]}</p>
                  <div className="mt-3"><FoodChips ids={d.eat} size="sm" /></div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">{s.mythsTitle}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {DATA.myths.map(m => (
              <article key={m.myth.en} className="card overflow-hidden">
                <p className="flex gap-2 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800 dark:bg-red-500/10 dark:text-red-300">
                  <CircleX className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span><span className="opacity-80">{s.myth}: </span>{m.myth[lang]}</span>
                </p>
                <p className="flex gap-2 px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-400" aria-hidden="true" /><span><span className="font-semibold text-brand-700 dark:text-brand-300">{s.fact}: </span>{m.fact[lang]}</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        {plants.length > 0 && (
          <section className="mt-12">
            <SectionHeader
              icon={Leaf}
              title={s.plantsTitle}
              sub={s.plantsSub}
              action={
                <Link to="/plants?tag=skin" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300">
                  {s.allPlants} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              }
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {plants.slice(0, 8).map(p => {
                return (
                  <Link key={p.id} to={`/plants/${p.id}`} className="card group flex items-start gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-lg">
                    <PlantImage plant={p} alt={p.name[lang]} className="h-12 w-12 shrink-0 rounded-xl" />
                    <span className="min-w-0">
                      <span className="block font-bold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">{p.name[lang]}</span>
                      <span className="line-clamp-2 text-xs text-slate-500 dark:text-slate-400">{p.summary[lang]}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <Disclaimer>{s.note} {t.disclaimer}</Disclaimer>
      </div>
    </>
  );
}
