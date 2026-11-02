import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { storage } from "../utils.js";

/** Accent palettes — the CSS for each lives in index.css (html[data-accent=…]). */
export const ACCENTS = [
  { id: "fresh", swatch: ["#10b981", "#14b8a6"], en: "Fresh", bn: "সবুজ" },
  { id: "ocean", swatch: ["#3b82f6", "#06b6d4"], en: "Ocean", bn: "সমুদ্র" },
  { id: "grape", swatch: ["#8b5cf6", "#ec4899"], en: "Grape", bn: "বেগুনি" },
  { id: "sunset", swatch: ["#f97316", "#f59e0b"], en: "Sunset", bn: "সূর্যাস্ত" },
  { id: "rose", swatch: ["#f43f5e", "#a855f7"], en: "Rose", bn: "গোলাপি" },
];
export const MODES = ["light", "dark", "system"];

const ThemeContext = createContext(null);
const media = () => (typeof window === "undefined" ? null : window.matchMedia?.("(prefers-color-scheme: dark)"));

/** Briefly enable colour transitions so switching feels smooth (not on first paint). */
function animateSwitch() {
  const root = document.documentElement;
  root.classList.add("theme-anim");
  window.clearTimeout(animateSwitch.t);
  animateSwitch.t = window.setTimeout(() => root.classList.remove("theme-anim"), 300);
}

export function ThemeProvider({ children }) {
  // Prerender-safe: start from defaults, read the saved choice after mount.
  // The inline script in root.jsx has already applied the right classes before paint,
  // so nothing touches the DOM until the saved values are loaded (no flash).
  // light unless the visitor picks dark (or "system") in the theme menu
  const [mode, setModeState] = useState("light");
  const [accent, setAccentState] = useState("fresh");
  const [systemDark, setSystemDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const m = storage.get("theme", "light");
    const a = storage.get("accent", "fresh");
    setModeState(MODES.includes(m) ? m : "light");
    setAccentState(ACCENTS.some(x => x.id === a) ? a : "fresh");
    const mq = media();
    setSystemDark(!!mq?.matches);
    setReady(true);
    if (!mq) return;
    const on = e => setSystemDark(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const dark = mode === "dark" || (mode === "system" && systemDark);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", dark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#020617" : "#ffffff");
  }, [dark, ready]);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    if (accent === "fresh") delete root.dataset.accent;
    else root.dataset.accent = accent;
  }, [accent, ready]);

  const setMode = useCallback(m => { animateSwitch(); storage.set("theme", m); setModeState(m); }, []);
  const setAccent = useCallback(a => { animateSwitch(); storage.set("accent", a); setAccentState(a); }, []);

  const value = useMemo(() => ({ mode, dark, accent, setMode, setAccent, ready }), [mode, dark, accent, setMode, setAccent, ready]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
