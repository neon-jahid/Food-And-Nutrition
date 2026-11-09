import BlogPostPage from "../../../../views/BlogPostPage.jsx";
import { POSTS } from "../../../../data/blog.js";
import credits from "../../../../data/imageCredits.json";
import { withLang } from "../../../../paths.js";
import { absoluteUrl, breadcrumbLd, publisherLd, seo } from "../../../../seo.js";
import { JsonLd } from "../../../../routeKit.jsx";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map(p => ({ slug: p.slug }));

function postSeo(lang, slug) {
  const post = POSTS.find(p => p.slug === slug);
  const path = `/blog/${slug}`;
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
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  return postSeo(lang, slug).metadata;
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  return (
    <>
      <JsonLd data={postSeo(lang, slug).jsonLd} />
      <BlogPostPage />
    </>
  );
}
