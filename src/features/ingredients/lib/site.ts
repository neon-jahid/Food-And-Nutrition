/* Typed entry points to the site's JavaScript routing and language helpers. */
import type { ComponentProps, ComponentType } from "react";
import type NextLink from "next/link";
import { Link as RouterLink, NavLink as RouterNavLink, useNavigate as routerNavigate, useSearchParams as routerSearchParams, usePathname as routerPathname } from "../../../router.jsx";
import { useLang as siteLang } from "../../../context/LangContext.jsx";
import { toLocaleDigits } from "../../../i18n.js";
import { storage as siteStorage } from "../../../utils.js";
import type { Lang } from "../types";

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & { to: string };
export const Link = RouterLink as unknown as ComponentType<LinkProps>;
export const NavLink = RouterNavLink as unknown as ComponentType<Omit<LinkProps, "className"> & { end?: boolean; className?: string | ((s: { isActive: boolean }) => string) }>;

export const useNavigate = routerNavigate as unknown as () => (to: string, opts?: { replace?: boolean; preventScrollReset?: boolean }) => void;
export const usePathname = routerPathname as unknown as () => string;
export const useSearchParams = routerSearchParams as unknown as () => [URLSearchParams, (next: Record<string, string> | URLSearchParams, opts?: { replace?: boolean }) => void];
export const useLang = siteLang as unknown as () => { lang: Lang; num: (v: number | string) => string };
export const storage = siteStorage as unknown as { get<T>(key: string, fallback: T): T; set(key: string, value: unknown): void };

export const digits = (v: number | string, lang: Lang): string => (toLocaleDigits as unknown as (v: number | string, l: Lang) => string)(v, lang);
