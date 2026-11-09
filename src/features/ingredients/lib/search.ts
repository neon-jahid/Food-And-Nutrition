/* Search and filters over the slim index. Pure functions, so an API can replace them later. */
import type { ApplicationId, CategoryId, Origin, SearchEntry, StatusId } from "../types";

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

/** Lower-case, canonical Unicode, Latin digits, single spaces. */
export function normalize(s: string): string {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[০-৯]/g, d => String(BN_DIGITS.indexOf(d)))
    .replace(/\s+/g, " ")
    .trim();
}

/** "E 211", "e-211", "ins211", "211", "E500(ii)" → "211" / "500ii". Null if the text is not a code. */
export function parseCode(raw: string): string | null {
  const m = normalize(raw).match(/^(?:e|ins)?[\s.-]*(\d{3,4})\s*([a-z]{0,1})\s*(?:\(?\s*(i{1,3}|iv|v|vi{0,3}|ix|x)\s*\)?)?$/);
  return m ? m[1] + (m[2] || "") + (m[3] || "") : null;
}

const codeOf = (v?: string) => (v ? v.replace(/^E/i, "").replace(/[()]/g, "").toLowerCase() : "");

/** Code with any variant removed: "500ii" → "500". */
export const baseCode = (code: string) => code.match(/^\d{3,4}/)?.[0] ?? code;

const compact = (s: string) => s.replace(/[\s-]/g, "");

/** Relevance of one entry for a query; 0 means no match. */
export function score(entry: SearchEntry, rawQuery: string): number {
  const q = normalize(rawQuery);
  if (!q) return 1;
  const code = parseCode(q);
  if (code) {
    const e = codeOf(entry.eNumber), i = codeOf(entry.ins);
    if (e === code || i === code) return 100;
    if (e && baseCode(e) === baseCode(code)) return 80;
    if (i && baseCode(i) === baseCode(code)) return 80;
    // digits alone can only be a code; do not fall through to matching text
    if (/^\d+$/.test(q)) return 0;
  }
  if (entry.formula && normalize(entry.formula) === q) return 95;
  const names = [entry.name.en, entry.name.bn].map(normalize);
  const others = [...entry.commonNames, ...entry.labelNames].map(normalize);
  if (names.includes(q)) return 90;
  if (others.includes(q)) return 85;
  if (names.some(n => n.startsWith(q))) return 70;
  if (others.some(n => n.startsWith(q))) return 60;
  const wordStart = (s: string) => s.split(/[\s,()/-]+/).some(w => w.startsWith(q));
  if (names.some(wordStart)) return 55;
  if (others.some(wordStart)) return 45;
  if (q.length >= 3 && [...names, ...others].some(n => n.includes(q) || compact(n).includes(compact(q)))) return 30;
  if (q.length >= 3 && entry.formula && normalize(entry.formula).includes(q)) return 25;
  return 0;
}

export interface Filters {
  q: string;
  category?: CategoryId | "";
  origin?: Origin | "";
  status?: StatusId | "";
  application?: ApplicationId | "";
}

export function filterEntries(entries: SearchEntry[], f: Filters): SearchEntry[] {
  const scored: { e: SearchEntry; s: number }[] = [];
  for (const e of entries) {
    if (f.category && e.category !== f.category && !e.alsoIn?.includes(f.category)) continue;
    if (f.origin && e.origin !== f.origin) continue;
    if (f.status && !e.statusLabels.includes(f.status)) continue;
    if (f.application && !e.applications.includes(f.application)) continue;
    const s = score(e, f.q);
    if (s > 0) scored.push({ e, s });
  }
  return scored.sort((a, b) => b.s - a.s || a.e.name.en.localeCompare(b.e.name.en)).map(x => x.e);
}

export const suggest = (entries: SearchEntry[], q: string, limit = 7) => (normalize(q) ? filterEntries(entries, { q }).slice(0, limit) : []);
