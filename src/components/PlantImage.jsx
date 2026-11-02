import { useState } from "react";
import { Leaf } from "lucide-react";
import plantImages from "../data/plantImages.json";
import FoodImage from "./FoodImage.jsx";
import { foodById } from "./PageKit.jsx";

/**
 * Photo of a medicinal plant. Plants that are also foods (tulsi, ginger…) reuse the food photo;
 * the rest use /images/plants/<id>.webp (credits in src/data/plantImages.json, listed on the References page).
 */
export default function PlantImage({ plant, alt, className = "", eager = false }) {
  const [loaded, setLoaded] = useState(false);
  const food = plant.foodId && foodById(plant.foodId);
  if (food) return <FoodImage food={food} className={className} eager={eager} hd={eager} sizes="(min-width: 768px) 560px, 100vw" />;
  const im = plantImages[plant.id];
  if (!im) {
    return (
      <span className={`grid place-items-center bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300 ${className}`}>
        <Leaf className="h-1/2 w-1/2" aria-hidden="true" />
      </span>
    );
  }
  return (
    <img
      src={im.src}
      alt={alt || plant.name.en}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`object-cover ${loaded ? "" : "img-skeleton"} ${className}`}
    />
  );
}

export const PLANT_IMAGES = plantImages;
