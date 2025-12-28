"use server";

import { redirect } from "next/navigation";
import { Meal, saveMeal } from "./meals";

function isValidText(text: string | null) {
  return !text || text.trim() === "";
}

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  } as Meal;

  if (
    isValidText(meal.title) ||
    isValidText(meal.summary) ||
    isValidText(meal.instructions) ||
    isValidText(meal.creator) ||
    isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid iput");
  }
  
  await saveMeal(meal as Meal);
  redirect("/meals");
}
