import { Container } from "../container/Container";
import type { SectionProps } from "./section.type";
import styles from "./Section.module.scss";

export function Section({ children, id, element = "section", isStrpped = false, className = "" }: SectionProps) {
  const ComponentTag = element;

  const isHero = id === "hero";

  const sectionClassName = [isHero ? styles.hero : styles.section, className].filter(Boolean).join(" ");

  return (
    <ComponentTag id={id} className={sectionClassName}>
      {isHero && (
        <>
          <div className={`${styles.aur} ${styles["aur-a"]}`} style={{ top: "-80px", left: "-120px" }} />

          <div className={`${styles.aur} ${styles["aur-b"]}`} style={{ top: "180px", right: "-180px" }} />

          <div
            className={`${styles.aur} ${styles["aur-a"]}`}
            style={{
              bottom: "-80px",
              left: "45%",
              transform: "translateX(-50%)",
              opacity: ".4",
            }}
          />
        </>
      )}

      {isStrpped && <div className={styles.section__stripped} />}

      <Container className={styles.container}>{children}</Container>
    </ComponentTag>
  );
}
