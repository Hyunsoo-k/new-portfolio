import { HeroSection } from "@/components/sections/HeroSection/HeroSeciotn";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillSection/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { MoreSection } from "@/components/sections/MoreSection/MoreSection";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <MoreSection />
    </div>
  );
}
