/*
 * Rules for the ingredient dataset (src/features/ingredients/data).
 *   node scripts/check-ingredients.mjs              check everything
 *   node scripts/check-ingredients.mjs file.json    check one item file (ignores missing categories)
 * Also run by scripts/check-data.mjs. The goal is that content cannot quietly break the accuracy
 * rules: every regulatory claim has a jurisdiction, a date and a source; every risk says what
 * kind of evidence it rests on; no brands; no scare words.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename, resolve } from "node:path";
import { pathToFileURL } from "node:url";

export const DATA = resolve("src/features/ingredients/data");

// read from types.ts so the two can never disagree
const typesSrc = readFileSync(resolve("src/features/ingredients/types.ts"), "utf8");
const listOf = name => {
  const m = typesSrc.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const`));
  return new Set([...m[1].matchAll(/"([^"]+)"/g)].map(x => x[1]));
};
export const CATEGORY_IDS = listOf("CATEGORY_IDS");
const ORIGINS = listOf("ORIGINS");
const APPS = listOf("APPLICATION_IDS");
const STATUS = listOf("STATUS_IDS");
const BENEFITS = listOf("BENEFIT_KINDS");
const RISK_KINDS = listOf("RISK_KINDS");
const EVIDENCE = listOf("EVIDENCE_TYPES");
const STRENGTH = listOf("EVIDENCE_STRENGTHS");
const FLAGS = listOf("FLAG_IDS");

// bodies whose documents count as reliable sources; add a domain here only for an equivalent body
const TRUSTED = /(^|\.)(who\.int|fao\.org|efsa\.europa\.eu|europa\.eu|fda\.gov|ecfr\.gov|govinfo\.gov|nih\.gov|fsis\.usda\.gov|usda\.gov|codexalimentarius\.org|foodstandards\.gov\.au|canada\.ca|food\.gov\.uk|fssai\.gov\.in|bfsa\.gov\.bd|inchem\.org|iarc\.fr|wiley\.com|doi\.org|sciencedirect\.com|springer\.com|nature\.com|thelancet\.com|bmj\.com|jamanetwork\.com|academic\.oup\.com|oup\.com|mdpi\.com|tandfonline\.com|acs\.org|cdc\.gov)$/i;
const BRANDS = /\b(coca[- ]?cola|pepsi|sprite|fanta|7[- ]?up|maggi|knorr|lay'?s|pringles|doritos|nestl[eé]|cadbury|oreo|kitkat|nutella|heinz|kellogg|red bull|pran|mr\.? noodles|bombay sweets|splenda|nutrasweet)\b/i;
const SCARE = /\b(poison(ous)?|toxic chemical|deadly|dangerous|cancer[- ]causing|harmful chemical|avoid at all costs)\b/i;
const BN_DIGIT_OK = /\b(B\d+|E\d+[a-z]?|INS|CC BY[\w .-]*|\d{4}-\d{2}-\d{2})\b/g;

const isDate = s => typeof s === "string" && /^\d{4}(-\d{2})?$/.test(s);
const isDay = s => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s);

function localized(v, where, fail, { min = 1 } = {}) {
  if (!v || typeof v !== "object" || typeof v.en !== "string" || typeof v.bn !== "string") return fail(`${where}: needs { en, bn }`);
  if (v.en.trim().length < min) fail(`${where}.en is too short`);
  if (v.bn.trim().length < Math.min(min, 2)) fail(`${where}.bn is empty`);
  if (!/[ঀ-৿]/.test(v.bn)) fail(`${where}.bn has no Bangla text`);
  if (/[0-9]/.test(v.bn.replace(BN_DIGIT_OK, ""))) fail(`${where}.bn: use Bangla digits ("${v.bn.slice(0, 50)}")`);
  if (/[০-৯]/.test(v.en)) fail(`${where}.en contains Bangla digits`);
  for (const t of [v.en, v.bn]) if (BRANDS.test(t)) fail(`${where}: names a brand ("${t.match(BRANDS)[0]}")`);
  if (SCARE.test(v.en)) fail(`${where}.en: scare wording ("${v.en.match(SCARE)[0]}"); describe dose and evidence instead`);
}

function references(refs, where, fail) {
  if (!Array.isArray(refs) || refs.length === 0) return fail(`${where}: needs references`);
  const ids = new Set();
  for (const r of refs) {
    if (ids.has(r.id)) fail(`${where}: duplicate reference ${r.id}`);
    ids.add(r.id);
    for (const k of ["id", "org", "title", "url", "kind"]) if (!r[k]) fail(`${where} ref ${r.id}: missing ${k}`);
    if (!Number.isInteger(r.year) || r.year < 1950 || r.year > 2027) fail(`${where} ref ${r.id}: bad year ${r.year}`);
    if (!["regulatory", "peer-reviewed", "agency-guidance"].includes(r.kind)) fail(`${where} ref ${r.id}: bad kind`);
    let host = "";
    try { const u = new URL(r.url); host = u.hostname; if (u.protocol !== "https:") fail(`${where} ref ${r.id}: not https`); } catch { fail(`${where} ref ${r.id}: bad url`); }
    if (host && !TRUSTED.test(host)) fail(`${where} ref ${r.id}: ${host} is not a listed source`);
  }
  return ids;
}

function checkItem(x, where, fail) {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(x.id || "")) fail(`${where}: bad id "${x.id}"`);
  for (const k of ["name", "summary", "whatIs", "whyUsed", "howItWorks", "riskContext"]) localized(x[k], `${where}.${k}`, fail, { min: k === "name" ? 2 : 20 });
  if (x.summary?.en?.length > 200) fail(`${where}.summary is ${x.summary.en.length} chars`);
  if (!Array.isArray(x.commonNames)) fail(`${where}: commonNames must be a list`);
  if (!Array.isArray(x.labelNames) || !x.labelNames.length) fail(`${where}: needs labelNames`);
  else for (const n of x.labelNames) if (n !== n.toLowerCase()) fail(`${where}: labelName not lower-case "${n}"`);
  if (x.eNumber && !/^E\d{3,4}[a-z]?(\([ivx]+\))?$/.test(x.eNumber)) fail(`${where}: bad eNumber ${x.eNumber}`);
  if (x.ins && !/^\d{3,4}[a-z]?(\([ivx]+\))?$/.test(x.ins)) fail(`${where}: bad ins ${x.ins}`);
  if (!CATEGORY_IDS.has(x.category)) fail(`${where}: bad category ${x.category}`);
  for (const c of x.alsoIn || []) if (!CATEGORY_IDS.has(c)) fail(`${where}: bad alsoIn ${c}`);
  if (!ORIGINS.has(x.origin)) fail(`${where}: bad origin ${x.origin}`);
  if (x.originNote) localized(x.originNote, `${where}.originNote`, fail);
  if (!x.applications?.length) fail(`${where}: needs applications`);
  for (const a of x.applications || []) if (!APPS.has(a)) fail(`${where}: bad application ${a}`);
  if (!x.properties?.length) fail(`${where}: needs properties`);
  (x.properties || []).forEach((p, i) => localized(p, `${where}.properties[${i}]`, fail));

  const refIds = references(x.references, where, fail) || new Set();

  if (!Array.isArray(x.benefits)) fail(`${where}: benefits must be a list`);
  (x.benefits || []).forEach((b, i) => {
    if (!BENEFITS.has(b.kind)) fail(`${where}.benefits[${i}]: bad kind ${b.kind}`);
    localized(b.text, `${where}.benefits[${i}].text`, fail);
  });

  if (!Array.isArray(x.risks)) fail(`${where}: risks must be a list`);
  (x.risks || []).forEach((r, i) => {
    const w = `${where}.risks[${i}]`;
    if (!RISK_KINDS.has(r.kind)) fail(`${w}: bad kind ${r.kind}`);
    if (!EVIDENCE.has(r.evidence)) fail(`${w}: bad evidence ${r.evidence}`);
    if (!STRENGTH.has(r.strength)) fail(`${w}: bad strength ${r.strength}`);
    localized(r.text, `${w}.text`, fail, { min: 20 });
    if (!r.sourceIds?.length) fail(`${w}: needs sourceIds`);
    for (const s of r.sourceIds || []) if (!refIds.has(s)) fail(`${w}: unknown source ${s}`);
  });

  if (!x.statusLabels?.length) fail(`${where}: needs statusLabels`);
  for (const s of x.statusLabels || []) if (!STATUS.has(s)) fail(`${where}: bad status ${s}`);

  if (!x.regulatory?.length) fail(`${where}: needs at least one regulatory entry`);
  (x.regulatory || []).forEach((r, i) => {
    const w = `${where}.regulatory[${i}]`;
    if (!r.authority) fail(`${w}: missing authority`);
    localized(r.jurisdiction, `${w}.jurisdiction`, fail);
    localized(r.status, `${w}.status`, fail);
    if (r.limits) localized(r.limits, `${w}.limits`, fail);
    if (r.conditions) localized(r.conditions, `${w}.conditions`, fail);
    if (!isDate(r.date)) fail(`${w}: date must be YYYY or YYYY-MM, got ${r.date}`);
    if (!refIds.has(r.sourceId)) fail(`${w}: unknown source ${r.sourceId}`);
    if (r.adi) {
      if (!["numeric", "not-specified", "none-established", "withdrawn"].includes(r.adi.type)) fail(`${w}: bad adi type`);
      if (r.adi.type === "numeric") {
        if (typeof r.adi.value !== "number" || r.adi.value <= 0) fail(`${w}: bad adi value`);
        if (r.adi.unit !== "mg/kg bw/day") fail(`${w}: adi unit must be mg/kg bw/day`);
      }
      if (r.adi.note) localized(r.adi.note, `${w}.adi.note`, fail);
    }
  });

  for (const f of x.flags || []) if (!FLAGS.has(f)) fail(`${where}: bad flag ${f}`);
  if (!Array.isArray(x.flags)) fail(`${where}: flags must be a list`);

  const v = x.verification;
  if (!v || !["source-checked", "partial", "illustrative"].includes(v.status)) fail(`${where}: bad verification status`);
  else {
    if (!isDay(v.checkedOn)) fail(`${where}: verification.checkedOn must be YYYY-MM-DD`);
    if (v.status !== "source-checked" && !v.notes) fail(`${where}: ${v.status} records must explain why in verification.notes`);
  }
}

export function checkArticle(a, where, fail) {
  if (!/^[a-z0-9-]+$/.test(a.slug || "")) fail(`${where}: bad slug`);
  localized(a.title, `${where}.title`, fail);
  localized(a.dek, `${where}.dek`, fail);
  if (!Number.isInteger(a.minutes)) fail(`${where}: minutes must be a whole number`);
  (a.takeaways || []).forEach((t, i) => localized(t, `${where}.takeaways[${i}]`, fail));
  if (!a.takeaways?.length) fail(`${where}: needs takeaways`);
  if (!a.sections?.length) fail(`${where}: needs sections`);
  (a.sections || []).forEach((s, i) => {
    localized(s.heading, `${where}.sections[${i}].heading`, fail);
    if (!s.paragraphs?.length) fail(`${where}.sections[${i}]: needs paragraphs`);
    (s.paragraphs || []).forEach((p, j) => localized(p, `${where}.sections[${i}].paragraphs[${j}]`, fail));
    (s.bullets || []).forEach((p, j) => localized(p, `${where}.sections[${i}].bullets[${j}]`, fail));
  });
  references(a.references, where, fail);
  if (!isDay(a.checkedOn)) fail(`${where}: checkedOn must be YYYY-MM-DD`);
}

const readJson = f => JSON.parse(readFileSync(f, "utf8").replace(/^﻿/, ""));

export function loadItems() {
  const dir = resolve(DATA, "items");
  return existsSync(dir)
    ? readdirSync(dir).filter(f => f.endsWith(".json")).sort().flatMap(f => readJson(resolve(dir, f)).map(x => ({ ...x, _file: f })))
    : [];
}

export function loadArticles() {
  const dir = resolve(DATA, "articles");
  return existsSync(dir) ? readdirSync(dir).filter(f => f.endsWith(".json")).sort().flatMap(f => [readJson(resolve(dir, f))].flat()) : [];
}

/** Returns a list of problems across the whole dataset. */
export function checkAll() {
  const errors = [];
  const fail = m => errors.push(m);
  const items = loadItems();
  const seen = new Map();
  for (const x of items) {
    checkItem(x, `${x._file}:${x.id}`, fail);
    if (seen.has(x.id)) fail(`duplicate id ${x.id} (${seen.get(x.id)} and ${x._file})`);
    seen.set(x.id, x._file);
  }
  const labelOwner = new Map();
  for (const x of items) for (const n of x.labelNames || []) {
    if (labelOwner.has(n) && labelOwner.get(n) !== x.id) fail(`label name "${n}" is used by both ${labelOwner.get(n)} and ${x.id}`);
    labelOwner.set(n, x.id);
  }
  const RESERVED = new Set(["category", "compare", "decoder", "explore", "learn", "evidence-labels"]);
  for (const x of items) if (RESERVED.has(x.id)) fail(`id ${x.id} collides with a page of the section`);
  for (const c of CATEGORY_IDS) if (!items.some(x => x.category === c)) fail(`category ${c} has no ingredients`);
  // images: real files, free licence, credited, honestly described
  const imageDir = resolve(DATA, "images");
  if (existsSync(imageDir)) {
    const SUBJECTS = listOf("IMAGE_SUBJECTS");
    const FREE = /^(cc0|cc[- ]zero|public domain|pd\b|pd-|cc[- ]by(-sa)?[- ]?\d)/i;
    const known = new Set([...seen.keys(), ...[...APPS].map(a => `app:${a}`), ...[...CATEGORY_IDS].map(c => `cat:${c}`), ...[...seen.keys()].map(i => `polymer:${i}`)]);
    for (const f of readdirSync(imageDir).filter(n => n.endsWith(".json"))) {
      for (const [key, im] of Object.entries(readJson(resolve(imageDir, f)))) {
        const w = `images/${f}:${key}`;
        if (!known.has(key)) fail(`${w}: key matches no ingredient, food type or category`);
        if (!SUBJECTS.has(im.subject)) fail(`${w}: bad subject ${im.subject}`);
        if (!FREE.test(im.license || "")) fail(`${w}: licence not allowed: ${im.license}`);
        if (!im.author) fail(`${w}: no author`);
        if (!/^https:\/\/commons\.wikimedia\.org\//.test(im.page || "")) fail(`${w}: page must be on Commons`);
        for (const k of ["src", "sm"]) if (!existsSync(resolve("public" + im[k]))) fail(`${w}: missing file ${im[k]}`);
        if (!(im.w > 0 && im.h > 0)) fail(`${w}: needs dimensions`);
        localized(im.alt, `${w}.alt`, fail);
        localized(im.caption, `${w}.caption`, fail);
      }
    }
  }

  const articles = loadArticles();
  for (const a of articles) {
    checkArticle(a, `article:${a.slug}`, fail);
    for (const id of a.relatedIngredients || []) if (!seen.has(id)) fail(`article ${a.slug}: unknown ingredient ${id}`);
  }
  return { errors, items, articles };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const file = process.argv[2];
  const errors = [];
  let count = 0;
  if (file) {
    const data = [readJson(resolve(file))].flat();
    for (const x of data) {
      count++;
      if (x.slug) checkArticle(x, `${basename(file)}:${x.slug}`, m => errors.push(m));
      else checkItem(x, `${basename(file)}:${x.id}`, m => errors.push(m));
    }
  } else {
    const r = checkAll();
    errors.push(...r.errors);
    count = r.items.length;
  }
  if (errors.length) {
    console.error(`✗ ${errors.length} problem(s):\n  - ${errors.slice(0, 60).join("\n  - ")}`);
    process.exit(1);
  }
  console.log(`✓ ${count} record(s) OK`);
}
