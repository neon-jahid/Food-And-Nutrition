import ToolsPage from "../pages/ToolsPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/tools");

export default function Route() {
  return <ToolsPage />;
}
