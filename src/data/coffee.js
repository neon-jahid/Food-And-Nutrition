/*
 * Coffee guide content (bilingual). Educational only — not medical advice.
 *
 * Numbers:
 *  - per-cup nutrition and caffeine are calculated from USDA FoodData Central (SR Legacy) values per 100 g,
 *    for the serving sizes shown (1 cup = 240 ml ≈ 237 g). FDC IDs are listed with each drink.
 *  - limits (400 mg/day adults, 200 mg/day in pregnancy, 200 mg single dose) are from EFSA (2015) and the US FDA.
 * Health effects are worded as associations where the evidence is observational.
 */

export const COFFEE_SOURCES = [
  { id: "fdc", label: "USDA FoodData Central — SR Legacy (brewed coffee FDC 171890, espresso 171891, instant 174130, decaf 171889, black tea 173227, green tea 171917, cola 174852)", url: "https://fdc.nal.usda.gov/" },
  { id: "efsa", label: "EFSA NDA Panel (2015). Scientific Opinion on the safety of caffeine. EFSA Journal 13(5):4102", url: "https://doi.org/10.2903/j.efsa.2015.4102" },
  { id: "fda", label: "US FDA — Spilling the Beans: How Much Caffeine is Too Much?", url: "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much" },
  { id: "poole", label: "Poole R. et al. (2017). Coffee consumption and health: umbrella review of meta-analyses of multiple health outcomes. BMJ 359:j5024", url: "https://doi.org/10.1136/bmj.j5024" },
  { id: "drake", label: "Drake C. et al. (2013). Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med 9(11)", url: "https://doi.org/10.5664/jcsm.3170" },
  { id: "urgert", label: "Urgert R., Katan M.B. (1997). The cholesterol-raising factor from coffee beans. Annu Rev Nutr 17:305–324", url: "https://doi.org/10.1146/annurev.nutr.17.1.305" },
  { id: "morck", label: "Morck T.A. et al. (1983). Inhibition of food iron absorption by coffee. Am J Clin Nutr 37(3):416–420", url: "https://doi.org/10.1093/ajcn/37.3.416" },
  { id: "killer", label: "Killer S.C. et al. (2014). No evidence of dehydration with moderate daily coffee intake. PLoS ONE 9(1):e84154", url: "https://doi.org/10.1371/journal.pone.0084154" },
  { id: "issn", label: "Guest N.S. et al. (2021). ISSN position stand: caffeine and exercise performance. J Int Soc Sports Nutr 18:1", url: "https://doi.org/10.1186/s12970-020-00383-4" },
  { id: "nca", label: "National Coffee Association (USA) — The History of Coffee", url: "https://www.ncausa.org/about-coffee/history-of-coffee" },
];

/** One 240 ml cup of plain brewed black coffee (USDA FDC 171890 × 2.37). */
export const CUP_FACTS = [
  { key: "kcal", value: 2, unit: { en: "kcal", bn: "ক্যালরি" }, label: { en: "Energy", bn: "শক্তি" } },
  { key: "caffeine", value: 95, unit: { en: "mg", bn: "মি.গ্রা." }, label: { en: "Caffeine", bn: "ক্যাফেইন" } },
  { key: "potassium", value: 116, unit: { en: "mg", bn: "মি.গ্রা." }, label: { en: "Potassium", bn: "পটাশিয়াম" } },
  { key: "magnesium", value: 7, unit: { en: "mg", bn: "মি.গ্রা." }, label: { en: "Magnesium", bn: "ম্যাগনেসিয়াম" } },
  { key: "riboflavin", value: 0.18, unit: { en: "mg", bn: "মি.গ্রা." }, label: { en: "Vitamin B2", bn: "ভিটামিন B2" } },
  { key: "sugar", value: 0, unit: { en: "g", bn: "গ্রা." }, label: { en: "Sugar", bn: "চিনি" } },
];

/** Caffeine per typical serving, from USDA per-100 g values. */
export const CAFFEINE_DRINKS = [
  { id: "brewed", mg: 95, icon: "☕", name: { en: "Brewed black coffee", bn: "ব্রিউড ব্ল্যাক কফি" }, serving: { en: "1 cup · 240 ml", bn: "১ কাপ · ২৪০ মি.লি." } },
  { id: "espresso", mg: 64, icon: "🫘", name: { en: "Espresso", bn: "এসপ্রেসো" }, serving: { en: "1 shot · 30 ml", bn: "১ শট · ৩০ মি.লি." } },
  { id: "instant", mg: 62, icon: "🥄", name: { en: "Instant coffee", bn: "ইনস্ট্যান্ট কফি" }, serving: { en: "1 cup · 240 ml", bn: "১ কাপ · ২৪০ মি.লি." } },
  { id: "decaf", mg: 2, icon: "🌙", name: { en: "Decaf coffee", bn: "ডিক্যাফ কফি" }, serving: { en: "1 cup · 240 ml", bn: "১ কাপ · ২৪০ মি.লি." } },
  { id: "blacktea", mg: 47, icon: "🍵", name: { en: "Black tea (rong cha)", bn: "রং চা" }, serving: { en: "1 cup · 240 ml", bn: "১ কাপ · ২৪০ মি.লি." } },
  { id: "greentea", mg: 28, icon: "🍃", name: { en: "Green tea", bn: "গ্রিন টি" }, serving: { en: "1 cup · 240 ml", bn: "১ কাপ · ২৪০ মি.লি." } },
  { id: "cola", mg: 31, icon: "🥤", name: { en: "Cola", bn: "কোলা" }, serving: { en: "1 can · 330 ml", bn: "১ ক্যান · ৩৩০ মি.লি." } },
];

export const CAFFEINE_LIMITS = { adult: 400, pregnancy: 200, single: 200 };

export const TIMELINE = [
  {
    when: { en: "Origin", bn: "উৎপত্তি" },
    title: { en: "Wild coffee in the Ethiopian highlands", bn: "ইথিওপিয়ার পাহাড়ি বনে বুনো কফি" },
    text: {
      en: "Arabica coffee (Coffea arabica) grows wild in the highland forests of south-western Ethiopia. A popular story says a goat herder named Kaldi noticed his goats became lively after eating the red berries — but this legend was only written down centuries later, so treat it as folklore, not history.",
      bn: "অ্যারাবিকা কফি (Coffea arabica) ইথিওপিয়ার দক্ষিণ-পশ্চিমের পাহাড়ি বনে প্রাকৃতিকভাবে জন্মায়। প্রচলিত গল্প বলে, কালদি নামের এক রাখাল দেখেছিলেন লাল ফল খেয়ে তার ছাগলগুলো চনমনে হয়ে উঠছে — তবে গল্পটি লেখা হয়েছে বহু শতাব্দী পরে, তাই একে ইতিহাস নয়, লোককথা হিসেবেই ধরুন।",
    },
  },
  {
    when: { en: "1400s", bn: "১৪০০-এর দশক" },
    title: { en: "Yemen: the first coffee drinkers", bn: "ইয়েমেন: প্রথম কফি পান" },
    text: {
      en: "The earliest reliable evidence of coffee as a drink comes from Sufi communities in Yemen in the 15th century, who drank it to stay awake during night prayers. Yemen's port of Mocha became the world's main coffee market.",
      bn: "পানীয় হিসেবে কফির সবচেয়ে পুরোনো নির্ভরযোগ্য প্রমাণ মেলে পঞ্চদশ শতকের ইয়েমেনের সুফি সম্প্রদায়ে — রাতের ইবাদতে জেগে থাকতে তারা কফি পান করতেন। ইয়েমেনের মোখা বন্দর হয়ে ওঠে বিশ্বের প্রধান কফির বাজার।",
    },
  },
  {
    when: { en: "1500s", bn: "১৫০০-এর দশক" },
    title: { en: "Coffeehouses of Mecca, Cairo and Istanbul", bn: "মক্কা, কায়রো ও ইস্তাম্বুলের কফিঘর" },
    text: {
      en: "Coffee spread across the Arab world and the Ottoman Empire. Public coffeehouses became places to talk, play chess, listen to music and share news — so lively they were called “schools of the wise”.",
      bn: "কফি ছড়িয়ে পড়ে আরব বিশ্ব ও অটোমান সাম্রাজ্যে। কফিঘর হয়ে ওঠে আড্ডা, দাবা, গান আর খবর আদান-প্রদানের জায়গা — এত প্রাণবন্ত যে একে বলা হতো “জ্ঞানীদের পাঠশালা”।",
    },
  },
  {
    when: { en: "1600s", bn: "১৬০০-এর দশক" },
    title: { en: "Europe and India", bn: "ইউরোপ ও ভারতবর্ষ" },
    text: {
      en: "Traders brought coffee to Venice, and coffeehouses soon opened in London, Paris and Vienna. According to tradition, the Sufi saint Baba Budan carried seven coffee seeds from Yemen to the hills of Karnataka in India — the start of coffee growing in South Asia.",
      bn: "ব্যবসায়ীদের হাত ধরে কফি পৌঁছায় ভেনিসে, এরপর লন্ডন, প্যারিস ও ভিয়েনায় খুলতে থাকে কফিঘর। প্রচলিত কথা অনুযায়ী, সুফি সাধক বাবা বুদান ইয়েমেন থেকে সাতটি কফির বীজ এনে ভারতের কর্ণাটকের পাহাড়ে লাগান — দক্ষিণ এশিয়ায় কফি চাষের শুরু সেখান থেকেই।",
    },
  },
  {
    when: { en: "1700s", bn: "১৭০০-এর দশক" },
    title: { en: "Plantations around the world", bn: "বিশ্বজুড়ে কফি বাগান" },
    text: {
      en: "The Dutch grew coffee in Java (Indonesia), and from there it travelled to the Caribbean and Latin America. Brazil started growing coffee in the 1700s and is today the world's largest producer; Vietnam, mostly growing Robusta, is second.",
      bn: "ডাচরা ইন্দোনেশিয়ার জাভায় কফি চাষ শুরু করে, সেখান থেকে তা যায় ক্যারিবিয়ান ও লাতিন আমেরিকায়। ব্রাজিলে কফি চাষ শুরু হয় ১৭০০-এর দশকে — আজ ব্রাজিলই বিশ্বের সবচেয়ে বড় উৎপাদক; দ্বিতীয় ভিয়েতনাম, যেখানে মূলত রোবাস্টা হয়।",
    },
  },
  {
    when: { en: "Today", bn: "আজ" },
    title: { en: "Coffee in Bangladesh", bn: "বাংলাদেশে কফি" },
    text: {
      en: "Coffee is now one of the world's most traded farm products. In Bangladesh, cafés have spread fast in the cities, and farmers in the hill districts — Bandarban, Rangamati and Khagrachhari — have started growing coffee on a small scale with government support.",
      bn: "কফি এখন বিশ্বের সবচেয়ে বেশি কেনাবেচা হওয়া কৃষিপণ্যের একটি। বাংলাদেশের শহরগুলোতে দ্রুত বাড়ছে ক্যাফে, আর পার্বত্য জেলা — বান্দরবান, রাঙামাটি ও খাগড়াছড়িতে সরকারি সহায়তায় ছোট পরিসরে কফি চাষ শুরু করেছেন কৃষকেরা।",
    },
  },
];

export const SPECIES = [
  {
    id: "arabica",
    name: { en: "Arabica", bn: "অ্যারাবিকা" },
    latin: "Coffea arabica",
    share: { en: "About 60% of world coffee", bn: "বিশ্বের প্রায় ৬০% কফি" },
    points: {
      en: ["Grows best in cool highlands", "Smoother, sweeter, more acidic taste", "Less caffeine — roughly half of Robusta", "Used for most specialty and café coffee"],
      bn: ["ঠান্ডা পাহাড়ি এলাকায় ভালো জন্মায়", "স্বাদ মসৃণ, মিষ্টি ভাব, একটু টক", "ক্যাফেইন কম — রোবাস্টার প্রায় অর্ধেক", "বেশিরভাগ ক্যাফে ও স্পেশালিটি কফিতে ব্যবহৃত"],
    },
  },
  {
    id: "robusta",
    name: { en: "Robusta", bn: "রোবাস্টা" },
    latin: "Coffea canephora",
    share: { en: "About 40% of world coffee", bn: "বিশ্বের প্রায় ৪০% কফি" },
    points: {
      en: ["Hardy — grows in hot lowlands", "Stronger, more bitter, earthy taste", "More caffeine — roughly double Arabica", "Common in instant coffee and espresso blends"],
      bn: ["সহনশীল — গরম সমতলেও জন্মায়", "স্বাদ কড়া, তেতো ও মাটির মতো", "ক্যাফেইন বেশি — অ্যারাবিকার প্রায় দ্বিগুণ", "ইনস্ট্যান্ট কফি ও এসপ্রেসো ব্লেন্ডে বেশি"],
    },
  },
];

/** Bean-to-cup steps; image ids refer to src/data/siteImages.json. */
export const JOURNEY = [
  { image: "coffee-flower", title: { en: "Flower", bn: "ফুল" }, text: { en: "White, jasmine-scented flowers bloom for only a few days after rain.", bn: "বৃষ্টির পর ফোটে সাদা, জুঁইয়ের মতো সুগন্ধি ফুল — থাকে মাত্র কয়েক দিন।" } },
  { image: "coffee-cherries", title: { en: "Cherry", bn: "চেরি" }, text: { en: "The fruit ripens from green to red over many months. Each cherry holds two seeds — the coffee beans.", bn: "কয়েক মাস ধরে ফল সবুজ থেকে লাল হয়। প্রতিটি চেরির ভেতরে থাকে দুটি বীজ — এটাই কফি বিন।" } },
  { image: "coffee-plantation", title: { en: "Harvest & dry", bn: "সংগ্রহ ও শুকানো" }, text: { en: "Cherries are picked, the fruit is removed and the green beans are dried in the sun or by machine.", bn: "চেরি তুলে ফলের অংশ সরিয়ে সবুজ বীজ রোদে বা মেশিনে শুকানো হয়।" } },
  { image: "coffee-beans", title: { en: "Roast", bn: "রোস্ট" }, text: { en: "Heat turns green beans brown and creates coffee's aroma. Light roasts taste brighter; dark roasts taste bolder and more bitter.", bn: "তাপে সবুজ বীজ বাদামি হয় আর তৈরি হয় কফির সুগন্ধ। হালকা রোস্টে স্বাদ উজ্জ্বল, গাঢ় রোস্টে কড়া ও তেতো।" } },
  { image: "coffee-ground", title: { en: "Grind", bn: "গুঁড়া করা" }, text: { en: "Grind just before brewing: coarse for French press, medium for pour-over, very fine for espresso.", bn: "বানানোর ঠিক আগে গুঁড়া করুন: ফ্রেঞ্চ প্রেসে মোটা, পোর-ওভারে মাঝারি, এসপ্রেসোতে খুব মিহি।" } },
  { image: "coffee-cup", title: { en: "Brew", bn: "তৈরি" }, text: { en: "Hot water (just off the boil, about 90–96 °C) pulls flavour and caffeine out of the grounds.", bn: "সদ্য ফোটা পানি (প্রায় ৯০–৯৬ °সে.) গুঁড়া থেকে স্বাদ ও ক্যাফেইন বের করে আনে।" } },
];

export const BENEFITS = [
  {
    icon: "brain", level: "good",
    title: { en: "Alertness and focus", bn: "সতর্কতা ও মনোযোগ" },
    text: { en: "Caffeine blocks adenosine, the brain chemical that builds up and makes you feel sleepy, so you feel more awake and react faster.", bn: "ক্যাফেইন অ্যাডেনোসিন নামের রাসায়নিককে আটকে দেয়, যা জমে ঘুম ঘুম ভাব আনে — তাই আপনি বেশি সজাগ থাকেন, দ্রুত প্রতিক্রিয়া দেখান।" },
    src: "efsa",
  },
  {
    icon: "dumbbell", level: "good",
    title: { en: "Exercise performance", bn: "ব্যায়ামে সক্ষমতা" },
    text: { en: "Caffeine taken about an hour before exercise can improve endurance and strength. Studies use 3–6 mg per kg body weight — more is not better.", bn: "ব্যায়ামের প্রায় এক ঘণ্টা আগে ক্যাফেইন সহনশীলতা ও শক্তি কিছুটা বাড়াতে পারে। গবেষণায় শরীরের প্রতি কেজি ওজনে ৩–৬ মি.গ্রা. ব্যবহৃত হয় — বেশি খেলে বেশি লাভ নেই।" },
    src: "issn",
  },
  {
    icon: "shield", level: "observational",
    title: { en: "Lower risk of type 2 diabetes", bn: "টাইপ ২ ডায়াবেটিসের ঝুঁকি কম" },
    text: { en: "People who drink coffee regularly have a lower rate of type 2 diabetes in large studies. This is an association — and it applies to coffee without lots of sugar.", bn: "বড় গবেষণাগুলোতে দেখা গেছে, নিয়মিত কফি পানকারীদের মধ্যে টাইপ ২ ডায়াবেটিস কম। এটি সম্পর্ক, প্রমাণিত কারণ নয় — আর তা প্রযোজ্য বেশি চিনি ছাড়া কফির ক্ষেত্রে।" },
    src: "poole",
  },
  {
    icon: "liver", level: "observational",
    title: { en: "Liver health", bn: "লিভারের স্বাস্থ্য" },
    text: { en: "Coffee drinking is consistently linked with lower risk of liver fibrosis, cirrhosis and liver cancer in observational research.", bn: "পর্যবেক্ষণমূলক গবেষণায় কফি পানের সাথে লিভার ফাইব্রোসিস, সিরোসিস ও লিভার ক্যানসারের কম ঝুঁকির ধারাবাহিক সম্পর্ক দেখা গেছে।" },
    src: "poole",
  },
  {
    icon: "heart", level: "observational",
    title: { en: "Longer life in moderate drinkers", bn: "পরিমিত পানে দীর্ঘ আয়ু" },
    text: { en: "A large BMJ review found the lowest risk of death from any cause at about 3–4 cups a day, compared with none. It cannot prove that coffee is the cause.", bn: "BMJ-এর একটি বড় পর্যালোচনায় দিনে প্রায় ৩–৪ কাপ কফি পানকারীদের মধ্যে যেকোনো কারণে মৃত্যুঝুঁকি সবচেয়ে কম পাওয়া গেছে। তবে এটি প্রমাণ করে না যে কফিই এর কারণ।" },
    src: "poole",
  },
  {
    icon: "leaf", level: "good",
    title: { en: "Rich in polyphenols", bn: "পলিফেনলে ভরপুর" },
    text: { en: "Coffee contains chlorogenic acids and other plant compounds with antioxidant activity, with almost no calories when drunk black.", bn: "কফিতে আছে ক্লোরোজেনিক অ্যাসিডসহ নানা উদ্ভিজ্জ যৌগ, যাদের অ্যান্টিঅক্সিডেন্ট গুণ আছে — আর চিনি-দুধ ছাড়া খেলে ক্যালরি প্রায় শূন্য।" },
    src: "poole",
  },
];

export const CAUTIONS = [
  { title: { en: "Sleep", bn: "ঘুম" }, text: { en: "In a sleep study, a 400 mg dose of caffeine taken even 6 hours before bed cut sleep by more than an hour. Stop by early afternoon.", bn: "এক গবেষণায় ঘুমানোর ৬ ঘণ্টা আগে নেওয়া ৪০০ মি.গ্রা. ক্যাফেইনও ঘুম এক ঘণ্টার বেশি কমিয়েছে। দুপুরের পর কফি বন্ধ রাখুন।" }, src: "drake" },
  { title: { en: "Pregnancy", bn: "গর্ভাবস্থা" }, text: { en: "Keep caffeine under 200 mg a day from all sources — about 2 cups of brewed coffee.", bn: "সব উৎস মিলিয়ে দিনে ২০০ মি.গ্রা.-এর কম ক্যাফেইন — মোটামুটি ২ কাপ ব্রিউড কফি।" }, src: "efsa" },
  { title: { en: "Iron absorption", bn: "আয়রন শোষণ" }, text: { en: "Coffee with a meal cut iron absorption from that meal by about 40% in one study. Drink it an hour before or after meals, especially if you are anaemic.", bn: "এক গবেষণায় খাবারের সাথে কফি খেলে সেই খাবারের আয়রন শোষণ প্রায় ৪০% কমেছে। খাবারের এক ঘণ্টা আগে বা পরে খান — বিশেষ করে রক্তস্বল্পতা থাকলে।" }, src: "morck" },
  { title: { en: "Cholesterol", bn: "কোলেস্টেরল" }, text: { en: "Unfiltered coffee (French press, boiled, Turkish) contains cafestol, which raises LDL cholesterol. Paper filters remove most of it.", bn: "ফিল্টার ছাড়া কফিতে (ফ্রেঞ্চ প্রেস, ফোটানো, টার্কিশ) থাকে ক্যাফেস্টল, যা খারাপ কোলেস্টেরল (LDL) বাড়ায়। কাগজের ফিল্টার এর বেশিরভাগ আটকে দেয়।" }, src: "urgert" },
  { title: { en: "Anxiety & heart rhythm", bn: "উদ্বেগ ও বুক ধড়ফড়" }, text: { en: "Too much caffeine can cause jitters, a racing heart, headaches and an upset stomach. If you notice these, cut down.", bn: "বেশি ক্যাফেইনে অস্থিরতা, বুক ধড়ফড়, মাথাব্যথা ও পেটের অস্বস্তি হতে পারে। এমন হলে কমিয়ে দিন।" }, src: "fda" },
  { title: { en: "Acidity & reflux", bn: "অ্যাসিডিটি ও বুক জ্বালা" }, text: { en: "Some people get heartburn from coffee, especially on an empty stomach. Try it after breakfast, or choose a darker roast or cold brew.", bn: "অনেকের কফিতে বুক জ্বালা হয়, বিশেষ করে খালি পেটে। নাস্তার পরে খেয়ে দেখুন, বা গাঢ় রোস্ট কিংবা কোল্ড ব্রু বেছে নিন।" }, src: null },
  { title: { en: "Children & teens", bn: "শিশু ও কিশোর" }, text: { en: "Children are more sensitive to caffeine. EFSA suggests no more than 3 mg per kg body weight a day — coffee is best avoided for young children.", bn: "শিশুরা ক্যাফেইনে বেশি সংবেদনশীল। EFSA-এর পরামর্শ, দিনে শরীরের প্রতি কেজি ওজনে ৩ মি.গ্রা.-এর বেশি নয় — ছোট শিশুদের কফি না দেওয়াই ভালো।" }, src: "efsa" },
];

/** How to drink coffee better — the core advice of the page. */
export const HOW_TO = [
  { icon: "cup", title: { en: "Drink Black Coffee", bn: "ব্ল্যাক কফি খান" }, text: { en: "Plain black coffee has about 2 kcal a cup. Each teaspoon of sugar adds about 16 kcal — 3 cups with 2 spoons each is nearly 100 kcal of sugar a day.", bn: "সাধারণ ব্ল্যাক কফিতে কাপপ্রতি প্রায় ২ ক্যালরি। প্রতি চা-চামচ চিনিতে বাড়ে প্রায় ১৬ ক্যালরি — দিনে ৩ কাপে ২ চামচ করে দিলে শুধু চিনিতেই প্রায় ১০০ ক্যালরি।" } },
  { icon: "filter", title: { en: "Use a paper filter", bn: "কাগজের ফিল্টার ব্যবহার করুন" }, text: { en: "Pour-over, drip or instant coffee has very little cafestol. If your cholesterol is high, avoid daily French press or boiled coffee.", bn: "পোর-ওভার, ড্রিপ বা ইনস্ট্যান্ট কফিতে ক্যাফেস্টল খুবই কম। কোলেস্টেরল বেশি হলে প্রতিদিন ফ্রেঞ্চ প্রেস বা ফোটানো কফি এড়িয়ে চলুন।" } },
  { icon: "count", title: { en: "Keep to 1–3 cups", bn: "দিনে ১–৩ কাপ" }, text: { en: "Healthy adults can have up to 400 mg caffeine a day — about 4 cups of brewed coffee. 1–3 cups leaves room for tea and other sources.", bn: "সুস্থ প্রাপ্তবয়স্ক দিনে ৪০০ মি.গ্রা. পর্যন্ত ক্যাফেইন নিতে পারেন — প্রায় ৪ কাপ ব্রিউড কফি। ১–৩ কাপে চা ও অন্য উৎসের জন্যও জায়গা থাকে।" } },
  { icon: "clock", title: { en: "Mid-morning, not late", bn: "সকালের দিকে, রাতে নয়" }, text: { en: "Many people enjoy it best after breakfast. Have your last cup at least 6 hours before bed.", bn: "অনেকে নাস্তার পরে কফি সবচেয়ে উপভোগ করেন। শেষ কাপটি ঘুমের অন্তত ৬ ঘণ্টা আগে খান।" } },
  { icon: "utensils", title: { en: "Away from meals", bn: "খাবারের সাথে নয়" }, text: { en: "Leave about an hour between coffee and an iron-rich meal (dal, shak, fish, meat) so you absorb more iron.", bn: "আয়রনসমৃদ্ধ খাবার (ডাল, শাক, মাছ, মাংস) আর কফির মাঝে প্রায় এক ঘণ্টা ফাঁক রাখুন — আয়রন বেশি শোষিত হবে।" } },
  { icon: "droplet", title: { en: "Drink water too", bn: "পানিও খান" }, text: { en: "Moderate coffee counts towards your fluids and does not dehydrate you — but water is still the best everyday drink.", bn: "পরিমিত কফি শরীরের পানির চাহিদাতেও যোগ হয়, পানিশূন্যতা ঘটায় না — তবে প্রতিদিনের সেরা পানীয় এখনো পানি।" } },
  { icon: "sachet", title: { en: "Read 3-in-1 labels", bn: "৩-ইন-১ এর লেবেল পড়ুন" }, text: { en: "Many 3-in-1 sachets are mostly sugar and creamer (often made from vegetable oil). Check sugar and fat on the label, or switch to plain instant coffee and add your own milk.", bn: "অনেক ৩-ইন-১ স্যাশের বেশিরভাগই চিনি আর ক্রিমার (প্রায়ই উদ্ভিজ্জ তেল থেকে তৈরি)। লেবেলে চিনি ও চর্বি দেখুন, অথবা সাধারণ ইনস্ট্যান্ট কফিতে নিজে দুধ মিশিয়ে নিন।" } },
  { icon: "spice", title: { en: "Flavour without sugar", bn: "চিনি ছাড়াই স্বাদ" }, text: { en: "A pinch of cinnamon or a crushed cardamom pod adds aroma and sweetness without sugar. A splash of milk softens bitterness.", bn: "এক চিমটি দারুচিনি বা একটি থেঁতো এলাচ চিনি ছাড়াই সুগন্ধ ও মিষ্টি ভাব আনে। একটু দুধ তেতো ভাব কমায়।" } },
];

/** Brewing methods; filtered = paper filter (low cafestol). */
export const BREWS = [
  { id: "pourover", image: "coffee-pourover", filtered: true, name: { en: "Pour-over / drip", bn: "পোর-ওভার / ড্রিপ" }, text: { en: "Hot water poured slowly through grounds in a paper filter. Clean, bright cup — the healthiest everyday choice.", bn: "কাগজের ফিল্টারে রাখা গুঁড়ার ওপর ধীরে গরম পানি ঢালা হয়। পরিষ্কার, উজ্জ্বল স্বাদ — প্রতিদিনের জন্য সবচেয়ে স্বাস্থ্যকর।" }, ratio: { en: "15 g coffee : 250 ml water", bn: "১৫ গ্রাম কফি : ২৫০ মি.লি. পানি" } },
  { id: "frenchpress", image: "coffee-frenchpress", filtered: false, name: { en: "French press", bn: "ফ্রেঞ্চ প্রেস" }, text: { en: "Coarse grounds steep for about 4 minutes, then a metal mesh is pressed down. Rich and full-bodied, but unfiltered.", bn: "মোটা গুঁড়া প্রায় ৪ মিনিট ভিজিয়ে ধাতব জালি চেপে নামানো হয়। ঘন, ভরপুর স্বাদ — তবে ফিল্টার ছাড়া।" }, ratio: { en: "16 g coffee : 250 ml water", bn: "১৬ গ্রাম কফি : ২৫০ মি.লি. পানি" } },
  { id: "espresso", image: "coffee-espresso", filtered: false, name: { en: "Espresso", bn: "এসপ্রেসো" }, text: { en: "Hot water forced through very fine coffee under pressure. A small, strong shot with golden crema — the base of Americano, latte and cappuccino.", bn: "চাপ দিয়ে গরম পানি খুব মিহি কফির মধ্য দিয়ে পাঠানো হয়। ছোট, কড়া শট আর সোনালি ক্রেমা — আমেরিকানো, লাটে, ক্যাপুচিনোর ভিত্তি।" }, ratio: { en: "18 g coffee : 36 ml shot", bn: "১৮ গ্রাম কফি : ৩৬ মি.লি. শট" } },
  { id: "moka", image: "coffee-moka", filtered: false, name: { en: "Moka pot", bn: "মোকা পট" }, text: { en: "A stovetop pot that pushes steam-pressured water up through the grounds. Strong, espresso-like coffee without a machine.", bn: "চুলায় বসানো পাত্র, বাষ্পের চাপে পানি গুঁড়ার মধ্য দিয়ে ওপরে ওঠে। মেশিন ছাড়াই এসপ্রেসোর মতো কড়া কফি।" }, ratio: { en: "Fill basket level, don't press", bn: "বাস্কেট সমান করে ভরুন, চাপবেন না" } },
  { id: "instant", image: "coffee-cup", filtered: true, name: { en: "Instant coffee", bn: "ইনস্ট্যান্ট কফি" }, text: { en: "Dried coffee extract that dissolves in hot water. Quick and cheap, with less caffeine than brewed coffee and very little cafestol.", bn: "শুকানো কফির নির্যাস, গরম পানিতে গলে যায়। দ্রুত ও সস্তা — ব্রিউড কফির চেয়ে ক্যাফেইন কম, ক্যাফেস্টল খুবই কম।" }, ratio: { en: "1–2 tsp : 240 ml water", bn: "১–২ চা-চামচ : ২৪০ মি.লি. পানি" } },
];

export const COFFEE_MYTHS = [
  {
    myth: { en: "Coffee dehydrates you.", bn: "কফি শরীরে পানিশূন্যতা ঘটায়।" },
    fact: { en: "In a controlled study, 4 mugs of coffee a day kept regular coffee drinkers as well hydrated as the same amount of water. Only large doses have a noticeable diuretic effect.", bn: "নিয়ন্ত্রিত এক গবেষণায় নিয়মিত কফি পানকারীদের দিনে ৪ মগ কফি একই পরিমাণ পানির মতোই শরীরে পানি জুগিয়েছে। শুধু অনেক বেশি পরিমাণে প্রস্রাব বাড়ার প্রভাব চোখে পড়ে।" },
    src: "killer",
  },
  {
    myth: { en: "Dark roast has more caffeine.", bn: "গাঢ় রোস্টে ক্যাফেইন বেশি।" },
    fact: { en: "Roasting barely changes caffeine. Dark roast just tastes stronger. The coffee species (Robusta vs Arabica) and how much you use matter far more.", bn: "রোস্টে ক্যাফেইন প্রায় বদলায় না — গাঢ় রোস্ট শুধু স্বাদে কড়া। কফির জাত (রোবাস্টা না অ্যারাবিকা) আর কতটা কফি দিচ্ছেন, সেটাই বেশি গুরুত্বপূর্ণ।" },
    src: null,
  },
  {
    myth: { en: "Espresso has more caffeine than a cup of coffee.", bn: "এসপ্রেসোতে এক কাপ কফির চেয়ে বেশি ক্যাফেইন।" },
    fact: { en: "Per sip, yes — but a single 30 ml shot has about 64 mg, less than a 240 ml cup of brewed coffee (about 95 mg).", bn: "চুমুকপ্রতি হ্যাঁ — কিন্তু ৩০ মি.লি.-এর একটি শটে প্রায় ৬৪ মি.গ্রা., যা ২৪০ মি.লি. ব্রিউড কফির (প্রায় ৯৫ মি.গ্রা.) চেয়ে কম।" },
    src: "fdc",
  },
  {
    myth: { en: "Coffee is bad for your heart.", bn: "কফি হৃদযন্ত্রের জন্য খারাপ।" },
    fact: { en: "For most healthy adults, moderate coffee is not linked with higher heart disease risk. Unfiltered coffee can raise LDL, and some people feel palpitations — they should cut down.", bn: "বেশিরভাগ সুস্থ প্রাপ্তবয়স্কের ক্ষেত্রে পরিমিত কফির সাথে হৃদরোগের বাড়তি ঝুঁকির সম্পর্ক পাওয়া যায়নি। তবে ফিল্টার ছাড়া কফি LDL বাড়াতে পারে, আর কারও বুক ধড়ফড় করলে কমানো উচিত।" },
    src: "poole",
  },
];

/* ------------------------------------------------------------------ */
/* Roast levels                                                         */
/* ------------------------------------------------------------------ */
export const ROASTS = [
  {
    id: "light", bean: "#a8743f", glow: "#d9b07d",
    name: { en: "Light roast", bn: "লাইট রোস্ট" },
    taste: { en: "Bright, fruity, tea-like; higher acidity, lighter body.", bn: "উজ্জ্বল, ফলের মতো, চায়ের মতো হালকা; টক ভাব বেশি, বডি হালকা।" },
    health: { en: "Keeps the most chlorogenic acids — coffee's main antioxidants.", bn: "কফির প্রধান অ্যান্টিঅক্সিডেন্ট ক্লোরোজেনিক অ্যাসিড সবচেয়ে বেশি থাকে।" },
    acidity: 3, body: 1,
  },
  {
    id: "medium", bean: "#6e4022", glow: "#b97536",
    name: { en: "Medium roast", bn: "মিডিয়াম রোস্ট" },
    taste: { en: "Balanced and rounded — caramel, nuts, a little chocolate.", bn: "ভারসাম্যপূর্ণ — ক্যারামেল, বাদাম আর হালকা চকলেটের স্বাদ।" },
    health: { en: "A good middle ground of flavour and antioxidants for everyday black coffee.", bn: "প্রতিদিনের ব্ল্যাক কফির জন্য স্বাদ ও অ্যান্টিঅক্সিডেন্টের ভালো মাঝামাঝি।" },
    acidity: 2, body: 2,
  },
  {
    id: "dark", bean: "#2b170c", glow: "#7a4524",
    name: { en: "Dark roast", bn: "ডার্ক রোস্ট" },
    taste: { en: "Bold, smoky, bittersweet; low acidity, heavy body.", bn: "কড়া, ধোঁয়াটে, তেতো-মিষ্টি; টক ভাব কম, বডি ভারী।" },
    health: { en: "Fewer chlorogenic acids, but some people find it gentler on the stomach.", bn: "ক্লোরোজেনিক অ্যাসিড কম, তবে অনেকের পেটে তুলনামূলক আরামদায়ক লাগে।" },
    acidity: 1, body: 3,
  },
];

/* ------------------------------------------------------------------ */
/* Café menu decoded — approximate values, whole milk, no added sugar   */
/* unless the drink is normally sweet. Caffeine: ~64 mg per espresso    */
/* shot (USDA); instant ~2 g per tsp.                                   */
/* layers: [part, share of cup]; parts: espresso, water, milk, foam,    */
/* choc, ice                                                            */
/* ------------------------------------------------------------------ */
export const COFFEE_MENU = [
  { id: "espresso", layers: [["espresso", 1]], ml: 30, kcal: "1", caf: "64",
    name: { en: "Espresso", bn: "এসপ্রেসো" },
    text: { en: "One small, strong shot. The base of almost every café drink.", bn: "ছোট এক কড়া শট — প্রায় সব ক্যাফে ড্রিংকের ভিত্তি।" } },
  { id: "americano", layers: [["espresso", 0.3], ["water", 0.7]], ml: 240, kcal: "5", caf: "64–128",
    name: { en: "Americano", bn: "আমেরিকানো" },
    text: { en: "Espresso topped up with hot water — a black coffee with café flavour.", bn: "এসপ্রেসোতে গরম পানি মেশানো — ক্যাফের স্বাদের ব্ল্যাক কফি।" }, best: true },
  { id: "cappuccino", layers: [["espresso", 0.3], ["milk", 0.35], ["foam", 0.35]], ml: 180, kcal: "110", caf: "64",
    name: { en: "Cappuccino", bn: "ক্যাপুচিনো" },
    text: { en: "Equal parts espresso, steamed milk and thick foam.", bn: "সমান ভাগে এসপ্রেসো, গরম দুধ আর ঘন ফেনা।" } },
  { id: "latte", layers: [["espresso", 0.2], ["milk", 0.68], ["foam", 0.12]], ml: 300, kcal: "190", caf: "64–128",
    name: { en: "Café latte", bn: "ক্যাফে লাটে" },
    text: { en: "Mostly steamed milk with a thin layer of foam — mild and creamy.", bn: "বেশিরভাগই গরম দুধ, ওপরে পাতলা ফেনা — নরম ও ক্রিমি।" } },
  { id: "flatwhite", layers: [["espresso", 0.4], ["milk", 0.5], ["foam", 0.1]], ml: 160, kcal: "110", caf: "128",
    name: { en: "Flat white", bn: "ফ্ল্যাট হোয়াইট" },
    text: { en: "A double shot with silky milk — stronger and smaller than a latte.", bn: "ডাবল শটের সাথে মসৃণ দুধ — লাটের চেয়ে কড়া ও ছোট।" } },
  { id: "mocha", layers: [["choc", 0.15], ["espresso", 0.2], ["milk", 0.45], ["foam", 0.2]], ml: 300, kcal: "290", caf: "70–135",
    name: { en: "Mocha", bn: "মোকা" },
    text: { en: "Latte plus chocolate syrup, often with cream — a dessert in a cup.", bn: "লাটের সাথে চকলেট সিরাপ, অনেক সময় ক্রিমও — কাপে যেন ডেজার্ট।" }, treat: true },
  { id: "coldbrew", layers: [["espresso", 1]], ml: 240, kcal: "5", caf: "100–200",
    name: { en: "Cold brew", bn: "কোল্ড ব্রু" },
    text: { en: "Grounds steeped in cold water for 12–24 hours. Smooth and low in acid, but often high in caffeine.", bn: "ঠান্ডা পানিতে ১২–২৪ ঘণ্টা ভিজিয়ে তৈরি। মসৃণ ও কম টক, তবে ক্যাফেইন প্রায়ই বেশি।" }, best: true },
  { id: "dalgona", layers: [["milk", 0.6], ["foam", 0.4]], ml: 250, kcal: "180", caf: "60–120", foamColor: "#c98a4b",
    name: { en: "Beaten coffee (Dalgona)", bn: "ফেটানো কফি (ডালগোনা)" },
    text: { en: "Instant coffee whipped with sugar and water, spooned over milk. Popular at home — but each spoon of sugar adds about 16 kcal.", bn: "ইনস্ট্যান্ট কফি চিনি ও পানি দিয়ে ফেটিয়ে দুধের ওপর দেওয়া হয়। ঘরে জনপ্রিয় — তবে প্রতি চামচ চিনিতে প্রায় ১৬ ক্যালরি বাড়ে।" }, treat: true },
];

/* ------------------------------------------------------------------ */
/* Davidoff Café picks (instant coffee widely sold in Bangladeshi       */
/* superstores). Taste notes are our general guide, not the maker's     */
/* specification. Not sponsored.                                        */
/* ------------------------------------------------------------------ */
export const DAVIDOFF = [
  {
    id: "fine", name: "Fine Aroma", roast: 1, lid: "#c9a45c", label: "#e9dcc3", ink: "#6b4a1e",
    tagline: { en: "Smooth & delicate", bn: "মসৃণ ও কোমল" },
    taste: { en: "A lighter, gentle cup with soft bitterness — easy to drink black.", bn: "হালকা ও কোমল কাপ, তেতো ভাব কম — চিনি ছাড়া খেতে সহজ।" },
    best: { en: "New to black coffee, or an afternoon cup", bn: "যারা নতুন ব্ল্যাক কফি খাচ্ছেন, বা বিকেলের কাপ" },
  },
  {
    id: "rich", name: "Rich Aroma", roast: 2, lid: "#9b2f2a", label: "#2a1710", ink: "#e8c27a", featured: true,
    tagline: { en: "Full & balanced", bn: "ভরপুর ও ভারসাম্যপূর্ণ" },
    taste: { en: "Rounded and full-bodied with a rich aroma — the classic all-rounder.", bn: "গোলগাল, ভরপুর বডি ও গাঢ় সুগন্ধ — সবদিক থেকে ক্লাসিক।" },
    best: { en: "Your everyday black coffee", bn: "প্রতিদিনের ব্ল্যাক কফি" },
  },
  {
    id: "espresso57", name: "Espresso 57", roast: 3, lid: "#1a1a1a", label: "#0f0b08", ink: "#d9b07d",
    tagline: { en: "Dark & intense", bn: "গাঢ় ও তীব্র" },
    taste: { en: "Dark-roasted and bold with bittersweet, chocolatey notes.", bn: "ডার্ক রোস্ট, কড়া স্বাদে তেতো-মিষ্টি চকলেটের আভাস।" },
    best: { en: "A small strong cup, or a base for milk coffee and dalgona", bn: "ছোট কড়া কাপ, বা দুধ কফি ও ডালগোনার ভিত্তি" },
  },
];

export const DAVIDOFF_STEPS = [
  { en: "1 level teaspoon (about 2 g) for a 200 ml cup — roughly 60–80 mg caffeine.", bn: "২০০ মি.লি. কাপে ১ চা-চামচ সমান (প্রায় ২ গ্রাম) — মোটামুটি ৬০–৮০ মি.গ্রা. ক্যাফেইন।" },
  { en: "Let boiled water rest for 30 seconds — water just off the boil tastes less bitter.", bn: "পানি ফুটিয়ে ৩০ সেকেন্ড রেখে দিন — একদম টগবগে পানির চেয়ে তেতো কম লাগে।" },
  { en: "Drink it black, or add a splash of milk. Skip the sugar, or keep it to half a spoon.", bn: "চিনি-দুধ ছাড়া খান, বা একটু দুধ দিন। চিনি বাদ দিন, নয়তো আধা চামচের বেশি নয়।" },
  { en: "Always use a dry spoon and close the jar tightly — humid weather makes instant coffee clump.", bn: "সবসময় শুকনো চামচ ব্যবহার করুন, বয়াম শক্ত করে বন্ধ রাখুন — আর্দ্র আবহাওয়ায় ইনস্ট্যান্ট কফি জমে যায়।" },
];
