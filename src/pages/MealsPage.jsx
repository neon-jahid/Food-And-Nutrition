import { useLocation } from "react-router-dom";
import { Clock, Droplets, Hourglass, Scale, UtensilsCrossed } from "lucide-react";
import { MEALS } from "../data/meals.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import MealGuide, { MEAL_ICONS } from "../components/MealGuide.jsx";
import { Disclaimer, FoodChips, PageHero } from "../components/PageKit.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";

const T = {
  en: {
    title: "What to eat, and when", sub: "A simple guide to breakfast, lunch, afternoon snack and dinner with everyday Bangladeshi food — what makes a good plate at each time of day.",
    learn: "Learn", dayTitle: "A healthy day on a plate", daySub: "One example day — mix and match from the ideas above",
    rulesTitle: "Rules for every meal",
    rules: [
      [Clock, "Eat at regular times", "Try not to go more than 4–5 hours awake without eating something."],
      [Scale, "Mind the portion", "Half the plate vegetables, a quarter rice or roti, a quarter protein."],
      [Droplets, "Drink water, not sugar", "6–8 glasses of water a day; keep soft drinks and juice occasional."],
      [Hourglass, "Finish dinner early", "Leave 2–3 hours between dinner and sleep."],
    ],
    note: "Calories are rough estimates for an average adult. Children, older people, pregnant women and people with diabetes, kidney or heart disease have different needs — ask a doctor or nutritionist.",
  },
  bn: {
    title: "কখন কী খাবেন", sub: "প্রতিদিনের দেশি খাবারে সকালের নাস্তা, দুপুরের খাবার, বিকেলের নাস্তা ও রাতের খাবারের সহজ গাইড — দিনের কোন সময়ে কেমন থালা ভালো।",
    learn: "জানুন", dayTitle: "এক থালায় একটি স্বাস্থ্যকর দিন", daySub: "একটি উদাহরণ দিন — ওপরের আইডিয়াগুলো মিলিয়ে নিজের মতো সাজান",
    rulesTitle: "প্রতিটি খাবারের নিয়ম",
    rules: [
      [Clock, "নির্দিষ্ট সময়ে খান", "জেগে থাকা অবস্থায় ৪–৫ ঘণ্টার বেশি না খেয়ে থাকবেন না।"],
      [Scale, "পরিমাণে খেয়াল রাখুন", "থালার অর্ধেক সবজি, এক-চতুর্থাংশ ভাত বা রুটি, এক-চতুর্থাংশ আমিষ।"],
      [Droplets, "চিনি নয়, পানি পান করুন", "দিনে ৬–৮ গ্লাস পানি; কোমল পানীয় ও জুস মাঝেমধ্যে।"],
      [Hourglass, "রাতের খাবার আগে সারুন", "রাতের খাবার ও ঘুমের মাঝে ২–৩ ঘণ্টা বিরতি রাখুন।"],
    ],
    note: "ক্যালরিগুলো একজন গড় প্রাপ্তবয়স্কের জন্য আনুমানিক হিসাব। শিশু, বয়স্ক, গর্ভবতী নারী এবং ডায়াবেটিস, কিডনি বা হৃদরোগ থাকলে চাহিদা আলাদা — চিকিৎসক বা পুষ্টিবিদের পরামর্শ নিন।",
  },
};

export default function MealsPage() {
  const { lang, num } = useLang();
  const s = T[lang];
  const { hash } = useLocation();
  const total = MEALS.reduce((sum, m) => sum + m.plates[0].kcal, 0);

  return (
    <>
      <PageHero icon={UtensilsCrossed} eyebrow={{ to: "/learn", label: s.learn }} title={s.title} sub={s.sub} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div id={hash.slice(1) || undefined} className="scroll-mt-24">
          <MealGuide initial={hash.slice(1)} key={hash} />
        </div>

        <section className="mt-12">
          <SectionHeader icon={Clock} title={s.dayTitle} sub={s.daySub} />
          <ol className="relative space-y-4 border-l-2 border-dashed border-slate-200 pl-6 dark:border-slate-700">
            {MEALS.map(m => {
              const Icon = MEAL_ICONS[m.id];
              const c = tone(m.tone);
              const plate = m.plates[0];
              return (
                <li key={m.id} className="relative">
                  <span className={`absolute top-4 -left-[2.4rem] grid h-7 w-7 place-items-center rounded-full ring-4 ring-slate-50 dark:ring-slate-950 ${c.solid}`}>
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                    <div className="sm:w-44 sm:shrink-0">
                      <p className="font-bold text-slate-900 dark:text-white">{m.name[lang]}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{m.time[lang]}</p>
                    </div>
                    <p className="flex-1 text-sm text-slate-700 dark:text-slate-300">{plate.name[lang]}</p>
                    <div className="sm:max-w-xs"><FoodChips ids={plate.foods} size="sm" /></div>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            ≈ {num(total)} {lang === "bn" ? "ক্যালরি সারা দিনে (চা, পানি ও ছোটখাটো খাবার বাদে)" : "kcal for the day (excluding tea and small extras)"}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-extrabold text-slate-900 dark:text-white">{s.rulesTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {s.rules.map(([Icon, title, body]) => (
              <div key={title} className="card p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <p className="mt-3 font-bold text-slate-900 dark:text-white">{title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <Disclaimer>{s.note}</Disclaimer>
      </div>
    </>
  );
}
