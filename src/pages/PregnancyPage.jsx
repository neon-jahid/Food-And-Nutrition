import { Link } from "../router.jsx";
import {
  Activity, Apple, ArrowRight, Baby, Ban, Bone, Brain, CircleCheck, CircleX, Coffee, Droplet, Dumbbell, Fish, Flame,
  Footprints, Gauge, Moon, Pill, ShieldAlert, Siren, Sparkles, Stethoscope, Sun, Sunrise, Utensils, Venus, Waves, Wind,
} from "lucide-react";
import { PREGNANCY } from "../data/pregnancy.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import { Disclaimer, FoodChips, PageHero, foodById } from "../components/PageKit.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";
import FoodImage from "../components/FoodImage.jsx";

const ICONS = { Apple, Bone, Brain, Coffee, Droplet, Dumbbell, Fish, Flame, Footprints, Gauge, Moon, Sparkles, Sun, Sunrise, Waves, Wind };

const T = {
  en: {
    learn: "Learn", parent: "Women's health", title: "Pregnancy food guide",
    jump: { needs: "Daily needs", nutrients: "Key nutrients", trimesters: "Trimesters", problems: "Common problems", day: "Sample day", avoid: "Foods to avoid", myths: "Myths" },
    needsTitle: "Daily needs in pregnancy", needsSub: "Approximate needs for a pregnant woman (IOM / WHO)",
    nutrientsTitle: "6 nutrients your baby needs most", nutrientsSub: "Why each matters, and everyday foods that provide it",
    triTitle: "Trimester by trimester", triSub: "What changes, and what to focus on",
    focus: "Focus",
    problemsTitle: "Common discomforts — food that helps", problemsSub: "Simple fixes for the usual pregnancy troubles",
    dayTitle: "A sample day of eating", daySub: "For the 2nd and 3rd trimester — 5 small meals instead of 3 large ones",
    avoidTitle: "Avoid or limit these", avoidSub: "Food safety matters more in pregnancy",
    suppTitle: "Supplements usually advised", suppSub: "Take only what your doctor or health worker prescribes",
    mythsTitle: "Pregnancy food myths", myth: "Myth", fact: "Fact",
    dangerTitle: "Danger signs — go to a hospital immediately",
    switch: "Also see", parentDesc: "Periods, PCOS, breastfeeding and menopause",
  },
  bn: {
    learn: "জানুন", parent: "নারীর স্বাস্থ্য", title: "গর্ভাবস্থার খাবার গাইড",
    jump: { needs: "দৈনিক চাহিদা", nutrients: "জরুরি পুষ্টি", trimesters: "তিন মাস ভিত্তিক", problems: "সাধারণ সমস্যা", day: "নমুনা দিন", avoid: "যা এড়াবেন", myths: "ভুল ধারণা" },
    needsTitle: "গর্ভাবস্থায় দৈনিক চাহিদা", needsSub: "গর্ভবতী নারীর আনুমানিক চাহিদা (IOM / বিশ্ব স্বাস্থ্য সংস্থা)",
    nutrientsTitle: "শিশুর জন্য সবচেয়ে জরুরি ৬টি পুষ্টি উপাদান", nutrientsSub: "কেন জরুরি, আর কোন প্রতিদিনের খাবারে পাবেন",
    triTitle: "তিন মাস করে, ধাপে ধাপে", triSub: "কী বদলায় আর কোন দিকে নজর দেবেন",
    focus: "লক্ষ্য",
    problemsTitle: "সাধারণ অস্বস্তি — যে খাবার উপকারী", problemsSub: "গর্ভাবস্থার পরিচিত সমস্যার সহজ সমাধান",
    dayTitle: "একদিনের খাবারের নমুনা", daySub: "দ্বিতীয় ও তৃতীয় তিন মাসের জন্য — ৩ বেলা ভারী খাবারের বদলে ৫ বেলা অল্প করে",
    avoidTitle: "এগুলো এড়িয়ে চলুন বা কমান", avoidSub: "গর্ভাবস্থায় খাদ্য নিরাপত্তা আরও জরুরি",
    suppTitle: "সাধারণত যেসব সাপ্লিমেন্ট দেওয়া হয়", suppSub: "শুধু চিকিৎসক বা স্বাস্থ্যকর্মীর পরামর্শমতো খাবেন",
    mythsTitle: "গর্ভাবস্থার খাবার নিয়ে ভুল ধারণা", myth: "ভুল ধারণা", fact: "সত্য",
    dangerTitle: "বিপদ চিহ্ন — দেরি না করে হাসপাতালে যান",
    switch: "আরও দেখুন", parentDesc: "মাসিক, পিসিওএস, বুকের দুধ খাওয়ানো ও মেনোপজ",
  },
};

const D = PREGNANCY;

function Bullets({ items, dot = "bg-brand-500" }) {
  return (
    <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
      {items.map(x => (
        <li key={x} className="flex gap-2"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />{x}</li>
      ))}
    </ul>
  );
}

function FoodFaces({ ids }) {
  const { name } = useLang();
  return (
    <div className="flex -space-x-2">
      {ids.map(foodById).filter(Boolean).map(f => (
        <Link key={f.id} to={`/foods/${f.id}`} title={name(f)} className="block rounded-full ring-2 ring-white transition hover:z-10 hover:scale-110 dark:ring-slate-900">
          <FoodImage food={f} className="h-9 w-9 rounded-full" />
        </Link>
      ))}
    </div>
  );
}

export default function PregnancyPage() {
  const { lang, num, t } = useLang();
  const s = T[lang];

  return (
    <>
      <PageHero icon={Baby} eyebrow={{ to: "/womens-health", label: s.parent }} title={s.title} sub={D.intro[lang]}>
        <nav aria-label={s.title} className="flex flex-wrap gap-2">
          {Object.entries(s.jump).map(([id, label], i) => (
            <a
              key={id}
              href={`#${id}`}
              className={i === 0
                ? "inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition hover:brightness-105"
                : "inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-brand-300"}
            >
              {label}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <section id="needs" className="scroll-mt-24">
          <SectionHeader icon={Activity} title={s.needsTitle} sub={s.needsSub} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {D.needs.map(n => (
              <div key={n.label.en} className="card p-4">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{n.label[lang]}</p>
                <p className="text-gradient mt-1 text-lg leading-tight font-extrabold">{n.value[lang]}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{n.note[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="nutrients" className="mt-12 scroll-mt-24">
          <SectionHeader icon={Sparkles} title={s.nutrientsTitle} sub={s.nutrientsSub} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {D.nutrients.map(n => {
              const c = tone(n.tone);
              const Icon = ICONS[n.icon] || Sparkles;
              return (
                <article key={n.name.en} className="card overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${c.bar}`} />
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${c.soft}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                      <h3 className="font-bold text-slate-900 dark:text-white">{n.name[lang]}</h3>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{n.why[lang]}</p>
                    <div className="mt-4"><FoodChips ids={n.eat} size="sm" /></div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="trimesters" className="mt-12 scroll-mt-24">
          <SectionHeader icon={Baby} title={s.triTitle} sub={s.triSub} />
          <ol className="grid gap-4 md:grid-cols-3">
            {D.trimesters.map((tr, i) => {
              const c = tone(tr.tone);
              return (
                <li key={tr.id} className={`card p-5 ring-1 ${c.ring}`}>
                  <div className="flex items-center gap-2">
                    <span className={`grid h-8 w-8 place-items-center rounded-full text-sm font-bold ${c.solid}`}>{num(i + 1)}</span>
                    <span className="font-bold text-slate-900 dark:text-white">{tr.name[lang]}</span>
                  </div>
                  <p className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.soft}`}>{tr.weeks[lang]}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{tr.body[lang]}</p>
                  <p className="mt-3 text-sm"><span className="font-semibold text-slate-900 dark:text-white">{s.focus}: </span><span className="text-slate-700 dark:text-slate-300">{tr.focus[lang]}</span></p>
                  <div className="mt-4"><FoodFaces ids={tr.eat} /></div>
                </li>
              );
            })}
          </ol>
        </section>

        <section id="problems" className="mt-12 scroll-mt-24">
          <SectionHeader icon={Stethoscope} title={s.problemsTitle} sub={s.problemsSub} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {D.problems.map(p => {
              const c = tone(p.tone);
              const Icon = ICONS[p.icon] || Sparkles;
              return (
                <article key={p.title.en} className="card p-5">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${c.soft}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <h3 className="font-bold text-slate-900 dark:text-white">{p.title[lang]}</h3>
                  </div>
                  <div className="mt-3"><Bullets items={p.tips[lang]} /></div>
                  <div className="mt-4"><FoodFaces ids={p.eat} /></div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="day" className="mt-12 scroll-mt-24">
          <SectionHeader icon={Utensils} title={s.dayTitle} sub={s.daySub} />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {D.day.map(d => {
              const c = tone(d.tone);
              const Icon = ICONS[d.icon] || Sun;
              return (
                <li key={d.meal.en} className={`card p-4 ring-1 ${c.ring}`}>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${c.soft}`}><Icon className="h-3.5 w-3.5" aria-hidden="true" />{d.meal[lang]}</span>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{d.menu[lang]}</p>
                  <div className="mt-3"><FoodFaces ids={d.eat} /></div>
                </li>
              );
            })}
          </ol>
        </section>

        <section id="avoid" className="mt-12 grid scroll-mt-24 gap-4 lg:grid-cols-5">
          <div className="card p-5 sm:p-6 lg:col-span-3">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-red-600 dark:text-red-400"><Ban className="h-5 w-5" aria-hidden="true" />{s.avoidTitle}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{s.avoidSub}</p>
            <ul className="mt-4 space-y-3">
              {D.avoid.map(x => {
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
          <div className="card p-5 sm:p-6 lg:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-violet-700 dark:text-violet-300"><Pill className="h-5 w-5" aria-hidden="true" />{s.suppTitle}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">{s.suppSub}</p>
            <ul className="mt-4 space-y-3">
              {D.supplements.map(x => (
                <li key={x.en} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" aria-hidden="true" />{x[lang]}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="myths" className="mt-12 scroll-mt-24">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white"><ShieldAlert className="h-6 w-6 text-brand-600" aria-hidden="true" />{s.mythsTitle}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {D.myths.map(m => (
              <article key={m.myth.en} className="card overflow-hidden">
                <p className="flex gap-2 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800 dark:bg-red-500/10 dark:text-red-300">
                  <CircleX className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span><span className="opacity-70">{s.myth}: </span>{m.myth[lang]}</span>
                </p>
                <p className="flex gap-2 px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" /><span><span className="font-semibold text-brand-700 dark:text-brand-300">{s.fact}: </span>{m.fact[lang]}</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-red-200 bg-red-50/70 p-5 sm:p-6 dark:border-red-500/20 dark:bg-red-500/10">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-red-700 dark:text-red-300"><Siren className="h-5 w-5" aria-hidden="true" />{s.dangerTitle}</h2>
          <ul className="mt-3 grid gap-2 text-sm text-red-900 sm:grid-cols-2 dark:text-red-200">
            {D.danger[lang].map(x => (
              <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />{x}</li>
            ))}
          </ul>
        </section>

        <Link to="/womens-health" className="card mt-10 flex items-center justify-between gap-3 p-5 transition hover:border-brand-400">
          <span className="flex items-center gap-3">
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${tone("fuchsia").soft}`}><Venus className="h-5 w-5" aria-hidden="true" /></span>
            <span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">{s.switch}</span>
              <span className="block font-bold text-slate-900 dark:text-white">{s.parent}</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">{s.parentDesc}</span>
            </span>
          </span>
          <ArrowRight className="h-5 w-5 text-brand-600" aria-hidden="true" />
        </Link>

        <Disclaimer>{t.disclaimer}</Disclaimer>
      </div>
    </>
  );
}
