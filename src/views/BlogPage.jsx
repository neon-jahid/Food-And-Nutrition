"use client";

import { useMemo, useState } from "react";
import { Link } from "../router.jsx";
import { ArrowRight, CalendarDays, Clock, Newspaper } from "lucide-react";
import { BLOG_CATS, POSTS } from "../data/blog.js";
import { useLang } from "../context/LangContext.jsx";
import { toLocaleDigits } from "../i18n.js";
import FoodImage from "../components/FoodImage.jsx";
import { FilterChips, PageHero, foodById } from "../components/PageKit.jsx";

export const BLOG_T = {
  en: {
    title: "Nutrition blog", sub: "Practical, evidence-based articles on eating well with everyday Bangladeshi food.",
    all: "All posts", read: "Read article", min: "{n} min read", featured: "Latest",
  },
  bn: {
    title: "পুষ্টি ব্লগ", sub: "প্রতিদিনের দেশি খাবারে সুস্থভাবে খাওয়া নিয়ে সহজ ও প্রমাণভিত্তিক লেখা।",
    all: "সব লেখা", read: "পড়ুন", min: "{n} মিনিটে পড়ুন", featured: "সর্বশেষ",
  },
};

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
};

/** "2026-10-28" → "28 Oct 2026" / "২৮ অক্টোবর ২০২৬" (no Intl, so prerender and browser agree). */
export function formatDate(iso, lang) {
  const [y, m, d] = iso.split("-").map(Number);
  return toLocaleDigits(`${d} ${MONTHS[lang][m - 1]} ${y}`, lang);
}

export function PostMeta({ post, className = "" }) {
  const { lang, fill } = useLang();
  const cat = BLOG_CATS.find(c => c.id === post.cat);
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 ${className}`}>
      {cat && <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">{cat[lang]}</span>}
      <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />{formatDate(post.date, lang)}</span>
      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{fill(BLOG_T[lang].min, { n: post.readMin })}</span>
    </div>
  );
}

export function PostCard({ post }) {
  const { lang } = useLang();
  const cover = foodById(post.cover);
  return (
    <Link to={`/blog/${post.slug}`} className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[16/9] overflow-hidden">
        {cover && <FoodImage food={cover} className="h-full w-full" imgClassName="transition duration-500 group-hover:scale-105" />}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <PostMeta post={post} />
        <h3 className="mt-3 text-lg leading-snug font-bold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">{post.title[lang]}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">{post.excerpt[lang]}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-700 dark:text-brand-300">
          {BLOG_T[lang].read} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const { lang } = useLang();
  const s = BLOG_T[lang];
  const [cat, setCat] = useState("all");
  const sorted = useMemo(() => [...POSTS].sort((a, b) => b.date.localeCompare(a.date)), []);
  const list = cat === "all" ? sorted : sorted.filter(p => p.cat === cat);
  const [first, ...rest] = list;
  const cover = first && foodById(first.cover);

  return (
    <>
      <PageHero icon={Newspaper} title={s.title} sub={s.sub} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <FilterChips
          label={s.title}
          value={cat}
          onChange={setCat}
          options={[{ id: "all", label: s.all, count: POSTS.length }, ...BLOG_CATS.map(c => ({ id: c.id, label: c[lang], count: POSTS.filter(p => p.cat === c.id).length })).filter(o => o.count)]}
        />

        {first && (
          <Link to={`/blog/${first.slug}`} className="card group mt-6 grid overflow-hidden transition hover:shadow-xl md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-80">
              {cover && <FoodImage food={cover} hd eager sizes="(min-width: 768px) 50vw, 100vw" className="absolute inset-0 h-full w-full" imgClassName="transition duration-700 group-hover:scale-105" />}
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 shadow backdrop-blur">{s.featured}</span>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <PostMeta post={first} />
              <h2 className="mt-3 text-2xl leading-tight font-extrabold text-slate-900 group-hover:text-brand-700 sm:text-3xl dark:text-white dark:group-hover:text-brand-300">{first.title[lang]}</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{first.excerpt[lang]}</p>
              <span className="mt-5 inline-flex items-center gap-1 font-semibold text-brand-700 dark:text-brand-300">
                {s.read} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map(p => <PostCard key={p.slug} post={p} />)}
          </div>
        )}
      </div>
    </>
  );
}
