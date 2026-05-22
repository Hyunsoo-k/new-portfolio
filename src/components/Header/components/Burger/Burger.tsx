"use client";

import { CiMenuBurger } from "react-icons/ci";

import { useSidebarStore } from "@/store/useSidebarStore";

import styles from "./Burger.module.scss";

export const Burger = () => {
  const { open: openSidebar } = useSidebarStore();

  return (
    <CiMenuBurger onClick={openSidebar} className={styles.burger} />
  );
};