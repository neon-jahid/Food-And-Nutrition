/* /:lang/* — unknown page inside a language; also forwards old paths such as /en/storage. */
import { Navigate } from "react-router";
import NotFound from "../components/NotFound.jsx";
import { DEFAULT_LANG, LANGS, MOVED_PATHS, withLang } from "../paths.js";
import { seo } from "../seo.js";
import { useLocation, useParams } from "../router.jsx";

export const meta = ({ params }) =>
  seo({
    lang: LANGS.includes(params.lang) ? params.lang : DEFAULT_LANG,
    path: "/404",
    title: params.lang === "bn" ? "পৃষ্ঠাটি পাওয়া যায়নি" : "Page not found",
    noindex: true,
  });

export default function Route() {
  const { lang, "*": rest } = useParams();
  const { search, hash } = useLocation();
  const moved = MOVED_PATHS["/" + (rest || "").replace(/\/$/, "")];
  if (moved) return <Navigate replace to={withLang(lang, moved) + search + hash} />;
  return <NotFound kind="404" />;
}
