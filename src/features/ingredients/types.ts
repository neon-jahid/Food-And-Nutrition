/*
 * Data contract for the "What's Inside Your Food?" section.
 *
 * Content lives in JSON under ./data, separate from the UI, and is reached through
 * ./lib/repository.ts. To move to a real database, re-implement the repository against an API
 * and keep these types. scripts/check-ingredients.mjs enforces the rules written here.
 */

export type Lang = "en" | "bn";
/** Text in both site languages. Bangla uses Bangla digits. */
export interface Localized {
  en: string;
  bn: string;
}

export const CATEGORY_IDS = [
  "preservatives", "artificial-sweeteners", "natural-sweeteners", "food-colors", "flavor-enhancers",
  "artificial-flavors", "emulsifiers", "stabilizers", "thickeners", "acidity-regulators", "antioxidants",
  "anti-caking-agents", "leavening-agents", "humectants", "glazing-agents", "modified-starches",
  "fortifying-agents", "processing-aids",
] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

/**
 * natural: extracted from a plant, animal or mineral source with physical processing.
 * natural-derived: from a natural source but chemically modified (e.g. modified starch, E471).
 * fermentation: made by microbial fermentation (e.g. xanthan gum, most citric acid).
 * nature-identical: made by synthesis, chemically the same as a molecule found in nature.
 * synthetic: made by synthesis, with no counterpart commonly found in food.
 * Origin says nothing about safety.
 */
export const ORIGINS = ["natural", "natural-derived", "fermentation", "nature-identical", "synthetic"] as const;
export type Origin = (typeof ORIGINS)[number];

export const APPLICATION_IDS = [
  "soft-drinks", "juices", "instant-noodles", "biscuits", "chips-snacks", "chocolate-confectionery",
  "sauces-condiments", "bread-bakery", "dairy", "frozen-desserts", "canned-foods", "processed-meat",
  "jams-spreads", "breakfast-cereals", "oils-fats", "flour-grains", "salt-seasonings", "tabletop-sweeteners",
  "infant-foods", "supplements", "beer-wine",
] as const;
export type ApplicationId = (typeof APPLICATION_IDS)[number];

/** The six evidence labels; their meaning is explained in data/labels.json. No green/red scoring. */
export const STATUS_IDS = [
  "gras-conditions", "approved-specific", "within-limits", "evidence-developing", "known-adverse", "restricted-some",
] as const;
export type StatusId = (typeof STATUS_IDS)[number];

export const BENEFIT_KINDS = ["preservation", "shelf-life", "texture", "taste", "antioxidant", "fortification", "processing", "appearance", "sugar-reduction"] as const;
export type BenefitKind = (typeof BENEFIT_KINDS)[number];

export const RISK_KINDS = ["adverse-effect", "side-effect", "dose-dependent", "allergy-intolerance", "population", "uncertainty"] as const;
export type RiskKind = (typeof RISK_KINDS)[number];

/** What kind of study the statement rests on. */
export const EVIDENCE_TYPES = ["human", "animal", "laboratory", "theoretical"] as const;
export type EvidenceType = (typeof EVIDENCE_TYPES)[number];

/** established: accepted by regulators or consistent human data. preliminary: early signals. conflicting: studies disagree. */
export const EVIDENCE_STRENGTHS = ["established", "preliminary", "conflicting"] as const;
export type EvidenceStrength = (typeof EVIDENCE_STRENGTHS)[number];

export const FLAG_IDS = [
  "pku", "sulfite-sensitivity", "polyol-laxative", "azo-color-eu-warning", "insect-derived", "animal-derived",
  "contains-soy", "contains-milk", "contains-egg", "contains-gluten", "contains-fish", "contains-sesame", "contains-nuts",
  "infants-caution", "pregnancy-caution", "kidney-caution", "medicine-interaction",
] as const;
export type FlagId = (typeof FLAG_IDS)[number];

export interface Reference {
  /** unique within the ingredient, e.g. "efsa-2016" */
  id: string;
  org: string;
  title: string;
  year: number;
  /** a page the author actually opened, or that a search returned for this exact document */
  url: string;
  kind: "regulatory" | "peer-reviewed" | "agency-guidance";
}

export type Adi =
  | { type: "numeric"; value: number; low?: number; unit: "mg/kg bw/day"; note?: Localized }
  | { type: "not-specified"; note?: Localized }   // authority saw no need for a numerical ADI
  | { type: "none-established"; note?: Localized } // authority reviewed it and did not set one
  | { type: "withdrawn"; note?: Localized };      // a previous ADI was withdrawn

export interface RegulatoryEntry {
  /** e.g. "EFSA", "JECFA", "US FDA", "European Commission", "FSANZ", "Codex", "FSSAI" */
  authority: string;
  jurisdiction: Localized;
  status: Localized;
  adi?: Adi;
  limits?: Localized;
  conditions?: Localized;
  /** year or year-month of the assessment or rule: "2016" or "2023-07" */
  date: string;
  sourceId: string;
}

export interface Risk {
  kind: RiskKind;
  evidence: EvidenceType;
  strength: EvidenceStrength;
  text: Localized;
  sourceIds: string[];
}

export interface Benefit {
  kind: BenefitKind;
  text: Localized;
}

export interface Verification {
  /**
   * source-checked: every number and approval was checked against the linked document (on the page itself or a search excerpt of it).
   * partial: some claims could not be confirmed; see notes.
   * illustrative: placeholder content, not to be relied on.
   */
  status: "source-checked" | "partial" | "illustrative";
  checkedOn: string; // YYYY-MM-DD
  notes?: string;
}

export interface Ingredient {
  id: string; // URL slug
  name: Localized;
  commonNames: string[];
  /** every way it is written on packaging, lower-case; used by the Label Decoder */
  labelNames: string[];
  chemicalName?: string;
  eNumber?: string; // "E211"
  ins?: string;     // "211"
  formula?: string; // "C7H5NaO2"
  category: CategoryId;
  alsoIn?: CategoryId[];
  origin: Origin;
  originNote?: Localized;
  applications: ApplicationId[];
  /** one sentence for cards and search results, under 170 characters in English */
  summary: Localized;
  whatIs: Localized;
  whyUsed: Localized;
  howItWorks: Localized;
  /** short phrases for the comparison table, e.g. "active below pH 4.5" */
  properties: Localized[];
  benefits: Benefit[];
  risks: Risk[];
  /** hazard versus real exposure, in plain words, for this ingredient */
  riskContext: Localized;
  /** first is the primary label */
  statusLabels: StatusId[];
  regulatory: RegulatoryEntry[];
  flags: FlagId[];
  references: Reference[];
  verification: Verification;
}

export interface Category {
  id: CategoryId;
  name: Localized;
  tagline: Localized;
  description: Localized;
  education: { heading: Localized; body: Localized }[];
}

export interface StatusLabel {
  id: StatusId;
  name: Localized;
  meaning: Localized;
  context: Localized;
}

export interface ArticleSection {
  heading: Localized;
  paragraphs: Localized[];
  bullets?: Localized[];
}

export interface Article {
  slug: string;
  title: Localized;
  dek: Localized;
  minutes: number;
  takeaways: Localized[];
  sections: ArticleSection[];
  references: Reference[];
  relatedIngredients: string[];
  checkedOn: string;
}

export const IMAGE_SUBJECTS = ["ingredient", "source", "food-type", "process", "microscopy", "laboratory", "structure-diagram"] as const;
export type ImageSubject = (typeof IMAGE_SUBJECTS)[number];

/** A real, licensed image. Licence, author and page are recorded from the Wikimedia Commons API. */
export interface ImageAsset {
  src: string;
  sm: string;
  w: number;
  h: number;
  file: string;
  author: string;
  license: string;
  page: string;
  subject: ImageSubject;
  alt: Localized;
  caption: Localized;
}

/**
 * exact: the compound itself, from PubChem.
 * representative: one real molecule standing in for a mixture.
 * formula-unit: an ionic or network solid, where a real sample is an extended lattice.
 * none: no single structure can honestly be drawn.
 */
export type StructureKind = "exact" | "representative" | "formula-unit" | "none";

export interface Model3d {
  cid: number;
  sameAsStructure: boolean;
  atoms: [string, number, number, number][];
  bonds: [number, number, number][];
}

export type Structure =
  | { kind: "none" }
  | {
      kind: Exclude<StructureKind, "none">;
      cid: number;
      shows?: Localized;
      svg: string;
      formula: string;
      weight: number;
      iupac?: string;
      inchiKey: string;
      xlogp?: number;
      tpsa: number;
      hbd: number;
      hba: number;
      groups: string[];
      model: Model3d | null;
    };

/** Slim record for search, filters and cards (generated: data/generated/search-index.json). */
export type SearchEntry = Pick<
  Ingredient,
  "id" | "name" | "commonNames" | "labelNames" | "eNumber" | "ins" | "formula" | "category" | "alsoIn" | "origin" | "applications" | "summary" | "statusLabels" | "flags"
> & {
  verification: Verification["status"];
  hasAdi: boolean;
  photo?: Pick<ImageAsset, "src" | "sm" | "w" | "h" | "alt" | "subject">;
  structure?: { svg: string; kind: StructureKind };
};

/** Fields the comparison tool and Label Decoder need (generated: data/generated/details.json). */
export type DetailEntry = Pick<
  Ingredient,
  "id" | "whyUsed" | "properties" | "regulatory" | "riskContext"
> & {
  risks: Pick<Risk, "kind" | "evidence" | "strength" | "text">[];
  sources: Pick<Reference, "id" | "org" | "year" | "url">[];
};
