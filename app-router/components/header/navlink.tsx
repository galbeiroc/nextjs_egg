"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navlink.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href)
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
    >
      {children}
    </Link>
  );
}
