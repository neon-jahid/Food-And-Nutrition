/* Every public static page renders in both languages, with correct <head> and no console/hydration errors. */
import { expect, test } from "@playwright/test";
import { STATIC_PATHS, withLang } from "../src/paths.js";
import { hydrated, watchErrors } from "./helpers.js";

const PAGES = [
  ...STATIC_PATHS.filter(p => p !== "/"),
  "/",
  "/foods/fruits",
  "/foods/fish-seafood",
  "/foods/hilsa",
  "/foods/mango",
  "/blog/how-to-build-a-balanced-bangladeshi-plate",
];

for (const lang of ["en", "bn"]) {
  for (const path of PAGES) {
    test(`${lang} ${path} renders cleanly`, async ({ page }) => {
      const w = watchErrors(page);
      const res = await page.goto(withLang(lang, path));
      expect(res.status()).toBe(200);
      await hydrated(page);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("main h1").first()).toBeVisible();
      await expect(page).toHaveTitle(lang === "bn" ? /খাবার ও পুষ্টি/ : /Food & Nutrition/);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical.endsWith(withLang(lang, path))).toBe(true);
      await expect(page.locator('link[rel="alternate"][hreflang="bn"]')).toHaveCount(1);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.{40,}/);
      w.assertClean();
    });
  }
}

test("prerendered HTML contains page content without JavaScript", async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto("/en/foods/mango");
  await expect(page.locator("h1")).toContainText("Mango");
  await page.goto("/bn/nutrition/vitamins");
  await expect(page.locator("h1")).toContainText("ভিটামিন");
  await ctx.close();
});
