import { HeroSection } from "@/components/sections/HeroSection/HeroSeciotn";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillSection/SkillsSection";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}
