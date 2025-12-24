import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { MealItem } from "@/app/meals/[mealSlug]/page";

const db = sql("meals.db");

type Meal = Omit<MealItem, "slug, id">;

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Database connection failed");
  const stmt = db.prepare("SELECT * FROM meals");
  return stmt.all();
}

export function getMeal(mealSlug: string) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?").get(mealSlug);
  return stmt;
}

export function saveMeal(meal: Meal) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);
  
}
