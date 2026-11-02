/* /:lang — validates the language segment. Anything else (e.g. /xyz) is a 404. */
import { Outlet, useOutletContext, useParams } from "../router.jsx";
import { LANGS } from "../paths.js";
import NotFound from "../components/NotFound.jsx";

export default function LangLayout() {
  const { lang } = useParams();
  const ctx = useOutletContext();
  if (!LANGS.includes(lang)) return <NotFound kind="404" />;
  return <Outlet context={ctx} />;
}
