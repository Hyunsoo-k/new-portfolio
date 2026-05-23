import { Project } from "@/types/project";
import { PROJECTS } from "@/consts/projects";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";

import styles from "./ProjectCardList.module.scss";

export const ProjectCardList = () => {
  return (
    <ul className={styles.projectCardList}>
      {PROJECTS.map((project: Project) => (
        <li key={project.name} className={styles.item}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};