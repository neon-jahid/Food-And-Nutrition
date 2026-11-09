import { CATEGORIES, FOODS, SUBGROUPS } from "./data/foods.js";
import POINTS from "./data/points/index.js";
import DETAILS from "./data/details/index.js";
import { healthTags } from "./utils.js";
import { GOALS } from "./searchMeta.js";

export { GOALS, RANGE_KEYS, parseRanges, stringifyRanges } from "./searchMeta.js";

/* ------------------------------------------------------------------ */
/* Index                                                                */
/* ------------------------------------------------------------------ */

const BN_TO_EN_DIGIT = s => s.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d));
// digits are converted here so the query and the index always agree ("বি১২", "b12")
const norm = s => BN_TO_EN_DIGIT(String(s).toLowerCase().normalize("NFC")).replace(/[()\[\],.;:!?"'’—–-]/g, " ").replace(/\s+/g, " ").trim();

/** Extra Banglish / common names people type (names already in foods.js are searched anyway). */
const ALIASES = {
  apple: "apel", banana: "kola", mango: "aam am", orange: "komla", papaya: "pepe", guava: "peyara", pineapple: "anaros",
  watermelon: "tormuj", jackfruit: "kathal kanthal", litchi: "lichu", pomegranate: "dalim anar", grapes: "angur",
  spinach: "palong palong shak", redamaranth: "lal shak", potato: "alu aloo", sweetpotato: "misti alu", tomato: "tometo",
  carrot: "gajor", cauliflower: "fulkopi phulkopi", cabbage: "badhakopi bandhakopi", eggplant: "begun brinjal",
  bittergourd: "korola karela", pumpkin: "misti kumra kumro", okra: "dheros bhindi ladies finger", onion: "peyaj piyaj",
  cucumber: "shosha", lemon: "lebu", dates: "khejur", raisins: "kishmish", lau: "lau", radish: "mula",
  whiterice: "bhat vat rice", brownrice: "lal chal bhat", atta: "ata flour", roti: "ruti chapati", bread: "pauruti",
  corn: "bhutta", lentil: "masoor dal moshur dal", mung: "moong dal", chickpea: "chola chana chhola", kidneybean: "rajma",
  blackgram: "mashkalai dal urad dal", peas: "motorshuti", soybean: "soyabean",
  hilsa: "ilish", rohu: "rui", katla: "katla", shrimp: "chingri", golda: "golda chingri", crab: "kakra",
  chicken: "murgi murgir mangsho", beef: "gorur mangsho gosht", mutton: "khashir mangsho", duck: "hasher mangsho",
  egg: "dim deem", duckegg: "hasher dim", milk: "dudh", yogurt: "doi dahi curd", butter: "makhon", ghee: "ghi",
  almond: "kathbadam", peanut: "chinabadam badam", cashew: "kaju", walnut: "akhrot", sesame: "til", coconut: "narkel narikel",
  turmeric: "holud", ginger: "ada", garlic: "roshun rosun", greenchili: "kacha morich morich", coriander: "dhonepata dhone",
  mint: "pudina", cumin: "jira jeera", cinnamon: "daruchini", fenugreek: "methi", greentea: "cha tea", coffee: "kofi",
  coconutwater: "daber pani dab",
  muskmelon: "khormuj bangi cantaloupe melon", passionfruit: "passion fruit", mulberry: "tut tut fol", fig: "anjir dumur",
  greenbanana: "kacha kola kachkola plantain", turnip: "shalgom salgom", yam: "mete alu meta alu", springonion: "peyaj pata piyaj pata scallion",
  lettuce: "letus salad pata", frenchbean: "forashi shim green beans", squash: "iskus skoyash chayote", mishtidoi: "misti doi",
  pomelo: "jambura batabi lebu grapefruit", jamrul: "jamrul rose apple", longan: "ashfol ashphal", woodapple: "kodbel kotbel kothbel kathbel",
  patshak: "pat shak paat jute", dhundul: "dhundol luffa", mocha: "kolar mocha banana blossom", semai: "shemai vermicelli",
  instantnoodles: "noodles maggi ramen", khesari: "khesari dal", pigeonpea: "arhar dal orhor toor dal", chapila: "chapila", foli: "foli fholi",
  goatmilk: "chagoler dudh", icecream: "ice cream kulfi", makhana: "makhana fox nut lotus seed", sugarcanejuice: "akher rosh akh",
  soymilk: "soya milk", pantabhat: "panta vat pantabhat", aloobhorta: "alu vorta alu bhorta", sandesh: "shondesh sondesh",
  chickencurry: "murgir jhol murgir torkari chicken", fishcurry: "macher jhol mach torkari", roshogolla: "rasgulla rosogolla", singara: "samosa",
};

const groupOf = {};
Object.values(SUBGROUPS).forEach(gs => gs.forEach(g => g.ids.forEach(id => (groupOf[id] = g))));

/** Positive health text for a food: good points + "good for" + benefit titles (both languages). */
function goodTexts(id) {
  const out = [];
  (POINTS[id] || []).filter(p => p.kind !== "warn").forEach(p => out.push({ en: p.en, bn: p.bn }));
  const d = DETAILS[id];
  if (d) {
    d.goodFor.forEach(g => out.push({ en: `${g.en[0]} — ${g.en[1]}`, bn: `${g.bn[0]} — ${g.bn[1]}` }));
    d.benefits.forEach(b => out.push({ en: `${b.en[0]} — ${b.en[1]}`, bn: `${b.bn[0]} — ${b.bn[1]}` }));
  }
  return out;
}

const INDEX = FOODS.map(f => {
  const cat = CATEGORIES.find(c => c.id === f.cat);
  const g = groupOf[f.id];
  const texts = goodTexts(f.id);
  const warns = (POINTS[f.id] || []).filter(p => p.kind === "warn").map(p => ({ en: p.en, bn: p.bn }));
  return {
    food: f,
    names: norm(`${f.en} ${f.bn} ${f.id} ${ALIASES[f.id] || ""}`),
    nameEn: norm(f.en),
    nameBn: norm(f.bn),
    alias: norm(ALIASES[f.id] || ""),
    cats: norm(`${cat.en} ${cat.bn} ${g ? `${g.en} ${g.bn}` : ""}`),
    texts: texts.map(x => ({ ...x, hay: norm(`${x.en} ${x.bn}`) })),
    warns: warns.map(x => ({ ...x, hay: norm(`${x.en} ${x.bn}`) })),
    goodHay: norm(texts.map(x => `${x.en} ${x.bn}`).join(" ")),
  };
});

/* ------------------------------------------------------------------ */
/* Health goals: nutrient rule OR keyword found in positive text       */
/* ------------------------------------------------------------------ */



function matchesGoal(entry, goalId) {
  const g = GOALS[goalId];
  if (!g) return true;
  if (g.rule && g.rule(entry.food.n)) return true;
  return g.kw.some(k => entry.goodHay.includes(norm(k)));
}

/** First positive text that mentions the goal — shown on the card as "why it matched". */
function goalSnippet(entry, goalId) {
  const g = GOALS[goalId];
  return entry.texts.find(x => g.kw.some(k => x.hay.includes(norm(k))));
}

/* ------------------------------------------------------------------ */
/* Text search                                                          */
/* ------------------------------------------------------------------ */

const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const isLatin = s => /^[a-z0-9 ]+$/.test(s);

/** Words match from the start of a word: "iron" ≠ "environment", "চুল" matches "চুলের". */
function matcher(needle) {
  const re = new RegExp(`(^|\\s)${escapeRe(needle)}`);
  return hay => re.test(hay);
}

/** Match against the food's name / category only. */
function nameMatch(entry, phrase, tokens) {
  if (entry.nameEn === phrase || entry.nameBn === phrase) return 120;
  if (entry.nameEn.startsWith(phrase) || entry.nameBn.startsWith(phrase)) return 95;
  const m = matcher(phrase);
  if (m(entry.names)) return 75;
  if (tokens.length > 1 && tokens.every(tok => matcher(tok)(entry.names))) return 60;
  if (m(entry.cats) || (tokens.length > 1 && tokens.every(tok => matcher(tok)(`${entry.names} ${entry.cats}`)))) return 30;
  return 0;
}

/** The query IS this food or category, not merely the start of a longer name ("আঁশ" vs "আঁশফল"). */
function namesFood(entry, phrase) {
  const whole = new RegExp(`(^|\\s)${escapeRe(phrase)}(\\s|$)`);
  const first = new RegExp(`^${escapeRe(phrase)}(\\s|$)`);
  return first.test(entry.nameEn) || first.test(entry.nameBn) || whole.test(entry.alias) || whole.test(entry.cats);
}

/** Match inside the benefit / health text: whole phrase first, else every word. */
function textMatch(entry, phrase, tokens) {
  const m = matcher(phrase);
  const hit = entry.texts.find(x => m(x.hay));
  if (hit) return { score: 20, snippet: hit };
  if (tokens.length < 2) return null;
  const hits = tokens.map(tok => entry.texts.find(x => matcher(tok)(x.hay)));
  return hits.every(Boolean) ? { score: 8, snippet: hits[0] } : null;
}

/**
 * @param {object} f filters: { query, category, sub, goals[], ranges{key:[min,max]}, hideUnhealthy }
 * @returns [{ food, score, snippet }]
 */
export function searchFoods(f) {
  const phrase = norm(f.query || "");
  // single Latin letters ("d" in "vitamin d") are too short to match on their own
  const tokens = phrase ? phrase.split(" ").filter(w => w.length > 1 || !isLatin(w)) : [];
  const group = f.category && SUBGROUPS[f.category]?.find(g => g.id === f.sub);
  const out = [];
  // a query that names a food or category ("আম", "fish") shows only those;
  // otherwise it is treated as a nutrient / health search ("iron", "চুল পড়া")
  const nameMode = !!phrase && INDEX.some(e => namesFood(e, phrase));

  for (const entry of INDEX) {
    const food = entry.food;
    if (f.category && f.category !== "all" && food.cat !== f.category) continue;
    if (group && !group.ids.includes(food.id)) continue;
    if (f.hideUnhealthy && healthTags(food.n).some(([, kind]) => kind === "warn")) continue;

    let ok = true;
    for (const [key, [min, max]] of Object.entries(f.ranges || {})) {
      const v = food.n[key];
      if ((min !== "" && min != null && v < +min) || (max !== "" && max != null && v > +max)) { ok = false; break; }
    }
    if (!ok) continue;
    if ((f.goals || []).some(g => !matchesGoal(entry, g))) continue;

    let score = 0, snippet = null;
    if (phrase) {
      if (nameMode) {
        score = nameMatch(entry, phrase, tokens);
        if (!score) continue;
      } else {
        // a health word can also begin a food's name: show that food, ranked, among the rest
        const named = nameMatch(entry, phrase, tokens);
        const r = textMatch(entry, phrase, tokens);
        if (!named && !r) continue;
        score = Math.max(named, r?.score || 0);
        snippet = r?.snippet || null;
      }
    }
    if (!snippet && f.goals?.length) snippet = goalSnippet(entry, f.goals[0]) || null;
    out.push({ food, score, snippet });
  }
  return out;
}

/** Quick suggestions for the search box (name / category / benefit match). */
export function suggest(query, limit = 6) {
  if (!norm(query)) return [];
  return searchFoods({ query })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
