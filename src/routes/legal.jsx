/* About, contact and policy pages — one module; the page key comes from the URL. */
import LegalPage from "../pages/LegalPage.jsx";
import { LEGAL } from "../data/legal.js";
import { DEFAULT_LANG, LANGS, stripLang } from "../paths.js";
import { breadcrumbLd, seo } from "../seo.js";
import { useLocation } from "../router.jsx";

const keyOf = pathname => stripLang(pathname).replace(/^\//, "").replace(/\/$/, "");

export const meta = ({ params, location }) => {
  const lang = LANGS.includes(params.lang) ? params.lang : DEFAULT_LANG;
  const key = keyOf(location.pathname);
  const page = LEGAL[key];
  const path = `/${key}`;
  return seo({
    lang,
    path,
    title: page?.title[lang],
    description: page?.summary[lang],
    jsonLd: page ? [breadcrumbLd(lang, [[page.title[lang], path]])] : [],
  });
};

export default function Route() {
  return <LegalPage pageKey={keyOf(useLocation().pathname)} />;
}
