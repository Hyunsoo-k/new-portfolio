import styles from "./SkillList.module.scss";

type SkillData = {
  name: string;
  skills: { name: string, color: string }[];
};

const SKILL_DATAS: SkillData[] = [
  {
    name: "Language",
    skills: [
      { name: "Typescript", color: "#2F74C0" },
      { name: "Javascript", color: "#EFD81D" },
      { name: "Java", color: "#D33C41" },
      { name: "C", color: "#3D75A4" },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "Next.jS", color: "#000000" },
      { name: "React", color:"#2468EE" },
      { name: "Tanstack-Query", color: "#FF4260" },
      { name: "React-Hook-Form", color: "#0F1931" },
      { name: "Zustand", color: "#49443E" },
      { name: "Tiptap", color: "#6C3CE1" },
      { name: "Recharts", color: "#000000" },
      { name: "Sass", color: "#CE6B9C" },
      { name: "Tailwind Css", color: "#38BDF8" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.jS", color: "#8FC708" },
      { name: "Express", color:"#2468EE" },
      { name: "MongoDB", color: "#082532" },
      { name: "Postgresql", color: "#376598" },
    ]
  }
]

export const SkillList = () => {
  return (
    <div className={styles.skillList}>
      {SKILL_DATAS.map((data: SkillData) => (
        <div key={data.name} className={styles.skillSet}>
          <h3 className={styles.name}>{data.name}</h3>
          <ul className={styles.list}>
            {data.skills.map((skill: { name: string, color: string}) => (
              <li key={skill.name} className={styles.item}>
                <div style={{ backgroundColor: skill.color }} className={styles.skillName}>{skill.name}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};