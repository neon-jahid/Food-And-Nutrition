/*
 * Language-aware routing helpers.
 *
 * Components link to unprefixed paths ("/foods/mango"); these wrappers add the current
 * language prefix ("/bn/foods/mango"). Import routing hooks from here, not from "react-router".
 */
import { forwardRef, useCallback } from "react";
import {
  Link as RRLink,
  NavLink as RRNavLink,
  useLocation,
  useNavigate as useRRNavigate,
  useParams,
} from "react-router";
import { DEFAULT_LANG, LANGS, stripLang, withLang } from "./paths.js";

export { Outlet, useLocation, useOutletContext, useParams, useSearchParams } from "react-router";

/** Current language from the URL (falls back to English outside the /:lang tree). */
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

export function useLocalize() {
  const lang = useUrlLang();
  return useCallback(to => localize(to, lang), [lang]);
}

export const Link = forwardRef(function Link({ to, ...props }, ref) {
  const lang = useUrlLang();
  return <RRLink ref={ref} to={localize(to, lang)} {...props} />;
});

export const NavLink = forwardRef(function NavLink({ to, end, ...props }, ref) {
  const lang = useUrlLang();
  // "/" maps to "/en" — must match exactly, not as a prefix of every page
  return <RRNavLink ref={ref} to={localize(to, lang)} end={end ?? to === "/"} {...props} />;
});

export function useNavigate() {
  const navigate = useRRNavigate();
  const lang = useUrlLang();
  return useCallback((to, opts) => (typeof to === "number" ? navigate(to) : navigate(localize(to, lang), opts)), [navigate, lang]);
}

/** Current pathname without the language prefix (for "is this nav item active?" checks). */
export function usePathname() {
  return stripLang(useLocation().pathname);
}
