/* Titles + descriptions for static pages (search results, link previews). Keyed by unprefixed path. */
import { breadcrumbLd, organizationLd, seo, webPageLd, websiteLd } from "./seo.js";
import { LANGS, DEFAULT_LANG } from "./paths.js";
import { FOODS } from "./data/foods.js";

// food count is computed so the text stays right when foods are added
const N = FOODS.length;
const NB = String(N).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);


export const PAGE_META = {
  "/": {
    en: ["", `Explore calories, protein, vitamins and minerals of ${N} everyday and Bangladeshi foods, compare foods and make smarter eating choices — in English and Bangla.`],
    bn: ["", `প্রতিদিনের ও দেশি ${NB}টি খাবারের ক্যালরি, আমিষ, ভিটামিন ও খনিজের তথ্য জানুন, খাবার তুলনা করুন এবং বুঝে-শুনে খাবার বেছে নিন — বাংলা ও ইংরেজিতে।`],
  },
  "/foods": {
    en: ["All foods — nutrition facts per 100 g", `Search and filter ${N} foods by category, nutrient or health goal. Calories, protein, carbs, fat, fibre, vitamin C, calcium, iron and potassium per 100 g.`],
    bn: ["সব খাবার — প্রতি ১০০ গ্রামে পুষ্টিগুণ", `ক্যাটাগরি, পুষ্টি উপাদান বা স্বাস্থ্য লক্ষ্য অনুযায়ী ${NB}টি খাবার খুঁজুন। প্রতি ১০০ গ্রামে ক্যালরি, আমিষ, শর্করা, চর্বি, আঁশ, ভিটামিন সি, ক্যালসিয়াম, আয়রন ও পটাশিয়াম।`],
  },
  "/tools": {
    en: ["Nutrition tools — plate calculator, BMI & calorie needs", "Free nutrition calculators: add up the nutrients on your plate and estimate BMI and daily calorie needs (Asian BMI cut-offs, Mifflin-St Jeor)."],
    bn: ["পুষ্টি টুলস — প্লেট ক্যালকুলেটর, BMI ও ক্যালরির চাহিদা", "বিনামূল্যে পুষ্টি ক্যালকুলেটর: থালার মোট পুষ্টি হিসাব করুন এবং BMI ও দৈনিক ক্যালরির চাহিদা জানুন।"],
  },
  "/learn": {
    en: ["Learn nutrition — guides for everyday health", "Guides on vitamins, minerals, deficiencies, medicinal plants, food storage, meal times, men's and women's health, pregnancy, child nutrition and food myths."],
    bn: ["পুষ্টি সম্পর্কে জানুন — প্রতিদিনের স্বাস্থ্য গাইড", "ভিটামিন, খনিজ, অভাবজনিত রোগ, ঔষধি গাছ, খাবার সংরক্ষণ, খাবারের সময়, নারী ও পুরুষের স্বাস্থ্য, গর্ভাবস্থা, শিশুর পুষ্টি এবং খাবার নিয়ে ভুল ধারণার গাইড।"],
  },
  "/plants": {
    en: ["Medicinal plants of Bangladesh — uses and cautions", "Tulsi, neem, thankuni, kalojira, ashwagandha and more: traditional uses, how to use them and safety cautions."],
    bn: ["বাংলাদেশের ঔষধি গাছ — ব্যবহার ও সতর্কতা", "তুলসী, নিম, থানকুনি, কালোজিরা, অশ্বগন্ধা ও আরও: প্রচলিত ব্যবহার, ব্যবহারবিধি ও সতর্কতা।"],
  },
  "/food-guide": {
    en: ["Healthy eating guide — the balanced plate", "How to fill a balanced Bangladeshi plate, daily healthy-eating habits and common myths checked."],
    bn: ["স্বাস্থ্যকর খাবারের গাইড — সুষম প্লেট", "সুষম দেশি থালা কীভাবে সাজাবেন, প্রতিদিনের স্বাস্থ্যকর অভ্যাস এবং প্রচলিত ভুল ধারণা যাচাই।"],
  },
  "/food-guide/food-storage": {
    en: ["Food storage guide — keep food fresh and safe", "Where and how long to store fruit, vegetables, fish, meat, dairy, rice and leftovers; fridge zones, spoilage signs and food-safety rules."],
    bn: ["খাবার সংরক্ষণ গাইড — খাবার তাজা ও নিরাপদ রাখুন", "ফল, সবজি, মাছ, মাংস, দুধ, ভাত ও বাসি খাবার কোথায় ও কতদিন রাখবেন; ফ্রিজের তাক, নষ্ট হওয়ার লক্ষণ ও খাদ্য নিরাপত্তার নিয়ম।"],
  },
  "/food-guide/meal-times": {
    en: ["What to eat, and when — breakfast, lunch, snack, dinner", "A practical guide to a good breakfast, lunch, afternoon snack and dinner with everyday Bangladeshi food."],
    bn: ["কখন কী খাবেন — সকাল, দুপুর, বিকেল ও রাত", "প্রতিদিনের দেশি খাবারে ভালো সকালের নাস্তা, দুপুরের খাবার, বিকেলের নাস্তা ও রাতের খাবারের সহজ গাইড।"],
  },
  "/nutrition/vitamins": {
    en: ["Vitamin guide — what each vitamin does", "Vitamins A, B1–B12, C, D, E and K: what they do, daily needs, the best foods and signs of deficiency."],
    bn: ["ভিটামিন গাইড — কোন ভিটামিনের কী কাজ", "ভিটামিন এ, বি১–বি১২, সি, ডি, ই ও কে: কাজ, দৈনিক চাহিদা, সেরা খাবার ও ঘাটতির লক্ষণ।"],
  },
  "/nutrition/minerals": {
    en: ["Mineral guide — iron, calcium, zinc, iodine and more", "Essential minerals explained: what they do, how much you need and which everyday foods provide them."],
    bn: ["খনিজ গাইড — আয়রন, ক্যালসিয়াম, জিংক, আয়োডিন ও আরও", "প্রয়োজনীয় খনিজের কাজ, দৈনিক চাহিদা এবং কোন প্রতিদিনের খাবারে পাওয়া যায়।"],
  },
  "/nutrition/deficiency": {
    en: ["Nutrient deficiency guide — signs, risks and prevention", "Anaemia, night blindness, goitre, rickets, B12 and other deficiencies common in Bangladesh: symptoms, who is at risk and foods that help."],
    bn: ["পুষ্টির ঘাটতি গাইড — লক্ষণ, ঝুঁকি ও প্রতিরোধ", "রক্তস্বল্পতা, রাতকানা, গলগণ্ড, রিকেটস, বি১২ ও বাংলাদেশে প্রচলিত অন্যান্য ঘাটতি: লক্ষণ, ঝুঁকি ও উপকারী খাবার।"],
  },
  "/food-myths": {
    en: ["Food myths vs facts", "Common food beliefs in Bangladesh checked against the evidence — rice at night, eggs and cholesterol, fruit and diabetes, and more."],
    bn: ["খাবার নিয়ে ভুল ধারণা বনাম সত্য", "বাংলাদেশে প্রচলিত খাদ্য-বিশ্বাস প্রমাণের ভিত্তিতে যাচাই — রাতে ভাত, ডিম ও কোলেস্টেরল, ফল ও ডায়াবেটিস এবং আরও।"],
  },
  "/mens-health": {
    en: ["Men's health and nutrition", "Food for heart health, strength, energy, sexual health, fertility and prostate health — what to eat, what to limit and when to see a doctor."],
    bn: ["পুরুষের স্বাস্থ্য ও পুষ্টি", "হৃদযন্ত্র, শক্তি, কর্মক্ষমতা, যৌন স্বাস্থ্য, প্রজনন ও প্রোস্টেটের জন্য খাবার — কী খাবেন, কী কমাবেন, কখন চিকিৎসকের কাছে যাবেন।"],
  },
  "/womens-health": {
    en: ["Women's health and nutrition — periods, pregnancy, PCOS", "What to eat during periods, pregnancy and breastfeeding, for anaemia, PCOS, menopause and bone health."],
    bn: ["নারীর স্বাস্থ্য ও পুষ্টি — মাসিক, গর্ভাবস্থা, পিসিওএস", "মাসিক, গর্ভাবস্থা ও স্তন্যদানের সময়, রক্তস্বল্পতা, পিসিওএস, মেনোপজ ও হাড়ের যত্নে কী খাবেন।"],
  },
  "/pregnancy": {
    en: ["Pregnancy food guide — what to eat and avoid", "What to eat in each trimester: daily needs, folate, iron, calcium and iodine foods, a sample day, help for nausea and constipation, foods to avoid, myths and danger signs."],
    bn: ["গর্ভাবস্থার খাবার গাইড — কী খাবেন, কী এড়াবেন", "প্রতি তিন মাসে কী খাবেন: দৈনিক চাহিদা, ফোলেট, আয়রন, ক্যালসিয়াম ও আয়োডিনের খাবার, একদিনের নমুনা, বমি ভাব ও কোষ্ঠকাঠিন্যে করণীয়, যা এড়াবেন, ভুল ধারণা ও বিপদ চিহ্ন।"],
  },
  "/child-nutrition": {
    en: ["Child nutrition guide — feeding babies and young children", "What to feed children from birth to 5 years: breastfeeding, first foods, amounts by age, food groups, daily needs, a sample day, foods to avoid, myths and danger signs."],
    bn: ["শিশুর পুষ্টি গাইড — ছোট শিশুকে কী খাওয়াবেন", "জন্ম থেকে ৫ বছর পর্যন্ত শিশুকে কী খাওয়াবেন: বুকের দুধ, প্রথম খাবার, বয়স অনুযায়ী পরিমাণ, খাদ্যগোষ্ঠী, দৈনিক চাহিদা, একদিনের নমুনা, যা এড়াবেন, ভুল ধারণা ও বিপদ চিহ্ন।"],
  },
  "/coffee": {
    en: ["Coffee guide — Black Coffee, origin, benefits and how to drink it", "The story of coffee from Ethiopia to Bangladesh, what's in a cup of black coffee, a caffeine calculator, benefits, cautions and how to drink coffee the healthy way."],
    bn: ["কফি গাইড — ব্ল্যাক কফি, উৎপত্তি, উপকারিতা ও খাওয়ার নিয়ম", "ইথিওপিয়া থেকে বাংলাদেশ — কফির গল্প, এক কাপ ব্ল্যাক কফিতে কী আছে, ক্যাফেইন ক্যালকুলেটর, উপকারিতা, সতর্কতা ও স্বাস্থ্যকরভাবে কফি খাওয়ার নিয়ম।"],
  },
  "/anti-aging": {
    en: ["Anti-ageing foods — eat for younger skin, brain and body", "Which foods help you age well: vitamin C fruits, carotenoid vegetables, oily fish, nuts, green tea and turmeric for skin, brain, heart, bones and eyes — plus what speeds up ageing."],
    bn: ["অ্যান্টি-এজিং খাবার — তারুণ্যদীপ্ত ত্বক, মস্তিষ্ক ও শরীরের জন্য", "কোন খাবার সুস্থভাবে বয়স বাড়তে সাহায্য করে: ত্বক, মস্তিষ্ক, হৃদয়, হাড় ও চোখের জন্য ভিটামিন সি-যুক্ত ফল, রঙিন সবজি, তৈলাক্ত মাছ, বাদাম, গ্রিন টি ও হলুদ — আর কী কারণে দ্রুত বুড়িয়ে যান।"],
  },
  "/blog": {
    en: ["Nutrition blog", "Practical, evidence-based articles on eating well with everyday Bangladeshi food."],
    bn: ["পুষ্টি ব্লগ", "প্রতিদিনের দেশি খাবারে সুস্থভাবে খাওয়া নিয়ে সহজ ও প্রমাণভিত্তিক লেখা।"],
  },
  "/references": {
    en: ["Sources & references", "Where our nutrition data, health guidance and food photos come from, with licences and links."],
    bn: ["উৎস ও তথ্যসূত্র", "আমাদের পুষ্টি তথ্য, স্বাস্থ্য নির্দেশনা ও খাবারের ছবি কোথা থেকে নেওয়া — লাইসেন্স ও লিংকসহ।"],
  },
};

/** Parent page for breadcrumbs. */
const PARENT = {
  "/plants": "/learn", "/food-guide/food-storage": "/food-guide", "/food-guide/meal-times": "/food-guide",
  "/nutrition/vitamins": "/learn", "/nutrition/minerals": "/learn", "/nutrition/deficiency": "/learn",
  "/food-myths": "/learn", "/mens-health": "/learn", "/womens-health": "/learn", "/pregnancy": "/womens-health", "/child-nutrition": "/learn", "/food-guide": "/learn", "/coffee": "/learn", "/anti-aging": "/learn",
};

/** Pages that give health guidance (typed MedicalWebPage in structured data). */
const HEALTH_GUIDES = new Set([
  "/nutrition/vitamins", "/nutrition/minerals", "/nutrition/deficiency",
  "/mens-health", "/womens-health", "/pregnancy", "/child-nutrition",
]);

const shortTitle = (lang, path) => (PAGE_META[path]?.[lang]?.[0] || "").split(" — ")[0];

/** `meta` for a static page. Extra fields (title, description, jsonLd…) override the table. */
export function pageSeo(langParam, path, extra = {}) {
  const lang = LANGS.includes(langParam) ? langParam : DEFAULT_LANG;
  const [title, description] = PAGE_META[path]?.[lang] || ["", ""];
  const trail = [];
  if (path !== "/") {
    const parent = PARENT[path];
    if (parent) trail.push([shortTitle(lang, parent), parent]);
    trail.push([extra.crumb || shortTitle(lang, path) || extra.title || title, path]);
  }
  const pageLd = path === "/"
    ? [websiteLd(lang), organizationLd(lang)]
    : [breadcrumbLd(lang, trail), webPageLd(lang, path, {
        type: HEALTH_GUIDES.has(path) ? "MedicalWebPage" : "WebPage",
        name: extra.title || title,
        description: extra.description || description,
        image: extra.image,
      })];
  const jsonLd = [...pageLd, ...(extra.jsonLd || [])];
  return seo({ lang, path, title, description, ...extra, jsonLd });
}
