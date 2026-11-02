/*
 * Common nutrient deficiencies in Bangladesh: signs, who is at risk and how to prevent them.
 * General education only — not a substitute for diagnosis by a doctor.
 * `nutrient` matches an id in micronutrients.js (or "protein"); `foods` are food ids.
 */

export const DEFICIENCIES = [
  {
    id: "anemia",
    nutrient: "iron",
    tone: "red",
    name: { en: "Iron-deficiency anaemia", bn: "আয়রনের অভাবজনিত রক্তস্বল্পতা" },
    summary: {
      en: "When the body lacks iron it cannot make enough haemoglobin to carry oxygen. Anaemia is common in Bangladesh, especially among young children, adolescent girls and women.",
      bn: "শরীরে আয়রনের অভাব হলে অক্সিজেন বহনের জন্য যথেষ্ট হিমোগ্লোবিন তৈরি হয় না। বাংলাদেশে রক্তস্বল্পতা বেশ সাধারণ, বিশেষ করে ছোট শিশু, কিশোরী ও নারীদের মধ্যে।",
    },
    symptoms: {
      en: ["Constant tiredness and weakness", "Pale skin, lips, inner eyelids and nails", "Shortness of breath or a racing heart", "Dizziness and headaches", "Brittle or spoon-shaped nails", "Craving to eat ice, soil or chalk"],
      bn: ["সারাক্ষণ ক্লান্তি ও দুর্বলতা", "ত্বক, ঠোঁট, চোখের পাতার ভেতর ও নখ ফ্যাকাশে", "শ্বাসকষ্ট বা বুক ধড়ফড়", "মাথা ঘোরা ও মাথাব্যথা", "নখ ভঙ্গুর বা চামচের মতো বাঁকা", "বরফ, মাটি বা চক খাওয়ার ইচ্ছা"],
    },
    atRisk: {
      en: ["Pregnant women", "Adolescent girls and women with heavy periods", "Infants and young children", "People with worm infections"],
      bn: ["গর্ভবতী নারী", "কিশোরী ও যাদের মাসিকে বেশি রক্তক্ষরণ হয়", "শিশু ও ছোট বাচ্চা", "যাদের পেটে কৃমি আছে"],
    },
    foods: ["chickenliver", "beef", "lentil", "redamaranth", "kochushak", "egg"],
    prevent: {
      en: ["Eat iron-rich foods like liver, meat, fish, dal and dark green shak", "Add lemon, guava or amloki to meals to boost iron absorption", "Avoid tea or coffee for an hour after meals", "Take deworming tablets and iron-folic acid in pregnancy as advised"],
      bn: ["কলিজা, মাংস, মাছ, ডাল ও গাঢ় সবুজ শাকের মতো আয়রনসমৃদ্ধ খাবার খান", "আয়রন শোষণ বাড়াতে খাবারের সাথে লেবু, পেয়ারা বা আমলকী খান", "খাবারের পর এক ঘণ্টা চা-কফি এড়িয়ে চলুন", "পরামর্শমতো কৃমিনাশক বড়ি এবং গর্ভাবস্থায় আয়রন-ফলিক অ্যাসিড বড়ি খান"],
    },
    doctor: {
      en: "See a doctor if tiredness and paleness persist — a simple blood test (haemoglobin, CBC, ferritin) can confirm anaemia.",
      bn: "ক্লান্তি ও ফ্যাকাশে ভাব না কমলে ডাক্তার দেখান — রক্তের সাধারণ পরীক্ষা (হিমোগ্লোবিন, সিবিসি, ফেরিটিন) করে রক্তস্বল্পতা নিশ্চিত করা যায়।",
    },
  },
  {
    id: "nightblindness",
    nutrient: "vitA",
    tone: "amber",
    name: { en: "Vitamin A deficiency (Night blindness)", bn: "ভিটামিন এ-র অভাব (রাতকানা)" },
    summary: {
      en: "Lack of vitamin A first causes difficulty seeing in dim light and can lead to permanent blindness. Bangladesh has greatly reduced it through vitamin A capsule campaigns for children aged 6–59 months.",
      bn: "ভিটামিন এ-র অভাবে প্রথমে কম আলোয় দেখতে অসুবিধা হয়, পরে স্থায়ী অন্ধত্বও হতে পারে। ৬–৫৯ মাস বয়সী শিশুদের ভিটামিন এ ক্যাপসুল খাওয়ানোর কর্মসূচির ফলে বাংলাদেশে এটি অনেক কমেছে।",
    },
    symptoms: {
      en: ["Difficulty seeing in dim light or at dusk", "Dry, rough eyes", "Foamy grey spots on the white of the eye (Bitot's spots)", "Frequent infections such as diarrhoea and measles complications", "Dry, rough skin"],
      bn: ["সন্ধ্যায় বা কম আলোয় দেখতে অসুবিধা", "চোখ শুকনো ও খসখসে", "চোখের সাদা অংশে ফেনার মতো ধূসর দাগ (বিটটস স্পট)", "ঘন ঘন ডায়রিয়া ও হামের জটিলতার মতো অসুখ", "শুকনো, খসখসে ত্বক"],
    },
    atRisk: {
      en: ["Children under five", "Pregnant and breastfeeding women", "Children with frequent diarrhoea or measles", "Families with little vegetable, fruit or animal food"],
      bn: ["পাঁচ বছরের কম বয়সী শিশু", "গর্ভবতী ও স্তন্যদানকারী মা", "যেসব শিশুর ঘন ঘন ডায়রিয়া বা হাম হয়", "যেসব পরিবারে সবজি, ফল বা প্রাণিজ খাবার কম খাওয়া হয়"],
    },
    foods: ["mola", "carrot", "pumpkin", "sweetpotato", "mango", "chickenliver"],
    prevent: {
      en: ["Make sure children get vitamin A capsules at the national campaigns", "Eat yellow-orange fruit and vegetables and dark green shak every day", "Cook vegetables with a little oil", "Breastfeed babies — breast milk is rich in vitamin A"],
      bn: ["জাতীয় কর্মসূচিতে শিশুকে ভিটামিন এ ক্যাপসুল খাওয়ান", "প্রতিদিন হলুদ-কমলা রঙের ফল-সবজি ও গাঢ় সবুজ শাক খান", "সবজি অল্প তেলে রান্না করুন", "শিশুকে বুকের দুধ খাওয়ান — মায়ের দুধে প্রচুর ভিটামিন এ থাকে"],
    },
    doctor: {
      en: "See a doctor promptly if a child cannot see well at dusk or has eye spots or dryness — early treatment can save sight.",
      bn: "শিশু সন্ধ্যায় ভালো দেখতে না পেলে বা চোখে দাগ ও শুষ্কতা দেখা দিলে দ্রুত ডাক্তার দেখান — দ্রুত চিকিৎসায় দৃষ্টি বাঁচানো যায়।",
    },
  },
  {
    id: "goitre",
    nutrient: "iodine",
    tone: "violet",
    name: { en: "Iodine deficiency (Goitre)", bn: "আয়োডিনের অভাব (গলগণ্ড)" },
    summary: {
      en: "Without enough iodine the thyroid gland swells and cannot make enough hormone. Iodised salt has made goitre far less common in Bangladesh, but it still occurs where non-iodised salt is used.",
      bn: "যথেষ্ট আয়োডিন না পেলে থাইরয়েড গ্রন্থি ফুলে যায় এবং প্রয়োজনীয় হরমোন তৈরি করতে পারে না। আয়োডিনযুক্ত লবণের কারণে বাংলাদেশে গলগণ্ড অনেক কমেছে, তবে খোলা আয়োডিনবিহীন লবণ ব্যবহারে এখনও দেখা যায়।",
    },
    symptoms: {
      en: ["Swelling at the front of the neck", "Tiredness and feeling cold", "Weight gain and dry skin", "Difficulty swallowing in large goitre", "Poor growth and learning in children"],
      bn: ["গলার সামনের দিক ফুলে যাওয়া", "ক্লান্তি ও শীত শীত ভাব", "ওজন বাড়া ও ত্বক শুকনো হওয়া", "বড় গলগণ্ডে গিলতে অসুবিধা", "শিশুর বৃদ্ধি ও লেখাপড়ায় পিছিয়ে পড়া"],
    },
    atRisk: {
      en: ["Pregnant and breastfeeding women", "Children and adolescents", "Families using loose, non-iodised salt", "People in hilly and flood-prone areas"],
      bn: ["গর্ভবতী ও স্তন্যদানকারী মা", "শিশু ও কিশোর-কিশোরী", "যেসব পরিবার খোলা, আয়োডিনবিহীন লবণ ব্যবহার করে", "পাহাড়ি ও বন্যাপ্রবণ এলাকার মানুষ"],
    },
    foods: ["shrimp", "tuna", "rupchanda", "egg", "milk", "yogurt"],
    prevent: {
      en: ["Always buy packaged iodised salt", "Store salt in a closed container away from heat and damp", "Add salt towards the end of cooking", "Eat sea fish, eggs and milk regularly"],
      bn: ["সবসময় প্যাকেটজাত আয়োডিনযুক্ত লবণ কিনুন", "লবণ ঢাকনা দেওয়া পাত্রে তাপ ও স্যাঁতসেঁতে জায়গা থেকে দূরে রাখুন", "রান্নার শেষের দিকে লবণ দিন", "নিয়মিত সামুদ্রিক মাছ, ডিম ও দুধ খান"],
    },
    doctor: {
      en: "See a doctor for any neck swelling — a thyroid function test (TSH) and ultrasound can find the cause.",
      bn: "গলা ফুলে গেলে ডাক্তার দেখান — থাইরয়েড পরীক্ষা (টিএসএইচ) ও আল্ট্রাসনোগ্রাম করে কারণ জানা যায়।",
    },
  },
  {
    id: "rickets",
    nutrient: "vitD",
    tone: "sky",
    name: { en: "Vitamin D deficiency (Rickets / Osteomalacia)", bn: "ভিটামিন ডি-র অভাব (রিকেটস / অস্টিওম্যালেশিয়া)" },
    summary: {
      en: "Vitamin D is needed to absorb calcium; without it bones become soft. Despite plenty of sunshine, low vitamin D is common in Bangladesh because many people spend little time in the sun.",
      bn: "ক্যালসিয়াম শোষণে ভিটামিন ডি লাগে; এর অভাবে হাড় নরম হয়ে যায়। প্রচুর রোদ থাকলেও অনেকে রোদে কম থাকেন বলে বাংলাদেশে ভিটামিন ডি-র ঘাটতি বেশ সাধারণ।",
    },
    symptoms: {
      en: ["Bone pain and aches, especially in the back and legs", "Muscle weakness and cramps", "Bowed legs or delayed walking in children", "Delayed teething in children", "Frequent tiredness"],
      bn: ["হাড়ে ব্যথা, বিশেষ করে কোমর ও পায়ে", "পেশি দুর্বলতা ও টান ধরা", "শিশুর পা বাঁকা হওয়া বা দেরিতে হাঁটা শেখা", "শিশুর দেরিতে দাঁত ওঠা", "প্রায়ই ক্লান্ত লাগা"],
    },
    atRisk: {
      en: ["People who stay indoors most of the day", "Women who cover most of their skin outdoors", "Older adults", "Exclusively breastfed babies who get little sun"],
      bn: ["যারা দিনের বেশিরভাগ সময় ঘরের ভেতরে থাকেন", "যেসব নারী বাইরে গেলে শরীরের বেশিরভাগ অংশ ঢেকে রাখেন", "বয়স্ক মানুষ", "যেসব শুধু বুকের দুধ খাওয়া শিশু রোদ কম পায়"],
    },
    foods: ["hilsa", "sardine", "salmon", "egg", "mushroom", "milk"],
    prevent: {
      en: ["Get 15–30 minutes of sun on arms and face a few times a week", "Eat oily fish like hilsa and sardine and egg yolks", "Let children play outdoors in daylight", "Take a supplement only if a doctor advises"],
      bn: ["সপ্তাহে কয়েকবার হাত ও মুখে ১৫–৩০ মিনিট রোদ লাগান", "ইলিশ, সার্ডিনের মতো তৈলাক্ত মাছ ও ডিমের কুসুম খান", "শিশুদের দিনের আলোয় বাইরে খেলতে দিন", "ডাক্তার পরামর্শ দিলে তবেই সাপ্লিমেন্ট খান"],
    },
    doctor: {
      en: "See a doctor for ongoing bone pain or a child's bent legs — a blood test (25-hydroxy vitamin D) can check your level.",
      bn: "হাড়ে ব্যথা না কমলে বা শিশুর পা বাঁকা দেখা দিলে ডাক্তার দেখান — রক্ত পরীক্ষায় (২৫-হাইড্রক্সি ভিটামিন ডি) মাত্রা জানা যায়।",
    },
  },
  {
    id: "osteoporosis",
    nutrient: "calcium",
    tone: "teal",
    name: { en: "Calcium deficiency (Osteoporosis)", bn: "ক্যালসিয়ামের অভাব (অস্টিওপোরোসিস)" },
    summary: {
      en: "Too little calcium over many years makes bones thin and fragile. Osteoporosis often shows no signs until a bone breaks, and is most common in women after menopause.",
      bn: "বহু বছর ধরে কম ক্যালসিয়াম খেলে হাড় পাতলা ও ভঙ্গুর হয়ে যায়। হাড় না ভাঙা পর্যন্ত অস্টিওপোরোসিসের প্রায়ই কোনো লক্ষণ থাকে না; মাসিক বন্ধের পর নারীদের মধ্যে এটি সবচেয়ে বেশি হয়।",
    },
    symptoms: {
      en: ["Bones that break after a minor fall", "Back pain", "Loss of height over time", "A stooped or bent posture", "Muscle cramps and tingling (in low blood calcium)"],
      bn: ["সামান্য পড়ে গেলেই হাড় ভেঙে যাওয়া", "কোমর বা পিঠে ব্যথা", "সময়ের সাথে উচ্চতা কমে যাওয়া", "কুঁজো বা ঝুঁকে পড়া ভঙ্গি", "পেশিতে টান ও ঝিঁঝিঁ ভাব (রক্তে ক্যালসিয়াম কমলে)"],
    },
    atRisk: {
      en: ["Women after menopause", "Older adults", "People who drink little milk or eat few calcium foods", "People who are inactive or smoke"],
      bn: ["মাসিক বন্ধ হওয়ার পর নারী", "বয়স্ক মানুষ", "যারা দুধ বা ক্যালসিয়ামযুক্ত খাবার কম খান", "যারা শারীরিকভাবে নিষ্ক্রিয় বা ধূমপান করেন"],
    },
    foods: ["milk", "yogurt", "mola", "kachki", "sesame", "tofu"],
    prevent: {
      en: ["Have milk, yogurt or small fish with bones daily", "Get enough vitamin D from sunlight", "Do weight-bearing exercise like brisk walking", "Avoid smoking and limit cola and excess salt"],
      bn: ["প্রতিদিন দুধ, দই বা কাঁটাসহ ছোট মাছ খান", "রোদ থেকে যথেষ্ট ভিটামিন ডি নিন", "জোরে হাঁটার মতো ব্যায়াম করুন", "ধূমপান বাদ দিন এবং কোলা ও অতিরিক্ত লবণ কম খান"],
    },
    doctor: {
      en: "Women over 50 or anyone with a fracture from a minor fall should ask a doctor about a bone density (DEXA) scan.",
      bn: "৫০ বছরের বেশি নারী বা সামান্য পড়ে হাড় ভেঙেছে এমন কেউ ডাক্তারের কাছে হাড়ের ঘনত্ব (ডেক্সা) পরীক্ষার কথা জিজ্ঞেস করুন।",
    },
  },
  {
    id: "b12",
    nutrient: "vitB12",
    tone: "rose",
    name: { en: "Vitamin B12 deficiency", bn: "ভিটামিন বি১২-এর অভাব" },
    summary: {
      en: "B12 comes almost only from animal foods, so low intake or poor absorption leads to anaemia and nerve damage. It develops slowly, often over years.",
      bn: "বি১২ প্রায় শুধু প্রাণিজ খাবারে থাকে, তাই কম খেলে বা ঠিকমতো শোষিত না হলে রক্তস্বল্পতা ও স্নায়ুর ক্ষতি হয়। এটি ধীরে ধীরে, প্রায়ই কয়েক বছর ধরে তৈরি হয়।",
    },
    symptoms: {
      en: ["Tiredness and weakness", "Numbness or tingling in hands and feet", "Memory problems and low mood", "A sore, red, smooth tongue", "Pale or slightly yellow skin"],
      bn: ["ক্লান্তি ও দুর্বলতা", "হাত-পায়ে অবশ বা ঝিঁঝিঁ ভাব", "ভুলে যাওয়া ও মন খারাপ থাকা", "জিভ লাল, মসৃণ ও ব্যথাযুক্ত", "ত্বক ফ্যাকাশে বা হালকা হলুদ"],
    },
    atRisk: {
      en: ["Vegetarians and vegans", "Older adults", "People on long-term metformin or acid-reducing medicines", "People with stomach or gut problems"],
      bn: ["নিরামিষভোজী", "বয়স্ক মানুষ", "যারা দীর্ঘদিন মেটফরমিন বা গ্যাস্ট্রিকের ওষুধ খান", "যাদের পাকস্থলী বা অন্ত্রের সমস্যা আছে"],
    },
    foods: ["beefliver", "egg", "milk", "yogurt", "hilsa", "sardine"],
    prevent: {
      en: ["Include fish, egg, milk or meat in your diet regularly", "Vegetarians should take milk, yogurt and eggs daily", "Ask your doctor about a supplement if you are vegan or older", "Get your level checked if you take metformin long-term"],
      bn: ["নিয়মিত মাছ, ডিম, দুধ বা মাংস খান", "নিরামিষভোজীরা প্রতিদিন দুধ, দই ও ডিম খান", "পুরোপুরি নিরামিষভোজী বা বয়স্ক হলে সাপ্লিমেন্টের ব্যাপারে ডাক্তারের পরামর্শ নিন", "দীর্ঘদিন মেটফরমিন খেলে মাঝে মাঝে মাত্রা পরীক্ষা করান"],
    },
    doctor: {
      en: "See a doctor for persistent numbness, tiredness or memory problems — a blood test for B12 and a CBC can confirm it.",
      bn: "অবশ ভাব, ক্লান্তি বা ভুলে যাওয়ার সমস্যা না কমলে ডাক্তার দেখান — রক্তে বি১২ ও সিবিসি পরীক্ষায় তা নিশ্চিত হওয়া যায়।",
    },
  },
  {
    id: "folate",
    nutrient: "vitB9",
    tone: "lime",
    name: { en: "Folate deficiency (Neural tube defects in pregnancy)", bn: "ফোলেটের অভাব (গর্ভাবস্থায় স্নায়ুনালির ত্রুটি)" },
    summary: {
      en: "Folate is vital in the first weeks of pregnancy, often before a woman knows she is pregnant. Too little raises the risk of neural tube defects such as spina bifida, and causes anaemia.",
      bn: "গর্ভাবস্থার প্রথম কয়েক সপ্তাহে ফোলেট খুবই জরুরি — প্রায়ই নারী গর্ভধারণের কথা জানার আগেই। এর অভাবে শিশুর স্পাইনা বিফিডার মতো স্নায়ুনালির ত্রুটির ঝুঁকি বাড়ে এবং রক্তস্বল্পতা হয়।",
    },
    symptoms: {
      en: ["Tiredness and weakness", "Pale skin", "Mouth ulcers and a sore tongue", "Shortness of breath", "Irritability and poor concentration"],
      bn: ["ক্লান্তি ও দুর্বলতা", "ফ্যাকাশে ত্বক", "মুখে ঘা ও জিভে ব্যথা", "শ্বাসকষ্ট", "খিটখিটে মেজাজ ও মনোযোগের অভাব"],
    },
    atRisk: {
      en: ["Women planning a pregnancy or in early pregnancy", "Adolescent girls and young women", "People who eat few vegetables, fruit or pulses", "People who drink alcohol"],
      bn: ["যেসব নারী সন্তান নিতে চান বা গর্ভাবস্থার শুরুতে আছেন", "কিশোরী ও তরুণী", "যারা সবজি, ফল বা ডাল কম খান", "যারা মদ্যপান করেন"],
    },
    foods: ["spinach", "lentil", "chickpea", "kidneybean", "broccoli", "orange"],
    prevent: {
      en: ["Start folic acid tablets (400 µg) before pregnancy and continue through the first 3 months, as advised", "Eat dark green shak, dal and beans daily", "Don't overcook vegetables — folate is lost with heat", "Attend antenatal check-ups early"],
      bn: ["পরামর্শমতো গর্ভধারণের আগে থেকেই ফলিক অ্যাসিড বড়ি (৪০০ মাইক্রোগ্রাম) শুরু করুন এবং প্রথম ৩ মাস চালিয়ে যান", "প্রতিদিন গাঢ় সবুজ শাক, ডাল ও শিম-জাতীয় খাবার খান", "সবজি বেশি রান্না করবেন না — তাপে ফোলেট নষ্ট হয়", "গর্ভাবস্থার শুরু থেকেই নিয়মিত চেকআপ করান"],
    },
    doctor: {
      en: "Talk to a doctor as soon as you plan a pregnancy; a blood test (CBC, folate) can check for deficiency.",
      bn: "সন্তান নেওয়ার পরিকল্পনা করলেই ডাক্তারের সাথে কথা বলুন; রক্ত পরীক্ষায় (সিবিসি, ফোলেট) ঘাটতি জানা যায়।",
    },
  },
  {
    id: "zinc",
    nutrient: "zinc",
    tone: "indigo",
    name: { en: "Zinc deficiency", bn: "জিংকের অভাব" },
    summary: {
      en: "Zinc is needed for growth and immunity. Surveys show zinc deficiency is widespread among children and women in Bangladesh, because rice-based diets are low in zinc.",
      bn: "বৃদ্ধি ও রোগ প্রতিরোধে জিংক দরকার। জরিপে দেখা গেছে, ভাতনির্ভর খাবারে জিংক কম থাকায় বাংলাদেশের শিশু ও নারীদের মধ্যে জিংকের অভাব ব্যাপক।",
    },
    symptoms: {
      en: ["Frequent infections and diarrhoea", "Slow growth in children", "Slow wound healing", "Loss of appetite and taste", "Hair loss and skin rashes"],
      bn: ["ঘন ঘন অসুখ ও ডায়রিয়া", "শিশুর বৃদ্ধি ধীর হওয়া", "ক্ষত দেরিতে শুকানো", "খিদে ও স্বাদ কমে যাওয়া", "চুল পড়া ও ত্বকে ফুসকুড়ি"],
    },
    atRisk: {
      en: ["Young children", "Pregnant and breastfeeding women", "People eating mostly rice with little meat or fish", "Children with frequent diarrhoea"],
      bn: ["ছোট শিশু", "গর্ভবতী ও স্তন্যদানকারী মা", "যারা বেশিরভাগ ভাত খান, মাছ-মাংস কম খান", "যেসব শিশুর ঘন ঘন ডায়রিয়া হয়"],
    },
    foods: ["beef", "mutton", "egg", "pumpkinseed", "chickpea", "cashew"],
    prevent: {
      en: ["Include meat, fish, egg or dal in daily meals", "Soak or sprout dal and chickpeas before cooking", "Give zinc with ORS during a child's diarrhoea, as advised by a health worker", "Try zinc-enriched rice varieties where available"],
      bn: ["প্রতিদিনের খাবারে মাংস, মাছ, ডিম বা ডাল রাখুন", "রান্নার আগে ডাল ও ছোলা ভিজিয়ে বা অঙ্কুরিত করে নিন", "শিশুর ডায়রিয়া হলে স্বাস্থ্যকর্মীর পরামর্শমতো খাবার স্যালাইনের সাথে জিংক দিন", "পাওয়া গেলে জিংকসমৃদ্ধ ধানের চাল খান"],
    },
    doctor: {
      en: "See a doctor if a child grows poorly or gets sick often; the doctor will check growth and may test blood zinc.",
      bn: "শিশু ঠিকমতো না বাড়লে বা প্রায়ই অসুস্থ হলে ডাক্তার দেখান; ডাক্তার বৃদ্ধি মেপে দেখবেন এবং প্রয়োজনে রক্তে জিংক পরীক্ষা করাবেন।",
    },
  },
  {
    id: "scurvy",
    nutrient: "vitC",
    tone: "orange",
    name: { en: "Vitamin C deficiency (Scurvy / Bleeding gums)", bn: "ভিটামিন সি-র অভাব (স্কার্ভি / মাড়ি থেকে রক্ত পড়া)" },
    summary: {
      en: "The body cannot store much vitamin C, so it is needed every day. Mild deficiency causes bleeding gums; full scurvy is rare but still seen in people who eat almost no fruit or vegetables.",
      bn: "শরীর বেশি ভিটামিন সি জমিয়ে রাখতে পারে না, তাই প্রতিদিন দরকার। হালকা অভাবে মাড়ি থেকে রক্ত পড়ে; পুরোপুরি স্কার্ভি বিরল, তবে যারা প্রায় কোনো ফল-সবজি খান না তাদের মধ্যে এখনও দেখা যায়।",
    },
    symptoms: {
      en: ["Swollen, bleeding gums", "Easy bruising and tiny red spots on the skin", "Slow wound healing", "Joint and muscle pain", "Tiredness and irritability"],
      bn: ["মাড়ি ফোলা ও রক্ত পড়া", "সহজে কালশিটে পড়া ও ত্বকে ছোট লাল দাগ", "ক্ষত দেরিতে শুকানো", "গিঁটে ও পেশিতে ব্যথা", "ক্লান্তি ও খিটখিটে মেজাজ"],
    },
    atRisk: {
      en: ["People who eat few fruits and vegetables", "Smokers", "Older adults living alone", "People with very restricted diets"],
      bn: ["যারা ফল ও সবজি কম খান", "ধূমপায়ী", "একা থাকা বয়স্ক মানুষ", "যারা খুব সীমিত খাবার খান"],
    },
    foods: ["amloki", "guava", "lemon", "orange", "capsicum", "kamranga"],
    prevent: {
      en: ["Eat at least one vitamin C fruit daily — amloki, guava, lemon or orange", "Eat some fruit and salad raw", "Cook vegetables briefly and with the lid on", "Smokers need extra vitamin C — better still, quit"],
      bn: ["প্রতিদিন অন্তত একটি ভিটামিন সি-যুক্ত ফল খান — আমলকী, পেয়ারা, লেবু বা কমলা", "কিছু ফল ও সালাদ কাঁচা খান", "সবজি ঢাকনা দিয়ে অল্প সময় রান্না করুন", "ধূমপায়ীদের বাড়তি ভিটামিন সি লাগে — ধূমপান ছেড়ে দেওয়াই সবচেয়ে ভালো"],
    },
    doctor: {
      en: "See a doctor or dentist if gums bleed often or bruises appear without reason, to rule out other causes.",
      bn: "মাড়ি থেকে প্রায়ই রক্ত পড়লে বা কারণ ছাড়াই কালশিটে পড়লে অন্য কারণ বাদ দিতে ডাক্তার বা দাঁতের ডাক্তার দেখান।",
    },
  },
  {
    id: "pem",
    nutrient: "protein",
    tone: "emerald",
    name: { en: "Protein-energy malnutrition", bn: "প্রোটিন-শক্তির অপুষ্টি" },
    summary: {
      en: "When children don't get enough food, protein and energy, they become stunted (short), wasted (thin) or underweight. In Bangladesh about one in four children under five is stunted.",
      bn: "শিশুরা যথেষ্ট খাবার, প্রোটিন ও শক্তি না পেলে খর্বকায় (বয়সের তুলনায় খাটো), কৃশকায় (রোগা) বা কম ওজনের হয়ে যায়। বাংলাদেশে পাঁচ বছরের কম বয়সী প্রায় প্রতি চারজন শিশুর একজন খর্বকায়।",
    },
    symptoms: {
      en: ["Poor weight gain and growth", "Very thin arms and visible ribs", "Swelling of the feet or face (in severe cases)", "Thin, pale or easily pulled-out hair", "Low energy, irritability and frequent illness"],
      bn: ["ওজন ও উচ্চতা ঠিকমতো না বাড়া", "হাত খুব সরু ও পাঁজরের হাড় দেখা যাওয়া", "পা বা মুখ ফুলে যাওয়া (গুরুতর ক্ষেত্রে)", "চুল পাতলা, বিবর্ণ বা সহজে উঠে আসা", "নিস্তেজ ভাব, খিটখিটে মেজাজ ও ঘন ঘন অসুখ"],
    },
    atRisk: {
      en: ["Children under five, especially after 6 months", "Babies with low birth weight", "Children with frequent diarrhoea or infections", "Families facing food shortage"],
      bn: ["পাঁচ বছরের কম বয়সী শিশু, বিশেষ করে ৬ মাসের পর", "কম জন্ম-ওজনের শিশু", "যেসব শিশুর ঘন ঘন ডায়রিয়া বা সংক্রমণ হয়", "খাদ্যসংকটে থাকা পরিবার"],
    },
    foods: ["egg", "milk", "lentil", "rohu", "chicken", "suji"],
    prevent: {
      en: ["Breastfeed only for the first 6 months, then add soft home foods while continuing breast milk", "Give children khichuri with dal, vegetables, egg or fish several times a day", "Wash hands and use safe water to prevent diarrhoea", "Weigh children regularly at the health centre"],
      bn: ["প্রথম ৬ মাস শুধু বুকের দুধ, তারপর বুকের দুধের পাশাপাশি নরম ঘরের খাবার দিন", "শিশুকে দিনে কয়েকবার ডাল, সবজি, ডিম বা মাছ দিয়ে খিচুড়ি খাওয়ান", "ডায়রিয়া ঠেকাতে হাত ধুয়ে নিন ও নিরাপদ পানি ব্যবহার করুন", "স্বাস্থ্যকেন্দ্রে নিয়মিত শিশুর ওজন মাপুন"],
    },
    doctor: {
      en: "Take a child to a doctor or health centre at once if they are losing weight, have swollen feet or refuse food — severe malnutrition needs urgent care.",
      bn: "শিশুর ওজন কমতে থাকলে, পা ফুলে গেলে বা খেতে না চাইলে এখনই ডাক্তার বা স্বাস্থ্যকেন্দ্রে নিন — তীব্র অপুষ্টিতে জরুরি চিকিৎসা লাগে।",
    },
  },
];
