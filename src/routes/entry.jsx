/* "/" — sends visitors to their language. Crawlers and no-JS visitors see links to both. */
import { Link, redirect } from "react-router";
import { DEFAULT_LANG, LANGS } from "../paths.js";
import { SITE } from "../site.js";
import { seo } from "../seo.js";
import { storage } from "../utils.js";

export const meta = () => seo({ lang: DEFAULT_LANG, path: "/" });

export async function clientLoader() {
  // a language the visitor picked before wins; everyone else starts in Bangla
  const saved = storage.get("lang");
  const lang = LANGS.includes(saved) ? saved : DEFAULT_LANG;
  throw redirect(`/${lang}`);
}

export function HydrateFallback() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <h1 className="text-3xl font-extrabold">{SITE.name.bn} · {SITE.name.en}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{SITE.tagline.bn} · {SITE.tagline.en}</p>
        <p className="mt-6 flex justify-center gap-6 font-semibold">
          <Link to="/bn" className="text-brand-700 underline">বাংলা</Link>
          <Link to="/en" className="text-brand-700 underline">English</Link>
        </p>
      </div>
    </main>
  );
}

export default function Entry() {
  return <HydrateFallback />;
}
