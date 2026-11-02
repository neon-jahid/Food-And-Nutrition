/*
 * Runs after `react-router build`.
 * Copies the prerendered /en/404 page to build/client/404.html so static hosts
 * (Netlify, Cloudflare Pages, GitHub Pages, Vercel static) serve it with a real 404 status.
 */
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const out = "build/client";
const src = join(out, "en", "404", "index.html");
if (!existsSync(src)) {
  console.error("postbuild: prerendered 404 page not found at", src);
  process.exit(1);
}
copyFileSync(src, join(out, "404.html"));

let pages = 0;
const walk = dir => readdirSync(dir).forEach(f => {
  const p = join(dir, f);
  if (statSync(p).isDirectory()) walk(p);
  else if (f === "index.html") pages++;
});
walk(out);
console.log(`postbuild: 404.html written · ${pages} prerendered pages in ${out}`);
