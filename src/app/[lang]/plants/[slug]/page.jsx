/* One medicinal plant. */
import PlantPage from "../../../../views/PlantPage.jsx";
import { PLANTS } from "../../../../data/plants.js";
import { plantPhoto } from "../../../../plantPhoto.js";
import { breadcrumbLd, seo, webPageLd } from "../../../../seo.js";
import { JsonLd } from "../../../../routeKit.jsx";

export const dynamicParams = false;
export const generateStaticParams = () => PLANTS.map(p => ({ slug: p.id }));

function plantSeo(lang, slug) {
  const bn = lang === "bn";
  const p = PLANTS.find(x => x.id === slug);
  const path = `/plants/${slug}`;
  const photo = plantPhoto(p);
  const image = photo?.hd || photo?.src;
  const title = bn ? `${p.name.bn} (${p.sci}) — উপকারিতা, ব্যবহার ও সতর্কতা` : `${p.name.en} (${p.name.bn}) — uses, benefits & cautions`;
  const description = `${p.summary[lang]} ${bn ? "প্রচলিত ব্যবহার, ব্যবহারবিধি ও সতর্কতা।" : "Traditional uses, how to use it and safety cautions."}`;
  return seo({
    lang,
    path,
    title,
    description,
    image,
    jsonLd: [
      breadcrumbLd(lang, [[bn ? "জানুন" : "Learn", "/learn"], [bn ? "ঔষধি গাছ" : "Medicinal plants", "/plants"], [p.name[lang], path]]),
      webPageLd(lang, path, { name: title, description, image }),
    ],
  });
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  return plantSeo(lang, slug).metadata;
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  return (
    <>
      <JsonLd data={plantSeo(lang, slug).jsonLd} />
      <PlantPage slug={slug} />
    </>
  );
}
