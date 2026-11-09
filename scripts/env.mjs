/*
 * One .env reader for the whole build (next.config.mjs and scripts/generate-seo.mjs),
 * so the sitemap and the pages always agree on the site URL.
 *
 * Handles what plain parsing gets wrong:
 *  - Windows editors (Notepad, PowerShell 5 Out-File) save a UTF-8 BOM, which can hide the first
 *    key → the site silently used the placeholder domain.
 *  - "KEY=value # comment" must not keep the comment.
 * The settings keep their VITE_ names so existing host configuration carries on working.
 * Later files win; real environment variables win over files.
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
 * Validated site settings. Never fails the build for a fixable typo — it repairs what it can and
 * returns warnings (shown in the build log). Only a value that cannot be a URL at all throws.
 *
 * On Vercel, when VITE_SITE_URL is not set, the project's production domain is used automatically
 * (VERCEL_PROJECT_PRODUCTION_URL — a system variable Vercel exposes during the build).
 */
export function siteConfig(mode = "production", dir = process.cwd()) {
  const env = readEnv(mode, dir);
  const warnings = [];
  let siteUrl = (env.VITE_SITE_URL || process.env.VITE_SITE_URL || "").trim().replace(/^["']|["']$/g, "");
  let contactEmail = (env.VITE_CONTACT_EMAIL || process.env.VITE_CONTACT_EMAIL || "").trim().replace(/^["']|["']$/g, "");

  if (!siteUrl && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    siteUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    warnings.push(`VITE_SITE_URL is not set — using the Vercel production domain ${siteUrl}. Set VITE_SITE_URL in Vercel → Settings → Environment Variables to use your own domain.`);
  }

  if (siteUrl) {
    if (!/^[a-z]+:\/\//i.test(siteUrl)) {
      warnings.push(`VITE_SITE_URL had no https:// — using "https://${siteUrl}".`);
      siteUrl = `https://${siteUrl}`;
    }
    let u;
    try { u = new URL(siteUrl); } catch { throw new Error(`VITE_SITE_URL is not a valid URL: "${siteUrl}" (example: https://food-and-nutrition.com)`); }
    if (!/^https?:$/.test(u.protocol)) throw new Error(`VITE_SITE_URL must start with https:// — got "${siteUrl}"`);
    if (u.pathname !== "/" || u.search || u.hash) warnings.push(`VITE_SITE_URL should be the domain only — ignoring "${u.pathname}${u.search}${u.hash}".`);
    if (PLACEHOLDER_HOSTS.test(u.hostname)) warnings.push(`VITE_SITE_URL is still a placeholder (${u.hostname}) — set your real domain before deploying.`);
    siteUrl = u.origin;
  } else {
    warnings.push("VITE_SITE_URL is not set — sitemap, canonical and Open Graph URLs use a placeholder domain. Set it in .env (or in your host's environment variables) before deploying.");
  }

  if (contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    warnings.push(`VITE_CONTACT_EMAIL is not a valid e-mail address ("${contactEmail}") — the contact link is hidden until it is fixed.`);
    contactEmail = "";
  }

  return { siteUrl, contactEmail, warnings };
}
