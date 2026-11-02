/*
 * Pregnancy nutrition guide: daily needs, key nutrients, trimester-by-trimester food,
 * common discomforts, food safety, myths and danger signs.
 * General education only — follow the advice of your doctor / antenatal care provider.
 * Needs follow IOM/NIH DRIs and WHO antenatal care recommendations. `eat` arrays are food ids.
 */

export const PREGNANCY = {
  intro: {
    en: "What a mother eats in pregnancy shapes her baby's brain, bones and birth weight — and protects her own health. You don't need to eat for two; you need to eat better: more protein, iron, folate, calcium and iodine, with a little extra food from the second trimester.",
    bn: "গর্ভাবস্থায় মা যা খান, তা শিশুর মস্তিষ্ক, হাড় ও জন্ম-ওজন গড়ে তোলে — আর মায়ের নিজের স্বাস্থ্যও রক্ষা করে। দুজনের জন্য দ্বিগুণ খেতে হবে না; খেতে হবে ভালো খাবার — বেশি প্রোটিন, আয়রন, ফোলেট, ক্যালসিয়াম ও আয়োডিন, আর দ্বিতীয় তিন মাস থেকে সামান্য বাড়তি খাবার।",
  },

  needs: [
    { label: { en: "Extra calories", bn: "বাড়তি ক্যালরি" }, value: { en: "+0 / +340 / +450 kcal", bn: "+০ / +৩৪০ / +৪৫০ কিলোক্যালরি" }, note: { en: "1st / 2nd / 3rd trimester", bn: "১ম / ২য় / ৩য় তিন মাস" } },
    { label: { en: "Protein", bn: "প্রোটিন" }, value: { en: "~71 g/day", bn: "দিনে ~৭১ গ্রাম" }, note: { en: "About 25 g more than usual", bn: "স্বাভাবিকের চেয়ে প্রায় ২৫ গ্রাম বেশি" } },
    { label: { en: "Folate", bn: "ফোলেট" }, value: { en: "600 µg/day", bn: "দিনে ৬০০ মাইক্রোগ্রাম" }, note: { en: "Prevents spine & brain defects", bn: "মেরুদণ্ড ও মস্তিষ্কের ত্রুটি প্রতিরোধ করে" } },
    { label: { en: "Iron", bn: "আয়রন" }, value: { en: "27 mg/day", bn: "দিনে ২৭ মি.গ্রা." }, note: { en: "Hard from food alone — take IFA tablets", bn: "শুধু খাবারে পূরণ কঠিন — আয়রন-ফলিক অ্যাসিড ট্যাবলেট খান" } },
    { label: { en: "Calcium", bn: "ক্যালসিয়াম" }, value: { en: "1,000 mg/day", bn: "দিনে ১,০০০ মি.গ্রা." }, note: { en: "Baby's bones; lowers pre-eclampsia risk", bn: "শিশুর হাড়; প্রি-এক্লাম্পসিয়ার ঝুঁকি কমায়" } },
    { label: { en: "Iodine", bn: "আয়োডিন" }, value: { en: "220–250 µg/day", bn: "দিনে ২২০–২৫০ মাইক্রোগ্রাম" }, note: { en: "Use iodised salt", bn: "আয়োডিনযুক্ত লবণ ব্যবহার করুন" } },
  ],

  /* Key nutrients and where to get them. */
  nutrients: [
    { icon: "Brain", tone: "violet", name: { en: "Folate (folic acid)", bn: "ফোলেট (ফলিক অ্যাসিড)" },
      why: { en: "Forms the baby's brain and spinal cord in the first 4 weeks — often before you know you're pregnant.", bn: "প্রথম ৪ সপ্তাহেই শিশুর মস্তিষ্ক ও মেরুদণ্ড গঠন করে — প্রায়ই গর্ভধারণ টের পাওয়ার আগেই।" },
      eat: ["spinach", "redamaranth", "lentil", "chickpea", "orange", "broccoli"] },
    { icon: "Droplet", tone: "red", name: { en: "Iron", bn: "আয়রন" },
      why: { en: "Blood volume rises by about 50%. Low iron causes anaemia, tiredness, early birth and low birth weight.", bn: "রক্তের পরিমাণ প্রায় ৫০% বাড়ে। আয়রনের ঘাটতিতে রক্তস্বল্পতা, ক্লান্তি, অকাল প্রসব ও কম ওজনের শিশু হতে পারে।" },
      eat: ["beef", "chicken", "mola", "egg", "kochushak", "lentil"] },
    { icon: "Bone", tone: "amber", name: { en: "Calcium & vitamin D", bn: "ক্যালসিয়াম ও ভিটামিন ডি" },
      why: { en: "Builds the baby's bones and teeth. If you eat too little, your own bones are drained.", bn: "শিশুর হাড় ও দাঁত গড়ে। কম খেলে মায়ের নিজের হাড় থেকে ক্যালসিয়াম চলে যায়।" },
      eat: ["milk", "yogurt", "mola", "kachki", "sesame", "egg"] },
    { icon: "Sparkles", tone: "sky", name: { en: "Iodine", bn: "আয়োডিন" },
      why: { en: "Essential for the baby's brain and thyroid. Deficiency can lower a child's IQ permanently.", bn: "শিশুর মস্তিষ্ক ও থাইরয়েডের জন্য অপরিহার্য। ঘাটতিতে শিশুর বুদ্ধিমত্তা স্থায়ীভাবে কমে যেতে পারে।" },
      eat: ["shrimp", "rupchanda", "egg", "milk", "yogurt"] },
    { icon: "Dumbbell", tone: "orange", name: { en: "Protein", bn: "প্রোটিন" },
      why: { en: "Builds the baby's muscles, organs and the placenta, and supports the mother's growing body.", bn: "শিশুর পেশি, অঙ্গ ও গর্ভফুল তৈরি করে এবং মায়ের বাড়ন্ত শরীরকে সহায়তা করে।" },
      eat: ["egg", "rohu", "chicken", "lentil", "mung", "paneer"] },
    { icon: "Fish", tone: "teal", name: { en: "Omega-3 (DHA)", bn: "ওমেগা-৩ (ডিএইচএ)" },
      why: { en: "Helps the baby's brain and eyes develop, especially in the last trimester.", bn: "শিশুর মস্তিষ্ক ও চোখের বিকাশে সাহায্য করে, বিশেষ করে শেষ তিন মাসে।" },
      eat: ["hilsa", "sardine", "pangas", "walnut", "flax"] },
  ],

  /* Trimester by trimester. */
  trimesters: [
    {
      id: "t1", tone: "rose",
      name: { en: "1st trimester", bn: "প্রথম তিন মাস" }, weeks: { en: "Weeks 1–12", bn: "১–১২ সপ্তাহ" },
      body: {
        en: "The baby's organs form. No extra calories are needed yet, but folate is critical. Nausea is common — small, frequent meals help.",
        bn: "শিশুর অঙ্গগুলো তৈরি হয়। এখনই বাড়তি ক্যালরি লাগে না, তবে ফোলেট খুব জরুরি। বমি ভাব সাধারণ — অল্প অল্প করে বারবার খেলে উপকার হয়।",
      },
      focus: { en: "Folic acid, small frequent meals, staying hydrated", bn: "ফলিক অ্যাসিড, অল্প করে বারবার খাওয়া, পর্যাপ্ত পানি" },
      eat: ["spinach", "lentil", "muri", "banana", "ginger", "coconutwater"],
    },
    {
      id: "t2", tone: "violet",
      name: { en: "2nd trimester", bn: "দ্বিতীয় তিন মাস" }, weeks: { en: "Weeks 13–27", bn: "১৩–২৭ সপ্তাহ" },
      body: {
        en: "Appetite returns and the baby grows fast. Add one extra small meal (about 340 kcal) — like an egg and a roti, or milk and a fruit.",
        bn: "রুচি ফিরে আসে, শিশু দ্রুত বাড়ে। দিনে এক বেলা বাড়তি ছোট খাবার (প্রায় ৩৪০ কিলোক্যালরি) যোগ করুন — যেমন একটি ডিম ও একটি রুটি, বা দুধ ও একটি ফল।",
      },
      focus: { en: "Iron, calcium, protein; start calcium tablets as advised", bn: "আয়রন, ক্যালসিয়াম, প্রোটিন; পরামর্শমতো ক্যালসিয়াম ট্যাবলেট শুরু" },
      eat: ["egg", "milk", "mola", "chicken", "guava", "redamaranth"],
    },
    {
      id: "t3", tone: "sky",
      name: { en: "3rd trimester", bn: "তৃতীয় তিন মাস" }, weeks: { en: "Weeks 28–40", bn: "২৮–৪০ সপ্তাহ" },
      body: {
        en: "The baby gains most of its weight and the brain grows rapidly. Heartburn and constipation are common — eat smaller meals, more fibre and fluids.",
        bn: "শিশুর ওজন সবচেয়ে বেশি বাড়ে, মস্তিষ্কও দ্রুত বাড়ে। বুকজ্বালা ও কোষ্ঠকাঠিন্য সাধারণ — ছোট ছোট খাবার, বেশি আঁশ ও পানি খান।",
      },
      focus: { en: "Omega-3 fish, protein, fibre; prepare for breastfeeding", bn: "ওমেগা-৩ যুক্ত মাছ, প্রোটিন, আঁশ; বুকের দুধ খাওয়ানোর প্রস্তুতি" },
      eat: ["hilsa", "dates", "oats", "lau", "yogurt", "papaya"],
    },
  ],

  /* Common discomforts and food that helps. */
  problems: [
    { icon: "Waves", tone: "lime", title: { en: "Morning sickness", bn: "সকালের বমি ভাব" },
      tips: {
        en: ["Eat a few dry biscuits, muri or toast before getting out of bed", "Small meals every 2–3 hours; don't let the stomach stay empty", "Ginger tea or lemon water; sip fluids between meals rather than with them"],
        bn: ["বিছানা থেকে ওঠার আগে কয়েকটি শুকনো বিস্কুট, মুড়ি বা টোস্ট খান", "২–৩ ঘণ্টা পরপর অল্প খান; পেট খালি রাখবেন না", "আদা-চা বা লেবু-পানি; খাবারের সাথে নয়, মাঝে মাঝে চুমুক দিয়ে পানি খান"],
      },
      eat: ["muri", "ginger", "lemon", "banana"] },
    { icon: "Wind", tone: "teal", title: { en: "Constipation", bn: "কোষ্ঠকাঠিন্য" },
      tips: {
        en: ["Iron tablets and hormones slow the gut — drink 8–10 glasses of water", "Shak, lau, papaya, isabgul-type fibre and whole grains", "Walk gently every day"],
        bn: ["আয়রন ট্যাবলেট ও হরমোন হজম ধীর করে — দিনে ৮–১০ গ্লাস পানি পান করুন", "শাক, লাউ, পাকা পেঁপে, ইসবগুল ধরনের আঁশ ও গোটা শস্য", "প্রতিদিন হালকা হাঁটুন"],
      },
      eat: ["papaya", "lau", "oats", "pear"] },
    { icon: "Flame", tone: "orange", title: { en: "Heartburn & acidity", bn: "বুকজ্বালা ও অ্যাসিডিটি" },
      tips: {
        en: ["Eat smaller meals; don't lie down for 2 hours after eating", "Go easy on spicy, oily and fried food", "Cold milk or doi can soothe; raise your head on a pillow at night"],
        bn: ["ছোট ছোট খাবার খান; খাওয়ার পর ২ ঘণ্টা শোবেন না", "ঝাল, তেল ও ভাজা খাবার কমান", "ঠান্ডা দুধ বা দই আরাম দিতে পারে; রাতে বালিশ উঁচু করে শোন"],
      },
      eat: ["milk", "yogurt", "oats", "banana"] },
    { icon: "Droplet", tone: "red", title: { en: "Anaemia", bn: "রক্তস্বল্পতা" },
      tips: {
        en: ["Take iron-folic acid tablets daily as prescribed", "Eat iron foods with vitamin C (lemon, guava, amloki)", "No tea or coffee for an hour before and after meals or tablets"],
        bn: ["প্রেসক্রিপশন অনুযায়ী প্রতিদিন আয়রন-ফলিক অ্যাসিড ট্যাবলেট খান", "আয়রনযুক্ত খাবারের সাথে ভিটামিন সি (লেবু, পেয়ারা, আমলকী)", "খাবার বা ট্যাবলেটের এক ঘণ্টা আগে-পরে চা-কফি নয়"],
      },
      eat: ["kochushak", "chicken", "guava", "amloki"] },
    { icon: "Footprints", tone: "amber", title: { en: "Leg cramps", bn: "পায়ে টান (ক্র্যাম্প)" },
      tips: {
        en: ["Milk, doi, small fish and sesame for calcium", "Banana, potato and coconut water for potassium", "Stretch your calves before bed and drink enough water"],
        bn: ["ক্যালসিয়ামের জন্য দুধ, দই, ছোট মাছ ও তিল", "পটাশিয়ামের জন্য কলা, আলু ও ডাবের পানি", "ঘুমানোর আগে পায়ের পেশি টানটান করুন ও যথেষ্ট পানি খান"],
      },
      eat: ["banana", "milk", "sesame", "coconutwater"] },
    { icon: "Gauge", tone: "indigo", title: { en: "High blood sugar (gestational diabetes)", bn: "গর্ভকালীন ডায়াবেটিস" },
      tips: {
        en: ["Get your sugar tested at 24–28 weeks", "Smaller rice portions with more dal, vegetables and fish", "Avoid sweets, juice and soft drinks; walk 10–15 minutes after meals"],
        bn: ["২৪–২৮ সপ্তাহে রক্তে শর্করা পরীক্ষা করান", "কম ভাত, বেশি ডাল, সবজি ও মাছ", "মিষ্টি, জুস ও কোমল পানীয় এড়িয়ে চলুন; খাওয়ার পর ১০–১৫ মিনিট হাঁটুন"],
      },
      eat: ["brownrice", "lentil", "cucumber", "guava"] },
  ],

  /* A sample day (2nd–3rd trimester). */
  day: [
    { icon: "Sunrise", tone: "amber", meal: { en: "Breakfast", bn: "সকালের নাস্তা" },
      menu: { en: "2 atta roti, vegetable bhaji and a boiled egg", bn: "২টি আটার রুটি, সবজি ভাজি ও একটি সেদ্ধ ডিম" }, eat: ["roti", "egg"] },
    { icon: "Apple", tone: "lime", meal: { en: "Mid-morning", bn: "মধ্য-সকাল" },
      menu: { en: "A glass of milk and a seasonal fruit (guava, orange or banana)", bn: "এক গ্লাস দুধ ও একটি মৌসুমি ফল (পেয়ারা, কমলা বা কলা)" }, eat: ["milk", "guava"] },
    { icon: "Sun", tone: "orange", meal: { en: "Lunch", bn: "দুপুরের খাবার" },
      menu: { en: "Rice, thick dal, small fish or chicken curry, green shak and salad with lemon", bn: "ভাত, ঘন ডাল, ছোট মাছ বা মুরগির তরকারি, সবুজ শাক ও লেবুসহ সালাদ" }, eat: ["whiterice", "lentil", "mola", "redamaranth"] },
    { icon: "Coffee", tone: "rose", meal: { en: "Afternoon", bn: "বিকেল" },
      menu: { en: "Chira or muri with peanuts, or khichuri; a bowl of doi", bn: "চিনাবাদামসহ চিড়া বা মুড়ি, অথবা খিচুড়ি; এক বাটি দই" }, eat: ["chira", "peanut", "yogurt"] },
    { icon: "Moon", tone: "indigo", meal: { en: "Dinner", bn: "রাতের খাবার" },
      menu: { en: "Rice or roti, fish curry, a vegetable dish and dal", bn: "ভাত বা রুটি, মাছের ঝোল, একটি সবজি ও ডাল" }, eat: ["rohu", "lau", "mung"] },
  ],

  /* Foods to avoid or limit, with reasons. */
  avoid: [
    { en: ["Raw or half-cooked eggs, meat and fish", "Risk of salmonella, toxoplasma and listeria infection"], bn: ["কাঁচা বা আধা-সেদ্ধ ডিম, মাংস ও মাছ", "সালমোনেলা, টক্সোপ্লাজমা ও লিস্টেরিয়া সংক্রমণের ঝুঁকি"] },
    { en: ["Unboiled milk and soft unpasteurised cheese", "Can carry listeria, which can cause miscarriage"], bn: ["না ফোটানো দুধ ও অপাস্তুরিত নরম পনির", "লিস্টেরিয়া থাকতে পারে, যা গর্ভপাত ঘটাতে পারে"] },
    { en: ["Street food, fuchka water and unwashed salad", "Typhoid, jaundice (hepatitis E) and diarrhoea are dangerous in pregnancy"], bn: ["রাস্তার খাবার, ফুচকার পানি ও না ধোয়া সালাদ", "গর্ভাবস্থায় টাইফয়েড, জন্ডিস (হেপাটাইটিস ই) ও ডায়রিয়া বিপজ্জনক"] },
    { en: ["Large predatory fish (shark, swordfish, king mackerel)", "High in mercury, which harms the baby's brain"], bn: ["বড় শিকারি মাছ (হাঙর, সোর্ডফিশ, বড় ম্যাকেরেল)", "পারদ বেশি, যা শিশুর মস্তিষ্কের ক্ষতি করে"] },
    { en: ["Liver more than once a week; vitamin A tablets", "Too much vitamin A can cause birth defects"], bn: ["সপ্তাহে একবারের বেশি কলিজা; ভিটামিন এ ট্যাবলেট", "অতিরিক্ত ভিটামিন এ জন্মগত ত্রুটি ঘটাতে পারে"] },
    { en: ["More than 200 mg caffeine (about 2 cups of tea or 1 coffee)", "Linked to low birth weight"], bn: ["দিনে ২০০ মি.গ্রা.-র বেশি ক্যাফেইন (প্রায় ২ কাপ চা বা ১ কাপ কফি)", "কম জন্ম-ওজনের সাথে সম্পর্কিত"] },
    { en: ["Unripe papaya and herbal medicines", "Latex in green papaya and some herbs can trigger contractions"], bn: ["কাঁচা পেঁপে ও ভেষজ ওষুধ", "কাঁচা পেঁপের কষ ও কিছু ভেষজ জরায়ুর সংকোচন ঘটাতে পারে"] },
    { en: ["Alcohol, smoking, jorda, gul and betel quid", "No safe amount — harm the baby's growth and brain"], bn: ["মদ, ধূমপান, জর্দা, গুল ও পান-সুপারি", "কোনো নিরাপদ মাত্রা নেই — শিশুর বৃদ্ধি ও মস্তিষ্কের ক্ষতি করে"] },
  ],

  /* Supplements commonly advised in antenatal care. */
  supplements: [
    { en: "Folic acid — ideally from 3 months before pregnancy to 12 weeks", bn: "ফলিক অ্যাসিড — সম্ভব হলে গর্ভধারণের ৩ মাস আগে থেকে ১২ সপ্তাহ পর্যন্ত" },
    { en: "Iron-folic acid — one tablet daily throughout pregnancy and 3 months after", bn: "আয়রন-ফলিক অ্যাসিড — পুরো গর্ভকাল ও প্রসবের পর ৩ মাস প্রতিদিন একটি" },
    { en: "Calcium — usually from the 2nd trimester; take it at a different time from iron", bn: "ক্যালসিয়াম — সাধারণত দ্বিতীয় তিন মাস থেকে; আয়রনের সাথে নয়, আলাদা সময়ে খান" },
    { en: "Deworming tablet once in the 2nd or 3rd trimester if your doctor advises", bn: "চিকিৎসকের পরামর্শে দ্বিতীয় বা তৃতীয় তিন মাসে একবার কৃমিনাশক" },
  ],

  myths: [
    {
      myth: { en: "Eat less so the baby stays small and delivery is easy.", bn: "কম খেলে বাচ্চা ছোট হবে, প্রসব সহজ হবে।" },
      fact: { en: "Eating too little causes low birth weight, weak babies and anaemic mothers. A healthy-sized baby is safer for both.", bn: "কম খেলে শিশু কম ওজনের ও দুর্বল হয়, মা রক্তস্বল্পতায় ভোগেন। স্বাভাবিক ওজনের শিশুই মা ও শিশু দুজনের জন্য নিরাপদ।" },
    },
    {
      myth: { en: "You must eat for two.", bn: "দুজনের জন্য দ্বিগুণ খেতে হবে।" },
      fact: { en: "You need only about 340–450 extra kcal in the 2nd and 3rd trimesters — one extra small meal, not double portions.", bn: "দ্বিতীয় ও তৃতীয় তিন মাসে মাত্র ৩৪০–৪৫০ কিলোক্যালরি বেশি লাগে — এক বেলা বাড়তি ছোট খাবার, দ্বিগুণ নয়।" },
    },
    {
      myth: { en: "Saffron or coconut water makes the baby fair.", bn: "জাফরান বা ডাবের পানি খেলে বাচ্চা ফর্সা হয়।" },
      fact: { en: "Skin colour is decided by genes. Coconut water is a fine drink, but it doesn't change the baby's complexion.", bn: "গায়ের রং নির্ধারণ করে জিন। ডাবের পানি ভালো পানীয়, তবে এতে শিশুর গায়ের রং বদলায় না।" },
    },
    {
      myth: { en: "Any papaya causes miscarriage.", bn: "যেকোনো পেঁপে খেলে গর্ভপাত হয়।" },
      fact: { en: "Fully ripe papaya in normal amounts is safe and good for constipation. Avoid unripe or semi-ripe papaya.", bn: "পুরোপুরি পাকা পেঁপে স্বাভাবিক পরিমাণে নিরাপদ এবং কোষ্ঠকাঠিন্যে উপকারী। কাঁচা বা আধা-পাকা পেঁপে এড়িয়ে চলুন।" },
    },
    {
      myth: { en: "Pregnant women shouldn't eat fish, eggs or certain meats.", bn: "গর্ভবতী নারীর মাছ, ডিম বা কিছু মাংস খাওয়া নিষেধ।" },
      fact: { en: "Well-cooked fish, eggs and meat are among the best pregnancy foods. Food taboos often leave mothers short of protein and iron.", bn: "ভালোভাবে রান্না করা মাছ, ডিম ও মাংস গর্ভাবস্থার সেরা খাবারের মধ্যে পড়ে। খাবারের নিষেধাজ্ঞা প্রায়ই মায়েদের প্রোটিন ও আয়রনের ঘাটতিতে ফেলে।" },
    },
    {
      myth: { en: "Eating ghee makes delivery easier.", bn: "ঘি খেলে প্রসব সহজ হয়।" },
      fact: { en: "There is no evidence for this. Extra ghee only adds calories and weight; a balanced diet and regular check-ups help most.", bn: "এর কোনো প্রমাণ নেই। বাড়তি ঘি শুধু ক্যালরি ও ওজন বাড়ায়; সুষম খাবার ও নিয়মিত চেকআপই সবচেয়ে বেশি কাজে দেয়।" },
    },
  ],

  danger: {
    en: ["Bleeding from the vagina", "Severe headache, blurred vision or fits", "Swelling of face and hands", "High fever", "Severe belly pain", "Baby moving less than usual", "Water breaking before labour", "Vomiting so much you can't keep food or water down"],
    bn: ["যোনিপথে রক্তপাত", "তীব্র মাথাব্যথা, চোখে ঝাপসা দেখা বা খিঁচুনি", "মুখ ও হাত ফুলে যাওয়া", "বেশি জ্বর", "পেটে তীব্র ব্যথা", "শিশুর নড়াচড়া স্বাভাবিকের চেয়ে কম", "প্রসবব্যথার আগেই পানি ভাঙা", "এত বমি যে খাবার বা পানি পেটে থাকে না"],
  },
};
