import MythsPage from "../pages/MythsPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/food-myths");

export default function Route() {
  return <MythsPage />;
}
