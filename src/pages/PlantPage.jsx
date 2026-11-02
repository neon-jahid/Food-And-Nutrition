import { Link } from "../router.jsx";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, HandHeart, Leaf, ListChecks, ShieldAlert, Sprout, Tag } from "lucide-react";
import { PLANTS, PLANT_TAGS } from "../data/plants.js";
import credits from "../data/imageCredits.json";
import plantImages from "../data/plantImages.json";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import PlantImage from "../components/PlantImage.jsx";
import { Disclaimer, foodById } from "../components/PageKit.jsx";

const T = {
  en: {
    learn: "Learn", plants: "Medicinal plants", parts: "Parts used", uses: "Traditionally used for", how: "How to use",
    cautions: "Cautions — read before use", nutrition: "See nutrition facts", related: "Related medicinal plants", all: "All medicinal plants",
    prev: "Previous", next: "Next", photo: "Photo",
    note: "Herbal remedies can interact with medicines and are not a replacement for treatment. Pregnant or breastfeeding women, children and anyone on regular medicine should ask a doctor before using herbs in medicinal amounts.",
  },
  bn: {
    learn: "জানুন", plants: "ঔষধি গাছ", parts: "ব্যবহৃত অংশ", uses: "প্রচলিত ব্যবহার", how: "কীভাবে ব্যবহার করবেন",
    cautions: "সতর্কতা — ব্যবহারের আগে পড়ুন", nutrition: "পুষ্টি তথ্য দেখুন", related: "সম্পর্কিত ঔষধি গাছ", all: "সব ঔষধি গাছ",
    prev: "আগের", next: "পরের", photo: "ছবি",
    note: "ভেষজ ওষুধের সাথে প্রতিক্রিয়া করতে পারে এবং এটি চিকিৎসার বিকল্প নয়। গর্ভবতী বা স্তন্যদানকারী মা, শিশু এবং নিয়মিত ওষুধ খান এমন যে কেউ ওষুধ হিসেবে ভেষজ ব্যবহারের আগে চিকিৎসকের পরামর্শ নিন।",
  },
};

const TAG_BY_ID = Object.fromEntries(PLANT_TAGS.map(t => [t.id, t]));

/** Photo credit for a plant: its food photo (foodId) or its own plant photo. */
export const plantPhoto = p => (p.foodId ? credits[p.foodId] : plantImages[p.id]);

function List({ items, dot }) {
  return (
    <ul className="space-y-2.5 text-slate-700 dark:text-slate-300">
      {items.map(x => (
        <li key={x} className="flex gap-2.5"><span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${dot}`} />{x}</li>
      ))}
    </ul>
  );
}

export default function PlantPage({ plant: p }) {
  const { lang } = useLang();
  const s = T[lang];
  const other = lang === "bn" ? "en" : "bn";
  const c = tone(p.tone);
  const food = p.foodId && foodById(p.foodId);
  const photo = plantPhoto(p);
  const i = PLANTS.indexOf(p);
  const prev = PLANTS[(i - 1 + PLANTS.length) % PLANTS.length];
  const next = PLANTS[(i + 1) % PLANTS.length];
  const related = PLANTS
    .filter(x => x !== p)
    .map(x => ({ x, shared: x.tags.filter(t => p.tags.includes(t)).length }))
    .filter(r => r.shared)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 4)
    .map(r => r.x);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/90 via-white/60 to-accent-500/5 dark:from-brand-500/10 dark:via-slate-950/40 dark:to-accent-500/5" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:py-12">
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <Link to="/learn" className="hover:text-brand-600 dark:hover:text-brand-300">{s.learn}</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link to="/plants" className="hover:text-brand-600 dark:hover:text-brand-300">{s.plants}</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="truncate text-slate-700 dark:text-slate-200" aria-current="page">{p.name[lang]}</span>
          </nav>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <figure>
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10 ring-1 ring-slate-200 dark:ring-slate-800">
                <PlantImage plant={p} alt={p.name[lang]} eager className="aspect-[4/3] w-full" />
              </div>
              {photo && (
                <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  {s.photo}: {photo.author} · {photo.license} ·{" "}
                  <a href={photo.page} target="_blank" rel="noopener noreferrer" className="hover:underline">Wikimedia Commons</a>
                </figcaption>
              )}
            </figure>

            <div className="min-w-0">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${c.soft}`}>
                <Leaf className="h-3.5 w-3.5" aria-hidden="true" /> {s.plants}
              </span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{p.name[lang]}</h1>
              <p className="mt-1 text-lg text-slate-500 dark:text-slate-400">{p.name[other]} · <span className="italic">{p.sci}</span></p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">{p.summary[lang]}</p>

              <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <Sprout className="h-4 w-4" aria-hidden="true" /> {s.parts}: {p.parts[lang]}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-slate-400" aria-hidden="true" />
                {p.tags.map(t => TAG_BY_ID[t] && (
                  <Link key={t} to={`/plants?tag=${t}`} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-brand-300">
                    {TAG_BY_ID[t][lang]}
                  </Link>
                ))}
              </div>

              {food && (
                <Link to={`/foods/${food.id}`} className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition hover:bg-brand-700">
                  {s.nutrition} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <section className="card overflow-hidden">
            <div className={`h-1.5 bg-gradient-to-r ${c.bar}`} />
            <div className="p-5 sm:p-6">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white"><HandHeart className="h-5 w-5 text-brand-600 dark:text-brand-300" aria-hidden="true" />{s.uses}</h2>
              <List items={p.uses[lang]} dot={`bg-gradient-to-br ${c.bar}`} />
            </div>
          </section>
          <section className="card p-5 sm:p-6">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white"><ListChecks className="h-5 w-5 text-brand-600 dark:text-brand-300" aria-hidden="true" />{s.how}</h2>
            <List items={p.howToUse[lang]} dot="bg-brand-500" />
          </section>
        </div>

        <section className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6 dark:border-amber-500/20 dark:bg-amber-500/10">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold text-amber-900 dark:text-amber-200"><ShieldAlert className="h-5 w-5" aria-hidden="true" />{s.cautions}</h2>
          <List items={p.cautions[lang]} dot="bg-amber-500" />
        </section>

        {related.length > 0 && (
          <section className="mt-12">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">{s.related}</h2>
              <Link to="/plants" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300">
                {s.all} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map(x => (
                <Link key={x.id} to={`/plants/${x.id}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                  <PlantImage plant={x} alt={x.name[lang]} className="aspect-[4/3] w-full transition duration-500 group-hover:scale-105" />
                  <span className="block p-4">
                    <span className="block font-bold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">{x.name[lang]}</span>
                    <span className="mt-1 line-clamp-2 block text-xs text-slate-500 dark:text-slate-400">{x.summary[lang]}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <nav className="mt-10 grid gap-3 sm:grid-cols-2" aria-label={s.plants}>
          <Link to={`/plants/${prev.id}`} className="card flex items-center gap-3 p-4 transition hover:border-brand-400">
            <ArrowLeft className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            <PlantImage plant={prev} alt="" className="h-12 w-12 shrink-0 rounded-xl" />
            <span className="min-w-0">
              <span className="block text-xs text-slate-500 dark:text-slate-400">{s.prev}</span>
              <span className="block truncate font-bold text-slate-900 dark:text-white">{prev.name[lang]}</span>
            </span>
          </Link>
          <Link to={`/plants/${next.id}`} className="card flex items-center justify-end gap-3 p-4 text-right transition hover:border-brand-400">
            <span className="min-w-0">
              <span className="block text-xs text-slate-500 dark:text-slate-400">{s.next}</span>
              <span className="block truncate font-bold text-slate-900 dark:text-white">{next.name[lang]}</span>
            </span>
            <PlantImage plant={next} alt="" className="h-12 w-12 shrink-0 rounded-xl" />
            <ArrowRight className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
          </Link>
        </nav>

        <Disclaimer>{s.note}</Disclaimer>
      </div>
    </>
  );
}
