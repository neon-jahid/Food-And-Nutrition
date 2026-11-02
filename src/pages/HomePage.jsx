import { useMemo, useState } from "react";
import { Link, useNavigate } from "../router.jsx";
import { CATEGORIES, FOODS } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import CategoryChips from "../components/CategoryChips.jsx";
import FoodCard from "../components/FoodCard.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Hero from "../components/Hero.jsx";
import MealGuide from "../components/MealGuide.jsx";
import CoffeeSpotlight from "../components/CoffeeSpotlight.jsx";
import { ArrowRight, GraduationCap, LayoutGrid, Newspaper, UtensilsCrossed } from "lucide-react";
import { POSTS } from "../data/blog.js";
import { LearnGrid } from "./LearnPage.jsx";
import { PostCard } from "./BlogPage.jsx";
import { HealthGoals, RecentlyViewed, SectionHeader, SeasonalNow, TipOfDay, TopLists, ToolsCta } from "../components/HomeSections.jsx";

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
      <Hero query={query} setQuery={setQuery} onSearch={q => q.trim() && browse({ q: q.trim() })} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16">
        <section className="mt-12">
          <SectionHeader
            icon={UtensilsCrossed}
            title={lang === "bn" ? "কখন কী খাবেন" : "What to eat, and when"}
            sub={lang === "bn" ? "সকালের নাস্তা থেকে রাতের খাবার — দিনের প্রতিটি সময়ের জন্য ভালো থালা" : "From breakfast to dinner — a good plate for every time of day"}
            action={
              <Link to="/food-guide/meal-times" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-100">
                {lang === "bn" ? "পুরো গাইড" : "Full guide"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            }
          />
          <MealGuide compact />
        </section>

        <CoffeeSpotlight />

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

        <section data-reveal className="mt-12">
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

        <section data-reveal className="mt-12">
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
