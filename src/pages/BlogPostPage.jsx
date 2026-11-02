import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Lightbulb, Utensils } from "lucide-react";
import { POSTS } from "../data/blog.js";
import { useLang } from "../context/LangContext.jsx";
import FoodImage from "../components/FoodImage.jsx";
import { EmptyState, FoodChips, foodById } from "../components/PageKit.jsx";
import { BLOG_T, PostCard, PostMeta } from "./BlogPage.jsx";

const T = {
  en: { back: "All articles", foods: "Foods mentioned", more: "Keep reading", notFound: "Article not found." },
  bn: { back: "সব লেখা", foods: "লেখায় উল্লেখিত খাবার", more: "আরও পড়ুন", notFound: "লেখাটি পাওয়া যায়নি।" },
};

function Block({ b }) {
  if (b.h) return <h2 className="mt-10 mb-3 text-2xl font-extrabold text-slate-900 dark:text-white">{b.h}</h2>;
  if (b.ul)
    return (
      <ul className="my-4 space-y-2">
        {b.ul.map(x => (
          <li key={x} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{x}</li>
        ))}
      </ul>
    );
  if (b.tip)
    return (
      <aside className="my-6 flex gap-3 rounded-2xl border-l-4 border-brand-500 bg-brand-50/80 p-4 dark:bg-brand-500/10">
        <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-300" aria-hidden="true" />
        <p className="font-medium text-slate-800 dark:text-slate-100">{b.tip}</p>
      </aside>
    );
  return <p className="my-4">{b.p}</p>;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const { lang } = useLang();
  const s = T[lang];
  const post = POSTS.find(p => p.slug === slug);

  if (!post)
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <EmptyState>
          {s.notFound}{" "}
          <Link to="/blog" className="font-semibold text-brand-700 hover:underline dark:text-brand-300">{s.back}</Link>
        </EmptyState>
      </div>
    );

  const cover = foodById(post.cover);
  const more = POSTS.filter(p => p.slug !== post.slug)
    .sort((a, b) => (b.cat === post.cat) - (a.cat === post.cat) || b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <article>
      <header className="mx-auto max-w-3xl px-4 pt-8">
        <Link to="/blog" className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {s.back}
        </Link>
        <PostMeta post={post} className="mt-6" />
        <h1 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{post.title[lang]}</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">{post.excerpt[lang]}</p>
      </header>

      {cover && (
        <div className="mx-auto mt-8 max-w-4xl px-4">
          <FoodImage food={cover} hd eager sizes="(min-width: 896px) 896px, 100vw" className="aspect-[16/8] w-full rounded-3xl shadow-lg" />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 pb-6">
        <div className="text-[1.0625rem] leading-relaxed text-slate-700 dark:text-slate-300">
          {post.body[lang].map((b, i) => <Block key={i} b={b} />)}
        </div>

        {post.foods?.length > 0 && (
          <section className="card mt-10 p-5">
            <h2 className="mb-3 flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <Utensils className="h-4 w-4 text-brand-600" aria-hidden="true" /> {s.foods}
            </h2>
            <FoodChips ids={post.foods} />
          </section>
        )}
      </div>

      <section className="mx-auto max-w-6xl px-4 pt-6 pb-16">
        <h2 className="mb-5 text-2xl font-extrabold text-slate-900 dark:text-white">{s.more}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {more.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
        <p className="mt-8 text-center">
          <Link to="/blog" className="font-semibold text-brand-700 hover:underline dark:text-brand-300">{BLOG_T[lang].all} →</Link>
        </p>
      </section>
    </article>
  );
}
