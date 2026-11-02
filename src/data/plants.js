/*
 * Common medicinal plants of Bangladesh.
 * Educational content only — traditional uses and early research, not medical advice.
 * Always talk to a doctor before using herbs for an illness, during pregnancy or with regular medicines.
 */

export const PLANT_TAGS = [
  { id: "men", en: "Men's health", bn: "পুরুষের স্বাস্থ্য" },
  { id: "women", en: "Women's health", bn: "নারীর স্বাস্থ্য" },
  { id: "digestion", en: "Digestion", bn: "হজম" },
  { id: "respiratory", en: "Cough & cold", bn: "সর্দি-কাশি" },
  { id: "skin", en: "Skin & hair", bn: "ত্বক ও চুল" },
  { id: "diabetes", en: "Blood sugar", bn: "ডায়াবেটিস" },
  { id: "heart", en: "Heart & BP", bn: "হৃদ্‌যন্ত্র ও রক্তচাপ" },
  { id: "immunity", en: "Immunity", bn: "রোগ প্রতিরোধ" },
  { id: "mind", en: "Stress, sleep & memory", bn: "মানসিক চাপ, ঘুম ও স্মৃতি" },
  { id: "liver", en: "Liver", bn: "লিভার" },
  { id: "joints", en: "Joints & pain", bn: "গিঁট ও ব্যথা" },
  { id: "urinary", en: "Urinary & kidney", bn: "প্রস্রাব ও কিডনি" },
];

export const PLANTS = [
  {
    id: "tulsi",
    sci: "Ocimum tenuiflorum",
    foodId: "basil",
    tone: "emerald",
    tags: ["respiratory", "mind", "immunity", "diabetes"],
    name: { en: "Holy basil (Tulsi)", bn: "তুলসী" },
    parts: { en: "Leaves, seeds", bn: "পাতা, বীজ" },
    summary: {
      en: "A sacred household plant whose leaves are a classic home remedy for cough and cold in South Asia.",
      bn: "ঘরের উঠানের পরিচিত গাছ; সর্দি-কাশিতে তুলসী পাতা উপমহাদেশের অন্যতম জনপ্রিয় ঘরোয়া টোটকা।",
    },
    uses: {
      en: [
        "Traditionally used to soothe cough, cold and sore throat",
        "Small studies suggest it may help manage stress",
        "May help modestly lower blood sugar",
        "Contains antioxidants and anti-inflammatory compounds",
      ],
      bn: [
        "সর্দি, কাশি ও গলাব্যথায় প্রচলিতভাবে ব্যবহৃত হয়",
        "ছোট কিছু গবেষণা বলছে মানসিক চাপ কমাতে সাহায্য করতে পারে",
        "রক্তে চিনি সামান্য কমাতে সাহায্য করতে পারে",
        "এতে অ্যান্টিঅক্সিডেন্ট ও প্রদাহনাশক উপাদান আছে",
      ],
    },
    howToUse: {
      en: [
        "Chew 4–5 washed fresh leaves",
        "Boil a few leaves in water with ginger and honey to make tea",
        "Mix tulsi juice with a little honey for cough",
      ],
      bn: [
        "৪–৫টি ধোয়া তাজা পাতা চিবিয়ে খান",
        "কয়েকটি পাতা আদা দিয়ে পানিতে ফুটিয়ে মধু মিশিয়ে চা বানান",
        "কাশিতে তুলসী পাতার রসের সাথে সামান্য মধু মিশিয়ে খান",
      ],
    },
    cautions: {
      en: [
        "Avoid medicinal amounts during pregnancy or when trying to conceive",
        "May lower blood sugar — take care if you use diabetes medicine",
        "May slow blood clotting; stop 2 weeks before surgery",
      ],
      bn: [
        "গর্ভাবস্থায় বা সন্তান নেওয়ার চেষ্টাকালে ওষুধ হিসেবে বেশি পরিমাণে খাবেন না",
        "রক্তে চিনি কমাতে পারে — ডায়াবেটিসের ওষুধ খেলে সতর্ক থাকুন",
        "রক্ত জমাট বাঁধা ধীর করতে পারে; অস্ত্রোপচারের ২ সপ্তাহ আগে বন্ধ করুন",
      ],
    },
  },
  {
    id: "neem",
    sci: "Azadirachta indica",
    foodId: null,
    tone: "lime",
    tags: ["skin"],
    name: { en: "Neem", bn: "নিম" },
    parts: { en: "Leaves, bark, twigs, seed oil", bn: "পাতা, ছাল, ডাল, বীজের তেল" },
    summary: {
      en: "A bitter tree used across Bangladesh for skin care and oral hygiene — the neem twig is a traditional toothbrush.",
      bn: "তেতো স্বাদের পরিচিত গাছ; ত্বকের যত্ন ও দাঁত পরিষ্কারে বহুল ব্যবহৃত — নিমের ডাল দেশের ঐতিহ্যবাহী মেসওয়াক।",
    },
    uses: {
      en: [
        "Neem twigs are traditionally chewed to clean teeth and gums",
        "Leaf paste or bath water is used for itching, acne and minor skin problems",
        "Has antibacterial and antifungal properties in lab studies",
        "Bitter leaves are eaten with rice in small amounts in some homes",
      ],
      bn: [
        "দাঁত ও মাড়ি পরিষ্কারে নিমের ডাল চিবানো হয়",
        "চুলকানি, ব্রণ ও ছোটখাটো চর্মরোগে পাতা বাটা বা পাতা-ফোটানো পানিতে গোসল প্রচলিত",
        "গবেষণাগারে ব্যাকটেরিয়া ও ছত্রাকনাশক গুণ দেখা গেছে",
        "অনেক ঘরে অল্প পরিমাণ নিমপাতা ভাজা ভাতের সাথে খাওয়া হয়",
      ],
    },
    howToUse: {
      en: [
        "Use a fresh, washed neem twig as a tooth stick",
        "Boil leaves in water, cool, and use for bathing or washing skin",
        "Fry a few leaves with brinjal (nim-begun) as an occasional dish",
      ],
      bn: [
        "তাজা, ধোয়া নিমের ডাল দাঁতন হিসেবে ব্যবহার করুন",
        "পাতা পানিতে ফুটিয়ে ঠান্ডা করে গোসল বা ত্বক ধোয়ায় ব্যবহার করুন",
        "মাঝেমধ্যে কয়েকটি পাতা বেগুন দিয়ে ভেজে (নিম-বেগুন) খেতে পারেন",
      ],
    },
    cautions: {
      en: [
        "Never give neem oil by mouth — it can be poisonous, especially for children",
        "Avoid neem by mouth during pregnancy and breastfeeding",
        "Long-term or large internal use may harm the liver and lower blood sugar",
      ],
      bn: [
        "নিমের তেল কখনো খাওয়াবেন না — বিশেষ করে শিশুদের জন্য তা বিষাক্ত হতে পারে",
        "গর্ভাবস্থা ও বুকের দুধ খাওয়ানোর সময় নিম খাবেন না",
        "দীর্ঘদিন বা বেশি পরিমাণে খেলে লিভারের ক্ষতি ও রক্তে চিনি কমে যেতে পারে",
      ],
    },
  },
  {
    id: "turmeric",
    sci: "Curcuma longa",
    foodId: "turmeric",
    tone: "amber",
    tags: ["joints", "skin", "immunity"],
    name: { en: "Turmeric", bn: "হলুদ" },
    parts: { en: "Rhizome (root)", bn: "কন্দ (মূল)" },
    summary: {
      en: "The everyday golden spice of Bangladeshi cooking; its main compound curcumin is widely studied for inflammation.",
      bn: "বাঙালি রান্নার প্রতিদিনের মসলা; এর মূল উপাদান কারকিউমিন প্রদাহ কমানোর জন্য ব্যাপকভাবে গবেষণাধীন।",
    },
    uses: {
      en: [
        "May help ease joint pain and stiffness in osteoarthritis",
        "Traditionally applied as paste on minor cuts and bruises",
        "Warm turmeric milk is a home remedy for cold and body ache",
        "Rich in antioxidants",
      ],
      bn: [
        "অস্টিওআর্থ্রাইটিসে গিঁটের ব্যথা ও জড়তা কমাতে সাহায্য করতে পারে",
        "ছোট কাটা-ছেঁড়া ও থেঁতলানোতে হলুদ বাটা লাগানো প্রচলিত",
        "সর্দি ও গা-ব্যথায় গরম হলুদ-দুধ জনপ্রিয় ঘরোয়া টোটকা",
        "অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ",
      ],
    },
    howToUse: {
      en: [
        "Use it daily in curries and dal",
        "Add a pinch of black pepper and some oil or milk — this helps absorption",
        "Stir ½ teaspoon into a glass of warm milk at night",
      ],
      bn: [
        "প্রতিদিন তরকারি ও ডালে ব্যবহার করুন",
        "সাথে এক চিমটি গোলমরিচ ও একটু তেল বা দুধ দিন — এতে শোষণ ভালো হয়",
        "রাতে এক গ্লাস গরম দুধে ½ চা-চামচ হলুদ মিশিয়ে খান",
      ],
    },
    cautions: {
      en: [
        "Cooking amounts are safe; high-dose supplements have been linked to rare liver injury",
        "Avoid supplements with blood thinners or if you have gallstones",
        "Buy pure turmeric — loose powder is sometimes adulterated with colour",
      ],
      bn: [
        "রান্নার পরিমাণ নিরাপদ; বেশি মাত্রার সাপ্লিমেন্টে বিরল ক্ষেত্রে লিভারের ক্ষতি দেখা গেছে",
        "রক্ত পাতলা করার ওষুধ খেলে বা পিত্তথলিতে পাথর থাকলে সাপ্লিমেন্ট খাবেন না",
        "খাঁটি হলুদ কিনুন — খোলা গুঁড়ায় অনেক সময় রং মেশানো থাকে",
      ],
    },
  },
  {
    id: "ginger",
    sci: "Zingiber officinale",
    foodId: "ginger",
    tone: "orange",
    tags: ["digestion", "respiratory", "women"],
    name: { en: "Ginger", bn: "আদা" },
    parts: { en: "Rhizome (root)", bn: "কন্দ (মূল)" },
    summary: {
      en: "A warming kitchen root with good evidence for easing nausea.",
      bn: "রান্নাঘরের পরিচিত ঝাঁঝালো মসলা; বমিভাব কমাতে এর কার্যকারিতার ভালো প্রমাণ আছে।",
    },
    uses: {
      en: [
        "Helps relieve nausea, including mild morning sickness and travel sickness",
        "Traditionally used for cough, cold and sore throat",
        "May aid digestion and reduce bloating",
        "May ease menstrual cramps",
      ],
      bn: [
        "বমিভাব কমাতে সাহায্য করে, যেমন হালকা মর্নিং সিকনেস ও যাত্রাপথের বমি",
        "সর্দি, কাশি ও গলাব্যথায় প্রচলিতভাবে ব্যবহৃত হয়",
        "হজমে সহায়তা ও পেট ফাঁপা কমাতে পারে",
        "মাসিকের ব্যথা কমাতে পারে",
      ],
    },
    howToUse: {
      en: [
        "Add sliced ginger to tea (ada-cha)",
        "Chew a thin slice with a pinch of salt for nausea",
        "Mix ginger juice with honey for cough",
      ],
      bn: [
        "চায়ে আদা কুচি দিয়ে আদা-চা বানান",
        "বমিভাবে এক টুকরো পাতলা আদা সামান্য লবণ দিয়ে চিবান",
        "কাশিতে আদার রস মধুর সাথে মিশিয়ে খান",
      ],
    },
    cautions: {
      en: [
        "Keep to about 4 g a day or less; large amounts can cause heartburn",
        "Take care with blood thinners",
        "In pregnancy, use only small food amounts and check with your doctor",
      ],
      bn: [
        "দিনে প্রায় ৪ গ্রামের মধ্যে রাখুন; বেশি খেলে বুক জ্বালাপোড়া হতে পারে",
        "রক্ত পাতলা করার ওষুধ খেলে সতর্ক থাকুন",
        "গর্ভাবস্থায় শুধু খাবারের পরিমাণে খান এবং ডাক্তারের পরামর্শ নিন",
      ],
    },
  },
  {
    id: "aloe-vera",
    sci: "Aloe vera",
    foodId: null,
    tone: "teal",
    tags: ["skin"],
    name: { en: "Aloe vera", bn: "ঘৃতকুমারী (অ্যালোভেরা)" },
    parts: { en: "Inner leaf gel", bn: "পাতার ভেতরের জেল" },
    summary: {
      en: "A succulent whose clear gel is best known for soothing the skin.",
      bn: "রসালো পাতার গাছ; এর স্বচ্ছ জেল ত্বক ঠান্ডা ও আরাম দেওয়ার জন্য সবচেয়ে পরিচিত।",
    },
    uses: {
      en: [
        "Gel may help soothe and heal minor burns and sunburn",
        "Used as a moisturiser for dry skin",
        "Traditionally applied on minor skin irritation",
      ],
      bn: [
        "ছোটখাটো পোড়া ও রোদে পোড়া ত্বকে আরাম দিতে ও সারাতে সাহায্য করতে পারে",
        "শুষ্ক ত্বকে ময়েশ্চারাইজার হিসেবে ব্যবহৃত হয়",
        "ত্বকের হালকা জ্বালাপোড়ায় প্রচলিতভাবে লাগানো হয়",
      ],
    },
    howToUse: {
      en: [
        "Cut a leaf, scoop out the clear inner gel and apply on the skin",
        "Rinse off the yellow sap first — it irritates the skin",
      ],
      bn: [
        "পাতা কেটে ভেতরের স্বচ্ছ জেল বের করে ত্বকে লাগান",
        "আগে হলুদ কষ ধুয়ে ফেলুন — এটি ত্বকে জ্বালা করে",
      ],
    },
    cautions: {
      en: [
        "Do not drink the yellow latex — it is a strong laxative and can cause cramps and diarrhoea",
        "Avoid by mouth during pregnancy and in children",
        "Do not apply on deep wounds or serious burns",
      ],
      bn: [
        "হলুদ কষ খাবেন না — এটি তীব্র জোলাপ, পেট কামড়ানো ও ডায়রিয়া হতে পারে",
        "গর্ভাবস্থায় ও শিশুদের খাওয়াবেন না",
        "গভীর ক্ষত বা বেশি পোড়ায় লাগাবেন না",
      ],
    },
  },
  {
    id: "kalojira",
    sci: "Nigella sativa",
    foodId: "kalojira",
    tone: "violet",
    tags: ["diabetes", "heart", "respiratory"],
    name: { en: "Black seed (Kalojira)", bn: "কালোজিরা" },
    parts: { en: "Seeds, seed oil", bn: "বীজ, বীজের তেল" },
    summary: {
      en: "Tiny black seeds used in pickles, bhorta and flatbreads, and valued in folk medicine across Bangladesh.",
      bn: "আচার, ভর্তা ও রুটিতে ব্যবহৃত ছোট কালো বীজ; দেশের লোকজ চিকিৎসায় এর বিশেষ কদর।",
    },
    uses: {
      en: [
        "Some studies suggest it may modestly lower blood sugar and cholesterol",
        "May help lower blood pressure slightly",
        "Traditionally used for cough, asthma and digestion",
        "Contains thymoquinone, an antioxidant compound",
      ],
      bn: [
        "কিছু গবেষণায় রক্তে চিনি ও কোলেস্টেরল সামান্য কমার ইঙ্গিত মিলেছে",
        "রক্তচাপ সামান্য কমাতে সাহায্য করতে পারে",
        "কাশি, হাঁপানি ও হজমে প্রচলিতভাবে ব্যবহৃত হয়",
        "এতে থাইমোকুইনোন নামের অ্যান্টিঅক্সিডেন্ট আছে",
      ],
    },
    howToUse: {
      en: [
        "Make kalojira bhorta with onion, chili and mustard oil",
        "Sprinkle on dal, vegetables or roti",
        "Take ½–1 teaspoon of seeds a day with honey",
      ],
      bn: [
        "পেঁয়াজ, মরিচ ও সরিষার তেল দিয়ে কালোজিরা ভর্তা বানান",
        "ডাল, সবজি বা রুটিতে ছিটিয়ে দিন",
        "দিনে ½–১ চা-চামচ বীজ মধুর সাথে খান",
      ],
    },
    cautions: {
      en: [
        "Avoid large amounts during pregnancy",
        "May add to the effect of diabetes and blood-pressure medicines",
        "Oil can cause skin rash in some people",
      ],
      bn: [
        "গর্ভাবস্থায় বেশি পরিমাণে খাবেন না",
        "ডায়াবেটিস ও রক্তচাপের ওষুধের প্রভাব বাড়িয়ে দিতে পারে",
        "কারও কারও ত্বকে তেল লাগালে র‍্যাশ হতে পারে",
      ],
    },
  },
  {
    id: "amloki",
    sci: "Phyllanthus emblica",
    foodId: "amloki",
    tone: "lime",
    tags: ["immunity", "digestion", "skin"],
    name: { en: "Indian gooseberry (Amloki)", bn: "আমলকী" },
    parts: { en: "Fruit", bn: "ফল" },
    summary: {
      en: "A sour winter fruit that is one of the richest local sources of vitamin C.",
      bn: "শীতের টক ফল; ভিটামিন সি-র অন্যতম সমৃদ্ধ দেশি উৎস।",
    },
    uses: {
      en: [
        "High in vitamin C, which supports immunity",
        "Traditionally used for digestion and as a hair tonic",
        "Small studies suggest it may help lower cholesterol and blood sugar",
        "Rich in antioxidants",
      ],
      bn: [
        "ভিটামিন সি-তে ভরপুর, যা রোগ প্রতিরোধ ক্ষমতায় সহায়ক",
        "হজমে ও চুলের যত্নে প্রচলিতভাবে ব্যবহৃত হয়",
        "ছোট কিছু গবেষণায় কোলেস্টেরল ও রক্তে চিনি কমার ইঙ্গিত মিলেছে",
        "অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ",
      ],
    },
    howToUse: {
      en: [
        "Eat 1–2 fresh fruits with a pinch of salt",
        "Make amloki pickle or chutney",
        "Dry slices in the sun to keep for later",
      ],
      bn: [
        "১–২টি তাজা আমলকী সামান্য লবণ দিয়ে খান",
        "আমলকীর আচার বা চাটনি বানান",
        "টুকরো করে রোদে শুকিয়ে সংরক্ষণ করুন",
      ],
    },
    cautions: {
      en: [
        "Being sour, it may worsen acidity on an empty stomach",
        "Concentrated supplements may interact with blood thinners and diabetes medicine",
      ],
      bn: [
        "টক বলে খালি পেটে খেলে অ্যাসিডিটি বাড়তে পারে",
        "ঘন সাপ্লিমেন্ট রক্ত পাতলা করার ও ডায়াবেটিসের ওষুধের সাথে প্রতিক্রিয়া করতে পারে",
      ],
    },
  },
  {
    id: "thankuni",
    sci: "Centella asiatica",
    foodId: null,
    tone: "emerald",
    tags: ["digestion", "skin", "mind"],
    name: { en: "Indian pennywort (Thankuni)", bn: "থানকুনি" },
    parts: { en: "Leaves, whole plant", bn: "পাতা, পুরো গাছ" },
    summary: {
      en: "A small creeping herb found near ponds and fields, popular as a bitter bhorta and stomach remedy.",
      bn: "পুকুরপাড় ও মাঠে জন্মানো ছোট লতানো শাক; থানকুনি পাতার ভর্তা ও পেটের সমস্যায় এর ব্যবহার জনপ্রিয়।",
    },
    uses: {
      en: [
        "Traditionally used for stomach upset, loose motion and indigestion",
        "May help wound healing when applied on the skin",
        "Traditionally believed to support memory",
      ],
      bn: [
        "পেটের গোলমাল, পাতলা পায়খানা ও বদহজমে প্রচলিতভাবে ব্যবহৃত হয়",
        "ত্বকে লাগালে ক্ষত সারাতে সাহায্য করতে পারে",
        "স্মৃতিশক্তির জন্য উপকারী বলে প্রচলিত বিশ্বাস আছে",
      ],
    },
    howToUse: {
      en: [
        "Make thankuni bhorta with garlic, chili and mustard oil",
        "Drink a little fresh leaf juice in the morning",
        "Add to mixed shak or soup",
      ],
      bn: [
        "রসুন, মরিচ ও সরিষার তেল দিয়ে থানকুনি ভর্তা বানান",
        "সকালে অল্প তাজা পাতার রস খান",
        "মিশ্র শাক বা স্যুপে দিন",
      ],
    },
    cautions: {
      en: [
        "Wash very well — it grows near water and can carry germs",
        "Avoid medicinal amounts in pregnancy and liver disease",
        "For loose motion, give ORS — see a doctor if it lasts or there is blood",
      ],
      bn: [
        "খুব ভালো করে ধুয়ে নিন — পানির ধারে জন্মায় বলে জীবাণু থাকতে পারে",
        "গর্ভাবস্থায় ও লিভারের রোগে ওষুধ হিসেবে খাবেন না",
        "পাতলা পায়খানায় স্যালাইন খান — না সারলে বা রক্ত গেলে ডাক্তার দেখান",
      ],
    },
  },
  {
    id: "pudina",
    sci: "Mentha spp.",
    foodId: "mint",
    tone: "teal",
    tags: ["digestion", "respiratory"],
    name: { en: "Mint (Pudina)", bn: "পুদিনা" },
    parts: { en: "Leaves", bn: "পাতা" },
    summary: {
      en: "A cooling, fragrant herb used in chutneys, borhani and drinks.",
      bn: "ঠান্ডা স্বাদের সুগন্ধি পাতা; চাটনি, বোরহানি ও শরবতে ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "May ease bloating and indigestion",
        "Peppermint oil capsules have evidence for easing IBS symptoms",
        "Freshens breath",
        "Steam with mint may ease a blocked nose",
      ],
      bn: [
        "পেট ফাঁপা ও বদহজম কমাতে পারে",
        "পিপারমিন্ট তেলের ক্যাপসুল আইবিএস-এর উপসর্গ কমাতে কার্যকর বলে প্রমাণ আছে",
        "মুখের দুর্গন্ধ দূর করে",
        "পুদিনা দিয়ে ভাপ নিলে বন্ধ নাক খুলতে পারে",
      ],
    },
    howToUse: {
      en: [
        "Make pudina chutney with coriander, green chili and lemon",
        "Add leaves to lemon water, borhani or tea",
      ],
      bn: [
        "ধনেপাতা, কাঁচা মরিচ ও লেবু দিয়ে পুদিনার চাটনি বানান",
        "লেবু-পানি, বোরহানি বা চায়ে পাতা দিন",
      ],
    },
    cautions: {
      en: [
        "Can worsen heartburn and acid reflux in some people",
        "Do not put mint oil on the face or nose of babies and young children",
      ],
      bn: [
        "কারও কারও বুক জ্বালাপোড়া ও অ্যাসিড রিফ্লাক্স বাড়াতে পারে",
        "শিশু ও ছোট বাচ্চার মুখে বা নাকে পুদিনার তেল লাগাবেন না",
      ],
    },
  },
  {
    id: "methi",
    sci: "Trigonella foenum-graecum",
    foodId: "fenugreek",
    tone: "amber",
    tags: ["diabetes", "heart", "digestion", "women"],
    name: { en: "Fenugreek (Methi)", bn: "মেথি" },
    parts: { en: "Seeds, leaves", bn: "বীজ, পাতা" },
    summary: {
      en: "Bitter seeds used in panch phoron and pickles, with some evidence for blood-sugar control.",
      bn: "পাঁচফোড়ন ও আচারে ব্যবহৃত তেতো বীজ; রক্তে চিনি নিয়ন্ত্রণে এর কিছু প্রমাণ আছে।",
    },
    uses: {
      en: [
        "Its soluble fibre may help lower blood sugar after meals",
        "May help lower cholesterol slightly",
        "Traditionally used to aid digestion and constipation",
        "Traditionally used to increase breast milk, though evidence is limited",
      ],
      bn: [
        "এর দ্রবণীয় আঁশ খাবারের পর রক্তে চিনি কমাতে সাহায্য করতে পারে",
        "কোলেস্টেরল সামান্য কমাতে পারে",
        "হজম ও কোষ্ঠকাঠিন্যে প্রচলিতভাবে ব্যবহৃত হয়",
        "বুকের দুধ বাড়াতে প্রচলিত, যদিও প্রমাণ সীমিত",
      ],
    },
    howToUse: {
      en: [
        "Soak 1 teaspoon of seeds overnight and take with the water in the morning",
        "Use in panch phoron for dal and vegetables",
        "Cook methi leaves as shak",
      ],
      bn: [
        "রাতে ১ চা-চামচ মেথি ভিজিয়ে সকালে পানিসহ খান",
        "ডাল ও সবজিতে পাঁচফোড়নের সাথে ব্যবহার করুন",
        "মেথি শাক রান্না করে খান",
      ],
    },
    cautions: {
      en: [
        "Avoid medicinal amounts in pregnancy — it may trigger contractions",
        "Can lower blood sugar too much with diabetes medicine; monitor your sugar",
        "May cause gas or a maple-like body odour; people allergic to peanut or chickpea may react",
      ],
      bn: [
        "গর্ভাবস্থায় ওষুধ হিসেবে খাবেন না — জরায়ুর সংকোচন হতে পারে",
        "ডায়াবেটিসের ওষুধের সাথে রক্তে চিনি বেশি কমে যেতে পারে; সুগার মেপে দেখুন",
        "গ্যাস বা শরীরে মিষ্টি গন্ধ হতে পারে; বাদাম বা ছোলায় অ্যালার্জি থাকলে প্রতিক্রিয়া হতে পারে",
      ],
    },
  },
  {
    id: "garlic",
    sci: "Allium sativum",
    foodId: "garlic",
    tone: "rose",
    tags: ["heart", "respiratory"],
    name: { en: "Garlic", bn: "রসুন" },
    parts: { en: "Bulb (cloves)", bn: "কোয়া" },
    summary: {
      en: "A kitchen staple with good evidence for a modest effect on blood pressure and cholesterol.",
      bn: "রান্নার অপরিহার্য উপকরণ; রক্তচাপ ও কোলেস্টেরল সামান্য কমানোর ভালো প্রমাণ আছে।",
    },
    uses: {
      en: [
        "May modestly lower blood pressure",
        "May help lower total and LDL cholesterol slightly",
        "Has natural antibacterial compounds (allicin)",
        "Traditionally used for cough and cold",
      ],
      bn: [
        "রক্তচাপ সামান্য কমাতে পারে",
        "মোট ও এলডিএল কোলেস্টেরল কিছুটা কমাতে পারে",
        "এতে প্রাকৃতিক জীবাণুনাশক উপাদান (অ্যালিসিন) আছে",
        "সর্দি-কাশিতে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Crush or chop garlic and wait 10 minutes before cooking to keep its benefits",
        "Eat 1–2 raw cloves a day with food",
        "Use generously in bhorta, dal and curries",
      ],
      bn: [
        "রসুন থেঁতো বা কুচি করে ১০ মিনিট রেখে তারপর রান্না করুন — উপকারিতা বেশি থাকে",
        "দিনে ১–২ কোয়া কাঁচা রসুন খাবারের সাথে খান",
        "ভর্তা, ডাল ও তরকারিতে ব্যবহার করুন",
      ],
    },
    cautions: {
      en: [
        "Raw garlic on an empty stomach can cause heartburn",
        "Increases bleeding risk with blood thinners; stop supplements before surgery",
        "Garlic supplements can reduce the effect of some HIV medicines",
      ],
      bn: [
        "খালি পেটে কাঁচা রসুন খেলে বুক জ্বালাপোড়া হতে পারে",
        "রক্ত পাতলা করার ওষুধের সাথে রক্তক্ষরণের ঝুঁকি বাড়ায়; অস্ত্রোপচারের আগে সাপ্লিমেন্ট বন্ধ করুন",
        "রসুনের সাপ্লিমেন্ট কিছু এইচআইভি ওষুধের কার্যকারিতা কমাতে পারে",
      ],
    },
  },
  {
    id: "moringa",
    sci: "Moringa oleifera",
    foodId: "moringa",
    tone: "emerald",
    tags: ["immunity", "women", "diabetes"],
    name: { en: "Moringa (Sajna)", bn: "সজনে" },
    parts: { en: "Leaves, pods, flowers", bn: "পাতা, ডাঁটা, ফুল" },
    summary: {
      en: "A fast-growing tree whose leaves are packed with vitamins, minerals and protein.",
      bn: "দ্রুত বাড়া গাছ; এর পাতায় ভিটামিন, খনিজ ও প্রোটিন প্রচুর।",
    },
    uses: {
      en: [
        "Leaves are rich in vitamin A, vitamin C, calcium and iron",
        "A useful, cheap food for mothers and children's nutrition",
        "Small studies suggest it may help lower blood sugar",
        "Pods (sajna data) are a fibre-rich vegetable",
      ],
      bn: [
        "পাতায় ভিটামিন এ, ভিটামিন সি, ক্যালসিয়াম ও আয়রন প্রচুর",
        "মা ও শিশুর পুষ্টির জন্য সস্তা ও উপকারী খাবার",
        "ছোট কিছু গবেষণায় রক্তে চিনি কমার ইঙ্গিত মিলেছে",
        "সজনে ডাঁটা আঁশসমৃদ্ধ সবজি",
      ],
    },
    howToUse: {
      en: [
        "Cook leaves as shak or add them to dal",
        "Cook sajna data in dal or curry",
        "Dry leaves in shade and powder them to sprinkle on food",
      ],
      bn: [
        "পাতা শাক হিসেবে রান্না করুন বা ডালে দিন",
        "সজনে ডাঁটা ডাল বা তরকারিতে রান্না করুন",
        "পাতা ছায়ায় শুকিয়ে গুঁড়া করে খাবারে ছিটিয়ে খান",
      ],
    },
    cautions: {
      en: [
        "Avoid the root and bark, especially in pregnancy — they can be harmful",
        "May add to the effect of diabetes and blood-pressure medicines",
        "Leaves are high in vitamin K — keep intake steady if you take warfarin",
      ],
      bn: [
        "শিকড় ও ছাল খাবেন না, বিশেষ করে গর্ভাবস্থায় — এগুলো ক্ষতিকর হতে পারে",
        "ডায়াবেটিস ও রক্তচাপের ওষুধের প্রভাব বাড়াতে পারে",
        "পাতায় ভিটামিন কে বেশি — ওয়ারফারিন খেলে পরিমাণ নিয়মিত রাখুন",
      ],
    },
  },
  {
    id: "arjun",
    sci: "Terminalia arjuna",
    foodId: null,
    tone: "sky",
    tags: ["heart"],
    name: { en: "Arjun tree", bn: "অর্জুন" },
    parts: { en: "Bark", bn: "ছাল" },
    summary: {
      en: "A large riverside tree whose bark is a well-known traditional heart tonic in Ayurveda.",
      bn: "নদীর ধারের বড় গাছ; আয়ুর্বেদে এর ছাল হৃদ্‌যন্ত্রের টনিক হিসেবে সুপরিচিত।",
    },
    uses: {
      en: [
        "Traditionally used to support heart health",
        "Small studies suggest it may help with chest pain (angina) alongside standard treatment",
        "May help lower blood pressure and cholesterol slightly",
      ],
      bn: [
        "হৃদ্‌যন্ত্রের সুস্থতায় প্রচলিতভাবে ব্যবহৃত হয়",
        "ছোট কিছু গবেষণায় নিয়মিত চিকিৎসার পাশাপাশি বুকে ব্যথা (অ্যানজাইনা) কমার ইঙ্গিত মিলেছে",
        "রক্তচাপ ও কোলেস্টেরল সামান্য কমাতে পারে",
      ],
    },
    howToUse: {
      en: [
        "Boil bark powder in milk or water (arjun ksheer) — only on a practitioner's advice",
        "Use clean, tested products from a reliable source",
      ],
      bn: [
        "ছালের গুঁড়া দুধ বা পানিতে ফুটিয়ে খাওয়া হয় — শুধু অভিজ্ঞ চিকিৎসকের পরামর্শে",
        "বিশ্বস্ত উৎস থেকে পরিষ্কার, মানসম্পন্ন পণ্য নিন",
      ],
    },
    cautions: {
      en: [
        "Never replace your heart medicine with arjun",
        "May interact with heart, blood-pressure and blood-thinning medicines",
        "Not studied enough in pregnancy — avoid",
      ],
      bn: [
        "হৃদ্‌রোগের ওষুধের বদলে কখনো অর্জুন খাবেন না",
        "হৃদ্‌রোগ, রক্তচাপ ও রক্ত পাতলা করার ওষুধের সাথে প্রতিক্রিয়া করতে পারে",
        "গর্ভাবস্থায় যথেষ্ট গবেষণা নেই — এড়িয়ে চলুন",
      ],
    },
  },
  {
    id: "bashok",
    sci: "Justicia adhatoda",
    foodId: null,
    tone: "lime",
    tags: ["respiratory"],
    name: { en: "Malabar nut (Bashok)", bn: "বাসক" },
    parts: { en: "Leaves", bn: "পাতা" },
    summary: {
      en: "A shrub whose leaves are a traditional cough remedy and appear in many local cough syrups.",
      bn: "ঝোপজাতীয় গাছ; এর পাতা কাশির ঐতিহ্যবাহী ওষুধ এবং দেশের অনেক কফ সিরাপে ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "Traditionally used to loosen phlegm in cough and cold",
        "Contains vasicine, which may help clear mucus",
        "Traditionally used for mild asthma and bronchitis symptoms",
      ],
      bn: [
        "সর্দি-কাশিতে কফ তরল করতে প্রচলিতভাবে ব্যবহৃত হয়",
        "এতে ভাসিসিন আছে, যা কফ বের করতে সাহায্য করতে পারে",
        "হালকা হাঁপানি ও ব্রংকাইটিসের উপসর্গে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Steam or boil a few leaves, extract the juice and take 1–2 teaspoons with honey",
        "Boil leaves in water with ginger and tulsi as a tea",
      ],
      bn: [
        "কয়েকটি পাতা ভাপিয়ে বা সেদ্ধ করে রস বের করে ১–২ চা-চামচ মধুর সাথে খান",
        "আদা ও তুলসীর সাথে পাতা পানিতে ফুটিয়ে চা হিসেবে খান",
      ],
    },
    cautions: {
      en: [
        "Do not use during pregnancy — it can cause miscarriage",
        "Large amounts can cause vomiting and diarrhoea",
        "See a doctor if cough lasts more than 2 weeks, or with fever, blood or breathlessness",
      ],
      bn: [
        "গর্ভাবস্থায় একেবারেই খাবেন না — গর্ভপাতের ঝুঁকি আছে",
        "বেশি খেলে বমি ও ডায়রিয়া হতে পারে",
        "কাশি ২ সপ্তাহের বেশি থাকলে, বা জ্বর, রক্ত বা শ্বাসকষ্ট হলে ডাক্তার দেখান",
      ],
    },
  },
  {
    id: "cinnamon",
    sci: "Cinnamomum verum / C. cassia",
    foodId: "cinnamon",
    tone: "orange",
    tags: ["diabetes", "digestion"],
    name: { en: "Cinnamon", bn: "দারুচিনি" },
    parts: { en: "Bark", bn: "ছাল" },
    summary: {
      en: "A sweet, warming bark used in polao, korma and tea.",
      bn: "মিষ্টি গন্ধের গরম মসলা; পোলাও, কোরমা ও চায়ে ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "Some studies suggest it may modestly lower fasting blood sugar",
        "Traditionally used for indigestion and gas",
        "Rich in antioxidants",
      ],
      bn: [
        "কিছু গবেষণায় খালি পেটে রক্তে চিনি সামান্য কমার ইঙ্গিত মিলেছে",
        "বদহজম ও গ্যাসে প্রচলিতভাবে ব্যবহৃত হয়",
        "অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ",
      ],
    },
    howToUse: {
      en: [
        "Boil a small stick in tea or water",
        "Add a pinch of powder to oats, yogurt or fruit instead of sugar",
      ],
      bn: [
        "চা বা পানিতে এক টুকরো দারুচিনি ফুটিয়ে নিন",
        "চিনির বদলে ওটস, দই বা ফলে এক চিমটি গুঁড়া দিন",
      ],
    },
    cautions: {
      en: [
        "Most market cinnamon is cassia, high in coumarin — large daily amounts may harm the liver",
        "Keep to about ½–1 teaspoon a day or less",
        "Not a replacement for diabetes medicine",
      ],
      bn: [
        "বাজারের বেশিরভাগ দারুচিনি ক্যাসিয়া, এতে কুমারিন বেশি — প্রতিদিন বেশি খেলে লিভারের ক্ষতি হতে পারে",
        "দিনে প্রায় ½–১ চা-চামচের মধ্যে রাখুন",
        "ডায়াবেটিসের ওষুধের বিকল্প নয়",
      ],
    },
  },
  {
    id: "lemongrass",
    sci: "Cymbopogon citratus",
    foodId: null,
    tone: "sky",
    tags: ["digestion", "mind"],
    name: { en: "Lemongrass", bn: "লেমনগ্রাস" },
    parts: { en: "Stalks, leaves", bn: "ডাঁটা, পাতা" },
    summary: {
      en: "A tall, lemon-scented grass increasingly grown in Bangladeshi homes for tea and cooking.",
      bn: "লেবুর ঘ্রাণযুক্ত লম্বা ঘাস; চা ও রান্নার জন্য দেশের ঘরে ঘরে এখন বেশ চাষ হচ্ছে।",
    },
    uses: {
      en: [
        "Traditionally used to ease indigestion, gas and stomach cramps",
        "A calming, caffeine-free tea",
        "Its oil is used in insect repellents",
      ],
      bn: [
        "বদহজম, গ্যাস ও পেটব্যথায় প্রচলিতভাবে ব্যবহৃত হয়",
        "ক্যাফেইনমুক্ত, মন শান্ত করা চা",
        "এর তেল মশা-পোকা তাড়ানোর পণ্যে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Boil chopped stalks in water for 5 minutes for tea, with ginger or honey",
        "Add bruised stalks to soups and curries",
      ],
      bn: [
        "কুচি করা ডাঁটা ৫ মিনিট পানিতে ফুটিয়ে আদা বা মধু দিয়ে চা বানান",
        "থেঁতো করা ডাঁটা স্যুপ ও তরকারিতে দিন",
      ],
    },
    cautions: {
      en: [
        "Avoid large amounts in pregnancy",
        "Never swallow the essential oil; it can irritate skin, so dilute before use",
      ],
      bn: [
        "গর্ভাবস্থায় বেশি পরিমাণে খাবেন না",
        "এসেনশিয়াল অয়েল কখনো খাবেন না; ত্বকে জ্বালা করতে পারে, তাই পাতলা করে ব্যবহার করুন",
      ],
    },
  },
  {
    id: "shimul-mul",
    sci: "Bombax ceiba",
    foodId: null,
    tone: "rose",
    tags: ["men", "digestion"],
    name: { en: "Silk-cotton root (Shimul mul)", bn: "শিমুল মূল" },
    parts: { en: "Taproot of young plants, gum (mochras)", bn: "চারা গাছের মূল, আঠা (মোচরস)" },
    summary: {
      en: "The sweetish, juicy root of young shimul saplings, sold in village markets as a traditional strength and vitality tonic.",
      bn: "কচি শিমুল চারার মিষ্টি, রসালো মূল; গ্রামের হাটে শক্তি ও যৌবন বাড়ানোর টোটকা হিসেবে বিক্রি হয়।",
    },
    uses: {
      en: [
        "Traditionally eaten as a general tonic for weakness",
        "Traditionally used for male vitality and to 'thicken' semen — evidence is limited to a few animal studies",
        "The gum (mochras) is traditionally used for loose motion and dysentery",
        "Traditionally used for burning urination and white discharge",
      ],
      bn: [
        "শারীরিক দুর্বলতায় সাধারণ টনিক হিসেবে খাওয়ার প্রচলন আছে",
        "পুরুষের যৌনশক্তি ও বীর্য ঘন করতে প্রচলিত — তবে প্রমাণ কেবল কয়েকটি প্রাণী-গবেষণায় সীমিত",
        "এর আঠা (মোচরস) পাতলা পায়খানা ও আমাশয়ে প্রচলিতভাবে ব্যবহৃত হয়",
        "প্রস্রাবে জ্বালাপোড়া ও সাদাস্রাবে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Wash and peel a fresh root and chew a small piece, as is done traditionally",
        "Dried root powder is taken with milk — only on a qualified practitioner's advice",
      ],
      bn: [
        "তাজা মূল ধুয়ে খোসা ছাড়িয়ে প্রচলিত নিয়মে ছোট এক টুকরো চিবিয়ে খাওয়া হয়",
        "শুকনো মূলের গুঁড়া দুধের সাথে খাওয়া হয় — শুধু অভিজ্ঞ চিকিৎসকের পরামর্শে",
      ],
    },
    cautions: {
      en: [
        "Erectile problems can be an early sign of diabetes, heart disease or high blood pressure — see a doctor first",
        "Hawker and 'kobiraji' mixes are often secretly spiked with sildenafil-type drugs or steroids — buy only plain, identifiable roots",
        "Don't combine with sildenafil, nitrate heart medicines or blood-pressure medicines without a doctor's advice",
      ],
      bn: [
        "যৌন দুর্বলতা বা লিঙ্গ শক্ত না হওয়া ডায়াবেটিস, হৃদ্‌রোগ বা উচ্চ রক্তচাপের প্রাথমিক লক্ষণ হতে পারে — আগে ডাক্তার দেখান",
        "ফেরিওয়ালা বা কবিরাজি মিশ্রণে প্রায়ই গোপনে সিলডেনাফিল জাতীয় ওষুধ বা স্টেরয়েড মেশানো থাকে — শুধু চেনা, আস্ত মূল কিনুন",
        "ডাক্তারের পরামর্শ ছাড়া সিলডেনাফিল, নাইট্রেট জাতীয় হৃদ্‌রোগের ওষুধ বা রক্তচাপের ওষুধের সাথে খাবেন না",
      ],
    },
  },
  {
    id: "ashwagandha",
    sci: "Withania somnifera",
    foodId: null,
    tone: "amber",
    tags: ["mind", "men", "joints"],
    name: { en: "Ashwagandha", bn: "অশ্বগন্ধা" },
    parts: { en: "Root", bn: "মূল" },
    summary: {
      en: "A famous Ayurvedic root tonic, now one of the most studied herbs for stress and sleep.",
      bn: "আয়ুর্বেদের বিখ্যাত মূল-টনিক; মানসিক চাপ ও ঘুমের জন্য এখন সবচেয়ে বেশি গবেষণা হওয়া ভেষজগুলোর একটি।",
    },
    uses: {
      en: [
        "Small trials suggest it may reduce stress and anxiety",
        "May help improve sleep quality",
        "Small studies in men with fertility problems suggest it may improve sperm quality",
        "Traditionally used as a strength tonic and for joint pain",
      ],
      bn: [
        "ছোট কিছু গবেষণা বলছে মানসিক চাপ ও উদ্বেগ কমাতে পারে",
        "ঘুমের মান ভালো করতে সাহায্য করতে পারে",
        "সন্তান-ধারণে সমস্যা থাকা পুরুষদের ওপর ছোট গবেষণায় শুক্রাণুর মান বাড়ার ইঙ্গিত মিলেছে",
        "শক্তিবর্ধক টনিক হিসেবে ও গিঁটের ব্যথায় প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Root powder (about ½ teaspoon) is traditionally taken with warm milk at night",
        "Use tested, standardised capsules from a reliable brand",
      ],
      bn: [
        "রাতে গরম দুধের সাথে প্রায় ½ চা-চামচ মূলের গুঁড়া খাওয়ার প্রচলন আছে",
        "বিশ্বস্ত ব্র্যান্ডের মানসম্পন্ন ক্যাপসুল ব্যবহার করুন",
      ],
    },
    cautions: {
      en: [
        "Sexual or fertility problems can be an early sign of diabetes, heart disease or high BP — see a doctor first",
        "Hawker and 'kobiraji' mixes are often spiked with hidden drugs or steroids — avoid them",
        "Avoid in pregnancy, thyroid or autoimmune disease; rare liver injury reported; may add to sedatives and BP medicines",
      ],
      bn: [
        "যৌন বা সন্তান-ধারণের সমস্যা ডায়াবেটিস, হৃদ্‌রোগ বা উচ্চ রক্তচাপের প্রাথমিক লক্ষণ হতে পারে — আগে ডাক্তার দেখান",
        "ফেরিওয়ালা বা কবিরাজি মিশ্রণে প্রায়ই গোপনে ওষুধ বা স্টেরয়েড মেশানো থাকে — এগুলো এড়িয়ে চলুন",
        "গর্ভাবস্থায়, থাইরয়েড বা অটোইমিউন রোগে খাবেন না; বিরল ক্ষেত্রে লিভারের ক্ষতি দেখা গেছে; ঘুমের ও রক্তচাপের ওষুধের প্রভাব বাড়াতে পারে",
      ],
    },
  },
  {
    id: "shatamuli",
    sci: "Asparagus racemosus",
    foodId: null,
    tone: "emerald",
    tags: ["women", "digestion"],
    name: { en: "Wild asparagus (Shatamuli)", bn: "শতমূলী" },
    parts: { en: "Tuberous roots", bn: "কন্দযুক্ত মূল" },
    summary: {
      en: "A climbing plant with many finger-like roots, known in Ayurveda as a women's tonic.",
      bn: "অনেকগুলো আঙুলের মতো মূলওয়ালা লতানো গাছ; আয়ুর্বেদে নারীদের টনিক হিসেবে পরিচিত।",
    },
    uses: {
      en: [
        "Traditionally used to increase breast milk, though evidence is limited",
        "Traditionally used as a female reproductive tonic and for menopause symptoms",
        "Traditionally used for acidity and stomach ulcers",
      ],
      bn: [
        "বুকের দুধ বাড়াতে প্রচলিত, যদিও প্রমাণ সীমিত",
        "নারীর প্রজনন স্বাস্থ্যের টনিক হিসেবে ও মেনোপজের উপসর্গে প্রচলিতভাবে ব্যবহৃত হয়",
        "অ্যাসিডিটি ও পাকস্থলীর ঘায়ে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Dried root powder is traditionally taken with milk",
        "Use only on a qualified practitioner's advice, especially while breastfeeding",
      ],
      bn: [
        "শুকনো মূলের গুঁড়া দুধের সাথে খাওয়ার প্রচলন আছে",
        "শুধু অভিজ্ঞ চিকিৎসকের পরামর্শে খান, বিশেষ করে বুকের দুধ খাওয়ানোর সময়",
      ],
    },
    cautions: {
      en: [
        "Not proven safe in pregnancy — avoid unless a doctor advises",
        "People allergic to asparagus may react",
        "May lower blood sugar and act as a mild diuretic",
      ],
      bn: [
        "গর্ভাবস্থায় নিরাপদ বলে প্রমাণিত নয় — ডাক্তার না বললে খাবেন না",
        "অ্যাসপারাগাসে অ্যালার্জি থাকলে প্রতিক্রিয়া হতে পারে",
        "রক্তে চিনি কমাতে পারে এবং প্রস্রাব কিছুটা বাড়াতে পারে",
      ],
    },
  },
  {
    id: "talmakhana",
    sci: "Hygrophila auriculata",
    foodId: null,
    tone: "violet",
    tags: ["men", "urinary"],
    name: { en: "Marsh barbel (Talmakhana)", bn: "তালমাখনা" },
    parts: { en: "Seeds, leaves, whole plant", bn: "বীজ, পাতা, পুরো গাছ" },
    summary: {
      en: "A thorny marshland herb whose seeds are a popular folk remedy for male vitality.",
      bn: "জলাভূমির কাঁটাওয়ালা গুল্ম; এর বীজ পুরুষের যৌনশক্তির জন্য জনপ্রিয় লোকজ টোটকা।",
    },
    uses: {
      en: [
        "Seeds are traditionally used as a tonic for male vitality and semen",
        "Leaves and plant are traditionally used as a diuretic and for swelling",
        "Traditionally used for burning urination",
        "Evidence comes mostly from animal studies, not from people",
      ],
      bn: [
        "পুরুষের যৌনশক্তি ও বীর্যের টনিক হিসেবে বীজ প্রচলিতভাবে ব্যবহৃত হয়",
        "প্রস্রাব বাড়াতে ও শরীর ফোলায় পাতা ও গাছ প্রচলিতভাবে ব্যবহৃত হয়",
        "প্রস্রাবে জ্বালাপোড়ায় প্রচলিতভাবে ব্যবহৃত হয়",
        "প্রমাণ মূলত প্রাণী-গবেষণা থেকে, মানুষের ওপর নয়",
      ],
    },
    howToUse: {
      en: [
        "About 1 teaspoon of seeds is traditionally soaked in milk or water until jelly-like and taken",
        "Use only on a qualified practitioner's advice",
      ],
      bn: [
        "প্রায় ১ চা-চামচ বীজ দুধ বা পানিতে ভিজিয়ে জেলির মতো হলে খাওয়ার প্রচলন আছে",
        "শুধু অভিজ্ঞ চিকিৎসকের পরামর্শে খান",
      ],
    },
    cautions: {
      en: [
        "Erectile problems can be an early sign of diabetes, heart disease or high blood pressure — see a doctor first",
        "Hawker and 'kobiraji' mixes are often spiked with hidden sildenafil-type drugs or steroids",
        "Don't combine with sildenafil, nitrates or blood-pressure medicines without a doctor's advice",
      ],
      bn: [
        "লিঙ্গ শক্ত না হওয়ার সমস্যা ডায়াবেটিস, হৃদ্‌রোগ বা উচ্চ রক্তচাপের প্রাথমিক লক্ষণ হতে পারে — আগে ডাক্তার দেখান",
        "ফেরিওয়ালা বা কবিরাজি মিশ্রণে প্রায়ই গোপনে সিলডেনাফিল জাতীয় ওষুধ বা স্টেরয়েড মেশানো থাকে",
        "ডাক্তারের পরামর্শ ছাড়া সিলডেনাফিল, নাইট্রেট বা রক্তচাপের ওষুধের সাথে খাবেন না",
      ],
    },
  },
  {
    id: "alkushi",
    sci: "Mucuna pruriens",
    foodId: null,
    tone: "orange",
    tags: ["men"],
    name: { en: "Velvet bean (Alkushi)", bn: "আলকুশি" },
    parts: { en: "Processed seeds", bn: "প্রক্রিয়াজাত বীজ" },
    summary: {
      en: "A climbing bean whose hairy pods cause intense itching; its seeds are a well-known vitality remedy and a natural source of L-dopa.",
      bn: "লতানো শিমজাতীয় গাছ; এর শুঁয়াওয়ালা ফল গায়ে লাগলে তীব্র চুলকায়; বীজ যৌনশক্তির পরিচিত টোটকা এবং এল-ডোপার প্রাকৃতিক উৎস।",
    },
    uses: {
      en: [
        "Seeds are traditionally used for male vitality and fertility",
        "Small studies in infertile men suggest improved sperm count and movement",
        "Contains L-dopa, studied for Parkinson's disease under medical supervision",
      ],
      bn: [
        "পুরুষের যৌনশক্তি ও প্রজনন ক্ষমতায় বীজ প্রচলিতভাবে ব্যবহৃত হয়",
        "সন্তানহীন পুরুষদের ওপর ছোট গবেষণায় শুক্রাণুর সংখ্যা ও গতি বাড়ার ইঙ্গিত মিলেছে",
        "এতে এল-ডোপা আছে, যা চিকিৎসকের তত্ত্বাবধানে পারকিনসন রোগে গবেষণাধীন",
      ],
    },
    howToUse: {
      en: [
        "Seeds must be properly processed (boiled, skinned, dried and powdered) — buy ready-processed powder",
        "A small amount is traditionally taken with milk, only on a practitioner's advice",
      ],
      bn: [
        "বীজ অবশ্যই ঠিকমতো প্রক্রিয়া করতে হয় (সেদ্ধ, খোসা ছাড়ানো, শুকানো ও গুঁড়া) — প্রক্রিয়াজাত গুঁড়া কিনুন",
        "অল্প পরিমাণ দুধের সাথে খাওয়ার প্রচলন আছে, শুধু চিকিৎসকের পরামর্শে",
      ],
    },
    cautions: {
      en: [
        "Raw seeds and pod hairs cause severe itching and burning — never touch the pods or eat raw seeds",
        "L-dopa interacts with Parkinson's and psychiatric medicines (e.g. MAO inhibitors, antipsychotics) and can cause nausea or confusion",
        "Erectile problems can be an early sign of diabetes, heart disease or high BP — see a doctor; hawker mixes are often spiked with hidden drugs or steroids",
      ],
      bn: [
        "কাঁচা বীজ ও ফলের শুঁয়া তীব্র চুলকানি ও জ্বালা করে — ফল ছোঁবেন না, কাঁচা বীজ খাবেন না",
        "এল-ডোপা পারকিনসন ও মানসিক রোগের ওষুধের সাথে প্রতিক্রিয়া করে এবং বমিভাব বা বিভ্রান্তি ঘটাতে পারে",
        "লিঙ্গ শক্ত না হওয়া ডায়াবেটিস, হৃদ্‌রোগ বা উচ্চ রক্তচাপের প্রাথমিক লক্ষণ হতে পারে — ডাক্তার দেখান; ফেরিওয়ালার মিশ্রণে প্রায়ই গোপনে ওষুধ বা স্টেরয়েড থাকে",
      ],
    },
  },
  {
    id: "gokhru",
    sci: "Tribulus terrestris",
    foodId: null,
    tone: "lime",
    tags: ["men", "urinary"],
    name: { en: "Puncture vine (Gokhru)", bn: "গোক্ষুর" },
    parts: { en: "Fruit, whole plant", bn: "ফল, পুরো গাছ" },
    summary: {
      en: "A low-growing weed with spiny fruits, used in Ayurveda for urinary problems and sold widely as a 'testosterone booster'.",
      bn: "মাটিতে ছড়ানো কাঁটাওয়ালা ফলের আগাছা; আয়ুর্বেদে প্রস্রাবের সমস্যায় ব্যবহৃত এবং 'টেস্টোস্টেরন বাড়ানো' পণ্য হিসেবে ব্যাপক বিক্রি হয়।",
    },
    uses: {
      en: [
        "Traditionally used as a diuretic and for urinary problems and stones",
        "Traditionally used for male vitality",
        "Some small studies suggest a modest effect on libido, but most show no rise in testosterone in healthy men",
      ],
      bn: [
        "প্রস্রাব বাড়াতে, প্রস্রাবের সমস্যা ও পাথরে প্রচলিতভাবে ব্যবহৃত হয়",
        "পুরুষের যৌনশক্তির জন্য প্রচলিতভাবে ব্যবহৃত হয়",
        "ছোট কিছু গবেষণায় যৌন আগ্রহ সামান্য বাড়ার ইঙ্গিত মিললেও বেশিরভাগ গবেষণায় সুস্থ পুরুষের টেস্টোস্টেরন বাড়েনি",
      ],
    },
    howToUse: {
      en: [
        "Fruit powder or a decoction is used traditionally — only on a practitioner's advice",
        "Buy tested products; avoid unlabelled powders",
      ],
      bn: [
        "ফলের গুঁড়া বা পাঁচন প্রচলিতভাবে ব্যবহৃত হয় — শুধু চিকিৎসকের পরামর্শে",
        "মানসম্পন্ন পণ্য কিনুন; লেবেলহীন গুঁড়া এড়িয়ে চলুন",
      ],
    },
    cautions: {
      en: [
        "Erectile problems can be an early sign of diabetes, heart disease or high BP — see a doctor; hawker mixes are often spiked with hidden drugs or steroids",
        "May lower blood pressure and blood sugar — don't combine with sildenafil, nitrates, BP or diabetes medicines without advice",
        "Avoid in pregnancy; kidney-stone pain or blood in urine needs a doctor",
      ],
      bn: [
        "লিঙ্গ শক্ত না হওয়া ডায়াবেটিস, হৃদ্‌রোগ বা উচ্চ রক্তচাপের প্রাথমিক লক্ষণ হতে পারে — ডাক্তার দেখান; ফেরিওয়ালার মিশ্রণে প্রায়ই গোপনে ওষুধ বা স্টেরয়েড থাকে",
        "রক্তচাপ ও রক্তে চিনি কমাতে পারে — পরামর্শ ছাড়া সিলডেনাফিল, নাইট্রেট, রক্তচাপ বা ডায়াবেটিসের ওষুধের সাথে খাবেন না",
        "গর্ভাবস্থায় খাবেন না; কিডনির পাথরের ব্যথা বা প্রস্রাবে রক্ত গেলে ডাক্তার দেখান",
      ],
    },
  },
  {
    id: "safed-musli",
    sci: "Chlorophytum borivilianum",
    foodId: null,
    tone: "sky",
    tags: ["men"],
    name: { en: "Safed musli", bn: "সফেদ মুসলি" },
    parts: { en: "Tuberous roots", bn: "কন্দযুক্ত মূল" },
    summary: {
      en: "White, finger-like dried roots sold as an expensive vitality tonic in herbal shops.",
      bn: "সাদা, আঙুলের মতো শুকনো মূল; ভেষজ দোকানে দামি যৌনশক্তির টনিক হিসেবে বিক্রি হয়।",
    },
    uses: {
      en: [
        "Traditionally used as a vitality and strength tonic for men",
        "Animal studies suggest aphrodisiac effects, but human evidence is very limited",
        "Traditionally used as a general tonic after illness",
      ],
      bn: [
        "পুরুষের যৌনশক্তি ও শারীরিক শক্তির টনিক হিসেবে প্রচলিত",
        "প্রাণী-গবেষণায় যৌনশক্তি বাড়ার ইঙ্গিত মিললেও মানুষের ওপর প্রমাণ খুবই সীমিত",
        "অসুখের পর সাধারণ টনিক হিসেবে প্রচলিত",
      ],
    },
    howToUse: {
      en: [
        "Root powder is traditionally taken with milk — only on a practitioner's advice",
        "Buy from a reliable source; it is often faked because of its price",
      ],
      bn: [
        "মূলের গুঁড়া দুধের সাথে খাওয়ার প্রচলন আছে — শুধু চিকিৎসকের পরামর্শে",
        "বিশ্বস্ত উৎস থেকে কিনুন; দাম বেশি বলে প্রায়ই নকল বিক্রি হয়",
      ],
    },
    cautions: {
      en: [
        "Erectile problems can be an early sign of diabetes, heart disease or high blood pressure — see a doctor first",
        "Hawker and 'kobiraji' mixes are often spiked with hidden sildenafil-type drugs or steroids",
        "Don't combine with sildenafil, nitrates or BP medicines without a doctor's advice",
      ],
      bn: [
        "লিঙ্গ শক্ত না হওয়ার সমস্যা ডায়াবেটিস, হৃদ্‌রোগ বা উচ্চ রক্তচাপের প্রাথমিক লক্ষণ হতে পারে — আগে ডাক্তার দেখান",
        "ফেরিওয়ালা বা কবিরাজি মিশ্রণে প্রায়ই গোপনে সিলডেনাফিল জাতীয় ওষুধ বা স্টেরয়েড মেশানো থাকে",
        "ডাক্তারের পরামর্শ ছাড়া সিলডেনাফিল, নাইট্রেট বা রক্তচাপের ওষুধের সাথে খাবেন না",
      ],
    },
  },
  {
    id: "ulotkombol",
    sci: "Abroma augusta",
    foodId: null,
    tone: "rose",
    tags: ["women", "diabetes"],
    name: { en: "Devil's cotton (Ulotkombol)", bn: "উলটকম্বল" },
    parts: { en: "Root bark, leaves", bn: "মূলের ছাল, পাতা" },
    summary: {
      en: "A shrub with drooping purple flowers, well known in Bengal folk medicine for painful and irregular periods.",
      bn: "ঝুলে থাকা বেগুনি ফুলের ঝোপজাতীয় গাছ; বাংলার লোকজ চিকিৎসায় মাসিকের ব্যথা ও অনিয়মে সুপরিচিত।",
    },
    uses: {
      en: [
        "Root bark is traditionally used for painful and irregular periods",
        "Traditionally used for white discharge",
        "Leaf extracts have lowered blood sugar in animal studies",
      ],
      bn: [
        "মাসিকের ব্যথা ও অনিয়মিত মাসিকে মূলের ছাল প্রচলিতভাবে ব্যবহৃত হয়",
        "সাদাস্রাবে প্রচলিতভাবে ব্যবহৃত হয়",
        "প্রাণী-গবেষণায় পাতার নির্যাস রক্তে চিনি কমিয়েছে",
      ],
    },
    howToUse: {
      en: [
        "Fresh root-bark juice or powder is traditionally taken during the days of the period — only on a practitioner's advice",
        "Leaves are soaked overnight and the water drunk, traditionally",
      ],
      bn: [
        "মাসিকের দিনগুলোতে মূলের ছালের রস বা গুঁড়া খাওয়ার প্রচলন আছে — শুধু চিকিৎসকের পরামর্শে",
        "প্রচলিতভাবে রাতে পাতা ভিজিয়ে সকালে সেই পানি খাওয়া হয়",
      ],
    },
    cautions: {
      en: [
        "Do not use in pregnancy or when trying to conceive",
        "Very painful, heavy or irregular periods need a check-up — PCOS, thyroid problems or fibroids are common causes",
        "May lower blood sugar — take care with diabetes medicine",
      ],
      bn: [
        "গর্ভাবস্থায় বা সন্তান নেওয়ার চেষ্টাকালে খাবেন না",
        "খুব বেশি ব্যথা, অতিরিক্ত বা অনিয়মিত মাসিক হলে পরীক্ষা করান — পিসিওএস, থাইরয়েড বা ফাইব্রয়েড সাধারণ কারণ",
        "রক্তে চিনি কমাতে পারে — ডায়াবেটিসের ওষুধ খেলে সতর্ক থাকুন",
      ],
    },
  },
  {
    id: "ashok",
    sci: "Saraca asoca",
    foodId: null,
    tone: "violet",
    tags: ["women"],
    name: { en: "Ashoka tree", bn: "অশোক" },
    parts: { en: "Bark, flowers", bn: "ছাল, ফুল" },
    summary: {
      en: "A graceful tree with orange-red flower clusters whose bark is a classic Ayurvedic remedy for women (as in ashokarishta).",
      bn: "কমলা-লাল থোকা ফুলের সুদৃশ্য গাছ; এর ছাল নারীদের জন্য আয়ুর্বেদের প্রাচীন ওষুধ (যেমন অশোকারিষ্ট)।",
    },
    uses: {
      en: [
        "Bark is traditionally used for heavy periods",
        "Traditionally used for menstrual pain and as a uterine tonic",
        "Lab studies show astringent and anti-inflammatory compounds; human evidence is limited",
      ],
      bn: [
        "অতিরিক্ত মাসিক রক্তক্ষরণে ছাল প্রচলিতভাবে ব্যবহৃত হয়",
        "মাসিকের ব্যথায় ও জরায়ুর টনিক হিসেবে প্রচলিত",
        "গবেষণাগারে সংকোচক ও প্রদাহনাশক উপাদান পাওয়া গেছে; মানুষের ওপর প্রমাণ সীমিত",
      ],
    },
    howToUse: {
      en: [
        "Bark is boiled in milk or water, or taken as ashokarishta — only on a practitioner's advice",
        "Buy from a reliable source — much 'ashok bark' on the market is from other trees",
      ],
      bn: [
        "ছাল দুধ বা পানিতে ফুটিয়ে, অথবা অশোকারিষ্ট হিসেবে খাওয়া হয় — শুধু চিকিৎসকের পরামর্শে",
        "বিশ্বস্ত উৎস থেকে কিনুন — বাজারের অনেক 'অশোকের ছাল' আসলে অন্য গাছের",
      ],
    },
    cautions: {
      en: [
        "Avoid in pregnancy",
        "Heavy bleeding needs a doctor — it can mean fibroids, hormone problems or cause anaemia",
        "The tall 'ashok' (debdaru) planted along roads is a different tree (Polyalthia) and not a substitute",
      ],
      bn: [
        "গর্ভাবস্থায় খাবেন না",
        "অতিরিক্ত রক্তক্ষরণে ডাক্তার দেখান — ফাইব্রয়েড বা হরমোনের সমস্যা হতে পারে, রক্তস্বল্পতাও হয়",
        "রাস্তার ধারে লাগানো লম্বা 'অশোক' (দেবদারু) ভিন্ন গাছ (পলিঅ্যালথিয়া), এর বিকল্প নয়",
      ],
    },
  },
  {
    id: "kalomegh",
    sci: "Andrographis paniculata",
    foodId: null,
    tone: "emerald",
    tags: ["liver", "immunity", "respiratory", "digestion"],
    name: { en: "Green chiretta (Kalomegh)", bn: "কালমেঘ" },
    parts: { en: "Leaves, whole plant", bn: "পাতা, পুরো গাছ" },
    summary: {
      en: "An extremely bitter herb, long given in Bangladeshi homes for fever, liver complaints and children's indigestion.",
      bn: "অত্যন্ত তেতো ভেষজ; জ্বর, লিভারের সমস্যা ও শিশুদের বদহজমে দেশের ঘরে ঘরে বহুদিন ধরে খাওয়ানো হয়।",
    },
    uses: {
      en: [
        "Some trials suggest it may shorten and ease common cold symptoms",
        "Traditionally used for fever and liver complaints",
        "Traditionally used for indigestion, loss of appetite and worms",
      ],
      bn: [
        "কিছু গবেষণা বলছে সাধারণ সর্দির উপসর্গ কমাতে ও দ্রুত সারাতে পারে",
        "জ্বর ও লিভারের সমস্যায় প্রচলিতভাবে ব্যবহৃত হয়",
        "বদহজম, ক্ষুধামান্দ্য ও কৃমিতে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "A teaspoon of fresh leaf juice, or small leaf pills (bori), is taken traditionally",
        "Leaves can be soaked overnight and the water drunk in the morning",
      ],
      bn: [
        "এক চা-চামচ তাজা পাতার রস বা পাতার ছোট বড়ি খাওয়ার প্রচলন আছে",
        "রাতে পাতা ভিজিয়ে সকালে সেই পানি খাওয়া যায়",
      ],
    },
    cautions: {
      en: [
        "Avoid in pregnancy and when trying to conceive",
        "Can cause nausea, diarrhoea or allergy; don't give strong doses to small children",
        "May lower blood pressure and interact with blood thinners and immune-suppressing medicines",
      ],
      bn: [
        "গর্ভাবস্থায় ও সন্তান নেওয়ার চেষ্টাকালে খাবেন না",
        "বমিভাব, ডায়রিয়া বা অ্যালার্জি হতে পারে; ছোট শিশুদের বেশি মাত্রায় দেবেন না",
        "রক্তচাপ কমাতে পারে এবং রক্ত পাতলা করার ও রোগ প্রতিরোধ দমনকারী ওষুধের সাথে প্রতিক্রিয়া করতে পারে",
      ],
    },
  },
  {
    id: "chirata",
    sci: "Swertia chirata",
    foodId: null,
    tone: "teal",
    tags: ["digestion", "liver", "diabetes"],
    name: { en: "Chiretta (Chirata)", bn: "চিরতা" },
    parts: { en: "Whole dried plant", bn: "শুকনো পুরো গাছ" },
    summary: {
      en: "A bitter Himalayan herb sold dried in Bangladeshi markets; 'chirata water' is a classic morning bitter.",
      bn: "হিমালয় অঞ্চলের তেতো ভেষজ, দেশের বাজারে শুকনো অবস্থায় বিক্রি হয়; সকালে 'চিরতার পানি' খাওয়া পুরোনো রীতি।",
    },
    uses: {
      en: [
        "Traditionally used to improve appetite and digestion",
        "Traditionally used for fever and liver complaints",
        "Animal studies suggest it may lower blood sugar",
        "Traditionally used for skin problems and worms",
      ],
      bn: [
        "রুচি ও হজম বাড়াতে প্রচলিতভাবে ব্যবহৃত হয়",
        "জ্বর ও লিভারের সমস্যায় প্রচলিতভাবে ব্যবহৃত হয়",
        "প্রাণী-গবেষণায় রক্তে চিনি কমার ইঙ্গিত মিলেছে",
        "চর্মরোগ ও কৃমিতে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Soak a small piece in a glass of water overnight and drink the water in the morning",
        "Take for short periods only, not every day for months",
      ],
      bn: [
        "এক টুকরো চিরতা রাতে এক গ্লাস পানিতে ভিজিয়ে সকালে সেই পানি খান",
        "অল্প দিনের জন্য খান, মাসের পর মাস প্রতিদিন নয়",
      ],
    },
    cautions: {
      en: [
        "May lower blood sugar — take care with diabetes medicine",
        "Avoid in pregnancy and with stomach ulcers",
      ],
      bn: [
        "রক্তে চিনি কমাতে পারে — ডায়াবেটিসের ওষুধ খেলে সতর্ক থাকুন",
        "গর্ভাবস্থায় ও পাকস্থলীতে ঘা থাকলে খাবেন না",
      ],
    },
  },
  {
    id: "gulancha",
    sci: "Tinospora cordifolia",
    foodId: null,
    tone: "lime",
    tags: ["immunity", "diabetes", "joints"],
    name: { en: "Heart-leaved moonseed (Gulancha)", bn: "গুলঞ্চ" },
    parts: { en: "Stem", bn: "কাণ্ড" },
    summary: {
      en: "A climbing vine with heart-shaped leaves, known as giloy in Ayurveda and used as a fever and immunity tonic.",
      bn: "পান-আকৃতির পাতার লতানো গাছ; আয়ুর্বেদে গিলয় নামে পরিচিত, জ্বর ও রোগ প্রতিরোধের টনিক হিসেবে ব্যবহৃত।",
    },
    uses: {
      en: [
        "Traditionally used for recurring fevers",
        "Lab and small studies suggest effects on the immune system",
        "May modestly lower blood sugar",
        "Traditionally used for joint pain and gout",
      ],
      bn: [
        "বারবার জ্বরে প্রচলিতভাবে ব্যবহৃত হয়",
        "গবেষণাগারে ও ছোট গবেষণায় রোগ প্রতিরোধ ব্যবস্থায় প্রভাবের ইঙ্গিত মিলেছে",
        "রক্তে চিনি সামান্য কমাতে পারে",
        "গিঁটের ব্যথা ও গেঁটেবাতে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Stem pieces are boiled in water to make a decoction — for short periods only",
        "Use correctly identified plant from a reliable source",
      ],
      bn: [
        "কাণ্ডের টুকরো পানিতে ফুটিয়ে পাঁচন বানানো হয় — অল্প দিনের জন্য",
        "বিশ্বস্ত উৎস থেকে সঠিকভাবে চেনা গাছ নিন",
      ],
    },
    cautions: {
      en: [
        "Cases of liver injury have been reported with regular use — stop if you notice yellow eyes or dark urine",
        "Avoid in pregnancy and autoimmune diseases",
        "May lower blood sugar — take care with diabetes medicine",
      ],
      bn: [
        "নিয়মিত খাওয়ায় লিভারের ক্ষতির ঘটনা দেখা গেছে — চোখ হলুদ বা প্রস্রাব গাঢ় হলে বন্ধ করুন",
        "গর্ভাবস্থায় ও অটোইমিউন রোগে খাবেন না",
        "রক্তে চিনি কমাতে পারে — ডায়াবেটিসের ওষুধ খেলে সতর্ক থাকুন",
      ],
    },
  },
  {
    id: "haritaki",
    sci: "Terminalia chebula",
    foodId: null,
    tone: "amber",
    tags: ["digestion"],
    name: { en: "Chebulic myrobalan (Haritaki)", bn: "হরীতকী" },
    parts: { en: "Dried fruit", bn: "শুকনো ফল" },
    summary: {
      en: "A wrinkled dried fruit, one of the three fruits of triphala, traditionally used for constipation.",
      bn: "কোঁচকানো শুকনো ফল; ত্রিফলার তিনটি ফলের একটি, কোষ্ঠকাঠিন্যে প্রচলিতভাবে ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "Traditionally used as a mild laxative for constipation",
        "Used with amloki and bohera in triphala",
        "Gargling with its water is traditional for gum and mouth problems",
      ],
      bn: [
        "কোষ্ঠকাঠিন্যে হালকা জোলাপ হিসেবে প্রচলিত",
        "আমলকী ও বহেড়ার সাথে মিলিয়ে ত্রিফলা তৈরি হয়",
        "মাড়ি ও মুখের সমস্যায় এর পানি দিয়ে কুলকুচি করা প্রচলিত",
      ],
    },
    howToUse: {
      en: [
        "Take ½ teaspoon of powder with warm water at bedtime",
        "Soak triphala powder overnight and drink the water in the morning",
      ],
      bn: [
        "রাতে ঘুমানোর আগে ½ চা-চামচ গুঁড়া গরম পানির সাথে খান",
        "রাতে ত্রিফলার গুঁড়া ভিজিয়ে সকালে সেই পানি খান",
      ],
    },
    cautions: {
      en: [
        "Avoid in pregnancy",
        "Too much can cause loose motion and dehydration",
        "Long-term constipation or a change in bowel habit needs a doctor's check",
      ],
      bn: [
        "গর্ভাবস্থায় খাবেন না",
        "বেশি খেলে পাতলা পায়খানা ও পানিশূন্যতা হতে পারে",
        "দীর্ঘদিনের কোষ্ঠকাঠিন্য বা মলত্যাগের অভ্যাসে পরিবর্তন হলে ডাক্তার দেখান",
      ],
    },
  },
  {
    id: "bohera",
    sci: "Terminalia bellirica",
    foodId: null,
    tone: "orange",
    tags: ["respiratory", "digestion"],
    name: { en: "Belleric myrobalan (Bohera)", bn: "বহেড়া" },
    parts: { en: "Dried fruit", bn: "শুকনো ফল" },
    summary: {
      en: "A round dried fruit, the third fruit of triphala, traditionally used for cough and hoarse voice.",
      bn: "গোলাকার শুকনো ফল; ত্রিফলার তৃতীয় ফল, কাশি ও গলা বসে যাওয়ায় প্রচলিতভাবে ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "Traditionally used for cough, sore throat and hoarse voice",
        "Part of triphala, traditionally used for digestion",
        "Contains antioxidant tannins",
      ],
      bn: [
        "কাশি, গলাব্যথা ও গলা বসে যাওয়ায় প্রচলিতভাবে ব্যবহৃত হয়",
        "ত্রিফলার অংশ, হজমে প্রচলিতভাবে ব্যবহৃত হয়",
        "এতে অ্যান্টিঅক্সিডেন্ট ট্যানিন আছে",
      ],
    },
    howToUse: {
      en: [
        "Suck a small piece of the dried fruit for a sore throat",
        "Take powder with honey for cough",
      ],
      bn: [
        "গলাব্যথায় শুকনো ফলের ছোট এক টুকরো মুখে রেখে চুষুন",
        "কাশিতে গুঁড়া মধুর সাথে খান",
      ],
    },
    cautions: {
      en: [
        "Avoid in pregnancy",
        "Large amounts can cause loose motion",
        "See a doctor if cough lasts more than 2 weeks",
      ],
      bn: [
        "গর্ভাবস্থায় খাবেন না",
        "বেশি খেলে পাতলা পায়খানা হতে পারে",
        "কাশি ২ সপ্তাহের বেশি থাকলে ডাক্তার দেখান",
      ],
    },
  },
  {
    id: "ishabgul",
    sci: "Plantago ovata",
    foodId: null,
    tone: "sky",
    tags: ["digestion", "heart", "diabetes"],
    name: { en: "Psyllium husk (Ishabgul)", bn: "ইসবগুল" },
    parts: { en: "Seed husk", bn: "বীজের ভুসি" },
    summary: {
      en: "A soft husk sold in every pharmacy and grocery, with good evidence as a gentle fibre for the bowels.",
      bn: "প্রতিটি ফার্মেসি ও মুদি দোকানে পাওয়া নরম ভুসি; পেট পরিষ্কারে মৃদু আঁশ হিসেবে এর ভালো প্রমাণ আছে।",
    },
    uses: {
      en: [
        "Good evidence for easing constipation",
        "Can help firm up loose stools and ease IBS symptoms",
        "Regular use can modestly lower LDL cholesterol",
        "May help lower blood sugar after meals",
      ],
      bn: [
        "কোষ্ঠকাঠিন্য কমাতে এর ভালো প্রমাণ আছে",
        "পাতলা পায়খানা ঘন করতে ও আইবিএস-এর উপসর্গ কমাতে সাহায্য করে",
        "নিয়মিত খেলে এলডিএল কোলেস্টেরল সামান্য কমতে পারে",
        "খাবারের পর রক্তে চিনি কমাতে সাহায্য করতে পারে",
      ],
    },
    howToUse: {
      en: [
        "Stir 1–2 teaspoons into a full glass of water or sherbet and drink right away",
        "Drink extra water through the day",
      ],
      bn: [
        "১–২ চা-চামচ ইসবগুল এক গ্লাস পানি বা শরবতে মিশিয়ে সাথে সাথে খান",
        "সারাদিন বেশি করে পানি পান করুন",
      ],
    },
    cautions: {
      en: [
        "Always take with plenty of water — taken dry it can choke or block the gut",
        "Take other medicines at least 2 hours apart",
        "May cause gas and bloating at first",
      ],
      bn: [
        "সবসময় যথেষ্ট পানির সাথে খান — শুকনো খেলে গলায় আটকে যেতে বা অন্ত্র বন্ধ হতে পারে",
        "অন্য ওষুধ থেকে অন্তত ২ ঘণ্টা ব্যবধানে খান",
        "শুরুতে গ্যাস ও পেট ফাঁপা হতে পারে",
      ],
    },
  },
  {
    id: "nishinda",
    sci: "Vitex negundo",
    foodId: null,
    tone: "teal",
    tags: ["joints", "respiratory"],
    name: { en: "Five-leaved chaste tree (Nishinda)", bn: "নিশিন্দা" },
    parts: { en: "Leaves", bn: "পাতা" },
    summary: {
      en: "A hedge shrub with five-fingered aromatic leaves, used for pain, cough and keeping insects away.",
      bn: "পাঁচ আঙুলের মতো সুগন্ধি পাতার বেড়ার গাছ; ব্যথা, কাশি ও পোকা তাড়াতে ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "Warm leaves are traditionally applied on painful, swollen joints",
        "Traditionally used for cough and cold",
        "Dried leaves are kept with stored rice and clothes to repel insects",
      ],
      bn: [
        "ব্যথা ও ফোলা গিঁটে গরম পাতার সেঁক দেওয়া প্রচলিত",
        "সর্দি-কাশিতে প্রচলিতভাবে ব্যবহৃত হয়",
        "পোকা তাড়াতে শুকনো পাতা চাল ও কাপড়ের সাথে রাখা হয়",
      ],
    },
    howToUse: {
      en: [
        "Warm a few leaves and tie them over the painful area",
        "Boil leaves in water and inhale the steam for a blocked nose",
      ],
      bn: [
        "কয়েকটি পাতা গরম করে ব্যথার জায়গায় বেঁধে দিন",
        "বন্ধ নাকে পাতা পানিতে ফুটিয়ে ভাপ নিন",
      ],
    },
    cautions: {
      en: [
        "Avoid taking it by mouth in pregnancy",
        "Leaf smoke can trigger asthma attacks",
        "Long-lasting joint swelling needs a doctor's check",
      ],
      bn: [
        "গর্ভাবস্থায় খাবেন না",
        "পাতার ধোঁয়া হাঁপানির টান বাড়াতে পারে",
        "গিঁট দীর্ঘদিন ফুলে থাকলে ডাক্তার দেখান",
      ],
    },
  },
  {
    id: "pathorkuchi",
    sci: "Kalanchoe pinnata",
    foodId: null,
    tone: "emerald",
    tags: ["urinary", "skin"],
    name: { en: "Air plant (Pathorkuchi)", bn: "পাথরকুচি" },
    parts: { en: "Leaves", bn: "পাতা" },
    summary: {
      en: "A fleshy-leaved plant that sprouts new plants from its leaf edges, popular as a folk remedy for kidney stones.",
      bn: "পাতার কিনারা থেকে নতুন চারা গজানো রসালো পাতার গাছ; কিডনির পাথরের লোকজ টোটকা হিসেবে জনপ্রিয়।",
    },
    uses: {
      en: [
        "Leaf juice is traditionally used for kidney and urinary stones — evidence is very limited",
        "Warmed leaves are traditionally applied on boils, wounds and swelling",
        "Traditionally used for burning urination",
      ],
      bn: [
        "কিডনি ও মূত্রনালির পাথরে পাতার রস প্রচলিত — তবে প্রমাণ খুবই সীমিত",
        "ফোড়া, ক্ষত ও ফোলায় গরম পাতা লাগানো প্রচলিত",
        "প্রস্রাবে জ্বালাপোড়ায় প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Chew 1–2 washed leaves, or take a little juice, for short periods only",
        "Warm a leaf lightly and place it over a boil",
      ],
      bn: [
        "১–২টি ধোয়া পাতা চিবিয়ে বা অল্প রস খান, শুধু অল্প দিনের জন্য",
        "পাতা হালকা গরম করে ফোড়ার ওপর রাখুন",
      ],
    },
    cautions: {
      en: [
        "Contains heart-active compounds — large amounts can be toxic; avoid with heart medicines such as digoxin",
        "Avoid in pregnancy",
        "Stone pain, fever or blood in urine needs a doctor and an ultrasound",
      ],
      bn: [
        "এতে হৃদ্‌যন্ত্রে প্রভাব ফেলা উপাদান আছে — বেশি খেলে বিষক্রিয়া হতে পারে; ডিগক্সিনের মতো হৃদ্‌রোগের ওষুধের সাথে খাবেন না",
        "গর্ভাবস্থায় খাবেন না",
        "পাথরের ব্যথা, জ্বর বা প্রস্রাবে রক্ত গেলে ডাক্তার দেখান ও আলট্রাসনোগ্রাম করান",
      ],
    },
  },
  {
    id: "durba",
    sci: "Cynodon dactylon",
    foodId: null,
    tone: "lime",
    tags: ["skin", "urinary"],
    name: { en: "Bermuda grass (Durba)", bn: "দূর্বা ঘাস" },
    parts: { en: "Whole grass", bn: "পুরো ঘাস" },
    summary: {
      en: "The common lawn grass of Bangladesh, whose crushed blades are a village first-aid for small cuts.",
      bn: "দেশের অতি পরিচিত ঘাস; ছোট কাটায় দূর্বা বাটা লাগানো গ্রামের প্রাথমিক চিকিৎসা।",
    },
    uses: {
      en: [
        "Crushed grass is traditionally pressed on small cuts to stop bleeding",
        "Juice is traditionally used for nosebleeds",
        "Traditionally used for burning urination",
      ],
      bn: [
        "ছোট কাটায় রক্ত বন্ধ করতে দূর্বা বাটা চেপে ধরা প্রচলিত",
        "নাক দিয়ে রক্ত পড়ায় এর রস প্রচলিতভাবে ব্যবহৃত হয়",
        "প্রস্রাবে জ্বালাপোড়ায় প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Wash clean grass well, crush it and press on a small cut",
        "Take 1–2 teaspoons of fresh juice, traditionally",
      ],
      bn: [
        "পরিষ্কার ঘাস ভালো করে ধুয়ে বেটে ছোট কাটায় চেপে ধরুন",
        "প্রচলিতভাবে ১–২ চা-চামচ তাজা রস খাওয়া হয়",
      ],
    },
    cautions: {
      en: [
        "Pick grass away from roads, drains and sprayed fields — wash very well",
        "Clean deep or dirty wounds properly and get a tetanus shot",
        "Grass pollen can cause allergy in some people",
      ],
      bn: [
        "রাস্তা, নর্দমা ও কীটনাশক দেওয়া জমি থেকে দূরের ঘাস নিন — খুব ভালো করে ধুয়ে নিন",
        "গভীর বা নোংরা ক্ষত ভালো করে পরিষ্কার করুন এবং টিটেনাসের টিকা নিন",
        "কারও কারও ঘাসের রেণুতে অ্যালার্জি হতে পারে",
      ],
    },
  },
  {
    id: "apang",
    sci: "Achyranthes aspera",
    foodId: null,
    tone: "amber",
    tags: ["respiratory", "skin", "urinary"],
    name: { en: "Prickly chaff flower (Apang)", bn: "আপাং" },
    parts: { en: "Roots, leaves, twigs, seeds", bn: "মূল, পাতা, ডাল, বীজ" },
    summary: {
      en: "A roadside weed whose spiky seeds stick to clothes; its twig is a traditional toothbrush.",
      bn: "রাস্তার ধারের আগাছা; এর কাঁটাওয়ালা বীজ কাপড়ে আটকে যায়, ডাল ঐতিহ্যবাহী দাঁতন।",
    },
    uses: {
      en: [
        "Twigs are traditionally used to clean teeth",
        "Traditionally used for cough and asthma",
        "Leaf paste is traditionally applied on insect bites and boils",
        "Traditionally used for urinary stones",
      ],
      bn: [
        "দাঁত পরিষ্কারে ডাল প্রচলিতভাবে ব্যবহৃত হয়",
        "কাশি ও হাঁপানিতে প্রচলিতভাবে ব্যবহৃত হয়",
        "পোকার কামড় ও ফোড়ায় পাতা বাটা লাগানো প্রচলিত",
        "মূত্রনালির পাথরে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Use a fresh, washed twig as a tooth stick",
        "Apply crushed leaves on an insect bite",
      ],
      bn: [
        "তাজা, ধোয়া ডাল দাঁতন হিসেবে ব্যবহার করুন",
        "পোকার কামড়ে পাতা বেটে লাগান",
      ],
    },
    cautions: {
      en: [
        "Never take in pregnancy — the root is traditionally used to cause abortion",
        "Avoid taking by mouth without a practitioner's advice",
      ],
      bn: [
        "গর্ভাবস্থায় একেবারেই খাবেন না — প্রচলিতভাবে এর মূল গর্ভপাত ঘটাতে ব্যবহৃত হয়",
        "চিকিৎসকের পরামর্শ ছাড়া খাবেন না",
      ],
    },
  },
  {
    id: "punarnava",
    sci: "Boerhavia diffusa",
    foodId: null,
    tone: "sky",
    tags: ["urinary", "liver"],
    name: { en: "Hogweed (Punarnava)", bn: "পুনর্নবা" },
    parts: { en: "Whole plant, root, leaves", bn: "পুরো গাছ, মূল, পাতা" },
    summary: {
      en: "A creeping weed with small pink flowers, eaten as shak and used in Ayurveda for swelling.",
      bn: "ছোট গোলাপি ফুলের লতানো আগাছা; শাক হিসেবে খাওয়া হয় এবং আয়ুর্বেদে শরীর ফোলায় ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "Traditionally used as a diuretic for swelling",
        "Traditionally used for jaundice and liver complaints",
        "Leaves are eaten as a leafy vegetable",
      ],
      bn: [
        "শরীর ফোলায় প্রস্রাব বাড়ানোর জন্য প্রচলিতভাবে ব্যবহৃত হয়",
        "জন্ডিস ও লিভারের সমস্যায় প্রচলিতভাবে ব্যবহৃত হয়",
        "পাতা শাক হিসেবে খাওয়া হয়",
      ],
    },
    howToUse: {
      en: [
        "Cook young leaves as shak with garlic",
        "Root decoction is used traditionally — only on a practitioner's advice",
      ],
      bn: [
        "কচি পাতা রসুন দিয়ে শাক হিসেবে রান্না করুন",
        "মূলের পাঁচন প্রচলিত — শুধু চিকিৎসকের পরামর্শে",
      ],
    },
    cautions: {
      en: [
        "Swollen legs or face can mean kidney, heart or liver disease — see a doctor first",
        "May add to the effect of diuretic and BP medicines",
        "Avoid medicinal amounts in pregnancy",
      ],
      bn: [
        "পা বা মুখ ফোলা কিডনি, হৃদ্‌রোগ বা লিভারের রোগের লক্ষণ হতে পারে — আগে ডাক্তার দেখান",
        "প্রস্রাব বাড়ানোর ও রক্তচাপের ওষুধের প্রভাব বাড়াতে পারে",
        "গর্ভাবস্থায় ওষুধ হিসেবে খাবেন না",
      ],
    },
  },
  {
    id: "brahmi",
    sci: "Bacopa monnieri",
    foodId: null,
    tone: "violet",
    tags: ["mind"],
    name: { en: "Water hyssop (Brahmi)", bn: "ব্রাহ্মী" },
    parts: { en: "Leaves, whole plant", bn: "পাতা, পুরো গাছ" },
    summary: {
      en: "A small succulent herb of wet places, eaten as brahmi shak and studied for memory.",
      bn: "ভেজা জায়গার ছোট রসালো শাক; ব্রাহ্মী শাক হিসেবে খাওয়া হয় এবং স্মৃতিশক্তির জন্য গবেষণাধীন।",
    },
    uses: {
      en: [
        "Small trials suggest it may modestly improve memory after about 12 weeks of use",
        "Traditionally used for anxiety and restlessness",
        "Eaten as a leafy vegetable in Bangladesh",
      ],
      bn: [
        "ছোট কিছু গবেষণায় প্রায় ১২ সপ্তাহ খাওয়ার পর স্মৃতিশক্তি সামান্য বাড়ার ইঙ্গিত মিলেছে",
        "উদ্বেগ ও অস্থিরতায় প্রচলিতভাবে ব্যবহৃত হয়",
        "দেশে শাক হিসেবে খাওয়া হয়",
      ],
    },
    howToUse: {
      en: [
        "Cook as shak or make brahmi bhorta",
        "Take a little fresh leaf juice with honey",
      ],
      bn: [
        "শাক রান্না করুন বা ব্রাহ্মী ভর্তা বানান",
        "অল্প তাজা পাতার রস মধুর সাথে খান",
      ],
    },
    cautions: {
      en: [
        "Can cause nausea, stomach cramps and loose motion",
        "May slow the heart rate and interact with thyroid medicines",
        "Avoid medicinal amounts in pregnancy",
      ],
      bn: [
        "বমিভাব, পেট কামড়ানো ও পাতলা পায়খানা হতে পারে",
        "হৃৎস্পন্দন ধীর করতে পারে এবং থাইরয়েডের ওষুধের সাথে প্রতিক্রিয়া করতে পারে",
        "গর্ভাবস্থায় ওষুধ হিসেবে খাবেন না",
      ],
    },
  },
  {
    id: "mehedi",
    sci: "Lawsonia inermis",
    foodId: null,
    tone: "orange",
    tags: ["skin"],
    name: { en: "Henna (Mehedi)", bn: "মেহেদি" },
    parts: { en: "Leaves", bn: "পাতা" },
    summary: {
      en: "The leaves behind every wedding and Eid design, also used as a natural hair dye and conditioner.",
      bn: "বিয়ে ও ঈদের নকশার পরিচিত পাতা; প্রাকৃতিক চুলের রং ও কন্ডিশনার হিসেবেও ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "A natural dye for hands, nails and hair",
        "Traditionally used for dandruff and to condition hair",
        "Applied on palms and soles for a cooling effect",
        "Has antifungal properties in lab studies",
      ],
      bn: [
        "হাত, নখ ও চুলের প্রাকৃতিক রং",
        "খুশকি দূর করতে ও চুলের যত্নে প্রচলিত",
        "ঠান্ডা অনুভূতির জন্য হাত-পায়ের তালুতে লাগানো হয়",
        "গবেষণাগারে ছত্রাকনাশক গুণ দেখা গেছে",
      ],
    },
    howToUse: {
      en: [
        "Grind fresh leaves into a paste, apply for 1–2 hours, then wash off",
        "Mix leaf powder with water or tea and apply to hair",
      ],
      bn: [
        "তাজা পাতা বেটে লাগিয়ে ১–২ ঘণ্টা রেখে ধুয়ে ফেলুন",
        "পাতার গুঁড়া পানি বা চায়ের লিকারে মিশিয়ে চুলে লাগান",
      ],
    },
    cautions: {
      en: [
        "Avoid 'black henna' and instant cone mehedi — they may contain PPD and other chemicals that cause severe allergy",
        "Never apply on babies, especially with G6PD deficiency — it can cause serious red-cell breakdown",
        "Do a small patch test first",
      ],
      bn: [
        "'কালো মেহেদি' ও ইনস্ট্যান্ট টিউব মেহেদি এড়িয়ে চলুন — এতে পিপিডি সহ রাসায়নিক থাকতে পারে যা তীব্র অ্যালার্জি ঘটায়",
        "শিশুদের কখনো লাগাবেন না, বিশেষ করে জি৬পিডি ঘাটতি থাকলে — লোহিত কণিকা ভেঙে গুরুতর সমস্যা হতে পারে",
        "আগে ত্বকের ছোট জায়গায় লাগিয়ে পরীক্ষা করুন",
      ],
    },
  },
  {
    id: "joba",
    sci: "Hibiscus rosa-sinensis",
    foodId: null,
    tone: "rose",
    tags: ["skin", "women"],
    name: { en: "Chinese hibiscus (Joba)", bn: "জবা" },
    parts: { en: "Flowers, leaves", bn: "ফুল, পাতা" },
    summary: {
      en: "The bright red garden flower, used in homemade hair oils and folk remedies for women.",
      bn: "বাগানের উজ্জ্বল লাল ফুল; ঘরে বানানো চুলের তেল ও নারীদের লোকজ টোটকায় ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "Flowers and leaves are traditionally used in hair oil for hair fall and shine",
        "Crushed leaves are used as a natural hair wash",
        "Traditionally used for heavy periods; animal studies suggest anti-fertility effects",
      ],
      bn: [
        "চুল পড়া কমাতে ও চুল উজ্জ্বল করতে ফুল ও পাতা দিয়ে তেল বানানো প্রচলিত",
        "পাতা বেটে প্রাকৃতিক শ্যাম্পু হিসেবে ব্যবহার করা হয়",
        "অতিরিক্ত মাসিকে প্রচলিত; প্রাণী-গবেষণায় গর্ভধারণে বাধা দেওয়ার প্রভাব দেখা গেছে",
      ],
    },
    howToUse: {
      en: [
        "Heat a few flowers and leaves in coconut oil, cool, strain and use as hair oil",
        "Grind leaves with water and use the paste to wash hair",
      ],
      bn: [
        "কয়েকটি ফুল ও পাতা নারকেল তেলে জ্বাল দিয়ে ঠান্ডা করে ছেঁকে চুলের তেল হিসেবে ব্যবহার করুন",
        "পাতা পানি দিয়ে বেটে সেই পেস্ট দিয়ে চুল ধুয়ে নিন",
      ],
    },
    cautions: {
      en: [
        "Do not take by mouth when pregnant or trying to conceive",
        "Hair fall that is sudden or patchy may need a doctor — thyroid problems and anaemia are common causes",
      ],
      bn: [
        "গর্ভাবস্থায় বা সন্তান নেওয়ার চেষ্টাকালে খাবেন না",
        "হঠাৎ বা ছোপ ছোপ চুল পড়লে ডাক্তার দেখান — থাইরয়েড ও রক্তস্বল্পতা সাধারণ কারণ",
      ],
    },
  },
  {
    id: "bhui-amla",
    sci: "Phyllanthus niruri / P. amarus",
    foodId: null,
    tone: "emerald",
    tags: ["liver", "urinary"],
    name: { en: "Stonebreaker (Bhui amla)", bn: "ভুঁই আমলা" },
    parts: { en: "Whole plant", bn: "পুরো গাছ" },
    summary: {
      en: "A tiny weed with seeds lined under its leaves, a common folk remedy for jaundice.",
      bn: "পাতার নিচে সারি সারি ছোট ফলওয়ালা ক্ষুদ্র আগাছা; জন্ডিসের প্রচলিত লোকজ টোটকা।",
    },
    uses: {
      en: [
        "Traditionally used for jaundice and liver complaints",
        "Studied for hepatitis B with mixed results",
        "Traditionally used for kidney stones (hence 'stonebreaker')",
      ],
      bn: [
        "জন্ডিস ও লিভারের সমস্যায় প্রচলিতভাবে ব্যবহৃত হয়",
        "হেপাটাইটিস বি-তে গবেষণা হয়েছে, ফলাফল মিশ্র",
        "কিডনির পাথরে প্রচলিতভাবে ব্যবহৃত হয়",
      ],
    },
    howToUse: {
      en: [
        "Fresh plant juice or a decoction is used traditionally for a short time",
        "Use only alongside proper medical care, not instead of it",
      ],
      bn: [
        "প্রচলিতভাবে অল্প দিনের জন্য তাজা গাছের রস বা পাঁচন খাওয়া হয়",
        "সঠিক চিকিৎসার পাশাপাশি ব্যবহার করুন, বদলে নয়",
      ],
    },
    cautions: {
      en: [
        "Jaundice needs blood tests — it can be hepatitis or a blocked bile duct",
        "May lower blood sugar and blood pressure",
        "Avoid in pregnancy",
      ],
      bn: [
        "জন্ডিসে রক্ত পরীক্ষা জরুরি — হেপাটাইটিস বা পিত্তনালি বন্ধ হওয়া কারণ হতে পারে",
        "রক্তে চিনি ও রক্তচাপ কমাতে পারে",
        "গর্ভাবস্থায় খাবেন না",
      ],
    },
  },
  {
    id: "sonapata",
    sci: "Senna alexandrina",
    foodId: null,
    tone: "amber",
    tags: ["digestion"],
    name: { en: "Senna (Sonapata)", bn: "সোনাপাতা" },
    parts: { en: "Leaves, pods", bn: "পাতা, ফল" },
    summary: {
      en: "Dried leaves sold in herbal shops as a strong laxative — effective, but only for occasional short-term use.",
      bn: "ভেষজ দোকানে বিক্রি হওয়া শুকনো পাতা, কড়া জোলাপ — কার্যকর, তবে শুধু মাঝেমধ্যে অল্প দিনের জন্য।",
    },
    uses: {
      en: [
        "An approved stimulant laxative for occasional constipation",
        "Used to clear the bowel before some medical procedures, under supervision",
        "Works within 6–12 hours",
      ],
      bn: [
        "মাঝেমধ্যে কোষ্ঠকাঠিন্যে স্বীকৃত উত্তেজক জোলাপ",
        "কিছু চিকিৎসা-পরীক্ষার আগে চিকিৎসকের তত্ত্বাবধানে পেট পরিষ্কারে ব্যবহৃত হয়",
        "৬–১২ ঘণ্টার মধ্যে কাজ করে",
      ],
    },
    howToUse: {
      en: [
        "Steep a few dried leaves in hot water and drink at bedtime",
        "Use for no more than about a week; try fibre and water first",
      ],
      bn: [
        "কয়েকটি শুকনো পাতা গরম পানিতে ভিজিয়ে রাতে ঘুমানোর আগে খান",
        "প্রায় এক সপ্তাহের বেশি খাবেন না; আগে আঁশ ও পানি বাড়িয়ে দেখুন",
      ],
    },
    cautions: {
      en: [
        "Short-term only — long use can cause dependence and low potassium",
        "Avoid in pregnancy, breastfeeding and children unless a doctor advises",
        "Don't use with belly pain, vomiting, bowel blockage or inflammatory bowel disease",
      ],
      bn: [
        "শুধু অল্প দিনের জন্য — দীর্ঘদিন খেলে অভ্যাস হয়ে যায় ও পটাশিয়াম কমে যায়",
        "ডাক্তার না বললে গর্ভাবস্থায়, বুকের দুধ খাওয়ানোর সময় ও শিশুদের দেবেন না",
        "পেটব্যথা, বমি, অন্ত্র বন্ধ বা অন্ত্রের প্রদাহজনিত রোগে খাবেন না",
      ],
    },
  },
  {
    id: "joshtimodhu",
    sci: "Glycyrrhiza glabra",
    foodId: null,
    tone: "teal",
    tags: ["respiratory", "digestion"],
    name: { en: "Licorice root (Joshtimodhu)", bn: "যষ্টিমধু" },
    parts: { en: "Root", bn: "মূল" },
    summary: {
      en: "A naturally sweet root, chewed for sore throat and used in many cough lozenges.",
      bn: "প্রাকৃতিকভাবে মিষ্টি মূল; গলাব্যথায় চিবানো হয় এবং অনেক কাশির লজেন্সে ব্যবহৃত হয়।",
    },
    uses: {
      en: [
        "Traditionally used to soothe sore throat, cough and hoarse voice",
        "Traditionally used for acidity and stomach ulcers",
        "Licorice gargle before surgery may reduce post-operative sore throat",
      ],
      bn: [
        "গলাব্যথা, কাশি ও গলা বসে যাওয়ায় প্রচলিতভাবে ব্যবহৃত হয়",
        "অ্যাসিডিটি ও পাকস্থলীর ঘায়ে প্রচলিতভাবে ব্যবহৃত হয়",
        "অস্ত্রোপচারের আগে যষ্টিমধুর কুলকুচি পরবর্তী গলাব্যথা কমাতে পারে",
      ],
    },
    howToUse: {
      en: [
        "Chew a small stick for a sore throat",
        "Boil a pinch of powder in tea with ginger and tulsi",
      ],
      bn: [
        "গলাব্যথায় ছোট এক টুকরো চিবান",
        "আদা ও তুলসীর সাথে এক চিমটি গুঁড়া চায়ে ফুটিয়ে খান",
      ],
    },
    cautions: {
      en: [
        "Raises blood pressure and lowers potassium — avoid with high BP, heart or kidney disease",
        "Avoid in pregnancy — linked to early birth",
        "Don't use regularly for more than a few weeks",
      ],
      bn: [
        "রক্তচাপ বাড়ায় ও পটাশিয়াম কমায় — উচ্চ রক্তচাপ, হৃদ্‌রোগ বা কিডনির রোগে খাবেন না",
        "গর্ভাবস্থায় খাবেন না — সময়ের আগে প্রসবের সাথে সম্পর্ক পাওয়া গেছে",
        "কয়েক সপ্তাহের বেশি নিয়মিত খাবেন না",
      ],
    },
  },
  {
    id: "bel",
    sci: "Aegle marmelos",
    foodId: "bel",
    tone: "lime",
    tags: ["digestion"],
    name: { en: "Wood apple (Bel)", bn: "বেল" },
    parts: { en: "Fruit, leaves", bn: "ফল, পাতা" },
    summary: {
      en: "A hard-shelled summer fruit whose sherbet is a favourite cooling drink and a traditional stomach remedy.",
      bn: "শক্ত খোসার গ্রীষ্মকালীন ফল; বেলের শরবত প্রিয় ঠান্ডা পানীয় এবং পেটের সমস্যার প্রচলিত টোটকা।",
    },
    uses: {
      en: [
        "Ripe fruit is traditionally used to relieve constipation",
        "Unripe fruit is traditionally used for loose motion and dysentery",
        "Leaves have lowered blood sugar in animal studies",
        "A good source of fibre",
      ],
      bn: [
        "পাকা বেল কোষ্ঠকাঠিন্য দূর করতে প্রচলিত",
        "কাঁচা বেল পাতলা পায়খানা ও আমাশয়ে প্রচলিত",
        "প্রাণী-গবেষণায় পাতা রক্তে চিনি কমিয়েছে",
        "আঁশের ভালো উৎস",
      ],
    },
    howToUse: {
      en: [
        "Mash ripe pulp with water, strain and make sherbet with little or no sugar",
        "Roasted unripe bel pulp is eaten traditionally for loose motion",
      ],
      bn: [
        "পাকা বেলের শাঁস পানিতে চটকে ছেঁকে কম চিনি দিয়ে শরবত বানান",
        "পাতলা পায়খানায় কাঁচা বেল পুড়িয়ে শাঁস খাওয়ার প্রচলন আছে",
      ],
    },
    cautions: {
      en: [
        "For loose motion, give ORS first — see a doctor if there is blood or it lasts",
        "Too much can cause bloating or constipation",
        "Leaf extracts may lower blood sugar — take care with diabetes medicine",
      ],
      bn: [
        "পাতলা পায়খানায় আগে স্যালাইন খান — রক্ত গেলে বা না সারলে ডাক্তার দেখান",
        "বেশি খেলে পেট ফাঁপা বা কোষ্ঠকাঠিন্য হতে পারে",
        "পাতার নির্যাস রক্তে চিনি কমাতে পারে — ডায়াবেটিসের ওষুধ খেলে সতর্ক থাকুন",
      ],
    },
  },
  {
    id: "keshuti",
    sci: "Eclipta prostrata",
    foodId: null,
    tone: "sky",
    tags: ["skin", "liver"],
    name: { en: "False daisy (Keshuti / Bhringraj)", bn: "কেশুতি (ভৃঙ্গরাজ)" },
    parts: { en: "Leaves, whole plant", bn: "পাতা, পুরো গাছ" },
    summary: {
      en: "A small damp-ground weed whose leaf juice turns black; the 'bhringraj' of famous hair oils.",
      bn: "ভেজা মাটির ছোট আগাছা, এর পাতার রস কালো হয়ে যায়; বিখ্যাত চুলের তেলের 'ভৃঙ্গরাজ'।",
    },
    uses: {
      en: [
        "Traditionally used in hair oil for hair fall and early greying — evidence is mostly from animal studies",
        "Traditionally used for jaundice and liver complaints",
        "Leaf juice is traditionally applied on small cuts",
      ],
      bn: [
        "চুল পড়া ও অকালে চুল পাকায় তেল হিসেবে প্রচলিত — প্রমাণ মূলত প্রাণী-গবেষণা থেকে",
        "জন্ডিস ও লিভারের সমস্যায় প্রচলিতভাবে ব্যবহৃত হয়",
        "ছোট কাটায় পাতার রস লাগানো প্রচলিত",
      ],
    },
    howToUse: {
      en: [
        "Heat leaf juice with coconut or mustard oil until the water evaporates, then use as hair oil",
        "Cook young leaves as shak",
      ],
      bn: [
        "পাতার রস নারকেল বা সরিষার তেলে জ্বাল দিয়ে পানি শুকিয়ে চুলের তেল বানান",
        "কচি পাতা শাক হিসেবে রান্না করুন",
      ],
    },
    cautions: {
      en: [
        "Avoid medicinal amounts by mouth in pregnancy",
        "Jaundice needs proper tests and a doctor — don't rely on herbs alone",
      ],
      bn: [
        "গর্ভাবস্থায় ওষুধ হিসেবে খাবেন না",
        "জন্ডিসে সঠিক পরীক্ষা ও ডাক্তারের চিকিৎসা দরকার — শুধু ভেষজের ওপর ভরসা করবেন না",
      ],
    },
  },
];
