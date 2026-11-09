/* About, contact and policy pages: one route, the page key comes from the URL. */
import LegalPage from "../../../views/LegalPage.jsx";
import { LEGAL } from "../../../data/legal.js";
import { breadcrumbLd, seo } from "../../../seo.js";
import { JsonLd } from "../../../routeKit.jsx";

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(LEGAL).map(legal => ({ legal }));

function legalSeo(lang, key) {
  const page = LEGAL[key];
  const path = `/${key}`;
  return seo({
    lang,
    path,
    title: page.title[lang],
    description: page.summary[lang],
    jsonLd: [breadcrumbLd(lang, [[page.title[lang], path]])],
  });
}

export async function generateMetadata({ params }) {
  const { lang, legal } = await params;
  return legalSeo(lang, legal).metadata;
}

export default async function Page({ params }) {
  const { lang, legal } = await params;
  return (
    <>
      <JsonLd data={legalSeo(lang, legal).jsonLd} />
      <LegalPage pageKey={legal} />
    </>
  );
}
