/* Mobile layout: drawer navigation, bottom tabs, no horizontal overflow. Runs in the "mobile" project. */
import { expect, test } from "@playwright/test";
import { hydrated, watchErrors } from "./helpers.js";

test("mobile drawer and bottom tabs navigate", async ({ page }) => {
  const w = watchErrors(page);
  await page.goto("/bn");
  await hydrated(page);
  await page.getByRole("button", { name: "মেনু খুলুন" }).click();
  await page.getByRole("dialog", { name: "মেনু" }).getByRole("link", { name: /ঔষধি গাছ/ }).click();
  await expect(page).toHaveURL(/\/bn\/plants$/);
  await page.getByRole("navigation", { name: "দ্রুত নেভিগেশন" }).getByRole("link", { name: "ব্লগ" }).click();
  await expect(page).toHaveURL(/\/bn\/blog$/);
  w.assertClean();
});

for (const path of ["/en", "/bn", "/bn/foods", "/en/foods/hilsa", "/bn/womens-health", "/en/anti-aging", "/bn/pregnancy", "/bn/plants/neem", "/en/plants", "/en/references"]) {
  test(`no horizontal overflow on ${path}`, async ({ page }) => {
    await page.goto(path);
    await hydrated(page);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
}
