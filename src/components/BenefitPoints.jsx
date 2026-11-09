import POINTS from "../data/points/index.js";
import { useLang } from "../context/LangContext.jsx";
import { Check } from "lucide-react";

/** Full point list for the food page: benefits first, then warnings. */
export default function BenefitPoints({ id }) {
  const { lang } = useLang();
  const points = POINTS[id] || [];
  if (!points.length) return null;
  const sorted = [...points.filter(p => p.kind !== "warn"), ...points.filter(p => p.kind === "warn")];

  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {sorted.map((p, i) => {
        const warn = p.kind === "warn";
        return (
          <li
            key={i}
            className={`flex items-start gap-3 rounded-2xl border p-4 ${
              warn
                ? "border-amber-200 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10"
                : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            }`}
          >
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xl ${
                warn ? "bg-amber-100 dark:bg-amber-500/20" : "bg-brand-50 dark:bg-brand-700/25"
              }`}
              aria-hidden="true"
            >
              {p.icon}
            </span>
            <span className={`pt-1.5 leading-relaxed ${warn ? "text-amber-900 dark:text-amber-100" : "text-slate-700 dark:text-slate-300"}`}>
              {p[lang]}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** Compact version for cards: first few good points with a check mark. */
export function BenefitPreview({ id, limit = 2 }) {
  const { lang } = useLang();
  const points = (POINTS[id] || []).filter(p => p.kind !== "warn").slice(0, limit);
  if (!points.length) return null;
  return (
    <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
      {points.map((p, i) => (
        <li key={i} className="flex gap-2">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700 dark:text-brand-100" strokeWidth={3} aria-hidden="true" />
          <span className="line-clamp-2">{p[lang]}</span>
        </li>
      ))}
    </ul>
  );
}
