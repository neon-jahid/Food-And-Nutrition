"use client";

/*
 * A real photograph with its size reserved (no layout shift), responsive files and a graceful
 * fallback. The site is a static export, which has no image optimizer for next/image to call,
 * so each photo is prepared ahead of time at two widths and served with srcset, like SiteImage.
 */
import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";
import type { ImageAsset, Lang } from "../types";

export function Photo({ image, lang, sizes = "100vw", eager = false, className = "" }: { image: Pick<ImageAsset, "src" | "sm" | "w" | "h" | "alt">; lang: Lang; sizes?: string; eager?: boolean; className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  // the error event can fire before React attaches its handler on prerendered pages
  useEffect(() => {
    const el = ref.current;
    if (el?.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span role="img" aria-label={image.alt[lang]} className={`flex items-center justify-center gap-2 bg-stone-100 p-4 text-center text-xs text-stone-600 dark:bg-forest-900 dark:text-stone-300 ${className}`}>
        <ImageOff className="h-4 w-4 shrink-0" aria-hidden="true" />{image.alt[lang]}
      </span>
    );
  }
  return (
    <img
      ref={ref} src={image.sm} srcSet={`${image.sm} 640w, ${image.src} 1400w`} sizes={sizes} width={image.w} height={image.h} alt={image.alt[lang]}
      loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} decoding="async" onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
