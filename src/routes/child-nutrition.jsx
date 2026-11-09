import ChildNutritionPage from "../pages/ChildNutritionPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/child-nutrition");

export default function Route() {
  return <ChildNutritionPage />;
}
