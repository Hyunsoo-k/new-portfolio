import { HeroSection } from "@/components/HeroSection/HeroSeciotn";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
    </div>
  );
}
