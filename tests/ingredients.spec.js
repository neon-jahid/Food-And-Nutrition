/* "What's Inside Your Food?": search, filters, profiles, the Label Decoder and Compare. */
import { expect, test } from "@playwright/test";
import { hydrated, watchErrors } from "./helpers.js";

const open = async (page, path) => {
  await page.goto(path);
  await hydrated(page);
};

test("overview search suggests by E-number and opens the profile", async ({ page }) => {
  const w = watchErrors(page);
  await open(page, "/en/ingredients");
  const box = page.getByRole("combobox", { name: "Search ingredients" });
  await box.fill("E211");
  const option = page.getByRole("option", { name: /Sodium benzoate/i });
  await expect(option).toBeVisible();
  await box.press("ArrowDown");
  await box.press("Enter");
  await expect(page).toHaveURL(/\/en\/ingredients\/sodium-benzoate$/);
  await expect(page.getByRole("heading", { level: 1, name: /Sodium benzoate/i })).toBeVisible();
  w.assertClean();
});

test("every search type finds the ingredient", async ({ page }) => {
  await open(page, "/en/ingredients/explore");
  const box = page.getByRole("searchbox");
  for (const q of ["sodium benzoate", "E 211", "ins 211", "211", "C7H5NaO2", "২১১"]) {
    await box.fill(q);
    await expect(page.locator("main").getByRole("link", { name: /Sodium benzoate/i }).first(), q).toBeVisible();
  }
  await box.fill("zzzz not an additive");
  await expect(page.getByText("Nothing matches these filters")).toBeVisible();
});

test("filters narrow results and survive in the URL", async ({ page }) => {
  await open(page, "/en/ingredients/explore");
  await page.getByLabel("Category").selectOption("preservatives");
  await expect(page).toHaveURL(/cat=preservatives/);
  await expect(page.locator("main").getByRole("link", { name: /Sodium benzoate/i }).first()).toBeVisible();
  await expect(page.locator("main").getByRole("link", { name: /Aspartame/i })).toHaveCount(0);
  await page.reload();
  await hydrated(page);
  await expect(page.getByLabel("Category")).toHaveValue("preservatives");
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.locator("main").getByRole("link", { name: /Aspartame/i }).first()).toBeVisible();
});

test("nonsense filter values in the URL are ignored", async ({ page }) => {
  const w = watchErrors(page);
  await open(page, "/en/ingredients/explore?cat=constructor&origin=__proto__&status=x&app=toString");
  await expect(page.locator("main").getByRole("link", { name: /Sodium benzoate/i }).first()).toBeVisible();
  w.assertClean();
});

test("category page lists only its own ingredients", async ({ page }) => {
  const w = watchErrors(page);
  await open(page, "/bn/ingredients/category/food-colors");
  await expect(page.getByRole("heading", { level: 1, name: "খাদ্য রং" })).toBeVisible();
  await expect(page.locator("main a[href='/bn/ingredients/tartrazine']").first()).toBeVisible();
  await expect(page.locator("main a[href='/bn/ingredients/aspartame']")).toHaveCount(0);
  w.assertClean();
});

test("a profile shows every required section, with dated sources", async ({ page }) => {
  await open(page, "/en/ingredients/aspartame");
  for (const name of ["Basic information", "What is it?", "Why is it used?", "Potential benefits", "Potential health risks", "Safety and regulation", "Where can you find it?", "Scientific references"]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
  }
  await expect(page.locator("#safety a[href^='#ref-']").first()).toBeVisible();
  await expect(page.locator("#references a[target=_blank]").first()).toHaveAttribute("href", /^https:\/\//);
});

test("viewed ingredients appear under recently explored", async ({ page }) => {
  await open(page, "/en/ingredients/citric-acid");
  await open(page, "/en/ingredients");
  const section = page.getByRole("heading", { name: "Recently explored" }).locator("xpath=ancestor::section");
  await expect(section.getByRole("link", { name: /Citric acid/i })).toBeVisible();
});

test("the decoder identifies additives, allergens and unknown items", async ({ page }) => {
  const w = watchErrors(page);
  await open(page, "/en/ingredients/decoder");
  await page.getByLabel("Ingredient list").fill("Ingredients: wheat flour (12%), sugar, preservative (211), emulsifier (soy lecithin), E9999, glazing compound XZ-9. May contain traces of peanuts.");
  await page.getByRole("button", { name: "Decode label" }).click();
  const results = page.getByRole("region", { name: "Ingredient breakdown" });
  await expect(results.getByText("Sodium benzoate", { exact: false }).first()).toBeVisible();
  await expect(results.getByText("Wheat flour").first()).toBeVisible();
  await expect(results.getByText("glazing compound XZ-9")).toBeVisible();
  await expect(results.getByText("Not recognised")).toBeVisible();
  await expect(results.getByText("Additive code").first()).toBeVisible();
  const allergens = results.getByRole("heading", { name: "Allergens" }).locator("xpath=..");
  await expect(allergens).toContainText("Cereals containing gluten");
  await expect(allergens).toContainText("Soy");
  await expect(allergens).toContainText("Peanut");
  await expect(allergens).toContainText("“may contain” statement");
  await expect(page.getByText("cannot tell you how much")).toBeVisible();
  await results.getByRole("link", { name: "View profile" }).first().click();
  await expect(page).toHaveURL(/\/en\/ingredients\/[a-z-]+$/);
  w.assertClean();
});

test("the decoder reads Bangla labels and digits", async ({ page }) => {
  await open(page, "/bn/ingredients/decoder");
  await page.getByLabel("উপাদানের তালিকা").fill("উপাদান: ময়দা, চিনি, প্রিজারভেটিভ (২১১)");
  await page.getByRole("button", { name: "লেবেল বিশ্লেষণ করুন" }).click();
  const results = page.getByRole("region", { name: "উপাদানের বিশ্লেষণ" });
  await expect(results.getByText("সোডিয়াম বেনজোয়েট").first()).toBeVisible();
  await expect(results.getByText("গ্লুটেনযুক্ত শস্য")).toBeVisible();
});

test("compare shows both ingredients and declares no winner", async ({ page }) => {
  const w = watchErrors(page);
  await open(page, "/en/ingredients/compare");
  await expect(page.getByText("Choose at least two ingredients")).toBeVisible();
  await page.getByRole("button", { name: "Aspartame vs Sucralose" }).click();
  await expect(page).toHaveURL(/items=aspartame%2Csucralose|items=aspartame,sucralose/);
  const table = page.getByRole("table");
  await expect(table.getByRole("columnheader", { name: /Aspartame/i })).toBeVisible();
  await expect(table.getByRole("columnheader", { name: /Sucralose/i })).toBeVisible();
  for (const row of ["Purpose", "Origin", "Food applications", "Functional properties", "Safety information", "ADI (where available)", "Regulatory status", "Scientific evidence"]) {
    await expect(table.getByRole("rowheader", { name: row })).toBeVisible();
  }
  await expect(page.getByText("It does not rank ingredients")).toBeVisible();
  await page.getByRole("button", { name: /Remove: Sucralose/ }).click();
  await expect(page.getByText("Add one more to compare.")).toBeVisible();
  w.assertClean();
});

test("compare ignores unknown ids and caps the selection", async ({ page }) => {
  await open(page, "/en/ingredients/compare?items=aspartame,nope,sucralose,saccharin,neotame,tartrazine");
  await expect(page.getByRole("table").getByRole("columnheader")).toHaveCount(4);
  await expect(page.getByText("You can compare up to four")).toBeVisible();
});

test("the evidence-label page explains all six labels", async ({ page }) => {
  await open(page, "/en/ingredients/evidence-labels");
  for (const name of ["Generally Recognized as Safe Under Specified Conditions", "Approved for Specific Uses", "Acceptable Within Established Limits", "Evidence Still Developing", "Known Adverse Effects Under Certain Conditions", "Restricted or Not Authorized in Certain Jurisdictions"]) {
    await expect(page.getByRole("heading", { name })).toBeAttached();
  }
});

test("all ten articles are listed and open", async ({ page }) => {
  const w = watchErrors(page);
  await open(page, "/en/ingredients/learn");
  await expect(page.locator("main li a[href^='/en/ingredients/learn/']")).toHaveCount(10);
  await open(page, "/en/ingredients/learn/what-is-msg");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Key takeaways" })).toBeVisible();
  w.assertClean();
});

test("sitemap lists the section in both languages", async ({ request }) => {
  const sm = await (await request.get("/sitemap.xml")).text();
  for (const path of ["/en/ingredients</loc>", "/bn/ingredients/aspartame</loc>", "/en/ingredients/category/preservatives</loc>", "/bn/ingredients/learn/what-is-msg</loc>"]) expect(sm).toContain(path);
});
