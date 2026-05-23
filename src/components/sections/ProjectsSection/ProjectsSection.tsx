import { SectionLayout } from "../SectionLayout/SectionLayout";
import { ProjectCardList } from "@/components/ProjectCardList/ProjectCardList";

import styles from "./ProjectsSection.module.scss";

export const ProjectsSection = () => {
  return (
    <div className={styles.projectsSection}>
      <SectionLayout
        title="Projects"
        description="카드를 클릭하고 프로젝트 정보를 확인해 보세요."
        isBgSubtle={false}
      >
        <ProjectCardList />
      </SectionLayout>
    </div>
  );
};