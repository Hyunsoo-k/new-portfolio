import type { ReactNode } from "react";

import { SectionHeader } from "./components/SectionHeader/SectionHeader";

import styles from "./SectionLayout.module.scss";

type Props = {
  title: string;
  description: string;
  isBgSubtle: boolean;
  children: ReactNode;
};

export const SectionLayout = ({ title, description, isBgSubtle, children }: Props) => {
  return (
    <section id={title} className={`${styles.sectionLayout} ${isBgSubtle ? styles.subtle : ""}`}>
      <div className={styles.inner}>
        <SectionHeader
          title={title}
          description={description}
        />
        {children}
      </div>
    </section>
  );
};