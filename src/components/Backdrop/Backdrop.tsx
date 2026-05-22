"use client";

import { useBackdropStore } from "@/store/useBackdropStore";

import styles from "./Backdrop.module.scss";

export const Backdrop = () => {
  const { isOpen, close } = useBackdropStore();

  if (!isOpen) {
    return null;
  }

  return <div onClick={close} className={styles.backdrop} />
};