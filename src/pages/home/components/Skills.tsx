import { Atom, Database, FileCheck, Proportions, Gauge, Workflow } from "lucide-react";
import { Heading, Section } from "../../../components/ui";
import styles from "../Home.module.scss";

const skills = [
  {
    icon: Atom,
    title: "Modern React Development",
    description: "Build reusable and maintainable interfaces using React, TypeScript, Hooks, Router, Context API, custom hooks, Zustand, Redux, and Redux Toolkit.",
    tag: "Component-driven architecture",
  },
  {
    icon: Database,
    title: "Advanced State & Data Management",
    description: "Manage client and server state using Redux Toolkit, Zustand, TanStack Query, localStorage, REST APIs, caching, selectors, and derived state.",
    tag: "Scalable state management",
  },
  {
    icon: FileCheck,
    title: "Forms & Validation",
    description: "Create reliable and accessible forms using React Hook Form and Zod, including schema validation, field-level errors, and multi-step workflows.",
    tag: "Type-safe validation",
  },
  {
    icon: Proportions,
    title: "Responsive UI & Styling",
    description: "Build responsive, mobile-first interfaces using CSS3, Sass, Tailwind CSS, Bootstrap, Flexbox, CSS Grid, and modern CSS techniques.",
    tag: "Responsive across devices",
  },
  {
    icon: Gauge,
    title: "Performance & Web Standards",
    description: "Apply Core Web Vitals, lazy loading, code splitting, image optimization, semantic HTML, accessibility, and frontend performance optimization.",
    tag: "Fast, accessible, and efficient",
  },
  {
    icon: Workflow,
    title: "Design & Development Workflow",
    description: "Convert designs into functional interfaces while following professional workflows with Figma, GitHub, GitLab, Jira, Agile, and Scrum.",
    tag: "Design to production",
  },
];

export function Skills() {
  return (
    <Section id="skills" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Skills & Technologies</span>

        <Heading element="h2" className={styles.sectionTitle}>
          Everything You Need to <span>Build Modern Frontend Applications</span>
        </Heading>

        <p className={styles.sectionSubtitle}>A practical frontend development journey covering component architecture, state management, APIs, forms, validation, responsive interfaces, performance, accessibility, and production workflows.</p>
      </div>

      <div className={styles.cardsGrid}>
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <article key={skill.title} className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Icon size={30} />
              </div>

              <Heading element="h3" className={styles.cardTitle}>
                {skill.title}
              </Heading>

              <p className={styles.cardDescription}>{skill.description}</p>

              <span className={styles.tag}>{skill.tag}</span>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
