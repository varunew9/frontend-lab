import { Button, Heading, Section } from "../../../components/ui";
import styles from "../Home.module.scss";

const technologies = ["React", "TypeScript", "JavaScript", "Redux", "Redux Toolkit", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Tailwind CSS", "Sass", "HTML5", "CSS3"];

export function CTA() {
  return (
    <Section id="cta" className={`${styles.cta} text-center`}>
      {/* <div className={styles.ctaGlow} /> */}

      <div className={styles.ctaContent}>
        <span className={styles.ctaBadge}>
          <span className={styles.statusDot} />
          Build. Learn. Optimize. Ship.
        </span>

        <Heading element="h2" className={styles.ctaTitle}>
          Ready to Build <span>Modern Frontend Applications?</span>
        </Heading>

        <p className={styles.ctaDescription}>Turn frontend concepts into practical experience by building fast, scalable, accessible, responsive, and maintainable web applications.</p>

        <div className={styles.ctaTags}>
          {technologies.map((technology) => (
            <span key={technology} className={styles.tag}>
              {technology}
            </span>
          ))}
        </div>

        <div className={styles.ctaActions}>
          <Button variant="primary" className="px-4 py-3">
            Start Learning
            <i className="fa-solid fa-arrow-right" />
          </Button>

          <Button variant="outline" className="px-4 py-3">
            <i className="fa-regular fa-comment-dots" />
            Explore Projects
          </Button>
        </div>
      </div>
    </Section>
  );
}
