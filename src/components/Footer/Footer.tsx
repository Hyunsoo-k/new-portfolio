import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { SiBlogger } from "react-icons/si";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© Hyunsoo Kim all rights reserved</p>
      <ul className={styles.urlList}>
        <li className={styles.item}>
          <Link
            href="https://github.com/Hyunsoo-k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className={`${styles.icon} ${styles.github}`} />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="https://dog-foot.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiBlogger className={`${styles.icon} ${styles.blog}`} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};