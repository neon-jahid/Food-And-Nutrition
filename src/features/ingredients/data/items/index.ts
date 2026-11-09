/* Every item file must be listed here (scripts/check-data.mjs fails otherwise). */
import preservativesAntioxidants from "./preservatives-antioxidants.json";
import sweeteners from "./sweeteners.json";
import colors from "./colors.json";
import flavorsAcids from "./flavors-acids.json";
import texture from "./texture.json";
import functional from "./functional.json";
import processing from "./processing.json";

export default [...preservativesAntioxidants, ...sweeteners, ...colors, ...flavorsAcids, ...texture, ...functional, ...processing];
