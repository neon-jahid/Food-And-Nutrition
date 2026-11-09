/* Prerendered once as /en/404; scripts/postbuild.mjs copies it to the host's 404.html. */
import NotFound from "../../../components/NotFound.jsx";
import { seo } from "../../../seo.js";

export const dynamicParams = false;
export const generateStaticParams = () => [{ lang: "en" }];

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return seo({ lang, path: "/404", title: lang === "bn" ? "পৃষ্ঠাটি পাওয়া যায়নি" : "Page not found", noindex: true }).metadata;
}

export default function Page() {
  return <NotFound kind="404" />;
}
