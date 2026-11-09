/*
 * Food Label Decoder: turns pasted label text into a structured breakdown.
 * It only identifies what is written. It never estimates amounts, because labels generally do
 * not disclose them.
 */
import type { FlagId, Localized, SearchEntry } from "../types";
import { baseCode, normalize, parseCode } from "./search";

export interface BasicIngredient {
  id: string;
  name: Localized;
  aliases: string[];
  purpose: Localized;
  allergens: string[];
}

export type RowKind = "additive" | "basic" | "code-only" | "class-only" | "unknown";

export interface Row {
  raw: string;
  kind: RowKind;
  /** Functional class as written on the pack, e.g. "preservative". */
  classId?: string;
  entry?: SearchEntry;
  basic?: BasicIngredient;
  code?: string;
  /** Close spelling match offered for an unknown ingredient. */
  suggestion?: SearchEntry;
  allergens: string[];
  children: Row[];
}

export interface DecodeResult {
  rows: Row[];
  /** every row, including nested ones, in reading order */
  flat: Row[];
  allergens: { id: string; source: "ingredient" | "contains" | "may-contain" }[];
  flags: { id: FlagId; entries: SearchEntry[] }[];
  counts: Record<RowKind, number>;
}

/** Functional class words printed on labels (English and Bangla). */
const CLASSES: [string, string[]][] = [
  ["preservative", ["preservative", "preservatives", "class ii preservative", "class i preservative", "প্রিজারভেটিভ", "সংরক্ষক"]],
  ["antioxidant", ["antioxidant", "antioxidants", "অ্যান্টিঅক্সিডেন্ট"]],
  ["color", ["colour", "color", "colours", "colors", "food colour", "food color", "permitted colour", "permitted color", "permitted synthetic food colour", "synthetic food colour", "natural colour", "natural color", "রং", "খাদ্য রং"]],
  ["emulsifier", ["emulsifier", "emulsifiers", "ইমালসিফায়ার"]],
  ["stabilizer", ["stabilizer", "stabilizers", "stabiliser", "stabilisers", "স্ট্যাবিলাইজার"]],
  ["thickener", ["thickener", "thickeners", "thickening agent", "ঘনকারক"]],
  ["gelling", ["gelling agent", "gelling agents"]],
  ["acidity", ["acidity regulator", "acidity regulators", "acidulant", "acidifier", "acid", "অম্লতা নিয়ন্ত্রক"]],
  ["raising", ["raising agent", "raising agents", "leavening agent", "leavening agents", "রাইজিং এজেন্ট"]],
  ["enhancer", ["flavour enhancer", "flavor enhancer", "flavour enhancers", "flavor enhancers", "taste enhancer", "স্বাদ বর্ধক"]],
  ["sweetener", ["sweetener", "sweeteners", "artificial sweetener", "artificial sweeteners", "মিষ্টিকারক"]],
  ["humectant", ["humectant", "humectants"]],
  ["anticaking", ["anticaking agent", "anti-caking agent", "anticaking agents", "anti-caking agents"]],
  ["glazing", ["glazing agent", "glazing agents"]],
  ["improver", ["flour treatment agent", "flour improver", "dough conditioner", "bread improver"]],
];
const CLASS_BY_WORD = new Map(CLASSES.flatMap(([id, words]) => words.map(w => [w, id] as const)));

/** Splits on commas, semicolons, full stops and new lines, but never inside brackets. */
export function splitTopLevel(text: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let cur = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if ("([{".includes(ch)) depth++;
    else if (")]}".includes(ch)) depth = Math.max(0, depth - 1);
    const splits = ch === "," || ch === ";" || ch === "\n" || ch === "।" || (ch === "." && !/\d/.test(text[i + 1] ?? "") && !/\d/.test(text[i - 1] ?? ""));
    if (splits && depth === 0) {
      parts.push(cur);
      cur = "";
    } else cur += ch;
  }
  parts.push(cur);
  return parts.map(p => p.trim()).filter(Boolean);
}

/** Separates "head (inner)" into its parts. */
function headAndInner(token: string): { head: string; inner: string } {
  const open = token.search(/[([{]/);
  if (open === -1) return { head: token, inner: "" };
  let depth = 0;
  for (let i = open; i < token.length; i++) {
    if ("([{".includes(token[i])) depth++;
    else if (")]}".includes(token[i]) && --depth === 0) {
      return { head: (token.slice(0, open) + " " + token.slice(i + 1)).trim(), inner: token.slice(open + 1, i) };
    }
  }
  return { head: token.slice(0, open).trim(), inner: token.slice(open + 1) };
}

const clean = (s: string) =>
  normalize(s)
    .replace(/\b\d+(\.\d+)?\s*%/g, "")      // percentages say how much of that item, nothing to match
    .replace(/^[\s:*•·–—-]+|[\s:*•·.–—-]+$/g, "")
    .replace(/^(?:and|&|ও|এবং)\s+/, "")
    .replace(/\s+/g, " ")
    .trim();

function editDistanceWithin(a: string, b: string, max: number): boolean {
  if (Math.abs(a.length - b.length) > max) return false;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      best = Math.min(best, cur[j]);
    }
    if (best > max) return false;
    prev = cur;
  }
  return prev[b.length] <= max;
}

export class Decoder {
  private byCode = new Map<string, SearchEntry>();
  private byBase = new Map<string, SearchEntry>();
  private byName = new Map<string, SearchEntry>();
  private basics = new Map<string, BasicIngredient>();
  private longNames: [string, SearchEntry][] = [];

  constructor(entries: SearchEntry[], basics: BasicIngredient[]) {
    for (const e of entries) {
      for (const c of [e.eNumber, e.ins]) {
        if (!c) continue;
        const code = c.replace(/^E/i, "").replace(/[()]/g, "").toLowerCase();
        this.byCode.set(code, e);
        if (!this.byBase.has(baseCode(code))) this.byBase.set(baseCode(code), e);
      }
      for (const n of [e.name.en, e.name.bn, ...e.commonNames, ...e.labelNames]) this.byName.set(normalize(n), e);
    }
    for (const b of basics) for (const a of b.aliases) this.basics.set(normalize(a), b);
    this.longNames = [...this.byName].filter(([n]) => n.length >= 6).sort((a, b) => b[0].length - a[0].length);
  }

  private findCode(code: string): SearchEntry | undefined {
    return this.byCode.get(code) ?? this.byBase.get(baseCode(code));
  }

  private withAllergens(row: Row): Row {
    const own = row.basic?.allergens ?? [];
    return { ...row, allergens: [...new Set([...own, ...row.allergens])] };
  }

  private matchText(text: string): Row | null {
    // a code written after a name, such as "sodium benzoate e211"
    const trailing = text.match(/\b(?:e|ins)[\s-]*(\d{3,4}[a-z]?(?:\(?[ivx]+\)?)?)\b/);
    const exact = this.byName.get(text);
    if (exact) return { raw: text, kind: "additive", entry: exact, allergens: [], children: [] };
    if (trailing) {
      const code = parseCode(trailing[0]);
      const e = code ? this.findCode(code) : undefined;
      if (e) return { raw: text, kind: "additive", entry: e, allergens: [], children: [] };
      if (code) return { raw: text, kind: "code-only", code, allergens: [], children: [] };
    }
    const basic = this.basics.get(text);
    if (basic) return { raw: text, kind: "basic", basic, allergens: [], children: [] };
    // the longest known name contained as whole words ("refined sodium benzoate powder")
    const hit = this.longNames.find(([n]) => new RegExp(`(^|[\\s/-])${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[\\s/-])`).test(text));
    if (hit) return { raw: text, kind: "additive", entry: hit[1], allergens: [], children: [] };
    for (const [alias, b] of [...this.basics].sort((x, y) => y[0].length - x[0].length)) {
      if (alias.length >= 4 && new RegExp(`(^|[\\s/-])${alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[\\s/-])`).test(text)) {
        return { raw: text, kind: "basic", basic: b, allergens: [], children: [] };
      }
    }
    return null;
  }

  private suggestionFor(text: string): SearchEntry | undefined {
    if (text.length < 6) return undefined;
    const max = text.length >= 10 ? 2 : 1;
    return this.longNames.find(([n]) => editDistanceWithin(text, n, max))?.[1];
  }

  private rowFor(token: string, insideClass?: string): Row[] {
    const { head, inner } = headAndInner(token);
    const text = clean(head);
    if (!text && !inner) return [];

    // "preservative (211)" or "emulsifier (322, 471)": the class names the job, the brackets the substances
    const classId = CLASS_BY_WORD.get(text);
    if (classId) {
      const children = inner ? splitTopLevel(inner).flatMap(t => this.rowFor(t, classId)) : [];
      return [this.withAllergens({ raw: token, kind: children.length ? "class-only" : "class-only", classId, allergens: [], children })];
    }

    // bare numbers count as codes only inside a class such as "colour (102)", or on their own
    const code = parseCode(text);
    if (code && (insideClass || /^(e|ins)/.test(text) || /^\d/.test(text))) {
      const e = this.findCode(code);
      return [e ? { raw: token, kind: "additive", entry: e, classId: insideClass, allergens: [], children: [] } : { raw: token, kind: "code-only", code, classId: insideClass, allergens: [], children: [] }];
    }

    const matched = this.matchText(text);
    const children = inner && !/^\s*(from|as|contains?)\b/i.test(inner) ? splitTopLevel(inner).flatMap(t => this.rowFor(t)) : [];

    if (matched) {
      // "lecithin (soy)" mentions an allergen source inside the brackets
      const nestedAllergens = children.flatMap(c => c.basic?.allergens ?? []);
      const known = children.filter(c => c.kind !== "unknown");
      return [this.withAllergens({ ...matched, raw: token, classId: insideClass, allergens: nestedAllergens, children: known.length ? known : [] })];
    }
    const suggestion = this.suggestionFor(text);
    return [{ raw: token, kind: "unknown", classId: insideClass, suggestion, allergens: [], children }];
  }

  decode(input: string): DecodeResult {
    let text = input.normalize("NFC").replace(/\r/g, "");
    const statementAllergens: DecodeResult["allergens"] = [];

    // "May contain traces of nuts." and "Contains: wheat, milk." are statements, not ingredients
    const statement = /(?:^|[\n.;।])\s*(may\s+contain(?:\s+traces\s+of)?|contains?|allergen\s+information|allergens?)\s*:?\s+([^\n.;।]+)/gi;
    text = text.replace(statement, (_m, kind: string, list: string) => {
      const source = /may/i.test(kind) ? "may-contain" : "contains";
      for (const part of list.split(/,|\band\b|&/i)) {
        const b = this.basics.get(clean(part.replace(/\btraces? of\b/i, "")));
        for (const a of b?.allergens ?? []) statementAllergens.push({ id: a, source });
      }
      return "\n";
    });
    text = text.replace(/^\s*(?:ingredients?|উপাদান(?:সমূহ)?)\s*[:：-]?\s*/i, "");

    const rows = splitTopLevel(text).flatMap(t => this.rowFor(t));
    const flat: Row[] = [];
    const walk = (list: Row[]) => list.forEach(r => { flat.push(r); walk(r.children); });
    walk(rows);

    const ingredientAllergens = flat.flatMap(r => r.allergens.map(id => ({ id, source: "ingredient" as const })));
    const seen = new Set<string>();
    const allergens = [...ingredientAllergens, ...statementAllergens].filter(a => {
      const key = `${a.id}:${a.source}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    const flagMap = new Map<FlagId, SearchEntry[]>();
    for (const r of flat) {
      if (!r.entry) continue;
      for (const f of r.entry.flags) {
        const list = flagMap.get(f) ?? [];
        if (!list.includes(r.entry)) list.push(r.entry);
        flagMap.set(f, list);
      }
    }

    const counts: Record<RowKind, number> = { additive: 0, basic: 0, "code-only": 0, "class-only": 0, unknown: 0 };
    for (const r of flat) counts[r.kind]++;

    return { rows, flat, allergens, flags: [...flagMap].map(([id, entries]) => ({ id, entries })), counts };
  }
}
