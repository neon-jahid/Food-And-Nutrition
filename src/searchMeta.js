/*
 * Lightweight search helpers (no food text index) — safe to import on any page.
 * The heavy index lives in search.js and is loaded only where it is needed.
 */

/* Health goals: nutrient rule OR keyword found in a food's positive text (see search.js). */
export const GOALS = {
  diabetes:  { icon: "🩸", kw: ["diabet", "blood sugar", "ডায়াবেটিস", "রক্তে চিনি", "রক্তে শর্করা"], rule: n => n.fiber >= 3 && n.sugar < 10 },
  anemia:    { icon: "🫀", kw: ["anemi", "anaemi", "রক্তস্বল্পতা"], rule: n => n.iron >= 2.5 },
  bones:     { icon: "🦴", kw: ["bone", "teeth", "হাড়", "দাঁত"], rule: n => n.calcium >= 150 },
  weight:    { icon: "⚖️", kw: ["weight", "ওজন"], rule: n => n.calories <= 60 && n.calories >= 5 },
  muscle:    { icon: "💪", kw: ["muscle", "পেশি"], rule: n => n.protein >= 15 },
  immunity:  { icon: "🛡️", kw: ["immun", "রোগ প্রতিরোধ"], rule: n => n.vitC >= 25 },
  heart:     { icon: "❤️", kw: ["heart", "blood pressure", "cholesterol", "হৃদ", "রক্তচাপ", "কোলেস্টেরল"], rule: n => n.potassium >= 400 && n.sugar < 15 },
  digestion: { icon: "🌀", kw: ["constipation", "digest", "gut", "কোষ্ঠকাঠিন্য", "হজম"], rule: n => n.fiber >= 4 },
  hairSkin:  { icon: "💇", kw: ["hair", "skin", "চুল", "ত্বক"] },
  eyes:      { icon: "👁️", kw: ["eye", "vision", "night blind", "চোখ", "দৃষ্টি", "রাতকানা"] },
  brain:     { icon: "🧠", kw: ["brain", "memory", "মস্তিষ্ক", "স্মৃতি"] },
  pregnancy: { icon: "🤰", kw: ["pregnan", "গর্ভ"] },
};

/* ------------------------------------------------------------------ */
/* URL <-> filter state                                                 */
/* ------------------------------------------------------------------ */

export const RANGE_KEYS = ["calories", "protein", "carbs", "fat", "fiber", "sugar", "vitC", "calcium", "iron", "potassium"];

export function parseRanges(str) {
  const out = {};
  (str || "").split(",").filter(Boolean).forEach(part => {
    const [k, min = "", max = ""] = part.split(":");
    if (RANGE_KEYS.includes(k) && (min !== "" || max !== "")) out[k] = [min, max];
  });
  return out;
}

export function stringifyRanges(ranges) {
  return Object.entries(ranges)
    .filter(([, [min, max]]) => min !== "" || max !== "")
    .map(([k, [min, max]]) => `${k}:${min}:${max}`)
    .join(",");
}
