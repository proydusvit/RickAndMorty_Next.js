import React, { FC } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/" className={pathname === "/" ? styles.active : ""}>
        Rick and Morty Wiki
      </Link>
      <Link
        href="/characters"
        className={pathname === "/characters" ? styles.active : ""}
      >
        Characters
      </Link>
      <Link
        href="/location"
        className={pathname === "/location" ? styles.active : ""}
      >
       Location
      </Link>
      <Link
        href="/episodes"
        className={pathname === "/episodes" ? styles.active : "" }
      >
      Episodes
      </Link>

    

    </header>
  );
};

export default Header;
