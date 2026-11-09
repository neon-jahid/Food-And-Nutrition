/* Server helpers for the route files in src/app. */
import { pageSeo } from "./pageMeta.js";

export function JsonLd({ data = [] }) {
  return data.map((d, i) => (
    // "<" is escaped so that text in the data can never close the script tag
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }} />
  ));
}

/** Metadata + page component for a page with no URL params of its own. */
export function staticRoute(path, element, extra) {
  return {
    generateMetadata: async ({ params }) => pageSeo((await params).lang, path, extra).metadata,
    Page: async function Page({ params }) {
      const { lang } = await params;
      return (
        <>
          <JsonLd data={pageSeo(lang, path, extra).jsonLd} />
          {element}
        </>
      );
    },
  };
}
