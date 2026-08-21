import { Heading, Section } from "../../../components/ui";
import styles from "../Home.module.scss";

const journey = [
  {
    number: "01",
    title: "Build",
    description: "Start with interactive React applications that strengthen your understanding of components, JSX, props, state, events, conditional rendering, forms, and reusable UI patterns.",
  },
  {
    number: "02",
    title: "Integrate",
    description: "Connect applications to real-world data using REST APIs, asynchronous JavaScript, TanStack Query, Redux Toolkit, Zustand, localStorage, and modern data-fetching patterns.",
  },
  {
    number: "03",
    title: "Optimize",
    description: "Improve applications with responsive design, semantic HTML, accessibility, Core Web Vitals, lazy loading, code splitting, efficient rendering, and cross-browser compatibility.",
  },
  {
    number: "04",
    title: "Ship",
    description: "Bring everything together into production-ready frontend applications using clean architecture, reusable components, Git, GitHub/GitLab, and modern deployment practices.",
  },
];

export function LearningJourney() {
  return (
    <Section id="learning-journey" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Learning Journey</span>

        <Heading element="h2" className={styles.sectionTitle}>
          Build. Integrate. Optimize. <span>Ship.</span>
        </Heading>

        <p className={styles.sectionSubtitle}>Build practical projects that progressively take you from React fundamentals to advanced frontend application development.</p>
      </div>

      <div className={styles.journeyGrid}>
        {journey.map((step) => (
          <article key={step.number} className={styles.journeyCard}>
            <div className={styles.journeyNumber}>{step.number}</div>

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
