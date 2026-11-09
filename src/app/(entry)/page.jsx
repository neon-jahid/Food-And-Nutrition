/* "/": sends visitors to their language. Crawlers and no-JS visitors see links to both. */
import { DEFAULT_LANG, LANGS } from "../../paths.js";
import { SITE } from "../../site.js";
import { seo } from "../../seo.js";

export const metadata = seo({ lang: DEFAULT_LANG, path: "/" }).metadata;

// a language the visitor picked before wins; everyone else starts on the default
const REDIRECT_SCRIPT = `var l;try{l=JSON.parse(localStorage.getItem("nutribase.lang"))}catch(e){}location.replace("/"+(${JSON.stringify(LANGS)}.indexOf(l)>=0?l:"${DEFAULT_LANG}"))`;

export default function Entry() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <script dangerouslySetInnerHTML={{ __html: REDIRECT_SCRIPT }} />
      <div>
        <h1 className="text-3xl font-extrabold">{SITE.name.bn} · {SITE.name.en}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{SITE.tagline.bn} · {SITE.tagline.en}</p>
        <p className="mt-6 flex justify-center gap-6 font-semibold">
          <a href="/bn" className="text-brand-700 underline">বাংলা</a>
          <a href="/en" className="text-brand-700 underline">English</a>
        </p>
      </div>
    </main>
  );
}
