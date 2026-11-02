/* /:lang/plants/:slug — landing page for one medicinal plant. */
import PlantPage, { plantPhoto } from "../pages/PlantPage.jsx";
import NotFound from "../components/NotFound.jsx";
import { PLANTS } from "../data/plants.js";
import { DEFAULT_LANG, LANGS } from "../paths.js";
import { breadcrumbLd, seo } from "../seo.js";
import { useParams } from "../router.jsx";

const find = slug => PLANTS.find(p => p.id === slug);

export const meta = ({ params }) => {
  const lang = LANGS.includes(params.lang) ? params.lang : DEFAULT_LANG;
  const bn = lang === "bn";
  const p = find(params.slug);
  const path = `/plants/${params.slug}`;
  if (!p) return seo({ lang, path, title: bn ? "গাছটি পাওয়া যায়নি" : "Plant not found", noindex: true });
  const photo = plantPhoto(p);
  return seo({
    lang,
    path,
    title: bn ? `${p.name.bn} (${p.sci}) — উপকারিতা, ব্যবহার ও সতর্কতা` : `${p.name.en} (${p.name.bn}) — uses, benefits & cautions`,
    description: `${p.summary[lang]} ${bn ? "প্রচলিত ব্যবহার, ব্যবহারবিধি ও সতর্কতা।" : "Traditional uses, how to use it and safety cautions."}`,
    image: photo?.hd || photo?.src,
    jsonLd: [breadcrumbLd(lang, [[bn ? "জানুন" : "Learn", "/learn"], [bn ? "ঔষধি গাছ" : "Medicinal plants", "/plants"], [p.name[lang], path]])],
  });
};

export default function Route() {
  const p = find(useParams().slug);
  return p ? <PlantPage key={p.id} plant={p} /> : <NotFound kind="404" />;
}
