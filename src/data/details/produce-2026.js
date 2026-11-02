/*
 * Detailed bilingual health content for fruits and vegetables added in 2026-11.
 * Nutrient figures quoted here match the per-100 g values in foods.js (USDA FoodData Central, SR Legacy).
 * Wording is intentionally cautious — foods support health, they do not cure disease.
 */
export default {
  muskmelon: {
    about: {
      en: "Muskmelon (khormuj) is a juicy summer melon with sweet orange flesh, sold in heaps at roadside stalls in Bangladesh during the hot months. It is about 90% water, low in calories and one of the best fruit sources of beta-carotene (vitamin A).",
      bn: "খরমুজ গরমকালের রসালো ফল, কমলা রঙের মিষ্টি শাঁস — গ্রীষ্মে রাস্তার পাশে স্তূপ করে বিক্রি হয়। এর প্রায় ৯০% পানি, ক্যালরি কম, আর ফলের মধ্যে বিটা-ক্যারোটিনের (ভিটামিন এ) অন্যতম ভালো উৎস।",
    },
    season: { en: "Summer, roughly April–June.", bn: "গ্রীষ্মকাল, মোটামুটি এপ্রিল–জুন।" },
    benefits: [
      { icon: "💧", en: ["Hydrating", "Mostly water with potassium (267 mg per 100 g) — refreshing in hot weather."], bn: ["শরীরে পানি জোগায়", "বেশিরভাগই পানি, সাথে পটাশিয়াম (প্রতি ১০০ গ্রামে ২৬৭ মি.গ্রা.) — গরমে সতেজ রাখে।"] },
      { icon: "👁️", en: ["Eyes and skin", "The orange flesh is rich in beta-carotene, which the body turns into vitamin A."], bn: ["চোখ ও ত্বক", "কমলা শাঁসে প্রচুর বিটা-ক্যারোটিন, যা শরীরে ভিটামিন এ-তে পরিণত হয়।"] },
      { icon: "🛡️", en: ["Vitamin C", "About 37 mg per 100 g — around 40% of the daily need."], bn: ["ভিটামিন সি", "প্রতি ১০০ গ্রামে প্রায় ৩৭ মি.গ্রা. — দৈনিক চাহিদার প্রায় ৪০%।"] },
      { icon: "⚖️", en: ["Light on calories", "Only 34 kcal per 100 g, so a big bowl is still a light snack."], bn: ["কম ক্যালরি", "প্রতি ১০০ গ্রামে মাত্র ৩৪ ক্যালরি — বড় এক বাটিও হালকা নাস্তা।"] },
    ],
    goodFor: [
      { en: ["Hot summer days", "Replaces fluid and potassium lost in sweat."], bn: ["গরমের দিন", "ঘামে হারানো পানি ও পটাশিয়াম পূরণ করে।"] },
      { en: ["Weight control", "Sweet taste with few calories."], bn: ["ওজন নিয়ন্ত্রণ", "মিষ্টি স্বাদ, কিন্তু ক্যালরি কম।"] },
      { en: ["Low vitamin A intake", "A tasty source of beta-carotene for children and adults."], bn: ["ভিটামিন এ-র ঘাটতি", "শিশু ও বড়দের জন্য বিটা-ক্যারোটিনের সুস্বাদু উৎস।"] },
    ],
    howToEat: [
      { en: "Wash the rind well before cutting — the knife can carry dirt from the skin into the flesh.", bn: "কাটার আগে খোসা ভালো করে ধুয়ে নিন — নইলে ছুরির সাথে খোসার ময়লা শাঁসে চলে যায়।" },
      { en: "Eat it fresh and chilled as a snack, or blend into a juice without added sugar.", bn: "ঠান্ডা করে নাস্তা হিসেবে খান, বা চিনি ছাড়া জুস বানান।" },
      { en: "Refrigerate cut melon and finish it within a day or two.", bn: "কাটা খরমুজ ফ্রিজে রাখুন, এক-দুই দিনের মধ্যে খেয়ে ফেলুন।" },
    ],
    cautions: [
      { en: "Cut melon left at room temperature spoils quickly — don't buy pre-cut pieces sitting in the sun.", bn: "কাটা খরমুজ ঘরের তাপমাত্রায় দ্রুত নষ্ট হয় — রোদে রাখা কাটা টুকরা কিনবেন না।" },
      { en: "It is sweet; people with diabetes should keep to a moderate portion.", bn: "এটি মিষ্টি; ডায়াবেটিস থাকলে পরিমাণ মাঝারি রাখুন।" },
    ],
  },

  passionfruit: {
    about: {
      en: "Passion fruit has a wrinkly purple shell filled with fragrant, tangy pulp and edible black seeds. It is grown on a small scale in Bangladesh, mostly in the hill districts and home gardens. Eaten with its seeds, it is one of the highest-fiber fruits.",
      bn: "প্যাশন ফলের খোসা বেগুনি ও কোঁচকানো, ভেতরে সুগন্ধি টক-মিষ্টি শাঁস আর খাওয়ার উপযোগী কালো বিচি। বাংলাদেশে মূলত পার্বত্য জেলা ও বসতবাড়ির বাগানে অল্প পরিসরে চাষ হয়। বিচিসহ খেলে এটি সবচেয়ে বেশি আঁশযুক্ত ফলগুলোর একটি।",
    },
    season: { en: "Grown on a small scale; availability varies by area.", bn: "অল্প পরিসরে চাষ হয়; এলাকাভেদে পাওয়া যায়।" },
    benefits: [
      { icon: "🌀", en: ["Very high in fiber", "10.4 g per 100 g with the seeds — great for digestion and fullness."], bn: ["প্রচুর আঁশ", "বিচিসহ প্রতি ১০০ গ্রামে ১০.৪ গ্রাম — হজম ও পেট ভরাতে চমৎকার।"] },
      { icon: "🛡️", en: ["Vitamin C", "About 30 mg per 100 g supports immunity."], bn: ["ভিটামিন সি", "প্রতি ১০০ গ্রামে প্রায় ৩০ মি.গ্রা. — রোগ প্রতিরোধে সহায়ক।"] },
      { icon: "🩸", en: ["Some iron", "1.6 mg per 100 g; its vitamin C helps absorb it."], bn: ["কিছু আয়রন", "প্রতি ১০০ গ্রামে ১.৬ মি.গ্রা.; এর ভিটামিন সি আয়রন শোষণে সাহায্য করে।"] },
      { icon: "🫀", en: ["Potassium", "348 mg per 100 g, which helps balance blood pressure."], bn: ["পটাশিয়াম", "প্রতি ১০০ গ্রামে ৩৪৮ মি.গ্রা., যা রক্তচাপের ভারসাম্যে সাহায্য করে।"] },
    ],
    goodFor: [
      { en: ["Constipation", "Its seeds and pulp add a lot of fiber."], bn: ["কোষ্ঠকাঠিন্য", "বিচি ও শাঁসে প্রচুর আঁশ।"] },
      { en: ["Blood sugar control", "High fiber slows down how fast its sugar is absorbed."], bn: ["রক্তে শর্করা নিয়ন্ত্রণ", "বেশি আঁশ চিনি শোষণের গতি কমায়।"] },
    ],
    howToEat: [
      { en: "Choose ripe fruit with a wrinkled skin, cut in half and scoop out the pulp with the seeds.", bn: "কোঁচকানো খোসার পাকা ফল বেছে নিন, মাঝখান থেকে কেটে বিচিসহ শাঁস চামচ দিয়ে তুলে খান।" },
      { en: "Stir the pulp into yogurt or water with a squeeze of lemon for a fresh drink.", bn: "শাঁস টক দই বা পানিতে মিশিয়ে, একটু লেবু দিয়ে সতেজ পানীয় বানান।" },
    ],
    cautions: [
      { en: "Eat only ripe fruit — unripe passion fruit contains natural cyanide-forming compounds.", bn: "শুধু পাকা ফল খান — কাঁচা প্যাশন ফলে প্রাকৃতিক সায়ানাইড-তৈরিকারী যৌগ থাকে।" },
      { en: "People with a latex allergy sometimes react to passion fruit.", bn: "ল্যাটেক্সে অ্যালার্জি থাকলে কারও কারও প্যাশন ফলেও প্রতিক্রিয়া হয়।" },
    ],
  },

  mulberry: {
    about: {
      en: "Mulberry (tut fol) trees grow in villages across Bangladesh, partly because their leaves feed silkworms in Rajshahi. The small berries turn from red to deep purple-black in spring and are sweet-tart and juicy. For a fruit, they are notably rich in iron.",
      bn: "তুঁত গাছ বাংলাদেশের গ্রামে গ্রামে দেখা যায় — রাজশাহীতে এর পাতা রেশম পোকার খাবার। বসন্তে ছোট ফলগুলো লাল থেকে গাঢ় বেগুনি-কালো হয়, স্বাদ টক-মিষ্টি ও রসালো। ফল হিসেবে এতে আয়রন বেশ ভালো পরিমাণে থাকে।",
    },
    season: { en: "Spring, around March–April.", bn: "বসন্তকাল, মোটামুটি মার্চ–এপ্রিল।" },
    benefits: [
      { icon: "🩸", en: ["Iron-rich fruit", "1.85 mg iron per 100 g — high for a fruit — with vitamin C to help absorb it."], bn: ["আয়রনসমৃদ্ধ ফল", "প্রতি ১০০ গ্রামে ১.৮৫ মি.গ্রা. আয়রন — ফলের তুলনায় বেশি — সাথে শোষণে সহায়ক ভিটামিন সি।"] },
      { icon: "🛡️", en: ["Vitamin C", "About 36 mg per 100 g."], bn: ["ভিটামিন সি", "প্রতি ১০০ গ্রামে প্রায় ৩৬ মি.গ্রা.।"] },
      { icon: "✨", en: ["Anthocyanins", "The dark colour comes from anthocyanin antioxidants."], bn: ["অ্যান্থোসায়ানিন", "গাঢ় রং আসে অ্যান্থোসায়ানিন অ্যান্টিঅক্সিডেন্ট থেকে।"] },
      { icon: "⚖️", en: ["Low calorie", "Only 43 kcal per 100 g."], bn: ["কম ক্যালরি", "প্রতি ১০০ গ্রামে মাত্র ৪৩ ক্যালরি।"] },
    ],
    goodFor: [
      { en: ["Anaemia", "Iron plus vitamin C in one fruit."], bn: ["রক্তস্বল্পতা", "একই ফলে আয়রন ও ভিটামিন সি।"] },
      { en: ["Children's snacks", "Sweet, colourful and free from the tree."], bn: ["শিশুদের নাস্তা", "মিষ্টি, রঙিন আর গাছেই পাওয়া যায়।"] },
    ],
    howToEat: [
      { en: "Pick fully dark, soft berries and rinse gently just before eating.", bn: "পুরো গাঢ় রঙের নরম ফল তুলে খাওয়ার ঠিক আগে আলতো করে ধুয়ে নিন।" },
      { en: "Eat fresh, add to yogurt, or cook into a quick jam with little sugar.", bn: "তাজা খান, দইয়ে মেশান, বা অল্প চিনিতে জ্যাম বানান।" },
    ],
    cautions: [
      { en: "Unripe red berries are sour and can upset the stomach.", bn: "কাঁচা লাল ফল টক, পেটে অস্বস্তি করতে পারে।" },
      { en: "They spoil within a day or two — keep them in the fridge.", bn: "এক-দুই দিনেই নষ্ট হয় — ফ্রিজে রাখুন।" },
    ],
  },

  fig: {
    about: {
      en: "The common fig (anjir) is a soft, sweet fruit with a jammy, seed-filled centre. Fresh figs are mostly imported and found in supermarkets, while dried figs are sold all year. Values here are for fresh figs — dried figs have several times more sugar and calories per 100 g.",
      bn: "আঞ্জির নরম, মিষ্টি ফল, ভেতরে জ্যামের মতো বিচিভরা শাঁস। তাজা আঞ্জির মূলত আমদানি করা, সুপারশপে পাওয়া যায়; শুকনো আঞ্জির সারা বছর মেলে। এখানের মান তাজা আঞ্জিরের — শুকনো আঞ্জিরে প্রতি ১০০ গ্রামে চিনি ও ক্যালরি কয়েক গুণ বেশি।",
    },
    season: { en: "Fresh figs: short seasons, mostly imported. Dried: all year.", bn: "তাজা: অল্প সময়, মূলত আমদানি। শুকনো: সারা বছর।" },
    benefits: [
      { icon: "🌀", en: ["Fiber for digestion", "2.9 g per 100 g; the tiny seeds add gentle roughage."], bn: ["হজমে আঁশ", "প্রতি ১০০ গ্রামে ২.৯ গ্রাম; ছোট বিচিগুলোও আঁশ জোগায়।"] },
      { icon: "🦴", en: ["Some calcium", "35 mg per 100 g — more than most fresh fruits."], bn: ["কিছু ক্যালসিয়াম", "প্রতি ১০০ গ্রামে ৩৫ মি.গ্রা. — বেশিরভাগ তাজা ফলের চেয়ে বেশি।"] },
      { icon: "🫀", en: ["Potassium", "232 mg per 100 g."], bn: ["পটাশিয়াম", "প্রতি ১০০ গ্রামে ২৩২ মি.গ্রা.।"] },
    ],
    goodFor: [
      { en: ["Constipation", "Fresh or soaked dried figs are a traditional, gentle remedy."], bn: ["কোষ্ঠকাঠিন্য", "তাজা বা ভেজানো শুকনো আঞ্জির প্রচলিত ও মৃদু উপায়।"] },
      { en: ["A sweet treat instead of sweets", "Natural sweetness with fiber."], bn: ["মিষ্টির বদলে মিষ্টি কিছু", "আঁশসহ প্রাকৃতিক মিষ্টতা।"] },
    ],
    howToEat: [
      { en: "Eat fresh figs whole, skin and all, after rinsing.", bn: "ধুয়ে খোসাসহ পুরো তাজা আঞ্জির খান।" },
      { en: "Soak 2–3 dried figs overnight and eat them in the morning.", bn: "২–৩টি শুকনো আঞ্জির রাতে ভিজিয়ে সকালে খান।" },
    ],
    cautions: [
      { en: "Dried figs are sugar-dense — people with diabetes should count them carefully.", bn: "শুকনো আঞ্জিরে চিনি ঘন — ডায়াবেটিস থাকলে হিসাব করে খান।" },
      { en: "The milky sap of the fig tree can irritate skin; people with latex allergy may react.", bn: "আঞ্জির গাছের দুধের মতো কষ ত্বকে জ্বালা করতে পারে; ল্যাটেক্স অ্যালার্জিতে প্রতিক্রিয়া হতে পারে।" },
    ],
  },

  greenbanana: {
    about: {
      en: "Green banana (kacha kola) is a cooking banana, used in bhorta, bhaji and light jhol across Bangladesh. Before it ripens, most of its carbohydrate is starch — much of it resistant starch, which behaves like fiber in the gut. Values are per 100 g raw; cooking changes the starch.",
      bn: "কাঁচা কলা রান্নার কলা — বাংলাদেশে ভর্তা, ভাজি ও পাতলা ঝোলে ব্যবহৃত হয়। পাকার আগে এর শর্করার বেশিরভাগই শ্বেতসার — যার বড় অংশ রেজিস্ট্যান্ট স্টার্চ, যা অন্ত্রে আঁশের মতো কাজ করে। মান প্রতি ১০০ গ্রাম কাঁচা অবস্থার; রান্নায় শ্বেতসার বদলায়।",
    },
    season: { en: "All year.", bn: "সারা বছর।" },
    benefits: [
      { icon: "🌀", en: ["Resistant starch", "Feeds good gut bacteria and keeps you full longer."], bn: ["রেজিস্ট্যান্ট স্টার্চ", "অন্ত্রের উপকারী ব্যাকটেরিয়াকে পুষ্টি দেয়, অনেকক্ষণ পেট ভরা রাখে।"] },
      { icon: "🫀", en: ["Potassium", "431 mg per 100 g."], bn: ["পটাশিয়াম", "প্রতি ১০০ গ্রামে ৪৩১ মি.গ্রা.।"] },
      { icon: "🩸", en: ["Gentle on blood sugar", "Green banana raises blood sugar more slowly than ripe banana."], bn: ["রক্তে শর্করায় মৃদু প্রভাব", "পাকা কলার চেয়ে কাঁচা কলা রক্তে শর্করা ধীরে বাড়ায়।"] },
    ],
    goodFor: [
      { en: ["Recovery from diarrhoea", "Studies at icddr,b in Bangladesh found cooked green banana helped children recover from diarrhoea faster, alongside ORS."], bn: ["ডায়রিয়া থেকে সেরে ওঠা", "বাংলাদেশের আইসিডিডিআর,বি-র গবেষণায় স্যালাইনের পাশাপাশি রান্না করা কাঁচা কলা শিশুদের দ্রুত সেরে উঠতে সাহায্য করেছে।"] },
      { en: ["Diabetes", "A better choice than ripe banana or extra rice."], bn: ["ডায়াবেটিস", "পাকা কলা বা বাড়তি ভাতের চেয়ে ভালো বিকল্প।"] },
    ],
    howToEat: [
      { en: "Boil and mash into kacha kola bhorta with mustard oil, onion and green chili.", bn: "সেদ্ধ করে সরিষার তেল, পেঁয়াজ ও কাঁচা মরিচ দিয়ে কাঁচা কলার ভর্তা বানান।" },
      { en: "Add to a light fish or vegetable jhol — easy on an upset stomach.", bn: "মাছ বা সবজির পাতলা ঝোলে দিন — পেটের অসুখে সহজপাচ্য।" },
    ],
    cautions: [
      { en: "Always cook it — raw green banana is hard to digest.", bn: "সবসময় রান্না করে খান — কাঁচা অবস্থায় হজম করা কঠিন।" },
      { en: "Its sap stains hands and clothes; oil your hands before peeling.", bn: "এর কষে হাত ও কাপড়ে দাগ লাগে; খোসা ছাড়ানোর আগে হাতে তেল মাখুন।" },
    ],
  },

  turnip: {
    about: {
      en: "Turnip (shalgom) is a crisp, mildly peppery winter root from the cabbage family. In Bangladesh it is cooked in mixed vegetable dishes, curries and pickles. It is low in calories and gives vitamin C, and its leaves are edible greens too.",
      bn: "শালগম বাঁধাকপি পরিবারের মচমচে, হালকা ঝাঁঝালো শীতের মূল। বাংলাদেশে মিশ্র সবজি, তরকারি ও আচারে রান্না হয়। ক্যালরি কম, ভিটামিন সি জোগায় — আর এর পাতাও শাক হিসেবে খাওয়া যায়।",
    },
    season: { en: "Winter, about November–February.", bn: "শীতকাল, মোটামুটি নভেম্বর–ফেব্রুয়ারি।" },
    benefits: [
      { icon: "🛡️", en: ["Vitamin C", "21 mg per 100 g."], bn: ["ভিটামিন সি", "প্রতি ১০০ গ্রামে ২১ মি.গ্রা.।"] },
      { icon: "⚖️", en: ["Very low calorie", "Only 28 kcal per 100 g — a lighter swap for potato in curries."], bn: ["খুব কম ক্যালরি", "প্রতি ১০০ গ্রামে মাত্র ২৮ ক্যালরি — তরকারিতে আলুর হালকা বিকল্প।"] },
      { icon: "🥦", en: ["Cruciferous compounds", "Like cabbage and cauliflower, it contains glucosinolates studied for their protective effects."], bn: ["ক্রুসিফেরাস যৌগ", "বাঁধাকপি ও ফুলকপির মতো এতেও আছে গ্লুকোসিনোলেট, যার সুরক্ষামূলক গুণ নিয়ে গবেষণা হচ্ছে।"] },
    ],
    goodFor: [
      { en: ["Weight control", "Bulky, filling and low in calories."], bn: ["ওজন নিয়ন্ত্রণ", "পেট ভরায়, ক্যালরি কম।"] },
      { en: ["Diabetes", "Much less starch than potato."], bn: ["ডায়াবেটিস", "আলুর চেয়ে অনেক কম শ্বেতসার।"] },
    ],
    howToEat: [
      { en: "Peel, cube and cook with other winter vegetables or with fish.", bn: "খোসা ছাড়িয়ে টুকরা করে অন্য শীতের সবজি বা মাছের সাথে রান্না করুন।" },
      { en: "Young, tender turnips can be grated raw into a salad.", bn: "কচি শালগম কুচি করে কাঁচা সালাদে দেওয়া যায়।" },
    ],
    cautions: [
      { en: "Very large amounts of raw cabbage-family vegetables may affect the thyroid when iodine intake is low — use iodised salt.", bn: "আয়োডিন কম পেলে খুব বেশি কাঁচা বাঁধাকপি-জাতীয় সবজি থাইরয়েডে প্রভাব ফেলতে পারে — আয়োডিনযুক্ত লবণ ব্যবহার করুন।" },
    ],
  },

  yam: {
    about: {
      en: "Mete alu (yam, Dioscorea) is a large tuber with white or purple flesh, grown in homesteads and hill areas of Bangladesh. It is starchy like potato but has more fiber and is exceptionally rich in potassium.",
      bn: "মেটে আলু (Dioscorea) সাদা বা বেগুনি শাঁসের বড় কন্দ, বাংলাদেশের বসতবাড়ি ও পাহাড়ি এলাকায় চাষ হয়। আলুর মতো শ্বেতসারযুক্ত, কিন্তু আঁশ বেশি আর পটাশিয়াম অসাধারণ বেশি।",
    },
    season: { en: "Mainly winter, when the tubers are dug up.", bn: "মূলত শীতকাল, যখন কন্দ তোলা হয়।" },
    benefits: [
      { icon: "🫀", en: ["Very high potassium", "816 mg per 100 g — among the richest everyday foods."], bn: ["অনেক বেশি পটাশিয়াম", "প্রতি ১০০ গ্রামে ৮১৬ মি.গ্রা. — প্রতিদিনের খাবারের মধ্যে সবচেয়ে বেশিগুলোর একটি।"] },
      { icon: "🌀", en: ["More fiber than potato", "4.1 g per 100 g."], bn: ["আলুর চেয়ে বেশি আঁশ", "প্রতি ১০০ গ্রামে ৪.১ গ্রাম।"] },
      { icon: "⚡", en: ["Steady energy", "118 kcal per 100 g, mostly complex carbohydrate."], bn: ["ধীরে শক্তি জোগায়", "প্রতি ১০০ গ্রামে ১১৮ ক্যালরি, মূলত জটিল শর্করা।"] },
    ],
    goodFor: [
      { en: ["Healthy blood pressure", "Potassium helps balance the effect of salt."], bn: ["সুস্থ রক্তচাপ", "পটাশিয়াম লবণের প্রভাবে ভারসাম্য আনে।"] },
      { en: ["A change from rice or potato", "Similar energy with more fiber."], bn: ["ভাত বা আলুর বদলে", "প্রায় একই শক্তি, আঁশ বেশি।"] },
    ],
    howToEat: [
      { en: "Peel, cut and cook well — in a curry with fish or shrimp, or boiled and mashed as bhorta.", bn: "খোসা ছাড়িয়ে কেটে ভালোভাবে রান্না করুন — মাছ বা চিংড়ি দিয়ে তরকারি, বা সেদ্ধ করে ভর্তা।" },
      { en: "Wear gloves or oil your hands while peeling.", bn: "খোসা ছাড়ানোর সময় গ্লাভস পরুন বা হাতে তেল মাখুন।" },
    ],
    cautions: [
      { en: "Never eat it raw — always cook thoroughly. The raw tuber can cause itching in the mouth and hands.", bn: "কখনো কাঁচা খাবেন না — সবসময় ভালোভাবে রান্না করুন। কাঁচা কন্দে মুখ ও হাত চুলকাতে পারে।" },
      { en: "People with kidney disease who must limit potassium should ask their doctor first.", bn: "কিডনি রোগে যাদের পটাশিয়াম সীমিত রাখতে হয়, তারা আগে ডাক্তারের পরামর্শ নিন।" },
    ],
  },

  springonion: {
    about: {
      en: "Spring onion (peyaj pata) is the young onion with its green leaves, sold in bunches in winter markets. The green tops are used in bhaji, bhorta, omelettes and fried rice. They are low in calories and rich in vitamin K.",
      bn: "পেঁয়াজ পাতা হলো সবুজ পাতাসহ কচি পেঁয়াজ, শীতের বাজারে আঁটি বেঁধে বিক্রি হয়। ভাজি, ভর্তা, ডিমভাজি ও ফ্রায়েড রাইসে ব্যবহৃত হয়। ক্যালরি কম, ভিটামিন কে প্রচুর।",
    },
    season: { en: "Mainly winter; available most of the year.", bn: "মূলত শীতকাল; বছরের বেশিরভাগ সময় পাওয়া যায়।" },
    benefits: [
      { icon: "🦴", en: ["Vitamin K and calcium", "Rich in vitamin K and 72 mg calcium per 100 g — both used by bones."], bn: ["ভিটামিন কে ও ক্যালসিয়াম", "প্রচুর ভিটামিন কে আর প্রতি ১০০ গ্রামে ৭২ মি.গ্রা. ক্যালসিয়াম — দুটিই হাড়ের কাজে লাগে।"] },
      { icon: "🛡️", en: ["Vitamin C", "About 19 mg per 100 g."], bn: ["ভিটামিন সি", "প্রতি ১০০ গ্রামে প্রায় ১৯ মি.গ্রা.।"] },
      { icon: "🩸", en: ["Some iron", "1.48 mg per 100 g."], bn: ["কিছু আয়রন", "প্রতি ১০০ গ্রামে ১.৪৮ মি.গ্রা.।"] },
    ],
    goodFor: [
      { en: ["Adding flavour without salt", "A handful gives dishes aroma, so you need less salt."], bn: ["লবণ কম, স্বাদ বেশি", "এক মুঠো দিলেই সুগন্ধ আসে, লবণ কম লাগে।"] },
    ],
    howToEat: [
      { en: "Stir-fry with eggs, or make peyaj patar bhaji with a little oil and garlic.", bn: "ডিম দিয়ে ভাজুন, বা অল্প তেল ও রসুন দিয়ে পেঁয়াজ পাতার ভাজি করুন।" },
      { en: "Sprinkle chopped greens over dal, soup or khichuri at the end.", bn: "কুচানো পাতা শেষে ডাল, স্যুপ বা খিচুড়ির ওপর ছিটিয়ে দিন।" },
    ],
    cautions: [
      { en: "If you take warfarin, keep your intake of vitamin K–rich greens steady from day to day.", bn: "ওয়ারফারিন খেলে ভিটামিন কে-সমৃদ্ধ শাক প্রতিদিন মোটামুটি একই পরিমাণে খান।" },
      { en: "Wash well between the leaves — soil collects at the base.", bn: "পাতার ফাঁকে ভালো করে ধুয়ে নিন — গোড়ায় মাটি জমে থাকে।" },
    ],
  },

  lettuce: {
    about: {
      en: "Lettuce is a tender salad leaf grown more and more in Bangladesh in winter, and sold in city markets and supermarkets. It is about 95% water and very low in calories, while green leaf lettuce gives useful vitamin A and vitamin K.",
      bn: "লেটুস নরম সালাদ পাতা, বাংলাদেশে শীতে এর চাষ বাড়ছে, শহরের বাজার ও সুপারশপে পাওয়া যায়। প্রায় ৯৫% পানি, ক্যালরি খুবই কম — সবুজ লেটুসে ভিটামিন এ ও ভিটামিন কে ভালো পরিমাণে থাকে।",
    },
    season: { en: "Winter.", bn: "শীতকাল।" },
    benefits: [
      { icon: "⚖️", en: ["Almost no calories", "Only 15 kcal per 100 g — adds volume to meals."], bn: ["প্রায় ক্যালরিশূন্য", "প্রতি ১০০ গ্রামে মাত্র ১৫ ক্যালরি — খাবারের পরিমাণ বাড়ায়।"] },
      { icon: "👁️", en: ["Vitamin A", "Green leaf lettuce is rich in beta-carotene."], bn: ["ভিটামিন এ", "সবুজ লেটুসে প্রচুর বিটা-ক্যারোটিন।"] },
      { icon: "💧", en: ["Hydrating", "About 95% water."], bn: ["শরীরে পানি জোগায়", "প্রায় ৯৫% পানি।"] },
    ],
    goodFor: [
      { en: ["Weight loss", "Fill half your plate with salad to eat less rice without feeling hungry."], bn: ["ওজন কমানো", "থালার অর্ধেক সালাদে ভরলে ক্ষুধা ছাড়াই ভাত কম খাওয়া যায়।"] },
    ],
    howToEat: [
      { en: "Wash leaves one by one in clean water and dry them before making a salad.", bn: "সালাদ বানানোর আগে পাতা একটি একটি করে পরিষ্কার পানিতে ধুয়ে শুকিয়ে নিন।" },
      { en: "Use as a wrap for chicken or egg, or add to sandwiches.", bn: "মুরগি বা ডিম মুড়িয়ে খান, বা স্যান্ডউইচে দিন।" },
    ],
    cautions: [
      { en: "It is eaten raw, so washing with safe water matters — unwashed salad leaves can spread diarrhoea.", bn: "কাঁচা খাওয়া হয়, তাই নিরাপদ পানিতে ধোয়া জরুরি — না ধোয়া সালাদ পাতা থেকে ডায়রিয়া ছড়াতে পারে।" },
      { en: "If you take warfarin, keep your vitamin K intake steady.", bn: "ওয়ারফারিন খেলে ভিটামিন কে গ্রহণ প্রতিদিন একই রকম রাখুন।" },
    ],
  },

  frenchbean: {
    about: {
      en: "French beans (green beans, forashi shim) are slim, tender pods grown in winter in Bangladesh. They cook quickly, stay crunchy and fit into bhaji, mixed vegetables and fried rice. They are low in calories with fiber, folate and vitamin K.",
      bn: "ফরাসি শিম সরু, কচি শুঁটি, বাংলাদেশে শীতে চাষ হয়। তাড়াতাড়ি রান্না হয়, মচমচে থাকে — ভাজি, মিশ্র সবজি ও ফ্রায়েড রাইসে মানায়। ক্যালরি কম, সাথে আঁশ, ফোলেট ও ভিটামিন কে।",
    },
    season: { en: "Winter, about November–February.", bn: "শীতকাল, মোটামুটি নভেম্বর–ফেব্রুয়ারি।" },
    benefits: [
      { icon: "🌀", en: ["Fiber", "2.7 g per 100 g."], bn: ["আঁশ", "প্রতি ১০০ গ্রামে ২.৭ গ্রাম।"] },
      { icon: "🤰", en: ["Folate", "Contains folate, important before and during pregnancy."], bn: ["ফোলেট", "এতে ফোলেট আছে, যা গর্ভধারণের আগে ও সময়ে জরুরি।"] },
      { icon: "⚖️", en: ["Low calorie", "31 kcal per 100 g."], bn: ["কম ক্যালরি", "প্রতি ১০০ গ্রামে ৩১ ক্যালরি।"] },
    ],
    goodFor: [
      { en: ["Diabetes and weight control", "Low in starch and sugar, high in bulk."], bn: ["ডায়াবেটিস ও ওজন নিয়ন্ত্রণ", "শ্বেতসার ও চিনি কম, পেট ভরায়।"] },
    ],
    howToEat: [
      { en: "Top and tail, cut into pieces and stir-fry or steam for a few minutes so they stay bright green.", bn: "দুই মাথা কেটে টুকরা করে কয়েক মিনিট ভাজুন বা ভাপে দিন, যেন উজ্জ্বল সবুজ থাকে।" },
      { en: "Add to egg fried rice or mixed vegetable with carrot and cauliflower.", bn: "ডিম ফ্রায়েড রাইস বা গাজর-ফুলকপির মিশ্র সবজিতে দিন।" },
    ],
    cautions: [
      { en: "Cook before eating — raw beans contain lectins that can upset the stomach.", bn: "রান্না করে খান — কাঁচা শিমে লেকটিন থাকে, যা পেটে অস্বস্তি করতে পারে।" },
    ],
  },

  squash: {
    about: {
      en: "In Bangladesh, 'squash' usually means chayote (iskus) — a pale green, pear-shaped gourd first grown in the hill districts and now common in winter markets everywhere. It has a mild taste, very few calories and a good amount of folate.",
      bn: "বাংলাদেশে 'স্কোয়াশ' বলতে সাধারণত ইসকুসকে (চায়োটে) বোঝায় — হালকা সবুজ, নাশপাতির মতো আকারের সবজি, প্রথমে পার্বত্য জেলায় চাষ হতো, এখন শীতে সারা দেশের বাজারে পাওয়া যায়। স্বাদ মৃদু, ক্যালরি খুব কম, আর ফোলেট ভালো পরিমাণে আছে।",
    },
    season: { en: "Mainly winter.", bn: "মূলত শীতকাল।" },
    benefits: [
      { icon: "⚖️", en: ["Very low calorie", "Only 19 kcal per 100 g."], bn: ["খুব কম ক্যালরি", "প্রতি ১০০ গ্রামে মাত্র ১৯ ক্যালরি।"] },
      { icon: "🤰", en: ["Folate", "A good source of folate, needed for new cells and in pregnancy."], bn: ["ফোলেট", "ফোলেটের ভালো উৎস — নতুন কোষ তৈরি ও গর্ভাবস্থায় দরকারি।"] },
      { icon: "🌀", en: ["Easy to digest", "Soft when cooked, with 1.7 g fiber per 100 g."], bn: ["সহজপাচ্য", "রান্নার পর নরম, প্রতি ১০০ গ্রামে ১.৭ গ্রাম আঁশ।"] },
    ],
    goodFor: [
      { en: ["Diabetes and weight control", "Very low in sugar and starch."], bn: ["ডায়াবেটিস ও ওজন নিয়ন্ত্রণ", "চিনি ও শ্বেতসার খুবই কম।"] },
      { en: ["Light meals for the sick or elderly", "Mild and soft."], bn: ["অসুস্থ বা বয়স্কদের হালকা খাবার", "মৃদু স্বাদ ও নরম।"] },
    ],
    howToEat: [
      { en: "Peel, remove the soft seed, and cook like lau — with fish, shrimp or dal.", bn: "খোসা ছাড়িয়ে নরম বিচি ফেলে লাউয়ের মতো রান্না করুন — মাছ, চিংড়ি বা ডাল দিয়ে।" },
      { en: "Stir-fry thin slices with garlic as a quick bhaji.", bn: "পাতলা ফালি রসুন দিয়ে ভেজে ঝটপট ভাজি করুন।" },
    ],
    cautions: [
      { en: "The sap released while peeling can make hands sticky and itchy — peel under running water or wear gloves.", bn: "খোসা ছাড়ানোর সময় বের হওয়া কষে হাত আঠালো ও চুলকাতে পারে — চলমান পানির নিচে খোসা ছাড়ান বা গ্লাভস পরুন।" },
    ],
  },
};
