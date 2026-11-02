import Slider from "../components/Slider.jsx";
import { Link } from "../router.jsx";
import { ArrowRight, GraduationCap } from "lucide-react";
import { LEARN_GROUPS } from "../nav.js";
import { POSTS } from "../data/blog.js";
import { useLang } from "../context/LangContext.jsx";
import { tone } from "../tones.js";
import { PageHero } from "../components/PageKit.jsx";
import { PostCard } from "./BlogPage.jsx";

const T = {
  en: { title: "Learn", sub: "Everything beyond the numbers — nutrients, deficiencies, herbs, food safety and the truth behind common beliefs.", open: "Open guide", blog: "From the blog", all: "All articles" },
  bn: { title: "জানুন", sub: "সংখ্যার বাইরেও যা জানা দরকার — পুষ্টি উপাদান, অভাবজনিত রোগ, ভেষজ, খাদ্য নিরাপত্তা আর প্রচলিত বিশ্বাসের সত্যতা।", open: "গাইড খুলুন", blog: "ব্লগ থেকে", all: "সব লেখা" },
};

/** Home page (compact): one slider of all guides. Learn page: a grid per group. */
function Wrap({ compact, label, children }) {
  if (compact) {
    return (
      <Slider label={label} slide="[--slide:calc((100%_-_0.75rem)/2)] sm:[--slide:calc((100%_-_2rem)/3)] lg:[--slide:calc((100%_-_3rem)/4)] xl:[--slide:calc((100%_-_4rem)/5)]">
        {children}
      </Slider>
    );
  }
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{children}</div>;
}

/** Card grid of all learn guides — also used on the home page. */
export function LearnGrid({ compact = false }) {
  const { lang } = useLang();
  const s = T[lang];
  const groups = compact ? [{ id: "all", items: LEARN_GROUPS.flatMap(g => g.items) }] : LEARN_GROUPS;
  return (
    <div className="space-y-8">
      {groups.map(g => (
        <section key={g.id}>
          {!compact && <h2 className="mb-4 text-xl font-extrabold text-slate-900 dark:text-white">{g[lang]}</h2>}
          <Wrap compact={compact} label={g[lang] || s.title}>
            {g.items.map(item => {
              const Icon = item.icon;
              const c = tone(item.tone);
              const [title, desc] = item[lang];
              return (
                <Link key={item.to} to={item.to} className="card group relative flex flex-col gap-2.5 overflow-hidden p-4 transition sm:gap-3 sm:p-5 hover:-translate-y-1 hover:shadow-xl">
                  <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.bar} opacity-0 transition group-hover:opacity-100`} />
                  <span className={`grid h-10 w-10 place-items-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl ${c.soft}`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <span className="leading-snug font-bold text-slate-900 sm:text-lg dark:text-white">{title}</span>
                  <span className="text-[13px] text-slate-600 sm:text-sm dark:text-slate-400">{desc}</span>
                  <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-semibold text-brand-700 dark:text-brand-300">
                    {s.open} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </Wrap>
        </section>
      ))}
    </div>
  );
}

export default function LearnPage() {
  const { lang } = useLang();
  const s = T[lang];
  const latest = [...POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <>
      <PageHero icon={GraduationCap} title={s.title} sub={s.sub} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <LearnGrid />
        <section className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-3">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{s.blog}</h2>
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300">
              {s.all} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map(p => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>
      </div>
    </>
  );
}
