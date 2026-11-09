/* Metadata and structured data only; the visible page comes from foods/layout.jsx. */
import { CATEGORY_SLUGS, foodSlug } from "../../../../paths.js";
import { CATEGORIES, FOODS } from "../../../../data/foods.js";
import { foodSeo } from "../../../../foodRoute.js";
import { JsonLd } from "../../../../routeKit.jsx";

export const dynamicParams = false;
export const generateStaticParams = () => [
  { slug: [] },
  ...CATEGORIES.map(c => ({ slug: [CATEGORY_SLUGS[c.id]] })),
  ...FOODS.map(f => ({ slug: [foodSlug(f)] })),
];

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  return foodSeo(lang, slug?.[0]).metadata;
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  return <JsonLd data={foodSeo(lang, slug?.[0]).jsonLd} />;
}
