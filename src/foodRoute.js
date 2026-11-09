/* Shared by the food page's metadata (server) and FoodsRoute (client). */
import { CATEGORIES, FOODS } from "./data/foods.js";
import credits from "./data/imageCredits.json";
import { CATEGORY_BY_SLUG, CATEGORY_SLUGS, DEFAULT_LANG, LANGS } from "./paths.js";
import { toLocaleDigits } from "./i18n.js";
import { roundValue } from "./utils.js";
import { breadcrumbLd, seo, webPageLd } from "./seo.js";
import { pageSeo } from "./pageMeta.js";

export function resolveFoodSlug(slug) {
  const catId = CATEGORY_BY_SLUG[slug];
  if (catId) return { category: CATEGORIES.find(c => c.id === catId) };
  const food = FOODS.find(f => f.id === slug);
  return food ? { food } : {};
}

/** SEO for /foods, /foods/<category> and /foods/<food>. */
export function foodSeo(langParam, slug) {
  if (!slug) return pageSeo(langParam, "/foods");
  const lang = LANGS.includes(langParam) ? langParam : DEFAULT_LANG;
  const bn = lang === "bn";
  const { category, food } = resolveFoodSlug(slug);
  const foodsCrumb = [bn ? "সব খাবার" : "Foods", "/foods"];

  if (category) {
    const path = `/foods/${slug}`;
    const count = FOODS.filter(f => f.cat === category.id).length;
    const n = v => toLocaleDigits(v, lang);
    return seo({
      lang,
      path,
      title: bn ? `${category.bn} — পুষ্টিগুণ ও ক্যালরি` : `${category.en} — nutrition facts & calories`,
      description: bn
        ? `${n(count)}টি ${category.bn} জাতীয় খাবারের প্রতি ১০০ গ্রামে পুষ্টিগুণ। ${category.descBn}`
        : `Nutrition facts per 100 g for ${count} ${category.en.toLowerCase()}. ${category.descEn}`,
      jsonLd: [breadcrumbLd(lang, [foodsCrumb, [category[lang], path]])],
    });
  }

  const path = `/foods/${food.id}`;
  const v = k => toLocaleDigits(roundValue(food.n[k]), lang);
  const cat = CATEGORIES.find(c => c.id === food.cat);
  const c = credits[food.id];
  const image = c?.hd || c?.src;
  const title = bn ? `${food.bn} (${food.en}) — ক্যালরি ও পুষ্টিগুণ` : `${food.en} (${food.bn}) — calories & nutrition facts`;
  const description = bn
    ? `প্রতি ১০০ গ্রাম ${food.bn}: ${v("calories")} ক্যালরি, ${v("protein")} গ্রাম আমিষ, ${v("carbs")} গ্রাম শর্করা, ${v("fat")} গ্রাম চর্বি, ${v("fiber")} গ্রাম আঁশ। উপকারিতা, খাওয়ার নিয়ম ও সতর্কতা।`
    : `${food.en} per 100 g: ${v("calories")} kcal, ${v("protein")} g protein, ${v("carbs")} g carbs, ${v("fat")} g fat, ${v("fiber")} g fibre. Health benefits, how to eat it and cautions.`;
  return seo({
    lang,
    path,
    title,
    description,
    image,
    jsonLd: [
      breadcrumbLd(lang, [foodsCrumb, [cat[lang], `/foods/${CATEGORY_SLUGS[cat.id]}`], [food[lang], path]]),
      webPageLd(lang, path, { name: title, description, image }),
    ],
  });
}
