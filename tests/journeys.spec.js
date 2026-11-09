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

test("Bangla digits find foods in search", async ({ page }) => {
  await page.goto("/bn/foods?q=" + encodeURIComponent("বি১২"));
  await hydrated(page);
  await expect(page.locator("main article").first()).toBeVisible();
});

test("a health word that starts a food name still searches health text", async ({ page }) => {
  await page.goto("/bn/foods?q=" + encodeURIComponent("আঁশ"));
  await hydrated(page);
  await expect.poll(() => page.locator("main article").count()).toBeGreaterThan(5);
});

test("the word 'all' can be typed in the food search", async ({ page }) => {
  await page.goto("/en/foods");
  await hydrated(page);
  const box = page.getByRole("combobox").first();
  await box.pressSequentially("all");
  await expect(box).toHaveValue("all");
  await expect(page).toHaveURL(/q=all/);
});

test("editing the middle of a search keeps the caret in place", async ({ page }) => {
  await page.goto("/en/foods");
  await hydrated(page);
  const box = page.getByRole("combobox").first();
  await box.fill("mngo");
  await box.evaluate(el => el.setSelectionRange(1, 1));
  await box.press("a");
  await expect(box).toHaveValue("mango");
  expect(await box.evaluate(el => el.selectionStart)).toBe(2);
});

test("hostile query strings don't crash the foods page", async ({ page }) => {
  const w = watchErrors(page);
  await page.goto("/en/foods?goals=constructor&sort=__proto__");
  await hydrated(page);
  await expect(page.locator("main article").first()).toBeVisible();
  w.assertClean();
});

test("BMI calculator is for adults and hides unsafe weight-loss targets", async ({ page }) => {
  await page.goto("/en/tools");
  await hydrated(page);
  const age = page.getByLabel("Age", { exact: false }).first();
  await age.fill("12");
  await expect(page.getByText("for adults (18 and over)")).toBeVisible();
  await age.fill("70");
  await page.getByRole("button", { name: "Female" }).click();
  await page.getByLabel("Weight", { exact: false }).first().fill("45");
  await page.getByLabel("Height", { exact: false }).first().fill("150");
  await expect(page.getByText(/to lose/i)).toHaveCount(0);
});

test("compare dialog takes focus and gives it back", async ({ page }) => {
  await page.goto("/en/foods/brownrice");
  await hydrated(page);
  await page.getByRole("button", { name: /add to compare/i }).first().click();
  const opener = page.getByRole("button", { name: "Compare" });
  await opener.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  expect(await page.evaluate(() => !!document.activeElement.closest('[role="dialog"]'))).toBe(true);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(opener).toBeFocused();
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
    ["/food/mango", "/bn/foods/mango"],
    ["/storage", "/bn/food-guide/food-storage"],
    ["/myths?lang=bn", "/bn/food-myths"],
    ["/blog/how-to-build-a-balanced-bangladeshi-plate", "/bn/blog/how-to-build-a-balanced-bangladeshi-plate"],
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

test("first visit lands on Bangla in light mode", async ({ browser }) => {
  // an English, dark-mode device with nothing saved still starts in Bangla, light
  const ctx = await browser.newContext({ colorScheme: "dark", locale: "en-US" });
  const page = await ctx.newPage();
  await page.goto("/");
  await expect(page).toHaveURL(/\/bn$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "bn");
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await ctx.close();
});

test("sitemap and robots are published", async ({ request }) => {
  const sm = await (await request.get("/sitemap.xml")).text();
  expect((sm.match(/<loc>/g) || []).length).toBeGreaterThan(500);
  expect(sm).toContain('hreflang="bn"');
  expect(sm).toContain("/bn/child-nutrition</loc>");
  expect(sm).toMatch(/<loc>[^<]*\/en\/foods\/mango<\/loc>[\s\S]*?<image:loc>[^<]*mango/);
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap:");
});

test("analytics tag ships in the HTML but stays off on localhost", async ({ page, request }) => {
  const html = await (await request.get("/en")).text();
  expect(html).toContain("GTM-NHXRSKMF");
  const gtm = [];
  page.on("request", r => r.url().includes("googletagmanager.com") && gtm.push(r.url()));
  await page.goto("/en");
  await hydrated(page);
  expect(gtm).toEqual([]);
});

test("pages carry structured data for their type", async ({ page }) => {
  const types = async path => {
    await page.goto(path);
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    return blocks.map(b => JSON.parse(b)["@type"]);
  };
  expect(await types("/en")).toEqual(expect.arrayContaining(["WebSite", "Organization"]));
  expect(await types("/bn/child-nutrition")).toEqual(expect.arrayContaining(["BreadcrumbList", "MedicalWebPage"]));
  expect(await types("/en/foods/mango")).toEqual(expect.arrayContaining(["BreadcrumbList", "WebPage"]));
});
