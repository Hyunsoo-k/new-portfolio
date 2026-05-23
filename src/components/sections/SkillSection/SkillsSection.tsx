import { SectionLayout } from "../SectionLayout/SectionLayout";
import { SkillList } from "@/components/SkillList/SkillList";

import styles from "./SkillsSection.module.scss";

export const SkillsSection = () => {
  return (
    <div className={styles.SkillsSection}>
      <SectionLayout
        title="Skills"
        description="제가 사용하는 기술 스택 입니다."
        isBgSubtle={true}
      >
        <SkillList />
      </SectionLayout>
    </div>
  );
};