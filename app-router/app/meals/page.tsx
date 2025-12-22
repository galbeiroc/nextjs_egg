import Link from 'next/link';

import MealsGrid, { MealsGridProps } from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import styles from './page.module.css';
import { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals() as MealsGridProps['meals'];

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, created{' '}
          <span className={styles.highlight}>by you.</span>
        </h1>
        <p>Choose your favorite meals and cook it yourself. It is easy and fun.</p>
        <p className={styles.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}