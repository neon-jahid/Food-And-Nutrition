/**
 * Point-form benefits for every food, keyed by food id.
 * Each point: { icon, kind: "good" | "warn", en, bn }
 *
 * Every *.js file in this folder (except this one) is merged automatically,
 * so adding a new category file needs no change here and a missing file
 * never breaks the site.
 */
const modules = import.meta.glob(["./*.js", "!./index.js"], { eager: true });

const POINTS = Object.assign({}, ...Object.values(modules).map(m => m.default || {}));

export default POINTS;
