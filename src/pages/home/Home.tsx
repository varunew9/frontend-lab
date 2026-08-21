import { CTA } from "./components/CTA";
import { Hero } from "./components/Hero";
import { LearningJourney } from "./components/LearningJourney";
import { Proof } from "./components/Proof";
import { Skills } from "./components/Skills";
import { TechStack } from "./components/TechStack";
import { Workflow } from "./components/Workflow";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <main className={styles.home}>
      <Hero />

      <Proof />

      <Skills />

      <Workflow />

      <TechStack />

      <LearningJourney />

      <CTA />
    </main>
  );
}
