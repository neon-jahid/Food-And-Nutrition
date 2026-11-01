import {
  Activity, Apple, Baby, Bean, Bone, Brain, Carrot, CupSoda, Droplet, Drumstick, Dumbbell, Eye, Fish,
  Heart, HeartPulse, LayoutGrid, Leaf, Milk, Nut, Scale, ShieldCheck, Soup, Sparkles, Wheat,
} from "lucide-react";

/** One consistent SVG icon per category (emoji render differently on every OS). */
export const CATEGORY_ICONS = {
  all: LayoutGrid,
  fruits: Apple,
  vegetables: Carrot,
  grains: Wheat,
  pulses: Bean,
  fish: Fish,
  meat: Drumstick,
  dairy: Milk,
  nuts: Nut,
  spices: Leaf,
  beverages: CupSoda,
  dishes: Soup,
};

/** Accent colour per category, used behind the icon. */
export const CATEGORY_TONES = {
  all: "text-slate-600 dark:text-slate-300",
  fruits: "text-rose-500",
  vegetables: "text-emerald-600",
  grains: "text-amber-600",
  pulses: "text-orange-600",
  fish: "text-sky-600",
  meat: "text-red-600",
  dairy: "text-indigo-500",
  nuts: "text-yellow-700",
  spices: "text-lime-600",
  beverages: "text-cyan-600",
  dishes: "text-fuchsia-600",
};

export function CategoryIcon({ id, className = "h-4 w-4", tone = true }) {
  const Icon = CATEGORY_ICONS[id] || LayoutGrid;
  return <Icon aria-hidden="true" className={`${className} ${tone ? CATEGORY_TONES[id] || "" : ""}`} strokeWidth={2} />;
}

export const GOAL_ICONS = {
  diabetes: Droplet,
  anemia: HeartPulse,
  bones: Bone,
  weight: Scale,
  muscle: Dumbbell,
  immunity: ShieldCheck,
  heart: Heart,
  digestion: Activity,
  hairSkin: Sparkles,
  eyes: Eye,
  brain: Brain,
  pregnancy: Baby,
};
