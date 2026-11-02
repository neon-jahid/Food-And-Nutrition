import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import { suggest } from "../search.js";
import FoodImage from "./FoodImage.jsx";
import { CornerDownLeft, Lightbulb, Search } from "lucide-react";

/** Search input with a live suggestion dropdown (keyboard: ↑ ↓ Enter Esc). */
export default function SearchBox({ value, onChange, onSubmit }) {
  const { t, lang, fmt, name } = useLang();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef(null);

  const results = useMemo(() => suggest(value), [value]);

  useEffect(() => {
    const close = e => { if (!wrapRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    setActive(-1);
  }, [value]);

  const go = food => { setOpen(false); navigate(`/food/${food.id}`); };

  const onKeyDown = e => {
    // Enter without a highlighted suggestion → hand the query to the caller (e.g. open the full results page)
    if (e.key === "Enter" && onSubmit && !(open && active >= 0 && results.length)) {
      e.preventDefault();
      setOpen(false);
      onSubmit(value);
      return;
    }
    if (!open || !results.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(i => (i + 1) % results.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(i => (i <= 0 ? results.length - 1 : i - 1)); }
    else if (e.key === "Enter") {
      if (active >= 0) { e.preventDefault(); go(results[active].food); }
      else setOpen(false);
    } else if (e.key === "Escape") setOpen(false);
  };

  const showList = open && value.trim() !== "";

  return (
    <div ref={wrapRef} className="mx-auto max-w-2xl text-left">
      {/* icon is centred on the input only — this box must not contain anything else */}
      <div className="relative">
      <Search className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
      <input
        type="search"
        role="combobox"
        aria-expanded={showList}
        aria-controls="search-suggestions"
        aria-autocomplete="list"
        value={value}
        onChange={e => { onChange(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder={t.searchPlaceholder}
        className="w-full rounded-full border border-slate-200 bg-white py-3.5 pr-5 pl-12 text-base shadow-lg shadow-brand-500/5 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-slate-700 dark:bg-slate-900"
      />

      {showList && (
        <div
          id="search-suggestions"
          role="listbox"
          className="absolute inset-x-0 top-full z-40 mt-2 flex max-h-[min(28rem,60dvh)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        >
          {results.length ? (
            <>
              <p className="shrink-0 px-4 pt-3 pb-1 text-xs font-semibold text-slate-400 uppercase">{t.suggestionsTitle}</p>
              <ul className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                {results.map((r, i) => {
                  const cat = CATEGORIES.find(c => c.id === r.food.cat);
                  return (
                    <li key={r.food.id} role="option" aria-selected={i === active}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(r.food)}
                        className={`flex w-full items-center gap-3 px-3 py-2.5 sm:px-4 text-left transition ${
                          i === active ? "bg-brand-50 dark:bg-slate-800" : ""
                        }`}
                      >
                        <FoodImage food={r.food} className="h-10 w-10 shrink-0 rounded-lg sm:h-11 sm:w-11" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-semibold">{name(r.food)}</span>
                          <span className="block truncate text-xs text-slate-500 dark:text-slate-400">
                            {r.snippet ? r.snippet[lang] : cat[lang]}
                          </span>
                        </span>
                        <span className="shrink-0 text-xs whitespace-nowrap text-slate-400">{fmt(r.food.n.calories)} {t.kcal}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <p className="hidden shrink-0 items-center gap-1.5 border-t border-slate-100 px-4 py-2 text-xs sm:flex text-slate-400 dark:border-slate-800"><CornerDownLeft className="h-3.5 w-3.5" aria-hidden="true" /> {t.pressEnter}</p>
            </>
          ) : (
            <p className="px-4 py-4 text-sm text-slate-500">{t.noResults}</p>
          )}
        </div>
      )}
      </div>
      {!value && (
        <p className="mt-3 flex items-start justify-center gap-1.5 text-center text-xs text-slate-500 lg:justify-start lg:text-left dark:text-slate-400">
          <Lightbulb className="h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" /> {t.searchTips}
        </p>
      )}
    </div>
  );
}
