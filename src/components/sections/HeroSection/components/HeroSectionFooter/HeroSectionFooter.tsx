"use client";

import { Button } from "@/components/Button/Button";

import styles from "./HeroSectionFooter.module.scss";

export const HeroSectionFooter = () => {

  return (
    <footer className={styles.heroSectionFooter}>
      <Button
        as="a"
        text="View My Works"
        variant="active"
        href="/#Projects"
      />
      <Button
        as="a"
        isExternal={true}
        text="Go To Git"
        variant="default"
        href="https://github.com/Hyunsoo-k"
      />
    </footer>
  )
};