"use client";

import { Link } from "../router.jsx";
import {
  Activity, Apple, ArrowRight, Baby, Ban, Bean, Bone, Brain, Carrot, CircleCheck, CircleX, Coffee, Droplet, Dumbbell, Egg, Eye, Fish,
  Gauge, HeartHandshake, Layers, Milk, Moon, Pill, Scale, Shield, ShieldAlert, Siren, Sparkles, Stethoscope, Sun, Sunrise, ToyBrick, Utensils, Waves, Wheat, Wind,
} from "lucide-react";
import { CHILD_NUTRITION as D } from "../data/childNutrition.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import { Bullets, Disclaimer, FoodChips, FoodFaces, PageHero } from "../components/PageKit.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";

const ICONS = { Apple, Baby, Bean, Bone, Brain, Carrot, Coffee, Droplet, Dumbbell, Egg, Eye, Fish, Gauge, Milk, Moon, Scale, Shield, Sun, Sunrise, Utensils, Waves, Wheat, Wind };

const T = {
  en: {
    parent: "Learn", title: "Child nutrition guide",
    jump: { stages: "By age", groups: "Food groups", needs: "Daily needs", nutrients: "Key nutrients", problems: "Common problems", day: "Sample day", avoid: "Foods to avoid", myths: "Myths" },
    stagesTitle: "What to feed at each age", stagesSub: "From birth to 5 years. 1 cup = 250 ml; let the child's appetite guide you",
    feeds: "How often", texture: "Texture", amount: "How much",
    groupsTitle: "Aim for at least 5 of these 8 food groups daily", groupsSub: "WHO's measure of a varied diet for children aged 6–23 months — and a good habit after that too",
    needsTitle: "Daily needs by age", needsSub: "Approximate needs per day (IOM / NIH Dietary Reference Intakes)", nutrient: "Nutrient",
    nutrientsTitle: "6 nutrients growing children need most", nutrientsSub: "Why each matters, and everyday foods that provide it",
    habitsTitle: "Good feeding habits", habitsSub: "How you feed matters as much as what you feed",
    problemsTitle: "Common problems — what helps", problemsSub: "Simple steps at home, and when to get help",
    dayTitle: "A sample day of eating", daySub: "For a child aged 1–5 years — 3 meals and 2 snacks",
    avoidTitle: "Avoid or limit these", avoidSub: "Young bodies are easily harmed",
    suppTitle: "Supplements and health programmes", suppSub: "Give only what a doctor or health worker advises",
    mythsTitle: "Child feeding myths", myth: "Myth", fact: "Fact",
    dangerTitle: "Danger signs — go to a hospital immediately",
    switch: "Also see", nextTitle: "Pregnancy food guide", nextDesc: "Good nutrition starts before birth",
  },
  bn: {
    parent: "জানুন", title: "শিশুর পুষ্টি গাইড",
    jump: { stages: "বয়স অনুযায়ী", groups: "খাদ্যগোষ্ঠী", needs: "দৈনিক চাহিদা", nutrients: "জরুরি পুষ্টি", problems: "সাধারণ সমস্যা", day: "নমুনা দিন", avoid: "যা এড়াবেন", myths: "ভুল ধারণা" },
    stagesTitle: "কোন বয়সে কী খাওয়াবেন", stagesSub: "জন্ম থেকে ৫ বছর পর্যন্ত। ১ কাপ = ২৫০ মি.লি.; শিশুর রুচি দেখে পরিমাণ ঠিক করুন",
    feeds: "কতবার", texture: "খাবারের ধরন", amount: "কতটুকু",
    groupsTitle: "প্রতিদিন এই ৮টি খাদ্যগোষ্ঠীর অন্তত ৫টি দিন", groupsSub: "৬–২৩ মাস বয়সী শিশুর খাবারের বৈচিত্র্য মাপার বিশ্ব স্বাস্থ্য সংস্থার মানদণ্ড — পরেও এটি ভালো অভ্যাস",
    needsTitle: "বয়স অনুযায়ী দৈনিক চাহিদা", needsSub: "দিনে আনুমানিক চাহিদা (IOM / NIH রেফারেন্স ইনটেক)", nutrient: "পুষ্টি উপাদান",
    nutrientsTitle: "বাড়ন্ত শিশুর সবচেয়ে জরুরি ৬টি পুষ্টি উপাদান", nutrientsSub: "কেন জরুরি, আর কোন প্রতিদিনের খাবারে পাবেন",
    habitsTitle: "খাওয়ানোর ভালো অভ্যাস", habitsSub: "কী খাওয়াচ্ছেন তার মতোই জরুরি কীভাবে খাওয়াচ্ছেন",
    problemsTitle: "সাধারণ সমস্যা — যা করলে উপকার হয়", problemsSub: "ঘরে করার সহজ উপায়, আর কখন সাহায্য নেবেন",
    dayTitle: "একদিনের খাবারের নমুনা", daySub: "১–৫ বছরের শিশুর জন্য — ৩ বেলা খাবার ও ২ বার নাস্তা",
    avoidTitle: "এগুলো এড়িয়ে চলুন বা কমান", avoidSub: "ছোট শরীর সহজেই ক্ষতিগ্রস্ত হয়",
    suppTitle: "সাপ্লিমেন্ট ও স্বাস্থ্য কর্মসূচি", suppSub: "শুধু চিকিৎসক বা স্বাস্থ্যকর্মীর পরামর্শমতো দেবেন",
    mythsTitle: "শিশুর খাবার নিয়ে ভুল ধারণা", myth: "ভুল ধারণা", fact: "সত্য",
    dangerTitle: "বিপদ চিহ্ন — দেরি না করে হাসপাতালে যান",
    switch: "আরও দেখুন", nextTitle: "গর্ভাবস্থার খাবার গাইড", nextDesc: "ভালো পুষ্টির শুরু জন্মের আগেই",
  },
};

function StageFact({ label, children }) {
  return (
    <div>
      <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="text-sm text-slate-800 dark:text-slate-200">{children}</dd>
    </div>
  );
}

export default function ChildNutritionPage() {
  const { lang, num, t } = useLang();
  const s = T[lang];

  return (
    <>
      <PageHero icon={ToyBrick} eyebrow={{ to: "/learn", label: s.parent }} title={s.title} sub={D.intro[lang]}>
        <nav aria-label={s.title} className="flex flex-wrap gap-2">
          {Object.entries(s.jump).map(([id, label], i) => (
            <a
              key={id}
              href={`#${id}`}
              className={i === 0
                ? "inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/25 transition hover:brightness-105"
                : "inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-brand-300"}
            >
              {label}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <section id="stages" className="scroll-mt-24">
          <SectionHeader icon={Baby} title={s.stagesTitle} sub={s.stagesSub} />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {D.stages.map((st, i) => {
              const c = tone(st.tone);
              return (
                <li key={st.id} className={`card p-5 ring-1 ${c.ring} ${i === 0 ? "sm:col-span-2" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`grid h-8 w-8 place-items-center rounded-full text-sm font-bold ${c.solid}`}>{num(i + 1)}</span>
                    <span className="font-bold text-slate-900 dark:text-white">{st.name[lang]}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.soft}`}>{st.tag[lang]}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{st.body[lang]}</p>
                  <dl className="mt-3 space-y-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                    <StageFact label={s.feeds}>{st.feeds[lang]}</StageFact>
                    <StageFact label={s.texture}>{st.texture[lang]}</StageFact>
                    <StageFact label={s.amount}>{st.amount[lang]}</StageFact>
                  </dl>
                  {st.eat.length > 0 && <div className="mt-4"><FoodFaces ids={st.eat} /></div>}
                </li>
              );
            })}
          </ol>
        </section>

        <section id="groups" className="mt-12 scroll-mt-24">
          <SectionHeader icon={Layers} title={s.groupsTitle} sub={s.groupsSub} />
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {D.groups.map(g => {
              const c = tone(g.tone);
              const Icon = ICONS[g.icon] || Sparkles;
              return (
                <li key={g.name.en} className="card p-4">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.soft}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-white">{g.name[lang]}</h3>
                  {g.eat.length > 0 && <div className="mt-3"><FoodFaces ids={g.eat} /></div>}
                </li>
              );
            })}
          </ul>
        </section>

        <section id="needs" className="mt-12 scroll-mt-24">
          <SectionHeader icon={Activity} title={s.needsTitle} sub={s.needsSub} />
          <div className="card overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500 dark:bg-slate-800/50 dark:text-slate-400">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">{s.nutrient}</th>
                  {D.needs.ages.map(a => <th key={a.en} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">{a[lang]}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {D.needs.rows.map(r => (
                  <tr key={r.label.en}>
                    <th scope="row" className="px-4 py-2.5 font-semibold text-slate-900 dark:text-white">{r.label[lang]}</th>
                    {r.values.map((v, i) => <td key={i} className="px-4 py-2.5 whitespace-nowrap text-slate-700 dark:text-slate-300">{v[lang]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
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

        <section className="mt-12">
          <SectionHeader icon={HeartHandshake} title={s.habitsTitle} sub={s.habitsSub} />
          <ul className="card grid gap-x-8 gap-y-3 p-5 sm:p-6 md:grid-cols-2">
            {D.habits.map(h => (
              <li key={h.en} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700 dark:text-brand-400" aria-hidden="true" />{h[lang]}
              </li>
            ))}
          </ul>
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
          <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white"><ShieldAlert className="h-6 w-6 text-brand-700 dark:text-brand-400" aria-hidden="true" />{s.mythsTitle}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {D.myths.map(m => (
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

        <section className="mt-12 rounded-2xl border border-red-200 bg-red-50/70 p-5 sm:p-6 dark:border-red-500/20 dark:bg-red-500/10">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-red-700 dark:text-red-300"><Siren className="h-5 w-5" aria-hidden="true" />{s.dangerTitle}</h2>
          <ul className="mt-3 grid gap-2 text-sm text-red-900 sm:grid-cols-2 dark:text-red-200">
            {D.danger[lang].map(x => (
              <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />{x}</li>
            ))}
          </ul>
        </section>

        <Link to="/pregnancy" className="card mt-10 flex items-center justify-between gap-3 p-5 transition hover:border-brand-400">
          <span className="flex items-center gap-3">
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${tone("violet").soft}`}><Baby className="h-5 w-5" aria-hidden="true" /></span>
            <span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">{s.switch}</span>
              <span className="block font-bold text-slate-900 dark:text-white">{s.nextTitle}</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">{s.nextDesc}</span>
            </span>
          </span>
          <ArrowRight className="h-5 w-5 text-brand-700 dark:text-brand-400" aria-hidden="true" />
        </Link>

        <Disclaimer>{t.disclaimer}</Disclaimer>
      </div>
    </>
  );
}
