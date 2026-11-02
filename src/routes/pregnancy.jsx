import PregnancyPage from "../pages/PregnancyPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/pregnancy");

export default function Route() {
  return <PregnancyPage />;
}
