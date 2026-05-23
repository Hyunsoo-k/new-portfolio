"use client";

import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

import { Menu } from "@/types/menu";
import { MENUS } from "@/consts/menus";
import { useSidebarStore } from "@/store/useSidebarStore";

import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const { isOpen, close } = useSidebarStore();

  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : styles.close}`}>
      <header className={styles.header}>
        <RxCross1 className={styles.crossIcon} />
      </header>
      <ul className={styles.list}>
        {MENUS.map((menu: Menu) => (
          <li key={menu} onClick={close} className={styles.item}>
            <Link href={`/#${menu}`}>{menu}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};