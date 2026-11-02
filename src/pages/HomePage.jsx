import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CATEGORIES, FOODS } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import CategoryChips from "../components/CategoryChips.jsx";
import FoodCard from "../components/FoodCard.jsx";
import SearchBox from "../components/SearchBox.jsx";
import FoodImage from "../components/FoodImage.jsx";
import { ArrowRight, GraduationCap, LayoutGrid, Newspaper } from "lucide-react";
import { POSTS } from "../data/blog.js";
import { LearnGrid } from "./LearnPage.jsx";
import { PostCard } from "./BlogPage.jsx";
import { HealthGoals, RecentlyViewed, SectionHeader, SeasonalNow, TipOfDay, TopLists, ToolsCta } from "../components/HomeSections.jsx";

const HERO_FOODS = ["hilsa", "mango", "spinach", "egg"];
const PREVIEW_COUNT = 8;
const latestPosts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

export default function HomePage({ compare, onToggleCompare }) {
  const { t, lang, fill, name, num } = useLang();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // the full, filterable list lives on /foods — the homepage only previews it
  const browse = (patch = {}) => {
    const qs = new URLSearchParams(Object.entries(patch).filter(([, v]) => v && v !== "all")).toString();
    navigate(qs ? `/foods?${qs}` : "/foods");
  };

  const preview = useMemo(
    () => [...FOODS].sort((a, b) => name(a).localeCompare(name(b), lang)).slice(0, PREVIEW_COUNT),
    [lang, name]
  );

  const viewAll = lang === "bn" ? `সব ${num(FOODS.length)}টি খাবার দেখুন` : `View all ${num(FOODS.length)} foods`;

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        {/* decorative HD photo strip — clipped in its own layer so the search dropdown isn't cut off */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 hidden w-[36%] grid-cols-2 grid-rows-2 gap-3 py-8 pr-6 xl:grid" aria-hidden="true">
          {HERO_FOODS.map((id, i) => {
            const f = FOODS.find(x => x.id === id);
            return (
              <FoodImage
                key={id}
                food={f}
                hd
                eager
                sizes="240px"
                className={`h-full min-h-0 w-full rounded-2xl shadow-lg ring-4 ring-white/70 dark:ring-slate-900/70 ${i % 2 ? "translate-y-4" : "-translate-y-1"}`}
              />
            );
          })}
        </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:py-16 xl:pr-[40%]">
          <div className="text-center xl:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{t.heroTitle}</h1>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 xl:mx-0 dark:text-slate-400">
              {fill(t.heroText, { count: FOODS.length, cats: CATEGORIES.length })}
            </p>
          </div>
          <div className="mt-7">
            {/* suggestions open a food directly; Enter opens the full results on /foods */}
            <SearchBox value={query} onChange={setQuery} onSubmit={q => q.trim() && browse({ q: q.trim() })} />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16">
        <HealthGoals onPick={id => browse({ goals: id })} />
        <SeasonalNow />
        <RecentlyViewed />
        <TipOfDay />

        <section className="mt-12">
          <SectionHeader
            icon={LayoutGrid}
            title={lang === "bn" ? "সব খাবার" : "All foods"}
            sub={fill(t.heroText, { count: FOODS.length, cats: CATEGORIES.length })}
            action={
              <Link to="/foods" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-100">
                {lang === "bn" ? "সব দেখুন" : "View all"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <CategoryChips active="all" onChange={cat => browse({ cat })} />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {preview.map(food => (
              <FoodCard
                key={food.id}
                food={food}
                inCompare={compare.includes(food.id)}
                onToggleCompare={() => onToggleCompare(food.id)}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/foods"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-600"
            >
              {viewAll} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <TopLists />

        <section className="mt-12">
          <SectionHeader
            icon={GraduationCap}
            title={lang === "bn" ? "পুষ্টি সম্পর্কে জানুন" : "Learn about nutrition"}
            sub={lang === "bn" ? "ভিটামিন, খনিজ, ঔষধি গাছ, খাবার সংরক্ষণ ও আরও অনেক কিছু" : "Vitamins, minerals, medicinal plants, food storage and more"}
            action={
              <Link to="/learn" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-100">
                {lang === "bn" ? "সব গাইড" : "All guides"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <LearnGrid compact />
        </section>

        <section className="mt-12">
          <SectionHeader
            icon={Newspaper}
            title={lang === "bn" ? "ব্লগ থেকে" : "From the blog"}
            sub={lang === "bn" ? "দেশি খাবারে সুস্থ থাকার সহজ লেখা" : "Practical reads on eating well, the desi way"}
            action={
              <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-100">
                {lang === "bn" ? "সব লেখা" : "All articles"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map(p => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>

        <ToolsCta />
      </div>
    </>
  );
}
