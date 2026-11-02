/* /:lang/foods/:slug? — all foods (/foods), a category page (/foods/fruits) or a single food (/foods/mango). */
import FoodsPage from "../pages/FoodsPage.jsx";
import FoodPage from "../pages/FoodPage.jsx";
import NotFound from "../components/NotFound.jsx";
import { CATEGORIES, FOODS } from "../data/foods.js";
import credits from "../data/imageCredits.json";
import { CATEGORY_BY_SLUG, CATEGORY_SLUGS, DEFAULT_LANG, LANGS } from "../paths.js";
import { toLocaleDigits } from "../i18n.js";
import { roundValue } from "../utils.js";
import { breadcrumbLd, seo } from "../seo.js";
import { pageSeo } from "../pageMeta.js";
import { useOutletContext, useParams } from "../router.jsx";

const resolve = slug => {
  const catId = CATEGORY_BY_SLUG[slug];
  if (catId) return { category: CATEGORIES.find(c => c.id === catId) };
  const food = FOODS.find(f => f.id === slug);
  return food ? { food } : {};
};

export const meta = ({ params }) => {
  if (!params.slug) return pageSeo(params.lang, "/foods");
  const lang = LANGS.includes(params.lang) ? params.lang : DEFAULT_LANG;
  const bn = lang === "bn";
  const { category, food } = resolve(params.slug);
  const foodsCrumb = [bn ? "সব খাবার" : "Foods", "/foods"];

  if (category) {
    const path = `/foods/${params.slug}`;
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
  if (food) {
    const path = `/foods/${food.id}`;
    const v = k => toLocaleDigits(roundValue(food.n[k]), lang);
    const cat = CATEGORIES.find(c => c.id === food.cat);
    const c = credits[food.id];
    return seo({
      lang,
      path,
      title: bn ? `${food.bn} (${food.en}) — ক্যালরি ও পুষ্টিগুণ` : `${food.en} (${food.bn}) — calories & nutrition facts`,
      description: bn
        ? `প্রতি ১০০ গ্রাম ${food.bn}: ${v("calories")} ক্যালরি, ${v("protein")} গ্রাম আমিষ, ${v("carbs")} গ্রাম শর্করা, ${v("fat")} গ্রাম চর্বি, ${v("fiber")} গ্রাম আঁশ। উপকারিতা, খাওয়ার নিয়ম ও সতর্কতা।`
        : `${food.en} per 100 g: ${v("calories")} kcal, ${v("protein")} g protein, ${v("carbs")} g carbs, ${v("fat")} g fat, ${v("fiber")} g fibre. Health benefits, how to eat it and cautions.`,
      image: c?.hd || c?.src,
      jsonLd: [breadcrumbLd(lang, [foodsCrumb, [cat[lang], `/foods/${CATEGORY_SLUGS[cat.id]}`], [food[lang], path]])],
    });
  }
  return seo({ lang, path: `/foods/${params.slug}`, title: bn ? "খাবারটি পাওয়া যায়নি" : "Food not found", noindex: true });
};

export default function Route() {
  const { slug } = useParams();
  const ctx = useOutletContext();
  if (!slug) return <FoodsPage {...ctx} />;
  const { category, food } = resolve(slug);
  // no `key` here: changing category must update the same list, not remount it
  if (category) return <FoodsPage {...ctx} fixedCategory={category.id} />;
  if (food) return <FoodPage {...ctx} />;
  return <NotFound kind="404" />;
}
