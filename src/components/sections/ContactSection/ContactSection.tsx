import { SectionLayout } from "../SectionLayout/SectionLayout";
import { Contact } from "@/components/Contact/Contact";

import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <SectionLayout
        title="Contact"
        description="새로운 프로젝트 제안이나 협업 문의는 언제든 환영합니다. 편하게 연락주세요."
        isBgSubtle={false}
      >
        <Contact />
      </SectionLayout>
    </div>
  );
};