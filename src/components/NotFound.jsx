"use client";

import { CircleAlert, Compass, House, Search } from "lucide-react";
import { useLang } from "../context/LangContext.jsx";
import { Link } from "../router.jsx";

const T = {
  en: {
    "404": ["Page not found", "The page you're looking for doesn't exist or has moved."],
    error: ["Something went wrong", "An unexpected error occurred while showing this page. Please try again."],
    home: "Go to home", foods: "Browse foods", learn: "Explore guides",
  },
  bn: {
    "404": ["পৃষ্ঠাটি পাওয়া যায়নি", "আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি নেই বা সরিয়ে নেওয়া হয়েছে।"],
    error: ["কিছু একটা সমস্যা হয়েছে", "পৃষ্ঠাটি দেখাতে গিয়ে অপ্রত্যাশিত সমস্যা হয়েছে। আবার চেষ্টা করুন।"],
    home: "হোমে যান", foods: "খাবার দেখুন", learn: "গাইড দেখুন",
  },
};

export default function NotFound({ kind = "404" }) {
  const { lang } = useLang();
  const s = T[lang];
  const [title, body] = s[kind] || s["404"];
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
        <CircleAlert className="h-8 w-8" aria-hidden="true" />
      </span>
      {kind === "404" && <p className="mt-6 text-sm font-bold tracking-widest text-brand-600 dark:text-brand-300">404</p>}
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">{title}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {[["/", House, s.home], ["/foods", Search, s.foods], ["/learn", Compass, s.learn]].map(([to, Icon, label]) => (
          <Link key={to} to={to} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <Icon className="h-4 w-4" aria-hidden="true" /> {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
