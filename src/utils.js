export const NUTRIENT_KEYS = [
  "calories", "protein", "carbs", "fat", "fiber", "sugar", "vitC", "calcium", "iron", "potassium",
];

export const storage = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem("nutribase." + key);
      return v === null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try { localStorage.setItem("nutribase." + key, JSON.stringify(value)); } catch { /* ignore */ }
  },
};

/** Round a nutrient value for display (no locale digits). */
export function roundValue(v) {
  if (v === 0) return "0";
  if (v < 1) return String(+v.toFixed(2));
  if (v < 100) return String(+v.toFixed(1));
  return String(Math.round(v));
}

/** Share of calories from protein / carbs / fat, in percent. */
export function macroEnergy(n) {
  const p = n.protein * 4, c = n.carbs * 4, f = n.fat * 9;
  const total = p + c + f;
  if (!total) return { p: 0, c: 0, f: 0 };
  return { p: (p / total) * 100, c: (c / total) * 100, f: (f / total) * 100 };
}

/** Highlights derived from per-100 g values. [key, "good" | "warn"] */
export function healthTags(n) {
  const tags = [];
  if (n.protein >= 10) tags.push(["highProtein", "good"]);
  if (n.fiber >= 5.6) tags.push(["highFiber", "good"]);
  if (n.calories <= 40 && n.calories >= 5) tags.push(["lowCal", "good"]);
  if (n.vitC >= 18) tags.push(["vitC", "good"]);
  if (n.calcium >= 260) tags.push(["calcium", "good"]);
  if (n.iron >= 3.6) tags.push(["iron", "good"]);
  if (n.potassium >= 500) tags.push(["potassium", "good"]);
  if (n.fat <= 3 && n.calories >= 10) tags.push(["lowFat", "good"]);
  if (n.fat >= 17.5) tags.push(["highFat", "warn"]);
  if (n.sugar >= 22.5) tags.push(["highSugar", "warn"]);
  return tags;
}

/** Short nutrient label: "Protein" from "আমিষ (প্রোটিন)" style labels. */
export const shortLabel = s => s.split(" (")[0];
