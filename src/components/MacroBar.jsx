import { macroEnergy } from "../utils.js";
import { useLang } from "../context/LangContext.jsx";

export function MacroBar({ n, className = "" }) {
  const { lang, num } = useLang();
  const m = macroEnergy(n);
  const pct = v => `${num(Math.round(v))}%`;
  return (
    <div
      role="img"
      aria-label={lang === "bn" ? `প্রোটিন ${pct(m.p)}, শর্করা ${pct(m.c)}, চর্বি ${pct(m.f)}` : `Protein ${pct(m.p)}, Carbs ${pct(m.c)}, Fat ${pct(m.f)}`}
      className={`flex h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 ${className}`}
    >
      <span className="bg-protein" style={{ width: `${m.p}%` }} />
      <span className="bg-carbs" style={{ width: `${m.c}%` }} />
      <span className="bg-fat" style={{ width: `${m.f}%` }} />
    </div>
  );
}

export function MacroLegend({ n }) {
  const { t, num } = useLang();
  const m = macroEnergy(n);
  const items = [
    ["bg-protein", t.short.protein, m.p],
    ["bg-carbs", t.short.carbs, m.c],
    ["bg-fat", t.short.fat, m.f],
  ];
  return (
    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
      {items.map(([color, label, pct]) => (
        <span key={color} className="flex items-center gap-1.5">
          <i className={`h-2.5 w-2.5 rounded-full ${color}`} />
          {label} {num(Math.round(pct))}%
        </span>
      ))}
    </div>
  );
}
