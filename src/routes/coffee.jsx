import CoffeePage from "../pages/CoffeePage.jsx";

import { pageSeo } from "../pageMeta.js";
import siteImages from "../data/siteImages.json";

export const meta = ({ params }) => pageSeo(params.lang, "/coffee", { image: siteImages["coffee-cup"].src });

export default function Route() {
  return <CoffeePage />;
}
