/*
 * Child nutrition guide (birth to 5 years): feeding by age, food groups, daily needs, key nutrients,
 * habits, common problems, food safety, myths and danger signs.
 * General education only — follow the advice of your paediatrician / health worker.
 * Feeding by age follows WHO/UNICEF infant and young child feeding guidance (WHO 2023 guideline for
 * 6–23 months); danger signs follow WHO IMCI; needs are IOM/NIH DRIs. `eat` arrays are food ids.
 */

export const CHILD_NUTRITION = {
  intro: {
    en: "The first 1,000 days — from pregnancy to age two — shape a child's height, brain and immunity for life. Children have small stomachs but big needs, so every meal counts: breast milk first, then thick home-made food with egg, fish or meat, vegetables and fruit, every day.",
    bn: "গর্ভাবস্থা থেকে দুই বছর বয়স পর্যন্ত প্রথম ১,০০০ দিন শিশুর উচ্চতা, মস্তিষ্ক ও রোগ প্রতিরোধ ক্ষমতা সারাজীবনের জন্য গড়ে দেয়। শিশুর পেট ছোট কিন্তু চাহিদা বেশি, তাই প্রতিটি বেলার খাবারই গুরুত্বপূর্ণ: প্রথমে বুকের দুধ, তারপর প্রতিদিন ডিম, মাছ বা মাংস, সবজি ও ফলসহ ঘরে তৈরি ঘন খাবার।",
  },

  /* Feeding by age. Amounts use a 250 ml cup; a child's own appetite is the final guide. */
  stages: [
    {
      id: "s0", tone: "rose",
      name: { en: "Birth to 6 months", bn: "জন্ম থেকে ৬ মাস" }, tag: { en: "Breast milk only", bn: "শুধু বুকের দুধ" },
      body: {
        en: "Start breastfeeding within the first hour. Colostrum is the baby's first protection. For 6 months the baby needs nothing else — not even water, because breast milk already has enough, even in hot weather.",
        bn: "জন্মের প্রথম এক ঘণ্টার মধ্যেই বুকের দুধ খাওয়ানো শুরু করুন। শালদুধ শিশুর প্রথম সুরক্ষা। ৬ মাস পর্যন্ত শিশুর আর কিছুই লাগে না — এমনকি পানিও নয়, কারণ গরমের দিনেও বুকের দুধেই যথেষ্ট পানি থাকে।",
      },
      feeds: { en: "On demand, day and night — at least 8 times in 24 hours", bn: "শিশু চাইলেই, দিনে-রাতে — ২৪ ঘণ্টায় অন্তত ৮ বার" },
      texture: { en: "Breast milk only", bn: "শুধু বুকের দুধ" },
      amount: { en: "Until the baby lets go by itself, emptying one breast before offering the other", bn: "শিশু নিজে থেকে না ছাড়া পর্যন্ত; এক স্তন শেষ করে অন্যটি দিন" },
      eat: [],
    },
    {
      id: "s1", tone: "amber",
      name: { en: "6–8 months", bn: "৬–৮ মাস" }, tag: { en: "First foods", bn: "প্রথম খাবার" },
      body: {
        en: "Keep breastfeeding and start thick, mashed food. Food should stay on the spoon — thin jau fills the stomach with little nourishment.",
        bn: "বুকের দুধ চালু রেখে ঘন, চটকানো খাবার শুরু করুন। খাবার এমন ঘন হবে যেন চামচ থেকে গড়িয়ে না পড়ে — পাতলা জাউ পেট ভরায়, পুষ্টি দেয় সামান্য।",
      },
      feeds: { en: "2–3 meals a day, plus breast milk", bn: "দিনে ২–৩ বেলা, সাথে বুকের দুধ" },
      texture: { en: "Thick and well mashed", bn: "ঘন ও ভালোভাবে চটকানো" },
      amount: { en: "Start with 2–3 tablespoons; build up to ½ cup per meal", bn: "২–৩ টেবিল চামচ দিয়ে শুরু; ধীরে ধীরে প্রতি বেলায় আধা কাপ" },
      eat: ["khichuri", "egg", "banana", "pumpkin", "rohu"],
    },
    {
      id: "s2", tone: "lime",
      name: { en: "9–11 months", bn: "৯–১১ মাস" }, tag: { en: "Learning to chew", bn: "চিবোতে শেখা" },
      body: {
        en: "Introduce small soft pieces the baby can pick up. Lumpy food at this age teaches chewing; staying on smooth food too long makes picky eaters.",
        bn: "নরম ছোট টুকরো দিন, যা শিশু নিজে হাতে তুলতে পারে। এই বয়সে দানাদার খাবারেই চিবোনো শেখে; বেশিদিন শুধু মসৃণ খাবার দিলে পরে খাবারে অনীহা হয়।",
      },
      feeds: { en: "3–4 meals a day, 1–2 snacks, plus breast milk", bn: "দিনে ৩–৪ বেলা, ১–২ বার নাস্তা, সাথে বুকের দুধ" },
      texture: { en: "Finely chopped, soft finger food", bn: "মিহি করে কাটা, হাতে ধরার মতো নরম খাবার" },
      amount: { en: "About ½ cup per meal", bn: "প্রতি বেলায় প্রায় আধা কাপ" },
      eat: ["khichuri", "egg", "mola", "chicken", "papaya", "redamaranth"],
    },
    {
      id: "s3", tone: "teal",
      name: { en: "12–23 months", bn: "১২–২৩ মাস" }, tag: { en: "Family food", bn: "পরিবারের খাবার" },
      body: {
        en: "The child can now eat what the family eats, chopped if needed. Take out the child's portion before adding chilli and extra salt. Keep breastfeeding to 2 years or beyond.",
        bn: "এখন শিশু পরিবারের খাবারই খেতে পারে, দরকার হলে কেটে দিন। ঝাল ও বাড়তি লবণ দেওয়ার আগেই শিশুর অংশ তুলে রাখুন। দুই বছর বা তার বেশি সময় বুকের দুধ চালিয়ে যান।",
      },
      feeds: { en: "3–4 meals a day, 1–2 snacks, plus breast milk", bn: "দিনে ৩–৪ বেলা, ১–২ বার নাস্তা, সাথে বুকের দুধ" },
      texture: { en: "Family food, chopped or mashed if needed", bn: "পরিবারের খাবার, দরকারমতো কেটে বা চটকে" },
      amount: { en: "¾ to 1 cup per meal", bn: "প্রতি বেলায় পৌনে এক থেকে এক কাপ" },
      eat: ["whiterice", "lentil", "egg", "rohu", "lau", "guava"],
    },
    {
      id: "s4", tone: "sky",
      name: { en: "2–5 years", bn: "২–৫ বছর" }, tag: { en: "Building habits", bn: "অভ্যাস গড়ার বয়স" },
      body: {
        en: "Growth slows, so appetite naturally changes from day to day. Offer the same healthy food as the family, let the child feed themselves, and keep sweets and packet snacks out of the routine.",
        bn: "বৃদ্ধির গতি কিছুটা কমে, তাই রুচি দিনে দিনে বদলানো স্বাভাবিক। পরিবারের একই স্বাস্থ্যকর খাবার দিন, শিশুকে নিজে খেতে দিন, আর মিষ্টি ও প্যাকেটের নাস্তা নিয়মিত অভ্যাসে আনবেন না।",
      },
      feeds: { en: "3 main meals and 2 healthy snacks", bn: "৩ বেলা মূল খাবার ও ২ বার স্বাস্থ্যকর নাস্তা" },
      texture: { en: "Regular family food — mind choking risks", bn: "স্বাভাবিক পারিবারিক খাবার — গলায় আটকানোর ঝুঁকি খেয়াল রাখুন" },
      amount: { en: "About 1–1½ cups per meal, by appetite", bn: "রুচি অনুযায়ী প্রতি বেলায় প্রায় ১–১½ কাপ" },
      eat: ["egg", "milk", "chicken", "kachki", "carrot", "mango"],
    },
  ],

  /* WHO dietary diversity: a child 6–23 months should eat from at least 5 of these 8 groups each day. */
  groups: [
    { icon: "Baby", tone: "rose", name: { en: "Breast milk", bn: "বুকের দুধ" }, eat: [] },
    { icon: "Wheat", tone: "amber", name: { en: "Grains, roots & tubers", bn: "শস্য, মূল ও কন্দ" }, eat: ["whiterice", "roti", "suji", "potato", "sweetpotato"] },
    { icon: "Bean", tone: "orange", name: { en: "Pulses, nuts & seeds", bn: "ডাল, বাদাম ও বীজ" }, eat: ["lentil", "mung", "chickpea", "peanut", "sesame"] },
    { icon: "Milk", tone: "sky", name: { en: "Milk & dairy", bn: "দুধ ও দুগ্ধজাত খাবার" }, eat: ["milk", "yogurt", "paneer"] },
    { icon: "Fish", tone: "teal", name: { en: "Fish, meat & liver", bn: "মাছ, মাংস ও কলিজা" }, eat: ["mola", "rohu", "chicken", "beef", "chickenliver"] },
    { icon: "Egg", tone: "violet", name: { en: "Eggs", bn: "ডিম" }, eat: ["egg", "duckegg"] },
    { icon: "Carrot", tone: "lime", name: { en: "Vitamin A–rich fruit & vegetables", bn: "ভিটামিন এ সমৃদ্ধ ফল ও সবজি" }, eat: ["pumpkin", "carrot", "papaya", "mango", "redamaranth"] },
    { icon: "Apple", tone: "emerald", name: { en: "Other fruit & vegetables", bn: "অন্যান্য ফল ও সবজি" }, eat: ["guava", "banana", "lau", "tomato", "apple"] },
  ],

  /* IOM/NIH Dietary Reference Intakes; calories are approximate and vary with size and activity. */
  needs: {
    ages: [{ en: "7–12 months", bn: "৭–১২ মাস" }, { en: "1–3 years", bn: "১–৩ বছর" }, { en: "4–8 years", bn: "৪–৮ বছর" }],
    rows: [
      { label: { en: "Calories (kcal)", bn: "ক্যালরি (কিলোক্যালরি)" }, values: [{ en: "~650", bn: "~৬৫০" }, { en: "1,000–1,400", bn: "১,০০০–১,৪০০" }, { en: "1,200–1,800", bn: "১,২০০–১,৮০০" }] },
      { label: { en: "Protein (g)", bn: "প্রোটিন (গ্রাম)" }, values: [{ en: "11", bn: "১১" }, { en: "13", bn: "১৩" }, { en: "19", bn: "১৯" }] },
      { label: { en: "Iron (mg)", bn: "আয়রন (মি.গ্রা.)" }, values: [{ en: "11", bn: "১১" }, { en: "7", bn: "৭" }, { en: "10", bn: "১০" }] },
      { label: { en: "Calcium (mg)", bn: "ক্যালসিয়াম (মি.গ্রা.)" }, values: [{ en: "260", bn: "২৬০" }, { en: "700", bn: "৭০০" }, { en: "1,000", bn: "১,০০০" }] },
      { label: { en: "Zinc (mg)", bn: "জিংক (মি.গ্রা.)" }, values: [{ en: "3", bn: "৩" }, { en: "3", bn: "৩" }, { en: "5", bn: "৫" }] },
      { label: { en: "Vitamin A (µg RAE)", bn: "ভিটামিন এ (মাইক্রোগ্রাম)" }, values: [{ en: "500", bn: "৫০০" }, { en: "300", bn: "৩০০" }, { en: "400", bn: "৪০০" }] },
      { label: { en: "Vitamin C (mg)", bn: "ভিটামিন সি (মি.গ্রা.)" }, values: [{ en: "50", bn: "৫০" }, { en: "15", bn: "১৫" }, { en: "25", bn: "২৫" }] },
      { label: { en: "Vitamin D (IU)", bn: "ভিটামিন ডি (আইইউ)" }, values: [{ en: "400", bn: "৪০০" }, { en: "600", bn: "৬০০" }, { en: "600", bn: "৬০০" }] },
      { label: { en: "Iodine (µg)", bn: "আয়োডিন (মাইক্রোগ্রাম)" }, values: [{ en: "130", bn: "১৩০" }, { en: "90", bn: "৯০" }, { en: "90", bn: "৯০" }] },
    ],
  },

  nutrients: [
    { icon: "Droplet", tone: "red", name: { en: "Iron", bn: "আয়রন" },
      why: { en: "Builds blood and the growing brain. Breast milk alone can't meet iron needs after 6 months, so iron-rich food must start then.", bn: "রক্ত ও বাড়ন্ত মস্তিষ্ক গড়ে তোলে। ৬ মাসের পর শুধু বুকের দুধে আয়রনের চাহিদা মেটে না, তাই তখন থেকেই আয়রনযুক্ত খাবার জরুরি।" },
      eat: ["chickenliver", "beef", "chicken", "egg", "lentil", "kochushak"] },
    { icon: "Eye", tone: "orange", name: { en: "Vitamin A", bn: "ভিটামিন এ" },
      why: { en: "Protects eyesight and fights infection. Cook vegetables with a little oil so the body can absorb it.", bn: "দৃষ্টিশক্তি রক্ষা করে ও সংক্রমণের সাথে লড়ে। সবজি অল্প তেলে রান্না করুন, তাহলে শরীর ভালোভাবে শোষণ করতে পারে।" },
      eat: ["mola", "pumpkin", "carrot", "papaya", "mango", "redamaranth"] },
    { icon: "Shield", tone: "indigo", name: { en: "Zinc", bn: "জিংক" },
      why: { en: "Needed for growth and immunity, and shortens diarrhoea. Rice-heavy diets are low in zinc.", bn: "বৃদ্ধি ও রোগ প্রতিরোধে দরকার, ডায়রিয়ার স্থায়িত্বও কমায়। ভাতনির্ভর খাবারে জিংক কম থাকে।" },
      eat: ["beef", "chicken", "egg", "lentil", "yogurt"] },
    { icon: "Dumbbell", tone: "teal", name: { en: "Protein", bn: "প্রোটিন" },
      why: { en: "Builds muscle, organs and height. Give an animal food — fish, egg or meat — every day if you can.", bn: "পেশি, অঙ্গ ও উচ্চতা গড়ে। সম্ভব হলে প্রতিদিন একটি প্রাণিজ খাবার — মাছ, ডিম বা মাংস — দিন।" },
      eat: ["egg", "rohu", "chicken", "lentil", "mung", "milk"] },
    { icon: "Bone", tone: "amber", name: { en: "Calcium & vitamin D", bn: "ক্যালসিয়াম ও ভিটামিন ডি" },
      why: { en: "For strong bones and teeth. Small fish eaten with bones are excellent. Outdoor play in daylight gives vitamin D.", bn: "মজবুত হাড় ও দাঁতের জন্য। কাঁটাসহ খাওয়া যায় এমন ছোট মাছ চমৎকার। দিনের আলোয় বাইরে খেললে ভিটামিন ডি মেলে।" },
      eat: ["milk", "yogurt", "mola", "kachki", "sesame", "egg"] },
    { icon: "Brain", tone: "violet", name: { en: "Iodine & omega-3", bn: "আয়োডিন ও ওমেগা-৩" },
      why: { en: "Both support brain development. Cook family food with iodised salt, and give oily fish when you can.", bn: "দুটোই মস্তিষ্কের বিকাশে সহায়ক। পরিবারের রান্নায় আয়োডিনযুক্ত লবণ ব্যবহার করুন, আর সম্ভব হলে তৈলাক্ত মাছ দিন।" },
      eat: ["hilsa", "sardine", "shrimp", "egg", "milk"] },
  ],

  habits: [
    { en: "Feed slowly and patiently. Encourage, but never force or threaten", bn: "ধীরে ও ধৈর্য ধরে খাওয়ান। উৎসাহ দিন, কিন্তু জোর বা ভয় দেখাবেন না" },
    { en: "Turn off the TV and phone at mealtimes", bn: "খাওয়ার সময় টিভি ও মোবাইল বন্ধ রাখুন" },
    { en: "Give the child their own plate, so you can see how much they ate", bn: "শিশুকে আলাদা থালায় দিন, যাতে বুঝতে পারেন কতটা খেল" },
    { en: "Let children feed themselves, even if it gets messy", bn: "শিশুকে নিজে খেতে দিন, একটু এলোমেলো হলেও" },
    { en: "Add a teaspoon of oil or ghee to meals for children under 2 for extra energy", bn: "২ বছরের কম বয়সী শিশুর খাবারে বাড়তি শক্তির জন্য এক চা চামচ তেল বা ঘি দিন" },
    { en: "Wash hands with soap before cooking and feeding; use safe water", bn: "রান্না ও খাওয়ানোর আগে সাবান দিয়ে হাত ধোন; নিরাপদ পানি ব্যবহার করুন" },
    { en: "Serve food freshly cooked; don't keep cooked food out for more than 2 hours", bn: "খাবার টাটকা রান্না করে দিন; রান্না করা খাবার ২ ঘণ্টার বেশি বাইরে রাখবেন না" },
    { en: "When sick, feed more often; give one extra meal a day for 2 weeks after recovery", bn: "অসুখে বেশি বার খাওয়ান; সেরে ওঠার পর ২ সপ্তাহ দিনে এক বেলা বাড়তি খাবার দিন" },
  ],

  problems: [
    { icon: "Utensils", tone: "amber", title: { en: "Fussy eating", bn: "খেতে না চাওয়া" },
      tips: {
        en: ["A new food may need 10–15 tries — offer it again, calmly", "Small portions, regular times, no snacks just before meals", "Don't replace a refused meal with biscuits or sweets"],
        bn: ["নতুন খাবারে অভ্যস্ত হতে ১০–১৫ বার লাগতে পারে — শান্তভাবে আবার দিন", "অল্প পরিমাণে, নির্দিষ্ট সময়ে; খাবারের ঠিক আগে নাস্তা নয়", "খাবার না খেলে তার বদলে বিস্কুট বা মিষ্টি দেবেন না"],
      },
      eat: ["banana", "egg", "sweetpotato", "mango"] },
    { icon: "Waves", tone: "sky", title: { en: "Diarrhoea", bn: "ডায়রিয়া" },
      tips: {
        en: ["Give ORS after every loose stool, and zinc for 10–14 days as a health worker advises", "Keep breastfeeding and keep feeding — don't stop food", "No fruit juice, soft drinks or glucose water; they can make it worse"],
        bn: ["প্রতিবার পাতলা পায়খানার পর ওরস্যালাইন দিন, আর স্বাস্থ্যকর্মীর পরামর্শমতো ১০–১৪ দিন জিংক", "বুকের দুধ ও খাবার চালিয়ে যান — খাবার বন্ধ করবেন না", "ফলের জুস, কোমল পানীয় বা গ্লুকোজ পানি নয়; এতে আরও বাড়তে পারে"],
      },
      eat: ["khichuri", "banana", "yogurt"] },
    { icon: "Wind", tone: "teal", title: { en: "Constipation", bn: "কোষ্ঠকাঠিন্য" },
      tips: {
        en: ["After 6 months, offer more water, fruit and vegetables", "Limit cow's milk to about 2 cups (500 ml) a day", "Ripe papaya, guava, lau and whole grains; more active play"],
        bn: ["৬ মাসের পর বেশি পানি, ফল ও সবজি দিন", "গরুর দুধ দিনে প্রায় ২ কাপের (৫০০ মি.লি.) মধ্যে রাখুন", "পাকা পেঁপে, পেয়ারা, লাউ ও গোটা শস্য; বেশি খেলাধুলা"],
      },
      eat: ["papaya", "guava", "lau", "oats"] },
    { icon: "Droplet", tone: "red", title: { en: "Anaemia", bn: "রক্তস্বল্পতা" },
      tips: {
        en: ["Give iron foods with vitamin C (lemon, guava, amloki)", "A small piece of liver once a week is enough", "Too much cow's milk and any tea reduce iron; treat worms when advised"],
        bn: ["আয়রনযুক্ত খাবারের সাথে ভিটামিন সি দিন (লেবু, পেয়ারা, আমলকী)", "সপ্তাহে একবার ছোট এক টুকরো কলিজাই যথেষ্ট", "বেশি গরুর দুধ ও চা আয়রন কমায়; পরামর্শমতো কৃমির ওষুধ খাওয়ান"],
      },
      eat: ["chickenliver", "lentil", "kochushak", "guava"] },
    { icon: "Scale", tone: "violet", title: { en: "Low weight, slow growth", bn: "কম ওজন, ধীর বৃদ্ধি" },
      tips: {
        en: ["Weigh the child every month up to age 2 and track the growth chart", "Make meals thicker; add oil, egg, dal or peanut paste", "Weight stuck for 2 months or more needs a doctor's check"],
        bn: ["২ বছর পর্যন্ত প্রতি মাসে ওজন নিন, গ্রোথ চার্টে মিলিয়ে দেখুন", "খাবার আরও ঘন করুন; তেল, ডিম, ডাল বা চিনাবাদামের পেস্ট যোগ করুন", "২ মাস বা তার বেশি ওজন না বাড়লে চিকিৎসক দেখান"],
      },
      eat: ["egg", "khichuri", "ghee", "peanut"] },
    { icon: "Gauge", tone: "orange", title: { en: "Too much weight", bn: "অতিরিক্ত ওজন" },
      tips: {
        en: ["Swap soft drinks and juice for water and whole fruit", "Cut fried food, fast food and packet snacks", "Ages 1–5 need about 3 hours of active play a day; no screens under 2, at most 1 hour for ages 2–5"],
        bn: ["কোমল পানীয় ও জুসের বদলে পানি ও গোটা ফল দিন", "ভাজাপোড়া, ফাস্ট ফুড ও প্যাকেটের নাস্তা কমান", "১–৫ বছরের শিশুর দিনে প্রায় ৩ ঘণ্টা খেলাধুলা দরকার; ২ বছরের নিচে স্ক্রিন নয়, ২–৫ বছরে সর্বোচ্চ ১ ঘণ্টা"],
      },
      eat: ["guava", "apple", "cucumber", "lentil"] },
  ],

  /* A sample day for a child aged 1–5 years. */
  day: [
    { icon: "Sunrise", tone: "amber", meal: { en: "Breakfast", bn: "সকালের নাস্তা" },
      menu: { en: "Soft roti or suji with a boiled egg", bn: "নরম রুটি বা সুজি, সাথে একটি সেদ্ধ ডিম" }, eat: ["roti", "suji", "egg"] },
    { icon: "Apple", tone: "lime", meal: { en: "Mid-morning", bn: "মধ্য-সকাল" },
      menu: { en: "A seasonal fruit — banana, ripe mango or papaya", bn: "একটি মৌসুমি ফল — কলা, পাকা আম বা পেঁপে" }, eat: ["banana", "mango", "papaya"] },
    { icon: "Sun", tone: "orange", meal: { en: "Lunch", bn: "দুপুরের খাবার" },
      menu: { en: "Rice, thick dal, boneless or small fish, and shak or a vegetable", bn: "ভাত, ঘন ডাল, কাঁটা ছাড়ানো বা ছোট মাছ, আর শাক বা সবজি" }, eat: ["whiterice", "lentil", "mola", "redamaranth"] },
    { icon: "Coffee", tone: "rose", meal: { en: "Afternoon", bn: "বিকেল" },
      menu: { en: "A cup of milk or doi, with chira or home-made pitha (breast milk too, for under-2s)", bn: "এক কাপ দুধ বা দই, সাথে চিড়া বা ঘরে বানানো পিঠা (২ বছরের কম হলে বুকের দুধও)" }, eat: ["milk", "yogurt", "chira"] },
    { icon: "Moon", tone: "indigo", meal: { en: "Dinner", bn: "রাতের খাবার" },
      menu: { en: "Vegetable khichuri with chicken or fish", bn: "সবজি খিচুড়ি, সাথে মুরগি বা মাছ" }, eat: ["khichuri", "chicken", "carrot"] },
  ],

  avoid: [
    { en: ["Water, sugar water, gripe water or animal milk before 6 months", "Fills the stomach, replaces breast milk and causes infection"], bn: ["৬ মাসের আগে পানি, চিনির পানি, গ্রাইপ ওয়াটার বা গরু-ছাগলের দুধ", "পেট ভরিয়ে বুকের দুধের জায়গা নেয় এবং সংক্রমণ ঘটায়"] },
    { en: ["Honey before 12 months", "Can cause infant botulism, a serious poisoning"], bn: ["১২ মাসের আগে মধু", "শিশুদের বটুলিজম নামের মারাত্মক বিষক্রিয়া ঘটাতে পারে"] },
    { en: ["Cow's milk as the main drink before 12 months", "Low in iron and hard on young kidneys; small amounts in cooking are fine after 6 months"], bn: ["১২ মাসের আগে প্রধান পানীয় হিসেবে গরুর দুধ", "আয়রন কম এবং ছোট শিশুর কিডনির ওপর চাপ ফেলে; ৬ মাসের পর রান্নায় অল্প দেওয়া যায়"] },
    { en: ["Sugar, sweets, soft drinks and packet juice", "Rot teeth and take the place of nutritious food"], bn: ["চিনি, মিষ্টি, কোমল পানীয় ও প্যাকেটের জুস", "দাঁত নষ্ট করে এবং পুষ্টিকর খাবারের জায়গা দখল করে"] },
    { en: ["Chips, instant noodles, packet biscuits and fast food", "High in salt and unhealthy fat, low in nutrients"], bn: ["চিপস, ইনস্ট্যান্ট নুডলস, প্যাকেটের বিস্কুট ও ফাস্ট ফুড", "লবণ ও ক্ষতিকর চর্বি বেশি, পুষ্টি কম"] },
    { en: ["Added salt before 12 months", "Young kidneys can't handle it; afterwards use a little iodised salt"], bn: ["১২ মাসের আগে বাড়তি লবণ", "ছোট শিশুর কিডনি সামলাতে পারে না; এরপর অল্প আয়োডিনযুক্ত লবণ দিন"] },
    { en: ["Tea, coffee and energy drinks", "Caffeine is unsuitable for children, and tea blocks iron"], bn: ["চা, কফি ও এনার্জি ড্রিংক", "শিশুর জন্য ক্যাফেইন উপযুক্ত নয়, আর চা আয়রন শোষণে বাধা দেয়"] },
    { en: ["Whole nuts, whole grapes, popcorn, hard candy, fish with bones", "Choking risk until about age 5 — grind nuts, cut fruit, remove bones"], bn: ["আস্ত বাদাম, আস্ত আঙুর, পপকর্ন, শক্ত চকলেট, কাঁটাসহ মাছ", "প্রায় ৫ বছর পর্যন্ত গলায় আটকানোর ঝুঁকি — বাদাম গুঁড়া করুন, ফল কেটে দিন, কাঁটা বাছুন"] },
    { en: ["Feeding bottles and teats", "Hard to keep clean and a common cause of diarrhoea — use a clean cup and spoon"], bn: ["ফিডার ও নিপল", "পরিষ্কার রাখা কঠিন এবং ডায়রিয়ার সাধারণ কারণ — পরিষ্কার কাপ ও চামচ ব্যবহার করুন"] },
    { en: ["Raw or undercooked egg and meat, unboiled milk, street food", "Young children get seriously ill from food infections"], bn: ["কাঁচা বা আধা-সেদ্ধ ডিম ও মাংস, না ফোটানো দুধ, রাস্তার খাবার", "খাবারের সংক্রমণে ছোট শিশু গুরুতর অসুস্থ হতে পারে"] },
  ],

  supplements: [
    { en: "Vitamin A capsule — every 6 months for ages 6–59 months, at the national campaign", bn: "ভিটামিন এ ক্যাপসুল — ৬–৫৯ মাস বয়সে প্রতি ৬ মাসে, জাতীয় কর্মসূচিতে" },
    { en: "Deworming tablet — usually every 6 months from age 1, as a health worker advises", bn: "কৃমিনাশক — সাধারণত ১ বছর বয়স থেকে প্রতি ৬ মাসে, স্বাস্থ্যকর্মীর পরামর্শে" },
    { en: "Zinc with ORS — during diarrhoea, in the dose a health worker gives", bn: "ওরস্যালাইনের সাথে জিংক — ডায়রিয়ার সময়, স্বাস্থ্যকর্মীর দেওয়া মাত্রায়" },
    { en: "Micronutrient powder — mixed into food, if your health worker recommends it", bn: "মাইক্রোনিউট্রিয়েন্ট পাউডার — স্বাস্থ্যকর্মী বললে খাবারে মিশিয়ে" },
    { en: "Iron, vitamin D or tonic syrups — only on prescription; too much can poison a child", bn: "আয়রন, ভিটামিন ডি বা টনিক সিরাপ — শুধু প্রেসক্রিপশনে; বেশি খেলে শিশুর বিষক্রিয়া হতে পারে" },
  ],

  myths: [
    {
      myth: { en: "Colostrum (shaldudh) is dirty and should be thrown away.", bn: "শালদুধ দূষিত, ফেলে দিতে হয়।" },
      fact: { en: "Colostrum is the baby's first vaccine — rich in antibodies and vitamin A. Give it within the first hour.", bn: "শালদুধ শিশুর প্রথম টিকার মতো — অ্যান্টিবডি ও ভিটামিন এ-তে ভরপুর। জন্মের প্রথম ঘণ্টাতেই খাওয়ান।" },
    },
    {
      myth: { en: "A newborn should first be given honey or mishri water.", bn: "নবজাতকের মুখে প্রথমে মধু বা মিছরির পানি দিতে হয়।" },
      fact: { en: "Nothing should go in before breast milk. Honey can cause botulism and any such feed can carry infection.", bn: "বুকের দুধের আগে কিছুই দেওয়া উচিত নয়। মধুতে বটুলিজম হতে পারে, আর এসব খাবার থেকে সংক্রমণও হতে পারে।" },
    },
    {
      myth: { en: "In hot weather a baby under 6 months needs water.", bn: "গরমে ৬ মাসের কম বয়সী শিশুর পানি লাগে।" },
      fact: { en: "Breast milk is about 88% water and meets the baby's needs. Breastfeed more often instead.", bn: "বুকের দুধের প্রায় ৮৮% পানি, যা শিশুর চাহিদা মেটায়। বরং ঘন ঘন বুকের দুধ দিন।" },
    },
    {
      myth: { en: "Thin jau and barley water are the best first foods.", bn: "পাতলা জাউ ও বার্লির পানিই সবচেয়ে ভালো প্রথম খাবার।" },
      fact: { en: "Thin food is mostly water. Babies need thick food enriched with egg, fish, meat, dal, vegetables and a little oil.", bn: "পাতলা খাবারের বেশিরভাগই পানি। শিশুর দরকার ডিম, মাছ, মাংস, ডাল, সবজি ও অল্প তেল মেশানো ঘন খাবার।" },
    },
    {
      myth: { en: "Eggs and fish cause worms in children.", bn: "ডিম ও মাছ খেলে শিশুর পেটে কৃমি হয়।" },
      fact: { en: "Worms come from dirty hands, soil and unsafe water. Well-cooked egg and fish are ideal from 6 months. Stop and see a doctor if a rash or swelling appears.", bn: "কৃমি হয় অপরিষ্কার হাত, মাটি ও অনিরাপদ পানি থেকে। ভালোভাবে রান্না করা ডিম ও মাছ ৬ মাস থেকে আদর্শ খাবার। ফুসকুড়ি বা ফোলা দেখা দিলে বন্ধ করে চিকিৎসক দেখান।" },
    },
    {
      myth: { en: "Banana or yogurt gives children a cold.", bn: "কলা বা দই খেলে শিশুর ঠান্ডা লাগে।" },
      fact: { en: "Colds are caused by viruses, not food. These are nutritious foods, and children need good food most when they're sick.", bn: "ঠান্ডা লাগে ভাইরাসে, খাবারে নয়। এগুলো পুষ্টিকর খাবার, আর অসুখের সময়ই শিশুর ভালো খাবার সবচেয়ে বেশি দরকার।" },
    },
    {
      myth: { en: "A chubby child is a healthy child.", bn: "মোটাসোটা শিশু মানেই সুস্থ শিশু।" },
      fact: { en: "Health shows on the growth chart, in height and weight for age. Excess weight in childhood often continues into adulthood.", bn: "সুস্থতা বোঝা যায় গ্রোথ চার্টে, বয়স অনুযায়ী উচ্চতা ও ওজন দেখে। ছোটবেলার অতিরিক্ত ওজন প্রায়ই বড় বয়সেও থেকে যায়।" },
    },
    {
      myth: { en: "Malt and health-drink powders make children taller and smarter.", bn: "মল্ট বা হেলথ ড্রিংকের গুঁড়া খেলে শিশু লম্বা ও বুদ্ধিমান হয়।" },
      fact: { en: "Many are mostly sugar. Eggs, fish, dal, milk and vegetables do the job better, for less money.", bn: "এগুলোর অনেকগুলোতে বেশিরভাগই চিনি। ডিম, মাছ, ডাল, দুধ ও সবজি কম খরচে এই কাজ আরও ভালো করে।" },
    },
  ],

  danger: {
    en: ["Cannot drink or breastfeed", "Vomits everything", "Fits (convulsions)", "Very sleepy or hard to wake", "Fast or difficult breathing, chest drawing in", "Blood in the stool", "Sunken eyes, no tears, very little urine", "Fever in a baby under 3 months", "Swelling of both feet, or severe thinness", "Choking and unable to breathe, cough or cry"],
    bn: ["পান করতে বা বুকের দুধ খেতে পারছে না", "যা খায় সবই বমি করে দেয়", "খিঁচুনি হচ্ছে", "খুব ঘুমঘুম ভাব বা জাগানো যাচ্ছে না", "দ্রুত বা কষ্ট করে শ্বাস নিচ্ছে, বুক দেবে যাচ্ছে", "পায়খানায় রক্ত", "চোখ বসে গেছে, চোখে পানি নেই, প্রস্রাব খুব কম", "৩ মাসের কম বয়সী শিশুর জ্বর", "দুই পা ফুলে যাওয়া বা মারাত্মক শুকিয়ে যাওয়া", "গলায় খাবার আটকে শ্বাস নিতে, কাশতে বা কাঁদতে পারছে না"],
  },
};
