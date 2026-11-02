import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useParams } from "../router.jsx";
import { CATEGORIES, FOODS, SUBGROUPS } from "../data/foods.js";
import DETAILS from "../data/details/index.js";
import { useLang } from "../context/LangContext.jsx";
import FoodImage, { imageCredit } from "../components/FoodImage.jsx";
import NutritionFacts from "../components/NutritionFacts.jsx";
import Tags from "../components/Tags.jsx";
import BenefitPoints from "../components/BenefitPoints.jsx";
import { ArrowLeft, ArrowRight, BadgeCheck, CalendarDays, ChartColumn, Check, Heart, Info, Scale, Stethoscope, TriangleAlert, Utensils, X, ZoomIn } from "lucide-react";
import { CategoryIcon } from "../icons.jsx";
import { storage } from "../utils.js";

/** Full-screen HD photo viewer (click / Esc to close). */
function Lightbox({ src, alt, credit, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);
  return createPortal(
    <div className="fixed inset-0 z-50 flex animate-pop flex-col items-center justify-center bg-black/90 p-4" onClick={onClose} role="dialog" aria-modal="true">
      <img src={src} alt={alt} className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl" />
      {credit && <p className="mt-3 text-center text-xs text-white/70">{credit}</p>}
      <button type="button" aria-label="Close" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"><X className="h-5 w-5" /></button>
    </div>,
    document.body
  );
}

function Section({ icon: Icon, title, sub, children }) {
  return (
    <section className="mt-12">
      <h2 className="flex items-center gap-3 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
        {Icon && (
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-700/25 dark:text-brand-100">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
        {title}
      </h2>
      {sub && <p className="mt-1 text-slate-500 dark:text-slate-400">{sub}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function FoodPage({ compare, onToggleCompare }) {
  const { slug: id } = useParams();
  const { t, lang, num, fmt, unit, name, altName, fill } = useLang();
  const food = FOODS.find(f => f.id === id);
  const [zoom, setZoom] = useState(false);

  // remember the last 12 foods viewed (shown on the home page)
  useEffect(() => {
    if (!food) return;
    const recent = storage.get("recent", []).filter(x => x !== food.id);
    storage.set("recent", [food.id, ...recent].slice(0, 12));
  }, [food]);

  if (!food) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="flex justify-center"><Utensils className="h-12 w-12 text-slate-400" aria-hidden="true" /></p>
        <p className="mt-4 text-lg">{t.notFound}</p>
        <Link to="/foods" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> {t.backHome}</Link>
      </div>
    );
  }

  const cat = CATEGORIES.find(c => c.id === food.cat);
  const d = DETAILS[food.id];
  const group = (SUBGROUPS[food.cat] || []).find(g => g.ids.includes(food.id));
  const credit = imageCredit(food.id);
  const inCompare = compare.includes(food.id);
  const siblings = FOODS.filter(f => f.cat === food.cat);
  const idx = siblings.indexOf(food);
  const prev = siblings[(idx - 1 + siblings.length) % siblings.length];
  const next = siblings[(idx + 1) % siblings.length];
  const related = siblings.filter(f => f.id !== food.id).slice(0, 4);
  const L = obj => obj[lang]; // pick current language

  const stats = ["protein", "carbs", "fat", "fiber", "vitC", "iron"];

  return (
    <article className="mx-auto max-w-6xl px-4 pb-16">
      {zoom && credit && (
        <Lightbox
          src={credit.hd || credit.src}
          alt={food.en}
          credit={`${t.photo}: ${credit.author} · ${credit.license} · ${t.via}`}
          onClose={() => setZoom(false)}
        />
      )}

      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1.5 py-5 text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-brand-600">{t.home}</Link>
        <span>/</span>
        <Link to={`/foods?cat=${cat.id}`} className="hover:text-brand-600">{cat[lang]}</Link>
        <span>/</span>
        {group && (
          <>
            <Link to={`/foods?cat=${cat.id}&sub=${group.id}`} className="hover:text-brand-600">{group[lang]}</Link>
            <span>/</span>
          </>
        )}
        <span className="font-medium text-slate-800 dark:text-slate-200">{name(food)}</span>
      </nav>

      {/* Hero */}
      <header className="grid items-center gap-8 lg:grid-cols-2">
        <figure>
          <button
            type="button"
            onClick={() => credit && setZoom(true)}
            title={t.viewFull}
            aria-label={t.viewFull}
            className="group relative block w-full overflow-hidden rounded-3xl shadow-xl focus-visible:ring-4 focus-visible:ring-brand-500/40 focus-visible:outline-none"
          >
            <FoodImage
              key={food.id}
              food={food}
              eager
              hd
              sizes="(min-width: 1152px) 540px, (min-width: 1024px) 46vw, 100vw"
             
              fit="contain"
              className="aspect-[4/3] w-full"
              imgClassName="transition duration-500 group-hover:scale-[1.03]"
            />
            {credit && (
              <span className="absolute right-3 bottom-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <ZoomIn className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />{t.viewFull}
              </span>
            )}
          </button>
          {credit && (
            <figcaption className="mt-2 truncate text-xs text-slate-400">
              {t.photo}: <a href={credit.page} target="_blank" rel="noreferrer" className="hover:underline">{credit.author}</a>
              {" · "}{credit.license} · {t.via}
            </figcaption>
          )}
        </figure>

        <div>
          <Link to={`/foods?cat=${cat.id}`} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 hover:bg-brand-100 dark:bg-brand-700/25 dark:text-brand-100">
            <CategoryIcon id={cat.id} tone={false} /> {cat[lang]}
          </Link>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{name(food)}</h1>
          <p className="mt-1 text-xl text-slate-500 dark:text-slate-400">{altName(food)}</p>

          {d && <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{L(d.about)}</p>}

          {d?.season && (
            <p className="mt-4 inline-flex items-start gap-2 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span><strong>{t.season}:</strong> {L(d.season)}</span>
            </p>
          )}

          <div className="mt-5 flex items-baseline gap-2">
            <strong className="text-4xl font-extrabold text-brand-600 dark:text-brand-100">{fmt(food.n.calories)}</strong>
            <span className="text-slate-500">{t.kcal} · {t.per100g}</span>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-2">
            {stats.map(k => (
              <div key={k} className="rounded-xl border border-slate-200 bg-white p-2.5 text-center dark:border-slate-800 dark:bg-slate-900">
                <dt className="truncate text-xs text-slate-500 dark:text-slate-400">{t.short[k]}</dt>
                <dd className="font-bold">{fmt(food.n[k])} <span className="text-xs font-normal">{unit(k)}</span></dd>
              </div>
            ))}
          </dl>

          <div className="mt-4"><Tags n={food.n} /></div>

          <button
            type="button"
            onClick={() => onToggleCompare(food.id)}
            className={`mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              inCompare
                ? "border border-slate-300 hover:border-red-400 hover:text-red-500 dark:border-slate-700"
                : "bg-brand-500 text-white shadow-md shadow-brand-500/20 hover:bg-brand-600"
            }`}
          >
            <Scale className="h-4 w-4" aria-hidden="true" /> {inCompare ? t.removeCompare : t.addCompare}
          </button>
        </div>
      </header>

      <Section icon={BadgeCheck} title={t.pointsTitle}>
        <BenefitPoints id={food.id} />
      </Section>

      {!d && (
        <p className="mt-10 rounded-2xl border border-dashed border-slate-300 p-5 text-center text-slate-500 dark:border-slate-700">
          {t.comingSoon}
        </p>
      )}

      {d && (
        <>
          <Section icon={Heart} title={t.benefitsTitle}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.benefits.map((b, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl dark:bg-brand-700/25">{b.icon}</span>
                  <h3 className="mt-3 text-lg font-bold">{L(b)[0]}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{L(b)[1]}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={Stethoscope} title={t.goodForTitle} sub={t.goodForSub}>
            <ul className="grid gap-3 md:grid-cols-2">
              {d.goodFor.map((g, i) => (
                <li key={i} className="flex gap-3 rounded-2xl bg-gradient-to-br from-brand-50 to-white p-4 ring-1 ring-brand-100 dark:from-brand-700/15 dark:to-slate-900 dark:ring-slate-800">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" /></span>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{L(g)[0]}</h3>
                    <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{L(g)[1]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="flex items-center gap-2 text-xl font-extrabold"><Utensils className="h-5 w-5 text-brand-600" aria-hidden="true" /> {t.howToEatTitle}</h2>
              <ul className="mt-4 space-y-3">
                {d.howToEat.map((x, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-bold dark:bg-slate-800">{num(i + 1)}</span>
                    <span>{L(x)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-500/30 dark:bg-amber-500/10">
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-amber-900 dark:text-amber-200"><TriangleAlert className="h-5 w-5" aria-hidden="true" /> {t.cautionsTitle}</h2>
              <ul className="mt-4 space-y-3">
                {d.cautions.map((x, i) => (
                  <li key={i} className="flex gap-3 text-amber-900 dark:text-amber-100">
                    <span className="mt-1">•</span>
                    <span>{L(x)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      <Section icon={ChartColumn} title={t.nutritionTitle}>
        <NutritionFacts food={food} />
      </Section>

      <p className="mt-10 flex gap-3 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-400"><Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {t.disclaimer}</p>

      {/* Prev / next within category */}
      {siblings.length > 1 && (
        <nav className="mt-10 grid grid-cols-2 gap-3">
          {[[prev, t.prev, "text-left"], [next, t.next, "text-right"]].map(([f, label, align]) => (
            <Link
              key={label}
              to={`/foods/${f.id}`}
              className={`flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 transition hover:border-brand-500 dark:border-slate-800 dark:bg-slate-900 ${align === "text-right" ? "flex-row-reverse" : ""}`}
            >
              <FoodImage food={f} className="h-14 w-14 shrink-0 rounded-xl" />
              <span className={`min-w-0 ${align}`}>
                <span className={`flex items-center gap-1 text-xs text-slate-500 ${align === "text-right" ? "justify-end" : ""}`}>{align === "text-left" && <ArrowLeft className="h-3 w-3" aria-hidden="true" />}{label}{align === "text-right" && <ArrowRight className="h-3 w-3" aria-hidden="true" />}</span>
                <span className="block truncate font-semibold">{name(f)}</span>
              </span>
            </Link>
          ))}
        </nav>
      )}

      {related.length > 0 && (
        <Section title={fill(t.relatedTitle, { cat: cat[lang] })}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map(f => (
              <Link key={f.id} to={`/foods/${f.id}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-brand-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <FoodImage food={f} fit="contain" className="aspect-[4/3] w-full" imgClassName="transition duration-500 group-hover:scale-105" />
                <div className="p-3">
                  <h3 className="truncate font-bold">{name(f)}</h3>
                  <p className="text-xs text-slate-500">{fmt(f.n.calories)} {t.kcal} · {t.per100g}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <div className="mt-12 text-center">
        <Link to={`/foods?cat=${cat.id}`} className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:underline dark:text-brand-100"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> {t.backHome}</Link>
      </div>
    </article>
  );
}
