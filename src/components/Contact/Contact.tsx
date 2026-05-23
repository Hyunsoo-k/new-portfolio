import { DropALine } from "./componets/DropALine/DropALine";

import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.infoArea}>
        <h3 className={styles.title}>Email</h3>
        <p className={styles.email}>eng.hyunsoo@gmail.com</p>
      </div>
      <div className={styles.requestArea}>
        <h3 className={styles.title}>Drop A Line</h3>
        <DropALine />
      </div>
    </div>
  );
};