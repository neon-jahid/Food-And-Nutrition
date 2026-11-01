import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { FOODS } from "./data/foods.js";
import { useLang } from "./context/LangContext.jsx";
import { storage } from "./utils.js";
import Header from "./components/Header.jsx";
import CompareModal from "./components/CompareModal.jsx";
import HomePage from "./pages/HomePage.jsx";
import FoodPage from "./pages/FoodPage.jsx";
import FoodsPage from "./pages/FoodsPage.jsx";
import ToolsPage from "./pages/ToolsPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";

const MAX_COMPARE = 3;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { t } = useLang();
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
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header compareCount={compare.length} onOpenCompare={() => setCompareOpen(true)} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage {...pageProps} />} />
          <Route path="/foods" element={<FoodsPage {...pageProps} />} />
          <Route path="/food/:id" element={<FoodPage {...pageProps} />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="*" element={<FoodPage {...pageProps} />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        <div className="mx-auto max-w-3xl px-4">
          <p>{t.footer}</p>
          <p className="mt-2 text-xs">{t.photo}: Wikimedia Commons (CC BY / CC BY-SA / Public domain) · © {new Date().getFullYear()} NutriBase</p>
        </div>
      </footer>

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
