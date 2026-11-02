import DeficiencyPage from "../pages/DeficiencyPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/nutrition/deficiency");

export default function Route() {
  return <DeficiencyPage />;
}
