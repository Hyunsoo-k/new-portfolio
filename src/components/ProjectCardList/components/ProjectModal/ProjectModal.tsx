"use client";

import { RxCross1 } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";

import { useProjectModalStore } from "@/store/useProjectModalStore";

import styles from "./ProjectModal.module.scss";
import Link from "next/link";
import Image from "next/image";

export const ProjectModal = () => {
  const { isOpen, close, project } = useProjectModalStore();

  if (!isOpen || !project) {
    return null;
  }

  const handleclose = () => {
    close();
  };

  return (
    <article className={styles.projectModal}>
      <header className={styles.header}>
        <p className={styles.readMe}>README.md</p>
        <RxCross1 onClick={handleclose} className={styles.crossIcon} />
      </header>
      <div className={styles.body}>
        <h3 className={styles.name}>{project.name}</h3>
        <div className={styles.area}>
          <h3 className={styles.areaTitle}>Link</h3>
          <ul className={styles.urlList}>
            {project.deployUrl && (
              <li className={styles.item}>
                Deploy :
                <Link
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {project.deployUrl}
                </Link>
              </li>
            )}
            <li className={styles.item}>
              Github :
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {project.githubUrl}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.area}>
          <h3 className={styles.areaTitle}>Summary</h3>
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <div className={styles.area}>
          <h3 className={styles.areaTitle}>Detail</h3>
          <ul className={styles.detailList}>
            {project.details.map((detail: string, index: number) => (
              <li key={index} className={styles.item}>
                <p className={styles.detail}>· {detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.area}>
          <h3 className={styles.areaTitle}>Technology Stack</h3>
          <ul className={styles.skillList}>
            {project.skills.map((skill: string) => (
              <li key={skill} className={styles.item}>
                <p className={styles.skill}>{skill}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>
        
      </footer>
    </article>
  );
};