/*
 * Content for the home-page sections, tools and guide.
 * Season months are for Bangladesh (1 = January … 12 = December) and are approximate.
 */

const W = [11, 12, 1, 2];          // winter (sheet)

export const SEASON_MONTHS = {
  // winter vegetables & fruits
  cauliflower: W, cabbage: W, carrot: [12, 1, 2, 3], tomato: [12, 1, 2, 3], radish: W, spinach: W,
  redamaranth: [11, 12, 1, 2, 3], mustardgreens: W, lau: [10, 11, 12, 1, 2], shim: W, olkopi: W,
  beetroot: W, peas: W, broccoli: [12, 1, 2], capsicum: [12, 1, 2, 3], coriander: W, sweetpotato: W,
  potato: [12, 1, 2, 3], orange: W, boroi: [12, 1, 2, 3], amloki: [10, 11, 12, 1], kamranga: [9, 10, 11, 12],
  strawberry: [12, 1, 2, 3], tetul: [1, 2, 3], drumstick: [2, 3, 4],
  // summer
  mango: [5, 6, 7], jackfruit: [5, 6, 7, 8], litchi: [5, 6], jam: [5, 6, 7], pineapple: [5, 6, 7, 8],
  watermelon: [3, 4, 5], bel: [3, 4, 5], potol: [4, 5, 6, 7, 8, 9], jhinga: [5, 6, 7, 8, 9], chichinga: [5, 6, 7, 8, 9],
  kakrol: [6, 7, 8, 9], cucumber: [3, 4, 5, 6, 7, 8], borboti: [5, 6, 7, 8, 9], puishak: [4, 5, 6, 7, 8, 9],
  kolmishak: [4, 5, 6, 7, 8, 9, 10], okra: [4, 5, 6, 7, 8, 9], bittergourd: [4, 5, 6, 7, 8, 9],
  // monsoon / autumn
  guava: [7, 8, 9, 11, 12], ata: [8, 9, 10], amra: [8, 9, 10], chalkumra: [7, 8, 9, 10], kochushak: [6, 7, 8, 9],
  kochumukhi: [8, 9, 10], hilsa: [6, 7, 8, 9, 10], sofeda: [3, 4, 5, 9, 10],
  // year-round
  banana: "all", papaya: "all", eggplant: "all", pumpkin: "all", lemon: "all",
};
export const inSeason = (id, month) => {
  const m = SEASON_MONTHS[id];
  return m === "all" ? false : Array.isArray(m) && m.includes(month); // year-round items are not "seasonal"
};

export const SEASON_NAMES = {
  en: ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  bn: ["", "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
};

/** One tip is shown per day (rotates by day of year). */
export const TIPS = [
  { en: "Eat small fish like mola and kachki with their bones and heads — they are one of the richest local sources of calcium and vitamin A.",
    bn: "মলা, কাচকি জাতীয় ছোট মাছ কাঁটা ও মাথাসহ খান — ক্যালসিয়াম ও ভিটামিন এ-র অন্যতম সেরা দেশি উৎস।" },
  { en: "Add a squeeze of lemon or a guava to an iron-rich meal (dal, shak) — vitamin C helps your body absorb plant iron.",
    bn: "আয়রনসমৃদ্ধ খাবারের (ডাল, শাক) সাথে একটু লেবু বা একটি পেয়ারা খান — ভিটামিন সি উদ্ভিজ্জ আয়রন শোষণে সাহায্য করে।" },
  { en: "Avoid tea or coffee right after meals — tannins reduce iron absorption. Wait about an hour.",
    bn: "খাবারের ঠিক পরেই চা-কফি খাবেন না — এর ট্যানিন আয়রন শোষণ কমায়। অন্তত এক ঘণ্টা অপেক্ষা করুন।" },
  { en: "Fill half your plate with vegetables and fruit, a quarter with rice or roti, and a quarter with fish, egg, dal or meat.",
    bn: "থালার অর্ধেক সবজি ও ফল, এক-চতুর্থাংশ ভাত বা রুটি, আর বাকি এক-চতুর্থাংশ মাছ, ডিম, ডাল বা মাংস দিয়ে সাজান।" },
  { en: "Keep salt under 5 g (about 1 teaspoon) a day — skip extra raw salt at the table to protect your blood pressure.",
    bn: "দিনে লবণ ৫ গ্রামের (প্রায় ১ চা-চামচ) কম রাখুন — রক্তচাপ ঠিক রাখতে পাতে কাঁচা লবণ খাবেন না।" },
  { en: "Drink about 8 glasses of water a day — more in summer, during fever or after heavy sweating.",
    bn: "দিনে প্রায় ৮ গ্লাস পানি পান করুন — গরমে, জ্বরে বা বেশি ঘামলে আরও বেশি।" },
  { en: "Wash fruits and vegetables well in running water before eating or cutting, and soak leafy greens for a few minutes.",
    bn: "ফল ও সবজি খাওয়া বা কাটার আগে চলমান পানিতে ভালো করে ধুয়ে নিন; শাক কয়েক মিনিট পানিতে ভিজিয়ে রাখুন।" },
  { en: "Don't reuse frying oil again and again — repeatedly heated oil forms harmful compounds. Fried snacks are best kept occasional.",
    bn: "ভাজার তেল বারবার ব্যবহার করবেন না — বারবার গরম করা তেলে ক্ষতিকর যৌগ তৈরি হয়। ভাজাপোড়া মাঝেমধ্যে খান।" },
  { en: "Choose whole fruit over juice — the fibre keeps you full and slows the rise in blood sugar.",
    bn: "জুসের বদলে গোটা ফল খান — এর আঁশ পেট ভরা রাখে এবং রক্তে চিনি ধীরে বাড়ায়।" },
  { en: "Eat what's in season — seasonal local produce is usually fresher, cheaper and more nutritious.",
    bn: "মৌসুমি খাবার খান — দেশি মৌসুমি ফল-সবজি সাধারণত বেশি তাজা, সস্তা ও পুষ্টিকর।" },
  { en: "A handful (about 30 g) of nuts or seeds a day gives healthy fats, protein and minerals — more adds a lot of calories.",
    bn: "দিনে এক মুঠো (প্রায় ৩০ গ্রাম) বাদাম বা বীজ উপকারী চর্বি, আমিষ ও খনিজ দেয় — বেশি খেলে ক্যালরি অনেক বেড়ে যায়।" },
  { en: "Mix rice with dal — together they give a better protein balance than either alone.",
    bn: "ভাতের সাথে ডাল মিলিয়ে খান — দুটো একসাথে আলাদা খাওয়ার চেয়ে ভালো মানের আমিষ দেয়।" },
  { en: "Sugary drinks add calories without filling you up. Plain water, daber pani or unsweetened tea are better choices.",
    bn: "চিনিযুক্ত পানীয় পেট ভরায় না কিন্তু ক্যালরি বাড়ায়। সাধারণ পানি, ডাবের পানি বা চিনি ছাড়া চা ভালো বিকল্প।" },
  { en: "Cook greens lightly with a little oil — vitamin A from shak is absorbed better with some fat, and over-cooking destroys vitamin C.",
    bn: "শাক অল্প তেলে হালকা রান্না করুন — একটু চর্বির সাথে শাকের ভিটামিন এ ভালো শোষিত হয়, আর বেশি রান্নায় ভিটামিন সি নষ্ট হয়।" },
];

/** Healthy plate proportions (simplified from food-based dietary guidelines). */
export const PLATE = [
  { key: "veg", pct: 35, color: "#16a34a", foods: ["spinach", "lau", "carrot"],
    en: ["Vegetables & shak", "Half the plate together with fruit — the more colours the better."],
    bn: ["সবজি ও শাক", "ফলসহ থালার অর্ধেক — যত রঙের সবজি, তত ভালো।"] },
  { key: "fruit", pct: 15, color: "#f59e0b", foods: ["guava", "banana", "papaya"],
    en: ["Fruit", "Whole seasonal fruit rather than juice."],
    bn: ["ফল", "জুস নয়, গোটা মৌসুমি ফল।"] },
  { key: "grain", pct: 25, color: "#a16207", foods: ["brownrice", "roti", "oats"],
    en: ["Rice, roti & grains", "A quarter of the plate; prefer brown rice, atta roti, oats."],
    bn: ["ভাত, রুটি ও শস্য", "থালার এক-চতুর্থাংশ; লাল চালের ভাত, আটার রুটি বা ওটস ভালো।"] },
  { key: "protein", pct: 25, color: "#0284c7", foods: ["rohu", "egg", "lentil"],
    en: ["Fish, egg, dal & meat", "A quarter of the plate; fish and dal often, red meat less."],
    bn: ["মাছ, ডিম, ডাল ও মাংস", "থালার এক-চতুর্থাংশ; মাছ ও ডাল বেশি, লাল মাংস কম।"] },
];

export const HABITS = [
  { icon: "Droplets", en: "6–8 glasses of water a day", bn: "দিনে ৬–৮ গ্লাস পানি" },
  { icon: "Milk", en: "1–2 servings of milk, doi or small fish for calcium", bn: "ক্যালসিয়ামের জন্য দিনে ১–২ বার দুধ, দই বা ছোট মাছ" },
  { icon: "CookingPot", en: "Oil about 4–5 teaspoons per person per day", bn: "জনপ্রতি দিনে প্রায় ৪–৫ চা-চামচ তেল" },
  { icon: "CircleSlash", en: "Salt under 5 g/day; avoid extra raw salt", bn: "দিনে লবণ ৫ গ্রামের কম; পাতে কাঁচা লবণ নয়" },
  { icon: "Candy", en: "Limit sugar, sweets and soft drinks", bn: "চিনি, মিষ্টি ও কোমল পানীয় কম" },
  { icon: "Footprints", en: "At least 30 minutes of walking or activity", bn: "দিনে অন্তত ৩০ মিনিট হাঁটা বা ব্যায়াম" },
];
