import Link from "next/link";
import Image from "next/image";

import HeaderBackground from "./header-background";
import NavLink from "./navlink";
import logoImg from "@/assets/logo.png";
import styles from "./header.module.css";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="Logo" loading="eager" />
          Next Level Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Commnunity</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
