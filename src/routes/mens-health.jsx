import GenderHealthPage from "../pages/GenderHealthPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/mens-health");

export default function Route() {
  return <GenderHealthPage who="men" />;
}
