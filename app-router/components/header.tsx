import Link from "next/link";

import logoImg from "@/assets/logo.png"
import styles from "./header.module.css"

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img src={logoImg.src} alt="Logo" />
        Next Level Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="community">Foodies Commnunity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}