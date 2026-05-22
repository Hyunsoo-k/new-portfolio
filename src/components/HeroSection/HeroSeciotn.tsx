import { TechScroller } from "./components/TechScroller/TechScroller";

import { HeroSectionFooter } from "./components/HeroSectionFooter/HeroSectionFooter";

import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <TechScroller />
      <div className={styles.inner}>
        <h2 className={styles.title}>
          더 나은 시스템 아키텍쳐를<br />
          고려하고 적용하는 개발자.
        </h2>
        <p className={styles.description}>
          변화와 성장을 두려워하지 않는<br />
          <span className={styles.emphasize}>서버, 클라이언트</span> 개발자 <span className={styles.emphasize}>김현수</span>입니다.
        </p>
        <HeroSectionFooter />
      </div>
    </section>
  );
};