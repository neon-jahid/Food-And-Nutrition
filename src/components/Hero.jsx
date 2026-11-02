import { Link, useNavigate } from '../router.jsx';
import { ArrowRight, Leaf, Search, Sparkles } from 'lucide-react';
import { FOODS } from '../data/foods.js';
import { currentMeal } from '../data/meals.js';
import { LEARN_GROUPS } from '../nav.js';
import { useLang } from '../context/LangContext.jsx';
import { tone } from '../tones.js';
import FoodImage from './FoodImage.jsx';
import SiteImage from './SiteImage.jsx';
import { useHydrated } from '../hooks.js';
import SearchBox from './SearchBox.jsx';
import { MEAL_ICONS } from './MealGuide.jsx';
import { foodById } from './PageKit.jsx';

const T = {
    en: {
        badge: 'Explore Food · Learn Nutrition · Live Better',
        line1: "Discover What's Inside",
        line2: 'Your Food',
        lead: 'Explore nutrition facts, compare foods and make smarter eating choices.',
        popular: 'Popular:',
        chips: [
            ['Mango', 'mango'],
            ['Iron', 'iron'],
            ['Diabetes', 'diabetes'],
            ['Hilsa', 'hilsa'],
            ['Hair fall', 'hair fall'],
        ],
        stats: [
            ['foods', 'Foods'],
            ['plants', 'Medicinal plants'],
            ['guides', 'Health guides'],
            ['posts', 'Articles'],
        ],
        per100: 'per 100 g',
        protein: 'Protein',
        fat: 'Fat',
        iron: 'Iron',
        kcal: 'kcal',
        now: 'Right now',
        mealCta: 'See ideas',
        plantsCta: 'Medicinal plants',
        alts: { market: 'Fresh fruits and vegetables in a wooden crate', floating: 'Floating fruit market on Kaptai Lake, Rangamati', salad: 'A colourful fresh salad bowl' },
        floatingCap: 'Floating fruit market, Rangamati',
    },
    bn: {
        badge: 'খাবার জানুন · পুষ্টি বুঝুন · সুস্থ থাকুন',
        line1: 'জানুন আপনার খাবারের',
        line2: 'ভেতরে কী আছে',
        lead: 'পুষ্টিগুণ জানুন, খাবার তুলনা করুন এবং বুঝে-শুনে খাবার বেছে নিন।',
        popular: 'জনপ্রিয়:',
        chips: [
            ['আম', 'আম'],
            ['আয়রন', 'আয়রন'],
            ['ডায়াবেটিস', 'ডায়াবেটিস'],
            ['ইলিশ', 'ইলিশ'],
            ['চুল পড়া', 'চুল পড়া'],
        ],
        stats: [
            ['foods', 'খাবার'],
            ['plants', 'ঔষধি গাছ'],
            ['guides', 'স্বাস্থ্য গাইড'],
            ['posts', 'লেখা'],
        ],
        per100: 'প্রতি ১০০ গ্রাম',
        protein: 'আমিষ',
        fat: 'চর্বি',
        iron: 'আয়রন',
        kcal: 'ক্যালরি',
        now: 'এখন',
        mealCta: 'আইডিয়া দেখুন',
        plantsCta: 'ঔষধি গাছ',
        alts: { market: 'কাঠের ঝুড়িতে তাজা ফল ও সবজি', floating: 'রাঙামাটির কাপ্তাই হ্রদে ভাসমান ফলের বাজার', salad: 'রঙিন তাজা সালাদের বাটি' },
        floatingCap: 'ভাসমান ফলের বাজার, রাঙামাটি',
    },
};

const COUNTS = {
    foods: FOODS.length,
    plants: __PLANT_COUNT__, // injected by vite.config.js (keeps plant/blog data out of the home page)
    guides: LEARN_GROUPS.reduce((n, g) => n + g.items.length, 0),
    posts: __POST_COUNT__,
};

/** Floating glass card with real numbers for the featured food. */
function NutriCard({ food, s }) {
    const { lang, fmt } = useLang();
    const bars = [
        ['protein', s.protein, 'bg-indigo-500', 30],
        ['fat', s.fat, 'bg-rose-500', 30],
        ['iron', s.iron, 'bg-amber-500', 5],
    ];
    return (
        <Link
            to={`/foods/${food.id}`}
            className='absolute bottom-6 -left-6 z-20 w-60 animate-fade-up rounded-3xl [animation-delay:350ms] border border-white/60 bg-white/80 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-700/60 dark:bg-slate-900/80'>
            <div className='flex items-center gap-3'>
                <FoodImage
                    food={food}
                    className='h-11 w-11 rounded-xl'
                />
                <div className='min-w-0'>
                    <p className='truncate font-bold text-slate-900 dark:text-white'>{food[lang]}</p>
                    <p className='text-xs text-slate-500 dark:text-slate-400'>{s.per100}</p>
                </div>
            </div>
            <p className='mt-3 text-3xl font-black text-slate-900 dark:text-white'>
                {fmt(food.n.calories)} <span className='text-sm font-semibold text-slate-500 dark:text-slate-400'>{s.kcal}</span>
            </p>
            <div className='mt-2 space-y-1.5'>
                {bars.map(([k, label, color, max]) => (
                    <div
                        key={k}
                        className='flex items-center gap-2 text-xs'>
                        <span className='w-12 shrink-0 text-slate-500 dark:text-slate-400'>{label}</span>
                        <span className='h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700'>
                            <span
                                className={`block h-full rounded-full ${color}`}
                                style={{ width: `${Math.min(100, (food.n[k] / max) * 100)}%` }}
                            />
                        </span>
                        <span className='w-12 shrink-0 text-right font-semibold text-slate-700 dark:text-slate-200'>
                            {fmt(food.n[k])} {k === 'iron' ? (lang === 'bn' ? 'মি.গ্রা.' : 'mg') : lang === 'bn' ? 'গ্রা.' : 'g'}
                        </span>
                    </div>
                ))}
            </div>
        </Link>
    );
}

export default function Hero({ query, setQuery, onSearch }) {
    const { lang, num } = useLang();
    const navigate = useNavigate();
    const s = T[lang];
    const hydrated = useHydrated();
    const meal = currentMeal();
    const MealIcon = MEAL_ICONS[meal.id];
    const featured = foodById('hilsa');

    return (
        <section className='relative isolate'>
            {/* decorative background — clipped in its own layer so the search dropdown is never cut off */}
            <div
                className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'
                aria-hidden='true'>
                <div className='absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-400/15 blur-3xl dark:bg-brand-500/15' />
                <div className='absolute top-10 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-accent-400/10 blur-3xl dark:bg-accent-500/10' />
                <div
                    className='absolute inset-0 opacity-[0.35] dark:opacity-[0.15]'
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgb(148 163 184 / .25) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / .25) 1px, transparent 1px)',
                        backgroundSize: '44px 44px',
                        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
                        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
                    }}
                />
            </div>

            <div className='mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-14 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16 lg:pb-20'>
                {/* left: message + search */}
                <div className='relative z-10 text-center lg:text-left'>
                    <p className='inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur dark:border-brand-500/30 dark:bg-slate-900/60 dark:text-brand-300'>
                        <Sparkles
                            className='h-3.5 w-3.5'
                            aria-hidden='true'
                        />{' '}
                        {s.badge}
                    </p>
                    <h1 className='mt-5 animate-fade-up text-[2.35rem] leading-[1.08] font-black tracking-tight text-slate-900 [animation-delay:80ms] sm:text-6xl dark:text-white'>
                        {s.line1}
                        <br />
                        <span className='text-gradient'>{s.line2}</span>
                    </h1>
                    <p className='mx-auto mt-5 max-w-xl animate-fade-up text-base text-slate-600 [animation-delay:160ms] sm:text-lg lg:mx-0 dark:text-slate-400'>{s.lead}</p>

                    <div className='relative z-20 mx-auto mt-8 max-w-xl animate-fade-up [animation-delay:240ms] lg:mx-0'>
                        <SearchBox
                            value={query}
                            onChange={setQuery}
                            onSubmit={onSearch}
                        />
                    </div>

                    <div className='mt-4 flex animate-fade-up flex-wrap items-center justify-center gap-2 [animation-delay:320ms] lg:justify-start'>
                        <span className='text-sm text-slate-500 dark:text-slate-400'>{s.popular}</span>
                        {s.chips.map(([label, q]) => (
                            <button
                                key={q}
                                type='button'
                                onClick={() => navigate(`/foods?q=${encodeURIComponent(q)}`)}
                                className='inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-brand-300'>
                                <Search
                                    className='h-3 w-3 opacity-60'
                                    aria-hidden='true'
                                />{' '}
                                {label}
                            </button>
                        ))}
                    </div>

                    <dl className='mx-auto mt-10 grid max-w-xl animate-fade-up grid-cols-4 divide-x [animation-delay:400ms] divide-slate-200 rounded-3xl border border-slate-200/80 bg-white/60 py-4 backdrop-blur lg:mx-0 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/50'>
                        {s.stats.map(([k, label]) => (
                            <div
                                key={k}
                                className='px-2 text-center'>
                                <dt className='sr-only'>{label}</dt>
                                <dd className='text-2xl font-black text-slate-900 sm:text-3xl dark:text-white'>{num(COUNTS[k])}</dd>
                                <dd className='mt-0.5 text-[11px] leading-tight font-medium text-slate-500 sm:text-xs dark:text-slate-400'>{label}</dd>
                            </div>
                        ))}
                    </dl>

                    {/* phones & tablets: compact photo strip (the collage on the right is desktop-only) */}
                    <div className='mx-auto mt-8 grid max-w-xl animate-fade-up grid-cols-3 gap-2.5 [animation-delay:480ms] sm:gap-3 lg:hidden'>
                        {[
                            ['hero-market', 'market'],
                            ['hero-floating', 'floating'],
                            ['hero-salad', 'salad'],
                        ].map(([id, k], i) => (
                            <div
                                key={id}
                                className={`relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-4 ring-white/80 dark:ring-slate-900/80 ${i === 1 ? 'translate-y-3' : ''}`}>
                                <SiteImage
                                    id={id}
                                    alt={s.alts[k]}
                                    sizes='(min-width: 640px) 190px, 33vw'
                                    className='h-full w-full'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* right: photo collage with floating cards (desktop) */}
                <div
                    className='relative mx-auto hidden h-[32rem] w-full max-w-md lg:block'
                    aria-hidden='false'>
                    <div className='absolute top-0 right-0 h-[78%] w-[82%] animate-fade-up overflow-hidden rounded-[2.5rem] shadow-2xl ring-8 ring-white/70 dark:ring-slate-900/70'>
                        <SiteImage
                            id='hero-market'
                            alt={s.alts.market}
                            eager
                            sizes='420px'
                            className='h-full w-full'
                        />
                    </div>
                    <figure className='absolute right-[-1.5rem] bottom-0 h-44 w-52 animate-float will-change-transform overflow-hidden rounded-[2rem] shadow-xl ring-8 ring-white/80 [animation-delay:-2s] dark:ring-slate-900/80'>
                        <SiteImage
                            id='hero-floating'
                            alt={s.alts.floating}
                            sizes='210px'
                            className='h-full w-full'
                        />
                        <figcaption className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-6 pb-2 text-[11px] font-semibold text-white'>
                            {s.floatingCap}
                        </figcaption>
                    </figure>
                    <div className='absolute top-[36%] -left-10 h-28 w-28 animate-float will-change-transform overflow-hidden rounded-full shadow-xl ring-4 ring-white [animation-delay:-4s] dark:ring-slate-900'>
                        <SiteImage
                            id='hero-salad'
                            alt={s.alts.salad}
                            sizes='112px'
                            className='h-full w-full'
                        />
                    </div>

                    <NutriCard
                        food={featured}
                        s={s}
                    />

                    {/* time-aware meal chip (needs the visitor's clock, so client-only) */}
                    {hydrated && (
                        <Link
                            to={`/food-guide/meal-times#${meal.id}`}
                            className='absolute -top-4 left-2 z-20 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 py-2.5 pr-4 pl-2.5 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/60 dark:bg-slate-900/85'>
                            <span className={`grid h-10 w-10 place-items-center rounded-xl ${tone(meal.tone).solid}`}>
                                <MealIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                />
                            </span>
                            <span>
                                <span className='block text-[11px] font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400'>{s.now}</span>
                                <span className='flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white'>
                                    {meal.name[lang]} · {s.mealCta}{' '}
                                    <ArrowRight
                                        className='h-3.5 w-3.5'
                                        aria-hidden='true'
                                    />
                                </span>
                            </span>
                        </Link>
                    )}

                    <Link
                        to='/plants'
                        className='absolute top-[58%] right-[-2.5rem] z-20 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:brightness-105'>
                        <Leaf
                            className='h-4 w-4'
                            aria-hidden='true'
                        />{' '}
                        {num(COUNTS.plants)} {s.plantsCta}
                    </Link>
                </div>
            </div>
        </section>
    );
}
