import { Button, Heading, Section } from "../../../components/ui";
import styles from "../Home.module.scss";

const technologies = ["HTML5", "CSS3", "Sass", "JavaScript", "TypeScript", "React", "Redux", "Redux Toolkit", "Zustand", "TanStack Query"];

export function Hero() {
  return (
    <Section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <Heading element="span" variant="badge">
          React, TypeScript & Modern Frontend Technologies
        </Heading>

        <Heading element="h1" className={styles.heroTitle}>
          Build Modern, High-Performance <span>Web Experiences</span>
        </Heading>

        <p className={styles.heroDescription}>Design and develop responsive, accessible, scalable, and production-ready web applications using modern frontend technologies — from HTML5 and CSS3 to JavaScript, TypeScript, React, Redux, Zustand, and TanStack Query.</p>

        <p className={styles.heroDescription}>Learn by building real-world projects that combine UI development, state management, API integration, form validation, responsive design, performance optimization, and modern frontend architecture.</p>

        <div className={styles.heroActions}>
          <Button variant="primary" className="px-4 py-3">
            Start from Basics
          </Button>

          <Button variant="outline" className="px-4 py-3">
            <span className={styles.playIcon}>▶</span>
            Watch Demo
          </Button>
        </div>
      </div>

      <div className={styles.trusted}>
        <p className={styles.trustedLabel}>Built with</p>

        <div className={styles.techList}>
          {technologies.map((technology) => (
            <span key={technology} className={styles.techItem}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
