import { ArrowRight, Coffee } from "lucide-react";
import { Link } from "../router.jsx";
import { useLang } from "../context/LangContext.jsx";
import SiteImage from "./SiteImage.jsx";

const T = {
  en: {
    kicker: "New · Coffee guide",
    title: "Black Coffee, brewed right",
    text: "From the forests of Ethiopia to cafés in Dhaka — what's really in your cup, how much caffeine is safe, and the healthiest way to drink it.",
    stats: [["2", "kcal a cup"], ["95", "mg caffeine"], ["400", "mg safe daily limit"]],
    cta: "Explore the coffee guide",
    alt: "A cup of Black Coffee",
  },
  bn: {
    kicker: "নতুন · কফি গাইড",
    title: "ব্ল্যাক কফি, সঠিক নিয়মে",
    text: "ইথিওপিয়ার বন থেকে ঢাকার ক্যাফে — এক কাপে আসলে কী আছে, কতটা ক্যাফেইন নিরাপদ, আর সবচেয়ে স্বাস্থ্যকর উপায়ে কীভাবে খাবেন।",
    stats: [["2", "ক্যালরি প্রতি কাপে"], ["95", "মি.গ্রা. ক্যাফেইন"], ["400", "মি.গ্রা. দৈনিক নিরাপদ সীমা"]],
    cta: "কফি গাইড দেখুন",
    alt: "এক কাপ ব্ল্যাক কফি",
  },
};

/** Home-page banner for the coffee guide (uses the coffee page's espresso palette). */
export default function CoffeeSpotlight() {
  const { lang, num } = useLang();
  const s = T[lang];
  return (
    <section data-reveal className="mt-12">
      <Link
        to="/coffee"
        className="group relative isolate grid overflow-hidden rounded-[2rem] bg-roast-950 text-roast-50 shadow-xl shadow-roast-900/20 md:grid-cols-[1.2fr_1fr]"
      >
        <div className="relative z-10 p-6 sm:p-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-roast-400/30 bg-roast-900/70 px-3 py-1 text-xs font-bold tracking-wider text-roast-200 uppercase">
            <Coffee className="h-3.5 w-3.5" aria-hidden="true" /> {s.kicker}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight font-black sm:text-4xl">{s.title}</h2>
          <p className="mt-3 max-w-lg text-roast-100/75">{s.text}</p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {s.stats.map(([v, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-3xl font-black text-roast-200">{num(+v)}</dd>
                <dd className="text-xs text-roast-200/60">{label}</dd>
              </div>
            ))}
          </dl>
          <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-roast-300 px-5 py-2.5 font-bold text-roast-950 transition group-hover:gap-3 group-hover:bg-roast-200">
            {s.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="relative min-h-56 md:min-h-full">
          <SiteImage id="coffee-cup" alt={s.alt} sizes="(min-width: 768px) 460px, 100vw" className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-roast-950 via-transparent to-transparent md:bg-gradient-to-r" aria-hidden="true" />
          {/* rising steam */}
          <svg viewBox="0 0 120 80" className="absolute top-4 left-1/2 h-20 w-32 -translate-x-1/2 md:top-8" aria-hidden="true">
            <g fill="none" stroke="#fbf6ef" strokeLinecap="round" strokeWidth="3.5" opacity="0.8">
              <path className="animate-steam" d="M40 75c-8-12 8-18 0-32" />
              <path className="animate-steam [animation-delay:1.2s]" d="M60 72c-8-12 8-18 0-34" />
              <path className="animate-steam [animation-delay:2.4s]" d="M80 75c-8-12 8-18 0-32" />
            </g>
          </svg>
        </div>
      </Link>
    </section>
  );
}
