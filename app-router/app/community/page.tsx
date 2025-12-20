import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

import styles from "./page.module.css";

const images = [
  {
    image: mealIcon,
    alt: "A delicious meal",
    description: "Share & discover recipes",
  },
  {
    image: communityIcon,
    alt: "A crowd of people, cooking",
    description: "Find new friends & like-minded people",
  },
  {
    image: eventsIcon,
    alt: "A crowd of people at a cooking event",
    description: "Participate in exclusive events",
  },
];

export default function CommunityPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          One shared passion: <span className={styles.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={styles.main}>
        <h2>Community Perks</h2>
        <ul className={styles.perks}>
          {images.map((img, index) => (
            <li key={index}>
              <Image src={img.image} alt={img.alt} />
              <p>{img.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
