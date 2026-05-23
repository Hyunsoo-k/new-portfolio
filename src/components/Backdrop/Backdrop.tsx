"use client";

import { useEffect } from "react";

import { useBackdropStore } from "@/store/useBackdropStore";

import styles from "./Backdrop.module.scss";

export const Backdrop = () => {
  const { isOpen, close } = useBackdropStore();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return <div onClick={close} className={styles.backdrop} />
};