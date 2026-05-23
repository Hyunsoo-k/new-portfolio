"use client";

import Link from "next/link";
import { useState } from "react";

import { Menu } from "@/types/menu";
import { MENUS } from "@/consts/menus";

import styles from "./Navigation.module.scss";


export const Navigation = () => {
  const [selected, setSelected] = useState<Menu | null>(null);

  const handleMenuClick = (menu: Menu) => {
    setSelected(menu);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {MENUS.map((menu: Menu) => (
          <li key={menu} className={`${styles.item} ${selected === menu ? styles.selected : ""}`}>
            <Link href={`#${menu}`} onClick={() => handleMenuClick(menu)}>{menu}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};