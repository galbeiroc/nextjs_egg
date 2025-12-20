import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png"
import styles from "./header.module.css"

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg} alt="Logo" loading="eager"/>
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