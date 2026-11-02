import { useRef, useState } from "react";
import { Check, Monitor, Moon, Palette, Sun } from "lucide-react";
import { ACCENTS, useTheme } from "../context/ThemeContext.jsx";
import { useLang } from "../context/LangContext.jsx";
import { useDismiss } from "../hooks.js";

const T = {
  en: { appearance: "Appearance", mode: "Mode", accent: "Accent colour", light: "Light", dark: "Dark", system: "Auto" },
  bn: { appearance: "থিম", mode: "মোড", accent: "রঙ", light: "লাইট", dark: "ডার্ক", system: "অটো" },
};
const MODE_ICONS = { light: Sun, dark: Moon, system: Monitor };

/** Mode switch + accent swatches. Used inside the header popover and the mobile drawer. */
export function ThemePanel() {
  const { lang } = useLang();
  const { mode, setMode, accent, setAccent } = useTheme();
  const s = T[lang];
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">{s.mode}</p>
        <div role="radiogroup" aria-label={s.mode} className="grid grid-cols-3 gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800">
          {Object.entries(MODE_ICONS).map(([m, Icon]) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={mode === m}
              onClick={() => setMode(m)}
              className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-xl text-sm font-semibold transition ${
                mode === m
                  ? "bg-white text-brand-700 shadow-sm dark:bg-slate-950 dark:text-brand-300"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" /> {s[m]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">{s.accent}</p>
        <div role="radiogroup" aria-label={s.accent} className="flex flex-wrap gap-2">
          {ACCENTS.map(a => (
            <button
              key={a.id}
              type="button"
              role="radio"
              aria-checked={accent === a.id}
              title={a[lang]}
              onClick={() => setAccent(a.id)}
              className="group flex flex-col items-center gap-1"
            >
              <span
                className={`grid h-10 w-10 place-items-center rounded-full text-white shadow-sm ring-2 ring-offset-2 ring-offset-white transition dark:ring-offset-slate-900 ${
                  accent === a.id ? "ring-slate-900 dark:ring-white" : "ring-transparent group-hover:ring-slate-300 dark:group-hover:ring-slate-600"
                }`}
                style={{ background: `linear-gradient(135deg, ${a.swatch[0]}, ${a.swatch[1]})` }}
              >
                {accent === a.id && <Check className="h-4 w-4" aria-hidden="true" />}
              </span>
              <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">{a[lang]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Header button that opens the appearance popover. */
export default function ThemeMenu({ className = "" }) {
  const { lang } = useLang();
  const { dark } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useDismiss(ref, open, () => setOpen(false));

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={T[lang].appearance}
        title={T[lang].appearance}
        className="icon-btn"
      >
        {dark ? <Moon className="h-[18px] w-[18px]" aria-hidden="true" /> : <Palette className="h-[18px] w-[18px]" aria-hidden="true" />}
      </button>
      {open && (
        <div role="dialog" aria-label={T[lang].appearance} className="card absolute top-full right-0 z-50 mt-2 w-72 animate-pop p-4 shadow-xl">
          <p className="mb-3 font-bold text-slate-900 dark:text-white">{T[lang].appearance}</p>
          <ThemePanel />
        </div>
      )}
    </div>
  );
}
