import { Project } from "@/types/project";
import { PROJECTS } from "@/consts/projects";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";

import styles from "./ProjectsSection.module.scss";

export const ProjectsSection = () => {
  return (
    <section id="Projects" className={styles.projectsSection}>
      <SectionHeader
        title="Projects"
        description="카드를 클릭해 프로젝트 정보를 확인해 보세요."
      />
      <ul className={styles.list}>
        {PROJECTS.map((project: Project) => (
          <li key={project.name} className={styles.item}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};