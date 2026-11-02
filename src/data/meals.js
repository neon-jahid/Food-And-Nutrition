/*
 * Meal-time guide: what makes a good breakfast, lunch, afternoon snack and dinner
 * with everyday Bangladeshi food. Calories are rough per-plate estimates for an adult.
 */

export const MEALS = [
  {
    id: "breakfast",
    hours: [5, 10],                // local hours this meal is "now" (start inclusive, end exclusive)
    tone: "amber",
    name: { en: "Breakfast", bn: "সকালের নাস্তা" },
    time: { en: "7–9 am", bn: "সকাল ৭–৯টা" },
    share: { en: "~25% of the day's energy", bn: "দিনের শক্তির প্রায় ২৫%" },
    why: {
      en: "After a night without food, breakfast refuels your brain and muscles. A breakfast with protein and fibre keeps you full until lunch and stops mid-morning cravings for fried snacks and sweet tea.",
      bn: "সারা রাত না খাওয়ার পর সকালের নাস্তা মস্তিষ্ক ও পেশিকে আবার শক্তি দেয়। আমিষ ও আঁশযুক্ত নাস্তা দুপুর পর্যন্ত পেট ভরা রাখে, ফলে মাঝসকালে ভাজাপোড়া বা মিষ্টি চায়ের ঝোঁক কমে।",
    },
    plates: [
      { name: { en: "Atta roti, mixed sabji & a boiled egg", bn: "আটার রুটি, মিক্সড সবজি ও একটি সেদ্ধ ডিম" }, foods: ["roti", "egg", "lau"], kcal: 420 },
      { name: { en: "Chira with doi & banana", bn: "দই-চিড়া ও কলা" }, foods: ["chira", "yogurt", "banana"], kcal: 380 },
      { name: { en: "Oats cooked in milk with nuts & fruit", bn: "দুধে রান্না ওটস, বাদাম ও ফল" }, foods: ["oats", "milk", "almond", "papaya"], kcal: 400 },
      { name: { en: "Light vegetable khichuri with an egg", bn: "সবজি খিচুড়ি ও একটি ডিম" }, foods: ["khichuri", "egg"], kcal: 450 },
    ],
    good: {
      en: [
        "Protein: egg, dal, doi, milk or a handful of nuts",
        "Whole grains: atta roti, oats, chira or brown bread",
        "A fruit or vegetable — banana, papaya, guava or sabji",
        "A glass of water when you wake up",
      ],
      bn: [
        "আমিষ: ডিম, ডাল, দই, দুধ বা এক মুঠো বাদাম",
        "গোটা শস্য: আটার রুটি, ওটস, চিড়া বা লাল আটার পাউরুটি",
        "একটি ফল বা সবজি — কলা, পেঁপে, পেয়ারা বা সবজি ভাজি",
        "ঘুম থেকে উঠে এক গ্লাস পানি",
      ],
    },
    avoid: {
      en: [
        "Skipping breakfast — it often leads to overeating later",
        "Paratha or puri fried in reused oil every day",
        "Only sweet tea and biscuits",
        "Sugary drinks and packaged juice",
      ],
      bn: [
        "নাস্তা বাদ দেওয়া — পরে প্রায়ই বেশি খাওয়া হয়ে যায়",
        "প্রতিদিন বারবার ব্যবহৃত তেলে ভাজা পরোটা বা পুরি",
        "শুধু মিষ্টি চা আর বিস্কুট",
        "চিনিযুক্ত পানীয় ও প্যাকেটজাত জুস",
      ],
    },
    tip: {
      en: "Have tea at least an hour after breakfast, not with it — tea reduces iron absorption from roti, egg and dal.",
      bn: "নাস্তার সাথে নয়, অন্তত এক ঘণ্টা পরে চা খান — চা রুটি, ডিম ও ডালের আয়রন শোষণ কমিয়ে দেয়।",
    },
  },
  {
    id: "lunch",
    hours: [10, 15],
    tone: "emerald",
    name: { en: "Lunch", bn: "দুপুরের খাবার" },
    time: { en: "1–2 pm", bn: "দুপুর ১–২টা" },
    share: { en: "~35% of the day's energy", bn: "দিনের শক্তির প্রায় ৩৫%" },
    why: {
      en: "Lunch is usually the biggest meal of a Bangladeshi day — and that's fine, because you have the whole afternoon to use the energy. The key is balance: less rice, more vegetables, and a good piece of fish, dal or meat.",
      bn: "বাংলাদেশে দুপুরের খাবারই সাধারণত দিনের সবচেয়ে বড় খাবার — আর তাতে সমস্যা নেই, কারণ সারা বিকেল সেই শক্তি কাজে লাগে। মূল কথা হলো ভারসাম্য: ভাত কম, সবজি বেশি, আর এক টুকরো মাছ, ডাল বা মাংস।",
    },
    plates: [
      { name: { en: "Rice, rui fish curry, dal & lal shak", bn: "ভাত, রুই মাছের ঝোল, ডাল ও লাল শাক" }, foods: ["whiterice", "rohu", "lentil", "redamaranth"], kcal: 650 },
      { name: { en: "Brown rice, mola chorchori, mixed veg & salad", bn: "লাল চালের ভাত, মলা মাছের চচ্চড়ি, মিক্সড সবজি ও সালাদ" }, foods: ["brownrice", "mola", "cucumber", "tomato"], kcal: 600 },
      { name: { en: "Rice, chicken curry, lau & dal", bn: "ভাত, মুরগির তরকারি, লাউ ও ডাল" }, foods: ["whiterice", "chicken", "lau", "lentil"], kcal: 680 },
      { name: { en: "Rice, egg curry, palong shak & doi", bn: "ভাত, ডিমের তরকারি, পালং শাক ও দই" }, foods: ["whiterice", "egg", "spinach", "yogurt"], kcal: 620 },
    ],
    good: {
      en: [
        "Half the plate vegetables and shak, a quarter rice, a quarter fish/egg/dal/meat",
        "A bowl of dal — cheap protein, fibre and iron",
        "Small fish with bones (mola, kachki) for calcium",
        "Salad with lemon — vitamin C helps absorb iron from shak and dal",
      ],
      bn: [
        "থালার অর্ধেক শাকসবজি, এক-চতুর্থাংশ ভাত, এক-চতুর্থাংশ মাছ/ডিম/ডাল/মাংস",
        "এক বাটি ডাল — সস্তা আমিষ, আঁশ ও আয়রন",
        "কাঁটাসহ ছোট মাছ (মলা, কাচকি) — ক্যালসিয়ামের জন্য",
        "লেবু দিয়ে সালাদ — ভিটামিন সি শাক ও ডালের আয়রন শোষণে সাহায্য করে",
      ],
    },
    avoid: {
      en: [
        "A mountain of rice with very little curry or vegetables",
        "Extra raw salt on the plate",
        "Heavy biryani or rich red-meat dishes every day",
        "Soft drinks with the meal",
      ],
      bn: [
        "অল্প তরকারি বা সবজির সাথে পাহাড় সমান ভাত",
        "পাতে বাড়তি কাঁচা লবণ",
        "প্রতিদিন ভারী বিরিয়ানি বা চর্বিযুক্ত লাল মাংসের পদ",
        "খাবারের সাথে কোমল পানীয়",
      ],
    },
    tip: {
      en: "Eat the shak and vegetables first, then rice — you'll naturally eat less rice, and blood sugar rises more slowly.",
      bn: "আগে শাকসবজি খান, তারপর ভাত — স্বাভাবিকভাবেই ভাত কম খাওয়া হবে, আর রক্তে চিনি ধীরে বাড়বে।",
    },
  },
  {
    id: "snack",
    hours: [15, 19],
    tone: "orange",
    name: { en: "Afternoon snack", bn: "বিকেলের নাস্তা" },
    time: { en: "4–6 pm", bn: "বিকেল ৪–৬টা" },
    share: { en: "~10–15% of the day's energy", bn: "দিনের শক্তির প্রায় ১০–১৫%" },
    why: {
      en: "There's a long gap between lunch and a Bangladeshi dinner. A small, smart snack keeps energy steady and stops you from arriving at dinner starving — the trick is to swap the fried snacks for filling, protein-rich ones.",
      bn: "দুপুর আর রাতের খাবারের মাঝে লম্বা বিরতি থাকে। ছোট ও বুদ্ধিমান একটি নাস্তা শক্তি ধরে রাখে এবং রাতে প্রচণ্ড ক্ষুধা নিয়ে খেতে বসা থেকে বাঁচায় — কৌশল হলো ভাজাপোড়ার বদলে পেট ভরানো, আমিষসমৃদ্ধ নাস্তা বেছে নেওয়া।",
    },
    plates: [
      { name: { en: "Muri with boiled chola, onion & cucumber", bn: "সেদ্ধ ছোলা, পেঁয়াজ ও শসা দিয়ে মুড়ি মাখা" }, foods: ["muri", "chickpea", "cucumber"], kcal: 250 },
      { name: { en: "A guava or seasonal fruit with a few peanuts", bn: "একটি পেয়ারা বা মৌসুমি ফল ও কয়েকটি চিনাবাদাম" }, foods: ["guava", "peanut"], kcal: 200 },
      { name: { en: "Sprouted mung chaat with lemon", bn: "লেবু দিয়ে অঙ্কুরিত মুগের চাট" }, foods: ["sprouts", "tomato", "lemon"], kcal: 180 },
      { name: { en: "Doi or a glass of milk with a banana", bn: "দই বা এক গ্লাস দুধ ও একটি কলা" }, foods: ["yogurt", "banana"], kcal: 220 },
    ],
    good: {
      en: [
        "Muri, chira or roasted chola instead of fried snacks",
        "Fresh fruit — guava, papaya, amra, apple",
        "A small handful of nuts or seeds",
        "Daber pani, plain water or tea with little sugar",
      ],
      bn: [
        "ভাজাপোড়ার বদলে মুড়ি, চিড়া বা ভাজা ছোলা",
        "তাজা ফল — পেয়ারা, পেঁপে, আমড়া, আপেল",
        "অল্প এক মুঠো বাদাম বা বীজ",
        "ডাবের পানি, সাধারণ পানি বা কম চিনির চা",
      ],
    },
    avoid: {
      en: [
        "Singara, samosa, beguni and puri every day",
        "Jilapi and other syrupy sweets",
        "Instant noodles and packaged chips",
        "Several cups of sweet milk tea",
      ],
      bn: [
        "প্রতিদিন সিঙ্গারা, সমুচা, বেগুনি ও পুরি",
        "জিলাপি ও শিরায় ডোবানো মিষ্টি",
        "ইনস্ট্যান্ট নুডলস ও প্যাকেটের চিপস",
        "কয়েক কাপ মিষ্টি দুধ-চা",
      ],
    },
    tip: {
      en: "Fried snacks from street stalls are often made in oil heated again and again. Keep them for once in a while, not daily.",
      bn: "রাস্তার দোকানের ভাজাপোড়া প্রায়ই বারবার গরম করা তেলে ভাজা হয়। এগুলো মাঝেমধ্যে খান, প্রতিদিন নয়।",
    },
  },
  {
    id: "dinner",
    hours: [19, 5],                // wraps past midnight
    tone: "indigo",
    name: { en: "Dinner", bn: "রাতের খাবার" },
    time: { en: "8–9 pm", bn: "রাত ৮–৯টা" },
    share: { en: "~25% of the day's energy", bn: "দিনের শক্তির প্রায় ২৫%" },
    why: {
      en: "Dinner should be lighter than lunch and eaten 2–3 hours before bed. A heavy, late, oily dinner disturbs sleep, causes acidity and makes it harder to manage weight and blood sugar.",
      bn: "রাতের খাবার দুপুরের চেয়ে হালকা হওয়া উচিত এবং ঘুমানোর ২–৩ ঘণ্টা আগে খাওয়া ভালো। দেরিতে ভারী ও তেলতেলে খাবার ঘুম নষ্ট করে, অ্যাসিডিটি বাড়ায় এবং ওজন ও রক্তে চিনি নিয়ন্ত্রণ কঠিন করে।",
    },
    plates: [
      { name: { en: "2 atta roti, chicken curry & lau", bn: "২টি আটার রুটি, মুরগির তরকারি ও লাউ" }, foods: ["roti", "chicken", "lau"], kcal: 480 },
      { name: { en: "A small plate of rice, fish curry & potol", bn: "অল্প ভাত, মাছের ঝোল ও পটল" }, foods: ["whiterice", "rohu", "potol"], kcal: 500 },
      { name: { en: "Roti, mung dal & mixed vegetables", bn: "রুটি, মুগ ডাল ও মিক্সড সবজি" }, foods: ["roti", "mung", "cauliflower"], kcal: 430 },
      { name: { en: "Vegetable khichuri with a little doi", bn: "সবজি খিচুড়ি ও অল্প দই" }, foods: ["khichuri", "yogurt"], kcal: 460 },
    ],
    good: {
      en: [
        "A smaller portion of rice or 2 roti",
        "Lean protein — fish, chicken, egg or dal",
        "Plenty of cooked vegetables",
        "A glass of warm milk later if you are hungry before bed",
      ],
      bn: [
        "ভাত কম বা ২টি রুটি",
        "চর্বি কম এমন আমিষ — মাছ, মুরগি, ডিম বা ডাল",
        "প্রচুর রান্না করা সবজি",
        "ঘুমানোর আগে ক্ষুধা লাগলে এক গ্লাস গরম দুধ",
      ],
    },
    avoid: {
      en: [
        "Eating right before going to sleep",
        "Biryani, polao or fried food late at night",
        "Very spicy curries if you get acidity",
        "Tea or coffee after evening — they can disturb sleep",
      ],
      bn: [
        "খেয়েই সাথে সাথে ঘুমিয়ে পড়া",
        "গভীর রাতে বিরিয়ানি, পোলাও বা ভাজাপোড়া",
        "অ্যাসিডিটি থাকলে খুব ঝাল তরকারি",
        "সন্ধ্যার পর চা বা কফি — ঘুমে ব্যাঘাত ঘটাতে পারে",
      ],
    },
    tip: {
      en: "Take a 10–15 minute walk after dinner — it helps digestion and lowers the rise in blood sugar.",
      bn: "রাতের খাবারের পর ১০–১৫ মিনিট হাঁটুন — হজমে সাহায্য করে এবং রক্তে চিনি কম বাড়ে।",
    },
  },
];

/** The meal that fits the current hour. */
export function currentMeal(hour = new Date().getHours()) {
  return (
    MEALS.find(m => {
      const [a, b] = m.hours;
      return a < b ? hour >= a && hour < b : hour >= a || hour < b;
    }) || MEALS[0]
  );
}
