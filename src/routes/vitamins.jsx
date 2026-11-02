import NutrientsPage from "../pages/NutrientsPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/nutrition/vitamins");

export default function Route() {
  return <NutrientsPage kind="vitamins" />;
}
