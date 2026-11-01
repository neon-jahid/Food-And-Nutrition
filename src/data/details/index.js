/**
 * Rich health content (about, season, benefits, goodFor, howToEat, cautions) keyed by food id.
 * Every *.js file in this folder (except this one) is merged automatically.
 */
const modules = import.meta.glob(["./*.js", "!./index.js"], { eager: true });

const DETAILS = Object.assign({}, ...Object.values(modules).map(m => m.default || {}));

export default DETAILS;
