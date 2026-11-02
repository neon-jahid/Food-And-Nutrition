import StoragePage from "../pages/StoragePage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/food-guide/food-storage");

export default function Route() {
  return <StoragePage />;
}
