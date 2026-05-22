import Link from "next/link";

import { Burger } from "./components/Burger/Burger";
import { Navigation } from "./components/Navigation/Navigation";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Burger />
        <Link href="/" className={styles.logoLink}>
          <h1 className={styles.logo}>HYUNSOO KIM</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};