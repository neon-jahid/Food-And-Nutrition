import { Suspense, lazy, useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { FOODS } from "./data/foods.js";
import { useLang } from "./context/LangContext.jsx";
import { storage } from "./utils.js";
import { LEARN_GROUPS, PRIMARY_NAV } from "./nav.js";
import Header, { BottomTabs } from "./components/Header.jsx";
import CompareModal from "./components/CompareModal.jsx";
import HomePage from "./pages/HomePage.jsx";
import FoodPage from "./pages/FoodPage.jsx";
import FoodsPage from "./pages/FoodsPage.jsx";
import ToolsPage from "./pages/ToolsPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";
import LearnPage from "./pages/LearnPage.jsx";
const PlantsPage = lazy(() => import("./pages/PlantsPage.jsx"));
const StoragePage = lazy(() => import("./pages/StoragePage.jsx"));
const NutrientsPage = lazy(() => import("./pages/NutrientsPage.jsx"));
const DeficiencyPage = lazy(() => import("./pages/DeficiencyPage.jsx"));
const MythsPage = lazy(() => import("./pages/MythsPage.jsx"));
import BlogPage from "./pages/BlogPage.jsx";
const GenderHealthPage = lazy(() => import("./pages/GenderHealthPage.jsx"));
const MealsPage = lazy(() => import("./pages/MealsPage.jsx"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage.jsx"));

const MAX_COMPARE = 3;

/** Scroll to top on page change, or to the #anchor when the URL has one. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // lazy pages may still be loading — retry for up to ~2 s until the target exists
      let tries = 0;
      const timer = setInterval(() => {
        const el = document.getElementById(id);
        if (el || ++tries > 40) {
          clearInterval(timer);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
      return () => clearInterval(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Footer() {
  const { t, lang } = useLang();
  const groups = [
    { title: lang === "bn" ? "এক্সপ্লোর" : "Explore", items: PRIMARY_NAV.map(n => [n.to, n[lang]]) },
    ...LEARN_GROUPS.map(g => ({ title: g[lang], items: g.items.map(i => [i.to, i[lang][0]]) })),
  ];
  return (
    <footer className="mt-8 border-t border-slate-200/80 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <p className="text-gradient text-xl font-extrabold">{t.siteTitle}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t.footer}</p>
        </div>
        {groups.map(g => (
          <nav key={g.title} aria-label={g.title}>
            <p className="mb-3 text-xs font-semibold tracking-wide text-slate-400 uppercase">{g.title}</p>
            <ul className="space-y-2 text-sm">
              {g.items.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-slate-600 transition hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="border-t border-slate-200/80 px-4 py-5 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        {t.photo}: Wikimedia Commons (CC BY / CC BY-SA / Public domain) · © {new Date().getFullYear()} NutriBase
      </p>
    </footer>
  );
}

export default function App() {
  const [compareOpen, setCompareOpen] = useState(false);
  const [compare, setCompare] = useState(() =>
    storage.get("compare", []).filter(id => FOODS.some(f => f.id === id))
  );

  useEffect(() => {
    storage.set("compare", compare);
  }, [compare]);

  const toggleCompare = id =>
    setCompare(list => {
      if (list.includes(id)) return list.filter(x => x !== id);
      const next = [...list, id];
      return next.length > MAX_COMPARE ? next.slice(-MAX_COMPARE) : next;
    });

  const pageProps = { compare, onToggleCompare: toggleCompare };

  return (
    <div className="flex min-h-screen flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0">
      <ScrollManager />
      <Header compareCount={compare.length} onOpenCompare={() => setCompareOpen(true)} />

      <main className="flex-1">
        <Suspense fallback={<div className="mx-auto h-[60vh] max-w-6xl animate-pulse px-4 py-10"><div className="h-10 w-1/2 rounded-2xl bg-slate-200 dark:bg-slate-800" /></div>}>
        <Routes>
          <Route path="/" element={<HomePage {...pageProps} />} />
          <Route path="/foods" element={<FoodsPage {...pageProps} />} />
          <Route path="/food/:id" element={<FoodPage {...pageProps} />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/storage" element={<StoragePage />} />
          <Route path="/vitamins" element={<NutrientsPage key="vitamins" kind="vitamins" />} />
          <Route path="/minerals" element={<NutrientsPage key="minerals" kind="minerals" />} />
          <Route path="/deficiency" element={<DeficiencyPage />} />
          <Route path="/mens-health" element={<GenderHealthPage key="men" who="men" />} />
          <Route path="/womens-health" element={<GenderHealthPage key="women" who="women" />} />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/myths" element={<MythsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<FoodPage {...pageProps} />} />
        </Routes>
        </Suspense>
      </main>

      <Footer />
      <BottomTabs />

      {compareOpen && (
        <CompareModal
          ids={compare}
          max={MAX_COMPARE}
          onRemove={toggleCompare}
          onClear={() => setCompare([])}
          onClose={() => setCompareOpen(false)}
        />
      )}
    </div>
  );
}
