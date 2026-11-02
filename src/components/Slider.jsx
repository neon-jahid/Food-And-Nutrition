import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LangContext.jsx";

/**
 * Horizontal slider with snap scrolling, swipe and prev/next arrows.
 *
 * - `slide`: Tailwind classes setting --slide (each slide's width) per breakpoint,
 *   e.g. "[--slide:78%] sm:[--slide:45%] lg:[--slide:calc(25%-0.75rem)]".
 * - `until`: "sm" → a slider only below 640px, "lg" → only below 1024px. Above that the
 *   children are laid out by `gridClass` (a normal grid) and the arrows are hidden.
 * Arrows are always visible on touch screens (not only on hover) so visitors can see
 * the row slides; an arrow hides itself at the matching end.
 */
export default function Slider({ children, label, slide = "", until, gridClass = "", className = "" }) {
  const { lang } = useLang();
  const ref = useRef(null);
  // before measuring (prerendered HTML) assume there is more to the right
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdge({ start: el.scrollLeft <= 4, end: max <= 4 || el.scrollLeft >= max - 4 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(el);
    return () => { el.removeEventListener("scroll", measure); ro?.disconnect(); };
  }, [measure]);

  const go = dir => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild;
    const step = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    // jump by whole slides, at least one, about a screen's worth
    const n = Math.max(1, Math.floor((el.clientWidth + 16) / step));
    el.scrollBy({ left: dir * n * step, behavior: "smooth" });
  };

  const hideAt = until === "sm" ? "sm:hidden" : until === "lg" ? "lg:hidden" : "";
  const mode = until === "sm" ? "slider-mobile" : until === "lg" ? "slider-tablet" : "slider";
  const arrow =
    "absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:scale-105 hover:border-brand-400 hover:text-brand-700 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-200";

  return (
    <div className={`relative ${className}`}>
      <div
        ref={ref}
        role="region"
        aria-roledescription={lang === "bn" ? "স্লাইডার" : "carousel"}
        aria-label={label}
        className={`${mode} ${slide} ${gridClass}`}
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label={lang === "bn" ? "আগেরগুলো দেখুন" : "Previous"}
        className={`${arrow} -left-1 sm:-left-4 ${hideAt} ${edge.start ? "pointer-events-none opacity-0" : "opacity-100"}`}
        tabIndex={edge.start ? -1 : 0}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label={lang === "bn" ? "পরেরগুলো দেখুন" : "Next"}
        className={`${arrow} -right-1 sm:-right-4 ${hideAt} ${edge.end ? "pointer-events-none opacity-0" : "opacity-100"}`}
        tabIndex={edge.end ? -1 : 0}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
