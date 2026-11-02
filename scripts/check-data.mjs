/*
 * Data-integrity checks for the content files (run: npm run test:data).
 * Fails (exit 1) if any check fails.
 *  - food ids unique, every food has a photo credit and an existing image file
 *  - every food id referenced anywhere in content data exists
 *  - every { en: [...], bn: [...] } pair has the same length
 *  - Bangla strings use Bangla digits (no 0-9), except whitelisted technical tokens
 *  - every public path is unique; legacy redirects point to real paths
 */
import { existsSync, readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = resolve("src/data");
const load = async f => import(pathToFileURL(resolve(root, f)).href);

const errors = [];
const fail = msg => errors.push(msg);

const { FOODS, CATEGORIES } = await load("foods.js");
const credits = (await import(pathToFileURL(resolve(root, "imageCredits.json")).href, { with: { type: "json" } })).default;
const ids = new Set(FOODS.map(f => f.id));

// 1. foods
if (ids.size !== FOODS.length) fail("duplicate food ids");
for (const f of FOODS) {
  if (!CATEGORIES.some(c => c.id === f.cat)) fail(`food ${f.id}: unknown category ${f.cat}`);
  const c = credits[f.id];
  if (!c) fail(`food ${f.id}: no image credit`);
  else if (!existsSync(resolve("public" + c.src))) fail(`food ${f.id}: image file missing ${c.src}`);
  for (const [k, v] of Object.entries(f.n)) if (typeof v !== "number" || v < 0 || Number.isNaN(v)) fail(`food ${f.id}: bad ${k}=${v}`);
}

// 1b. lightweight image paths (FoodImage) must agree with the credits file
const { imageSrc, imageHd } = await load("imagePaths.js");
for (const f of FOODS) {
  const c = credits[f.id];
  if (!c) continue;
  if (imageSrc(f.id) !== c.src) fail(`food ${f.id}: imagePaths src ${imageSrc(f.id)} ≠ credits ${c.src}`);
  if ((imageHd(f.id) || undefined) !== c.hd) fail(`food ${f.id}: imagePaths hd ${imageHd(f.id)} ≠ credits ${c.hd} (update NO_HD in imagePaths.js)`);
  if (c.hd && !existsSync(resolve("public" + c.hd))) fail(`food ${f.id}: HD image file missing ${c.hd}`);
}
const siteImages = (await import(pathToFileURL(resolve(root, "siteImages.json")).href, { with: { type: "json" } })).default;
for (const [id, im] of Object.entries(siteImages)) {
  for (const k of ["src", "sm"]) if (!existsSync(resolve("public" + im[k]))) fail(`site image ${id}: file missing ${im[k]}`);
  if (!im.author || !im.license || !im.page) fail(`site image ${id}: incomplete credit`);
}

// 1c. every medicinal plant has a photo (its food photo via foodId, or its own plant photo)
const { PLANTS } = await load("plants.js");
const plantImages = (await import(pathToFileURL(resolve(root, "plantImages.json")).href, { with: { type: "json" } })).default;
for (const p of PLANTS) {
  if (p.foodId) continue;
  const im = plantImages[p.id];
  if (!im) fail(`plant ${p.id}: no photo (add it to plantImages.json or set foodId)`);
  else if (!existsSync(resolve("public" + im.src))) fail(`plant ${p.id}: image file missing ${im.src}`);
  else if (!im.author || !im.license || !im.page) fail(`plant ${p.id}: incomplete photo credit`);
}

// 2. walk every content module
const FOOD_REF_KEYS = new Set(["foodId", "cover"]);
const FOOD_LIST_KEYS = new Set(["foods", "sources", "eat"]);
const BN_DIGIT_OK = /\b(B\d+|B12|B6|B9|B1|B2|B3|CC BY[\w .-]*|SA \d|\d{4}-\d{2}-\d{2})\b/g;

function walk(node, where) {
  if (Array.isArray(node)) return node.forEach((x, i) => walk(x, `${where}[${i}]`));
  if (!node || typeof node !== "object") return;
  if ("en" in node && "bn" in node) {
    if (Array.isArray(node.en) !== Array.isArray(node.bn)) fail(`${where}: en/bn type mismatch`);
    else if (Array.isArray(node.en) && node.en.length !== node.bn.length) fail(`${where}: en has ${node.en.length} items, bn has ${node.bn.length}`);
    const bnStrings = [node.bn].flat(Infinity).flatMap(x => (typeof x === "string" ? [x] : x && typeof x === "object" ? Object.values(x).flat() : []));
    for (const s of bnStrings) if (typeof s === "string" && /[0-9]/.test(s.replace(BN_DIGIT_OK, ""))) fail(`${where}.bn: ASCII digit in "${s.slice(0, 60)}"`);
  }
  for (const [k, v] of Object.entries(node)) {
    if (FOOD_REF_KEYS.has(k) && typeof v === "string" && !ids.has(v)) fail(`${where}.${k}: unknown food "${v}"`);
    if (FOOD_LIST_KEYS.has(k) && Array.isArray(v)) v.forEach(x => typeof x === "string" && !ids.has(x) && fail(`${where}.${k}: unknown food "${x}"`));
    walk(v, `${where}.${k}`);
  }
}

const SKIP = new Set(["foods.js", "imageCredits.json", "siteImages.json", "plantImages.json", "index.js"]);
const files = [
  ...readdirSync(root).filter(f => f.endsWith(".js")),
  ...["details", "points"].flatMap(d => readdirSync(resolve(root, d)).filter(f => f.endsWith(".js")).map(f => `${d}/${f}`)),
].filter(f => !SKIP.has(f.split("/").pop()));
for (const f of files) {
  const mod = await load(f);
  for (const [name, value] of Object.entries(mod)) if (typeof value !== "function") walk(value, `${f}:${name}`);
}

// 3. paths
const { allPublicPaths, LEGACY_REDIRECTS, STATIC_PATHS } = await import(pathToFileURL(resolve("src/paths.js")).href);
const paths = allPublicPaths();
if (new Set(paths).size !== paths.length) fail("duplicate public paths");
const known = new Set(paths);
for (const [, to] of LEGACY_REDIRECTS) {
  const sample = to.replace(":id", FOODS[0].id).replace(":slug", "x");
  if (!to.includes(":") && !known.has(sample)) fail(`legacy redirect target ${to} is not a public path`);
}

// 4. committed vercel.json must match the redirects generated from src/paths.js
const { vercelJson } = await import(pathToFileURL(resolve("scripts/vercel-config.mjs")).href);
const { readFileSync } = await import("node:fs");
if (!existsSync("vercel.json") || readFileSync("vercel.json", "utf8").replace(/\r\n/g, "\n") !== vercelJson()) {
  fail("vercel.json is out of date — run: node scripts/vercel-config.mjs");
}

if (errors.length) {
  console.error(`✗ ${errors.length} data problem(s):\n  - ` + errors.slice(0, 50).join("\n  - "));
  process.exit(1);
}
console.log(`✓ data OK — ${FOODS.length} foods, ${paths.length} paths × 2 languages, ${STATIC_PATHS.length} static pages`);
