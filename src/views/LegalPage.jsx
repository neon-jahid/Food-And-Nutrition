"use client";

import { CalendarDays, FileText, Info, Mail } from "lucide-react";
import { LEGAL } from "../data/legal.js";
import { CONTACT_EMAIL } from "../site.js";
import { useLang } from "../context/LangContext.jsx";
import { PageHero } from "../components/PageKit.jsx";
import NotFound from "../components/NotFound.jsx";
import { formatDate } from "./BlogPage.jsx";

function Block({ b }) {
  if (b.h) return <h2 className="mt-10 mb-3 text-xl font-extrabold text-slate-900 dark:text-white">{b.h}</h2>;
  if (b.ul)
    return (
      <ul className="my-4 space-y-2">
        {b.ul.map(x => <li key={x} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{x}</li>)}
      </ul>
    );
  if (b.tip)
    return (
      <aside className="my-6 flex gap-3 rounded-2xl border-l-4 border-amber-400 bg-amber-50/80 p-4 dark:bg-amber-500/10">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden="true" />
        <p className="font-medium text-slate-800 dark:text-slate-100">{b.tip}</p>
      </aside>
    );
  return <p className="my-4">{b.p}</p>;
}

export default function LegalPage({ pageKey }) {
  const { lang } = useLang();
  const page = LEGAL[pageKey];
  if (!page) return <NotFound kind="404" />;

  return (
    <>
      <PageHero icon={FileText} title={page.title[lang]} sub={page.summary[lang]}>
        <p className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {lang === "bn" ? "সর্বশেষ হালনাগাদ" : "Last updated"}: {formatDate(page.updated, lang)}
        </p>
      </PageHero>
      <article className="mx-auto max-w-3xl px-4 py-8 text-[1.0625rem] leading-relaxed text-slate-700 dark:text-slate-300">
        {pageKey === "contact" && CONTACT_EMAIL && (
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="card mb-6 flex items-center gap-3 p-5 font-semibold text-brand-700 transition hover:border-brand-400 dark:text-brand-300"
          >
            <Mail className="h-5 w-5" aria-hidden="true" /> {CONTACT_EMAIL}
          </a>
        )}
        {page.body[lang].map((b, i) => <Block key={i} b={b} />)}
      </article>
    </>
  );
}
