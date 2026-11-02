/*
 * One .env reader for the whole build (vite.config.js and scripts/generate-seo.mjs),
 * so the sitemap and the pages always agree on the site URL.
 *
 * Fixes two problems with plain parsing:
 *  - Windows editors (Notepad, PowerShell 5 Out-File) save a UTF-8 BOM, which hid the first key
 *    from both Vite and the old script → the site silently used the placeholder domain.
 *  - "KEY=value # comment" kept the comment in the sitemap script but not in Vite.
 * Files are read in Vite's order (later wins); real environment variables win over files.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parseEnv } from "node:util";

const PLACEHOLDER_HOSTS = /(^|\.)(your-domain\.com|example\.(com|org|net)|[\w-]+\.example|localhost)$/i;

export function readEnv(mode = "production", dir = process.cwd()) {
  const out = {};
  for (const name of [".env", ".env.local", `.env.${mode}`, `.env.${mode}.local`]) {
    const file = resolve(dir, name);
    if (!existsSync(file)) continue;
    const text = readFileSync(file, "utf8").replace(/^﻿/, "");
    Object.assign(out, parseEnv(text));
  }
  for (const key of Object.keys(out)) if (process.env[key]) out[key] = process.env[key];
  return out;
}

/**
 * Validated site settings. Throws on values that can't work (bad URL / e-mail);
 * returns warnings for missing or placeholder values.
 */
export function siteConfig(mode = "production", dir = process.cwd()) {
  const env = readEnv(mode, dir);
  const warnings = [];
  let siteUrl = (env.VITE_SITE_URL || "").trim();
  let contactEmail = (env.VITE_CONTACT_EMAIL || "").trim();

  if (siteUrl) {
    let u;
    try { u = new URL(siteUrl); } catch { throw new Error(`VITE_SITE_URL is not a valid URL: "${siteUrl}" (example: https://food-and-nutrition.com)`); }
    if (!/^https?:$/.test(u.protocol)) throw new Error(`VITE_SITE_URL must start with https:// — got "${siteUrl}"`);
    if (u.pathname !== "/" || u.search || u.hash) throw new Error(`VITE_SITE_URL must be the domain only, without a path — got "${siteUrl}"`);
    if (PLACEHOLDER_HOSTS.test(u.hostname)) warnings.push(`VITE_SITE_URL is still a placeholder (${u.hostname}) — set your real domain before deploying.`);
    siteUrl = u.origin;
  } else {
    warnings.push("VITE_SITE_URL is not set — sitemap, canonical and Open Graph URLs use a placeholder domain. Set it in .env before deploying.");
  }

  if (contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    throw new Error(`VITE_CONTACT_EMAIL is not a valid e-mail address: "${contactEmail}"`);
  }

  return { siteUrl, contactEmail, warnings };
}
