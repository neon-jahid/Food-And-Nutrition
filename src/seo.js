/*
 * Builds the SEO data for a route: `metadata` (Next.js Metadata object) and `jsonLd`.
 * Every page gets: title, description, canonical, hreflang alternates (en, bn, x-default),
 * Open Graph, Twitter card and optional JSON-LD structured data.
 */
import { SITE, SITE_URL } from "./site.js";
import { DEFAULT_LANG, LANGS, withLang } from "./paths.js";

const abs = p => (p.startsWith("http") ? p : SITE_URL + p);

/**
 * @param {object} o
 * @param {"en"|"bn"} o.lang
 * @param {string} o.path        unprefixed path, e.g. "/foods/mango"
 * @param {string} o.title       page title (site name is appended)
 * @param {string} o.description
 * @param {string} [o.image]     absolute or site-relative image URL
 * @param {"website"|"article"} [o.type]
 * @param {object[]} [o.jsonLd]  extra structured-data objects
 * @param {boolean} [o.noindex]
 * @param {string} [o.published] ISO date, for articles
 */
export function seo({ lang, path, title, description, image, type = "website", jsonLd = [], noindex = false, published }) {
  const l = LANGS.includes(lang) ? lang : DEFAULT_LANG;
  const site = SITE.name[l];
  const fullTitle = title ? `${title} | ${site}` : `${site} — ${SITE.tagline[l]}`;
  const desc = (description || SITE.description[l]).slice(0, 300);
  const url = abs(withLang(l, path));
  const img = abs(image || SITE.ogImage);

  const metadata = {
    title: { absolute: fullTitle },
    description: desc,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LANGS.map(x => [x, abs(withLang(x, path))])),
        "x-default": abs(withLang(DEFAULT_LANG, path)),
      },
    },
    openGraph: {
      siteName: site,
      type,
      title: title || site,
      description: desc,
      url,
      // only the default share card has a known size; food and article photos vary
      images: [{ url: img, alt: title || site, ...(image ? {} : { width: 1200, height: 630 }) }],
      locale: l === "bn" ? "bn_BD" : "en_US",
      alternateLocale: l === "bn" ? "en_US" : "bn_BD",
      ...(published ? { publishedTime: published } : {}),
    },
    twitter: { card: "summary_large_image", title: title || site, description: desc, images: [img] },
    // large previews matter on a photo-led site: without this, search can show thumbnails only
    robots: noindex ? "noindex" : "max-image-preview:large",
  };
  return { metadata, jsonLd };
}

/** BreadcrumbList JSON-LD from [[label, unprefixedPath], ...] (Home is added automatically). */
export function breadcrumbLd(lang, trail) {
  const items = [[lang === "bn" ? "হোম" : "Home", "/"], ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: abs(withLang(lang, path)),
    })),
  };
}

export function websiteLd(lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name[lang],
    alternateName: SITE.name[lang === "en" ? "bn" : "en"],
    description: SITE.description[lang],
    url: abs(withLang(lang, "/")),
    inLanguage: lang,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: abs(withLang(lang, "/foods")) + "?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  };
}

/** The site as an organisation — the `publisher` / `author` of its pages. */
export function publisherLd(lang) {
  return {
    "@type": "Organization",
    name: SITE.name[lang],
    url: abs(withLang(lang, "/")),
    logo: { "@type": "ImageObject", url: abs(SITE.logo) },
  };
}

export function organizationLd(lang) {
  return {
    "@context": "https://schema.org",
    ...publisherLd(lang),
    alternateName: SITE.name[lang === "en" ? "bn" : "en"],
    description: SITE.description[lang],
  };
}

/** WebPage JSON-LD; pass type "MedicalWebPage" for health guidance. */
export function webPageLd(lang, path, { type = "WebPage", name, description, image }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: abs(withLang(lang, path)),
    inLanguage: lang,
    primaryImageOfPage: image ? abs(image) : undefined,
    isPartOf: { "@type": "WebSite", name: SITE.name[lang], url: abs(withLang(lang, "/")) },
    publisher: publisherLd(lang),
  };
}

export const absoluteUrl = abs;
