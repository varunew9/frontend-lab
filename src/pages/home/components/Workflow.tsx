import { Heading, Section } from "../../../components/ui";
import styles from "../Home.module.scss";

const workflow = [
  {
    number: "01",
    title: "Design",
    description: "Transform Figma, Adobe XD, or Photoshop designs into responsive, accessible, and reusable interface components.",
  },
  {
    number: "02",
    title: "Develop",
    description: "Build modern frontend applications using HTML5, CSS3, Sass, JavaScript, TypeScript, and React.",
  },
  {
    number: "03",
    title: "Manage State",
    description: "Implement predictable client-side state management with Redux Toolkit and Zustand, while using Context API and custom hooks where appropriate.",
  },
  {
    number: "04",
    title: "Integrate Data",
    description: "Connect applications to REST APIs and manage asynchronous server data using TanStack Query, caching, loading states, and error handling.",
  },
  {
    number: "05",
    title: "Validate",
    description: "Build robust forms with React Hook Form and Zod, including schema validation, error handling, multi-step forms, and accessible interactions.",
  },
  {
    number: "06",
    title: "Optimize",
    description: "Improve Core Web Vitals, rendering performance, accessibility, responsive behavior, image loading, and code splitting.",
  },
  {
    number: "07",
    title: "Collaborate",
    description: "Use Git, GitHub, GitLab, Jira, Agile, and Scrum to manage source code, tasks, branches, and collaborative development workflows.",
  },
  {
    number: "08",
    title: "Deliver",
    description: "Build production-ready applications with clean architecture, reusable components, responsive layouts, optimized performance, and maintainable code.",
  },
];

export function Workflow() {
  return (
    <Section id="workflow" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>From Design to Production</span>

        <Heading element="h2" className={styles.sectionTitle}>
          A Complete Frontend <span>Development Workflow</span>
        </Heading>

        <p className={styles.sectionSubtitle}>Follow a practical workflow that takes an idea from design through development, data integration, optimization, and production.</p>
      </div>

      <div className={styles.workflowGrid}>
        {workflow.map((step) => (
          <article key={step.number} className={styles.workflowCard}>
            <div className={styles.workflowNumber}>{step.number}</div>

            <Heading element="h3" className={styles.cardTitle}>
              {step.title}
            </Heading>

            <p className={styles.cardDescription}>{step.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
