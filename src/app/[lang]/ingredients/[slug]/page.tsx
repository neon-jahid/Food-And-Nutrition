import { IngredientView as View } from "@/features/ingredients/Views";
import { allIngredients, getIngredient } from "@/features/ingredients/lib/repository.server";
import { JsonLd, asLang, ldProps, ingredientSeo, type SlugParams } from "@/features/ingredients/lib/routes";

export const dynamicParams = false;
export const generateStaticParams = () => allIngredients().map(x => ({ slug: x.id }));

export async function generateMetadata({ params }: SlugParams) {
  const { lang, slug } = await params;
  return ingredientSeo(getIngredient(slug)!, asLang(lang)).metadata;
}

export default async function Page({ params }: SlugParams) {
  const { lang, slug } = await params;
  const record = getIngredient(slug)!;
  return (
    <>
      <JsonLd {...ldProps(ingredientSeo(record, asLang(lang)))} />
      <View item={record} lang={asLang(lang)} />
    </>
  );
}
