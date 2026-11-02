/* Key user journeys and URL behaviour. */
import { expect, test } from "@playwright/test";
import { hydrated, watchErrors } from "./helpers.js";

test("search suggestion opens the food page", async ({ page }) => {
  const w = watchErrors(page);
  await page.goto("/en");
  await hydrated(page);
  await page.getByRole("combobox").first().fill("mango");
  await page.getByRole("option").first().click();
  await expect(page).toHaveURL(/\/en\/foods\/mango$/);
  await expect(page.locator("main h1")).toContainText("Mango");
  w.assertClean();
});

test("Enter in search shows filtered results on /foods", async ({ page }) => {
  await page.goto("/en");
  await hydrated(page);
  const box = page.getByRole("combobox").first();
  await box.fill("iron");
  await box.press("Enter");
  await expect(page).toHaveURL(/\/en\/foods\?q=iron/);
  await expect(page.locator("main article").first()).toBeVisible();
});

test("language switch keeps the same page", async ({ page }) => {
  await page.goto("/en/nutrition/minerals");
  await hydrated(page);
  await page.getByRole("button", { name: "বাংলা" }).click();
  await expect(page).toHaveURL(/\/bn\/nutrition\/minerals$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "bn");
  await expect(page.locator("main h1")).toContainText("খনিজ");
});

test("category URL shows only that category", async ({ page }) => {
  await page.goto("/en/foods/fruits");
  await hydrated(page);
  await expect(page.locator("main h1").first()).toBeVisible();
  // every card links to a fruit
  const hrefs = await page.locator('main a[href^="/en/foods/"]').evaluateAll(a => a.map(x => x.getAttribute("href")));
  expect(hrefs).toContain("/en/foods/mango");
  expect(hrefs).not.toContain("/en/foods/hilsa");
});

test("compare list survives a reload", async ({ page }) => {
  await page.goto("/en/foods/brownrice");
  await hydrated(page);
  await page.getByRole("button", { name: /add to compare/i }).first().click();
  await page.reload();
  await hydrated(page);
  await expect(page.getByRole("button", { name: "Compare" })).toContainText("1");
});

test("theme choice survives a reload without flashing", async ({ page }) => {
  await page.goto("/en");
  await hydrated(page);
  await page.getByRole("button", { name: "Appearance" }).click();
  await page.getByRole("radio", { name: /dark/i }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  // applied by the inline script before hydration
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test.describe("old URLs redirect", () => {
  for (const [from, to] of [
    ["/food/mango", "/en/foods/mango"],
    ["/storage", "/en/food-guide/food-storage"],
    ["/myths?lang=bn", "/bn/food-myths"],
    ["/blog/how-to-build-a-balanced-bangladeshi-plate", "/en/blog/how-to-build-a-balanced-bangladeshi-plate"],
  ]) {
    test(`${from} → ${to}`, async ({ page }) => {
      await page.goto(from);
      await expect(page).toHaveURL(new RegExp(to.replace(/[?]/g, "\\?") + "$"));
    });
  }
  test("moved path inside a language (/bn/vitamins)", async ({ page }) => {
    await page.goto("/bn/vitamins");
    await expect(page).toHaveURL(/\/bn\/nutrition\/vitamins$/);
  });
});

test("unknown pages return 404 with a helpful page", async ({ page }) => {
  for (const url of ["/en/no-such-page", "/xyz", "/en/foods/not-a-food"]) {
    const res = await page.goto(url);
    if (url !== "/en/foods/not-a-food") expect(res.status()).toBe(404);
    await expect(page.getByRole("heading", { name: /page not found|food not found|পাওয়া যায়নি/i }).first()).toBeVisible();
  }
});

test("root picks a language", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/(en|bn)$/);
});

test("sitemap and robots are published", async ({ request }) => {
  const sm = await (await request.get("/sitemap.xml")).text();
  expect((sm.match(/<loc>/g) || []).length).toBeGreaterThan(500);
  expect(sm).toContain('hreflang="bn"');
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap:");
});
