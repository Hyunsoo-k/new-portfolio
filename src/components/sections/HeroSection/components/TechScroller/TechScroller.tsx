import Image from "next/image";

import { FE_ICONS, BE_ICONS } from "@/consts/skillIcons";

import styles from "./TechScroller.module.scss";

export const TechScroller = () => {
  return (
    <div className={styles.techScroller}>
      <ul className={styles.track}>
        {[...FE_ICONS, ...FE_ICONS, ...FE_ICONS, ...FE_ICONS].map((icon, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.iconWrapper}>
              <Image src={icon.src} alt={icon.alt} fill className={styles.icon} />
            </div>
          </li>
        ))}
      </ul>
      <ul className={styles.track}>
        {[ ...BE_ICONS, ...BE_ICONS, ...BE_ICONS, ...BE_ICONS].map((icon, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.iconWrapper}>
              <Image src={icon.src} alt={icon.alt} fill className={styles.icon} />
            </div>
          </li>
        ))}
      </ul>
      <ul className={styles.track}>
        {[...[...FE_ICONS].reverse(), ...[...FE_ICONS].reverse(), ...[...FE_ICONS].reverse(), ...[...FE_ICONS].reverse()].map((icon, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.iconWrapper}>
              <Image src={icon.src} alt={icon.alt} fill className={styles.icon} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};