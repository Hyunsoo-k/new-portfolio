import { SectionLayout } from "../SectionLayout/SectionLayout";
import { Footer } from "@/components/Footer/Footer";

import styles from "./MoreSection.module.scss";

export const MoreSection = () => {
  return (
    <div className={styles.moreSection}>
      <SectionLayout
        title="Other"
        description=""
        isBgSubtle={true}
      >
        <ul className={styles.list}>
          <li><p>· 코드잇 스프린트 Frontend 분야 부트캠프 수료</p></li>
          <li><p>· 개발 블로그 운영 (https://dog-foot.tistory.com)</p></li>
          <li><p>· 방송통신대학교(컴퓨터과학과) 2025 ~ 재학중</p></li>
        </ul>
        <Footer />
      </SectionLayout>
    </div>
  );
};