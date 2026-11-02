import { defineConfig, devices } from "@playwright/test";

/*
 * End-to-end tests run against the production build (`npm run build` first).
 * Uses the locally installed Google Chrome, so no browser download is needed.
 */
export default defineConfig({
  testDir: "tests",
  timeout: 30_000,
  fullyParallel: true,
  workers: 4,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:4173",
    channel: "chrome",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], channel: "chrome" }, testIgnore: /responsive.spec.js/ },
    { name: "mobile", use: { ...devices["Pixel 7"], channel: "chrome" }, testMatch: /responsive\.spec\.js/ },
  ],
  webServer: {
    command: "node scripts/serve.mjs",
    url: "http://localhost:4173/en",
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
