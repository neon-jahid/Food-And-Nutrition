/*
 * Runs after `next build`.
 *  - Copies the prerendered /en/404 page to out/404.html so static hosts
 *    (Vercel, Netlify, Cloudflare Pages, GitHub Pages) serve it with a real 404 status.
 *  - Moves en/foods/mango.html to en/foods/mango/index.html, so any static host serves the
 *    clean URL /en/foods/mango without needing a host-specific "clean URLs" setting.
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, renameSync, statSync } from "node:fs";
import { join } from "node:path";

const out = "out";
const src = join(out, "en", "404.html");
if (!existsSync(src)) {
  console.error("postbuild: prerendered 404 page not found at", src);
  process.exit(1);
}
copyFileSync(src, join(out, "404.html"));

let pages = 0;
const walk = (dir, top) => readdirSync(dir).forEach(f => {
  const p = join(dir, f);
  if (statSync(p).isDirectory()) { walk(p, false); return; }
  if (!f.endsWith(".html")) return;
  pages++;
  if (top || f === "index.html") return; // out/index.html and out/404.html stay where hosts expect them
  const folder = p.slice(0, -".html".length);
  mkdirSync(folder, { recursive: true });
  renameSync(p, join(folder, "index.html"));
});
walk(out, true);

// the top-level language pages (out/en.html, out/bn.html) are the exception to the rule above
for (const f of readdirSync(out)) {
  if (!f.endsWith(".html") || f === "index.html" || f === "404.html") continue;
  const folder = join(out, f.slice(0, -".html".length));
  mkdirSync(folder, { recursive: true });
  renameSync(join(out, f), join(folder, "index.html"));
}
console.log(`postbuild: 404.html written · ${pages} prerendered pages in ${out}`);
