import GuidePage from "../pages/GuidePage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/food-guide");

export default function Route() {
  return <GuidePage />;
}
