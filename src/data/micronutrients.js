/*
 * Vitamins and minerals: what they do, how much adults need and where to find them.
 * Amounts are adult reference intakes (IOM/WHO) and are for general education only.
 * `sources` are food ids from the main food list.
 */

export const VITAMINS = [
  {
    id: "vitA",
    symbol: "A",
    kind: "fat",
    tone: "amber",
    name: { en: "Vitamin A (Retinol)", bn: "ভিটামিন এ (রেটিনল)" },
    role: {
      en: ["Keeps eyes healthy and helps you see in dim light", "Supports the immune system", "Keeps skin and the lining of the gut and lungs healthy"],
      bn: ["চোখ ভালো রাখে, কম আলোয় দেখতে সাহায্য করে", "রোগ প্রতিরোধ ক্ষমতা বাড়ায়", "ত্বক এবং অন্ত্র ও ফুসফুসের ভেতরের আবরণ সুস্থ রাখে"],
    },
    rda: { en: "Adults: 700–900 µg/day", bn: "প্রাপ্তবয়স্ক: দিনে ৭০০–৯০০ মাইক্রোগ্রাম" },
    sources: ["carrot", "sweetpotato", "pumpkin", "mola", "mango", "spinach", "chickenliver"],
    lacking: {
      en: "Deficiency causes night blindness, dry eyes and more frequent infections, especially in young children.",
      bn: "অভাবে রাতকানা, চোখ শুকিয়ে যাওয়া এবং ঘন ঘন অসুখ হয় — বিশেষ করে ছোট শিশুদের।",
    },
    excess: {
      en: "Too much preformed vitamin A from supplements or a lot of liver can be toxic and is harmful in pregnancy; beta-carotene from vegetables is safe.",
      bn: "সাপ্লিমেন্ট বা অতিরিক্ত কলিজা থেকে বেশি ভিটামিন এ বিষাক্ত হতে পারে এবং গর্ভাবস্থায় ক্ষতিকর; তবে সবজির বিটা-ক্যারোটিন নিরাপদ।",
    },
    tip: {
      en: "Cook carrots, pumpkin and shak with a little oil — vitamin A and beta-carotene need fat to be absorbed.",
      bn: "গাজর, মিষ্টিকুমড়া ও শাক অল্প তেলে রান্না করুন — ভিটামিন এ ও বিটা-ক্যারোটিন শোষণে চর্বি লাগে।",
    },
  },
  {
    id: "vitB1",
    symbol: "B1",
    kind: "water",
    tone: "lime",
    name: { en: "Vitamin B1 (Thiamine)", bn: "ভিটামিন বি১ (থায়ামিন)" },
    role: {
      en: ["Helps turn carbohydrates into energy", "Supports nerve function", "Keeps the heart muscle working well"],
      bn: ["শর্করাকে শক্তিতে রূপান্তরে সাহায্য করে", "স্নায়ুর কাজ ঠিক রাখে", "হৃৎপিণ্ডের পেশি সচল রাখে"],
    },
    rda: { en: "Adults: 1.1–1.2 mg/day", bn: "প্রাপ্তবয়স্ক: দিনে ১.১–১.২ মিলিগ্রাম" },
    sources: ["brownrice", "atta", "oats", "lentil", "peas", "sunflower"],
    lacking: {
      en: "Deficiency can cause beriberi — tiredness, numb or tingling feet, muscle weakness and, in severe cases, heart problems.",
      bn: "অভাবে বেরিবেরি হতে পারে — ক্লান্তি, পায়ে ঝিঁঝিঁ বা অবশ ভাব, পেশির দুর্বলতা, আর গুরুতর হলে হৃদ্‌রোগ।",
    },
    excess: { en: "Rare from food; extra is passed out in urine.", bn: "খাবার থেকে বেশি হওয়া বিরল; অতিরিক্ত অংশ প্রস্রাবের সাথে বেরিয়ে যায়।" },
    tip: {
      en: "Highly polished white rice loses most of its thiamine — mix in some brown rice or atta, and don't over-wash rice before cooking.",
      bn: "বেশি ছাঁটা সাদা চালে থায়ামিন প্রায় থাকে না — মাঝে মাঝে লাল চাল বা আটা খান, আর চাল বেশি ঘষে ধোবেন না।",
    },
  },
  {
    id: "vitB2",
    symbol: "B2",
    kind: "water",
    tone: "emerald",
    name: { en: "Vitamin B2 (Riboflavin)", bn: "ভিটামিন বি২ (রাইবোফ্লাভিন)" },
    role: {
      en: ["Helps release energy from food", "Keeps skin, eyes and the lining of the mouth healthy", "Helps the body use other B vitamins"],
      bn: ["খাবার থেকে শক্তি পেতে সাহায্য করে", "ত্বক, চোখ ও মুখের ভেতরটা সুস্থ রাখে", "অন্যান্য বি ভিটামিন কাজে লাগাতে সাহায্য করে"],
    },
    rda: { en: "Adults: 1.1–1.3 mg/day", bn: "প্রাপ্তবয়স্ক: দিনে ১.১–১.৩ মিলিগ্রাম" },
    sources: ["milk", "yogurt", "egg", "beefliver", "mushroom", "almond"],
    lacking: {
      en: "Deficiency causes cracks at the corners of the mouth, a sore red tongue and dry, scaly skin.",
      bn: "অভাবে ঠোঁটের কোণে ঘা বা ফাটা, জিভ লাল হয়ে ব্যথা এবং ত্বক খসখসে হয়।",
    },
    excess: { en: "Rare from food; extra simply turns urine bright yellow.", bn: "খাবার থেকে বেশি হওয়া বিরল; বাড়তি অংশে শুধু প্রস্রাব গাঢ় হলুদ হয়।" },
    tip: {
      en: "Riboflavin is destroyed by light — store milk in a covered, opaque container.",
      bn: "আলোতে রাইবোফ্লাভিন নষ্ট হয় — দুধ ঢাকনা দেওয়া, অস্বচ্ছ পাত্রে রাখুন।",
    },
  },
  {
    id: "vitB3",
    symbol: "B3",
    kind: "water",
    tone: "orange",
    name: { en: "Vitamin B3 (Niacin)", bn: "ভিটামিন বি৩ (নায়াসিন)" },
    role: {
      en: ["Helps convert food into energy", "Keeps skin and the digestive system healthy", "Supports the nervous system"],
      bn: ["খাবারকে শক্তিতে রূপান্তর করে", "ত্বক ও হজমতন্ত্র সুস্থ রাখে", "স্নায়ুতন্ত্রের কাজে সাহায্য করে"],
    },
    rda: { en: "Adults: 14–16 mg/day", bn: "প্রাপ্তবয়স্ক: দিনে ১৪–১৬ মিলিগ্রাম" },
    sources: ["chicken", "tuna", "beef", "peanut", "brownrice", "mushroom"],
    lacking: {
      en: "Severe deficiency causes pellagra — rough, darkened skin in sun-exposed areas, diarrhoea and confusion.",
      bn: "তীব্র অভাবে পেলাগ্রা হয় — রোদ লাগা জায়গার ত্বক খসখসে ও কালচে হওয়া, ডায়রিয়া এবং মানসিক বিভ্রান্তি।",
    },
    excess: {
      en: "Not a concern from food, but high-dose supplements can cause skin flushing and liver damage.",
      bn: "খাবার থেকে সমস্যা হয় না, তবে উচ্চমাত্রার সাপ্লিমেন্টে ত্বক লাল হয়ে জ্বালা ও লিভারের ক্ষতি হতে পারে।",
    },
    tip: {
      en: "Protein foods like fish, chicken and dal also supply tryptophan, which the body turns into niacin.",
      bn: "মাছ, মুরগি ও ডালের মতো প্রোটিনজাতীয় খাবারের ট্রিপটোফ্যান থেকেও শরীর নায়াসিন তৈরি করে।",
    },
  },
  {
    id: "vitB6",
    symbol: "B6",
    kind: "water",
    tone: "teal",
    name: { en: "Vitamin B6 (Pyridoxine)", bn: "ভিটামিন বি৬ (পাইরিডক্সিন)" },
    role: {
      en: ["Helps the body use protein", "Needed to make red blood cells", "Supports brain function and mood"],
      bn: ["প্রোটিন কাজে লাগাতে সাহায্য করে", "লোহিত রক্তকণিকা তৈরিতে লাগে", "মস্তিষ্কের কাজ ও মেজাজ ভালো রাখে"],
    },
    rda: { en: "Adults: 1.3 mg/day (1.5–1.7 mg after 50)", bn: "প্রাপ্তবয়স্ক: দিনে ১.৩ মিলিগ্রাম (৫০ বছরের পর ১.৫–১.৭ মিলিগ্রাম)" },
    sources: ["chickpea", "banana", "potato", "chicken", "salmon", "pistachio"],
    lacking: {
      en: "Deficiency can cause anaemia, a sore tongue, cracked lips, irritability and lowered immunity.",
      bn: "অভাবে রক্তস্বল্পতা, জিভে ঘা, ঠোঁট ফাটা, খিটখিটে মেজাজ এবং রোগ প্রতিরোধ ক্ষমতা কমে যেতে পারে।",
    },
    excess: {
      en: "Rare from food; long-term high-dose supplements can damage nerves and cause numbness.",
      bn: "খাবার থেকে বেশি হওয়া বিরল; দীর্ঘদিন উচ্চমাত্রার সাপ্লিমেন্টে স্নায়ুর ক্ষতি ও অবশ ভাব হতে পারে।",
    },
    tip: {
      en: "Steam or lightly boil potatoes and vegetables in little water — B6 leaches into cooking water.",
      bn: "আলু ও সবজি অল্প পানিতে ভাপে বা হালকা সেদ্ধ করুন — বি৬ রান্নার পানিতে চলে যায়।",
    },
  },
  {
    id: "vitB9",
    symbol: "B9",
    kind: "water",
    tone: "lime",
    name: { en: "Vitamin B9 (Folate)", bn: "ভিটামিন বি৯ (ফোলেট)" },
    role: {
      en: ["Needed to make DNA and new cells", "Helps form healthy red blood cells", "Protects the baby's brain and spine in early pregnancy"],
      bn: ["ডিএনএ ও নতুন কোষ তৈরিতে লাগে", "সুস্থ লোহিত রক্তকণিকা তৈরিতে সাহায্য করে", "গর্ভাবস্থার শুরুতে শিশুর মস্তিষ্ক ও মেরুদণ্ড সুরক্ষিত রাখে"],
    },
    rda: { en: "Adults: 400 µg/day (600 µg in pregnancy)", bn: "প্রাপ্তবয়স্ক: দিনে ৪০০ মাইক্রোগ্রাম (গর্ভাবস্থায় ৬০০ মাইক্রোগ্রাম)" },
    sources: ["spinach", "lentil", "chickpea", "kidneybean", "broccoli", "orange"],
    lacking: {
      en: "Deficiency causes anaemia with large red cells and, in pregnancy, raises the risk of neural tube defects in the baby.",
      bn: "অভাবে বড় আকারের লোহিত কণিকাযুক্ত রক্তস্বল্পতা হয় এবং গর্ভাবস্থায় শিশুর স্নায়ুনালির ত্রুটির ঝুঁকি বাড়ে।",
    },
    excess: {
      en: "Not a concern from food; high-dose folic acid supplements can hide vitamin B12 deficiency.",
      bn: "খাবার থেকে সমস্যা হয় না; উচ্চমাত্রার ফলিক অ্যাসিড সাপ্লিমেন্ট ভিটামিন বি১২-এর অভাব আড়াল করতে পারে।",
    },
    tip: {
      en: "Folate is easily destroyed by heat — don't overcook shak, and eat some raw salad or fruit every day.",
      bn: "তাপে ফোলেট সহজে নষ্ট হয় — শাক বেশিক্ষণ রান্না করবেন না, আর প্রতিদিন কিছু কাঁচা সালাদ বা ফল খান।",
    },
  },
  {
    id: "vitB12",
    symbol: "B12",
    kind: "water",
    tone: "rose",
    name: { en: "Vitamin B12 (Cobalamin)", bn: "ভিটামিন বি১২ (কোবালামিন)" },
    role: {
      en: ["Needed to make red blood cells", "Keeps nerves and the brain healthy", "Works with folate to make DNA"],
      bn: ["লোহিত রক্তকণিকা তৈরিতে লাগে", "স্নায়ু ও মস্তিষ্ক সুস্থ রাখে", "ফোলেটের সাথে মিলে ডিএনএ তৈরি করে"],
    },
    rda: { en: "Adults: 2.4 µg/day", bn: "প্রাপ্তবয়স্ক: দিনে ২.৪ মাইক্রোগ্রাম" },
    sources: ["beefliver", "egg", "milk", "hilsa", "sardine", "yogurt"],
    lacking: {
      en: "Deficiency causes tiredness, anaemia, numbness or tingling in hands and feet, and memory problems.",
      bn: "অভাবে ক্লান্তি, রক্তস্বল্পতা, হাত-পায়ে ঝিঁঝিঁ বা অবশ ভাব এবং ভুলে যাওয়ার সমস্যা হয়।",
    },
    excess: { en: "No known harm from food; extra is stored or passed out.", bn: "খাবার থেকে কোনো ক্ষতির কথা জানা নেই; বাড়তি অংশ জমা থাকে বা বেরিয়ে যায়।" },
    tip: {
      en: "B12 is found almost only in animal foods — vegetarians and older adults may need fortified foods or a supplement.",
      bn: "বি১২ প্রায় শুধু প্রাণিজ খাবারে থাকে — নিরামিষভোজী ও বয়স্কদের সাপ্লিমেন্ট লাগতে পারে।",
    },
  },
  {
    id: "vitC",
    symbol: "C",
    kind: "water",
    tone: "orange",
    name: { en: "Vitamin C (Ascorbic acid)", bn: "ভিটামিন সি (অ্যাসকরবিক অ্যাসিড)" },
    role: {
      en: ["Helps wounds heal and keeps gums healthy", "Boosts absorption of iron from plant foods", "Works as an antioxidant and supports immunity"],
      bn: ["ক্ষত সারাতে ও মাড়ি সুস্থ রাখতে সাহায্য করে", "উদ্ভিজ্জ খাবারের আয়রন শোষণ বাড়ায়", "অ্যান্টিঅক্সিডেন্ট হিসেবে কাজ করে ও রোগ প্রতিরোধে সাহায্য করে"],
    },
    rda: { en: "Adults: 75–90 mg/day (smokers +35 mg)", bn: "প্রাপ্তবয়স্ক: দিনে ৭৫–৯০ মিলিগ্রাম (ধূমপায়ীদের আরও ৩৫ মিলিগ্রাম)" },
    sources: ["amloki", "guava", "lemon", "orange", "capsicum", "broccoli"],
    lacking: {
      en: "Deficiency causes bleeding gums, easy bruising, slow wound healing and, if severe, scurvy.",
      bn: "অভাবে মাড়ি থেকে রক্ত পড়া, সহজে কালশিটে পড়া, ক্ষত দেরিতে শুকানো এবং গুরুতর হলে স্কার্ভি হয়।",
    },
    excess: {
      en: "Rare from food; very large supplement doses can cause diarrhoea and, in some people, kidney stones.",
      bn: "খাবার থেকে বেশি হওয়া বিরল; খুব বেশি সাপ্লিমেন্টে ডায়রিয়া এবং কারও কারও কিডনিতে পাথর হতে পারে।",
    },
    tip: {
      en: "Vitamin C is destroyed by heat and air — eat amloki, guava and lemon raw, and cut fruit just before eating.",
      bn: "তাপ ও বাতাসে ভিটামিন সি নষ্ট হয় — আমলকী, পেয়ারা, লেবু কাঁচা খান, আর ফল খাওয়ার ঠিক আগে কাটুন।",
    },
  },
  {
    id: "vitD",
    symbol: "D",
    kind: "fat",
    tone: "sky",
    name: { en: "Vitamin D (Calciferol)", bn: "ভিটামিন ডি (ক্যালসিফেরল)" },
    role: {
      en: ["Helps the body absorb calcium and phosphorus", "Keeps bones and teeth strong", "Supports muscles and immunity"],
      bn: ["ক্যালসিয়াম ও ফসফরাস শোষণে সাহায্য করে", "হাড় ও দাঁত মজবুত রাখে", "পেশি ও রোগ প্রতিরোধ ক্ষমতা ঠিক রাখে"],
    },
    rda: { en: "Adults: 15 µg (600 IU)/day; 20 µg (800 IU) after 70", bn: "প্রাপ্তবয়স্ক: দিনে ১৫ মাইক্রোগ্রাম (৬০০ আইইউ); ৭০ বছরের পর ২০ মাইক্রোগ্রাম (৮০০ আইইউ)" },
    sources: ["hilsa", "salmon", "sardine", "egg", "mushroom"],
    lacking: {
      en: "Deficiency causes rickets (soft, bent bones) in children and bone pain and weakness (osteomalacia) in adults.",
      bn: "অভাবে শিশুদের রিকেটস (হাড় নরম ও বাঁকা হওয়া) এবং বড়দের হাড়ে ব্যথা ও দুর্বলতা (অস্টিওম্যালেশিয়া) হয়।",
    },
    excess: {
      en: "Too much from high-dose supplements can raise blood calcium and harm the kidneys; sunlight does not cause overdose.",
      bn: "উচ্চমাত্রার সাপ্লিমেন্টে রক্তে ক্যালসিয়াম বেড়ে কিডনির ক্ষতি হতে পারে; রোদ থেকে মাত্রাতিরিক্ত হয় না।",
    },
    tip: {
      en: "Get 15–30 minutes of sun on your arms and face a few times a week, ideally between 10 am and 3 pm.",
      bn: "সপ্তাহে কয়েকবার হাত ও মুখে ১৫–৩০ মিনিট রোদ লাগান — সকাল ১০টা থেকে বিকেল ৩টার মধ্যে সবচেয়ে ভালো।",
    },
  },
  {
    id: "vitE",
    symbol: "E",
    kind: "fat",
    tone: "violet",
    name: { en: "Vitamin E (Tocopherol)", bn: "ভিটামিন ই (টোকোফেরল)" },
    role: {
      en: ["Protects cells from damage as an antioxidant", "Supports the immune system", "Helps keep skin and eyes healthy"],
      bn: ["অ্যান্টিঅক্সিডেন্ট হিসেবে কোষকে ক্ষতি থেকে বাঁচায়", "রোগ প্রতিরোধ ক্ষমতায় সাহায্য করে", "ত্বক ও চোখ সুস্থ রাখে"],
    },
    rda: { en: "Adults: 15 mg/day", bn: "প্রাপ্তবয়স্ক: দিনে ১৫ মিলিগ্রাম" },
    sources: ["almond", "sunflower", "peanut", "hazelnut", "spinach", "avocado"],
    lacking: {
      en: "Deficiency is rare and usually linked to fat-absorption problems; it can cause nerve and muscle weakness.",
      bn: "অভাব বিরল, সাধারণত চর্বি শোষণের সমস্যা থাকলে হয়; এতে স্নায়ু ও পেশি দুর্বল হতে পারে।",
    },
    excess: {
      en: "Safe from food; high-dose supplements may increase bleeding risk, especially with blood thinners.",
      bn: "খাবার থেকে নিরাপদ; উচ্চমাত্রার সাপ্লিমেন্টে রক্তক্ষরণের ঝুঁকি বাড়তে পারে, বিশেষ করে রক্ত পাতলা করার ওষুধ খেলে।",
    },
    tip: {
      en: "A small handful of nuts or seeds a day covers much of your vitamin E need.",
      bn: "দিনে এক মুঠো বাদাম বা বীজ খেলে ভিটামিন ই-র চাহিদার অনেকটাই পূরণ হয়।",
    },
  },
  {
    id: "vitK",
    symbol: "K",
    kind: "fat",
    tone: "emerald",
    name: { en: "Vitamin K", bn: "ভিটামিন কে" },
    role: {
      en: ["Helps blood clot normally", "Supports strong bones", "Helps keep blood vessels healthy"],
      bn: ["রক্ত স্বাভাবিকভাবে জমাট বাঁধতে সাহায্য করে", "হাড় মজবুত রাখে", "রক্তনালি সুস্থ রাখতে সাহায্য করে"],
    },
    rda: { en: "Adults: 90–120 µg/day", bn: "প্রাপ্তবয়স্ক: দিনে ৯০–১২০ মাইক্রোগ্রাম" },
    sources: ["spinach", "mustardgreens", "puishak", "broccoli", "cabbage", "soybean"],
    lacking: {
      en: "Deficiency causes easy bleeding and bruising; newborns are given a vitamin K injection to prevent bleeding.",
      bn: "অভাবে সহজে রক্তপাত ও কালশিটে পড়ে; নবজাতকের রক্তক্ষরণ ঠেকাতে জন্মের পর ভিটামিন কে ইনজেকশন দেওয়া হয়।",
    },
    excess: {
      en: "No known harm from food, but people on warfarin should keep their intake of green leafy vegetables steady.",
      bn: "খাবার থেকে ক্ষতির কথা জানা নেই, তবে ওয়ারফারিন খেলে সবুজ শাক খাওয়ার পরিমাণ প্রতিদিন একই রকম রাখুন।",
    },
    tip: {
      en: "Cook green shak with a little oil — vitamin K is fat-soluble and is absorbed better with fat.",
      bn: "সবুজ শাক অল্প তেলে রান্না করুন — ভিটামিন কে চর্বিতে দ্রবণীয়, তাই তেলের সাথে ভালো শোষিত হয়।",
    },
  },
];

export const MINERALS = [
  {
    id: "calcium",
    symbol: "Ca",
    kind: "macro",
    tone: "sky",
    name: { en: "Calcium", bn: "ক্যালসিয়াম" },
    role: {
      en: ["Builds and maintains strong bones and teeth", "Needed for muscle contraction and heartbeat", "Helps nerves send signals and blood to clot"],
      bn: ["হাড় ও দাঁত গঠন করে ও মজবুত রাখে", "পেশি সংকোচন ও হৃৎস্পন্দনে লাগে", "স্নায়ুর সংকেত পাঠাতে ও রক্ত জমাট বাঁধতে সাহায্য করে"],
    },
    rda: { en: "Adults: 1,000 mg/day (1,200 mg for women over 50 and everyone over 70)", bn: "প্রাপ্তবয়স্ক: দিনে ১,০০০ মিলিগ্রাম (৫০ বছরের বেশি নারী ও ৭০ বছরের বেশি সবার ১,২০০ মিলিগ্রাম)" },
    sources: ["milk", "yogurt", "mola", "kachki", "sesame", "paneer", "tofu"],
    lacking: {
      en: "Long-term low intake weakens bones and raises the risk of osteoporosis and fractures.",
      bn: "দীর্ঘদিন কম খেলে হাড় দুর্বল হয় এবং অস্টিওপোরোসিস ও হাড় ভাঙার ঝুঁকি বাড়ে।",
    },
    excess: {
      en: "Rare from food; too many supplements can cause constipation and kidney stones.",
      bn: "খাবার থেকে বেশি হওয়া বিরল; অতিরিক্ত সাপ্লিমেন্টে কোষ্ঠকাঠিন্য ও কিডনিতে পাথর হতে পারে।",
    },
    tip: {
      en: "Eat small fish like mola and kachki with their bones — and get some sun so vitamin D can help absorb the calcium.",
      bn: "মলা-কাচকির মতো ছোট মাছ কাঁটাসহ খান — আর একটু রোদ লাগান, যাতে ভিটামিন ডি ক্যালসিয়াম শোষণে সাহায্য করে।",
    },
  },
  {
    id: "iron",
    symbol: "Fe",
    kind: "trace",
    tone: "red",
    name: { en: "Iron", bn: "আয়রন (লৌহ)" },
    role: {
      en: ["Forms haemoglobin, which carries oxygen in the blood", "Supports energy and concentration", "Needed for a child's growth and brain development"],
      bn: ["হিমোগ্লোবিন তৈরি করে, যা রক্তে অক্সিজেন বহন করে", "শক্তি ও মনোযোগ ধরে রাখতে সাহায্য করে", "শিশুর বৃদ্ধি ও মস্তিষ্কের বিকাশে লাগে"],
    },
    rda: { en: "Men: 8 mg/day; women 19–50: 18 mg/day; pregnancy: 27 mg/day", bn: "পুরুষ: দিনে ৮ মিলিগ্রাম; ১৯–৫০ বছরের নারী: ১৮ মিলিগ্রাম; গর্ভাবস্থায়: ২৭ মিলিগ্রাম" },
    sources: ["chickenliver", "beef", "lentil", "redamaranth", "kochushak", "chickpea"],
    lacking: {
      en: "Deficiency causes anaemia — tiredness, pale skin, breathlessness and poor concentration.",
      bn: "অভাবে রক্তস্বল্পতা হয় — ক্লান্তি, ফ্যাকাশে ত্বক, শ্বাসকষ্ট ও মনোযোগের অভাব।",
    },
    excess: {
      en: "Iron supplements can be dangerous in overdose, especially for children — keep them out of reach and take only as advised.",
      bn: "আয়রন বড়ি বেশি খেলে বিপজ্জনক, বিশেষ করে শিশুদের জন্য — নাগালের বাইরে রাখুন এবং পরামর্শমতো খান।",
    },
    tip: {
      en: "Have a vitamin C food (lemon, guava, amloki) with dal and shak, and avoid tea for an hour after meals.",
      bn: "ডাল ও শাকের সাথে লেবু, পেয়ারা বা আমলকী খান, আর খাবারের পর এক ঘণ্টা চা এড়িয়ে চলুন।",
    },
  },
  {
    id: "zinc",
    symbol: "Zn",
    kind: "trace",
    tone: "indigo",
    name: { en: "Zinc", bn: "জিংক (দস্তা)" },
    role: {
      en: ["Supports the immune system", "Helps wounds heal", "Needed for growth, taste and smell"],
      bn: ["রোগ প্রতিরোধ ক্ষমতা বাড়ায়", "ক্ষত সারাতে সাহায্য করে", "বৃদ্ধি এবং স্বাদ ও গন্ধ বোঝার জন্য দরকার"],
    },
    rda: { en: "Women: 8 mg/day; men: 11 mg/day", bn: "নারী: দিনে ৮ মিলিগ্রাম; পুরুষ: দিনে ১১ মিলিগ্রাম" },
    sources: ["beef", "mutton", "pumpkinseed", "chickpea", "cashew", "egg"],
    lacking: {
      en: "Deficiency slows growth in children, weakens immunity, delays wound healing and can cause hair loss.",
      bn: "অভাবে শিশুর বৃদ্ধি ধীর হয়, রোগ প্রতিরোধ ক্ষমতা কমে, ক্ষত দেরিতে শুকায় এবং চুল পড়তে পারে।",
    },
    excess: {
      en: "Rare from food; long-term high-dose supplements can cause nausea and lower copper levels.",
      bn: "খাবার থেকে বেশি হওয়া বিরল; দীর্ঘদিন উচ্চমাত্রার সাপ্লিমেন্টে বমিভাব হয় এবং কপারের মাত্রা কমে যেতে পারে।",
    },
    tip: {
      en: "Soaking or sprouting dal and chickpeas before cooking helps your body absorb more zinc.",
      bn: "ডাল ও ছোলা রান্নার আগে ভিজিয়ে বা অঙ্কুরিত করে নিলে জিংক বেশি শোষিত হয়।",
    },
  },
  {
    id: "magnesium",
    symbol: "Mg",
    kind: "macro",
    tone: "teal",
    name: { en: "Magnesium", bn: "ম্যাগনেসিয়াম" },
    role: {
      en: ["Helps muscles and nerves work", "Supports a steady heartbeat and blood pressure", "Needed for strong bones and energy production"],
      bn: ["পেশি ও স্নায়ুর কাজে সাহায্য করে", "হৃৎস্পন্দন ও রক্তচাপ ঠিক রাখে", "হাড় মজবুত রাখা ও শক্তি তৈরিতে লাগে"],
    },
    rda: { en: "Women: 310–320 mg/day; men: 400–420 mg/day", bn: "নারী: দিনে ৩১০–৩২০ মিলিগ্রাম; পুরুষ: দিনে ৪০০–৪২০ মিলিগ্রাম" },
    sources: ["pumpkinseed", "almond", "spinach", "brownrice", "banana", "cashew"],
    lacking: {
      en: "Low levels can cause muscle cramps, tiredness, weakness and an irregular heartbeat.",
      bn: "কম হলে পেশিতে টান, ক্লান্তি, দুর্বলতা এবং অনিয়মিত হৃৎস্পন্দন হতে পারে।",
    },
    excess: {
      en: "Not harmful from food; high-dose supplements commonly cause diarrhoea.",
      bn: "খাবার থেকে ক্ষতি হয় না; উচ্চমাত্রার সাপ্লিমেন্টে সাধারণত ডায়রিয়া হয়।",
    },
    tip: {
      en: "Whole grains keep most of their magnesium — swap some white rice for brown rice or atta roti.",
      bn: "গোটা শস্যে ম্যাগনেসিয়াম বেশি থাকে — মাঝে মাঝে সাদা ভাতের বদলে লাল চাল বা আটার রুটি খান।",
    },
  },
  {
    id: "potassium",
    symbol: "K",
    kind: "macro",
    tone: "lime",
    name: { en: "Potassium", bn: "পটাশিয়াম" },
    role: {
      en: ["Balances fluids in the body", "Helps lower blood pressure by offsetting sodium", "Needed for muscle and heart function"],
      bn: ["শরীরে পানির ভারসাম্য রাখে", "সোডিয়ামের প্রভাব কমিয়ে রক্তচাপ নিয়ন্ত্রণে সাহায্য করে", "পেশি ও হৃৎপিণ্ডের কাজে লাগে"],
    },
    rda: { en: "Adults: about 2,600–3,400 mg/day (WHO: at least 3,510 mg)", bn: "প্রাপ্তবয়স্ক: দিনে প্রায় ২,৬০০–৩,৪০০ মিলিগ্রাম (বিশ্ব স্বাস্থ্য সংস্থা: অন্তত ৩,৫১০ মিলিগ্রাম)" },
    sources: ["banana", "coconutwater", "potato", "sweetpotato", "lentil", "tomato", "dates"],
    lacking: {
      en: "Low levels (often from diarrhoea or vomiting) cause weakness, muscle cramps and an irregular heartbeat.",
      bn: "কম হলে (প্রায়ই ডায়রিয়া বা বমির কারণে) দুর্বলতা, পেশিতে টান ও অনিয়মিত হৃৎস্পন্দন হয়।",
    },
    excess: {
      en: "Healthy kidneys remove extra, but people with kidney disease must limit potassium as advised by a doctor.",
      bn: "সুস্থ কিডনি বাড়তি পটাশিয়াম বের করে দেয়, তবে কিডনি রোগীদের ডাক্তারের পরামর্শমতো পটাশিয়াম সীমিত রাখতে হবে।",
    },
    tip: {
      en: "Fruit, vegetables and dal are the best sources — more of these and less salt is good for blood pressure.",
      bn: "ফল, সবজি ও ডাল পটাশিয়ামের সেরা উৎস — এগুলো বেশি আর লবণ কম খেলে রক্তচাপ ভালো থাকে।",
    },
  },
  {
    id: "sodium",
    symbol: "Na",
    kind: "macro",
    tone: "fuchsia",
    name: { en: "Sodium (Salt)", bn: "সোডিয়াম (লবণ)" },
    role: {
      en: ["Controls fluid balance and blood volume", "Helps nerves send signals", "Needed for muscle contraction"],
      bn: ["শরীরের পানি ও রক্তের পরিমাণ নিয়ন্ত্রণ করে", "স্নায়ুর সংকেত পাঠাতে সাহায্য করে", "পেশি সংকোচনে লাগে"],
    },
    rda: { en: "Adults: less than 2,000 mg/day (under 5 g salt, about 1 teaspoon) — WHO", bn: "প্রাপ্তবয়স্ক: দিনে ২,০০০ মিলিগ্রামের কম (৫ গ্রাম বা প্রায় ১ চা-চামচ লবণের কম) — বিশ্ব স্বাস্থ্য সংস্থা" },
    sources: ["shutki", "cheddar", "bread", "butter", "popcorn"],
    lacking: {
      en: "Rarely low from diet; heavy sweating, diarrhoea or vomiting can cause weakness, cramps and confusion.",
      bn: "খাবারের কারণে কম হওয়া বিরল; বেশি ঘাম, ডায়রিয়া বা বমিতে দুর্বলতা, পেশিতে টান ও বিভ্রান্তি হতে পারে।",
    },
    excess: {
      en: "Most people eat too much — excess salt raises blood pressure and the risk of stroke, heart and kidney disease.",
      bn: "বেশিরভাগ মানুষ প্রয়োজনের চেয়ে বেশি লবণ খান — এতে রক্তচাপ বাড়ে এবং স্ট্রোক, হৃদ্‌রোগ ও কিডনি রোগের ঝুঁকি বাড়ে।",
    },
    tip: {
      en: "Skip extra raw salt at the table and go easy on chanachur, chips, pickles and shutki.",
      bn: "পাতে কাঁচা লবণ নেবেন না, আর চানাচুর, চিপস, আচার ও শুঁটকি কম খান।",
    },
  },
  {
    id: "iodine",
    symbol: "I",
    kind: "trace",
    tone: "violet",
    name: { en: "Iodine", bn: "আয়োডিন" },
    role: {
      en: ["Needed to make thyroid hormones", "Controls metabolism and energy", "Essential for the baby's brain development in pregnancy"],
      bn: ["থাইরয়েড হরমোন তৈরিতে লাগে", "বিপাক ও শক্তি নিয়ন্ত্রণ করে", "গর্ভাবস্থায় শিশুর মস্তিষ্কের বিকাশে অপরিহার্য"],
    },
    rda: { en: "Adults: 150 µg/day (220 µg in pregnancy, 290 µg when breastfeeding)", bn: "প্রাপ্তবয়স্ক: দিনে ১৫০ মাইক্রোগ্রাম (গর্ভাবস্থায় ২২০, স্তন্যদানকালে ২৯০ মাইক্রোগ্রাম)" },
    sources: ["shrimp", "tuna", "rupchanda", "egg", "milk", "yogurt"],
    lacking: {
      en: "Deficiency causes goitre (swollen neck), tiredness and, in pregnancy, can harm the baby's brain development.",
      bn: "অভাবে গলগণ্ড (গলা ফুলে যাওয়া) ও ক্লান্তি হয়, আর গর্ভাবস্থায় শিশুর মস্তিষ্কের বিকাশ ক্ষতিগ্রস্ত হতে পারে।",
    },
    excess: {
      en: "Very high intake, usually from supplements, can also upset thyroid function.",
      bn: "খুব বেশি পরিমাণে, সাধারণত সাপ্লিমেন্ট থেকে, থাইরয়েডের কাজেও গোলমাল হতে পারে।",
    },
    tip: {
      en: "Use iodised salt, keep it in a closed container away from heat, and add it towards the end of cooking.",
      bn: "আয়োডিনযুক্ত লবণ ব্যবহার করুন, ঢাকনা দেওয়া পাত্রে তাপ থেকে দূরে রাখুন এবং রান্নার শেষের দিকে দিন।",
    },
  },
  {
    id: "phosphorus",
    symbol: "P",
    kind: "macro",
    tone: "amber",
    name: { en: "Phosphorus", bn: "ফসফরাস" },
    role: {
      en: ["Works with calcium to build bones and teeth", "Helps the body make and store energy", "Part of every cell membrane and of DNA"],
      bn: ["ক্যালসিয়ামের সাথে মিলে হাড় ও দাঁত গড়ে", "শরীরে শক্তি তৈরি ও জমা রাখতে সাহায্য করে", "প্রতিটি কোষের আবরণ ও ডিএনএ-র অংশ"],
    },
    rda: { en: "Adults: 700 mg/day", bn: "প্রাপ্তবয়স্ক: দিনে ৭০০ মিলিগ্রাম" },
    sources: ["milk", "egg", "chicken", "rohu", "lentil", "pumpkinseed"],
    lacking: {
      en: "Deficiency is uncommon; it can cause weak bones, bone pain and muscle weakness.",
      bn: "অভাব খুব কম দেখা যায়; হলে হাড় দুর্বল হওয়া, হাড়ে ব্যথা ও পেশির দুর্বলতা হতে পারে।",
    },
    excess: {
      en: "High intake from processed foods and cola can be a problem for people with kidney disease.",
      bn: "প্রক্রিয়াজাত খাবার ও কোলা থেকে বেশি ফসফরাস কিডনি রোগীদের জন্য সমস্যা হতে পারে।",
    },
    tip: {
      en: "A normal diet with fish, dal, egg and milk gives enough phosphorus — no supplement needed.",
      bn: "মাছ, ডাল, ডিম ও দুধসহ সাধারণ খাবারেই যথেষ্ট ফসফরাস পাওয়া যায় — সাপ্লিমেন্ট লাগে না।",
    },
  },
  {
    id: "selenium",
    symbol: "Se",
    kind: "trace",
    tone: "rose",
    name: { en: "Selenium", bn: "সেলেনিয়াম" },
    role: {
      en: ["Works as an antioxidant to protect cells", "Supports thyroid hormone function", "Helps the immune system"],
      bn: ["অ্যান্টিঅক্সিডেন্ট হিসেবে কোষ রক্ষা করে", "থাইরয়েড হরমোনের কাজে সাহায্য করে", "রোগ প্রতিরোধ ক্ষমতা বাড়ায়"],
    },
    rda: { en: "Adults: 55 µg/day", bn: "প্রাপ্তবয়স্ক: দিনে ৫৫ মাইক্রোগ্রাম" },
    sources: ["brazilnut", "tuna", "sardine", "egg", "chicken", "sunflower"],
    lacking: {
      en: "Deficiency is uncommon but can weaken immunity and affect thyroid and heart health.",
      bn: "অভাব কম দেখা যায়, তবে হলে রোগ প্রতিরোধ ক্ষমতা কমে এবং থাইরয়েড ও হৃৎপিণ্ডে প্রভাব পড়তে পারে।",
    },
    excess: {
      en: "Too much (over 400 µg/day) causes brittle hair and nails and a garlic smell on the breath — just 1–2 Brazil nuts a day is plenty.",
      bn: "বেশি হলে (দিনে ৪০০ মাইক্রোগ্রামের ওপরে) চুল ও নখ ভঙ্গুর হয় এবং নিঃশ্বাসে রসুনের মতো গন্ধ হয় — দিনে ১–২টি ব্রাজিল বাদামই যথেষ্ট।",
    },
    tip: {
      en: "Fish, eggs and meat in a normal diet usually provide enough selenium.",
      bn: "সাধারণ খাবারের মাছ, ডিম ও মাংস থেকেই সাধারণত যথেষ্ট সেলেনিয়াম পাওয়া যায়।",
    },
  },
  {
    id: "copper",
    symbol: "Cu",
    kind: "trace",
    tone: "orange",
    name: { en: "Copper", bn: "কপার (তামা)" },
    role: {
      en: ["Helps the body use iron and make red blood cells", "Keeps nerves and the immune system healthy", "Needed to make collagen for bones and blood vessels"],
      bn: ["আয়রন কাজে লাগাতে ও লোহিত রক্তকণিকা তৈরিতে সাহায্য করে", "স্নায়ু ও রোগ প্রতিরোধ ব্যবস্থা সুস্থ রাখে", "হাড় ও রক্তনালির কোলাজেন তৈরিতে লাগে"],
    },
    rda: { en: "Adults: 900 µg/day", bn: "প্রাপ্তবয়স্ক: দিনে ৯০০ মাইক্রোগ্রাম" },
    sources: ["beefliver", "cashew", "sesame", "mushroom", "chickpea", "almond"],
    lacking: {
      en: "Deficiency is rare; it can cause anaemia, low white blood cells and nerve problems.",
      bn: "অভাব বিরল; হলে রক্তস্বল্পতা, শ্বেত রক্তকণিকা কমে যাওয়া ও স্নায়ুর সমস্যা হতে পারে।",
    },
    excess: {
      en: "Rare from food; too much from supplements or contaminated water can cause stomach upset and liver damage.",
      bn: "খাবার থেকে বেশি হওয়া বিরল; সাপ্লিমেন্ট বা দূষিত পানি থেকে বেশি হলে পেটের গোলমাল ও লিভারের ক্ষতি হতে পারে।",
    },
    tip: {
      en: "Nuts, seeds and pulses supply copper — very high-dose zinc supplements can lower it.",
      bn: "বাদাম, বীজ ও ডাল থেকে কপার পাওয়া যায় — উচ্চমাত্রার জিংক সাপ্লিমেন্ট কপারের মাত্রা কমিয়ে দিতে পারে।",
    },
  },
];
