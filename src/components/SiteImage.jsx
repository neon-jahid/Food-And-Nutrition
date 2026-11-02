import images from "../data/siteImages.json";

/**
 * Real photo used for page decoration (hero, coffee page). Credits are in src/data/siteImages.json
 * and listed on the References page. Serves a 640px file to phones and a 1400px file to large screens.
 */
export default function SiteImage({ id, alt, className = "", sizes = "100vw", eager = false }) {
  const im = images[id];
  return (
    <img
      src={im.sm}
      srcSet={`${im.sm} 640w, ${im.src} 1400w`}
      sizes={sizes}
      width={im.w}
      height={im.h}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
}

export const SITE_IMAGES = images;
