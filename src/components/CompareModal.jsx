import { FOODS } from "../data/foods.js";
import { useLang } from "../context/LangContext.jsx";
import { NUTRIENT_KEYS } from "../utils.js";
import Modal from "./Modal.jsx";
import FoodImage from "./FoodImage.jsx";
import { Scale } from "lucide-react";

export default function CompareModal({ ids, max, onRemove, onClear, onClose }) {
  const { t, fmt, unit, name } = useLang();
  const foods = ids.map(id => FOODS.find(f => f.id === id)).filter(Boolean);

  return (
    <Modal onClose={onClose} closeLabel={t.close} wide>
      <h2 className="flex items-center gap-2 pr-10 text-2xl font-extrabold"><Scale className="h-6 w-6 text-brand-600" aria-hidden="true" /> {t.compareTitle}</h2>

      {!foods.length ? (
        <p className="py-12 text-center text-slate-500">{t.compareEmpty}</p>
      ) : (
        <>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="border-b-2 border-slate-800 dark:border-slate-300">
                  <th className="py-2 text-left text-xs font-semibold text-slate-500">{t.per100g}</th>
                  {foods.map(f => (
                    <th key={f.id} className="px-2 py-2 text-left align-bottom">
                      <FoodImage food={f} fit="contain" className="mb-1.5 h-16 w-20 rounded-xl" />
                      <div className="font-bold">{name(f)}</div>
                      <button type="button" onClick={() => onRemove(f.id)} className="text-xs font-normal text-red-500 hover:underline">
                        {t.removeCompare}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {NUTRIENT_KEYS.map(k => {
                  const maxVal = Math.max(...foods.map(f => f.n[k]));
                  return (
                    <tr key={k} className="border-b border-slate-100 dark:border-slate-800">
                      <th scope="row" className="py-2 pr-2 text-left font-semibold">{t.nutrients[k]}</th>
                      {foods.map(f => {
                        const best = foods.length > 1 && maxVal > 0 && f.n[k] === maxVal;
                        return (
                          <td key={f.id} className={`px-2 py-2 whitespace-nowrap ${best ? "font-bold text-brand-600 dark:text-brand-100" : ""}`}>
                            {fmt(f.n[k])} {unit(k)} {best && "▲"}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {foods.length < max && <p className="mt-3 text-xs text-slate-500">{t.compareEmpty}</p>}
        </>
      )}

      <div className="mt-6 flex justify-end gap-2">
        {foods.length > 0 && (
          <button type="button" onClick={onClear} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:border-red-400 hover:text-red-500 dark:border-slate-700">
            {t.clear}
          </button>
        )}
        <button type="button" onClick={onClose} className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
          {t.close}
        </button>
      </div>
    </Modal>
  );
}
