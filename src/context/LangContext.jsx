import { createContext, useCallback, useContext, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { I18N, toLocaleDigits } from "../i18n.js";
import { NUTRIENT_UNITS } from "../data/foods.js";
import { stripLang, withLang } from "../paths.js";
import { roundValue, storage } from "../utils.js";
import { useUrlLang } from "../router.jsx";

const LangContext = createContext(null);

/** Language comes from the URL prefix (/en, /bn); the choice is remembered for the bare "/" entry page. */
export function LangProvider({ children }) {
  const lang = useUrlLang();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    storage.set("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-bn", lang === "bn");
  }, [lang]);

  /** Same page in the other language (keeps query string and hash). */
  const toggleLang = useCallback(() => {
    const other = lang === "en" ? "bn" : "en";
    navigate(withLang(other, stripLang(location.pathname)) + location.search + location.hash, { preventScrollReset: true });
  }, [lang, location, navigate]);

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
