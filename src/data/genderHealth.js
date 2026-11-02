/*
 * Men's and women's health & nutrition topics, plus a period (menstrual cycle) food guide.
 * General education only — not medical advice. Values are approximate adult (19–50 y) daily needs (IOM/WHO).
 * `eat` arrays are food ids.
 */

export const GENDER_HEALTH = {
  men: {
    intro: {
      en: "Men in Bangladesh face high rates of heart disease, diabetes and high blood pressure — often from smoking, salty and oily food and too little activity. Good everyday food choices can protect the heart, muscles and long-term vitality.",
      bn: "বাংলাদেশে পুরুষদের মধ্যে হৃদরোগ, ডায়াবেটিস ও উচ্চ রক্তচাপ বেশ বেশি — এর পেছনে প্রায়ই থাকে ধূমপান, বেশি লবণ-তেলের খাবার আর কম নড়াচড়া। প্রতিদিনের সঠিক খাবার হৃদয়, পেশি ও দীর্ঘমেয়াদি সুস্থতা রক্ষা করতে পারে।",
    },
    needs: [
      { label: { en: "Calories", bn: "ক্যালরি" }, value: { en: "2,400–2,600 kcal/day", bn: "২,৪০০–২,৬০০ কিলোক্যালরি/দিন" }, note: { en: "Moderately active; less if desk-bound", bn: "মাঝারি সক্রিয় হলে; বসে কাজ করলে কম" } },
      { label: { en: "Protein", bn: "প্রোটিন" }, value: { en: "~0.8 g per kg body weight", bn: "শরীরের ওজনের প্রতি কেজিতে ~০.৮ গ্রাম" }, note: { en: "About 55–60 g for a 70 kg man", bn: "৭০ কেজির পুরুষের জন্য প্রায় ৫৫–৬০ গ্রাম" } },
      { label: { en: "Zinc", bn: "জিংক" }, value: { en: "11 mg/day", bn: "১১ মি.গ্রা./দিন" }, note: { en: "Immunity, hormones, sperm health", bn: "রোগ প্রতিরোধ, হরমোন ও শুক্রাণুর স্বাস্থ্য" } },
      { label: { en: "Iron", bn: "আয়রন" }, value: { en: "8 mg/day", bn: "৮ মি.গ্রা./দিন" }, note: { en: "Men need less than women", bn: "নারীদের চেয়ে পুরুষের কম লাগে" } },
      { label: { en: "Fibre", bn: "আঁশ" }, value: { en: "30–38 g/day", bn: "৩০–৩৮ গ্রাম/দিন" }, note: { en: "Heart, gut and blood sugar", bn: "হৃদয়, হজম ও রক্তে শর্করা" } },
      { label: { en: "Salt", bn: "লবণ" }, value: { en: "Under 5 g/day", bn: "দিনে ৫ গ্রামের কম" }, note: { en: "About 1 teaspoon in total", bn: "সব মিলিয়ে প্রায় ১ চা-চামচ" } },
    ],
    topics: [
      {
        id: "heart",
        icon: "Heart",
        tone: "rose",
        title: { en: "Heart health", bn: "হৃদয়ের স্বাস্থ্য" },
        summary: {
          en: "Heart disease is the leading cause of death among Bangladeshi men. Less salt, less fried food and more fish, vegetables and whole grains make a real difference.",
          bn: "বাংলাদেশি পুরুষদের মৃত্যুর প্রধান কারণ হৃদরোগ। কম লবণ, কম ভাজাপোড়া আর বেশি মাছ, শাকসবজি ও গোটা শস্য সত্যিই পার্থক্য গড়ে।",
        },
        nutrients: { en: ["Omega-3 fats", "Soluble fibre", "Potassium", "Less sodium"], bn: ["ওমেগা-৩ চর্বি", "দ্রবণীয় আঁশ", "পটাশিয়াম", "কম সোডিয়াম"] },
        eat: ["hilsa", "sardine", "oats", "lentil", "spinach", "walnut", "banana"],
        eatWhy: {
          en: ["Oily fish (ilish, sardine) 2 times a week — omega-3 protects the heart", "Oats, dal and beans — soluble fibre lowers bad cholesterol", "Shak, banana and fruits — potassium helps control blood pressure", "A small handful of unsalted nuts instead of fried snacks"],
          bn: ["সপ্তাহে ২ দিন তৈলাক্ত মাছ (ইলিশ, সার্ডিন) — ওমেগা-৩ হৃদয় রক্ষা করে", "ওটস, ডাল ও শিম জাতীয় খাবার — দ্রবণীয় আঁশ খারাপ কোলেস্টেরল কমায়", "শাক, কলা ও ফল — পটাশিয়াম রক্তচাপ নিয়ন্ত্রণে সাহায্য করে", "ভাজা নাশতার বদলে এক মুঠো লবণ ছাড়া বাদাম"],
        },
        limit: {
          en: ["Extra salt, pickles, chips and instant noodles", "Fried foods like singara, puri and reused oil", "Red meat fat, organ meat in excess, and ghee-heavy dishes", "Smoking, jorda and gul"],
          bn: ["পাতে বাড়তি লবণ, আচার, চিপস ও ইনস্ট্যান্ট নুডলস", "সিঙ্গারা, পুরির মতো ভাজা খাবার ও বারবার ব্যবহৃত তেল", "লাল মাংসের চর্বি, অতিরিক্ত কলিজা-মগজ ও ঘি-ভরা রান্না", "ধূমপান, জর্দা ও গুল"],
        },
        tips: {
          en: ["Walk briskly 30 minutes a day, 5 days a week", "Check blood pressure, sugar and cholesterol yearly after 30", "Quit tobacco — the single biggest step for your heart"],
          bn: ["সপ্তাহে ৫ দিন, দিনে ৩০ মিনিট দ্রুত হাঁটুন", "৩০ বছরের পর প্রতি বছর রক্তচাপ, সুগার ও কোলেস্টেরল পরীক্ষা করুন", "তামাক ছাড়ুন — হৃদয়ের জন্য এটাই সবচেয়ে বড় পদক্ষেপ"],
        },
        doctor: {
          en: "Chest pain or pressure, pain spreading to the arm or jaw, sudden breathlessness or sweating — go to a hospital immediately.",
          bn: "বুকে ব্যথা বা চাপ, ব্যথা হাত বা চোয়ালে ছড়ানো, হঠাৎ শ্বাসকষ্ট বা ঘাম হলে — দেরি না করে হাসপাতালে যান।",
        },
      },
      {
        id: "muscle",
        icon: "Dumbbell",
        tone: "orange",
        title: { en: "Muscle & strength", bn: "পেশি ও শক্তি" },
        summary: {
          en: "Muscle is built by regular strength exercise plus enough protein spread through the day — not by expensive powders. After 30, muscle slowly declines unless you use it.",
          bn: "পেশি তৈরি হয় নিয়মিত শক্তির ব্যায়াম আর সারাদিনে ভাগ করে যথেষ্ট প্রোটিন খেলে — দামি পাউডারে নয়। ৩০ বছরের পর ব্যবহার না করলে পেশি ধীরে ধীরে কমতে থাকে।",
        },
        nutrients: { en: ["Protein", "Carbohydrates for energy", "Vitamin D", "Magnesium"], bn: ["প্রোটিন", "শক্তির জন্য শর্করা", "ভিটামিন ডি", "ম্যাগনেসিয়াম"] },
        eat: ["egg", "chicken", "rohu", "lentil", "chickpea", "yogurt", "peanut"],
        eatWhy: {
          en: ["Eggs, fish and chicken — complete protein for muscle repair", "Dal with rice or roti — an affordable protein combo", "Doi or milk after a workout — protein plus fluid", "Some rice, roti or potato — fuel so protein goes to muscle"],
          bn: ["ডিম, মাছ ও মুরগি — পেশি মেরামতের জন্য পূর্ণ প্রোটিন", "ভাত বা রুটির সাথে ডাল — সাশ্রয়ী প্রোটিনের জুটি", "ব্যায়ামের পর দই বা দুধ — প্রোটিন ও পানি একসাথে", "পরিমিত ভাত, রুটি বা আলু — শক্তি জোগায়, ফলে প্রোটিন পেশিতে কাজে লাগে"],
        },
        limit: {
          en: ["Unregulated supplements or 'muscle' injections from gyms", "Very high protein without enough water", "Sugary energy drinks"],
          bn: ["জিমে বিক্রি হওয়া অনুমোদনহীন সাপ্লিমেন্ট বা 'মাসল' ইনজেকশন", "যথেষ্ট পানি ছাড়া অতিরিক্ত প্রোটিন", "চিনিযুক্ত এনার্জি ড্রিংক"],
        },
        tips: {
          en: ["Do strength exercise (push-ups, squats, weights) 2–3 days a week", "Include a protein food in every meal", "Sleep 7–8 hours — muscles recover during sleep"],
          bn: ["সপ্তাহে ২–৩ দিন শক্তির ব্যায়াম করুন (পুশ-আপ, স্কোয়াট, ওজন তোলা)", "প্রতি বেলার খাবারে একটি প্রোটিনের খাবার রাখুন", "৭–৮ ঘণ্টা ঘুমান — ঘুমের সময়ই পেশি সেরে ওঠে"],
        },
        doctor: {
          en: "See a doctor for unexplained muscle loss or weakness, or dark urine and severe muscle pain after heavy exercise.",
          bn: "কারণ ছাড়া পেশি কমে গেলে বা দুর্বল লাগলে, কিংবা ভারী ব্যায়ামের পর প্রস্রাব গাঢ় হলে ও পেশিতে তীব্র ব্যথা হলে ডাক্তার দেখান।",
        },
      },
      {
        id: "vitality",
        icon: "Flame",
        tone: "amber",
        title: { en: "Testosterone & energy", bn: "টেস্টোস্টেরন ও কর্মশক্তি" },
        summary: {
          en: "No single food dramatically 'boosts' testosterone. What really helps is a healthy weight, good sleep, regular exercise and enough zinc and vitamin D.",
          bn: "কোনো একটি খাবার টেস্টোস্টেরন নাটকীয়ভাবে 'বাড়ায়' না। সত্যিকারের সাহায্য করে স্বাস্থ্যকর ওজন, ভালো ঘুম, নিয়মিত ব্যায়াম এবং যথেষ্ট জিংক ও ভিটামিন ডি।",
        },
        nutrients: { en: ["Zinc", "Vitamin D", "Healthy fats", "Magnesium"], bn: ["জিংক", "ভিটামিন ডি", "স্বাস্থ্যকর চর্বি", "ম্যাগনেসিয়াম"] },
        eat: ["egg", "beef", "pumpkinseed", "shrimp", "mola", "spinach"],
        eatWhy: {
          en: ["Eggs, small fish and lean meat — zinc and vitamin D", "Pumpkin seeds and nuts — zinc and magnesium", "Dark green shak — magnesium for energy", "Balanced meals instead of skipping — steady energy all day"],
          bn: ["ডিম, ছোট মাছ ও চর্বি ছাড়া মাংস — জিংক ও ভিটামিন ডি", "মিষ্টিকুমড়ার বীজ ও বাদাম — জিংক ও ম্যাগনেসিয়াম", "গাঢ় সবুজ শাক — শক্তির জন্য ম্যাগনেসিয়াম", "বেলা বাদ না দিয়ে সুষম খাবার — সারাদিন স্থির শক্তি"],
        },
        limit: {
          en: ["Alcohol — it lowers testosterone", "Excess belly fat from sweets and fried food", "'Testosterone booster' pills sold online or by hawkers"],
          bn: ["মদ — এটি টেস্টোস্টেরন কমায়", "মিষ্টি ও ভাজা খাবার থেকে পেটের বাড়তি চর্বি", "অনলাইনে বা ফেরিওয়ালার বিক্রি করা 'টেস্টোস্টেরন বুস্টার' বড়ি"],
        },
        tips: {
          en: ["Sleep 7–8 hours — poor sleep lowers testosterone", "Get 15–20 minutes of morning sunlight for vitamin D", "Lose extra weight — this has the biggest natural effect"],
          bn: ["৭–৮ ঘণ্টা ঘুমান — কম ঘুমে টেস্টোস্টেরন কমে", "ভিটামিন ডি-র জন্য সকালে ১৫–২০ মিনিট রোদে থাকুন", "বাড়তি ওজন কমান — প্রাকৃতিকভাবে এর প্রভাবই সবচেয়ে বেশি"],
        },
        doctor: {
          en: "Ongoing tiredness, low mood, low sex drive or loss of body hair — see a doctor for a blood test before taking any hormone.",
          bn: "দীর্ঘদিন ক্লান্তি, মন খারাপ, যৌন আগ্রহ কমে যাওয়া বা শরীরের লোম কমে গেলে — কোনো হরমোন খাওয়ার আগে ডাক্তার দেখিয়ে রক্ত পরীক্ষা করুন।",
        },
      },
      {
        id: "sexual-health",
        icon: "ShieldCheck",
        tone: "indigo",
        title: { en: "Sexual health", bn: "যৌন স্বাস্থ্য" },
        summary: {
          en: "Erection problems are common and nothing to be ashamed of. They are often an early sign of diabetes, high blood pressure, heart disease or the effects of smoking — so they deserve a proper check-up.",
          bn: "লিঙ্গ উত্থানের সমস্যা খুবই সাধারণ, এতে লজ্জার কিছু নেই। এটি প্রায়ই ডায়াবেটিস, উচ্চ রক্তচাপ, হৃদরোগ বা ধূমপানের প্রভাবের প্রাথমিক লক্ষণ — তাই সঠিকভাবে পরীক্ষা করানো দরকার।",
        },
        nutrients: { en: ["Nitrates from vegetables", "Flavonoids", "Zinc", "Omega-3 fats"], bn: ["সবজির নাইট্রেট", "ফ্ল্যাভোনয়েড", "জিংক", "ওমেগা-৩ চর্বি"] },
        eat: ["spinach", "beetroot", "watermelon", "pomegranate", "walnut", "hilsa"],
        eatWhy: {
          en: ["Shak and beetroot — nitrates help blood vessels relax", "Colourful fruits — flavonoids support healthy blood flow", "Fish and nuts — good fats for the heart and blood vessels", "Heart-healthy food is also good for sexual health"],
          bn: ["শাক ও বিটরুট — নাইট্রেট রক্তনালিকে শিথিল রাখতে সাহায্য করে", "রঙিন ফল — ফ্ল্যাভোনয়েড স্বাভাবিক রক্তপ্রবাহে সহায়ক", "মাছ ও বাদাম — হৃদয় ও রক্তনালির জন্য ভালো চর্বি", "যে খাবার হৃদয়ের জন্য ভালো, তা যৌন স্বাস্থ্যের জন্যও ভালো"],
        },
        limit: {
          en: ["Hawker or roadside 'power' medicines and unlabelled herbal mixtures — they can contain hidden drugs and be dangerous", "Smoking and jorda — they damage blood vessels", "Alcohol and drugs like yaba", "Excess sugar and fried food that raise diabetes risk"],
          bn: ["ফেরিওয়ালা বা রাস্তার 'শক্তিবর্ধক' ওষুধ ও লেবেলহীন হারবাল মিশ্রণ — এতে লুকানো ওষুধ থাকতে পারে, যা বিপজ্জনক", "ধূমপান ও জর্দা — রক্তনালির ক্ষতি করে", "মদ এবং ইয়াবার মতো মাদক", "ডায়াবেটিসের ঝুঁকি বাড়ায় এমন অতিরিক্ত চিনি ও ভাজা খাবার"],
        },
        tips: {
          en: ["Control blood sugar and blood pressure", "Exercise regularly and keep a healthy weight", "Stress and anxiety also play a role — talk openly with your partner or a doctor"],
          bn: ["রক্তে সুগার ও রক্তচাপ নিয়ন্ত্রণে রাখুন", "নিয়মিত ব্যায়াম করুন ও স্বাস্থ্যকর ওজন রাখুন", "মানসিক চাপ ও দুশ্চিন্তাও ভূমিকা রাখে — সঙ্গী বা ডাক্তারের সাথে খোলামেলা কথা বলুন"],
        },
        doctor: {
          en: "If erection problems last more than a few weeks, see a registered doctor (medicine or urology) — never take sex-enhancing pills without a prescription, especially if you have heart disease.",
          bn: "উত্থানের সমস্যা কয়েক সপ্তাহের বেশি থাকলে নিবন্ধিত ডাক্তার (মেডিসিন বা ইউরোলজি) দেখান — প্রেসক্রিপশন ছাড়া কখনো যৌনশক্তি বাড়ানোর বড়ি খাবেন না, বিশেষ করে হৃদরোগ থাকলে।",
        },
      },
      {
        id: "fertility",
        icon: "Baby",
        tone: "sky",
        title: { en: "Male fertility & sperm health", bn: "পুরুষের প্রজনন ক্ষমতা ও শুক্রাণুর স্বাস্থ্য" },
        summary: {
          en: "In about a third to half of couples who struggle to conceive, a male factor is involved. Sperm take around 3 months to develop, so healthy habits now show results in a few months.",
          bn: "সন্তান ধারণে সমস্যা হওয়া দম্পতিদের প্রায় এক-তৃতীয়াংশ থেকে অর্ধেক ক্ষেত্রে পুরুষের দিকের কারণ থাকে। শুক্রাণু তৈরি হতে প্রায় ৩ মাস লাগে, তাই এখনকার ভালো অভ্যাসের ফল কয়েক মাসে দেখা যায়।",
        },
        nutrients: { en: ["Zinc", "Selenium", "Folate", "Antioxidants (vitamin C, E)"], bn: ["জিংক", "সেলেনিয়াম", "ফোলেট", "অ্যান্টিঅক্সিডেন্ট (ভিটামিন সি, ই)"] },
        eat: ["egg", "brazilnut", "walnut", "lentil", "spinach", "guava", "tuna"],
        eatWhy: {
          en: ["Eggs, fish and meat — zinc and selenium for sperm production", "Walnuts and seeds — healthy fats linked to better sperm quality", "Dal and green shak — folate for healthy sperm DNA", "Guava, amloki and citrus — vitamin C protects sperm from damage"],
          bn: ["ডিম, মাছ ও মাংস — শুক্রাণু তৈরিতে জিংক ও সেলেনিয়াম", "আখরোট ও বীজ — স্বাস্থ্যকর চর্বি, ভালো মানের শুক্রাণুর সাথে সম্পর্কিত", "ডাল ও সবুজ শাক — শুক্রাণুর সুস্থ ডিএনএ-র জন্য ফোলেট", "পেয়ারা, আমলকী ও লেবু জাতীয় ফল — ভিটামিন সি শুক্রাণুকে ক্ষতি থেকে বাঁচায়"],
        },
        limit: {
          en: ["Smoking, alcohol and drugs", "Heat — laptops on the lap, very tight underwear, long hot baths", "Processed meat and lots of fried food", "Anabolic steroids and testosterone injections — they can stop sperm production"],
          bn: ["ধূমপান, মদ ও মাদক", "গরম — কোলে ল্যাপটপ, খুব আঁটসাঁট অন্তর্বাস, দীর্ঘ সময় গরম পানিতে গোসল", "প্রক্রিয়াজাত মাংস ও বেশি ভাজা খাবার", "স্টেরয়েড ও টেস্টোস্টেরন ইনজেকশন — এগুলো শুক্রাণু তৈরি বন্ধ করে দিতে পারে"],
        },
        tips: {
          en: ["Keep a healthy weight", "Avoid exposure to pesticides and chemicals without protection", "Manage stress and sleep well"],
          bn: ["স্বাস্থ্যকর ওজন বজায় রাখুন", "সুরক্ষা ছাড়া কীটনাশক ও রাসায়নিকের সংস্পর্শ এড়িয়ে চলুন", "মানসিক চাপ সামলান ও ভালোভাবে ঘুমান"],
        },
        doctor: {
          en: "If a couple has not conceived after 1 year of regular unprotected sex (6 months if the woman is over 35), both partners should be checked — a simple semen test is the first step for men.",
          bn: "নিয়মিত সুরক্ষাহীন মিলনের ১ বছর পরও (নারীর বয়স ৩৫-এর বেশি হলে ৬ মাস) সন্তান না এলে দুজনেরই পরীক্ষা করানো উচিত — পুরুষের জন্য প্রথম ধাপ একটি সহজ বীর্য পরীক্ষা।",
        },
      },
      {
        id: "prostate",
        icon: "Activity",
        tone: "teal",
        title: { en: "Prostate health", bn: "প্রোস্টেটের স্বাস্থ্য" },
        summary: {
          en: "After 50, many men get an enlarged prostate, which causes urine problems. A plant-rich diet with less red and processed meat is linked to better prostate health.",
          bn: "৫০ বছরের পর অনেক পুরুষের প্রোস্টেট বড় হয়ে যায়, যার ফলে প্রস্রাবে সমস্যা হয়। বেশি উদ্ভিজ্জ খাবার এবং কম লাল ও প্রক্রিয়াজাত মাংস প্রোস্টেটের ভালো স্বাস্থ্যের সাথে সম্পর্কিত।",
        },
        nutrients: { en: ["Lycopene", "Fibre", "Healthy fats", "Selenium"], bn: ["লাইকোপিন", "আঁশ", "স্বাস্থ্যকর চর্বি", "সেলেনিয়াম"] },
        eat: ["tomato", "watermelon", "broccoli", "cauliflower", "soybean", "pumpkinseed", "sardine"],
        eatWhy: {
          en: ["Cooked tomato and watermelon — lycopene, an antioxidant linked to prostate health", "Cauliflower, broccoli and cabbage — protective plant compounds", "Fish instead of red meat several days a week", "Soybean, dal and seeds — plant protein and fibre"],
          bn: ["রান্না করা টমেটো ও তরমুজ — লাইকোপিন, প্রোস্টেটের স্বাস্থ্যের সাথে সম্পর্কিত অ্যান্টিঅক্সিডেন্ট", "ফুলকপি, ব্রকলি ও বাঁধাকপি — সুরক্ষামূলক উদ্ভিজ্জ উপাদান", "সপ্তাহে কয়েক দিন লাল মাংসের বদলে মাছ", "সয়াবিন, ডাল ও বীজ — উদ্ভিজ্জ প্রোটিন ও আঁশ"],
        },
        limit: {
          en: ["Red meat and processed meat (sausage, salami)", "Charred or burnt meat", "Lots of tea, coffee or fluids late in the evening if you wake at night to urinate"],
          bn: ["লাল মাংস ও প্রক্রিয়াজাত মাংস (সসেজ, সালামি)", "পোড়া বা কালো হয়ে যাওয়া মাংস", "রাতে প্রস্রাবের জন্য ঘুম ভাঙলে সন্ধ্যার পর বেশি চা, কফি বা পানীয়"],
        },
        tips: {
          en: ["Stay active and keep a healthy weight", "Don't hold urine for long", "After 50, discuss prostate check-ups with your doctor"],
          bn: ["সক্রিয় থাকুন ও স্বাস্থ্যকর ওজন রাখুন", "অনেকক্ষণ প্রস্রাব চেপে রাখবেন না", "৫০ বছরের পর প্রোস্টেট পরীক্ষা নিয়ে ডাক্তারের সাথে কথা বলুন"],
        },
        doctor: {
          en: "See a doctor for a weak stream, frequent urination at night, difficulty starting, pain, or blood in the urine.",
          bn: "প্রস্রাবের ধারা দুর্বল হলে, রাতে বারবার প্রস্রাব হলে, শুরু করতে কষ্ট হলে, ব্যথা বা প্রস্রাবে রক্ত দেখা গেলে ডাক্তার দেখান।",
        },
      },
      {
        id: "belly-fat",
        icon: "Scale",
        tone: "lime",
        title: { en: "Belly fat & diabetes risk", bn: "পেটের চর্বি ও ডায়াবেটিসের ঝুঁকি" },
        summary: {
          en: "South Asian men get diabetes at a lower weight than many others — fat around the belly is the warning sign. A waist over 90 cm (about 35.5 inches) means higher risk.",
          bn: "দক্ষিণ এশীয় পুরুষদের তুলনামূলক কম ওজনেই ডায়াবেটিস হয় — পেটের চারপাশের চর্বিই সতর্কসংকেত। কোমরের মাপ ৯০ সেমি (প্রায় ৩৫.৫ ইঞ্চি)-র বেশি হলে ঝুঁকি বেশি।",
        },
        nutrients: { en: ["Fibre", "Protein", "Whole grains", "Less refined carbs"], bn: ["আঁশ", "প্রোটিন", "গোটা শস্য", "কম পরিশোধিত শর্করা"] },
        eat: ["brownrice", "atta", "lentil", "bittergourd", "cabbage", "egg", "guava"],
        eatWhy: {
          en: ["Fill half the plate with vegetables, a quarter with rice or roti", "Lal chal or atta roti instead of white rice and maida — slower sugar rise", "Dal, fish, egg — protein keeps you full longer", "Whole fruit like guava instead of juice"],
          bn: ["প্লেটের অর্ধেক সবজি, এক-চতুর্থাংশ ভাত বা রুটি রাখুন", "সাদা ভাত ও ময়দার বদলে লাল চাল বা আটার রুটি — রক্তে চিনি ধীরে বাড়ে", "ডাল, মাছ, ডিম — প্রোটিন অনেকক্ষণ পেট ভরা রাখে", "জুসের বদলে পেয়ারার মতো গোটা ফল"],
        },
        limit: {
          en: ["Large plates of white rice, especially at night", "Sugary tea, soft drinks and sweets", "Fried snacks, biryani and fast food", "Late-night heavy meals"],
          bn: ["বিশেষ করে রাতে বড় প্লেটে সাদা ভাত", "চিনি দেওয়া চা, কোমল পানীয় ও মিষ্টি", "ভাজা নাশতা, বিরিয়ানি ও ফাস্ট ফুড", "গভীর রাতে ভারী খাবার"],
        },
        tips: {
          en: ["Walk 10–15 minutes after meals", "Measure your waist every month", "Get a fasting blood sugar test yearly after 30–35"],
          bn: ["খাবারের পর ১০–১৫ মিনিট হাঁটুন", "প্রতি মাসে কোমরের মাপ নিন", "৩০–৩৫ বছরের পর প্রতি বছর খালি পেটে রক্তে সুগার পরীক্ষা করুন"],
        },
        doctor: {
          en: "Excess thirst, frequent urination, slow-healing wounds or unexplained weight loss can mean diabetes — get tested soon.",
          bn: "অতিরিক্ত পিপাসা, ঘনঘন প্রস্রাব, ক্ষত সারতে দেরি বা কারণ ছাড়া ওজন কমে যাওয়া ডায়াবেটিসের লক্ষণ হতে পারে — দ্রুত পরীক্ষা করান।",
        },
      },
    ],
  },

  women: {
    intro: {
      en: "Women's nutrition needs change through periods, pregnancy, breastfeeding and menopause. In Bangladesh many women and girls have anaemia and eat last in the family — good nutrition for women strengthens the whole family.",
      bn: "মাসিক, গর্ভাবস্থা, বুকের দুধ খাওয়ানো ও মেনোপজে নারীর পুষ্টির চাহিদা বদলায়। বাংলাদেশে অনেক নারী ও কিশোরীর রক্তস্বল্পতা আছে এবং পরিবারে তারা সবার শেষে খান — নারীর ভালো পুষ্টি পুরো পরিবারকে শক্তিশালী করে।",
    },
    needs: [
      { label: { en: "Calories", bn: "ক্যালরি" }, value: { en: "1,900–2,100 kcal/day", bn: "১,৯০০–২,১০০ কিলোক্যালরি/দিন" }, note: { en: "Moderately active; more in pregnancy and breastfeeding", bn: "মাঝারি সক্রিয় হলে; গর্ভাবস্থা ও স্তন্যদানে বেশি" } },
      { label: { en: "Iron", bn: "আয়রন" }, value: { en: "18 mg/day", bn: "১৮ মি.গ্রা./দিন" }, note: { en: "27 mg in pregnancy — replaces period blood loss", bn: "গর্ভাবস্থায় ২৭ মি.গ্রা. — মাসিকে হারানো রক্ত পূরণ করে" } },
      { label: { en: "Folate", bn: "ফোলেট" }, value: { en: "400 µg/day", bn: "৪০০ মাইক্রোগ্রাম/দিন" }, note: { en: "600 µg in pregnancy — prevents birth defects", bn: "গর্ভাবস্থায় ৬০০ মাইক্রোগ্রাম — জন্মগত ত্রুটি প্রতিরোধ করে" } },
      { label: { en: "Calcium", bn: "ক্যালসিয়াম" }, value: { en: "1,000 mg/day", bn: "১,০০০ মি.গ্রা./দিন" }, note: { en: "1,200 mg after 50 — for strong bones", bn: "৫০ বছরের পর ১,২০০ মি.গ্রা. — মজবুত হাড়ের জন্য" } },
      { label: { en: "Protein", bn: "প্রোটিন" }, value: { en: "~0.8 g per kg body weight", bn: "শরীরের ওজনের প্রতি কেজিতে ~০.৮ গ্রাম" }, note: { en: "About 45–50 g; more in pregnancy", bn: "প্রায় ৪৫–৫০ গ্রাম; গর্ভাবস্থায় বেশি" } },
      { label: { en: "Zinc", bn: "জিংক" }, value: { en: "8 mg/day", bn: "৮ মি.গ্রা./দিন" }, note: { en: "11–12 mg in pregnancy and breastfeeding", bn: "গর্ভাবস্থা ও স্তন্যদানে ১১–১২ মি.গ্রা." } },
    ],
    topics: [
      {
        id: "periods",
        icon: "Droplet",
        tone: "rose",
        title: { en: "Periods & cramps", bn: "মাসিক ও পেটব্যথা" },
        summary: {
          en: "Periods are a normal, healthy part of life. The right food and fluids can ease cramps, tiredness and bloating — see the period guide below for a phase-by-phase plan.",
          bn: "মাসিক জীবনের একটি স্বাভাবিক ও সুস্থ অংশ। সঠিক খাবার ও পানীয় পেটব্যথা, ক্লান্তি ও পেট ফাঁপা কমাতে পারে — ধাপে ধাপে পরিকল্পনার জন্য নিচের মাসিক গাইড দেখুন।",
        },
        nutrients: { en: ["Iron", "Magnesium", "Omega-3 fats", "Water"], bn: ["আয়রন", "ম্যাগনেসিয়াম", "ওমেগা-৩ চর্বি", "পানি"] },
        eat: ["spinach", "lentil", "banana", "ginger", "hilsa", "dates"],
        eatWhy: {
          en: ["Shak, dal and fish — replace iron lost in period blood", "Banana and nuts — magnesium and potassium may ease cramps", "Ginger tea — studies show it can reduce period pain", "Plenty of water and soups — less bloating and headache"],
          bn: ["শাক, ডাল ও মাছ — মাসিকের রক্তে হারানো আয়রন পূরণ করে", "কলা ও বাদাম — ম্যাগনেসিয়াম ও পটাশিয়াম পেটব্যথা কমাতে পারে", "আদা চা — গবেষণায় দেখা গেছে এটি মাসিকের ব্যথা কমাতে পারে", "প্রচুর পানি ও স্যুপ — পেট ফাঁপা ও মাথাব্যথা কমে"],
        },
        limit: {
          en: ["Very salty foods and chips — more bloating", "Too much tea or coffee", "Sugary and fried snacks"],
          bn: ["খুব লবণাক্ত খাবার ও চিপস — পেট আরও ফাঁপে", "অতিরিক্ত চা বা কফি", "চিনিযুক্ত ও ভাজা নাশতা"],
        },
        tips: {
          en: ["A warm compress on the lower belly helps cramps", "Light walking or stretching can reduce pain", "Change pads every 4–6 hours for hygiene"],
          bn: ["তলপেটে গরম সেঁক পেটব্যথায় আরাম দেয়", "হালকা হাঁটা বা স্ট্রেচিং ব্যথা কমাতে পারে", "পরিচ্ছন্নতার জন্য ৪–৬ ঘণ্টা পরপর প্যাড বদলান"],
        },
        doctor: {
          en: "Pain that stops daily life, soaking a pad every hour, or periods that are very irregular need a doctor's check.",
          bn: "ব্যথায় দৈনন্দিন কাজ বন্ধ হয়ে গেলে, প্রতি ঘণ্টায় প্যাড ভিজে গেলে বা মাসিক খুব অনিয়মিত হলে ডাক্তার দেখানো দরকার।",
        },
      },
      {
        id: "anaemia",
        icon: "Sparkles",
        tone: "red",
        title: { en: "Iron & anaemia", bn: "আয়রন ও রক্তস্বল্পতা" },
        summary: {
          en: "Around 4 in 10 women of reproductive age in Bangladesh have anaemia. It causes tiredness, weakness and breathlessness, and is risky in pregnancy.",
          bn: "বাংলাদেশে প্রজননক্ষম বয়সী প্রায় প্রতি ১০ জনে ৪ জন নারীর রক্তস্বল্পতা আছে। এতে ক্লান্তি, দুর্বলতা ও শ্বাসকষ্ট হয়, আর গর্ভাবস্থায় এটি ঝুঁকিপূর্ণ।",
        },
        nutrients: { en: ["Iron", "Vitamin C", "Folate", "Vitamin B12"], bn: ["আয়রন", "ভিটামিন সি", "ফোলেট", "ভিটামিন বি১২"] },
        eat: ["chickenliver", "beef", "kochushak", "redamaranth", "lentil", "egg", "guava"],
        eatWhy: {
          en: ["Liver, meat and fish — iron the body absorbs easily", "Lal shak, kochu shak and dal — plant iron", "Lemon, guava or amloki with meals — vitamin C boosts iron absorption", "Eggs and fish — B12 for healthy blood"],
          bn: ["কলিজা, মাংস ও মাছ — এই আয়রন শরীর সহজে শোষণ করে", "লাল শাক, কচু শাক ও ডাল — উদ্ভিজ্জ আয়রন", "খাবারের সাথে লেবু, পেয়ারা বা আমলকী — ভিটামিন সি আয়রন শোষণ বাড়ায়", "ডিম ও মাছ — সুস্থ রক্তের জন্য বি১২"],
        },
        limit: {
          en: ["Tea or coffee within an hour of meals — blocks iron absorption", "Taking calcium tablets together with iron tablets", "Skipping meals or eating last and least"],
          bn: ["খাবারের এক ঘণ্টার মধ্যে চা বা কফি — আয়রন শোষণে বাধা দেয়", "আয়রন বড়ির সাথে একসাথে ক্যালসিয়াম বড়ি খাওয়া", "বেলা বাদ দেওয়া বা সবার শেষে কম খাওয়া"],
        },
        tips: {
          en: ["Take deworming tablets as advised", "Cook in an iron kadai — it adds a little iron", "Adolescent girls can take weekly iron-folic acid as per government programmes"],
          bn: ["পরামর্শমতো কৃমিনাশক বড়ি খান", "লোহার কড়াইয়ে রান্না করুন — এতে খাবারে কিছুটা আয়রন যোগ হয়", "সরকারি কর্মসূচি অনুযায়ী কিশোরীরা সাপ্তাহিক আয়রন-ফলিক অ্যাসিড বড়ি খেতে পারে"],
        },
        doctor: {
          en: "Constant tiredness, pale skin or nails, dizziness or a racing heart — get a haemoglobin test; don't start iron tablets without knowing the cause.",
          bn: "সারাক্ষণ ক্লান্তি, ত্বক বা নখ ফ্যাকাশে, মাথা ঘোরা বা বুক ধড়ফড় হলে — হিমোগ্লোবিন পরীক্ষা করান; কারণ না জেনে আয়রন বড়ি শুরু করবেন না।",
        },
      },
      {
        id: "pcos",
        icon: "Flower2",
        tone: "fuchsia",
        title: { en: "PCOS", bn: "পিসিওএস" },
        summary: {
          en: "PCOS (polycystic ovary syndrome) is a common hormone condition causing irregular periods, acne, extra hair and weight gain. Losing even 5–10% of body weight can improve periods and fertility.",
          bn: "পিসিওএস (পলিসিস্টিক ওভারি সিনড্রোম) একটি সাধারণ হরমোনজনিত অবস্থা, যাতে মাসিক অনিয়মিত হয়, ব্রণ, বাড়তি লোম ও ওজন বাড়ে। শরীরের ওজনের মাত্র ৫–১০% কমালেও মাসিক ও সন্তান ধারণের সম্ভাবনা ভালো হতে পারে।",
        },
        nutrients: { en: ["Fibre", "Protein", "Low-GI carbohydrates", "Omega-3 fats"], bn: ["আঁশ", "প্রোটিন", "লো-জিআই শর্করা", "ওমেগা-৩ চর্বি"] },
        eat: ["oats", "brownrice", "lentil", "chickpea", "broccoli", "egg", "flax"],
        eatWhy: {
          en: ["Lal chal, oats and atta — slower sugar release helps insulin resistance", "Dal, chickpeas, egg and fish — protein reduces cravings", "Lots of vegetables — fibre and fullness with few calories", "Flax and fish — healthy fats may reduce inflammation"],
          bn: ["লাল চাল, ওটস ও আটা — ধীরে চিনি ছাড়ে, ইনসুলিন রেজিস্ট্যান্সে সাহায্য করে", "ডাল, ছোলা, ডিম ও মাছ — প্রোটিন খাওয়ার অতিরিক্ত ইচ্ছা কমায়", "প্রচুর সবজি — কম ক্যালরিতে আঁশ ও পেট ভরা অনুভূতি", "তিসি ও মাছ — স্বাস্থ্যকর চর্বি প্রদাহ কমাতে পারে"],
        },
        limit: {
          en: ["Sweets, sugary drinks and juice", "White bread, maida and large portions of white rice", "Fried and fast food"],
          bn: ["মিষ্টি, চিনিযুক্ত পানীয় ও জুস", "সাদা পাউরুটি, ময়দা ও বেশি পরিমাণ সাদা ভাত", "ভাজা খাবার ও ফাস্ট ফুড"],
        },
        tips: {
          en: ["Exercise at least 150 minutes a week", "Eat regular meals — don't skip breakfast", "There is no special 'PCOS cure' diet or supplement — be wary of online claims"],
          bn: ["সপ্তাহে অন্তত ১৫০ মিনিট ব্যায়াম করুন", "নিয়মিত সময়ে খান — সকালের নাশতা বাদ দেবেন না", "পিসিওএস 'সারানোর' বিশেষ কোনো ডায়েট বা সাপ্লিমেন্ট নেই — অনলাইনের দাবিতে সাবধান থাকুন"],
        },
        doctor: {
          en: "Periods more than 35 days apart, excess facial hair, severe acne or trouble conceiving — see a gynaecologist for diagnosis.",
          bn: "মাসিক ৩৫ দিনের বেশি দেরিতে হলে, মুখে বাড়তি লোম, তীব্র ব্রণ বা সন্তান ধারণে সমস্যা হলে — রোগ নির্ণয়ের জন্য স্ত্রীরোগ বিশেষজ্ঞ দেখান।",
        },
      },
      {
        id: "pregnancy",
        icon: "Baby",
        tone: "violet",
        title: { en: "Pregnancy", bn: "গর্ভাবস্থা" },
        summary: {
          en: "A pregnant woman needs more iron, folate, calcium, iodine and protein — and about 300 extra kcal a day from the second trimester. Eating 'for two' means eating better, not eating double.",
          bn: "গর্ভবতী নারীর বেশি আয়রন, ফোলেট, ক্যালসিয়াম, আয়োডিন ও প্রোটিন লাগে — এবং দ্বিতীয় তিন মাস থেকে দিনে প্রায় ৩০০ কিলোক্যালরি বেশি। 'দুজনের জন্য খাওয়া' মানে দ্বিগুণ খাওয়া নয়, বরং ভালো খাওয়া।",
        },
        nutrients: { en: ["Folate", "Iron", "Calcium", "Iodine"], bn: ["ফোলেট", "আয়রন", "ক্যালসিয়াম", "আয়োডিন"] },
        eat: ["lentil", "spinach", "egg", "milk", "mola", "chicken", "banana"],
        eatWhy: {
          en: ["Dal and green shak — folate for the baby's brain and spine", "Meat, fish, egg — iron and protein for baby and mother", "Milk, doi and small fish with bones — calcium for the baby's bones", "Iodised salt (in small amounts) — iodine for the baby's brain"],
          bn: ["ডাল ও সবুজ শাক — শিশুর মস্তিষ্ক ও মেরুদণ্ডের জন্য ফোলেট", "মাংস, মাছ, ডিম — মা ও শিশুর জন্য আয়রন ও প্রোটিন", "দুধ, দই ও কাঁটাসহ ছোট মাছ — শিশুর হাড়ের জন্য ক্যালসিয়াম", "আয়োডিনযুক্ত লবণ (অল্প পরিমাণে) — শিশুর মস্তিষ্কের জন্য আয়োডিন"],
        },
        limit: {
          en: ["Raw or undercooked eggs, meat and fish; unboiled milk", "More than 2 cups of tea or coffee a day (caffeine under 200 mg)", "Unripe or semi-ripe papaya and pineapple in large amounts", "Smoking, jorda, alcohol and any medicine not prescribed"],
          bn: ["কাঁচা বা আধা-সেদ্ধ ডিম, মাংস ও মাছ; না ফোটানো দুধ", "দিনে ২ কাপের বেশি চা বা কফি (ক্যাফেইন ২০০ মি.গ্রা.-র কম)", "কাঁচা বা আধা-পাকা পেঁপে এবং বেশি পরিমাণে আনারস", "ধূমপান, জর্দা, মদ এবং প্রেসক্রিপশন ছাড়া যেকোনো ওষুধ"],
        },
        tips: {
          en: ["Start folic acid ideally before pregnancy and take iron-folic acid and calcium as advised", "Eat one extra small meal a day and rest more", "Have at least 4 antenatal check-ups (8 recommended by WHO)"],
          bn: ["সম্ভব হলে গর্ভধারণের আগেই ফলিক অ্যাসিড শুরু করুন এবং পরামর্শমতো আয়রন-ফলিক অ্যাসিড ও ক্যালসিয়াম খান", "দিনে এক বেলা বাড়তি অল্প খাবার খান ও বেশি বিশ্রাম নিন", "অন্তত ৪ বার গর্ভকালীন চেকআপ করান (বিশ্ব স্বাস্থ্য সংস্থা ৮ বার বলে)"],
        },
        doctor: {
          en: "Go to a hospital at once for bleeding, severe headache or blurred vision, swelling of face and hands, fits, fever, or reduced baby movement.",
          bn: "রক্তপাত, তীব্র মাথাব্যথা বা চোখে ঝাপসা দেখা, মুখ ও হাত ফুলে যাওয়া, খিঁচুনি, জ্বর বা শিশুর নড়াচড়া কমে গেলে সঙ্গে সঙ্গে হাসপাতালে যান।",
        },
      },
      {
        id: "breastfeeding",
        icon: "Smile",
        tone: "sky",
        title: { en: "Breastfeeding", bn: "বুকের দুধ খাওয়ানো" },
        summary: {
          en: "A breastfeeding mother needs about 400–500 extra kcal a day and plenty of fluids. Most mothers make enough milk — frequent feeding is the main thing that increases supply.",
          bn: "বুকের দুধ খাওয়ানো মায়ের দিনে প্রায় ৪০০–৫০০ কিলোক্যালরি বেশি এবং প্রচুর পানীয় লাগে। বেশিরভাগ মায়ের যথেষ্ট দুধ হয় — ঘনঘন খাওয়ানোই দুধ বাড়ানোর মূল উপায়।",
        },
        nutrients: { en: ["Extra calories & protein", "Calcium", "Iodine", "Water"], bn: ["বাড়তি ক্যালরি ও প্রোটিন", "ক্যালসিয়াম", "আয়োডিন", "পানি"] },
        eat: ["rohu", "egg", "milk", "lentil", "lau", "oats", "dates"],
        eatWhy: {
          en: ["Fish, egg, dal and meat — protein for mother's recovery", "Milk, doi and small fish — calcium so the mother's bones are not drained", "Lau, shak and fruits — vitamins and fluid", "A glass of water at every feed"],
          bn: ["মাছ, ডিম, ডাল ও মাংস — মায়ের সেরে ওঠার জন্য প্রোটিন", "দুধ, দই ও ছোট মাছ — ক্যালসিয়াম, যাতে মায়ের হাড় ক্ষয় না হয়", "লাউ, শাক ও ফল — ভিটামিন ও পানি", "প্রতিবার দুধ খাওয়ানোর সময় এক গ্লাস পানি"],
        },
        limit: {
          en: ["Food restrictions after delivery — mothers need a full, varied diet", "Excess tea or coffee", "Alcohol, smoking and jorda"],
          bn: ["প্রসবের পর খাবারে নিষেধাজ্ঞা — মায়ের পূর্ণ ও বৈচিত্র্যময় খাবার দরকার", "অতিরিক্ত চা বা কফি", "মদ, ধূমপান ও জর্দা"],
        },
        tips: {
          en: ["Breastfeed only (no water or other food) for the first 6 months", "Continue iron-folic acid and calcium for 3 months after delivery as advised", "Family support and rest help milk flow"],
          bn: ["প্রথম ৬ মাস শুধু বুকের দুধ খাওয়ান (পানি বা অন্য খাবার নয়)", "পরামর্শমতো প্রসবের পর ৩ মাস আয়রন-ফলিক অ্যাসিড ও ক্যালসিয়াম চালিয়ে যান", "পরিবারের সহযোগিতা ও বিশ্রাম দুধ আসতে সাহায্য করে"],
        },
        doctor: {
          en: "See a doctor for a painful red lump in the breast with fever, cracked bleeding nipples, or if the baby is not gaining weight.",
          bn: "স্তনে ব্যথাযুক্ত লাল চাকা ও জ্বর, স্তনের বোঁটা ফেটে রক্ত পড়া বা শিশুর ওজন না বাড়লে ডাক্তার দেখান।",
        },
      },
      {
        id: "bones-menopause",
        icon: "Bone",
        tone: "amber",
        title: { en: "Bones & menopause", bn: "হাড় ও মেনোপজ" },
        summary: {
          en: "After menopause (usually around 45–55), oestrogen drops and bones lose calcium faster, raising the risk of osteoporosis. Calcium, vitamin D and weight-bearing exercise protect bones.",
          bn: "মেনোপজের পর (সাধারণত ৪৫–৫৫ বছরে) ইস্ট্রোজেন কমে যায় এবং হাড় দ্রুত ক্যালসিয়াম হারায়, ফলে অস্টিওপোরোসিসের ঝুঁকি বাড়ে। ক্যালসিয়াম, ভিটামিন ডি ও ওজন বহনকারী ব্যায়াম হাড় রক্ষা করে।",
        },
        nutrients: { en: ["Calcium", "Vitamin D", "Protein", "Vitamin K"], bn: ["ক্যালসিয়াম", "ভিটামিন ডি", "প্রোটিন", "ভিটামিন কে"] },
        eat: ["milk", "yogurt", "mola", "kachki", "sesame", "tofu", "spinach"],
        eatWhy: {
          en: ["Milk, doi and paneer — easy sources of calcium", "Mola, kachki and small fish eaten with bones — excellent calcium", "Til (sesame), tofu and shak — plant calcium", "Soy foods may ease hot flushes slightly for some women"],
          bn: ["দুধ, দই ও পনির — ক্যালসিয়ামের সহজ উৎস", "কাঁটাসহ মলা, কাচকি ও ছোট মাছ — চমৎকার ক্যালসিয়াম", "তিল, টোফু ও শাক — উদ্ভিজ্জ ক্যালসিয়াম", "সয়া খাবার কিছু নারীর গরম ঝলকানি সামান্য কমাতে পারে"],
        },
        limit: {
          en: ["Too much salt — increases calcium loss", "Soft drinks and lots of caffeine", "Smoking and long periods of sitting"],
          bn: ["অতিরিক্ত লবণ — ক্যালসিয়াম ক্ষয় বাড়ায়", "কোমল পানীয় ও বেশি ক্যাফেইন", "ধূমপান ও দীর্ঘ সময় বসে থাকা"],
        },
        tips: {
          en: ["Get 15–20 minutes of sunlight on arms and face most days", "Walk, climb stairs or do light weights for bone strength", "Light cotton clothes and cool water help with hot flushes"],
          bn: ["প্রায় প্রতিদিন হাত ও মুখে ১৫–২০ মিনিট রোদ লাগান", "হাড় মজবুত রাখতে হাঁটুন, সিঁড়ি ভাঙুন বা হালকা ওজন তুলুন", "হালকা সুতির কাপড় ও ঠান্ডা পানি গরম ঝলকানিতে আরাম দেয়"],
        },
        doctor: {
          en: "Any bleeding after periods have stopped for a year, a fracture from a minor fall, or loss of height needs a doctor's check.",
          bn: "মাসিক এক বছর বন্ধ থাকার পর যেকোনো রক্তপাত, সামান্য পড়ে গিয়ে হাড় ভাঙা বা উচ্চতা কমে গেলে ডাক্তার দেখানো দরকার।",
        },
      },
      {
        id: "skin-hair",
        icon: "Sun",
        tone: "orange",
        title: { en: "Skin & hair", bn: "ত্বক ও চুল" },
        summary: {
          en: "Hair fall and dull skin are often linked to low iron, protein or zinc, stress, thyroid problems or after childbirth. Good food works from the inside — but slowly, over months.",
          bn: "চুল পড়া ও নিষ্প্রাণ ত্বক প্রায়ই আয়রন, প্রোটিন বা জিংকের অভাব, মানসিক চাপ, থাইরয়েডের সমস্যা বা সন্তান জন্মের পরের সাথে সম্পর্কিত। ভালো খাবার ভেতর থেকে কাজ করে — তবে ধীরে, কয়েক মাস ধরে।",
        },
        nutrients: { en: ["Protein", "Iron & zinc", "Vitamin A & C", "Healthy fats"], bn: ["প্রোটিন", "আয়রন ও জিংক", "ভিটামিন এ ও সি", "স্বাস্থ্যকর চর্বি"] },
        eat: ["egg", "carrot", "sweetpotato", "amloki", "guava", "almond", "pumpkinseed"],
        eatWhy: {
          en: ["Eggs, fish and dal — protein, since hair is made of protein", "Carrot, sweet potato, pumpkin, mango — vitamin A for skin", "Amloki, guava and lemon — vitamin C for collagen", "Nuts and seeds — zinc and vitamin E"],
          bn: ["ডিম, মাছ ও ডাল — প্রোটিন, কারণ চুল প্রোটিনে তৈরি", "গাজর, মিষ্টি আলু, মিষ্টিকুমড়া, আম — ত্বকের জন্য ভিটামিন এ", "আমলকী, পেয়ারা ও লেবু — কোলাজেনের জন্য ভিটামিন সি", "বাদাম ও বীজ — জিংক ও ভিটামিন ই"],
        },
        limit: {
          en: ["Sugary and very oily food if you get acne", "Crash diets — they often trigger hair fall", "Skin-whitening creams with mercury or steroids"],
          bn: ["ব্রণ হলে চিনিযুক্ত ও খুব তেলেভাজা খাবার", "হঠাৎ কম খেয়ে ওজন কমানো — প্রায়ই চুল পড়া শুরু করে", "পারদ বা স্টেরয়েডযুক্ত ত্বক ফর্সাকারী ক্রিম"],
        },
        tips: {
          en: ["Drink enough water and sleep well", "Use sunscreen or shade in strong sun", "Hair fall after childbirth is common and usually improves in 6–12 months"],
          bn: ["যথেষ্ট পানি পান করুন ও ভালো ঘুমান", "কড়া রোদে সানস্ক্রিন বা ছায়া ব্যবহার করুন", "সন্তান জন্মের পর চুল পড়া সাধারণ, সাধারণত ৬–১২ মাসে ঠিক হয়ে যায়"],
        },
        doctor: {
          en: "Patchy hair loss, sudden heavy hair fall, or severe acne with irregular periods — see a doctor to check iron, thyroid or hormones.",
          bn: "জায়গায় জায়গায় চুল উঠে যাওয়া, হঠাৎ অনেক চুল পড়া বা অনিয়মিত মাসিকসহ তীব্র ব্রণ হলে — আয়রন, থাইরয়েড বা হরমোন পরীক্ষার জন্য ডাক্তার দেখান।",
        },
      },
      {
        id: "urinary",
        icon: "ShieldCheck",
        tone: "teal",
        title: { en: "Urinary tract health", bn: "মূত্রনালির স্বাস্থ্য" },
        summary: {
          en: "Women get urinary tract infections (UTIs) far more often than men, especially in hot weather when they drink too little water. Enough water and good hygiene are the best prevention.",
          bn: "পুরুষদের চেয়ে নারীদের মূত্রনালির সংক্রমণ (ইউটিআই) অনেক বেশি হয়, বিশেষ করে গরমে কম পানি পান করলে। যথেষ্ট পানি ও ভালো পরিচ্ছন্নতাই সবচেয়ে ভালো প্রতিরোধ।",
        },
        nutrients: { en: ["Water", "Vitamin C", "Probiotics", "Fibre"], bn: ["পানি", "ভিটামিন সি", "প্রোবায়োটিক", "আঁশ"] },
        eat: ["coconutwater", "watermelon", "cucumber", "yogurt", "lemon", "guava"],
        eatWhy: {
          en: ["8–10 glasses of water a day so urine stays pale", "Coconut water, watermelon and cucumber — extra fluid in hot weather", "Doi — good bacteria for intimate health", "Cranberry products are not common in Bangladesh, and evidence that they prevent UTIs is mixed"],
          bn: ["দিনে ৮–১০ গ্লাস পানি, যাতে প্রস্রাবের রং হালকা থাকে", "ডাবের পানি, তরমুজ ও শসা — গরমে বাড়তি পানি", "দই — গোপন অঙ্গের সুস্থতায় উপকারী ব্যাকটেরিয়া", "ক্র্যানবেরি বাংলাদেশে সহজলভ্য নয়, আর এটি ইউটিআই প্রতিরোধ করে কি না — সে প্রমাণ মিশ্র"],
        },
        limit: {
          en: ["Holding urine for long — at work, school or while travelling", "Sugary drinks and too much caffeine", "Scented soaps or douches in the intimate area"],
          bn: ["অনেকক্ষণ প্রস্রাব চেপে রাখা — কর্মস্থল, স্কুল বা যাত্রাপথে", "চিনিযুক্ত পানীয় ও অতিরিক্ত ক্যাফেইন", "গোপন অঙ্গে সুগন্ধি সাবান বা ভেতরে ধোয়ার তরল"],
        },
        tips: {
          en: ["Wipe from front to back after using the toilet", "Pass urine after sex", "Wear clean, dry cotton underwear"],
          bn: ["টয়লেট ব্যবহারের পর সামনে থেকে পেছনের দিকে পরিষ্কার করুন", "মিলনের পর প্রস্রাব করুন", "পরিষ্কার, শুকনো সুতির অন্তর্বাস পরুন"],
        },
        doctor: {
          en: "Burning urine, frequent urge, cloudy or bloody urine needs a doctor — and fever, back pain or symptoms in pregnancy need care the same day. Don't self-treat with leftover antibiotics.",
          bn: "প্রস্রাবে জ্বালাপোড়া, ঘনঘন প্রস্রাবের বেগ, ঘোলা বা রক্তমিশ্রিত প্রস্রাব হলে ডাক্তার দেখান — জ্বর, কোমরে ব্যথা বা গর্ভাবস্থায় এমন হলে সেদিনই চিকিৎসা নিন। আগের বেঁচে যাওয়া অ্যান্টিবায়োটিক নিজে খাবেন না।",
        },
      },
    ],
  },
};

// Special period guide for the women page
export const PERIOD_GUIDE = {
  phases: [
    {
      id: "menstrual",
      days: { en: "Day 1–5", bn: "১–৫ দিন" },
      tone: "rose",
      name: { en: "Period", bn: "মাসিক" },
      body: {
        en: "The uterine lining sheds; iron is lost with blood and energy may feel low.",
        bn: "জরায়ুর ভেতরের আস্তরণ ঝরে পড়ে; রক্তের সাথে আয়রন বেরিয়ে যায় এবং শক্তি কম লাগতে পারে।",
      },
      eat: ["spinach", "lentil", "chickenliver", "ginger", "dates"],
      focus: { en: "Replace iron, stay warm and hydrated", bn: "আয়রন পূরণ, শরীর গরম রাখা ও যথেষ্ট পানি" },
    },
    {
      id: "follicular",
      days: { en: "Day 6–13", bn: "৬–১৩ দিন" },
      tone: "emerald",
      name: { en: "Follicular phase", bn: "ফলিকুলার পর্যায়" },
      body: {
        en: "Oestrogen rises as the body prepares a new egg; energy and mood usually improve.",
        bn: "শরীর নতুন ডিম্বাণু তৈরির প্রস্তুতি নেয়, ইস্ট্রোজেন বাড়ে; সাধারণত শক্তি ও মন ভালো হতে থাকে।",
      },
      eat: ["egg", "broccoli", "oats", "sprouts", "orange"],
      focus: { en: "Fresh protein, vegetables and whole grains", bn: "টাটকা প্রোটিন, সবজি ও গোটা শস্য" },
    },
    {
      id: "ovulation",
      days: { en: "Around day 14", bn: "প্রায় ১৪তম দিন" },
      tone: "amber",
      name: { en: "Ovulation", bn: "ডিম্বস্ফোটন" },
      body: {
        en: "An egg is released; this is the most fertile time and energy is often at its peak.",
        bn: "ডিম্বাণু বের হয়; এটি গর্ভধারণের সবচেয়ে সম্ভাবনাময় সময় এবং প্রায়ই শক্তি সবচেয়ে বেশি থাকে।",
      },
      eat: ["guava", "tomato", "almond", "salmon", "redamaranth"],
      focus: { en: "Antioxidant-rich fruit and veg, healthy fats", bn: "অ্যান্টিঅক্সিডেন্টভরা ফল-সবজি ও স্বাস্থ্যকর চর্বি" },
    },
    {
      id: "luteal",
      days: { en: "Day 15–28", bn: "১৫–২৮ দিন" },
      tone: "violet",
      name: { en: "Luteal phase (PMS)", bn: "লুটিয়াল পর্যায় (পিএমএস)" },
      body: {
        en: "Progesterone rises; some women feel bloating, cravings, breast tenderness or mood swings before the period.",
        bn: "প্রোজেস্টেরন বাড়ে; মাসিকের আগে কারও পেট ফাঁপা, খাবারের ঝোঁক, স্তনে ব্যথা বা মেজাজ ওঠানামা হতে পারে।",
      },
      eat: ["banana", "sweetpotato", "pumpkinseed", "yogurt", "brownrice"],
      focus: { en: "Magnesium, complex carbs, less salt and sugar", bn: "ম্যাগনেসিয়াম, জটিল শর্করা, কম লবণ ও চিনি" },
    },
  ],
  eat: {
    en: [
      "Warm water, ginger tea or soup — soothes cramps and keeps you hydrated",
      "Dark green shak, dal, liver and fish — replace iron lost in blood",
      "Lemon, guava or orange with meals — vitamin C helps absorb iron",
      "Banana — potassium and magnesium may ease cramps and bloating",
      "Ilish, sardine or other oily fish — omega-3 may reduce period pain",
      "Doi and milk — calcium is linked to fewer PMS symptoms",
      "Nuts, seeds and a few dates — steady energy when you feel tired",
      "Cucumber, watermelon and coconut water — fluid that reduces water retention",
    ],
    bn: [
      "কুসুম গরম পানি, আদা চা বা স্যুপ — পেটব্যথায় আরাম দেয় ও পানির ঘাটতি মেটায়",
      "গাঢ় সবুজ শাক, ডাল, কলিজা ও মাছ — রক্তে হারানো আয়রন পূরণ করে",
      "খাবারের সাথে লেবু, পেয়ারা বা কমলা — ভিটামিন সি আয়রন শোষণে সাহায্য করে",
      "কলা — পটাশিয়াম ও ম্যাগনেসিয়াম পেটব্যথা ও পেট ফাঁপা কমাতে পারে",
      "ইলিশ, সার্ডিন বা অন্য তৈলাক্ত মাছ — ওমেগা-৩ মাসিকের ব্যথা কমাতে পারে",
      "দই ও দুধ — ক্যালসিয়াম পিএমএসের উপসর্গ কমানোর সাথে সম্পর্কিত",
      "বাদাম, বীজ ও কয়েকটি খেজুর — ক্লান্ত লাগলে স্থির শক্তি দেয়",
      "শসা, তরমুজ ও ডাবের পানি — শরীরে পানি জমে থাকা কমায়",
    ],
  },
  avoid: {
    en: [
      "Too much salt, chips and instant noodles — cause more bloating",
      "Lots of tea, coffee and cola — caffeine can worsen cramps, anxiety and breast pain",
      "Sweets and sugary drinks — energy spikes and crashes, worse mood swings",
      "Fried and very oily food — may increase discomfort and acne",
      "Alcohol and smoking — can worsen cramps and heavy flow",
      "Skipping meals — makes tiredness, dizziness and headaches worse",
    ],
    bn: [
      "অতিরিক্ত লবণ, চিপস ও ইনস্ট্যান্ট নুডলস — পেট আরও ফাঁপে",
      "বেশি চা, কফি ও কোলা — ক্যাফেইন পেটব্যথা, অস্থিরতা ও স্তনের ব্যথা বাড়াতে পারে",
      "মিষ্টি ও চিনিযুক্ত পানীয় — শক্তি হঠাৎ বাড়ে-কমে, মেজাজ আরও ওঠানামা করে",
      "ভাজাপোড়া ও খুব তেলেভাজা খাবার — অস্বস্তি ও ব্রণ বাড়াতে পারে",
      "মদ ও ধূমপান — পেটব্যথা ও রক্তক্ষরণ বাড়াতে পারে",
      "বেলা বাদ দেওয়া — ক্লান্তি, মাথা ঘোরা ও মাথাব্যথা বাড়ায়",
    ],
  },
  relief: {
    en: [
      "Place a hot water bottle or warm cloth on the lower belly or back",
      "Take a light walk, do gentle stretching or yoga",
      "Take a warm bath — bathing during periods is safe and helps you feel fresh",
      "Get enough sleep and rest when you need it",
      "A simple painkiller like paracetamol can help; ask a pharmacist or doctor if you need something stronger",
    ],
    bn: [
      "তলপেটে বা কোমরে গরম পানির ব্যাগ বা গরম কাপড়ের সেঁক দিন",
      "হালকা হাঁটুন, আলতো স্ট্রেচিং বা যোগব্যায়াম করুন",
      "কুসুম গরম পানিতে গোসল করুন — মাসিকের সময় গোসল নিরাপদ এবং সতেজ রাখে",
      "যথেষ্ট ঘুমান এবং দরকার হলে বিশ্রাম নিন",
      "প্যারাসিটামলের মতো সাধারণ ব্যথানাশক সাহায্য করতে পারে; আরও কড়া ওষুধ লাগলে ফার্মাসিস্ট বা ডাক্তারকে জিজ্ঞেস করুন",
    ],
  },
  myths: [
    {
      myth: { en: "Don't eat sour foods like lemon or tetul during periods.", bn: "মাসিকের সময় লেবু বা তেঁতুলের মতো টক খাবার খাওয়া যাবে না।" },
      fact: {
        en: "Sour foods do not affect bleeding. Lemon, amloki and other vitamin C foods actually help your body absorb iron.",
        bn: "টক খাবার রক্তক্ষরণে কোনো প্রভাব ফেলে না। বরং লেবু, আমলকীর মতো ভিটামিন সি-যুক্ত খাবার শরীরকে আয়রন শোষণে সাহায্য করে।",
      },
    },
    {
      myth: { en: "Drinking cold water stops or blocks the period.", bn: "ঠান্ডা পানি খেলে মাসিক বন্ধ বা আটকে যায়।" },
      fact: {
        en: "Cold water cannot stop a period. Drinking enough water of any temperature is good; warm drinks may simply feel more soothing for cramps.",
        bn: "ঠান্ডা পানি মাসিক বন্ধ করতে পারে না। যেকোনো তাপমাত্রার যথেষ্ট পানি পান করা ভালো; পেটব্যথায় গরম পানীয় শুধু একটু বেশি আরাম দিতে পারে।",
      },
    },
    {
      myth: { en: "Eggs, fish or meat are 'hot' and should be avoided during periods.", bn: "ডিম, মাছ বা মাংস 'গরম' খাবার, তাই মাসিকের সময় খাওয়া উচিত নয়।" },
      fact: {
        en: "This is false. Eggs, fish and meat give protein and iron — exactly what the body needs to replace blood loss.",
        bn: "এটি ভুল ধারণা। ডিম, মাছ ও মাংস প্রোটিন ও আয়রন দেয় — রক্ত হারানোর ঘাটতি পূরণে শরীরের ঠিক এটাই দরকার।",
      },
    },
    {
      myth: { en: "You should not bathe or wash your hair during periods.", bn: "মাসিকের সময় গোসল করা বা চুল ধোয়া উচিত নয়।" },
      fact: {
        en: "Bathing is safe and important for hygiene. A warm bath can even relax muscles and ease cramps.",
        bn: "গোসল সম্পূর্ণ নিরাপদ এবং পরিচ্ছন্নতার জন্য জরুরি। কুসুম গরম পানিতে গোসল পেশি শিথিল করে পেটব্যথাও কমাতে পারে।",
      },
    },
  ],
  doctor: {
    en: "See a doctor if you soak a pad every 1–2 hours or pass large clots, bleed more than 7 days, have pain that painkillers don't help, bleed between periods or after sex, have cycles shorter than 21 or longer than 35 days, miss periods for more than 3 months (and are not pregnant), or feel dizzy and breathless.",
    bn: "প্রতি ১–২ ঘণ্টায় প্যাড ভিজে গেলে বা বড় রক্তের চাকা গেলে, ৭ দিনের বেশি রক্তক্ষরণ হলে, ব্যথানাশকেও ব্যথা না কমলে, দুই মাসিকের মাঝে বা মিলনের পর রক্তপাত হলে, মাসিক চক্র ২১ দিনের কম বা ৩৫ দিনের বেশি হলে, ৩ মাসের বেশি মাসিক বন্ধ থাকলে (গর্ভবতী না হলে), অথবা মাথা ঘোরা ও শ্বাসকষ্ট হলে ডাক্তার দেখান।",
  },
};
