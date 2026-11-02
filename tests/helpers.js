import { expect } from "@playwright/test";

/**
 * Collects console errors and uncaught exceptions (incl. React hydration mismatches)
 * for a page. Call `assertClean()` at the end of a test.
 */
export function watchErrors(page) {
  const errors = [];
  page.on("console", msg => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  });
  page.on("pageerror", err => errors.push(`pageerror: ${err.message}`));
  return {
    errors,
    assertClean: () => expect(errors, errors.join("\n")).toEqual([]),
  };
}

/** Wait until React has hydrated (the header theme button becomes interactive). */
export async function hydrated(page) {
  await page.waitForFunction(() => document.querySelector("header button") && !!Object.keys(document.querySelector("header button")).find(k => k.startsWith("__reactProps")));
}
