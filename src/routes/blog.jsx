import BlogPage from "../pages/BlogPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/blog");

export default function Route() {
  return <BlogPage />;
}
