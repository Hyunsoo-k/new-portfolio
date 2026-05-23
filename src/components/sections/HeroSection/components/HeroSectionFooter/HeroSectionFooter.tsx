"use client";

import { Button } from "@/components/Button/Button";

import styles from "./HeroSectionFooter.module.scss";

export const HeroSectionFooter = () => {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView();
  };

  const handleGoToGit = () => {
    window.open("https://github.com/Hyunsoo-k", "_blank");
  };

  return (
    <footer className={styles.heroSectionFooter}>
      <Button text="View My Works" variant="active" onClick={handleScrollToProjects} />
      <Button text="Go To Git" variant="default" onClick={handleGoToGit} />
    </footer>
  )
};