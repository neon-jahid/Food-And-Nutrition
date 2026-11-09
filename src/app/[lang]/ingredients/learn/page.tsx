import { LearnView as View } from "@/features/ingredients/Views";
import { JsonLd, asLang, ldProps, staticSeo, type LangParams } from "@/features/ingredients/lib/routes";

const PATH = "/ingredients/learn";

export async function generateMetadata({ params }: LangParams) {
  return staticSeo((await params).lang, PATH).metadata;
}

export default async function Page({ params }: LangParams) {
  const { lang } = await params;
  return (
    <>
      <JsonLd {...ldProps(staticSeo(lang, PATH))} />
      <View lang={asLang(lang)} />
    </>
  );
}
