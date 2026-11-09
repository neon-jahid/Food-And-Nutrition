/**
 * Point-form benefits for every food, keyed by food id.
 * Each point: { icon, kind: "good" | "warn", en, bn }
 *
 * Add a new file to the imports below (npm run test:data fails if one is missing).
 */
import m_animalExtra from "./animal-extra.js";
import m_animal from "./animal.js";
import m_fishExtra from "./fish-extra.js";
import m_foods2026b from "./foods-2026b.js";
import m_fruitsExtra from "./fruits-extra.js";
import m_others from "./others.js";
import m_produce2026 from "./produce-2026.js";
import m_produce from "./produce.js";
import m_seedsExtra from "./seeds-extra.js";
import m_spicesExtra from "./spices-extra.js";
import m_staplesExtra from "./staples-extra.js";
import m_staples from "./staples.js";
import m_vegetablesExtra1 from "./vegetables-extra1.js";
import m_vegetablesExtra2 from "./vegetables-extra2.js";

const POINTS = Object.assign({}, m_animalExtra, m_animal, m_fishExtra, m_foods2026b, m_fruitsExtra, m_others, m_produce2026, m_produce, m_seedsExtra, m_spicesExtra, m_staplesExtra, m_staples, m_vegetablesExtra1, m_vegetablesExtra2);

export default POINTS;
