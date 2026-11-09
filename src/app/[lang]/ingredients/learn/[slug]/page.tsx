import { ArticleView as View } from "@/features/ingredients/Views";
import { allArticles, getArticle } from "@/features/ingredients/lib/repository.server";
import { JsonLd, asLang, ldProps, articleSeo, type SlugParams } from "@/features/ingredients/lib/routes";

export const dynamicParams = false;
export const generateStaticParams = () => allArticles().map(x => ({ slug: x.slug }));

export async function generateMetadata({ params }: SlugParams) {
  const { lang, slug } = await params;
  return articleSeo(getArticle(slug)!, asLang(lang)).metadata;
}

export default async function Page({ params }: SlugParams) {
  const { lang, slug } = await params;
  const record = getArticle(slug)!;
  return (
    <>
      <JsonLd {...ldProps(articleSeo(record, asLang(lang)))} />
      <View article={record} lang={asLang(lang)} />
    </>
  );
}
