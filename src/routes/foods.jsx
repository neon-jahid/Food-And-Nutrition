import FoodsPage from "../pages/FoodsPage.jsx";
import { useOutletContext } from "../router.jsx";
import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/foods");

export default function Route() {
  return <FoodsPage {...useOutletContext()} />;
}
