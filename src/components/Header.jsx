import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Calculator, House, Languages, Moon, Scale, Sun } from "lucide-react";
import { useLang } from "../context/LangContext.jsx";
import { storage } from "../utils.js";

export default function Header({ compareCount, onOpenCompare }) {
  const { t, lang, toggleLang, num } = useLang();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark(d => {
      storage.set("theme", d ? "light" : "dark");
      return !d;
    });
  };

  const ghost =
    "inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-brand-100";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src="/favicon.svg" alt="" className="h-10 w-10 shrink-0 rounded-xl shadow-sm" />
          <span className="hidden min-w-0 sm:block">
            <strong className="block text-lg leading-tight text-brand-600 dark:text-brand-100">{t.siteTitle}</strong>
            <small className="hidden truncate text-xs text-slate-500 sm:block dark:text-slate-400">{t.tagline}</small>
          </span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1">
          {[
            ["/", House, lang === "bn" ? "হোম" : "Home"],
            ["/tools", Calculator, lang === "bn" ? "টুলস" : "Tools"],
            ["/guide", BookOpen, lang === "bn" ? "গাইড" : "Guide"],
          ].map(([to, Icon, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              title={label}
              className={({ isActive }) =>
                `inline-flex h-10 items-center gap-1.5 rounded-xl px-2.5 text-sm font-semibold transition md:px-3 ${
                  isActive ? "bg-brand-50 text-brand-700 dark:bg-brand-700/25 dark:text-brand-100" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`
              }
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={onOpenCompare} className={ghost} aria-label={t.compare}>
            <Scale className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t.compare}</span>
            {compareCount > 0 && (
              <span className="rounded-full bg-brand-500 px-2 py-0.5 text-xs text-white">{num(compareCount)}</span>
            )}
          </button>
          <button type="button" onClick={toggleTheme} className={`${ghost} w-10 justify-center px-0`} aria-label={t.theme} title={t.theme}>
            {dark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-brand-500 px-3 text-sm sm:px-4 font-semibold text-white shadow-sm transition hover:bg-brand-600"
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t.lang}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
