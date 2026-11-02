import { useMemo, useState } from "react";
import { Link } from "../router.jsx";
import {
  Activity, ArrowRight, Bean, BookOpen, Brain, ChevronRight, CircleCheck, CircleX, Clock, Coffee, Droplets, Dumbbell, Filter,
  Award, Crown, Hash, HeartPulse, Leaf, MapPin, Minus, Package, Plus, RotateCcw, ShieldCheck, Sparkles, Thermometer, TriangleAlert, UtensilsCrossed,
} from "lucide-react";
import { useLang } from "../context/LangContext.jsx";
import SiteImage from "../components/SiteImage.jsx";
import Slider from "../components/Slider.jsx";
import {
  BENEFITS, BREWS, CAFFEINE_DRINKS, CAFFEINE_LIMITS, CAUTIONS, COFFEE_MENU, COFFEE_MYTHS, COFFEE_SOURCES, CUP_FACTS, DAVIDOFF, DAVIDOFF_STEPS,
  HOW_TO, JOURNEY, ROASTS, SPECIES, TIMELINE,
} from "../data/coffee.js";

const T = {
  en: {
    crumb: "Coffee guide",
    eyebrow: "The coffee guide",
    title1: "Black Coffee,", title2: "brewed right.",
    lead: "Where coffee comes from, what is really in your cup, and how to drink it so it helps — not harms — your health.",
    ctaHow: "How to drink it better", ctaCalc: "Check your caffeine",
    perCup: "per 240 ml cup, plain black",
    nav: [["why", "Why Black Coffee"], ["origin", "Origin"], ["roast", "Roasts"], ["journey", "Bean to cup"], ["caffeine", "Caffeine"], ["menu", "Café menu"], ["benefits", "Benefits"], ["how", "How to drink"], ["brew", "Brewing"], ["davidoff", "Davidoff picks"], ["myths", "Myths"]],
    whyTitle: "Why Black Coffee?",
    whySub: "The coffee itself is almost calorie-free. What we add to it is where the trouble starts.",
    compare: [
      { name: "Black Coffee", tag: "Best choice", good: true, points: ["About 2 kcal a cup", "No sugar, no fat", "All the polyphenols, nothing added"] },
      { name: "Coffee with milk", tag: "Fine", good: true, points: ["Adds protein and calcium", "Calories depend on how much milk", "Keep sugar to a minimum"] },
      { name: "3-in-1 & sweet café drinks", tag: "Occasional treat", good: false, points: ["Often mostly sugar and creamer", "Creamer is usually made from vegetable oil", "Check the label for sugar per serving"] },
    ],
    originTitle: "From an Ethiopian forest to your cup",
    originSub: "Six centuries of coffee in six stops.",
    speciesTitle: "Two coffees rule the world",
    journeyTitle: "From flower to cup",
    journeySub: "Every cup passes through these six steps.",
    nutritionTitle: "What's in one cup?",
    nutritionSub: "Plain brewed black coffee, 240 ml. Values from USDA FoodData Central.",
    foodLink: "Full nutrition facts for coffee",
    calcTitle: "Caffeine calculator",
    calcSub: "Add what you drink in a day. Values are typical per serving — real cups vary with strength and brand.",
    total: "Total today", limit: "Safe limit for healthy adults", pregnancy: "Limit in pregnancy",
    statusOk: "Within the usual safe range for healthy adults.",
    statusPreg: "Above 200 mg — too much if you are pregnant or breastfeeding.",
    statusHigh: "Above 400 mg — more than the safe daily limit for adults.",
    reset: "Reset", add: "Add", remove: "Remove",
    benefitsTitle: "What coffee can do for you",
    benefitsSub: "What the research says — and how strong the evidence is.",
    levels: { good: "Good evidence", observational: "Observational link" },
    cautionsTitle: "When to be careful",
    howTitle: "How to drink coffee better",
    howSub: "Eight simple habits that keep the benefits and cut the downsides.",
    dayTitle: "A good coffee day",
    day: [["7–8 am", "Wake up, drink a glass of water first"], ["After breakfast", "Your first cup — black, or with a splash of milk"], ["Mid-morning", "A second cup if you like"], ["By 2 pm", "Last cup of the day"], ["Night", "No caffeine — sleep comes easier"]],
    brewTitle: "Ways to brew",
    filtered: "Paper-filtered", unfiltered: "Unfiltered",
    mythsTitle: "Coffee myths, checked",
    myth: "Myth", fact: "Fact",
    stats: [["2", "kcal in a cup of Black Coffee"], ["95", "mg caffeine in a brewed cup"], ["400", "mg — daily caffeine limit for adults"], ["3–4", "cups a day linked with the lowest health risks in studies"]],
    roastTitle: "Light, medium or dark?",
    roastSub: "Roasting decides the taste. Caffeine per gram stays almost the same — dark roast is not 'stronger' in caffeine.",
    acidity: "Acidity", body: "Body",
    menuTitle: "The café menu, decoded",
    menuSub: "What is really inside each drink — approximate values for a regular cup with whole milk.",
    layers: { espresso: "Espresso", water: "Hot water", milk: "Steamed milk", foam: "Foam", choc: "Chocolate", ice: "Ice" },
    kcal: "kcal", caf: "mg caffeine", smart: "Smart pick", treat: "Treat",
    davTitle: "Davidoff Café: our picks",
    davKicker: "Premium instant coffee",
    davSub: "Davidoff instant coffee is easy to find in Bangladeshi superstores. Here is how the three most popular jars compare — and how to make them the healthy way.",
    roastLabel: "Roast", bestFor: "Best for", featured: "Our top pick",
    roastNames: ["Light-medium", "Medium", "Dark"],
    davHowTitle: "Make a better cup of instant coffee",
    davNote: "Not sponsored. Taste notes are our own general guide — check the jar for the maker's details. Davidoff is a trademark of its owner.",
    sourcesTitle: "Sources",
    disclaimer: "This guide is general education, not medical advice. If you are pregnant, have a heart condition, high blood pressure, anxiety, acid reflux or take regular medicines, ask your doctor how much caffeine is right for you.",
    photoCredit: "Photos: Wikimedia Commons — see References for authors and licences.",
    source: "Source",
  },
  bn: {
    crumb: "কফি গাইড",
    eyebrow: "কফি গাইড",
    title1: "ব্ল্যাক কফি,", title2: "সঠিক নিয়মে।",
    lead: "কফি কোথা থেকে এল, এক কাপে আসলে কী আছে, আর কীভাবে খেলে তা স্বাস্থ্যের ক্ষতি নয়, উপকার করে।",
    ctaHow: "ভালোভাবে খাওয়ার নিয়ম", ctaCalc: "ক্যাফেইন হিসাব করুন",
    perCup: "প্রতি ২৪০ মি.লি. কাপ, চিনি-দুধ ছাড়া",
    nav: [["why", "কেন ব্ল্যাক কফি"], ["origin", "উৎপত্তি"], ["roast", "রোস্ট"], ["journey", "বীজ থেকে কাপ"], ["caffeine", "ক্যাফেইন"], ["menu", "ক্যাফে মেনু"], ["benefits", "উপকারিতা"], ["how", "খাওয়ার নিয়ম"], ["brew", "তৈরির পদ্ধতি"], ["davidoff", "ডেভিডফ বাছাই"], ["myths", "ভুল ধারণা"]],
    whyTitle: "কেন ব্ল্যাক কফি?",
    whySub: "কফি নিজে প্রায় ক্যালরিশূন্য। সমস্যা শুরু হয় আমরা যা মেশাই, সেখান থেকে।",
    compare: [
      { name: "ব্ল্যাক কফি", tag: "সেরা পছন্দ", good: true, points: ["কাপপ্রতি প্রায় ২ ক্যালরি", "চিনি নেই, চর্বি নেই", "পুরো পলিফেনল, বাড়তি কিছু নেই"] },
      { name: "দুধ কফি", tag: "চলবে", good: true, points: ["আমিষ ও ক্যালসিয়াম যোগ হয়", "ক্যালরি নির্ভর করে দুধের পরিমাণে", "চিনি যতটা সম্ভব কম"] },
      { name: "৩-ইন-১ ও মিষ্টি ক্যাফে ড্রিংক", tag: "মাঝেমধ্যে", good: false, points: ["প্রায়ই বেশিরভাগই চিনি আর ক্রিমার", "ক্রিমার সাধারণত উদ্ভিজ্জ তেল থেকে তৈরি", "লেবেলে প্রতি পরিবেশনে চিনি দেখুন"] },
    ],
    originTitle: "ইথিওপিয়ার বন থেকে আপনার কাপে",
    originSub: "ছয় শতাব্দীর কফির গল্প, ছয়টি ধাপে।",
    speciesTitle: "বিশ্ব চলে দুই জাতের কফিতে",
    journeyTitle: "ফুল থেকে কাপ",
    journeySub: "প্রতিটি কাপ এই ছয়টি ধাপ পেরিয়ে আসে।",
    nutritionTitle: "এক কাপে কী আছে?",
    nutritionSub: "চিনি-দুধ ছাড়া ব্রিউড ব্ল্যাক কফি, ২৪০ মি.লি.। মান USDA FoodData Central থেকে।",
    foodLink: "কফির পূর্ণ পুষ্টিতথ্য",
    calcTitle: "ক্যাফেইন ক্যালকুলেটর",
    calcSub: "দিনে যা পান করেন যোগ করুন। মানগুলো সাধারণ পরিবেশনের — কড়া-পাতলা ও ব্র্যান্ডভেদে আসল পরিমাণ আলাদা হয়।",
    total: "আজ মোট", limit: "সুস্থ প্রাপ্তবয়স্কের নিরাপদ সীমা", pregnancy: "গর্ভাবস্থায় সীমা",
    statusOk: "সুস্থ প্রাপ্তবয়স্কের স্বাভাবিক নিরাপদ সীমার মধ্যে।",
    statusPreg: "২০০ মি.গ্রা.-এর বেশি — গর্ভাবস্থা বা বুকের দুধ খাওয়ানোর সময় বেশি।",
    statusHigh: "৪০০ মি.গ্রা.-এর বেশি — প্রাপ্তবয়স্কের দৈনিক নিরাপদ সীমার চেয়ে বেশি।",
    reset: "রিসেট", add: "যোগ করুন", remove: "কমান",
    benefitsTitle: "কফি আপনার জন্য যা করতে পারে",
    benefitsSub: "গবেষণা কী বলে — আর প্রমাণ কতটা শক্ত।",
    levels: { good: "ভালো প্রমাণ", observational: "পর্যবেক্ষণমূলক সম্পর্ক" },
    cautionsTitle: "কখন সাবধান হবেন",
    howTitle: "কফি খাওয়ার ভালো নিয়ম",
    howSub: "আটটি সহজ অভ্যাস — উপকার থাকবে, ক্ষতি কমবে।",
    dayTitle: "কফির একটি ভালো দিন",
    day: [["সকাল ৭–৮টা", "ঘুম থেকে উঠে আগে এক গ্লাস পানি"], ["নাস্তার পরে", "প্রথম কাপ — ব্ল্যাক কফি, বা একটু দুধ দিয়ে"], ["সকালের মাঝামাঝি", "চাইলে দ্বিতীয় কাপ"], ["দুপুর ২টার মধ্যে", "দিনের শেষ কাপ"], ["রাত", "ক্যাফেইন নয় — ঘুম সহজে আসবে"]],
    brewTitle: "কফি তৈরির পদ্ধতি",
    filtered: "কাগজে ছাঁকা", unfiltered: "ফিল্টার ছাড়া",
    mythsTitle: "কফি নিয়ে ভুল ধারণা, যাচাই করা",
    myth: "ভুল ধারণা", fact: "সত্য",
    stats: [["২", "ক্যালরি — এক কাপ ব্ল্যাক কফিতে"], ["৯৫", "মি.গ্রা. ক্যাফেইন — এক কাপ ব্রিউড কফিতে"], ["৪০০", "মি.গ্রা. — প্রাপ্তবয়স্কের দৈনিক ক্যাফেইন সীমা"], ["৩–৪", "কাপ দিনে — গবেষণায় সবচেয়ে কম স্বাস্থ্যঝুঁকির সাথে যুক্ত"]],
    roastTitle: "লাইট, মিডিয়াম না ডার্ক?",
    roastSub: "রোস্টই স্বাদ ঠিক করে। প্রতি গ্রামে ক্যাফেইন প্রায় একই থাকে — ডার্ক রোস্ট মানেই বেশি ক্যাফেইন নয়।",
    acidity: "টক ভাব", body: "বডি",
    menuTitle: "ক্যাফে মেনুর ভেতরের কথা",
    menuSub: "প্রতিটি ড্রিংকে আসলে কী থাকে — ফুল-ক্রিম দুধে সাধারণ এক কাপের আনুমানিক মান।",
    layers: { espresso: "এসপ্রেসো", water: "গরম পানি", milk: "গরম দুধ", foam: "ফেনা", choc: "চকলেট", ice: "বরফ" },
    kcal: "ক্যালরি", caf: "মি.গ্রা. ক্যাফেইন", smart: "ভালো পছন্দ", treat: "মাঝেমধ্যে",
    davTitle: "ডেভিডফ ক্যাফে: আমাদের বাছাই",
    davKicker: "প্রিমিয়াম ইনস্ট্যান্ট কফি",
    davSub: "ডেভিডফের ইনস্ট্যান্ট কফি বাংলাদেশের সুপারশপে সহজেই পাওয়া যায়। জনপ্রিয় তিনটি বয়ামের তুলনা — আর স্বাস্থ্যকরভাবে বানানোর নিয়ম।",
    roastLabel: "রোস্ট", bestFor: "যাদের জন্য ভালো", featured: "আমাদের সেরা বাছাই",
    roastNames: ["লাইট-মিডিয়াম", "মিডিয়াম", "ডার্ক"],
    davHowTitle: "ইনস্ট্যান্ট কফির ভালো কাপ বানানোর নিয়ম",
    davNote: "এটি কোনো স্পনসরড কনটেন্ট নয়। স্বাদের বর্ণনা আমাদের সাধারণ নির্দেশনা — প্রস্তুতকারকের তথ্যের জন্য বয়ামের লেবেল দেখুন। Davidoff এর মালিকের ট্রেডমার্ক।",
    sourcesTitle: "তথ্যসূত্র",
    disclaimer: "এই গাইড সাধারণ শিক্ষার জন্য, চিকিৎসা পরামর্শ নয়। গর্ভাবস্থা, হৃদরোগ, উচ্চ রক্তচাপ, উদ্বেগ, অ্যাসিডিটি থাকলে বা নিয়মিত ওষুধ খেলে কতটা ক্যাফেইন আপনার জন্য ঠিক, তা ডাক্তারের কাছে জেনে নিন।",
    photoCredit: "ছবি: উইকিমিডিয়া কমন্স — লেখক ও লাইসেন্স তথ্যসূত্র পাতায়।",
    source: "সূত্র",
  },
};

/** One consistent, clearly visible hover for every card on the page. */
const LIFT = "transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-roast-900/20";

const BENEFIT_ICONS = { brain: Brain, dumbbell: Dumbbell, shield: ShieldCheck, liver: Activity, heart: HeartPulse, leaf: Leaf };
const HOW_ICONS = { cup: Coffee, filter: Filter, count: Hash, clock: Clock, utensils: UtensilsCrossed, droplet: Droplets, sachet: Package, spice: Sparkles };
const SOURCE_INDEX = Object.fromEntries(COFFEE_SOURCES.map((s, i) => [s.id, i + 1]));

/* ------------------------------------------------------------------ */
/* Decorative pieces                                                    */
/* ------------------------------------------------------------------ */

/** Animated cup of black coffee with rising steam (pure SVG + CSS). */
function SteamCup({ className = "" }) {
  return (
    <svg viewBox="0 0 240 240" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="cf-surface" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#5a3420" />
          <stop offset="55%" stopColor="#2a160c" />
          <stop offset="100%" stopColor="#120904" />
        </radialGradient>
        <linearGradient id="cf-cup" x1="0" x2="1">
          <stop offset="0%" stopColor="#fdfaf5" />
          <stop offset="70%" stopColor="#efe4d3" />
          <stop offset="100%" stopColor="#d8c6ad" />
        </linearGradient>
      </defs>
      {/* steam */}
      <g fill="none" stroke="#f4e8d6" strokeLinecap="round" strokeWidth="5" opacity="0.9">
        <path className="animate-steam" d="M95 78c-10-14 10-22 0-38" />
        <path className="animate-steam [animation-delay:1.2s]" d="M120 74c-10-14 10-22 0-40" />
        <path className="animate-steam [animation-delay:2.4s]" d="M145 78c-10-14 10-22 0-38" />
      </g>
      {/* saucer */}
      <ellipse cx="120" cy="200" rx="100" ry="18" fill="#d8c6ad" />
      <ellipse cx="120" cy="196" rx="100" ry="18" fill="#f6efe4" />
      {/* cup body */}
      <path d="M48 104h144l-12 72a26 26 0 0 1-26 22H86a26 26 0 0 1-26-22z" fill="url(#cf-cup)" />
      <path d="M190 118c22-6 34 6 30 22-4 16-22 22-38 18" fill="none" stroke="#efe4d3" strokeWidth="11" strokeLinecap="round" />
      {/* coffee */}
      <ellipse cx="120" cy="104" rx="72" ry="15" fill="#e9dcc8" />
      <ellipse cx="120" cy="105" rx="64" ry="11" fill="url(#cf-surface)" />
      <ellipse className="animate-ripple origin-center [transform-box:fill-box]" cx="108" cy="102" rx="20" ry="3" fill="#8a5a3a" />
    </svg>
  );
}

/** A coffee bean drawn in SVG (for floating decoration). */
function BeanShape({ className = "", style }) {
  return (
    <svg viewBox="0 0 40 56" className={className} style={style} aria-hidden="true">
      <ellipse cx="20" cy="28" rx="17" ry="25" fill="currentColor" />
      <path d="M20 5c-8 10 8 22 0 46" fill="none" stroke="rgb(0 0 0 / .35)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function SectionTitle({ kicker, title, sub, dark = false }) {
  return (
    <div data-reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
      {kicker && (
        <p className={`text-xs font-bold tracking-[0.2em] uppercase ${dark ? "text-roast-300" : "text-roast-600 dark:text-roast-300"}`}>{kicker}</p>
      )}
      <h2 className={`mt-2 font-serif text-3xl font-black tracking-tight sm:text-4xl ${dark ? "text-roast-50" : "text-roast-900 dark:text-roast-50"}`}>{title}</h2>
      {sub && <p className={`mt-3 ${dark ? "text-roast-200/80" : "text-roast-800/80 dark:text-roast-200/80"}`}>{sub}</p>}
    </div>
  );
}

function SourceRef({ id }) {
  const { lang, num } = useLang();
  if (!id) return null;
  const n = num(SOURCE_INDEX[id]);
  return (
    <a href={`#src-${id}`} className="ml-1 align-super text-[10px] font-bold text-roast-500 hover:underline" aria-label={`${T[lang].source} ${n}`}>
      [{n}]
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                             */
/* ------------------------------------------------------------------ */

function Hero({ s }) {
  const { lang, t, num } = useLang();
  return (
    <section className="relative isolate overflow-hidden bg-roast-950 text-roast-50">
      <SiteImage id="coffee-beans" alt="" eager sizes="100vw" className="absolute inset-0 -z-20 h-full w-full opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-roast-950 via-roast-950/85 to-roast-950/40" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-roast-950 to-transparent" aria-hidden="true" />

      {/* floating beans */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden text-roast-500/50 sm:block" aria-hidden="true">
        <BeanShape className="absolute top-[14%] left-[46%] h-8 w-6 rotate-12 animate-float" />
        <BeanShape className="absolute top-[70%] left-[40%] h-6 w-4 -rotate-45 animate-float will-change-transform [animation-delay:-3s]" />
        <BeanShape className="absolute top-[22%] right-[6%] h-10 w-7 rotate-45 animate-float will-change-transform [animation-delay:-5s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 pb-14 sm:pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20">
        <div>
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-roast-200/70">
            <Link to="/" className="hover:text-roast-100">{t.home}</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-roast-100" aria-current="page">{s.crumb}</span>
          </nav>
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-roast-400/30 bg-roast-900/60 px-3 py-1.5 text-xs font-bold tracking-[0.18em] text-roast-200 uppercase">
            <Coffee className="h-3.5 w-3.5" aria-hidden="true" /> {s.eyebrow}
          </p>
          <h1 className="mt-5 animate-fade-up font-serif text-5xl leading-[1.02] font-black tracking-tight [animation-delay:100ms] sm:text-7xl">
            {s.title1}
            <br />
            <span className="bg-gradient-to-r from-roast-200 via-roast-300 to-roast-500 bg-clip-text text-transparent">{s.title2}</span>
          </h1>
          <p className="mt-5 max-w-xl animate-fade-up text-base text-roast-100/80 [animation-delay:200ms] sm:text-lg">{s.lead}</p>
          <div className="mt-7 flex animate-fade-up flex-wrap gap-3 [animation-delay:300ms]">
            <a href="#how" className="inline-flex items-center gap-2 rounded-full bg-roast-300 px-5 py-3 font-bold text-roast-950 shadow-lg shadow-roast-950/40 transition hover:-translate-y-0.5 hover:bg-roast-200">
              {s.ctaHow} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#caffeine" className="inline-flex items-center gap-2 rounded-full border border-roast-300/40 px-5 py-3 font-bold text-roast-100 transition hover:bg-roast-100/10">
              {s.ctaCalc}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-fade-up [animation-delay:200ms] sm:max-w-sm">
          <div className="absolute inset-6 rounded-full bg-roast-500/25 blur-3xl" aria-hidden="true" />
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-roast-300/25" aria-hidden="true" />
          <SteamCup className="relative w-full drop-shadow-2xl" />
          <dl className="relative -mt-4 grid grid-cols-3 gap-2 text-center">
            {[["kcal", 2, lang === "bn" ? "ক্যালরি" : "kcal"], ["caf", 95, lang === "bn" ? "মি.গ্রা. ক্যাফেইন" : "mg caffeine"], ["sugar", 0, lang === "bn" ? "গ্রা. চিনি" : "g sugar"]].map(([k, v, label]) => (
              <div key={k} className="rounded-2xl border border-roast-300/20 bg-roast-900/70 px-2 py-3 backdrop-blur">
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-2xl font-black text-roast-100">{num(v)}</dd>
                <dd className="text-[11px] leading-tight text-roast-200/70">{label}</dd>
              </div>
            ))}
          </dl>
          <p className="relative mt-2 text-center text-xs text-roast-200/60">{s.perCup}</p>
        </div>
      </div>
    </section>
  );
}

function SectionNav({ s }) {
  return (
    <nav aria-label={s.crumb} className="sticky top-16 z-30 border-y border-roast-800 bg-roast-950/90 backdrop-blur-xl">
      <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {s.nav.map(([id, label]) => (
          <li key={id} className="shrink-0">
            <a href={`#${id}`} className="block rounded-full px-3.5 py-1.5 text-sm font-semibold text-roast-200/80 transition hover:bg-roast-800 hover:text-roast-50">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function WhyBlack({ s }) {
  return (
    <section id="why" className="scroll-mt-32 px-4 py-16 sm:py-20">
      <SectionTitle kicker="01" title={s.whyTitle} sub={s.whySub} />
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {s.compare.map((c, i) => (
          <article
            key={c.name}
            data-reveal
            className={`group relative overflow-hidden rounded-3xl border p-6 ${LIFT} ${
              i === 0
                ? "border-roast-700 bg-roast-900 text-roast-50 shadow-xl shadow-roast-900/25 hover:border-roast-400 md:scale-[1.03]"
                : c.good
                  ? "border-roast-200 bg-white/80 hover:border-emerald-400 dark:border-roast-800 dark:bg-roast-950/60"
                  : "border-roast-200 bg-white/80 hover:border-amber-400 dark:border-roast-800 dark:bg-roast-950/60"
            }`}
          >
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
              i === 0 ? "bg-roast-300 text-roast-950" : c.good ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300" : "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300"
            }`}>
              {c.tag}
            </span>
            <h3 className={`mt-3 font-serif text-2xl font-black ${i === 0 ? "" : "text-roast-900 dark:text-roast-50"}`}>{c.name}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {c.points.map(p => (
                <li key={p} className="flex gap-2">
                  {c.good ? <CircleCheck className={`mt-0.5 h-4 w-4 shrink-0 ${i === 0 ? "text-roast-300" : "text-emerald-600"}`} aria-hidden="true" /> : <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />}
                  <span className={i === 0 ? "text-roast-100" : "text-slate-700 dark:text-roast-100/80"}>{p}</span>
                </li>
              ))}
            </ul>
            {i === 0 && <Coffee className="absolute -right-4 -bottom-4 h-28 w-28 text-roast-800 transition duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-roast-700" aria-hidden="true" />}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-roast-300 to-roast-600 transition duration-500 group-hover:scale-x-100" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Origin({ s }) {
  const { lang } = useLang();
  return (
    <section id="origin" className="scroll-mt-32 bg-roast-100/70 px-4 py-16 sm:py-20 dark:bg-roast-900/40">
      <SectionTitle kicker="02" title={s.originTitle} sub={s.originSub} />
      <ol className="relative mx-auto max-w-3xl">
        {/* the line */}
        <span className="absolute top-2 bottom-2 left-[1.15rem] w-0.5 bg-gradient-to-b from-roast-300 via-roast-500 to-roast-800 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />
        {TIMELINE.map((e, i) => (
          <li key={e.when.en} data-reveal className={`relative mb-8 pl-12 last:mb-0 sm:w-1/2 sm:pl-0 ${i % 2 ? "sm:ml-auto sm:pl-10" : "sm:pr-10 sm:text-right"}`}>
            <span className={`absolute top-1 left-2 grid h-7 w-7 place-items-center rounded-full bg-roast-700 text-roast-50 ring-4 ring-roast-100 dark:ring-roast-950 ${i % 2 ? "sm:-left-3.5" : "sm:right-[-0.9rem] sm:left-auto"}`}>
              {i === TIMELINE.length - 1 ? <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> : <Bean className="h-3.5 w-3.5" aria-hidden="true" />}
            </span>
            <p className="text-xs font-bold tracking-widest text-roast-600 uppercase dark:text-roast-300">{e.when[lang]}</p>
            <h3 className="mt-1 font-serif text-xl font-black text-roast-900 dark:text-roast-50">{e.title[lang]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-roast-900/75 dark:text-roast-100/75">{e.text[lang]}</p>
          </li>
        ))}
      </ol>

      <h3 data-reveal className="mx-auto mt-16 mb-6 max-w-5xl text-center font-serif text-2xl font-black text-roast-900 dark:text-roast-50">{s.speciesTitle}</h3>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {SPECIES.map((sp, i) => (
          <article key={sp.id} data-reveal className={`group relative overflow-hidden rounded-3xl border p-6 ${LIFT} ${i ? "border-roast-800 bg-roast-900 text-roast-50 hover:border-roast-500" : "border-roast-200 bg-white text-roast-900 hover:border-roast-400 dark:border-roast-800 dark:bg-roast-950 dark:text-roast-50"}`}>
            <BeanShape className={`pointer-events-none absolute -top-6 -right-4 h-32 w-24 rotate-12 transition duration-700 group-hover:rotate-45 group-hover:scale-110 ${i ? "text-roast-800" : "text-roast-100 dark:text-roast-900"}`} />
            <p className="relative text-xs font-bold tracking-widest uppercase opacity-70">{sp.share[lang]}</p>
            <h4 className="relative mt-1 font-serif text-3xl font-black">{sp.name[lang]}</h4>
            <p className="relative text-sm italic opacity-70">{sp.latin}</p>
            <ul className="relative mt-4 space-y-2 text-sm">
              {sp.points[lang].map(p => (
                <li key={p} className="flex gap-2"><Bean className="mt-0.5 h-4 w-4 shrink-0 text-roast-500" aria-hidden="true" />{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey({ s }) {
  const { lang, num } = useLang();
  return (
    <section id="journey" className="scroll-mt-32 bg-roast-950 py-16 text-roast-50 sm:py-20">
      <div className="px-4"><SectionTitle kicker="04" title={s.journeyTitle} sub={s.journeySub} dark /></div>
      <div className="mx-auto max-w-6xl px-4">
      <Slider until="lg" dark label={s.journeyTitle} slide="[--slide:calc((100%_-_0.75rem)/2)] sm:[--slide:calc((100%_-_2rem)/3)]" gridClass="lg:grid lg:grid-cols-6 lg:gap-4">
        {JOURNEY.map((j, i) => (
          <div key={j.image} data-reveal className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <SiteImage id={j.image} alt={j.title[lang]} sizes="(min-width: 1024px) 190px, 70vw" className="h-full w-full transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-roast-950/90 via-roast-950/10 to-transparent" aria-hidden="true" />
              <span className="absolute top-3 left-3 grid h-8 w-8 place-items-center rounded-full bg-roast-300 font-black text-roast-950">{num(i + 1)}</span>
              <h3 className="absolute bottom-3 left-4 font-serif text-xl font-black">{j.title[lang]}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-roast-200/80">{j.text[lang]}</p>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

function Caffeine({ s }) {
  const { lang, num } = useLang();
  const [counts, setCounts] = useState({});
  const total = useMemo(() => CAFFEINE_DRINKS.reduce((n, d) => n + d.mg * (counts[d.id] || 0), 0), [counts]);
  const change = (id, by) => setCounts(c => ({ ...c, [id]: Math.max(0, Math.min(12, (c[id] || 0) + by)) }));
  const max = 600;
  const pct = Math.min(100, (total / max) * 100);
  const status = total > CAFFEINE_LIMITS.adult ? "high" : total > CAFFEINE_LIMITS.pregnancy ? "preg" : "ok";
  const bar = { ok: "from-emerald-400 to-emerald-500", preg: "from-amber-400 to-amber-500", high: "from-rose-500 to-rose-600" }[status];
  const unit = lang === "bn" ? "মি.গ্রা." : "mg";

  return (
    <section id="caffeine" className="scroll-mt-32 px-4 py-16 sm:py-20">
      <SectionTitle kicker="05" title={s.nutritionTitle} sub={s.nutritionSub} />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {CUP_FACTS.map(f => (
          <div key={f.key} data-reveal className={`rounded-2xl border border-roast-200 bg-white/80 p-4 text-center hover:border-roast-400 dark:border-roast-800 dark:bg-roast-950/60 ${LIFT}`}>
            <p className="font-serif text-3xl font-black text-roast-800 dark:text-roast-200">{num(f.value)}</p>
            <p className="text-xs text-roast-700/70 dark:text-roast-200/60">{f.unit[lang]}</p>
            <p className="mt-1 text-sm font-semibold text-roast-900 dark:text-roast-50">{f.label[lang]}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center">
        <Link to="/foods/coffee" className="inline-flex items-center gap-1 text-sm font-semibold text-roast-600 hover:underline dark:text-roast-300">
          {s.foodLink} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </p>

      <div data-reveal className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] bg-roast-950 text-roast-50 shadow-2xl shadow-roast-900/30">
        <div className="grid lg:grid-cols-[1fr_20rem]">
          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <h3 className="font-serif text-2xl font-black sm:text-3xl">{s.calcTitle}</h3>
                <p className="mt-1 max-w-lg text-sm text-roast-200/70">{s.calcSub}</p>
              </div>
              <button type="button" onClick={() => setCounts({})} className="inline-flex items-center gap-1.5 rounded-full border border-roast-700 px-3 py-1.5 text-xs font-semibold text-roast-200 transition hover:bg-roast-800">
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> {s.reset}
              </button>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {CAFFEINE_DRINKS.map(d => {
                const n = counts[d.id] || 0;
                return (
                  <li key={d.id} className={`flex items-center gap-3 rounded-2xl border p-3 transition ${n ? "border-roast-400/60 bg-roast-800/70" : "border-roast-800 bg-roast-900/50"}`}>
                    <span className="text-2xl" aria-hidden="true">{d.icon}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">{d.name[lang]}</span>
                      <span className="block text-xs text-roast-200/60">{d.serving[lang]} · {num(d.mg)} {unit}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <button type="button" onClick={() => change(d.id, -1)} disabled={!n} aria-label={`${s.remove}: ${d.name[lang]}`}
                        className="grid h-9 w-9 place-items-center rounded-full bg-roast-800 transition hover:bg-roast-700 disabled:opacity-30">
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <output className="w-6 text-center font-bold tabular-nums" aria-live="polite">{num(n)}</output>
                      <button type="button" onClick={() => change(d.id, 1)} aria-label={`${s.add}: ${d.name[lang]}`}
                        className="grid h-9 w-9 place-items-center rounded-full bg-roast-300 text-roast-950 transition hover:bg-roast-200 active:scale-90">
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-4 border-t border-roast-800 bg-roast-900/60 p-5 sm:p-8 lg:border-t-0 lg:border-l">
            <p className="text-sm text-roast-200/70">{s.total}</p>
            <p className="font-serif text-6xl font-black tabular-nums" aria-live="polite">
              {num(total)} <span className="text-lg font-semibold text-roast-200/70">{unit}</span>
            </p>
            <div className="relative h-4 overflow-hidden rounded-full bg-roast-800" role="img" aria-label={`${num(total)} / ${num(CAFFEINE_LIMITS.adult)} ${unit}`}>
              <div className={`h-full rounded-full bg-gradient-to-r ${bar} transition-[width] duration-500 ease-out`} style={{ width: `${pct}%` }} />
              <span className="absolute inset-y-0 w-0.5 bg-amber-200/80" style={{ left: `${(CAFFEINE_LIMITS.pregnancy / max) * 100}%` }} aria-hidden="true" />
              <span className="absolute inset-y-0 w-0.5 bg-rose-200" style={{ left: `${(CAFFEINE_LIMITS.adult / max) * 100}%` }} aria-hidden="true" />
            </div>
            <dl className="space-y-1 text-xs text-roast-200/70">
              <div className="flex justify-between gap-2"><dt>{s.pregnancy}</dt><dd className="font-semibold text-amber-200">{num(CAFFEINE_LIMITS.pregnancy)} {unit}</dd></div>
              <div className="flex justify-between gap-2"><dt>{s.limit}</dt><dd className="font-semibold text-rose-200">{num(CAFFEINE_LIMITS.adult)} {unit}</dd></div>
            </dl>
            <p className={`rounded-2xl p-3 text-sm font-semibold ${status === "ok" ? "bg-emerald-500/15 text-emerald-200" : status === "preg" ? "bg-amber-500/15 text-amber-200" : "bg-rose-500/20 text-rose-200"}`} role="status">
              {status === "ok" ? s.statusOk : status === "preg" ? s.statusPreg : s.statusHigh}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits({ s }) {
  const { lang } = useLang();
  return (
    <section id="benefits" className="scroll-mt-32 bg-roast-100/70 px-4 py-16 sm:py-20 dark:bg-roast-900/40">
      <SectionTitle kicker="07" title={s.benefitsTitle} sub={s.benefitsSub} />
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map(b => {
          const Icon = BENEFIT_ICONS[b.icon];
          return (
            <article key={b.title.en} data-reveal className={`group rounded-3xl border border-transparent bg-white p-6 shadow-sm hover:border-roast-300 dark:bg-roast-950 dark:hover:border-roast-700 ${LIFT}`}>
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-roast-900 text-roast-200 transition group-hover:rotate-6 group-hover:bg-roast-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${b.level === "good" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300" : "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300"}`}>
                  {s.levels[b.level]}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-black text-roast-900 dark:text-roast-50">{b.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-roast-100/75">{b.text[lang]}<SourceRef id={b.src} /></p>
            </article>
          );
        })}
      </div>

      <h3 data-reveal className="mx-auto mt-16 mb-6 flex max-w-5xl items-center justify-center gap-2 font-serif text-2xl font-black text-roast-900 dark:text-roast-50">
        <TriangleAlert className="h-6 w-6 text-amber-600" aria-hidden="true" /> {s.cautionsTitle}
      </h3>
      <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CAUTIONS.map(c => (
          <article key={c.title.en} data-reveal className={`rounded-2xl border border-amber-200/80 bg-amber-50/80 p-5 hover:border-amber-400 hover:bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/5 dark:hover:border-amber-400/50 ${LIFT}`}>
            <h4 className="font-bold text-amber-900 dark:text-amber-200">{c.title[lang]}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-amber-950/80 dark:text-amber-100/75">{c.text[lang]}<SourceRef id={c.src} /></p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowTo({ s }) {
  const { lang, num } = useLang();
  return (
    <section id="how" className="scroll-mt-32 relative overflow-hidden bg-roast-950 px-4 py-16 text-roast-50 sm:py-20">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-roast-600/20 blur-3xl" aria-hidden="true" />
      <SectionTitle kicker="08" title={s.howTitle} sub={s.howSub} dark />
      <ol className="relative mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_TO.map((h, i) => {
          const Icon = HOW_ICONS[h.icon];
          return (
            <li key={h.title.en} data-reveal className={`group rounded-3xl border border-roast-800 bg-roast-900/60 p-5 hover:border-roast-500/60 hover:bg-roast-900 hover:shadow-roast-950/60 ${LIFT}`}>
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-roast-300 text-roast-950 transition group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-4xl font-black text-roast-800 transition group-hover:text-roast-700" aria-hidden="true">{num(i + 1)}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{h.title[lang]}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-roast-200/75">{h.text[lang]}</p>
            </li>
          );
        })}
      </ol>

      <div data-reveal className="relative mx-auto mt-14 max-w-5xl rounded-[2rem] border border-roast-800 bg-gradient-to-br from-roast-900 to-roast-950 p-6 sm:p-8">
        <h3 className="flex items-center gap-2 font-serif text-2xl font-black"><Clock className="h-6 w-6 text-roast-300" aria-hidden="true" /> {s.dayTitle}</h3>
        <ol className="mt-6 grid gap-4 sm:grid-cols-5">
          {s.day.map(([time, what], i) => (
            <li key={time} className="relative flex gap-3 sm:flex-col sm:gap-2">
              <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ring-4 sm:mt-0 ${i === 4 ? "bg-roast-700 ring-roast-800" : "bg-roast-300 ring-roast-300/20"}`} aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold text-roast-200">{time}</span>
                <span className="block text-sm text-roast-100/70">{what}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Brewing({ s }) {
  const { lang } = useLang();
  return (
    <section id="brew" className="scroll-mt-32 px-4 py-16 sm:py-20">
      <SectionTitle kicker="09" title={s.brewTitle} />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {BREWS.map(b => (
          <article key={b.id} data-reveal className={`group overflow-hidden rounded-3xl border border-roast-200 bg-white hover:border-roast-400 dark:border-roast-800 dark:bg-roast-950 ${LIFT}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <SiteImage id={b.image} alt={b.name[lang]} sizes="(min-width: 1024px) 230px, (min-width: 640px) 45vw, 92vw" className="h-full w-full transition duration-700 group-hover:scale-105" />
              <span className={`absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold shadow ${b.filtered ? "bg-emerald-500 text-white" : "bg-amber-400 text-amber-950"}`}>
                {b.filtered ? <CircleCheck className="h-3.5 w-3.5" aria-hidden="true" /> : <CircleX className="h-3.5 w-3.5" aria-hidden="true" />}
                {b.filtered ? s.filtered : s.unfiltered}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl font-black text-roast-900 dark:text-roast-50">{b.name[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-roast-100/75">{b.text[lang]}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-roast-100 px-2.5 py-1 text-xs font-semibold text-roast-800 dark:bg-roast-900 dark:text-roast-200">
                <Bean className="h-3.5 w-3.5" aria-hidden="true" /> {b.ratio[lang]}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Myths({ s }) {
  const { lang } = useLang();
  return (
    <section id="myths" className="scroll-mt-32 bg-roast-100/70 px-4 py-16 sm:py-20 dark:bg-roast-900/40">
      <SectionTitle kicker="11" title={s.mythsTitle} />
      <div className="mx-auto grid max-w-4xl gap-3">
        {COFFEE_MYTHS.map(m => (
          <details key={m.myth.en} data-reveal className="group rounded-3xl border border-transparent bg-white p-5 shadow-sm transition duration-300 open:shadow-lg hover:border-roast-300 hover:shadow-lg dark:bg-roast-950 dark:hover:border-roast-700">
            <summary className="flex cursor-pointer list-none items-start gap-3 [&::-webkit-details-marker]:hidden">
              <span className="shrink-0 rounded-full bg-rose-100 px-2.5 py-1 text-xs font-bold text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">{s.myth}</span>
              <span className="flex-1 font-semibold text-roast-900 dark:text-roast-50">{m.myth[lang]}</span>
              <Plus className="mt-0.5 h-5 w-5 shrink-0 text-roast-500 transition group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="mt-3 flex gap-3 border-t border-roast-100 pt-3 text-sm leading-relaxed text-slate-700 dark:border-roast-800 dark:text-roast-100/80">
              <span className="h-fit shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">{s.fact}</span>
              <span>{m.fact[lang]}<SourceRef id={m.src} /></span>
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Sources({ s }) {
  const { num } = useLang();
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-4xl">
        <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/5 dark:text-amber-100/80">{s.disclaimer}</p>
        <h2 className="mt-10 flex items-center gap-2 font-serif text-2xl font-black text-roast-900 dark:text-roast-50">
          <BookOpen className="h-6 w-6 text-roast-500" aria-hidden="true" /> {s.sourcesTitle}
        </h2>
        <ol className="mt-4 space-y-2 text-sm">
          {COFFEE_SOURCES.map((src, i) => (
            <li key={src.id} id={`src-${src.id}`} className="flex scroll-mt-32 gap-2 text-slate-700 dark:text-roast-100/75">
              <span className="w-6 shrink-0 font-bold text-roast-500">{num(i + 1)}.</span>
              <a href={src.url} target="_blank" rel="noopener noreferrer" className="break-words hover:text-roast-600 hover:underline dark:hover:text-roast-300">{src.label}</a>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs text-slate-500 dark:text-roast-200/50">
          {s.photoCredit} <Link to="/references" className="underline">→</Link>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Enrichment sections (2026-11)                                        */
/* ------------------------------------------------------------------ */

/** Coffee by the numbers — a dark band between sections. */
function Stats({ s }) {
  return (
    <section aria-label="Coffee in numbers" className="relative overflow-hidden bg-gradient-to-r from-roast-950 via-roast-900 to-roast-950 px-4 py-10 text-roast-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgb(217_176_125/0.18),transparent_45%),radial-gradient(circle_at_80%_50%,rgb(185_117_54/0.18),transparent_45%)]" aria-hidden="true" />
      <dl className="relative mx-auto grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">
        {s.stats.map(([value, label]) => (
          <div key={label} data-reveal className="group text-center">
            <dt className="sr-only">{label}</dt>
            <dd className="bg-gradient-to-b from-roast-100 to-roast-400 bg-clip-text font-serif text-5xl font-black text-transparent transition duration-300 group-hover:scale-110 sm:text-6xl">{value}</dd>
            <dd className="mx-auto mt-2 max-w-[13rem] text-sm text-roast-200/75">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Meter({ value, max = 3, label, light = false }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className={`w-16 shrink-0 font-semibold ${light ? "text-roast-200/80" : "text-roast-700 dark:text-roast-200/80"}`}>{label}</span>
      <span className="flex flex-1 gap-1" role="img" aria-label={`${label}: ${value}/${max}`}>
        {Array.from({ length: max }, (_, i) => (
          <span key={i} className={`h-2 flex-1 rounded-full ${i < value ? "bg-gradient-to-r from-roast-400 to-roast-600" : light ? "bg-roast-800" : "bg-roast-100 dark:bg-roast-800"}`} />
        ))}
      </span>
    </div>
  );
}

function Roasts({ s }) {
  const { lang } = useLang();
  return (
    <section id="roast" className="scroll-mt-32 px-4 py-16 sm:py-20">
      <SectionTitle kicker="03" title={s.roastTitle} sub={s.roastSub} />
      <div className="mx-auto mb-8 h-3 max-w-4xl rounded-full bg-gradient-to-r from-[#c9a06a] via-[#6e4022] to-[#1f1009] shadow-inner" aria-hidden="true" />
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {ROASTS.map(r => (
          <article key={r.id} data-reveal className={`group relative overflow-hidden rounded-3xl border border-roast-200 bg-white p-6 hover:border-roast-400 dark:border-roast-800 dark:bg-roast-950 ${LIFT}`}>
            <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-25 blur-2xl transition duration-500 group-hover:opacity-50" style={{ background: r.glow }} aria-hidden="true" />
            <div className="relative flex items-center gap-4">
              <span className="relative grid h-20 w-16 place-items-center">
                <BeanShape className="absolute h-20 w-14 -rotate-12 transition duration-500 group-hover:rotate-12 group-hover:scale-110" style={{ color: r.bean }} />
              </span>
              <h3 className="font-serif text-2xl font-black text-roast-900 dark:text-roast-50">{r.name[lang]}</h3>
            </div>
            <p className="relative mt-4 text-sm leading-relaxed text-slate-700 dark:text-roast-100/80">{r.taste[lang]}</p>
            <div className="relative mt-4 space-y-2">
              <Meter value={r.acidity} label={s.acidity} />
              <Meter value={r.body} label={s.body} />
            </div>
            <p className="relative mt-4 flex gap-2 rounded-2xl bg-roast-50 p-3 text-xs leading-relaxed text-roast-900 dark:bg-roast-900/60 dark:text-roast-100/80">
              <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />{r.health[lang]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

const LAYER_COLORS = { espresso: "#3b2112", water: "#7b4a2a", milk: "#ead8bf", foam: "#fbf4e8", choc: "#4a2214", ice: "#cfe8f3" };

/** A glass with the drink's layers drawn to scale (bottom → top). */
function CupDiagram({ drink }) {
  const H = 96, top = 18, fill = 0.86;
  let y = top + H;
  const rects = drink.layers.map(([part, share]) => {
    const h = H * fill * share;
    y -= h;
    return { part, y, h };
  });
  const id = `cup-${drink.id}`;
  return (
    <svg viewBox="0 0 100 130" className="h-32 w-auto drop-shadow-xl transition duration-500 group-hover:-rotate-3 group-hover:scale-105" aria-hidden="true">
      <defs>
        <clipPath id={id}><path d="M18 18h64l-7 92a8 8 0 0 1-8 7H33a8 8 0 0 1-8-7z" /></clipPath>
        <linearGradient id={`${id}-shine`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".35" /><stop offset=".25" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect x="0" y="0" width="100" height="130" fill="rgb(255 255 255 / .08)" />
        {rects.map(r => (
          <rect key={r.part} x="0" y={r.y} width="100" height={r.h + 0.5} fill={r.part === "foam" && drink.foamColor ? drink.foamColor : LAYER_COLORS[r.part]} />
        ))}
        {drink.id === "coldbrew" && [[30, 40], [52, 52], [38, 70], [58, 82]].map(([x, yy]) => (
          <rect key={`${x}${yy}`} x={x} y={yy} width="16" height="16" rx="3" fill="#e8f6fc" opacity=".55" transform={`rotate(12 ${x + 8} ${yy + 8})`} />
        ))}
        <rect x="0" y="0" width="100" height="130" fill={`url(#${id}-shine)`} />
      </g>
      <path d="M18 18h64l-7 92a8 8 0 0 1-8 7H33a8 8 0 0 1-8-7z" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="2" />
    </svg>
  );
}

function CafeMenu({ s }) {
  const { lang } = useLang();
  return (
    <section id="menu" className="scroll-mt-32 relative overflow-hidden bg-roast-950 px-4 py-16 text-roast-50 sm:py-20">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-roast-500/15 blur-3xl" aria-hidden="true" />
      <SectionTitle kicker="06" title={s.menuTitle} sub={s.menuSub} dark />
      <ul className="relative mx-auto mb-8 flex max-w-4xl flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-roast-200/80">
        {Object.entries(s.layers).map(([k, label]) => (
          <li key={k} className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm ring-1 ring-white/20" style={{ background: LAYER_COLORS[k] }} />{label}
          </li>
        ))}
      </ul>
      <div className="relative mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COFFEE_MENU.map(d => (
          <article key={d.id} data-reveal className={`group relative flex flex-col rounded-3xl border border-roast-800 bg-roast-900/60 p-5 text-roast-200 hover:border-roast-500/70 hover:bg-roast-900 hover:shadow-roast-950/60 ${LIFT}`}>
            {(d.best || d.treat) && (
              <span className={`absolute top-4 right-4 rounded-full px-2.5 py-1 text-[11px] font-bold ${d.best ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-300"}`}>
                {d.best ? s.smart : s.treat}
              </span>
            )}
            <div className="grid h-36 place-items-center">
              <CupDiagram drink={d} />
            </div>
            <h3 className="mt-2 font-serif text-xl font-black text-roast-50">{d.name[lang]}</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-roast-200/75">{d.text[lang]}</p>
            <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-roast-800 pt-3 text-center">
              {[[d.ml, lang === "bn" ? "মি.লি." : "ml"], [d.kcal, s.kcal], [d.caf, s.caf]].map(([v, l]) => (
                <div key={l}>
                  <dd className={`font-serif font-black whitespace-nowrap text-roast-100 ${String(v).length > 5 ? "text-sm leading-7" : "text-lg"}`}>{lang === "bn" ? String(v).replace(/\d/g, x => "০১২৩৪৫৬৭৮৯"[x]) : v}</dd>
                  <dt className="text-[10px] leading-tight text-roast-300/60">{l}</dt>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Generic coffee jar illustration (no brand artwork) coloured per variant. */
function Jar({ d }) {
  const id = `jar-${d.id}`;
  return (
    <svg viewBox="0 0 160 200" className="h-48 w-auto drop-shadow-[0_25px_25px_rgb(0_0_0/0.45)]" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-glass`} x1="0" x2="1">
          <stop offset="0" stopColor="#1b0f08" /><stop offset=".45" stopColor="#3a2112" /><stop offset="1" stopColor="#120804" />
        </linearGradient>
        <linearGradient id={`${id}-lid`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={d.lid} /><stop offset="1" stopColor="#000" stopOpacity=".45" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".18" stopColor="#fff" stopOpacity=".28" /><stop offset=".3" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <pattern id={`${id}-grain`} width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="3" r="1.3" fill="#7a4524" opacity=".7" /><circle cx="6.5" cy="7" r="1" fill="#b97536" opacity=".5" />
        </pattern>
      </defs>
      {/* lid */}
      <g className="transition duration-500 group-hover:-translate-y-2">
        <rect x="34" y="14" width="92" height="30" rx="7" fill={`url(#${id}-lid)`} />
        <rect x="34" y="14" width="92" height="6" rx="3" fill="#fff" opacity=".18" />
        {Array.from({ length: 11 }, (_, i) => <rect key={i} x={40 + i * 8} y="22" width="2" height="18" fill="#000" opacity=".18" />)}
      </g>
      {/* body */}
      <path d="M30 48h100c6 0 10 4 10 10v116c0 10-8 18-18 18H38c-10 0-18-8-18-18V58c0-6 4-10 10-10z" fill={`url(#${id}-glass)`} />
      <path d="M30 48h100c6 0 10 4 10 10v116c0 10-8 18-18 18H38c-10 0-18-8-18-18V58c0-6 4-10 10-10z" fill={`url(#${id}-grain)`} />
      {/* label */}
      <rect x="20" y="88" width="120" height="62" fill={d.label} />
      <rect x="20" y="88" width="120" height="3" fill={d.lid} />
      <rect x="20" y="147" width="120" height="3" fill={d.lid} />
      <g transform="translate(80 106)" fill={d.ink}>
        <ellipse rx="7" ry="10" transform="rotate(-25)" />
        <path d="M-2-9c-3 5 5 9 0 18" stroke={d.label} strokeWidth="1.6" fill="none" transform="rotate(-25)" />
      </g>
      <text x="80" y="135" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill={d.ink}>{d.name}</text>
      <path d="M30 48h100c6 0 10 4 10 10v116c0 10-8 18-18 18H38c-10 0-18-8-18-18V58c0-6 4-10 10-10z" fill={`url(#${id}-shine)`} />
    </svg>
  );
}

function Davidoff({ s }) {
  const { lang, num } = useLang();
  return (
    <section id="davidoff" className="scroll-mt-32 relative isolate overflow-hidden bg-[#0d0906] px-4 py-16 text-roast-50 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgb(201_164_92/0.22),transparent_60%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent" aria-hidden="true" />
      <div data-reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#c9a45c] uppercase">
          <Crown className="h-4 w-4" aria-hidden="true" /> {num(10)} · {s.davKicker}
        </p>
        <h2 className="mt-3 bg-gradient-to-r from-[#f3e2b8] via-[#c9a45c] to-[#f3e2b8] bg-clip-text font-serif text-4xl font-black tracking-tight text-transparent sm:text-5xl">{s.davTitle}</h2>
        <p className="mt-4 text-roast-200/80">{s.davSub}</p>
      </div>

      <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-3">
        {DAVIDOFF.map(d => (
          <article
            key={d.id}
            data-reveal
            className={`group relative flex flex-col overflow-hidden rounded-[2rem] border p-6 text-center transition duration-500 hover:-translate-y-2 ${
              d.featured
                ? "border-[#c9a45c]/70 bg-gradient-to-b from-[#2a1d10] to-[#120b06] shadow-2xl shadow-[#c9a45c]/10 hover:shadow-[#c9a45c]/25 md:-mt-4 md:mb-4"
                : "border-white/10 bg-white/[0.03] hover:border-[#c9a45c]/50 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/50"
            }`}
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" aria-hidden="true" />
            {d.featured && (
              <span className="absolute top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#c9a45c] px-3 py-1 text-[11px] font-black tracking-wide text-[#1a1108] uppercase">
                <Award className="h-3.5 w-3.5" aria-hidden="true" /> {s.featured}
              </span>
            )}
            <div className="relative mx-auto mt-6 grid h-52 place-items-center">
              <div className="absolute bottom-2 h-6 w-32 rounded-[50%] bg-black/60 blur-md transition duration-500 group-hover:w-24" aria-hidden="true" />
              <div className="relative transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-4deg]"><Jar d={d} /></div>
            </div>
            <p className="mt-4 text-xs font-bold tracking-[0.2em] text-[#c9a45c] uppercase">Davidoff Café</p>
            <h3 className="mt-1 font-serif text-3xl font-black text-roast-50">{d.name}</h3>
            <p className="mt-1 text-sm font-semibold text-roast-300">{d.tagline[lang]}</p>
            <p className="mt-3 text-sm leading-relaxed text-roast-200/75">{d.taste[lang]}</p>
            <div className="mt-5 space-y-3 text-left">
              <div>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-semibold text-roast-200/80">{s.roastLabel}</span>
                  <span className="text-[#c9a45c]">{s.roastNames[d.roast - 1]}</span>
                </div>
                <div className="flex gap-1" role="img" aria-label={`${s.roastLabel}: ${s.roastNames[d.roast - 1]}`}>
                  {[1, 2, 3].map(n => (
                    <span key={n} className={`h-2 flex-1 rounded-full ${n <= d.roast ? "bg-gradient-to-r from-[#c9a45c] to-[#8a5a2a]" : "bg-white/10"}`} />
                  ))}
                </div>
              </div>
              <p className="rounded-2xl bg-white/5 p-3 text-xs leading-relaxed text-roast-100/80">
                <span className="font-bold text-[#e3c88e]">{s.bestFor}: </span>{d.best[lang]}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div data-reveal className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <h3 className="flex items-center gap-2 font-serif text-2xl font-black text-roast-50">
          <Thermometer className="h-6 w-6 text-[#c9a45c]" aria-hidden="true" /> {s.davHowTitle}
        </h3>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DAVIDOFF_STEPS.map((st, i) => (
            <li key={st.en} className="group flex gap-3 rounded-2xl p-2 transition hover:bg-white/5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#c9a45c]/60 font-serif font-black text-[#e3c88e] transition group-hover:bg-[#c9a45c] group-hover:text-[#1a1108]">{num(i + 1)}</span>
              <span className="text-sm leading-relaxed text-roast-200/80">{st[lang]}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-roast-300/50">{s.davNote}</p>
    </section>
  );
}

export default function CoffeePage() {
  const { lang } = useLang();
  const s = T[lang];
  return (
    <div className="bg-roast-50 dark:bg-[#120c08]">
      <Hero s={s} />
      <SectionNav s={s} />
      <WhyBlack s={s} />
      <Stats s={s} />
      <Origin s={s} />
      <Roasts s={s} />
      <Journey s={s} />
      <Caffeine s={s} />
      <CafeMenu s={s} />
      <Benefits s={s} />
      <HowTo s={s} />
      <Brewing s={s} />
      <Davidoff s={s} />
      <Myths s={s} />
      <Sources s={s} />
    </div>
  );
}
