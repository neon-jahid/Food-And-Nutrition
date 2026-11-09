import { CategoryView as View } from "@/features/ingredients/Views";
import { allCategories, getCategory } from "@/features/ingredients/lib/repository.server";
import { JsonLd, asLang, ldProps, categorySeo, type SlugParams } from "@/features/ingredients/lib/routes";

export const dynamicParams = false;
export const generateStaticParams = () => allCategories().map(x => ({ slug: x.id }));

export async function generateMetadata({ params }: SlugParams) {
  const { lang, slug } = await params;
  return categorySeo(getCategory(slug)!, asLang(lang)).metadata;
}

export default async function Page({ params }: SlugParams) {
  const { lang, slug } = await params;
  const record = getCategory(slug)!;
  return (
    <>
      <JsonLd {...ldProps(categorySeo(record, asLang(lang)))} />
      <View category={record} lang={asLang(lang)} />
    </>
  );
}
