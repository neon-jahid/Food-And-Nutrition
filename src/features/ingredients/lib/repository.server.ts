/*
 * Full dataset, used at build time by the server components only (it never reaches the browser).
 * To connect a database, keep these function signatures and fetch inside them.
 */
import items from "../data/items";
import articles from "../data/articles";
import categories from "../data/categories.json";
import labels from "../data/labels.json";
import images from "../data/images";
import structures from "../data/generated/structures.json";
import type { ApplicationId, Article, Category, CategoryId, ImageAsset, Ingredient, StatusLabel, Structure } from "../types";

const ITEMS = items as unknown as Ingredient[];
const ARTICLES = articles as unknown as Article[];

export const allIngredients = (): Ingredient[] => ITEMS;
export const getIngredient = (id: string): Ingredient | undefined => ITEMS.find(x => x.id === id);
export const allCategories = (): Category[] => categories as Category[];
export const getCategory = (id: string): Category | undefined => allCategories().find(c => c.id === id);
export const allStatusLabels = (): StatusLabel[] => labels as StatusLabel[];
export const allArticles = (): Article[] => ARTICLES;
export const getArticle = (slug: string): Article | undefined => ARTICLES.find(a => a.slug === slug);
export const ingredientsIn = (id: CategoryId): Ingredient[] => ITEMS.filter(x => x.category === id || x.alsoIn?.includes(id));
export const categoryCount = (id: CategoryId): number => ingredientsIn(id).length;

/** Most recent date any record was checked against its sources. */
export const lastChecked = (): string => ITEMS.reduce((m, x) => (x.verification.checkedOn > m ? x.verification.checkedOn : m), "");

const IMAGES = images as unknown as Record<string, ImageAsset>;
export const getImage = (key: string): ImageAsset | undefined => IMAGES[key];
export const applicationImage = (id: ApplicationId) => IMAGES[`app:${id}`];
export const categoryImage = (id: CategoryId) => IMAGES[`cat:${id}`];
/** The ingredient or its source, otherwise a food type it is used in, otherwise its category. */
export const ingredientPhoto = (x: Ingredient): ImageAsset | undefined => IMAGES[x.id] ?? x.applications.map(applicationImage).find(Boolean) ?? categoryImage(x.category);
export const polymerImage = (id: string) => IMAGES[`polymer:${id}`];
export const getStructure = (id: string) => (structures as unknown as Record<string, Structure>)[id];
