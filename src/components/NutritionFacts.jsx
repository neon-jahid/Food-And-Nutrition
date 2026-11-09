import { useState } from "react";
import { DAILY_VALUES } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import { NUTRIENT_KEYS } from "../utils.js";
import { MacroBar, MacroLegend } from "./MacroBar.jsx";

const PRESETS = [50, 100, 150, 200];

/** Serving-size calculator + full nutrition table with %DV. */
export default function NutritionFacts({ food }) {
  const { t, num, fmt, unit } = useLang();
  const [grams, setGrams] = useState(100);
  const [input, setInput] = useState("100");
  const factor = grams / 100;

  const setServing = g => { setGrams(g); setInput(String(g)); };
  const onInput = v => {
    setInput(v);
    const g = Math.round(Number(v));
    if (g >= 1 && g <= 2000) setGrams(g);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
          <label htmlFor="grams" className="text-sm font-semibold">{t.servingSize}</label>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {PRESETS.map(g => (
              <button
                key={g}
                type="button"
                onClick={() => setServing(g)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  grams === g
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-slate-200 bg-white hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900"
                }`}
              >
                {num(g)} {t.grams}
              </button>
            ))}
            <span className="flex items-center gap-1.5">
              <input
                id="grams"
                type="number"
                min="1"
                max="2000"
                value={input}
                onChange={e => onInput(e.target.value)}
                onBlur={() => setInput(String(grams))}
                className="w-20 rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900"
              />
              <span className="text-sm text-slate-500">{t.grams}</span>
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <strong className="text-4xl font-extrabold text-brand-700 dark:text-brand-100">{fmt(food.n.calories * factor)}</strong>
            <span className="text-slate-500">{t.kcal} / {num(grams)} {t.grams}</span>
          </div>
          <h4 className="mt-5 mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">{t.macroSplit}</h4>
          <MacroBar n={food.n} className="h-3" />
          <MacroLegend n={food.n} />
        </div>
      </div>

      <div className="lg:col-span-3">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-800 text-left text-xs text-slate-500 dark:border-slate-300 dark:text-slate-400">
              <th className="py-2 font-semibold">{t.nutrient}</th>
              <th className="py-2 font-semibold">{t.amount}</th>
              <th className="py-2 text-right font-semibold">{t.dailyValue}</th>
            </tr>
          </thead>
          <tbody>
            {NUTRIENT_KEYS.map(k => {
              const val = food.n[k] * factor;
              const dv = (val / DAILY_VALUES[k]) * 100;
              const sub = k === "fiber" || k === "sugar";
              return (
                <tr key={k} className="border-b border-slate-100 dark:border-slate-800">
                  <th scope="row" className={`py-2.5 text-left ${sub ? "pl-4 font-normal text-slate-500 dark:text-slate-400" : "font-semibold"}`}>
                    {t.nutrients[k]}
                  </th>
                  <td className="py-2.5 whitespace-nowrap">{fmt(val)} {unit(k)}</td>
                  <td className="py-2.5">
                    <div className="flex items-center justify-end gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100 sm:w-28 dark:bg-slate-800">
                        <span
                          className={`block h-full rounded-full ${dv >= 20 ? "bg-brand-500" : "bg-slate-400"}`}
                          style={{ width: `${Math.min(dv, 100)}%` }}
                        />
                      </div>
                      <span className="w-11 text-right font-semibold tabular-nums">{num(Math.round(dv))}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t.dvNote}</p>
      </div>
    </div>
  );
}
