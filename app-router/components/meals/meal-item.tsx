import Image from "next/image";
import Link from "next/link";
import { type MealItem } from "./meals-grid";

import styles from "./meal-item.module.css";

type MealItemProps = Omit<MealItem, "id">;

export default function MealItem({
  title,
  image,
  summary,
  creator,
  slug,
}: MealItemProps) {
  console.log(title)
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>By {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
