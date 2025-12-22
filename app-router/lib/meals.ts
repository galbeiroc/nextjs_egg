import sql from "better-sqlite3";

const db = sql("meals.db");

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
