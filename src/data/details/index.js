/**
 * Rich health content (about, season, benefits, goodFor, howToEat, cautions) keyed by food id.
 * Add a new file to the imports below (npm run test:data fails if one is missing).
 */
import m_fruitsExtra from "./fruits-extra.js";
import m_fruits from "./fruits.js";
import m_produce2026 from "./produce-2026.js";
import m_vegetablesExtra1 from "./vegetables-extra1.js";
import m_vegetablesExtra2 from "./vegetables-extra2.js";
import m_vegetables from "./vegetables.js";

const DETAILS = Object.assign({}, m_fruitsExtra, m_fruits, m_produce2026, m_vegetablesExtra1, m_vegetablesExtra2, m_vegetables);

export default DETAILS;
