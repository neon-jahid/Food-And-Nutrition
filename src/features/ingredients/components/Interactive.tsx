"use client";

/* Client islands: section navigation, the search combobox and recently viewed ingredients. */
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, Search, X } from "lucide-react";
import { ENTRIES, categoryName } from "../lib/repository.client";
import { suggest } from "../lib/search";
import { Link, storage, useLang, useNavigate, usePathname } from "../lib/site";
import { STRINGS } from "../strings";
import { CodeChip, IngredientCard, SectionTitle } from "./Parts";
import { Photo } from "./Figure";
import type { SearchEntry } from "../types";

export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function SectionNav() {
  const { lang } = useLang();
  const pathname = usePathname();
  const s = STRINGS[lang].nav;
  const items: [string, string][] = [
    ["/ingredients", s.home], ["/ingredients/explore", s.explore], ["/ingredients/decoder", s.decoder],
    ["/ingredients/compare", s.compare], ["/ingredients/learn", s.learn], ["/ingredients/evidence-labels", s.labels],
  ];
  const active = (to: string) => (to === "/ingredients" ? pathname === to : pathname === to || pathname.startsWith(`${to}/`));
  return (
    <nav aria-label={STRINGS[lang].section} className="border-b border-stone-200 bg-paper/90 dark:border-forest-800 dark:bg-paper-dark/90">
      <ul className="no-scrollbar mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4">
        {items.map(([to, label]) => (
          <li key={to} className="relative shrink-0">
            <Link to={to} aria-current={active(to) ? "page" : undefined} className={`block px-3 py-3 text-sm font-medium transition-colors ${active(to) ? "text-forest-900 dark:text-white" : "text-stone-600 hover:text-forest-800 dark:text-stone-400 dark:hover:text-white"}`}>
              {label}
            </Link>
            {active(to) && <motion.span layoutId="ii-nav" className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-ember-500" />}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Search box with suggestions. With `onPick`, choosing a suggestion calls it (used to add to a
 * comparison) instead of opening the ingredient's page.
 */
export function SearchBar({ large = false, autoFocus = false, label, onPick, exclude }: { large?: boolean; autoFocus?: boolean; label?: string; onPick?: (e: SearchEntry) => void; exclude?: string[] }) {
  const { lang } = useLang();
  const s = STRINGS[lang];
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const box = useRef<HTMLDivElement>(null);
  const baseId = useId();
  const listId = `${baseId}-list`;

  const results = useMemo(() => {
    const found = suggest(ENTRIES, query, 12).filter(e => !exclude?.includes(e.id));
    return found.slice(0, 7);
  }, [query, exclude]);
  const showList = open && query.trim().length > 0;

  useEffect(() => {
    const onDown = (e: MouseEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const choose = (e: SearchEntry) => {
    setOpen(false);
    if (onPick) {
      onPick(e);
      setQuery("");
    } else navigate(`/ingredients/${e.id}`);
  };

  const submit = () => {
    if (active >= 0 && results[active]) return choose(results[active]);
    if (onPick) return results[0] ? choose(results[0]) : undefined;
    if (query.trim()) navigate(`/ingredients/explore?q=${encodeURIComponent(query.trim())}`);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") { setOpen(false); setActive(-1); return; }
    if (e.key === "Enter") { e.preventDefault(); submit(); return; }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      if (!results.length) return;
      const d = e.key === "ArrowDown" ? 1 : -1;
      setActive(a => (a + d + results.length + (a === -1 && d === -1 ? 1 : 0)) % results.length);
    }
  };

  return (
    <div ref={box} className="relative">
      <label htmlFor={`${baseId}-input`} className="sr-only">{label ?? s.searchLabel}</label>
      <div className={`flex items-center gap-3 rounded-2xl border border-stone-300 bg-white transition focus-within:border-forest-600 focus-within:ring-4 focus-within:ring-forest-600/15 dark:border-forest-700 dark:bg-forest-950 ${large ? "px-5 py-4 shadow-xl shadow-forest-900/10" : "px-4 py-2.5"}`}>
        <Search className={`${large ? "h-6 w-6" : "h-5 w-5"} shrink-0 text-forest-600 dark:text-forest-300`} aria-hidden="true" />
        <input
          id={`${baseId}-input`}
          type="search"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={showList && active >= 0 ? `${baseId}-o${active}` : undefined}
          autoComplete="off"
          autoFocus={autoFocus}
          value={query}
          placeholder={label ?? s.searchPlaceholder}
          onChange={e => { setQuery(e.target.value); setOpen(true); setActive(-1); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          className={`w-full min-w-0 bg-transparent text-forest-950 outline-none placeholder:text-stone-500 dark:text-white dark:placeholder:text-stone-400 [&::-webkit-search-cancel-button]:hidden ${large ? "text-lg" : "text-base"}`}
        />
        {query && <button type="button" aria-label={s.clear} onClick={() => { setQuery(""); setActive(-1); }} className="shrink-0 rounded-full p-1 text-stone-500 hover:bg-stone-100 dark:hover:bg-forest-800"><X className="h-4 w-4" aria-hidden="true" /></button>}
      </div>
      <AnimatePresence>
        {showList && (
          <motion.div
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.14 }}
            className="absolute inset-x-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl shadow-forest-900/15 dark:border-forest-700 dark:bg-forest-950"
          >
            <ul id={listId} role="listbox" aria-label={s.searchLabel}>
              {results.map((e, i) => (
                <li
                  key={e.id} id={`${baseId}-o${i}`} role="option" aria-selected={i === active}
                  onMouseDown={ev => ev.preventDefault()} onClick={() => choose(e)} onMouseEnter={() => setActive(i)}
                  className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 ${i === active ? "bg-forest-50 dark:bg-forest-900" : ""}`}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-medium text-forest-950 dark:text-white">{e.name[lang]}</span>
                    <span className="block truncate text-xs text-stone-600 dark:text-stone-400">{categoryName(e.category)?.[lang]}</span>
                  </span>
                  {e.eNumber && <CodeChip>{e.eNumber}</CodeChip>}
                </li>
              ))}
            </ul>
            {!results.length && <p className="px-4 py-3 text-sm text-stone-600 dark:text-stone-400">{s.noSuggestions}</p>}
            {!onPick && results.length > 0 && (
              <Link to={`/ingredients/explore?q=${encodeURIComponent(query.trim())}`} onClick={() => setOpen(false)} className="block border-t border-stone-100 px-4 py-2.5 text-sm font-semibold text-forest-700 hover:bg-forest-50 dark:border-forest-800 dark:text-forest-200 dark:hover:bg-forest-900">
                {s.seeAll}
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const RECENT_KEY = "ingredients.recent";
const validRecent = (v: unknown): string[] => (Array.isArray(v) ? v.filter(id => ENTRIES.some(e => e.id === id)).slice(0, 8) : []);

/** Notes that this ingredient was opened. Renders nothing. */
export function RecordRecent({ id }: { id: string }) {
  useEffect(() => {
    storage.set(RECENT_KEY, [id, ...validRecent(storage.get<unknown>(RECENT_KEY, [])).filter(x => x !== id)].slice(0, 8));
  }, [id]);
  return null;
}

export function RecentlyExplored() {
  const { lang } = useLang();
  const s = STRINGS[lang];
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => { setIds(validRecent(storage.get<unknown>(RECENT_KEY, []))); }, []);
  if (!ids.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14">
      <SectionTitle
        title={s.recent} sub={s.recentSub}
        action={<button type="button" onClick={() => { storage.set(RECENT_KEY, []); setIds([]); }} className="text-sm font-semibold text-forest-700 hover:underline dark:text-forest-200">{s.clearRecent}</button>}
      />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ids.slice(0, 4).map(id => {
          const e = ENTRIES.find(x => x.id === id)!;
          return <li key={id} className="min-w-0"><IngredientCard item={e} lang={lang} showSummary={false} /></li>;
        })}
      </ul>
    </section>
  );
}

/** Rotates by calendar week. The first paint uses the first entry, so server and browser agree. */
export function FeaturedOfWeek({ ids }: { ids: string[] }) {
  const { lang } = useLang();
  const s = STRINGS[lang];
  const [index, setIndex] = useState(0);
  useEffect(() => { setIndex(Math.floor(Date.now() / (7 * 24 * 3600 * 1000)) % ids.length); }, [ids.length]);
  const e = ENTRIES.find(x => x.id === ids[index]);
  if (!e) return null;
  return (
    <div className="grid overflow-hidden rounded-3xl bg-forest-800 text-white md:grid-cols-2 dark:bg-forest-900">
      {e.photo && <Photo image={e.photo} lang={lang} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/10] h-full w-full" />}
      <div className="p-6 sm:p-10">
        <p className="text-sm font-semibold text-ember-300">{s.featured}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{e.name[lang]}</h2>
        {e.eNumber && <p className="mt-2 font-mono text-sm text-forest-100">{e.eNumber}{e.formula ? ` · ${e.formula}` : ""}</p>}
        <p className="mt-3 leading-relaxed text-forest-50">{e.summary[lang]}</p>
        <Link to={`/ingredients/${e.id}`} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-semibold text-forest-900 transition hover:bg-ember-50">{s.readProfile}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
