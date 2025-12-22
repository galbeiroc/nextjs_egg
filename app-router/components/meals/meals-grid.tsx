import MealItem from './meal-item';

import styles from './meals-grid.module.css';

export interface MealItem {
  id: string;
  title: string;
  image: string;
  summary: string;
  creator: string;
  slug: string;
}

interface MealsGridProps {
  meals: MealItem[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}><MealItem {...meal} /></li>
      ))}
    </ul>
  );
}
