import styles from "./sectionHeader.module.scss";

type Props = {
  title: string;
  description?: string;
};

export const SectionHeader = ({ title, description }: Props) => {
  return (
    <header className={styles.sectionHeader}>
      <h2 className={styles.title}>{title}</h2>
      {description && (<p className={styles.description}>{description}</p>)}
    </header>
  );
};