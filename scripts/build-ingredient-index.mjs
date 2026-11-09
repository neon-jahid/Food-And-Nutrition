/*
 * Builds the small files the browser and the URL list need from the full ingredient dataset:
 *   data/generated/manifest.json       URL slugs (used by src/paths.js)
 *   data/generated/search-index.json   names, codes and filters for search and cards
 *   data/generated/details.json        fields used by Compare and the Label Decoder (loaded on demand)
 *   data/generated/image-credits.json  who made each image and under what licence (References page)
 * The files are committed, like vercel.json, so `next dev` works straight away.
 * Run: node scripts/build-ingredient-index.mjs       (check-data fails if they are out of date)
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { CATEGORY_IDS, DATA, loadArticles, loadItems } from "./check-ingredients.mjs";

const OUT = resolve(DATA, "generated");
const hasNumericAdi = x => x.regulatory.some(r => r.adi?.type === "numeric");

/** All image credits, from every file in data/images. */
export function loadImages() {
  const dir = resolve(DATA, "images");
  if (!existsSync(dir)) return {};
  return Object.assign({}, ...readdirSync(dir).filter(f => f.endsWith(".json")).sort().map(f => JSON.parse(readFileSync(resolve(dir, f), "utf8"))));
}
const structures = () => (existsSync(resolve(OUT, "structures.json")) ? JSON.parse(readFileSync(resolve(OUT, "structures.json"), "utf8")) : {});

/** The best honest photo: the ingredient or its source, otherwise a food type it is used in, otherwise its category. */
export const photoFor = (x, images) => images[x.id] ?? x.applications.map(a => images[`app:${a}`]).find(Boolean) ?? images[`cat:${x.category}`];

export function buildIndexes() {
  const images = loadImages();
  const allStructures = structures();
  const items = loadItems().sort((a, b) => a.name.en.localeCompare(b.name.en));
  const articles = loadArticles().sort((a, b) => a.slug.localeCompare(b.slug));
  const manifest = {
    items: items.map(x => x.id),
    categories: [...CATEGORY_IDS],
    articles: articles.map(a => a.slug),
    checkedOn: items.reduce((m, x) => (x.verification.checkedOn > m ? x.verification.checkedOn : m), ""),
  };
  const search = items.map(x => ({
    id: x.id, name: x.name, commonNames: x.commonNames, labelNames: x.labelNames,
    ...(x.eNumber ? { eNumber: x.eNumber } : {}),
    ...(x.ins ? { ins: x.ins } : {}),
    ...(x.formula ? { formula: x.formula } : {}),
    category: x.category,
    ...(x.alsoIn?.length ? { alsoIn: x.alsoIn } : {}),
    origin: x.origin, applications: x.applications, summary: x.summary, statusLabels: x.statusLabels, flags: x.flags,
    verification: x.verification.status, hasAdi: hasNumericAdi(x),
    ...(() => { const p = photoFor(x, images); return p ? { photo: { src: p.src, sm: p.sm, w: p.w, h: p.h, alt: p.alt, subject: p.subject } } : {}; })(),
    ...(allStructures[x.id]?.svg ? { structure: { svg: allStructures[x.id].svg, kind: allStructures[x.id].kind } } : {}),
  }));
  const details = items.map(x => ({
    id: x.id, whyUsed: x.whyUsed, properties: x.properties, regulatory: x.regulatory, riskContext: x.riskContext,
    risks: x.risks.map(({ kind, evidence, strength, text }) => ({ kind, evidence, strength, text })),
    sources: x.references.map(({ id, org, year, url }) => ({ id, org, year, url })),
  }));
  const pretty = v => JSON.stringify(v) + "\n";
  const credits = Object.fromEntries(Object.entries(images).sort(([a], [b]) => a.localeCompare(b)).map(([key, im]) => [key, { src: im.src, sm: im.sm, w: im.w, h: im.h, file: im.file, author: im.author, license: im.license, page: im.page }]));
  return { "manifest.json": pretty(manifest), "search-index.json": pretty(search), "details.json": pretty(details), "image-credits.json": pretty(credits) };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  mkdirSync(OUT, { recursive: true });
  const files = buildIndexes();
  for (const [name, body] of Object.entries(files)) writeFileSync(resolve(OUT, name), body);
  console.log(`ingredient indexes written: ${JSON.parse(files["manifest.json"]).items.length} items`);
}

export const generatedPath = name => resolve(OUT, name);
export const readGenerated = name => readFileSync(generatedPath(name), "utf8").replace(/\r\n/g, "\n");
