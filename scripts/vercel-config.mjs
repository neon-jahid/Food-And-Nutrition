/*
 * Builds the Vercel config (vercel.json) from src/paths.js so redirects never drift from the app.
 * Vercel reads vercel.json BEFORE the build, so the file is committed:
 *   node scripts/vercel-config.mjs          → rewrite vercel.json
 *   (scripts/check-data.mjs fails if the committed file is out of date)
 *
 * The site is fully prerendered (react-router.config.js: ssr:false), so Vercel serves build/client
 * as plain static files — framework detection is switched off on purpose.
 */
import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { DEFAULT_LANG, LANGS, LEGACY_REDIRECTS, MOVED_PATHS, withLang } from "../src/paths.js";

export function vercelConfig() {
  const lang = { type: "query", key: "lang", value: "bn" };
  return {
    $schema: "https://openapi.vercel.sh/vercel.json",
    framework: null,
    installCommand: "npm ci",
    buildCommand: "npm run build",
    outputDirectory: "build/client",
    trailingSlash: false,
    redirects: [
      // ?lang=bn links go to the Bangla version; query-conditioned rules must come first
      ...LEGACY_REDIRECTS.map(([from, to]) => ({ source: from, has: [lang], destination: withLang("bn", to), permanent: true })),
      ...LEGACY_REDIRECTS.map(([from, to]) => ({ source: from, destination: withLang(DEFAULT_LANG, to), permanent: true })),
      ...LANGS.flatMap(l => Object.entries(MOVED_PATHS).map(([a, b]) => ({ source: withLang(l, a), destination: withLang(l, b), permanent: true }))),
    ],
    headers: [
      { source: "/assets/(.*)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/images/(.*)", headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }] },
    ],
  };
}

export const vercelJson = () => JSON.stringify(vercelConfig(), null, 2) + "\n";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeFileSync("vercel.json", vercelJson());
  console.log("vercel.json written");
}
