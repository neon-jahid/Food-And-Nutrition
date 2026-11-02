import { useMemo, useState } from "react";
import { BookMarked, Camera, Database, ExternalLink } from "lucide-react";
import { FOODS } from "../data/foods.js";
import credits from "../data/imageCredits.json";
import siteImages from "../data/siteImages.json";
import plantImages from "../data/plantImages.json";
import { PLANTS } from "../data/plants.js";
import { useLang } from "../context/LangContext.jsx";
import { Link } from "../router.jsx";
import { PageHero, SearchInput, matches } from "../components/PageKit.jsx";
import { SectionHeader } from "../components/HomeSections.jsx";

/* Data sources actually used or being used for verification (see docs/IMPLEMENTATION_PLAN.md). */
const SOURCES = [
  {
    name: "USDA FoodData Central",
    url: "https://fdc.nal.usda.gov/",
    en: "U.S. Department of Agriculture food composition database. Basis for most per-100 g values; full re-verification in progress.",
    bn: "যুক্তরাষ্ট্রের কৃষি বিভাগের খাদ্য উপাদান ডেটাবেস। বেশিরভাগ প্রতি ১০০ গ্রামের মানের ভিত্তি; পুরো তথ্য পুনঃযাচাই চলছে।",
  },
  {
    name: "Food Composition Table for Bangladesh (INFS, University of Dhaka, 2013)",
    // FAO INFOODS index of Asian food composition tables (lists the Bangladesh table)
    url: "https://www.fao.org/infoods/infoods/tables-and-databases/asia/en/",
    en: "Institute of Nutrition and Food Science composition table for Bangladeshi foods, fish and dishes. Used to verify local foods.",
    bn: "পুষ্টি ও খাদ্য বিজ্ঞান ইনস্টিটিউটের বাংলাদেশি খাবার, মাছ ও রান্না করা খাবারের উপাদান সারণি। দেশি খাবার যাচাইয়ে ব্যবহৃত।",
  },
  {
    name: "FAO/INFOODS",
    url: "https://www.fao.org/infoods/infoods/en/",
    en: "International Network of Food Data Systems — standards and regional composition tables.",
    bn: "আন্তর্জাতিক খাদ্য তথ্য নেটওয়ার্ক — মানদণ্ড ও আঞ্চলিক খাদ্য উপাদান সারণি।",
  },
  {
    name: "World Health Organization — Healthy diet",
    url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    en: "General guidance on salt, sugar, fats, fruit and vegetables used in our healthy-eating advice.",
    bn: "লবণ, চিনি, চর্বি, ফল ও সবজি নিয়ে সাধারণ নির্দেশনা — আমাদের স্বাস্থ্যকর খাবারের পরামর্শে ব্যবহৃত।",
  },
  {
    name: "U.S. FDA Daily Values (2,000 kcal reference)",
    url: "https://www.fda.gov/food/nutrition-facts-label/daily-value-nutrition-and-supplement-facts-labels",
    en: "Reference amounts used to calculate “% Daily Value” on food pages.",
    bn: "খাবারের পৃষ্ঠায় “দৈনিক চাহিদার %” হিসাবের জন্য ব্যবহৃত মানদণ্ড।",
  },
  {
    name: "WHO Expert Consultation — BMI for Asian populations (Lancet, 2004)",
    url: "https://doi.org/10.1016/S0140-6736(03)15268-3",
    en: "Asian BMI cut-offs used in the BMI calculator.",
    bn: "BMI ক্যালকুলেটরে ব্যবহৃত এশীয়দের BMI সীমা।",
  },
  {
    name: "Mifflin MD, St Jeor ST et al. (1990), Am J Clin Nutr 51:241–247",
    url: "https://doi.org/10.1093/ajcn/51.2.241",
    en: "Equation used to estimate resting energy needs in the calorie calculator.",
    bn: "ক্যালরি ক্যালকুলেটরে বিশ্রামকালীন শক্তির চাহিদা হিসাবের সূত্র।",
  },
];

const T = {
  en: {
    title: "Sources & references", sub: "Where our nutrition data, health guidance and food photos come from.",
    dataTitle: "Nutrition data & guidance", dataSub: "Values are approximate until each food shows its own source and verification date",
    photoTitle: "Photo credits", heroPhoto: "Home page", coffeePhoto: "Coffee guide", plantPhoto: "Medicinal plant", photoSub: "All photos are from Wikimedia Commons; reuse must follow each licence",
    search: "Search food, author or licence…", food: "Food", author: "Author", license: "Licence", source: "Source",
  },
  bn: {
    title: "উৎস ও তথ্যসূত্র", sub: "আমাদের পুষ্টি তথ্য, স্বাস্থ্য নির্দেশনা ও খাবারের ছবি কোথা থেকে নেওয়া।",
    dataTitle: "পুষ্টি তথ্য ও নির্দেশনা", dataSub: "প্রতিটি খাবারে নিজস্ব উৎস ও যাচাইয়ের তারিখ না দেখানো পর্যন্ত মানগুলো আনুমানিক",
    photoTitle: "ছবির কৃতিত্ব", heroPhoto: "হোম পেজ", coffeePhoto: "কফি গাইড", plantPhoto: "ঔষধি গাছ", photoSub: "সব ছবি উইকিমিডিয়া কমন্স থেকে নেওয়া; পুনর্ব্যবহারে প্রতিটি ছবির লাইসেন্স মানতে হবে",
    search: "খাবার, আলোকচিত্রী বা লাইসেন্স খুঁজুন…", food: "খাবার", author: "আলোকচিত্রী", license: "লাইসেন্স", source: "উৎস",
  },
};

export default function ReferencesPage() {
  const { lang, name } = useLang();
  const s = T[lang];
  const [q, setQ] = useState("");
  const rows = useMemo(
    () => [
      ...FOODS.map(f => ({ key: f.id, label: name(f), to: `/foods/${f.id}`, c: credits[f.id], hay: [f.en, f.bn] })),
      ...PLANTS.filter(p => !p.foodId).map(p => ({ key: `plant-${p.id}`, label: `${s.plantPhoto}: ${p.name[lang]}`, to: `/plants/${p.id}`, c: plantImages[p.id], hay: [p.name.en, p.name.bn, p.sci] })),
      // decorative photos (home hero, coffee guide)
      ...Object.entries(siteImages).map(([id, c]) => ({
        key: id,
        label: `${id.startsWith("coffee") ? s.coffeePhoto : s.heroPhoto}: ${c.file.replace(/\.[a-z]+$/i, "").replace(/[_-]/g, " ")}`,
        to: id.startsWith("coffee") ? "/coffee" : "/",
        c,
        hay: [id],
      })),
    ].filter(({ c, hay, label }) => c && matches(q, ...hay, label, c.author, c.license, c.file)),
    [q, name, s, lang]
  );

  return (
    <>
      <PageHero icon={BookMarked} title={s.title} sub={s.sub} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <section>
          <SectionHeader icon={Database} title={s.dataTitle} sub={s.dataSub} />
          <ul className="grid gap-3 md:grid-cols-2">
            {SOURCES.map(src => (
              <li key={src.name} className="card p-4">
                <a href={src.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 font-bold text-slate-900 hover:text-brand-700 dark:text-white dark:hover:text-brand-300">
                  {src.name} <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{src[lang]}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <SectionHeader icon={Camera} title={s.photoTitle} sub={s.photoSub} />
          <SearchInput value={q} onChange={setQ} placeholder={s.search} />
          <div className="card mt-4 overflow-x-auto">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500 uppercase dark:bg-slate-800/60 dark:text-slate-400">
                <tr>
                  <th scope="col" className="px-4 py-3">{s.food}</th>
                  <th scope="col" className="px-4 py-3">{s.author}</th>
                  <th scope="col" className="px-4 py-3">{s.license}</th>
                  <th scope="col" className="px-4 py-3">{s.source}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {rows.map(({ key, label, to, c }) => (
                  <tr key={key}>
                    <td className="max-w-[18rem] truncate px-4 py-2.5 font-medium" title={label}><Link to={to} className="hover:text-brand-700 dark:hover:text-brand-300">{label}</Link></td>
                    <td className="max-w-[16rem] truncate px-4 py-2.5 text-slate-600 dark:text-slate-400" title={c.author}>{c.author}</td>
                    <td className="px-4 py-2.5 whitespace-nowrap text-slate-600 dark:text-slate-400">{c.license}</td>
                    <td className="px-4 py-2.5">
                      <a href={c.page} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-700 hover:underline dark:text-brand-300">
                        Commons <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
