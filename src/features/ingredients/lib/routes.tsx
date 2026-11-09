/* Shared code for the route files under src/app/[lang]/ingredients. */
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { JsonLd as SiteJsonLd } from "../../../routeKit.jsx";
import { pageSeo } from "../../../pageMeta.js";
import { breadcrumbLd, seo, webPageLd } from "../../../seo.js";
import type { Article, Category, Ingredient, Lang } from "../types";
import { STRINGS } from "../strings";

export type LangParams = { params: Promise<{ lang: string }> };
export type SlugParams = { params: Promise<{ lang: string; slug: string }> };
export const asLang = (l: string): Lang => (l === "bn" ? "bn" : "en");

interface Seo { metadata: Metadata; jsonLd: object[] }

export const JsonLd = SiteJsonLd as unknown as ComponentType<{ data: object[] }>;
export const ldProps = (s: Seo) => ({ data: s.jsonLd });

export const staticSeo = (lang: string, path: string) => pageSeo(lang, path) as unknown as Seo;

const seoFn = seo as unknown as (a: Record<string, unknown>) => Seo;
const crumbs = breadcrumbLd as unknown as (l: Lang, t: [string, string][]) => object;
const webPage = webPageLd as unknown as (l: Lang, p: string, o: Record<string, unknown>) => object;

function build(lang: Lang, path: string, title: string, description: string, trail: [string, string][], type = "WebPage"): Seo {
  return seoFn({ lang, path, title, description, jsonLd: [crumbs(lang, trail), webPage(lang, path, { type, name: title, description })] });
}

export function ingredientSeo(item: Ingredient, lang: Lang): Seo {
  const s = STRINGS[lang];
  const code = item.eNumber ? ` (${item.eNumber})` : "";
  const title = lang === "bn" ? `${item.name.bn}${code} — ব্যবহার, নিরাপত্তা ও নিয়ম` : `${item.name.en}${code} — uses, safety and regulation`;
  const path = `/ingredients/${item.id}`;
  return build(lang, path, title, item.summary[lang], [[s.home, "/ingredients"], [item.name[lang], path]]);
}

export function categorySeo(c: Category, lang: Lang): Seo {
  const s = STRINGS[lang];
  const path = `/ingredients/category/${c.id}`;
  const title = lang === "bn" ? `${c.name.bn} — তালিকা, ব্যবহার ও নিরাপত্তা` : `${c.name.en} in food — list, uses and safety`;
  return build(lang, path, title, c.description[lang], [[s.home, "/ingredients"], [c.name[lang], path]]);
}

export function articleSeo(a: Article, lang: Lang): Seo {
  const s = STRINGS[lang];
  const path = `/ingredients/learn/${a.slug}`;
  return build(lang, path, a.title[lang], a.dek[lang], [[s.home, "/ingredients"], [s.nav.learn, "/ingredients/learn"], [a.title[lang], path]], "Article");
}
