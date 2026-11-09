"use client";

/*
 * Language-aware routing helpers, built on Next.js.
 *
 * Components link to unprefixed paths ("/foods/mango"); these wrappers add the current
 * language prefix ("/bn/foods/mango"). Import routing hooks from here, not from "next/navigation".
 */
import { createContext, forwardRef, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import NextLink from "next/link";
import { useParams as useNextParams, usePathname as useNextPathname, useRouter } from "next/navigation";
import { DEFAULT_LANG, LANGS, stripLang, withLang } from "./paths.js";

/** State owned by the app shell (the compare list) and read by pages. */
const OutletContext = createContext({});
export const OutletProvider = OutletContext.Provider;
export const useOutletContext = () => useContext(OutletContext);

/** Route params; catch-all segments are reduced to their single value (/foods/[[...slug]]). */
export function useParams() {
  const params = useNextParams();
  return useMemo(
    () => Object.fromEntries(Object.entries(params || {}).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v])),
    [params],
  );
}

/** Current language from the URL (falls back to the default outside the /[lang] tree). */
export function useUrlLang() {
  const { lang } = useParams();
  return LANGS.includes(lang) ? lang : DEFAULT_LANG;
}

/** Prefix an app path with a language. Leaves external links, hashes and already-prefixed paths alone. */
export function localize(to, lang) {
  if (typeof to !== "string" || !to.startsWith("/") || to.startsWith("//")) return to;
  if (/^\/(en|bn)(\/|$|\?|#)/.test(to)) return to;
  const i = to.search(/[?#]/);
  const path = i === -1 ? to : to.slice(0, i);
  const rest = i === -1 ? "" : to.slice(i);
  return withLang(lang, path) + rest;
}

/* ------------------------------------------------------------------ */
/* Query string and hash                                                */
/* ------------------------------------------------------------------ */

// Read from the browser rather than Next's useSearchParams, which would turn every page that
// uses it into client-only rendering and remove its content from the prerendered HTML.
const urlListeners = new Set();
let historyPatched = false;
// deferred: Next calls pushState inside an insertion effect, where React forbids state updates
const notifyUrl = () => queueMicrotask(() => urlListeners.forEach(fn => fn()));

function subscribeUrl(fn) {
  if (!historyPatched) {
    historyPatched = true;
    for (const method of ["pushState", "replaceState"]) {
      const original = window.history[method];
      window.history[method] = function patched(...args) {
        const result = original.apply(this, args);
        notifyUrl();
        return result;
      };
    }
    window.addEventListener("popstate", notifyUrl);
    window.addEventListener("hashchange", notifyUrl);
  }
  urlListeners.add(fn);
  return () => urlListeners.delete(fn);
}

function useUrlTail() {
  // the prerendered HTML has no query or hash, so hydration starts from an empty value
  const tail = useSyncExternalStore(subscribeUrl, () => window.location.search + window.location.hash, () => "");
  const i = tail.indexOf("#");
  return i === -1 ? { search: tail, hash: "" } : { search: tail.slice(0, i), hash: tail.slice(i) };
}

export function useLocation() {
  const pathname = useNextPathname();
  const { search, hash } = useUrlTail();
  return useMemo(() => ({ pathname, search, hash }), [pathname, search, hash]);
}

export function useSearchParams() {
  const { search } = useUrlTail();
  const params = useMemo(() => new URLSearchParams(search), [search]);
  // history API, not the router: filters change the URL without refetching or scrolling
  const setParams = useCallback((next, { replace = false } = {}) => {
    const qs = new URLSearchParams(next).toString();
    const url = window.location.pathname + (qs ? `?${qs}` : "") + window.location.hash;
    window.history[replace ? "replaceState" : "pushState"](null, "", url);
    // synchronously, inside the input event: a later update would make React restore the old
    // value first, which moves the caret to the end and interrupts Bangla phonetic keyboards
    urlListeners.forEach(fn => fn());
  }, []);
  return [params, setParams];
}

/* ------------------------------------------------------------------ */
/* Links and navigation                                                 */
/* ------------------------------------------------------------------ */

// Next would not move the page when only content inside a shared layout changes (see FoodsRoute).
let keepScrollOnce = false;
if (typeof window !== "undefined") window.addEventListener("popstate", () => { keepScrollOnce = true; });

/** True when the navigation that just happened should leave the scroll position alone. */
export function consumeKeepScroll() {
  const keep = keepScrollOnce;
  keepScrollOnce = false;
  return keep;
}

export const Link = forwardRef(function Link({ to, ...props }, ref) {
  const lang = useUrlLang();
  // no background prefetching: a page can hold hundreds of food links
  return <NextLink ref={ref} href={localize(to, lang)} prefetch={false} {...props} />;
});

export const NavLink = forwardRef(function NavLink({ to, end, className, ...props }, ref) {
  const lang = useUrlLang();
  const pathname = useNextPathname();
  const href = localize(to, lang);
  // "/" maps to "/en" — must match exactly, not as a prefix of every page
  const exact = end ?? to === "/";
  const isActive = pathname === href || (!exact && pathname.startsWith(`${href}/`));
  return (
    <NextLink
      ref={ref}
      href={href}
      prefetch={false}
      aria-current={isActive ? "page" : undefined}
      className={typeof className === "function" ? className({ isActive }) : className}
      {...props}
    />
  );
});

export function useNavigate() {
  const router = useRouter();
  const lang = useUrlLang();
  return useCallback((to, opts = {}) => {
    if (typeof to === "number") { router.back(); return; }
    const href = localize(to, lang);
    // only when the path really changes: the flag is consumed by a path change, and a leftover
    // one would stop the next food page from opening at the top
    if (opts.preventScrollReset && href.split(/[?#]/)[0] !== window.location.pathname) keepScrollOnce = true;
    router[opts.replace ? "replace" : "push"](href, { scroll: !opts.preventScrollReset });
  }, [router, lang]);
}

/** Current pathname without the language prefix (for "is this nav item active?" checks). */
export function usePathname() {
  return stripLang(useNextPathname());
}
