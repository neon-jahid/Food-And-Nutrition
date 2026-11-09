import BlogPostPage from "../pages/BlogPostPage.jsx";
import { POSTS } from "../data/blog.js";
import credits from "../data/imageCredits.json";
import { DEFAULT_LANG, LANGS, withLang } from "../paths.js";
import { absoluteUrl, breadcrumbLd, publisherLd, seo } from "../seo.js";

export const meta = ({ params }) => {
  const lang = LANGS.includes(params.lang) ? params.lang : DEFAULT_LANG;
  const post = POSTS.find(p => p.slug === params.slug);
  const path = `/blog/${params.slug}`;
  if (!post) return seo({ lang, path, title: lang === "bn" ? "লেখাটি পাওয়া যায়নি" : "Article not found", noindex: true });
  const image = credits[post.cover]?.hd || credits[post.cover]?.src;
  return seo({
    lang,
    path,
    type: "article",
    title: post.title[lang],
    description: post.excerpt[lang],
    image,
    published: post.date,
    jsonLd: [
      breadcrumbLd(lang, [[lang === "bn" ? "ব্লগ" : "Blog", "/blog"], [post.title[lang], path]]),
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title[lang],
        description: post.excerpt[lang],
        datePublished: post.date,
        inLanguage: lang,
        image: image ? absoluteUrl(image) : undefined,
        mainEntityOfPage: absoluteUrl(withLang(lang, path)),
        author: publisherLd(lang),
        publisher: publisherLd(lang),
      },
    ],
  });
};

export default function Route() {
  return <BlogPostPage />;
}
