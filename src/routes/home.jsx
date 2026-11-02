import HomePage from "../pages/HomePage.jsx";
import { useOutletContext } from "../router.jsx";
import { pageSeo } from "../pageMeta.js";

export const meta = ({ params }) => pageSeo(params.lang, "/");

export default function Route() {
  return <HomePage {...useOutletContext()} />;
}
