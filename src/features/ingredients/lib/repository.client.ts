/* Browser-side data access. Search data is small and bundled; the rest loads when a tool needs it. */
import searchIndex from "../data/generated/search-index.json";
import categories from "../data/categories.json";
import vocab from "../data/vocab.json";
import labels from "../data/labels.json";
import type { BasicIngredient } from "./decoder";
import type { Category, CategoryId, DetailEntry, Localized, SearchEntry, StatusId, StatusLabel } from "../types";

export const ENTRIES = searchIndex as unknown as SearchEntry[];
export const CATEGORIES = categories as Category[];
export const STATUS_LABELS = labels as StatusLabel[];
export const VOCAB = vocab as unknown as Record<"applications" | "origins" | "benefits" | "riskKinds" | "evidence" | "strength" | "flags" | "allergens", Record<string, Localized>>;

export const entryById = (id: string) => ENTRIES.find(e => e.id === id);
export const categoryName = (id: CategoryId) => CATEGORIES.find(c => c.id === id)?.name;
export const statusLabel = (id: StatusId) => STATUS_LABELS.find(l => l.id === id);

let details: Promise<Map<string, DetailEntry>> | null = null;
/** Regulatory and evidence fields. Retries on the next call if the download failed. */
export function loadDetails(): Promise<Map<string, DetailEntry>> {
  details ??= import("../data/generated/details.json")
    .then(m => new Map((m.default as unknown as DetailEntry[]).map(d => [d.id, d])))
    .catch(e => {
      details = null;
      throw e;
    });
  return details;
}

let basics: Promise<BasicIngredient[]> | null = null;
export function loadBasics(): Promise<BasicIngredient[]> {
  basics ??= import("../data/basics.json")
    .then(m => m.default as BasicIngredient[])
    .catch(e => {
      basics = null;
      throw e;
    });
  return basics;
}
