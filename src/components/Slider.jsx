import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LangContext.jsx";

/**
 * Horizontal slider: snap scrolling + swipe, slides fade in as they come fully into
 * view, and a control bar under the row with prev/next buttons and
 * page dots (a progress bar when there are many pages). Arrow keys work when focused.
 *
 * Slides always fill the row in whole numbers, so no half-cut card peeks in.
 * - `slide`: Tailwind classes setting --slide (one slide's width) per breakpoint.
 *   Default is one slide per view. Use calc((100% - (k-1)*gap)/k) for k per view
 *   (gap is 0.75rem on phones, 1rem from 640px).
 * - `until`: "sm" → a slider only below 640px, "lg" → only below 1024px. Above that the
 *   children use `gridClass` (a normal grid) and the controls are hidden.
 * - `dark`: control colours for dark sections.
 */
export default function Slider({ children, label, slide = "", until, gridClass = "", className = "", dark = false }) {
  const { lang, num } = useLang();
  const ref = useRef(null);
  const [state, setState] = useState({ page: 0, pages: 1 });

  // one "page" = one row-width of slides
  const metrics = useCallback(() => {
    const el = ref.current;
    if (!el) return null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = el.clientWidth + gap;
    const max = el.scrollWidth - el.clientWidth;
    return { el, step, max };
  }, []);

  const measure = useCallback(() => {
    const m = metrics();
    if (!m) return;
    const { el, step, max } = m;
    if (max <= 2 || getComputedStyle(el).overflowX === "visible") return setState({ page: 0, pages: 1 });
    const pages = Math.ceil(max / step - 0.02) + 1;
    const page = el.scrollLeft >= max - 2 ? pages - 1 : Math.round(el.scrollLeft / step);
    setState(s => (s.page === page && s.pages === pages ? s : { page, pages }));
  }, [metrics]);

  // fade slides that are not fully in view (CSS: .slider-fx > [data-out])
  const count = Array.isArray(children) ? children.length : 1;
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      entries => {
        const sliding = getComputedStyle(el).overflowX !== "visible";
        for (const e of entries) e.target.toggleAttribute("data-out", sliding && e.intersectionRatio < 0.92);
      },
      { root: el, threshold: [0, 0.25, 0.5, 0.75, 0.92, 1] },
    );
    [...el.children].forEach(c => io.observe(c));
    return () => io.disconnect();
  }, [count]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(el);
    return () => { el.removeEventListener("scroll", measure); ro?.disconnect(); };
  }, [measure]);

  const goTo = page => {
    const m = metrics();
    if (!m) return;
    const p = Math.max(0, Math.min(state.pages - 1, page));
    m.el.scrollTo({ left: Math.min(p * m.step, m.max), behavior: "smooth" });
  };

  const onKey = e => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(state.page + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(state.page - 1); }
  };

  const mode = until === "sm" ? "slider-mobile" : until === "lg" ? "slider-tablet" : "slider";
  const hideAt = until === "sm" ? "sm:hidden" : until === "lg" ? "lg:hidden" : "";
  const { page, pages } = state;
  const first = page === 0;
  const last = page >= pages - 1;

  const btn = `grid h-10 w-10 shrink-0 place-items-center rounded-full border transition active:scale-90 disabled:cursor-default disabled:opacity-35 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none ${
    dark
      ? "border-white/20 bg-white/10 text-white enabled:hover:bg-white/20"
      : "border-slate-200 bg-white text-slate-700 shadow-sm enabled:hover:border-brand-400 enabled:hover:bg-brand-50 enabled:hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:enabled:hover:bg-slate-800"
  }`;
  const dotOff = dark ? "bg-white/25 hover:bg-white/45" : "bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600";

  return (
    <div className={className}>
      <div
        ref={ref}
        role="region"
        tabIndex={0}
        onKeyDown={onKey}
        aria-roledescription={lang === "bn" ? "স্লাইডার" : "carousel"}
        aria-label={label}
        className={`${mode} slider-fx rounded-2xl focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:outline-none ${slide} ${gridClass}`}
      >
        {children}
      </div>

      {/* control bar — never covers the cards */}
      <div className={`mt-1 flex items-center justify-center gap-3 ${hideAt} ${pages > 1 ? "" : "invisible h-0 overflow-hidden"}`}>
        <button type="button" onClick={() => goTo(page - 1)} disabled={first} aria-label={lang === "bn" ? "আগের" : "Previous"} className={btn}>
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        {pages <= 9 ? (
          <div className="flex items-center gap-1.5">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${lang === "bn" ? "স্লাইড" : "Slide"} ${num(i + 1)}`}
                aria-current={i === page ? "true" : undefined}
                className="grid h-6 place-items-center"
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ${i === page ? "w-6 bg-brand-500" : `w-2 ${dotOff}`}`} />
              </button>
            ))}
          </div>
        ) : (
          <div className="flex min-w-0 items-center gap-2.5">
            <span className={`relative h-1.5 w-28 overflow-hidden rounded-full ${dark ? "bg-white/20" : "bg-slate-200 dark:bg-slate-800"}`}>
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-brand-500 transition-all duration-300"
                style={{ width: `${((page + 1) / pages) * 100}%` }}
              />
            </span>
            <span className={`text-xs font-semibold tabular-nums ${dark ? "text-white/70" : "text-slate-500 dark:text-slate-400"}`}>
              {num(page + 1)} / {num(pages)}
            </span>
          </div>
        )}

        <button type="button" onClick={() => goTo(page + 1)} disabled={last} aria-label={lang === "bn" ? "পরের" : "Next"} className={btn}>
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
