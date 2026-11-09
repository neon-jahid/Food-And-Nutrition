"use client";

/*
 * /[lang]/foods/[[...slug]]: all foods, a category or a single food.
 *
 * Rendered from foods/layout.jsx, not the page, because a page remounts whenever its URL params
 * change. In the layout, switching category updates the same list: no scroll jump, no flash.
 */
import { useEffect, useRef } from "react";
import FoodsPage from "./FoodsPage.jsx";
import FoodPage from "./FoodPage.jsx";
import NotFound from "../components/NotFound.jsx";
import { resolveFoodSlug } from "../foodRoute.js";
import { consumeKeepScroll, useOutletContext, useParams, usePathname } from "../router.jsx";

export default function FoodsRoute() {
  const ctx = useOutletContext();
  const { slug } = useParams();
  const pathname = usePathname();

  // content lives in this layout, so Next doesn't reset the scroll position itself
  const firstRender = useRef(true);
  useEffect(() => {
    const keep = consumeKeepScroll();
    if (firstRender.current) { firstRender.current = false; return; }
    if (!keep) window.scrollTo(0, 0);
  }, [pathname]);

  if (!slug) return <FoodsPage {...ctx} />;
  const { category, food } = resolveFoodSlug(slug);
  if (category) return <FoodsPage {...ctx} fixedCategory={category.id} />;
  if (food) return <FoodPage {...ctx} />;
  return <NotFound kind="404" />;
}
