import { Section } from "../../../components/ui";
import styles from "../Home.module.scss";

const stats = [
  {
    value: "30+",
    label: "Frontend Projects",
  },
  {
    value: "20+",
    label: "Technologies & Tools",
  },
  {
    value: "100%",
    label: "Responsive Design",
  },
  {
    value: "99.9%",
    label: "Performance Focus",
  },
];

const technologies = ["HTML5", "CSS3", "Sass", "JavaScript", "TypeScript", "React", "Redux", "Redux Toolkit", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Tailwind CSS", "Bootstrap", "jQuery"];

export function Proof() {
  return (
    <Section className={styles.proof}>
      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statNumber}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.techTicker}>
        <div className={styles.techTrack}>
          {technologies.map((technology) => (
            <span key={technology} className={styles.techBadge}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
