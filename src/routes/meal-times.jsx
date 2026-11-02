import MealsPage from "../pages/MealsPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/food-guide/meal-times");

export default function Route() {
  return <MealsPage />;
}
