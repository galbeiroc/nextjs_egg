"use client";

export default function MealsError({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>An Error Occurred!</h1>
      <p>{error.message}. Please try again later.</p>
    </main>
  );
}
