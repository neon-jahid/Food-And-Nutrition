import { useEffect, useRef, useState } from "react";
import credits from "../data/imageCredits.json";

/**
 * Real photo of a food (all photos are stored locally in /public/images/foods).
 *
 * fit="cover"   — fills the box, may crop (small thumbnails, decorative tiles)
 * fit="contain" — shows the WHOLE photo; the empty space is filled with a blurred
 *                 copy of the same photo, so nothing is cut off and there are no white bars
 * hd            — also offers the 1600px version via srcset for large / retina screens
 *
 * A shimmer placeholder is shown until the photo has loaded.
 */
export default function FoodImage({
  food, className = "", imgClassName = "", fit = "cover", eager = false, hd = false, sizes = "100vw",
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  const c = credits[food.id];
  const src = c?.src;

  // a cached image can finish loading before React attaches onLoad
  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    if (ref.current?.complete && ref.current.naturalWidth) setLoaded(true);
  }, [src]);

  const imgProps = {
    ref,
    src,
    srcSet: hd && c?.hd ? `${src} 720w, ${c.hd} 1600w` : undefined,
    sizes: hd && c?.hd ? sizes : undefined,
    alt: food.en,
    loading: eager ? "eager" : "lazy",
    fetchPriority: eager ? "high" : undefined,
    decoding: "async",
    onLoad: () => setLoaded(true),
    onError: () => setFailed(true),
  };

  // never happens for foods in the data set (every food has a local photo) — last-resort text tile
  if (!src || failed) {
    return (
      <div className={`grid place-items-center bg-gradient-to-br from-brand-50 to-slate-100 p-2 text-center text-sm font-semibold text-slate-500 dark:from-slate-800 dark:to-slate-900 ${className}`}>
        {food.en}
      </div>
    );
  }

  if (fit === "contain") {
    return (
      <div className={`relative overflow-hidden ${loaded ? "bg-slate-200 dark:bg-slate-800" : "img-skeleton"} ${className}`}>
        {loaded && (
          <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-2xl" />
        )}
        <img {...imgProps} className={`relative h-full w-full object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${imgClassName}`} />
      </div>
    );
  }

  return <img {...imgProps} className={`object-cover ${loaded ? "" : "img-skeleton"} ${className} ${imgClassName}`} />;
}

export function imageCredit(id) {
  return credits[id];
}
