import credits from "./data/imageCredits.json";
import plantImages from "./data/plantImages.json";

/** A plant's photo: its food photo when it is also a food, otherwise its own. */
export const plantPhoto = p => (p.foodId ? credits[p.foodId] : plantImages[p.id]);
