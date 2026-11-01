import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { I18N, toLocaleDigits } from "../i18n.js";
import { NUTRIENT_UNITS } from "../data/foods.js";
import { roundValue, storage } from "../utils.js";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  // ?lang=bn / ?lang=en in the URL wins, otherwise the saved choice
  const [lang, setLang] = useState(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "bn" || fromUrl === "en") return fromUrl;
    return storage.get("lang", "en") === "bn" ? "bn" : "en";
  });

  useEffect(() => {
    storage.set("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-bn", lang === "bn");
    document.title = `${I18N[lang].siteTitle} — ${lang === "bn" ? "খাবার ও পুষ্টি" : "Food & Nutrition"}`;
  }, [lang]);

  const toggleLang = useCallback(() => setLang(l => (l === "en" ? "bn" : "en")), []);

  const value = useMemo(() => {
    const t = I18N[lang];
    const num = v => toLocaleDigits(v, lang);
    return {
      lang,
      t,
      toggleLang,
      num,
      fmt: v => num(roundValue(v)),
      fill: (str, vars) => str.replace(/\{(\w+)\}/g, (_, k) => num(vars[k])),
      unit: key => t.units[NUTRIENT_UNITS[key]],
      name: item => item[lang],
      altName: item => item[lang === "en" ? "bn" : "en"],
    };
  }, [lang, toggleLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
