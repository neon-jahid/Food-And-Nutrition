import LearnPage from "../pages/LearnPage.jsx";

import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/learn");

export default function Route() {
  return <LearnPage />;
}
