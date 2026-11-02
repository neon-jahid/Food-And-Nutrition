/*
 * Legal & company pages (bilingual).
 * body blocks: { h } heading, { p } paragraph, { ul: [] } list, { tip } highlighted note.
 * en and bn bodies share the same structure (same block types, same order, same list lengths).
 * Keep every statement true of the site as it is today.
 */
import { FOODS } from "./foods.js";

// food count is computed so the text stays right when foods are added
const N = FOODS.length;
const NB = String(N).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);


export const LEGAL = {
  // ───────────────────────────────────────────────────────────
  about: {
    title: { en: "About Food & Nutrition", bn: "খাবার ও পুষ্টি সম্পর্কে" },
    summary: {
      en: "Know Your Food. Understand Your Nutrition. A smarter way to explore food, nutrition, healthy eating and everyday wellness — in English and Bangla.",
      bn: "খাবার চিনুন, পুষ্টি বুঝুন। খাবার, পুষ্টি, স্বাস্থ্যকর খাওয়া আর প্রতিদিনের সুস্থতা জানার একটি সহজ উপায় — ইংরেজি ও বাংলায়।",
    },
    updated: "2026-11-02",
    body: {
      en: [
        { h: "What this site is" },
        { p: "Food & Nutrition is a free, bilingual (English and Bangla) website that helps you understand what is in the food you eat every day. We focus on Bangladeshi and everyday foods — rice, dal, fish, shak, fruits, spices — so the information fits real meals, not imported diet plans." },
        { h: "What you will find here" },
        { ul: [
          `${N} foods with nutrition values per 100 g: calories, protein, carbs, fat, fibre, sugar, vitamin C, calcium, iron and potassium.`,
          "Health guides on vitamins, minerals, deficiencies, medicinal plants, food storage, myths vs facts, men's and women's health, and a meal-time guide.",
          "A blog with practical articles on everyday eating.",
          "Tools: a BMI and calorie calculator, a plate calculator and a food comparison tool.",
        ] },
        { h: "Where the numbers come from" },
        { p: "Nutrition values are currently approximate estimates based on USDA FoodData Central and South Asian / Bangladesh food composition tables. We are re-checking every food against USDA FoodData Central and the INFS Bangladesh Food Composition Table (2013). Once that is done, each value will show its source and the date it was verified. Cooked dishes always vary by recipe." },
        { h: "Free to use" },
        { p: "The site is free. There are no accounts, no sign-up and no ads. Your settings and tool data stay in your own browser. See the Privacy Policy for details." },
        { tip: "This site is for general education only. It is not medical advice. For health problems, please talk to a doctor or registered dietitian." },
      ],
      bn: [
        { h: "এই সাইটটি কী" },
        { p: "খাবার ও পুষ্টি একটি বিনামূল্যের, দ্বিভাষিক (ইংরেজি ও বাংলা) ওয়েবসাইট। রোজ যা খাচ্ছেন তাতে কী আছে, সেটা সহজে বুঝতে এটি সাহায্য করে। আমরা বাংলাদেশি ও রোজকার খাবারে জোর দিই — ভাত, ডাল, মাছ, শাক, ফল, মসলা — যাতে তথ্যগুলো আমাদের আসল খাবারের সঙ্গে মেলে, বিদেশি ডায়েট চার্টের সঙ্গে নয়।" },
        { h: "এখানে যা পাবেন" },
        { ul: [
          `${NB}টি খাবারের প্রতি ১০০ গ্রামের পুষ্টিমান: ক্যালরি, প্রোটিন, শর্করা, চর্বি, আঁশ, চিনি, ভিটামিন সি, ক্যালসিয়াম, আয়রন ও পটাশিয়াম।`,
          "স্বাস্থ্য গাইড: ভিটামিন, খনিজ, পুষ্টির ঘাটতি, ঔষধি গাছ, খাবার সংরক্ষণ, ভুল ধারণা বনাম সত্য, পুরুষ ও নারীর স্বাস্থ্য, আর কখন কী খাবেন তার গাইড।",
          "রোজকার খাওয়াদাওয়া নিয়ে কাজের লেখা সহ একটি ব্লগ।",
          "টুল: বিএমআই ও ক্যালরি ক্যালকুলেটর, প্লেট ক্যালকুলেটর আর খাবার তুলনা।",
        ] },
        { h: "সংখ্যাগুলো কোথা থেকে আসে" },
        { p: "পুষ্টিমানগুলো এখন আনুমানিক হিসাব, যা USDA FoodData Central এবং দক্ষিণ এশিয়া / বাংলাদেশের খাদ্য উপাদান তালিকার ওপর ভিত্তি করে তৈরি। প্রতিটি খাবার আমরা USDA FoodData Central ও INFS বাংলাদেশ খাদ্য উপাদান তালিকা (২০১৩)-এর সঙ্গে আবার মিলিয়ে দেখছি। কাজ শেষ হলে প্রতিটি মানের পাশে তার উৎস ও যাচাইয়ের তারিখ দেখা যাবে। রান্না করা খাবারের মান রেসিপিভেদে সবসময় আলাদা হয়।" },
        { h: "বিনামূল্যে ব্যবহার" },
        { p: "সাইটটি সম্পূর্ণ বিনামূল্যে। কোনো অ্যাকাউন্ট নেই, সাইন-আপ নেই, বিজ্ঞাপনও নেই। আপনার সেটিং আর টুলের তথ্য আপনার নিজের ব্রাউজারেই থাকে। বিস্তারিত জানতে গোপনীয়তা নীতি দেখুন।" },
        { tip: "এই সাইট শুধু সাধারণ জ্ঞানের জন্য, এটি চিকিৎসা পরামর্শ নয়। কোনো স্বাস্থ্য সমস্যায় ডাক্তার বা নিবন্ধিত পুষ্টিবিদের সঙ্গে কথা বলুন।" },
      ],
    },
  },

  // ───────────────────────────────────────────────────────────
  "editorial-policy": {
    title: { en: "Editorial Policy", bn: "সম্পাদকীয় নীতি" },
    summary: {
      en: "How we write and check our content, where the data comes from, what has not been reviewed yet, and how to report a mistake.",
      bn: "আমরা কীভাবে লিখি ও যাচাই করি, তথ্য কোথা থেকে আসে, কী এখনো রিভিউ হয়নি, আর ভুল পেলে কীভাবে জানাবেন।",
    },
    updated: "2026-11-02",
    body: {
      en: [
        { h: "Our aim" },
        { p: "We want to explain food and nutrition in plain language, in both English and Bangla, with a focus on foods people in Bangladesh actually eat. Content is written for general education, not to diagnose or treat anyone." },
        { h: "Nutrition data" },
        { ul: [
          "Values are given per 100 g of food.",
          "They are currently approximate estimates based on USDA FoodData Central and South Asian / Bangladesh food composition tables.",
          "A re-verification against USDA FoodData Central and the INFS Bangladesh Food Composition Table (2013) is in progress.",
          "After verification, each value will show its source and the date it was checked. Cooked dishes vary by recipe, so treat their values as a rough guide.",
        ] },
        { h: "Health guides and blog posts" },
        { p: "Our guides and articles draw on general public-health guidance, such as advice from the World Health Organization (WHO). We try to keep claims cautious and avoid promising cures." },
        { tip: "Honest note: our health content has not yet been reviewed by a qualified nutritionist. We are planning a reviewer workflow — Draft → Review → Approved → Published — so that every guide is checked before it goes live. Until then, please read it as general information." },
        { h: "Photos" },
        { p: "Food photos come from Wikimedia Commons under CC BY, CC BY-SA or public-domain licences. The author and licence are credited on each food page and on the References page." },
        { h: "Corrections" },
        { p: "If you spot a wrong number, an unclear sentence or a poor Bangla translation, please tell us through the Contact page. We welcome corrections and will fix confirmed errors as soon as we can." },
      ],
      bn: [
        { h: "আমাদের লক্ষ্য" },
        { p: "আমরা খাবার ও পুষ্টির কথা সহজ ভাষায়, ইংরেজি ও বাংলা দুই ভাষাতেই বোঝাতে চাই — বিশেষ করে বাংলাদেশের মানুষ যা আসলে খায়, সেই খাবারগুলো নিয়ে। লেখাগুলো সাধারণ জ্ঞানের জন্য, কারও রোগ নির্ণয় বা চিকিৎসার জন্য নয়।" },
        { h: "পুষ্টির তথ্য" },
        { ul: [
          "মানগুলো প্রতি ১০০ গ্রাম খাবারের হিসাবে দেওয়া।",
          "এগুলো এখন আনুমানিক হিসাব, যা USDA FoodData Central এবং দক্ষিণ এশিয়া / বাংলাদেশের খাদ্য উপাদান তালিকার ওপর ভিত্তি করে তৈরি।",
          "USDA FoodData Central ও INFS বাংলাদেশ খাদ্য উপাদান তালিকা (২০১৩)-এর সঙ্গে আবার মিলিয়ে দেখার কাজ চলছে।",
          "যাচাইয়ের পর প্রতিটি মানের পাশে উৎস ও যাচাইয়ের তারিখ থাকবে। রান্না করা খাবার রেসিপিভেদে আলাদা হয়, তাই সেগুলোর মান মোটামুটি ধারণা হিসেবে নিন।",
        ] },
        { h: "স্বাস্থ্য গাইড ও ব্লগ" },
        { p: "আমাদের গাইড ও লেখাগুলো সাধারণ জনস্বাস্থ্য নির্দেশনার ওপর ভিত্তি করে লেখা, যেমন বিশ্ব স্বাস্থ্য সংস্থার (WHO) পরামর্শ। আমরা সাবধানে কথা বলার চেষ্টা করি এবং রোগ সারানোর কোনো প্রতিশ্রুতি দিই না।" },
        { tip: "সত্যি কথা: আমাদের স্বাস্থ্যবিষয়ক লেখাগুলো এখনো কোনো যোগ্য পুষ্টিবিদ রিভিউ করেননি। আমরা একটি রিভিউ ধাপ চালু করার পরিকল্পনা করছি — খসড়া → রিভিউ → অনুমোদিত → প্রকাশিত — যাতে প্রতিটি গাইড প্রকাশের আগে যাচাই হয়। ততদিন এগুলোকে সাধারণ তথ্য হিসেবেই পড়ুন।" },
        { h: "ছবি" },
        { p: "খাবারের ছবিগুলো Wikimedia Commons থেকে নেওয়া, CC BY, CC BY-SA বা পাবলিক ডোমেইন লাইসেন্সে। প্রতিটি খাবারের পাতায় এবং রেফারেন্স পাতায় ছবির লেখক ও লাইসেন্সের উল্লেখ আছে।" },
        { h: "ভুল সংশোধন" },
        { p: "কোনো সংখ্যা ভুল, কোনো বাক্য অস্পষ্ট বা বাংলা অনুবাদ ঠিক না মনে হলে যোগাযোগ পাতার মাধ্যমে আমাদের জানান। সংশোধন আমরা সানন্দে নিই, আর নিশ্চিত হওয়া ভুল যত দ্রুত সম্ভব ঠিক করে দিই।" },
      ],
    },
  },

  // ───────────────────────────────────────────────────────────
  "privacy-policy": {
    title: { en: "Privacy Policy", bn: "গোপনীয়তা নীতি" },
    summary: {
      en: "No accounts, no tracking cookies, no analytics, no ads. Your settings and tool data stay in your own browser.",
      bn: "কোনো অ্যাকাউন্ট নেই, ট্র্যাকিং কুকি নেই, অ্যানালিটিক্স নেই, বিজ্ঞাপন নেই। আপনার সেটিং ও টুলের তথ্য আপনার নিজের ব্রাউজারেই থাকে।",
    },
    updated: "2026-11-02",
    body: {
      en: [
        { h: "The short version" },
        { tip: "Food & Nutrition does not collect your personal data. We do not send anything you do on the site to a server." },
        { h: "What we do not do" },
        { ul: [
          "No user accounts and no sign-up.",
          "No cookies for tracking.",
          "No analytics or visitor tracking.",
          "No advertising.",
          "No third-party requests for fonts or images — they are hosted on this site.",
        ] },
        { h: "What is saved on your device" },
        { p: "To make the site easier to use, a few things are saved in your browser's localStorage. This stays only on your own device and is never sent to us:" },
        { ul: [
          "Preferences: language, theme (light or dark) and accent colour.",
          "Tool data: your food compare list, plate calculator items and recently viewed foods.",
        ] },
        { h: "How to remove it" },
        { p: "You can delete this data at any time by clearing this site's data (or browsing data) in your browser settings. The site will then go back to its default settings." },
        { h: "If this changes" },
        { p: "If we ever add features such as accounts or a newsletter, we will update this policy before they launch and clearly tell you what is collected and why." },
      ],
      bn: [
        { h: "সংক্ষেপে" },
        { tip: "খাবার ও পুষ্টি আপনার কোনো ব্যক্তিগত তথ্য সংগ্রহ করে না। সাইটে আপনি যা করেন, তার কিছুই কোনো সার্ভারে পাঠানো হয় না।" },
        { h: "আমরা যা করি না" },
        { ul: [
          "কোনো অ্যাকাউন্ট নেই, সাইন-আপও নেই।",
          "ট্র্যাকিংয়ের জন্য কোনো কুকি নেই।",
          "কোনো অ্যানালিটিক্স বা ভিজিটর ট্র্যাকিং নেই।",
          "কোনো বিজ্ঞাপন নেই।",
          "ফন্ট বা ছবির জন্য বাইরের কোনো সাইটে অনুরোধ যায় না — এগুলো এই সাইটেই রাখা।",
        ] },
        { h: "আপনার ডিভাইসে যা সেভ থাকে" },
        { p: "সাইটটি ব্যবহার সহজ করতে কয়েকটি জিনিস আপনার ব্রাউজারের localStorage-এ সেভ থাকে। এগুলো শুধু আপনার নিজের ডিভাইসেই থাকে, আমাদের কাছে কখনো আসে না:" },
        { ul: [
          "পছন্দ: ভাষা, থিম (লাইট বা ডার্ক) ও অ্যাকসেন্ট রং।",
          "টুলের তথ্য: খাবার তুলনার তালিকা, প্লেট ক্যালকুলেটরের খাবার আর সম্প্রতি দেখা খাবার।",
        ] },
        { h: "কীভাবে মুছবেন" },
        { p: "ব্রাউজারের সেটিং থেকে এই সাইটের ডেটা (বা ব্রাউজিং ডেটা) মুছে দিলেই এগুলো যেকোনো সময় মুছে যাবে। তখন সাইটটি আবার শুরুর সেটিংয়ে ফিরে যাবে।" },
        { h: "নীতি বদলালে" },
        { p: "ভবিষ্যতে অ্যাকাউন্ট বা নিউজলেটারের মতো কিছু যোগ করলে, চালু করার আগেই আমরা এই নীতি হালনাগাদ করব এবং কী তথ্য নেওয়া হবে ও কেন, তা পরিষ্কারভাবে জানাব।" },
      ],
    },
  },

  // ───────────────────────────────────────────────────────────
  terms: {
    title: { en: "Terms of Use", bn: "ব্যবহারের শর্তাবলি" },
    summary: {
      en: "The simple rules for using Food & Nutrition: free educational use, no warranty, not medical advice, and respect for photo licences.",
      bn: "খাবার ও পুষ্টি ব্যবহারের সহজ নিয়ম: শিক্ষামূলক কাজে বিনামূল্যে ব্যবহার, কোনো নিশ্চয়তা নেই, চিকিৎসা পরামর্শ নয়, আর ছবির লাইসেন্স মেনে চলা।",
    },
    updated: "2026-11-02",
    body: {
      en: [
        { h: "Using the site" },
        { p: "By using Food & Nutrition, you agree to these terms. The site is free to use for personal and educational purposes. If you do not agree, please do not use the site." },
        { h: "Content is provided \"as is\"" },
        { p: "We work hard to keep information useful and accurate, but we cannot guarantee it is complete, correct or up to date. Nutrition values are approximate, and cooked dishes vary by recipe. The content is provided \"as is\", without any warranty of any kind." },
        { h: "Not medical advice" },
        { p: "Nothing on this site is medical advice, diagnosis or treatment. Always ask a doctor or registered dietitian before making changes to your diet for a health reason. Please read our Medical Disclaimer." },
        { h: "Photos and other material" },
        { ul: [
          "Food photos come from Wikimedia Commons. Their copyright belongs to their authors.",
          "Each photo has its own licence (CC BY, CC BY-SA or public domain), shown on the food page and the References page.",
          "If you reuse a photo, you must follow the terms of its licence, including giving credit where required.",
        ] },
        { h: "Changes" },
        { p: "Food & Nutrition may update, add or remove content and features, and may change these terms, at any time. The date at the top of this page shows when the terms were last updated." },
      ],
      bn: [
        { h: "সাইট ব্যবহার" },
        { p: "খাবার ও পুষ্টি ব্যবহার করলে ধরে নেওয়া হবে আপনি এই শর্তগুলো মেনে নিয়েছেন। ব্যক্তিগত ও শিক্ষামূলক কাজে সাইটটি বিনামূল্যে ব্যবহার করা যায়। শর্তে রাজি না হলে অনুগ্রহ করে সাইটটি ব্যবহার করবেন না।" },
        { h: "তথ্য যেমন আছে তেমন দেওয়া" },
        { p: "তথ্য কাজের ও সঠিক রাখতে আমরা চেষ্টা করি, কিন্তু সব তথ্য সম্পূর্ণ, নির্ভুল বা হালনাগাদ থাকবে — এমন নিশ্চয়তা দিতে পারি না। পুষ্টিমানগুলো আনুমানিক, আর রান্না করা খাবার রেসিপিভেদে আলাদা হয়। সব তথ্য \"যেমন আছে তেমন\" দেওয়া, কোনো ধরনের নিশ্চয়তা ছাড়া।" },
        { h: "চিকিৎসা পরামর্শ নয়" },
        { p: "এই সাইটের কোনো কিছুই চিকিৎসা পরামর্শ, রোগ নির্ণয় বা চিকিৎসা নয়। স্বাস্থ্যের কারণে খাবারে কোনো পরিবর্তন আনার আগে সবসময় ডাক্তার বা নিবন্ধিত পুষ্টিবিদের পরামর্শ নিন। আমাদের চিকিৎসা-বিষয়ক সতর্কতা পাতাটি পড়ে নিন।" },
        { h: "ছবি ও অন্যান্য উপাদান" },
        { ul: [
          "খাবারের ছবিগুলো Wikimedia Commons থেকে নেওয়া। এগুলোর স্বত্ব ছবির লেখকদের।",
          "প্রতিটি ছবির নিজস্ব লাইসেন্স আছে (CC BY, CC BY-SA বা পাবলিক ডোমেইন), যা খাবারের পাতায় ও রেফারেন্স পাতায় দেখানো আছে।",
          "কোনো ছবি আবার ব্যবহার করলে তার লাইসেন্সের শর্ত মানতে হবে, প্রয়োজনে লেখকের নামও উল্লেখ করতে হবে।",
        ] },
        { h: "পরিবর্তন" },
        { p: "খাবার ও পুষ্টি যেকোনো সময় তথ্য ও ফিচার হালনাগাদ, যোগ বা বাদ দিতে পারে, এবং এই শর্তাবলিও বদলাতে পারে। পাতার ওপরের তারিখ দেখে বুঝবেন শর্তগুলো শেষ কবে হালনাগাদ হয়েছে।" },
      ],
    },
  },

  // ───────────────────────────────────────────────────────────
  "medical-disclaimer": {
    title: { en: "Medical Disclaimer", bn: "চিকিৎসা-বিষয়ক সতর্কতা" },
    summary: {
      en: "Everything on Food & Nutrition is for general education only. It is not a substitute for advice from a doctor or registered dietitian.",
      bn: "খাবার ও পুষ্টির সব তথ্য শুধু সাধারণ জ্ঞানের জন্য। এটি ডাক্তার বা নিবন্ধিত পুষ্টিবিদের পরামর্শের বিকল্প নয়।",
    },
    updated: "2026-11-02",
    body: {
      en: [
        { tip: "In a medical emergency, call 999 (Bangladesh national emergency number) or your local emergency services right away. Do not rely on this website." },
        { h: "Educational information only" },
        { p: "The food data, health guides, blog posts and tools on this site are for general education. They are not medical advice and cannot diagnose, treat, cure or prevent any disease. Do not delay seeing a doctor, or stop any treatment, because of something you read here." },
        { h: "Talk to a professional first" },
        { p: "Please consult a doctor or registered dietitian before changing your diet, especially if any of these apply to you:" },
        { ul: [
          "Pregnancy or breastfeeding.",
          "Planning food for babies or children.",
          "A long-term illness such as diabetes, kidney disease or heart disease.",
          "Food allergies or intolerances.",
          "Taking any regular medicines.",
        ] },
        { h: "Herbal and home remedies" },
        { p: "Medicinal plants and home remedies can be strong. Some can interact with medicines (for example, blood thinners or diabetes and blood-pressure medicines) or be unsafe in pregnancy. Ask your doctor before using them, and never use them instead of prescribed treatment." },
        { h: "Calculators give estimates" },
        { p: "The BMI, calorie and plate calculators give rough estimates based on general formulas and approximate nutrition values. Your real needs depend on your age, body, activity and health, so use the results as a starting point for a conversation with a professional, not as a prescription." },
      ],
      bn: [
        { tip: "জরুরি চিকিৎসা প্রয়োজন হলে এখনই ৯৯৯ (বাংলাদেশের জাতীয় জরুরি সেবা নম্বর) অথবা আপনার এলাকার জরুরি সেবায় কল করুন। এই ওয়েবসাইটের ওপর ভরসা করবেন না।" },
        { h: "শুধু শিক্ষামূলক তথ্য" },
        { p: "এই সাইটের খাবারের তথ্য, স্বাস্থ্য গাইড, ব্লগ ও টুলগুলো সাধারণ জ্ঞানের জন্য। এগুলো চিকিৎসা পরামর্শ নয়, এবং কোনো রোগ নির্ণয়, চিকিৎসা, নিরাময় বা প্রতিরোধ করতে পারে না। এখানে কিছু পড়ে ডাক্তার দেখাতে দেরি করবেন না, বা চলমান চিকিৎসা বন্ধ করবেন না।" },
        { h: "আগে বিশেষজ্ঞের সঙ্গে কথা বলুন" },
        { p: "খাবারে পরিবর্তন আনার আগে ডাক্তার বা নিবন্ধিত পুষ্টিবিদের পরামর্শ নিন, বিশেষ করে নিচের কোনোটি আপনার ক্ষেত্রে প্রযোজ্য হলে:" },
        { ul: [
          "গর্ভাবস্থা বা বুকের দুধ খাওয়ানোর সময়।",
          "শিশু বা বাচ্চাদের খাবার ঠিক করার সময়।",
          "ডায়াবেটিস, কিডনি রোগ বা হৃদরোগের মতো দীর্ঘমেয়াদি অসুখ থাকলে।",
          "খাবারে অ্যালার্জি বা কোনো খাবার সহ্য না হলে।",
          "নিয়মিত কোনো ওষুধ খেলে।",
        ] },
        { h: "ভেষজ ও ঘরোয়া প্রতিকার" },
        { p: "ঔষধি গাছ ও ঘরোয়া টোটকার প্রভাব বেশ জোরালো হতে পারে। কিছু ভেষজ ওষুধের সঙ্গে বিক্রিয়া করতে পারে (যেমন রক্ত পাতলা করার ওষুধ, ডায়াবেটিস বা উচ্চ রক্তচাপের ওষুধ), আবার কিছু গর্ভাবস্থায় নিরাপদ নয়। ব্যবহারের আগে ডাক্তারকে জিজ্ঞেস করুন, আর কখনোই ডাক্তারের দেওয়া চিকিৎসার বদলে এগুলো ব্যবহার করবেন না।" },
        { h: "ক্যালকুলেটর শুধু আনুমানিক হিসাব দেয়" },
        { p: "বিএমআই, ক্যালরি ও প্লেট ক্যালকুলেটর সাধারণ সূত্র আর আনুমানিক পুষ্টিমান দিয়ে মোটামুটি একটা হিসাব দেয়। আপনার আসল প্রয়োজন নির্ভর করে বয়স, শরীর, পরিশ্রম ও স্বাস্থ্যের ওপর। তাই ফলাফলকে প্রেসক্রিপশন নয়, বরং বিশেষজ্ঞের সঙ্গে আলোচনার শুরু হিসেবে নিন।" },
      ],
    },
  },

  // ───────────────────────────────────────────────────────────
  contact: {
    title: { en: "Contact Us", bn: "যোগাযোগ" },
    summary: {
      en: "Found a mistake, have an idea, or want to work with us? Here is what you can contact the Food & Nutrition team about.",
      bn: "ভুল চোখে পড়েছে, কোনো আইডিয়া আছে, বা আমাদের সঙ্গে কাজ করতে চান? খাবার ও পুষ্টি টিমের সঙ্গে কী নিয়ে যোগাযোগ করতে পারেন, তা এখানে দেখুন।",
    },
    updated: "2026-11-02",
    body: {
      en: [
        { h: "We'd like to hear from you" },
        { p: "Food & Nutrition is a small, growing project, and feedback from readers helps us make it better and more accurate." },
        { h: "What you can contact us about" },
        { ul: [
          "Corrections: a nutrition value that looks wrong, an outdated fact, or a broken link.",
          "Translation: Bangla or English text that is unclear or reads unnaturally.",
          "Suggestions: foods, guides or tools you would like to see added.",
          "Partnership: nutritionists, dietitians, researchers or organisations who would like to review or contribute content.",
        ] },
        { h: "Reporting a correction" },
        { p: "To help us check quickly, please mention the page or food name, what looks wrong, and, if possible, a source we can check (for example, a food composition table)." },
        { h: "How to reach us" },
        { p: "Contact details will be listed on this page. If none are shown yet, please check back soon." },
        { tip: "We cannot give personal medical or diet advice. For health concerns, please see a doctor or registered dietitian. In an emergency, call 999." },
      ],
      bn: [
        { h: "আপনার কথা শুনতে চাই" },
        { p: "খাবার ও পুষ্টি একটি ছোট, বেড়ে ওঠা প্রকল্প। পাঠকদের মতামত আমাদের সাইটটিকে আরও ভালো ও নির্ভুল করতে সাহায্য করে।" },
        { h: "যে বিষয়ে যোগাযোগ করতে পারেন" },
        { ul: [
          "ভুল সংশোধন: কোনো পুষ্টিমান ভুল মনে হলে, পুরোনো তথ্য বা কাজ না করা লিংক পেলে।",
          "অনুবাদ: বাংলা বা ইংরেজি লেখা অস্পষ্ট বা অস্বাভাবিক লাগলে।",
          "পরামর্শ: কোন খাবার, গাইড বা টুল যোগ হলে ভালো হয়।",
          "অংশীদারিত্ব: পুষ্টিবিদ, ডায়েটিশিয়ান, গবেষক বা প্রতিষ্ঠান যাঁরা লেখা রিভিউ করতে বা লিখতে চান।",
        ] },
        { h: "ভুল জানানোর সময়" },
        { p: "দ্রুত যাচাই করতে সুবিধা হবে যদি পাতার বা খাবারের নাম, কী ভুল মনে হচ্ছে, আর সম্ভব হলে যাচাই করার মতো একটি উৎস (যেমন খাদ্য উপাদান তালিকা) উল্লেখ করেন।" },
        { h: "কীভাবে যোগাযোগ করবেন" },
        { p: "যোগাযোগের ঠিকানা এই পাতাতেই দেওয়া হবে। এখনো কিছু দেখা না গেলে কিছুদিন পর আবার দেখুন।" },
        { tip: "আমরা ব্যক্তিগত চিকিৎসা বা ডায়েট পরামর্শ দিতে পারি না। স্বাস্থ্য সমস্যায় ডাক্তার বা নিবন্ধিত পুষ্টিবিদের কাছে যান। জরুরি অবস্থায় ৯৯৯-এ কল করুন।" },
      ],
    },
  },
};
