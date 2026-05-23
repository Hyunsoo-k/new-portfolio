"use client";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

import { Project } from "@/types/project";
import { useProjectModalStore } from "@/store/useProjectModalStore";

import styles from "./ProjectCard.module.scss";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const {
    thumbnailUrl,
    name,
    summary: description,
    skillIconUrls: skillUrls
  } = project;

  const { open: openProjectModal } = useProjectModalStore();

  const handleCardClick = () => {
    openProjectModal(project);
  };

  return (
    <article onClick={handleCardClick} className={styles.projectCard}>
      <div className={styles.thumbnailWrapper}>
        <Image src={thumbnailUrl} alt={name} fill className={styles.thumbnail} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <footer className={styles.footer}>
        <ul className={styles.skillList}>
          {skillUrls.map((url: string) => (
            <li key={url}><Image src={url} alt={url} width={25} height={25} /></li>
          ))}
        </ul>
        <GoArrowUpRight className={styles.openIcon} />
      </footer>
    </article>
  );
};