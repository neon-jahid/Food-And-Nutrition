/*
 * Anti-ageing nutrition: foods and habits that support healthy ageing.
 * General education only — no food stops ageing; a varied diet, sun protection, sleep,
 * activity and no tobacco together slow the visible and internal signs of ageing.
 * `eat` / `id` values are food ids from foods.js.
 */

export const ANTI_AGING = {
  intro: {
    en: "Ageing is natural, but how fast your skin, brain, heart and bones age depends a lot on daily habits. Colourful fruits and vegetables, fish, nuts, dal and fermented foods supply antioxidants, healthy fats and protein that protect cells, while sugar, fried food and smoking speed up wear and tear.",
    bn: "বয়স বাড়া স্বাভাবিক, কিন্তু ত্বক, মস্তিষ্ক, হৃদয় ও হাড় কত দ্রুত বুড়িয়ে যাবে তা অনেকটাই নির্ভর করে প্রতিদিনের অভ্যাসের ওপর। রঙিন ফল-সবজি, মাছ, বাদাম, ডাল ও টক দই অ্যান্টিঅক্সিডেন্ট, ভালো চর্বি ও প্রোটিন জোগায়, যা কোষকে রক্ষা করে; আর চিনি, ভাজাপোড়া ও ধূমপান ক্ষয় দ্রুত করে।",
  },

  /* How food influences ageing — four simple mechanisms. */
  how: [
    {
      icon: "ShieldCheck", tone: "emerald",
      title: { en: "Fight free radicals", bn: "ফ্রি র‍্যাডিকেল প্রতিরোধ" },
      body: {
        en: "Sun, smoke and pollution create free radicals that damage cells. Vitamin C, vitamin E, carotenoids and polyphenols in colourful plants neutralise them.",
        bn: "রোদ, ধোঁয়া ও দূষণ থেকে ফ্রি র‍্যাডিকেল তৈরি হয়, যা কোষের ক্ষতি করে। রঙিন ফল-সবজির ভিটামিন সি, ভিটামিন ই, ক্যারোটিনয়েড ও পলিফেনল এগুলোকে নিষ্ক্রিয় করে।",
      },
    },
    {
      icon: "Sparkles", tone: "rose",
      title: { en: "Build collagen", bn: "কোলাজেন তৈরি" },
      body: {
        en: "Collagen keeps skin firm and joints smooth. Your body makes it from protein, and needs vitamin C to do so — amloki, guava and lemon plus fish, eggs and dal.",
        bn: "কোলাজেন ত্বক টানটান ও জয়েন্ট মসৃণ রাখে। শরীর প্রোটিন থেকে এটি তৈরি করে, আর এ কাজে ভিটামিন সি লাগে — আমলকী, পেয়ারা, লেবুর সাথে মাছ, ডিম ও ডাল।",
      },
    },
    {
      icon: "Flame", tone: "orange",
      title: { en: "Calm inflammation", bn: "প্রদাহ কমানো" },
      body: {
        en: "Long-term, low-grade inflammation ('inflammaging') drives heart disease, joint pain and memory decline. Omega-3 fish, turmeric, green tea and fibre help keep it low.",
        bn: "দীর্ঘমেয়াদি মৃদু প্রদাহ হৃদরোগ, জয়েন্টের ব্যথা ও স্মৃতিশক্তি কমার অন্যতম কারণ। ওমেগা-৩ যুক্ত মাছ, হলুদ, গ্রিন টি ও আঁশ একে নিয়ন্ত্রণে রাখে।",
      },
    },
    {
      icon: "Droplet", tone: "sky",
      title: { en: "Keep blood sugar steady", bn: "রক্তে শর্করা স্থির রাখা" },
      body: {
        en: "Excess sugar sticks to collagen (glycation) and makes skin stiff and wrinkled, and stiffens blood vessels. Whole grains, dal and vegetables release sugar slowly.",
        bn: "অতিরিক্ত চিনি কোলাজেনের সাথে জুড়ে যায় (গ্লাইকেশন), ফলে ত্বক শক্ত ও কুঁচকে যায়, রক্তনালিও শক্ত হয়। গোটা শস্য, ডাল ও সবজি ধীরে ধীরে শর্করা ছাড়ে।",
      },
    },
  ],

  /* Star foods — the most useful, affordable anti-ageing foods. */
  stars: [
    { id: "amloki", key: { en: "Vitamin C", bn: "ভিটামিন সি" },
      why: { en: "One of the richest vitamin C sources anywhere — essential for collagen and a strong antioxidant.", bn: "ভিটামিন সি-র অন্যতম সেরা উৎস — কোলাজেন তৈরিতে জরুরি ও শক্তিশালী অ্যান্টিঅক্সিডেন্ট।" } },
    { id: "guava", key: { en: "Vitamin C, fibre", bn: "ভিটামিন সি, আঁশ" },
      why: { en: "More vitamin C than an orange, plus fibre and lycopene in pink varieties.", bn: "কমলার চেয়েও বেশি ভিটামিন সি, সাথে আঁশ; লাল পেয়ারায় লাইকোপিনও আছে।" } },
    { id: "tomato", key: { en: "Lycopene", bn: "লাইকোপিন" },
      why: { en: "Lycopene helps protect skin from sun damage — cooked tomato with a little oil is absorbed best.", bn: "লাইকোপিন রোদের ক্ষতি থেকে ত্বককে রক্ষা করতে সাহায্য করে — অল্প তেলে রান্না করা টমেটো থেকে সবচেয়ে ভালো শোষিত হয়।" } },
    { id: "carrot", key: { en: "Beta-carotene", bn: "বিটা-ক্যারোটিন" },
      why: { en: "Beta-carotene becomes vitamin A, which renews skin cells and protects eyesight.", bn: "বিটা-ক্যারোটিন ভিটামিন এ-তে রূপ নেয়, যা ত্বকের কোষ নতুন করে ও দৃষ্টিশক্তি রক্ষা করে।" } },
    { id: "spinach", key: { en: "Lutein, folate", bn: "লুটেইন, ফোলেট" },
      why: { en: "Dark green shak gives lutein for the eyes and folate and vitamin K for brain and bones.", bn: "গাঢ় সবুজ শাকে আছে চোখের জন্য লুটেইন, আর মস্তিষ্ক ও হাড়ের জন্য ফোলেট ও ভিটামিন কে।" } },
    { id: "papaya", key: { en: "Vitamin C, carotenoids", bn: "ভিটামিন সি, ক্যারোটিনয়েড" },
      why: { en: "Ripe papaya combines vitamin C, beta-carotene and lycopene for skin, and is gentle on digestion.", bn: "পাকা পেঁপেতে ভিটামিন সি, বিটা-ক্যারোটিন ও লাইকোপিন একসাথে — ত্বকের জন্য ভালো, হজমেও সহায়ক।" } },
    { id: "pomegranate", key: { en: "Polyphenols", bn: "পলিফেনল" },
      why: { en: "Rich in polyphenols that protect blood vessels and calm inflammation.", bn: "পলিফেনলে ভরপুর, যা রক্তনালি রক্ষা করে ও প্রদাহ কমায়।" } },
    { id: "jam", key: { en: "Anthocyanins", bn: "অ্যান্থোসায়ানিন" },
      why: { en: "The deep purple colour of kalojam comes from anthocyanins, antioxidants linked to brain and heart health.", bn: "কালোজামের গাঢ় বেগুনি রং আসে অ্যান্থোসায়ানিন থেকে — মস্তিষ্ক ও হৃদয়ের জন্য উপকারী অ্যান্টিঅক্সিডেন্ট।" } },
    { id: "hilsa", key: { en: "Omega-3", bn: "ওমেগা-৩" },
      why: { en: "Oily fish supplies omega-3 fats that keep skin supple, the heart steady and the brain sharp.", bn: "তৈলাক্ত মাছের ওমেগা-৩ চর্বি ত্বক কোমল, হৃদয় সুস্থ ও মস্তিষ্ক সতেজ রাখে।" } },
    { id: "walnut", key: { en: "Omega-3, vitamin E", bn: "ওমেগা-৩, ভিটামিন ই" },
      why: { en: "A small handful a day gives plant omega-3, vitamin E and polyphenols for brain and heart.", bn: "দিনে এক মুঠো আখরোট উদ্ভিজ্জ ওমেগা-৩, ভিটামিন ই ও পলিফেনল জোগায় — মস্তিষ্ক ও হৃদয়ের জন্য।" } },
    { id: "almond", key: { en: "Vitamin E", bn: "ভিটামিন ই" },
      why: { en: "Vitamin E protects cell membranes and skin from oxidative damage.", bn: "ভিটামিন ই কোষের আবরণ ও ত্বককে অক্সিডেটিভ ক্ষতি থেকে রক্ষা করে।" } },
    { id: "greentea", key: { en: "Catechins (EGCG)", bn: "ক্যাটেচিন (EGCG)" },
      why: { en: "Green tea catechins are powerful antioxidants; 2–3 cups without sugar is a good habit.", bn: "গ্রিন টির ক্যাটেচিন শক্তিশালী অ্যান্টিঅক্সিডেন্ট; চিনি ছাড়া দিনে ২–৩ কাপ ভালো অভ্যাস।" } },
    { id: "turmeric", key: { en: "Curcumin", bn: "কারকিউমিন" },
      why: { en: "Curcumin in everyday holud is anti-inflammatory; black pepper and oil in cooking improve absorption.", bn: "প্রতিদিনের হলুদের কারকিউমিন প্রদাহরোধী; রান্নায় গোলমরিচ ও তেল এর শোষণ বাড়ায়।" } },
    { id: "yogurt", key: { en: "Probiotics, protein", bn: "প্রোবায়োটিক, প্রোটিন" },
      why: { en: "Plain (unsweetened) doi feeds healthy gut bacteria and gives protein and calcium.", bn: "চিনি ছাড়া টক দই অন্ত্রের উপকারী জীবাণুকে পুষ্ট করে, সাথে প্রোটিন ও ক্যালসিয়াম দেয়।" } },
    { id: "lentil", key: { en: "Protein, fibre", bn: "প্রোটিন, আঁশ" },
      why: { en: "Dal gives affordable protein for muscle and collagen, plus fibre for steady blood sugar.", bn: "ডাল পেশি ও কোলাজেনের জন্য সাশ্রয়ী প্রোটিন দেয়, সাথে আঁশ রক্তে শর্করা স্থির রাখে।" } },
    { id: "sweetpotato", key: { en: "Beta-carotene, fibre", bn: "বিটা-ক্যারোটিন, আঁশ" },
      why: { en: "Orange sweet potato is a slow-release carb packed with beta-carotene for skin and eyes.", bn: "কমলা রঙের মিষ্টি আলু ধীরে শক্তি ছাড়ে এবং ত্বক ও চোখের জন্য বিটা-ক্যারোটিনে ভরপুর।" } },
  ],

  /* Body areas — what to eat for each. */
  areas: [
    {
      id: "skin", icon: "Sparkles", tone: "rose",
      title: { en: "Skin & wrinkles", bn: "ত্বক ও বলিরেখা" },
      summary: {
        en: "Most visible skin ageing comes from sun exposure and smoking. Food can't replace sun protection, but vitamin C, carotenoids, healthy fats and enough protein and water help skin repair itself.",
        bn: "ত্বকে বয়সের ছাপের বড় কারণ রোদ ও ধূমপান। খাবার রোদ থেকে সুরক্ষার বিকল্প নয়, তবে ভিটামিন সি, ক্যারোটিনয়েড, ভালো চর্বি এবং যথেষ্ট প্রোটিন ও পানি ত্বককে নিজেকে সারিয়ে তুলতে সাহায্য করে।",
      },
      nutrients: { en: ["Vitamin C", "Beta-carotene", "Lycopene", "Vitamin E", "Omega-3", "Zinc"], bn: ["ভিটামিন সি", "বিটা-ক্যারোটিন", "লাইকোপিন", "ভিটামিন ই", "ওমেগা-৩", "জিংক"] },
      eat: ["amloki", "guava", "tomato", "carrot", "papaya", "hilsa", "almond", "sunflower", "pumpkinseed"],
      eatWhy: {
        en: ["One vitamin C fruit every day — amloki, guava, lemon, orange or papaya", "Cooked tomato and orange vegetables for lycopene and beta-carotene", "Oily fish twice a week and a few nuts or seeds for skin-friendly fats", "8–10 glasses of water; more in hot weather"],
        bn: ["প্রতিদিন একটি ভিটামিন সি-যুক্ত ফল — আমলকী, পেয়ারা, লেবু, কমলা বা পেঁপে", "লাইকোপিন ও বিটা-ক্যারোটিনের জন্য রান্না করা টমেটো ও কমলা রঙের সবজি", "সপ্তাহে দুই দিন তৈলাক্ত মাছ, আর কয়েকটি বাদাম বা বীজ — ত্বকবান্ধব চর্বির জন্য", "দিনে ৮–১০ গ্লাস পানি; গরমে আরও বেশি"],
      },
      limit: {
        en: ["Sugar, sweets and soft drinks — glycation stiffens collagen", "Deep-fried snacks and reused oil", "Smoking and jorda — they age skin years faster"],
        bn: ["চিনি, মিষ্টি ও কোমল পানীয় — গ্লাইকেশন কোলাজেন শক্ত করে", "ডুবো তেলে ভাজা নাশতা ও বারবার ব্যবহৃত তেল", "ধূমপান ও জর্দা — এগুলো ত্বককে কয়েক বছর আগেই বুড়িয়ে দেয়"],
      },
      tips: {
        en: ["Use sunscreen, a hat or umbrella between 10 am and 3 pm", "Sleep 7–8 hours — skin repairs at night", "Wash and moisturise gently; avoid harsh bleaching creams"],
        bn: ["সকাল ১০টা থেকে বিকেল ৩টা পর্যন্ত সানস্ক্রিন, টুপি বা ছাতা ব্যবহার করুন", "৭–৮ ঘণ্টা ঘুমান — রাতেই ত্বক মেরামত হয়", "আলতোভাবে মুখ ধুয়ে ময়েশ্চারাইজার দিন; কড়া ফর্সাকারী ক্রিম এড়িয়ে চলুন"],
      },
    },
    {
      id: "brain", icon: "Brain", tone: "violet",
      title: { en: "Brain & memory", bn: "মস্তিষ্ক ও স্মৃতিশক্তি" },
      summary: {
        en: "A diet rich in leafy greens, berries, fish and nuts is linked to slower memory decline. B12 and folate matter more with age, as absorption of B12 drops after 50.",
        bn: "শাক, জাম জাতীয় ফল, মাছ ও বাদামে ভরপুর খাবার স্মৃতিশক্তি ধীরে কমার সাথে সম্পর্কিত। বয়স বাড়লে বি১২ ও ফোলেট আরও জরুরি, কারণ ৫০-এর পর বি১২ শোষণ কমে যায়।",
      },
      nutrients: { en: ["Omega-3 (DHA)", "Folate", "Vitamin B12", "Flavonoids", "Vitamin E"], bn: ["ওমেগা-৩ (ডিএইচএ)", "ফোলেট", "ভিটামিন বি১২", "ফ্ল্যাভোনয়েড", "ভিটামিন ই"] },
      eat: ["sardine", "hilsa", "walnut", "spinach", "redamaranth", "jam", "mulberry", "egg", "greentea"],
      eatWhy: {
        en: ["Leafy greens (palong, lal shak, pui shak) almost every day", "Fish 2–3 times a week — DHA is a building block of brain cells", "Dark-coloured fruits like kalojam, tut and grapes in season", "Eggs, fish, milk or doi daily for B12"],
        bn: ["প্রায় প্রতিদিন শাক (পালং, লাল শাক, পুঁই শাক)", "সপ্তাহে ২–৩ দিন মাছ — ডিএইচএ মস্তিষ্ক কোষের গঠন উপাদান", "মৌসুমে কালোজাম, তুঁত ও আঙুরের মতো গাঢ় রঙের ফল", "বি১২-এর জন্য প্রতিদিন ডিম, মাছ, দুধ বা দই"],
      },
      limit: {
        en: ["Sugary drinks and sweets", "Too much salt — high blood pressure harms the brain", "Alcohol"],
        bn: ["চিনিযুক্ত পানীয় ও মিষ্টি", "বেশি লবণ — উচ্চ রক্তচাপ মস্তিষ্কের ক্ষতি করে", "অ্যালকোহল"],
      },
      tips: {
        en: ["Keep learning — read, play puzzles, learn a skill", "Stay social and talk with family and friends", "Treat hearing loss, high blood pressure and diabetes early"],
        bn: ["শেখা চালিয়ে যান — পড়ুন, ধাঁধা খেলুন, নতুন কিছু শিখুন", "সামাজিক থাকুন, পরিবার ও বন্ধুদের সাথে কথা বলুন", "কানে কম শোনা, উচ্চ রক্তচাপ ও ডায়াবেটিসের চিকিৎসা দ্রুত শুরু করুন"],
      },
    },
    {
      id: "heart", icon: "Heart", tone: "red",
      title: { en: "Heart & blood vessels", bn: "হৃদয় ও রক্তনালি" },
      summary: {
        en: "Blood vessels stiffen with age, raising blood pressure. Potassium-rich vegetables, fibre, oily fish and less salt keep them flexible for longer.",
        bn: "বয়সের সাথে রক্তনালি শক্ত হয়ে রক্তচাপ বাড়ে। পটাশিয়ামযুক্ত সবজি, আঁশ, তৈলাক্ত মাছ ও কম লবণ রক্তনালিকে দীর্ঘদিন নমনীয় রাখে।",
      },
      nutrients: { en: ["Potassium", "Soluble fibre", "Omega-3", "Nitrates", "Polyphenols"], bn: ["পটাশিয়াম", "দ্রবণীয় আঁশ", "ওমেগা-৩", "নাইট্রেট", "পলিফেনল"] },
      eat: ["oats", "lentil", "beetroot", "pomegranate", "banana", "garlic", "salmon", "flax"],
      eatWhy: {
        en: ["Oats, dal and beans — soluble fibre lowers LDL cholesterol", "Beetroot and leafy greens — natural nitrates relax blood vessels", "Banana, potato with skin, coconut water — potassium balances salt", "Garlic and onion in daily cooking"],
        bn: ["ওটস, ডাল ও শিম — দ্রবণীয় আঁশ খারাপ কোলেস্টেরল (এলডিএল) কমায়", "বিটরুট ও শাক — প্রাকৃতিক নাইট্রেট রক্তনালি শিথিল করে", "কলা, খোসাসহ আলু, ডাবের পানি — পটাশিয়াম লবণের ভারসাম্য রাখে", "প্রতিদিনের রান্নায় রসুন ও পেঁয়াজ"],
      },
      limit: {
        en: ["Extra salt, pickles and instant noodles", "Processed meat and fatty red meat", "Trans fats in dalda, bakery biscuits and reused oil"],
        bn: ["পাতে বাড়তি লবণ, আচার ও ইনস্ট্যান্ট নুডলস", "প্রক্রিয়াজাত মাংস ও চর্বিযুক্ত লাল মাংস", "ডালডা, বেকারির বিস্কুট ও পোড়া তেলের ট্রান্স ফ্যাট"],
      },
      tips: {
        en: ["Walk briskly 30 minutes most days", "Check blood pressure, sugar and cholesterol every year after 40", "Keep a healthy waist — under 90 cm for men, 80 cm for women"],
        bn: ["বেশিরভাগ দিন ৩০ মিনিট দ্রুত হাঁটুন", "৪০-এর পর প্রতি বছর রক্তচাপ, সুগার ও কোলেস্টেরল পরীক্ষা করুন", "কোমরের মাপ ঠিক রাখুন — পুরুষের ৯০ সেমি, নারীর ৮০ সেমির কম"],
      },
    },
    {
      id: "bones", icon: "Bone", tone: "amber",
      title: { en: "Bones, joints & muscle", bn: "হাড়, জয়েন্ট ও পেশি" },
      summary: {
        en: "After 30–35, bone and muscle slowly decline — faster for women after menopause. Calcium, vitamin D, protein and strength exercise keep you strong and steady on your feet.",
        bn: "৩০–৩৫ বছরের পর হাড় ও পেশি ধীরে ধীরে কমতে থাকে — নারীদের মেনোপজের পর আরও দ্রুত। ক্যালসিয়াম, ভিটামিন ডি, প্রোটিন ও শক্তির ব্যায়াম শরীরকে মজবুত ও ভারসাম্যপূর্ণ রাখে।",
      },
      nutrients: { en: ["Calcium", "Vitamin D", "Protein", "Vitamin K", "Magnesium"], bn: ["ক্যালসিয়াম", "ভিটামিন ডি", "প্রোটিন", "ভিটামিন কে", "ম্যাগনেসিয়াম"] },
      eat: ["mola", "milk", "yogurt", "egg", "sesame", "mustardgreens", "soybean", "chickpea"],
      eatWhy: {
        en: ["Small fish eaten with bones (mola, kachki) — calcium plus vitamin A", "Milk, doi or paneer once or twice a day", "Protein at every meal to slow muscle loss", "Sesame, green shak and soybean for plant calcium and vitamin K"],
        bn: ["কাঁটাসহ খাওয়া ছোট মাছ (মলা, কাচকি) — ক্যালসিয়াম ও ভিটামিন এ", "দিনে ১–২ বার দুধ, দই বা পনির", "পেশি ক্ষয় কমাতে প্রতি বেলায় প্রোটিন", "উদ্ভিজ্জ ক্যালসিয়াম ও ভিটামিন কে-র জন্য তিল, সবুজ শাক ও সয়াবিন"],
      },
      limit: {
        en: ["Cola and very salty food — they pull calcium out", "More than 3–4 cups of strong tea or coffee a day", "Long periods of sitting"],
        bn: ["কোলা ও অতিরিক্ত লবণাক্ত খাবার — এগুলো ক্যালসিয়াম বের করে দেয়", "দিনে ৩–৪ কাপের বেশি কড়া চা বা কফি", "দীর্ঘক্ষণ বসে থাকা"],
      },
      tips: {
        en: ["Get 15–20 minutes of morning sun on arms and face for vitamin D", "Do strength or balance exercise 2–3 times a week", "Ask a doctor about a bone density test after menopause or age 65"],
        bn: ["ভিটামিন ডি-র জন্য সকালের রোদে ১৫–২০ মিনিট হাত ও মুখ রাখুন", "সপ্তাহে ২–৩ দিন শক্তি বা ভারসাম্যের ব্যায়াম করুন", "মেনোপজের পর বা ৬৫ বছর বয়সে হাড়ের ঘনত্ব পরীক্ষার কথা চিকিৎসককে জিজ্ঞেস করুন"],
      },
    },
    {
      id: "eyes", icon: "Eye", tone: "teal",
      title: { en: "Eyes", bn: "চোখ" },
      summary: {
        en: "Cataract and age-related macular degeneration are common causes of poor vision later in life. Lutein, zeaxanthin and vitamin A from green and orange foods help protect the eyes.",
        bn: "ছানি ও বয়সজনিত ম্যাকুলার ডিজেনারেশন পরবর্তী জীবনে দৃষ্টি কমার সাধারণ কারণ। সবুজ ও কমলা রঙের খাবারের লুটেইন, জিয়াজ্যান্থিন ও ভিটামিন এ চোখ রক্ষায় সাহায্য করে।",
      },
      nutrients: { en: ["Lutein & zeaxanthin", "Vitamin A", "Vitamin C", "Zinc", "Omega-3"], bn: ["লুটেইন ও জিয়াজ্যান্থিন", "ভিটামিন এ", "ভিটামিন সি", "জিংক", "ওমেগা-৩"] },
      eat: ["spinach", "kochushak", "carrot", "mango", "pumpkin", "egg", "corn", "mola"],
      eatWhy: {
        en: ["Green shak with a little oil — lutein needs fat to be absorbed", "Egg yolk — lutein in an easily absorbed form", "Orange foods: carrot, pumpkin, ripe mango, sweet potato", "Small fish like mola for vitamin A"],
        bn: ["অল্প তেলে রান্না করা সবুজ শাক — লুটেইন শোষণে চর্বি লাগে", "ডিমের কুসুম — সহজে শোষণযোগ্য লুটেইন", "কমলা রঙের খাবার: গাজর, মিষ্টিকুমড়া, পাকা আম, মিষ্টি আলু", "ভিটামিন এ-র জন্য মলার মতো ছোট মাছ"],
      },
      limit: {
        en: ["Smoking — it doubles the risk of cataract and macular degeneration", "Uncontrolled blood sugar"],
        bn: ["ধূমপান — এটি ছানি ও ম্যাকুলার ডিজেনারেশনের ঝুঁকি প্রায় দ্বিগুণ করে", "অনিয়ন্ত্রিত রক্তে শর্করা"],
      },
      tips: {
        en: ["Wear sunglasses in strong sunlight", "Have an eye check every 1–2 years after 40", "Follow the 20-20-20 rule on screens"],
        bn: ["কড়া রোদে সানগ্লাস পরুন", "৪০-এর পর প্রতি ১–২ বছরে চোখ পরীক্ষা করান", "স্ক্রিনে ২০-২০-২০ নিয়ম মানুন"],
      },
    },
    {
      id: "gut", icon: "ShieldCheck", tone: "lime",
      title: { en: "Gut & immunity", bn: "অন্ত্র ও রোগ প্রতিরোধ" },
      summary: {
        en: "Immunity weakens with age, and a healthy gut is a big part of it. Fibre feeds good bacteria; fermented foods add more; and zinc, vitamin C and protein keep defences working.",
        bn: "বয়সের সাথে রোগ প্রতিরোধ ক্ষমতা কমে, আর সুস্থ অন্ত্র এর বড় অংশ। আঁশ উপকারী জীবাণুর খাবার, গাঁজানো খাবার সেগুলো বাড়ায়, আর জিংক, ভিটামিন সি ও প্রোটিন প্রতিরোধ ব্যবস্থা সচল রাখে।",
      },
      nutrients: { en: ["Fibre", "Probiotics", "Zinc", "Vitamin C", "Protein"], bn: ["আঁশ", "প্রোবায়োটিক", "জিংক", "ভিটামিন সি", "প্রোটিন"] },
      eat: ["yogurt", "buttermilk", "brownrice", "oats", "banana", "garlic", "pumpkinseed", "lemon"],
      eatWhy: {
        en: ["Plain doi or ghol daily for probiotics", "Whole grains, dal, vegetables and fruit — aim for 25–30 g fibre", "A slightly green banana and cooled rice give resistant starch for gut bacteria", "Lemon or amloki with meals for vitamin C"],
        bn: ["প্রোবায়োটিকের জন্য প্রতিদিন টক দই বা ঘোল", "গোটা শস্য, ডাল, সবজি ও ফল — দিনে ২৫–৩০ গ্রাম আঁশের লক্ষ্য", "কম পাকা কলা ও ঠান্ডা করা ভাতের রেজিস্ট্যান্ট স্টার্চ অন্ত্রের জীবাণুর খাবার", "খাবারের সাথে লেবু বা আমলকী — ভিটামিন সি-র জন্য"],
      },
      limit: {
        en: ["Ultra-processed packaged snacks", "Unnecessary antibiotics — take them only when prescribed", "Very low-fibre, white-flour-only diets"],
        bn: ["অতি-প্রক্রিয়াজাত প্যাকেটজাত নাশতা", "অপ্রয়োজনীয় অ্যান্টিবায়োটিক — শুধু চিকিৎসকের পরামর্শে খান", "আঁশহীন, শুধু ময়দার খাবার"],
      },
      tips: {
        en: ["Keep vaccines up to date (flu, pneumonia after 60 as advised)", "Drink enough water — thirst weakens with age", "Eat slowly and chew well"],
        bn: ["টিকা হালনাগাদ রাখুন (পরামর্শ অনুযায়ী ৬০-এর পর ফ্লু ও নিউমোনিয়ার টিকা)", "যথেষ্ট পানি পান করুন — বয়সের সাথে তৃষ্ণা কম অনুভূত হয়", "ধীরে খান ও ভালো করে চিবিয়ে খান"],
      },
    },
  ],

  /* Things that speed up ageing. */
  agers: [
    { en: ["Smoking & tobacco", "The single biggest cause of early wrinkles, heart disease and cancer."], bn: ["ধূমপান ও তামাক", "অকালে বলিরেখা, হৃদরোগ ও ক্যান্সারের সবচেয়ে বড় কারণ।"] },
    { en: ["Too much sun", "UV rays break down collagen — up to 80% of visible facial ageing."], bn: ["অতিরিক্ত রোদ", "অতিবেগুনি রশ্মি কোলাজেন ভেঙে দেয় — মুখে বয়সের ছাপের বড় অংশের কারণ।"] },
    { en: ["Sugar & sweet drinks", "Glycation stiffens collagen in skin and blood vessels."], bn: ["চিনি ও মিষ্টি পানীয়", "গ্লাইকেশন ত্বক ও রক্তনালির কোলাজেন শক্ত করে দেয়।"] },
    { en: ["Fried food & reused oil", "Creates oxidised fats and trans fats that inflame the body."], bn: ["ভাজাপোড়া ও পোড়া তেল", "জারিত চর্বি ও ট্রান্স ফ্যাট তৈরি করে শরীরে প্রদাহ বাড়ায়।"] },
    { en: ["Poor sleep", "Less than 6 hours a night speeds skin and brain ageing."], bn: ["অপর্যাপ্ত ঘুম", "রাতে ৬ ঘণ্টার কম ঘুম ত্বক ও মস্তিষ্কের বার্ধক্য দ্রুত করে।"] },
    { en: ["Chronic stress", "Long-term stress hormones wear down the body's repair systems."], bn: ["দীর্ঘস্থায়ী মানসিক চাপ", "দীর্ঘ সময় স্ট্রেস হরমোন শরীরের মেরামত ব্যবস্থাকে দুর্বল করে।"] },
  ],

  /* Daily habits. */
  habits: [
    { en: "Fill half your plate with vegetables and fruit — aim for 5 colours a day", bn: "প্লেটের অর্ধেক সবজি ও ফল দিয়ে ভরুন — দিনে ৫ রঙের লক্ষ্য রাখুন" },
    { en: "Eat fish 2–3 times a week, and a small handful of nuts or seeds daily", bn: "সপ্তাহে ২–৩ দিন মাছ, আর প্রতিদিন এক মুঠো বাদাম বা বীজ" },
    { en: "Include protein (dal, egg, fish, doi) at every meal", bn: "প্রতি বেলায় প্রোটিন (ডাল, ডিম, মাছ, দই) রাখুন" },
    { en: "Choose whole grains — lal chal, atta roti, oats — over white flour", bn: "ময়দার বদলে গোটা শস্য — লাল চাল, আটার রুটি, ওটস" },
    { en: "Drink water through the day; swap soft drinks for green tea or lemon water", bn: "সারাদিন পানি পান করুন; কোমল পানীয়ের বদলে গ্রিন টি বা লেবু-পানি" },
    { en: "Walk 30 minutes, sleep 7–8 hours and protect your skin from strong sun", bn: "৩০ মিনিট হাঁটুন, ৭–৮ ঘণ্টা ঘুমান এবং কড়া রোদ থেকে ত্বক রক্ষা করুন" },
  ],

  /* A sample day. */
  day: [
    { icon: "Sunrise", tone: "amber", meal: { en: "Breakfast", bn: "সকালের নাস্তা" },
      menu: { en: "Atta roti or oats, a boiled egg, mixed vegetables and green tea", bn: "আটার রুটি বা ওটস, একটি সেদ্ধ ডিম, মিশ্র সবজি ও গ্রিন টি" },
      eat: ["oats", "egg", "greentea"] },
    { icon: "Sun", tone: "orange", meal: { en: "Lunch", bn: "দুপুরের খাবার" },
      menu: { en: "Lal chal rice, dal, fish curry with tomato, green shak and a salad with lemon", bn: "লাল চালের ভাত, ডাল, টমেটো দিয়ে মাছের ঝোল, সবুজ শাক ও লেবুসহ সালাদ" },
      eat: ["brownrice", "lentil", "rohu", "spinach", "tomato"] },
    { icon: "Coffee", tone: "rose", meal: { en: "Afternoon snack", bn: "বিকেলের নাস্তা" },
      menu: { en: "A guava or a few amloki, plus a small handful of nuts", bn: "একটি পেয়ারা বা কয়েকটি আমলকী, সাথে এক মুঠো বাদাম" },
      eat: ["guava", "amloki", "walnut"] },
    { icon: "Moon", tone: "indigo", meal: { en: "Dinner", bn: "রাতের খাবার" },
      menu: { en: "Roti or a small portion of rice, mixed vegetable curry, small fish and a bowl of doi", bn: "রুটি বা অল্প ভাত, মিশ্র সবজি, ছোট মাছ ও এক বাটি টক দই" },
      eat: ["roti", "pumpkin", "mola", "yogurt"] },
  ],

  myths: [
    {
      myth: { en: "Collagen powders and creams will erase wrinkles.", bn: "কোলাজেন পাউডার ও ক্রিম বলিরেখা মুছে দেবে।" },
      fact: {
        en: "Evidence for supplements is modest and creams can't push collagen into skin. Enough protein, vitamin C, sunscreen and no smoking do more — and cost less.",
        bn: "সাপ্লিমেন্টের প্রমাণ সীমিত, আর ক্রিম ত্বকের ভেতরে কোলাজেন পৌঁছাতে পারে না। যথেষ্ট প্রোটিন, ভিটামিন সি, সানস্ক্রিন ও ধূমপান না করা বেশি কাজ করে — খরচও কম।",
      },
    },
    {
      myth: { en: "You need expensive imported 'superfoods'.", bn: "দামি বিদেশি 'সুপারফুড' লাগবেই।" },
      fact: {
        en: "Amloki, guava, kalojam, shak, dal and small fish are as good as — or better than — costly imported berries and powders.",
        bn: "আমলকী, পেয়ারা, কালোজাম, শাক, ডাল ও ছোট মাছ দামি বিদেশি বেরি ও পাউডারের সমান — বা তার চেয়েও ভালো।",
      },
    },
    {
      myth: { en: "Detox juices flush out ageing toxins.", bn: "ডিটক্স জুস শরীর থেকে বার্ধক্যের বিষ বের করে দেয়।" },
      fact: {
        en: "Your liver and kidneys do the detoxing. Whole fruit with its fibre is better than juice, which is high in sugar.",
        bn: "শরীরের বিষমুক্তির কাজ করে লিভার ও কিডনি। জুসে চিনি বেশি; আঁশসহ গোটা ফল জুসের চেয়ে ভালো।",
      },
    },
    {
      myth: { en: "Older people need less protein.", bn: "বয়স্কদের প্রোটিন কম লাগে।" },
      fact: {
        en: "Older adults often need slightly more protein (about 1–1.2 g per kg) to slow muscle loss.",
        bn: "পেশি ক্ষয় কমাতে বয়স্কদের প্রায়ই একটু বেশি প্রোটিন লাগে (প্রতি কেজি ওজনে প্রায় ১–১.২ গ্রাম)।",
      },
    },
  ],
};
