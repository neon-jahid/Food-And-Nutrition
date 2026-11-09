/*
 * Tiny static server for the production build (used by `npm run preview` and Playwright).
 * Mirrors how static hosts behave: exact file → dir/index.html → _redirects rule → 404.html (status 404).
 */
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const ROOT = "out";
const PORT = Number(process.env.PORT || 4173);
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2",
  ".xml": "application/xml", ".txt": "text/plain; charset=utf-8",
};

const rules = existsSync(join(ROOT, "_redirects"))
  ? readFileSync(join(ROOT, "_redirects"), "utf8").split("\n").filter(l => l && !l.startsWith("#")).map(l => {
      const parts = l.trim().split(/\s+/);
      const cond = parts.length === 4 ? parts.splice(1, 1)[0].split("=") : null; // e.g. lang=bn
      const [from, to, code] = parts;
      return [new RegExp("^" + from.replace(/:(\w+)/g, "(?<$1>[^/]+)") + "/?$"), to, Number(code) || 301, cond];
    })
  : [];

const file = p => {
  try { return statSync(p).isFile() ? p : null; } catch { return null; }
};

createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const path = normalize(decodeURIComponent(url.pathname)).replace(/\\/g, "/");
  if (path.includes("..")) { res.writeHead(400).end(); return; }

  const hit = file(join(ROOT, path)) || file(join(ROOT, path, "index.html"));
  if (hit) {
    res.writeHead(200, { "Content-Type": TYPES[extname(hit)] || "application/octet-stream" });
    res.end(readFileSync(hit));
    return;
  }
  for (const [re, to, code, cond] of rules) {
    const m = path.match(re);
    if (m && (!cond || url.searchParams.get(cond[0]) === cond[1])) {
      const dest = to.replace(/:(\w+)/g, (_, k) => m.groups?.[k] ?? "");
      // like Netlify: a query parameter used as the rule's condition is not passed on
      if (cond) url.searchParams.delete(cond[0]);
      res.writeHead(code, { Location: dest + url.search }).end();
      return;
    }
  }
  res.writeHead(404, { "Content-Type": TYPES[".html"] });
  res.end(readFileSync(join(ROOT, "404.html")));
}).listen(PORT, () => console.log(`Serving ${ROOT} at http://localhost:${PORT}`));
