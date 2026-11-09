import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, usePathname } from "../router.jsx";
import { ArrowRight, ChevronDown, GraduationCap, Languages, Menu, Scale, X } from "lucide-react";
import { useLang } from "../context/LangContext.jsx";
import { LEARN_GROUPS, LEARN_PATHS, PRIMARY_NAV } from "../nav.js";
import { tone } from "../tones.js";
import { useDismiss, useScrollLock, useDialogFocus } from "../hooks.js";
import ThemeMenu, { ThemePanel } from "./ThemeMenu.jsx";

const T = {
  en: { learn: "Learn", explore: "Explore all guides", menu: "Menu", openMenu: "Open menu", closeMenu: "Close menu", appearance: "Appearance", language: "Language" },
  bn: { learn: "জানুন", explore: "সব গাইড দেখুন", menu: "মেনু", openMenu: "মেনু খুলুন", closeMenu: "মেনু বন্ধ করুন", appearance: "থিম", language: "ভাষা" },
};

const isActivePath = (pathname, to) => (to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/"));

function Logo() {
  const { t } = useLang();
  return (
    <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-xl focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-md shadow-brand-500/30">
        <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M18 34h28a14 14 0 0 1-28 0Z" fill="#fff" />
          <path d="M32 31c0-8 4-14 12-16-1 8-5 13-12 16Z" fill="#fff" fillOpacity=".75" />
          <path d="M30 31c-6-2-9-7-9-13 6 1 9 6 9 13Z" fill="#fff" fillOpacity=".9" />
        </svg>
      </span>
      <span className="hidden min-w-0 sm:block">
        <strong className="block text-lg leading-tight font-extrabold text-slate-900 dark:text-white">{t.siteTitle}</strong>
        <small className="block max-w-[15.5rem] truncate text-[11px] text-slate-500 dark:text-slate-400">{t.tagline}</small>
      </span>
    </Link>
  );
}

/** Coffee gets its own espresso-coloured pill so the guide stands out in the menus. */
const COFFEE_PILL = "bg-gradient-to-r from-roast-800 to-roast-600 text-roast-50 shadow-sm shadow-roast-900/20 hover:brightness-110";

function NavItem({ to, icon: Icon, label, special }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `relative inline-flex h-10 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold transition ${
          special
            ? `${COFFEE_PILL} ${isActive ? "ring-2 ring-roast-300" : ""}`
            : isActive
            ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
        }`
      }
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </NavLink>
  );
}

function LearnLink({ item, onClick, compact = false }) {
  const { lang } = useLang();
  const pathname = usePathname();
  const active = isActivePath(pathname, item.to);
  const [title, desc] = item[lang];
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group flex items-start gap-3 rounded-2xl p-2.5 transition ${
        active ? "bg-brand-50 dark:bg-brand-500/10" : "hover:bg-slate-100 dark:hover:bg-slate-800/70"
      }`}
    >
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tone(item.tone).soft} transition group-hover:scale-105`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className={`block text-sm font-semibold ${active ? "text-brand-700 dark:text-brand-300" : "text-slate-900 dark:text-white"}`}>{title}</span>
        {!compact && <span className="block text-xs leading-snug text-slate-500 dark:text-slate-400">{desc}</span>}
      </span>
    </Link>
  );
}

/** Desktop "Learn" mega menu. */
function LearnMenu() {
  const { lang } = useLang();
  const pathname = usePathname();
  const s = T[lang];
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);
  const active = LEARN_PATHS.some(p => isActivePath(pathname, p));

  return (
    <div ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls="learn-menu"
        className={`inline-flex h-10 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold transition ${
          active || open
            ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
        }`}
      >
        <GraduationCap className="h-4 w-4" aria-hidden="true" />
        {s.learn}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div id="learn-menu" className="card absolute top-full right-4 left-4 z-50 mx-auto mt-1 max-w-5xl animate-pop overflow-hidden p-0 shadow-2xl">
          <div className="grid grid-cols-3 gap-2 p-3">
            {LEARN_GROUPS.map(g => (
              <div key={g.id}>
                <p className="px-2.5 pt-1 pb-2 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">{g[lang]}</p>
                <div className="space-y-0.5">
                  {g.items.map(item => <LearnLink key={item.to} item={item} onClick={close} />)}
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/learn"
            onClick={close}
            className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 dark:border-slate-800 dark:bg-slate-950/40 dark:text-brand-300 dark:hover:bg-brand-500/10"
          >
            {s.explore} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}

/** Mobile slide-in drawer with every link plus theme & language. */
function MobileDrawer({ open, onClose }) {
  const { lang, t, toggleLang } = useLang();
  const s = T[lang];
  const drawerRef = useRef(null);
  useScrollLock(open);
  useDialogFocus(drawerRef, open);

  useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        ref={drawerRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={s.menu}
        inert={!open}
        className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out dark:bg-slate-900 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
          <p className="text-lg font-extrabold text-slate-900 dark:text-white">{s.menu}</p>
          <button type="button" onClick={onClose} className="icon-btn" aria-label={s.closeMenu}>
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label={s.menu} className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
          <div className="grid grid-cols-2 gap-2">
            {PRIMARY_NAV.map(({ to, icon: Icon, special, ...l }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                    special
                      ? `col-span-2 justify-center border-transparent ${COFFEE_PILL}`
                      : isActive
                      ? "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`
                }
              >
                <Icon className="h-4 w-4" aria-hidden="true" /> {l[lang]}
              </NavLink>
            ))}
          </div>

          {LEARN_GROUPS.map(g => (
            <div key={g.id}>
              <p className="px-2.5 pb-1.5 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">{g[lang]}</p>
              {g.items.map(item => <LearnLink key={item.to} item={item} onClick={onClose} />)}
            </div>
          ))}

          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/50">
            <p className="mb-3 font-bold text-slate-900 dark:text-white">{s.appearance}</p>
            <ThemePanel />
          </div>
        </nav>

        <div className="border-t border-slate-100 p-3 dark:border-slate-800">
          <button
            type="button"
            onClick={toggleLang}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 py-3 font-semibold text-white shadow-md shadow-brand-500/25"
          >
            <Languages className="h-4 w-4" aria-hidden="true" /> {s.language}: {t.lang}
          </button>
        </div>
      </aside>
    </div>
  );
}

/** Fixed bottom tab bar on phones — thumb-friendly navigation. */
export function BottomTabs() {
  const { lang } = useLang();
  const pathname = usePathname();
  const tabs = [
    PRIMARY_NAV[0],
    PRIMARY_NAV[1],
    { to: "/learn", icon: GraduationCap, en: "Learn", bn: "জানুন", match: LEARN_PATHS },
    PRIMARY_NAV[3],
    PRIMARY_NAV[2],
  ];
  return (
    <nav
      aria-label={lang === "bn" ? "দ্রুত নেভিগেশন" : "Quick navigation"}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200/80 bg-white/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden dark:border-slate-800 dark:bg-slate-950/85"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {tabs.map(({ to, icon: Icon, match, ...l }) => {
          const active = match ? match.some(p => isActivePath(pathname, p)) : isActivePath(pathname, to);
          return (
            <li key={to}>
              <Link
                to={to}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-0.5 py-2 text-[11px] font-semibold transition ${
                  active ? "text-brand-700 dark:text-brand-300" : "text-slate-500 dark:text-slate-400"
                }`}
              >
                <span className={`grid h-7 w-12 place-items-center rounded-full transition ${active ? "bg-brand-100 dark:bg-brand-500/20" : ""}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {l[lang]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Header({ compareCount, onOpenCompare }) {
  const { t, lang, toggleLang, num } = useLang();
  const s = T[lang];
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeDrawer = useCallback(() => setDrawer(false), []);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setDrawer(false), [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/80 shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950/80"
            : "border-transparent bg-white/50 dark:bg-slate-950/40"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <Logo />

          <nav aria-label={lang === "bn" ? "প্রধান মেনু" : "Main"} className="mx-auto hidden items-center gap-1 lg:flex">
            <NavItem {...PRIMARY_NAV[0]} label={PRIMARY_NAV[0][lang]} />
            <NavItem {...PRIMARY_NAV[1]} label={PRIMARY_NAV[1][lang]} />
            <LearnMenu />
            <NavItem {...PRIMARY_NAV[2]} label={PRIMARY_NAV[2][lang]} />
            <NavItem {...PRIMARY_NAV[3]} label={PRIMARY_NAV[3][lang]} />
            <NavItem {...PRIMARY_NAV[4]} label={PRIMARY_NAV[4][lang]} />
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1 lg:ml-0">
            <button type="button" onClick={onOpenCompare} className="icon-btn relative w-auto gap-2 px-2.5" aria-label={t.compare} title={t.compare}>
              <Scale className="h-[18px] w-[18px]" aria-hidden="true" />
              <span className="hidden text-sm font-semibold xl:inline">{t.compare}</span>
              {compareCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1 text-[11px] font-bold text-white ring-2 ring-white xl:static xl:ring-0 dark:ring-slate-950">
                  {num(compareCount)}
                </span>
              )}
            </button>
            <ThemeMenu />
            <button
              type="button"
              onClick={toggleLang}
              className="ml-1 hidden h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-4 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition hover:brightness-105 sm:inline-flex"
            >
              <Languages className="h-4 w-4" aria-hidden="true" />
              {t.lang}
            </button>
            <button
              type="button"
              onClick={() => setDrawer(true)}
              className="icon-btn lg:hidden"
              aria-label={s.openMenu}
              aria-expanded={drawer}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileDrawer open={drawer} onClose={closeDrawer} />
    </>
  );
}
