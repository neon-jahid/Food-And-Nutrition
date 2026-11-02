import ReferencesPage from "../pages/ReferencesPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/references");

export default function Route() {
  return <ReferencesPage />;
}
