/*
 * Old URLs from before bilingual paths (e.g. /food/mango, /storage).
 * Redirects to the new path in the visitor's language (?lang=bn, then saved choice, then English).
 * Hosts that support it also get permanent (301) rules from scripts/generate-seo.mjs.
 */
import { redirect } from "react-router";
import { DEFAULT_LANG, LANGS, LEGACY_REDIRECTS, withLang } from "../paths.js";
import { storage } from "../utils.js";

const RULES = LEGACY_REDIRECTS.map(([from, to]) => [new RegExp("^" + from.replace(/:(\w+)/g, "(?<$1>[^/]+)") + "$"), to]);

export function legacyTarget(pathname) {
  const p = pathname.replace(/\/$/, "") || "/";
  for (const [re, to] of RULES) {
    const m = p.match(re);
    if (m) return to.replace(/:(\w+)/g, (_, k) => m.groups[k]);
  }
  return null;
}

export async function clientLoader({ request }) {
  const url = new URL(request.url);
  const qLang = url.searchParams.get("lang");
  url.searchParams.delete("lang");
  const saved = storage.get("lang");
  const lang = LANGS.includes(qLang) ? qLang : LANGS.includes(saved) ? saved : DEFAULT_LANG;
  const qs = url.searchParams.toString();
  throw redirect(withLang(lang, legacyTarget(url.pathname) || "/") + (qs ? `?${qs}` : "") + url.hash);
}

export default function Legacy() {
  return null;
}
