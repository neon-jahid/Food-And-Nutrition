import {
    Apple,
    Baby,
    BookOpen,
    Calculator,
    Coffee,
    CircleHelp,
    FlaskConical,
    Gem,
    Hourglass,
    House,
    Leaf,
    Mars,
    Microscope,
    Refrigerator,
    Stethoscope,
    ToyBrick,
    UtensilsCrossed,
    Venus,
} from 'lucide-react';

/** Top-level links shown directly in the header bar. */
export const PRIMARY_NAV = [
    { to: '/', icon: House, en: 'Home', bn: 'হোম' },
    { to: '/foods', icon: Apple, en: 'Foods', bn: 'খাবার' },
    { to: '/tools', icon: Calculator, en: 'Tools', bn: 'টুলস' },
    { to: '/ingredients', icon: Microscope, en: 'FoodScope', bn: 'ফুডস্কোপ' },
    { to: '/coffee', icon: Coffee, en: 'Coffee', bn: 'কফি', special: true },
];

/** Grouped links under "Learn" (mega menu on desktop, drawer on mobile, hub page at /learn). */
export const LEARN_GROUPS = [
    {
        id: 'foryou',
        en: 'Men, women & children',
        bn: 'নারী, পুরুষ ও শিশু',
        items: [
            { to: '/mens-health', icon: Mars, tone: 'sky', en: ["Men's health", 'Heart, strength, vitality and fertility'], bn: ['পুরুষের স্বাস্থ্য', 'হৃদযন্ত্র, শক্তি, সক্ষমতা ও প্রজনন'] },
            { to: '/womens-health', icon: Venus, tone: 'fuchsia', en: ["Women's health", 'Periods, pregnancy, PCOS and menopause'], bn: ['নারীর স্বাস্থ্য', 'মাসিক, গর্ভাবস্থা, পিসিওএস ও মেনোপজ'] },
            {
                to: '/pregnancy',
                icon: Baby,
                tone: 'violet',
                en: ['Pregnancy food', 'What to eat, avoid and why — trimester by trimester'],
                bn: ['গর্ভাবস্থার খাবার', 'কী খাবেন, কী এড়াবেন ও কেন — তিন মাস ভিত্তিক'],
            },
            {
                to: '/child-nutrition',
                icon: ToyBrick,
                tone: 'sky',
                en: ['Child nutrition', 'Feeding babies and young children, age by age'],
                bn: ['শিশুর পুষ্টি', 'ছোট শিশুকে কোন বয়সে কী খাওয়াবেন'],
            },
        ],
    },
    {
        id: 'nutrients',
        en: 'Nutrients',
        bn: 'পুষ্টি উপাদান',
        items: [
            {
                to: '/ingredients',
                icon: Microscope,
                tone: 'emerald',
                en: ["What's inside your food?", 'Additives, E-numbers and label decoding, with sources'],
                bn: ['খাবারের ভেতরে কী আছে?', 'অ্যাডিটিভ, E নম্বর ও লেবেল বিশ্লেষণ, সূত্রসহ'],
            },
            {
                to: '/nutrition/vitamins',
                icon: FlaskConical,
                tone: 'amber',
                en: ['Vitamin guide', 'What each vitamin does and where to get it'],
                bn: ['ভিটামিন গাইড', 'কোন ভিটামিনের কী কাজ, কোথায় পাবেন'],
            },
            { to: '/nutrition/minerals', icon: Gem, tone: 'sky', en: ['Mineral guide', 'Iron, calcium, zinc, iodine and more'], bn: ['খনিজ গাইড', 'আয়রন, ক্যালসিয়াম, জিংক, আয়োডিন ও আরও'] },
            { to: '/nutrition/deficiency', icon: Stethoscope, tone: 'rose', en: ['Deficiency guide', 'Signs, causes and foods that help'], bn: ['অভাবজনিত রোগ', 'লক্ষণ, কারণ ও উপকারী খাবার'] },
        ],
    },
    {
        id: 'wellness',
        en: 'Healthy living',
        bn: 'সুস্থ জীবন',
        items: [
            {
                to: '/coffee',
                icon: Coffee,
                tone: 'amber',
                en: ['Coffee guide', 'Black Coffee: origin, benefits and how to drink it'],
                bn: ['কফি গাইড', 'ব্ল্যাক কফি: উৎপত্তি, উপকারিতা ও খাওয়ার নিয়ম'],
            },
            {
                to: '/anti-aging',
                icon: Hourglass,
                tone: 'rose',
                en: ['Anti-ageing foods', 'Foods that keep skin, brain and body young'],
                bn: ['অ্যান্টি-এজিং খাবার', 'ত্বক, মস্তিষ্ক ও শরীর তারুণ্যদীপ্ত রাখার খাবার'],
            },
            {
                to: '/food-guide/meal-times',
                icon: UtensilsCrossed,
                tone: 'orange',
                en: ['What to eat, when', 'Breakfast, lunch, snack and dinner ideas'],
                bn: ['কখন কী খাবেন', 'সকাল, দুপুর, বিকেল ও রাতের খাবার'],
            },
            { to: '/plants', icon: Leaf, tone: 'emerald', en: ['Medicinal plants', 'Tulsi, neem, thankuni and other herbs'], bn: ['ঔষধি গাছ', 'তুলসী, নিম, থানকুনি ও অন্যান্য ভেষজ'] },
            {
                to: '/food-guide/food-storage',
                icon: Refrigerator,
                tone: 'teal',
                en: ['Food storage guide', 'Keep food fresh and safe for longer'],
                bn: ['খাবার সংরক্ষণ', 'খাবার দীর্ঘদিন তাজা ও নিরাপদ রাখুন'],
            },
            { to: '/food-myths', icon: CircleHelp, tone: 'violet', en: ['Myths vs facts', 'Common food beliefs, checked'], bn: ['ভুল ধারণা বনাম সত্য', 'প্রচলিত খাদ্য-বিশ্বাস যাচাই'] },
            { to: '/food-guide', icon: BookOpen, tone: 'lime', en: ['Healthy eating guide', 'Balanced plate and daily habits'], bn: ['স্বাস্থ্যকর খাবারের গাইড', 'সুষম প্লেট ও দৈনিক অভ্যাস'] },
        ],
    },
];

export const LEARN_PATHS = LEARN_GROUPS.flatMap((g) => g.items.map((i) => i.to)).concat('/learn');
