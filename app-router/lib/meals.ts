import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { MealItem } from "@/app/meals/[mealSlug]/page";

const db = sql("meals.db");

export type Meal = Omit<MealItem, "slug" | "id"> & { image: File };

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

export async function saveMeal(meal: Meal) {
  const newMeal: Omit<MealItem, "id"> = {
    ...meal,
    instructions: xss(meal.instructions),
    image: "",
    slug: "",
  };
  newMeal.slug = slugify(meal.title, { lower: true });

  const extension = meal.image.name.split(".").pop();
  const fileName = `${newMeal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Save image failed!");
    }

    newMeal.image = `/images/${fileName}`;

    db.prepare(
      `
        INSERT INTO meals
          (title, summary, instructions, creator, creator_email, image, slug)
          VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
          )
      `
    ).run(newMeal);
  });
}
