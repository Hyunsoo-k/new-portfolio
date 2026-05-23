import type { ReactNode } from "react";

import { SectionHeader } from "./components/SectionHeader/SectionHeader";

import styles from "./SectionLayout.module.scss";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export const SectionLayout = ({ title, description, children }: Props) => {
  return (
    <section className={styles.sectionLayout}>
      <SectionHeader
        title={title}
        description={description}
      />
      {children}
    </section>
  );
};