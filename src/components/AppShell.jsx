"use client";

/* Everything around a page: providers, header, footer, bottom tabs and the compare list. */
import { useEffect, useMemo, useState } from "react";
import { FOODS } from "../data/foods.js";
import { LangProvider, useLang } from "../context/LangContext.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import { Link, OutletProvider, useLocation } from "../router.jsx";
import { usePersistentState } from "../hooks.js";
import { LEARN_GROUPS, PRIMARY_NAV } from "../nav.js";
import { SITE } from "../site.js";
import Header, { BottomTabs } from "./Header.jsx";
import CompareModal from "./CompareModal.jsx";

const MAX_COMPARE = 3;

/** Scrolls to #anchors, waiting briefly for lazily loaded route content to appear. */
function HashScroller() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 40) {
        clearInterval(timer);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
    return () => clearInterval(timer);
  }, [pathname, hash]);
  return null;
}

const FOOTER_LEGAL = [
  ["/about", "About", "আমাদের সম্পর্কে"],
  ["/contact", "Contact", "যোগাযোগ"],
  ["/editorial-policy", "Editorial policy", "সম্পাদকীয় নীতি"],
  ["/references", "Sources & references", "উৎস ও তথ্যসূত্র"],
  ["/privacy-policy", "Privacy", "গোপনীয়তা"],
  ["/terms", "Terms", "শর্তাবলি"],
  ["/medical-disclaimer", "Medical disclaimer", "চিকিৎসা-সংক্রান্ত সতর্কতা"],
];

function Footer() {
  const { t, lang } = useLang();
  const groups = [
    { title: lang === "bn" ? "এক্সপ্লোর" : "Explore", items: [...PRIMARY_NAV.map(n => [n.to, n[lang]]), ["/blog", lang === "bn" ? "ব্লগ" : "Blog"]] },
    ...LEARN_GROUPS.map(g => ({ title: g[lang], items: g.items.map(i => [i.to, i[lang][0]]) })),
  ];
  const link = "text-slate-500 transition hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300";
  return (
    <footer className="mt-12 border-t border-slate-200/80 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-6 sm:pt-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* brand */}
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-accent-500">
                <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <path d="M18 34h28a14 14 0 0 1-28 0Z" fill="#fff" />
                  <path d="M32 31c0-8 4-14 12-16-1 8-5 13-12 16Z" fill="#fff" fillOpacity=".75" />
                  <path d="M30 31c-6-2-9-7-9-13 6 1 9 6 9 13Z" fill="#fff" fillOpacity=".9" />
                </svg>
              </span>
              <span className="font-extrabold text-slate-900 dark:text-white">{SITE.name[lang]}</span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{t.footer}</p>
          </div>

          {/* phones: one short row of main links */}
          <nav aria-label={groups[0].title} className="sm:hidden">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              {[...groups[0].items, ["/learn", lang === "bn" ? "জানুন" : "Learn"]].map(([to, label]) => (
                <li key={to}><Link to={to} className="text-slate-700 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300">{label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* tablets & desktop: compact link columns */}
          <div className="hidden gap-x-10 gap-y-6 sm:grid sm:grid-cols-2 md:grid-cols-4">
            {groups.map(g => (
              <nav key={g.title} aria-label={g.title}>
                <p className="mb-2.5 text-xs font-semibold text-slate-900 dark:text-white">{g.title}</p>
                <ul className="space-y-1.5 text-sm">
                  {g.items.map(([to, label]) => (
                    <li key={to}><Link to={to} className={link}>{label}</Link></li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200/80 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
          <nav aria-label={lang === "bn" ? "আইনি ও তথ্য" : "Legal & information"} className="sm:order-2">
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
              {FOOTER_LEGAL.map(([to, en, bn]) => (
                <li key={to}><Link to={to} className={link}>{lang === "bn" ? bn : en}</Link></li>
              ))}
            </ul>
          </nav>
          <p className="text-slate-500 dark:text-slate-400">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {SITE.name[lang]} · {t.photo}: Wikimedia Commons
          </p>
        </div>
      </div>
    </footer>
  );
}

function Shell({ children }) {
  const [compareOpen, setCompareOpen] = useState(false);
  const [compare, setCompare] = usePersistentState("compare", [], v =>
    Array.isArray(v) ? v.filter(id => FOODS.some(f => f.id === id)) : []
  );

  const outlet = useMemo(() => ({
    compare,
    onToggleCompare: id =>
      setCompare(list => {
        if (list.includes(id)) return list.filter(x => x !== id);
        const next = [...list, id];
        return next.length > MAX_COMPARE ? next.slice(-MAX_COMPARE) : next;
      }),
  }), [compare, setCompare]);

  return (
    <div className="flex min-h-screen flex-col pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0">
      <HashScroller />
      <Header compareCount={compare.length} onOpenCompare={() => setCompareOpen(true)} />
      <main id="main" className="flex-1">
        <OutletProvider value={outlet}>{children}</OutletProvider>
      </main>
      <Footer />
      <BottomTabs />
      {compareOpen && (
        <CompareModal
          ids={compare}
          max={MAX_COMPARE}
          onRemove={outlet.onToggleCompare}
          onClear={() => setCompare([])}
          onClose={() => setCompareOpen(false)}
        />
      )}
    </div>
  );
}

export default function AppShell({ children }) {
  return (
    <ThemeProvider>
      <LangProvider>
        <Shell>{children}</Shell>
      </LangProvider>
    </ThemeProvider>
  );
}
