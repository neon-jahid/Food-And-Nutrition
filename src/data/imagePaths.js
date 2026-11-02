/*
 * Food photo URLs without the full credits file (kept small so every page can import it).
 * Every food has /images/foods/<id>.webp (720px); most also have a 1600px /images/foods/hd/<id>.webp.
 * Credits (author, licence) live in imageCredits.json — scripts/check-data.mjs keeps the two in sync.
 */
export const NO_HD = new Set([
  "banana", "brownrice", "corn", "hilsa", "chickenliver", "cheddar", "greentea", "mrigel", "koi", "shing",
  "boal", "chitol", "baim", "puti", "rupchanda", "loitta", "bel", "amloki", "lau", "mustardgreens",
  "mushroom", "milkpowder", "soychunks", "suji", "jilapi", "kalojira", "payesh", "piyaju", "saffron", "skimmilk",
  "dhundul", "khesari",
]);

export const imageSrc = id => `/images/foods/${id}.webp`;
export const imageHd = id => (NO_HD.has(id) ? null : `/images/foods/hd/${id}.webp`);
