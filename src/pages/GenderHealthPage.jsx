import { Link } from "react-router-dom";
import {
  Activity, ArrowRight, Baby, Ban, Bone, Brain, CalendarHeart, CircleCheck, CircleX, Droplet, Dumbbell, Flame, Flower2,
  Heart, HeartHandshake, Leaf, Lightbulb, Mars, Moon, Scale, ShieldCheck, Sparkles, Stethoscope, Sun, Utensils, Venus,
} from "lucide-react";
import { GENDER_HEALTH, PERIOD_GUIDE } from "../data/genderHealth.js";
import { PLANTS } from "../data/plants.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import { Disclaimer, FoodChips, PageHero, foodById } from "../components/PageKit.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";
import FoodImage from "../components/FoodImage.jsx";

const ICONS = { Heart, Dumbbell, Flame, Baby, Droplet, Moon, Bone, Brain, Sparkles, ShieldCheck, Activity, Flower2, Scale, Sun, Smile: Sparkles };

const T = {
  en: {
    learn: "Learn",
    men: { title: "Men's health", other: "Women's health" },
    women: { title: "Women's health", other: "Men's health" },
    needsTitle: "Daily needs at a glance", needsSub: "Typical needs for adults aged 19–50",
    topicsTitle: "Food for every stage", topicsSub: "Pick a topic — what to eat, what to limit, and when to see a doctor",
    nutrients: "Key nutrients", best: "Best foods", why: "What to eat & why", limit: "Limit or avoid", tips: "Healthy habits", doctor: "See a doctor if",
    period: {
      title: "Period care: what to eat", sub: "Food and comfort through every phase of your cycle",
      phases: "Your cycle, phase by phase", eat: "Eat more of these", avoid: "Go easy on these", relief: "Comfort without medicine",
      myths: "Period food myths", myth: "Myth", fact: "Fact", focus: "Focus",
    },
    plantsTitle: "Medicinal plants traditionally used", plantsSub: "Herbs people use for these concerns — read the cautions before trying any", allPlants: "See all medicinal plants",
    switch: "Also see",
  },
  bn: {
    learn: "জানুন",
    men: { title: "পুরুষের স্বাস্থ্য", other: "নারীর স্বাস্থ্য" },
    women: { title: "নারীর স্বাস্থ্য", other: "পুরুষের স্বাস্থ্য" },
    needsTitle: "এক নজরে দৈনিক চাহিদা", needsSub: "১৯–৫০ বছর বয়সী প্রাপ্তবয়স্কদের সাধারণ চাহিদা",
    topicsTitle: "প্রতিটি প্রয়োজনে সঠিক খাবার", topicsSub: "একটি বিষয় বাছুন — কী খাবেন, কী কমাবেন এবং কখন চিকিৎসকের কাছে যাবেন",
    nutrients: "প্রধান পুষ্টি উপাদান", best: "সেরা খাবার", why: "কী খাবেন ও কেন", limit: "কমান বা এড়িয়ে চলুন", tips: "সুস্থ অভ্যাস", doctor: "চিকিৎসকের কাছে যান যদি",
    period: {
      title: "মাসিকের সময় কী খাবেন", sub: "মাসিক চক্রের প্রতিটি ধাপে খাবার ও আরামের উপায়",
      phases: "আপনার মাসিক চক্র, ধাপে ধাপে", eat: "এগুলো বেশি খান", avoid: "এগুলো কম খান", relief: "ওষুধ ছাড়া আরামের উপায়",
      myths: "মাসিক নিয়ে খাবারের ভুল ধারণা", myth: "ভুল ধারণা", fact: "সত্য", focus: "লক্ষ্য",
    },
    plantsTitle: "প্রচলিত ঔষধি গাছ", plantsSub: "এসব সমস্যায় মানুষ যেসব ভেষজ ব্যবহার করেন — ব্যবহারের আগে সতর্কতা পড়ুন", allPlants: "সব ঔষধি গাছ দেখুন",
    switch: "আরও দেখুন",
  },
};

function Bullets({ items, dot = "bg-brand-500" }) {
  return (
    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
      {items.map(x => (
        <li key={x} className="flex gap-2"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />{x}</li>
      ))}
    </ul>
  );
}

function TopicCard({ t: topic, s }) {
  const { lang } = useLang();
  const c = tone(topic.tone);
  const Icon = ICONS[topic.icon] || Sparkles;
  return (
    <article id={topic.id} className="card scroll-mt-24 overflow-hidden">
      <div className={`h-1.5 bg-gradient-to-r ${c.bar}`} />
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${c.soft}`}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{topic.title[lang]}</h3>
            <p className="mt-1 text-slate-600 dark:text-slate-400">{topic.summary[lang]}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-xs font-semibold tracking-wide text-slate-400 uppercase">{s.nutrients}:</span>
          {topic.nutrients[lang].map(n => (
            <span key={n} className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.soft}`}>{n}</span>
          ))}
        </div>

        <div className="mt-5">
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><Utensils className="h-4 w-4 text-brand-600 dark:text-brand-300" aria-hidden="true" />{s.best}</h4>
          <FoodChips ids={topic.eat} />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <section>
            <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><CircleCheck className="h-4 w-4 text-brand-600 dark:text-brand-300" aria-hidden="true" />{s.why}</h4>
            <Bullets items={topic.eatWhy[lang]} />
          </section>
          <section>
            <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><Ban className="h-4 w-4 text-red-500" aria-hidden="true" />{s.limit}</h4>
            <Bullets items={topic.limit[lang]} dot="bg-red-400" />
          </section>
          <section>
            <h4 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><Lightbulb className="h-4 w-4 text-amber-500" aria-hidden="true" />{s.tips}</h4>
            <Bullets items={topic.tips[lang]} dot="bg-amber-400" />
          </section>
        </div>

        <p className="mt-5 flex gap-2 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
          <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
          <span><span className="font-bold text-slate-900 dark:text-white">{s.doctor}: </span>{topic.doctor[lang]}</span>
        </p>
      </div>
    </article>
  );
}

function PeriodGuide({ s }) {
  const { lang, num } = useLang();
  const p = s.period;
  const g = PERIOD_GUIDE;
  return (
    <section id="period" className="mt-12 scroll-mt-24">
      <SectionHeader icon={CalendarHeart} title={p.title} sub={p.sub} />

      <div className="card overflow-hidden p-5 sm:p-6">
        <h3 className="mb-4 font-bold text-slate-900 dark:text-white">{p.phases}</h3>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {g.phases.map((ph, i) => {
            const c = tone(ph.tone);
            return (
              <li key={ph.id} className={`relative rounded-2xl p-4 ring-1 ${c.ring}`}>
                <div className="flex items-center gap-2">
                  <span className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${c.solid}`}>{num(i + 1)}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{ph.name[lang]}</span>
                </div>
                <p className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${c.soft}`}>{ph.days[lang]}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{ph.body[lang]}</p>
                <p className="mt-2 text-sm"><span className="font-semibold text-slate-900 dark:text-white">{p.focus}: </span><span className="text-slate-700 dark:text-slate-300">{ph.focus[lang]}</span></p>
                <div className="mt-3 flex -space-x-2">
                  {ph.eat.map(foodById).filter(Boolean).map(f => (
                    <Link key={f.id} to={`/food/${f.id}`} title={f[lang]} className="block rounded-full ring-2 ring-white transition hover:z-10 hover:scale-110 dark:ring-slate-900">
                      <FoodImage food={f} className="h-9 w-9 rounded-full" />
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="card p-5">
          <h3 className="mb-3 flex items-center gap-2 font-bold text-brand-700 dark:text-brand-300"><CircleCheck className="h-5 w-5" aria-hidden="true" />{p.eat}</h3>
          <Bullets items={g.eat[lang]} />
        </div>
        <div className="card p-5">
          <h3 className="mb-3 flex items-center gap-2 font-bold text-red-600 dark:text-red-400"><Ban className="h-5 w-5" aria-hidden="true" />{p.avoid}</h3>
          <Bullets items={g.avoid[lang]} dot="bg-red-400" />
        </div>
        <div className="card p-5">
          <h3 className="mb-3 flex items-center gap-2 font-bold text-fuchsia-600 dark:text-fuchsia-300"><HeartHandshake className="h-5 w-5" aria-hidden="true" />{p.relief}</h3>
          <Bullets items={g.relief[lang]} dot="bg-fuchsia-400" />
        </div>
      </div>

      <h3 className="mt-8 mb-3 font-bold text-slate-900 dark:text-white">{p.myths}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {g.myths.map(m => (
          <article key={m.myth.en} className="card overflow-hidden">
            <p className="flex gap-2 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800 dark:bg-red-500/10 dark:text-red-300">
              <CircleX className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span><span className="opacity-70">{p.myth}: </span>{m.myth[lang]}</span>
            </p>
            <p className="flex gap-2 px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /><span><span className="font-semibold text-brand-700 dark:text-brand-300">{p.fact}: </span>{m.fact[lang]}</span>
            </p>
          </article>
        ))}
      </div>

      <p className="mt-4 flex gap-2 rounded-2xl border border-red-200 bg-red-50/70 p-4 text-sm text-red-900 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-200">
        <Stethoscope className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span><span className="font-bold">{s.doctor}: </span>{g.doctor[lang]}</span>
      </p>
    </section>
  );
}

function RelatedPlants({ tag, s }) {
  const { lang } = useLang();
  const plants = PLANTS.filter(p => p.tags?.includes(tag));
  if (!plants.length) return null;
  return (
    <section className="mt-12">
      <SectionHeader
        icon={Leaf}
        title={s.plantsTitle}
        sub={s.plantsSub}
        action={
          <Link to={`/plants?tag=${tag}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300">
            {s.allPlants} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        }
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {plants.map(p => {
          const c = tone(p.tone);
          return (
            <Link key={p.id} to={`/plants?tag=${tag}#${p.id}`} className="card group flex items-start gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-lg">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${c.soft}`}><Leaf className="h-5 w-5" aria-hidden="true" /></span>
              <span className="min-w-0">
                <span className="block font-bold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">{p.name[lang]}</span>
                <span className="line-clamp-2 text-xs text-slate-500 dark:text-slate-400">{p.summary[lang]}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default function GenderHealthPage({ who }) {
  const { lang } = useLang();
  const base = T[lang];
  const s = { ...base, ...base[who] };
  const data = GENDER_HEALTH[who];
  const isWomen = who === "women";

  return (
    <>
      <PageHero icon={isWomen ? Venus : Mars} eyebrow={{ to: "/learn", label: s.learn }} title={s.title} sub={data.intro[lang]}>
        <nav aria-label={s.topicsTitle} className="flex flex-wrap gap-2">
          {isWomen && (
            <a href="#period" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-500/25 transition hover:brightness-105">
              <CalendarHeart className="h-4 w-4" aria-hidden="true" /> {s.period.title}
            </a>
          )}
          {data.topics.map(t => {
            const Icon = ICONS[t.icon] || Sparkles;
            return (
              <a key={t.id} href={`#${t.id}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-brand-300">
                <Icon className="h-4 w-4" aria-hidden="true" /> {t.title[lang]}
              </a>
            );
          })}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <section>
          <SectionHeader icon={Activity} title={s.needsTitle} sub={s.needsSub} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {data.needs.map(n => (
              <div key={n.label.en} className="card p-4">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{n.label[lang]}</p>
                <p className="text-gradient mt-1 text-lg leading-tight font-extrabold">{n.value[lang]}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{n.note[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {isWomen && <PeriodGuide s={s} />}

        <section className="mt-12">
          <SectionHeader icon={isWomen ? Flower2 : Dumbbell} title={s.topicsTitle} sub={s.topicsSub} />
          <div className="space-y-5">
            {data.topics.map(t => <TopicCard key={t.id} t={t} s={s} />)}
          </div>
        </section>

        <RelatedPlants tag={who} s={s} />

        <Link
          to={isWomen ? "/mens-health" : "/womens-health"}
          className="card mt-10 flex items-center justify-between gap-3 p-5 transition hover:border-brand-400"
        >
          <span className="flex items-center gap-3">
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${tone(isWomen ? "sky" : "fuchsia").soft}`}>
              {isWomen ? <Mars className="h-5 w-5" aria-hidden="true" /> : <Venus className="h-5 w-5" aria-hidden="true" />}
            </span>
            <span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">{s.switch}</span>
              <span className="block font-bold text-slate-900 dark:text-white">{s.other}</span>
            </span>
          </span>
          <ArrowRight className="h-5 w-5 text-brand-600" aria-hidden="true" />
        </Link>

        <Disclaimer />
      </div>
    </>
  );
}
