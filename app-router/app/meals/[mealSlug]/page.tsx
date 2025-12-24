import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";
import { MealItemProps } from "@/components/meals/meal-item";

import styles from "./page.module.css";

export type MealItem = MealItemProps & {
  instructions: string;
  creator_email: string;
};

export default async function MealsDetailPage({
  params,
}: {
  params: { mealSlug: string };
}) {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug) as MealItem;

  if (!meal) {
    notFound();
  }

  const { title, image, summary, creator, creator_email, instructions } = meal;
  const instructionsHtml = instructions.replaceAll("\n", "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructionsHtml }}
        ></p>
      </main>
    </>
  );
}
