import AntiAgingPage from "../pages/AntiAgingPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/anti-aging");

export default function Route() {
  return <AntiAgingPage />;
}
