import PlantsPage from "../pages/PlantsPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/plants");

export default function Route() {
  return <PlantsPage />;
}
