/*
 * React Router framework mode: static prerendering (no server needed).
 * Every public page in both languages is rendered to HTML at build time — see src/paths.js.
 */
import { LANGS, allPublicPaths, withLang } from "./src/paths.js";

export default {
  appDirectory: "src",
  ssr: false,
  async prerender() {
    const pages = allPublicPaths().flatMap(p => LANGS.map(l => withLang(l, p)));
    // "/" picks a language; "/en/404" becomes the host's 404.html (see scripts/postbuild.mjs)
    return ["/", ...pages, "/en/404"];
  },
};
