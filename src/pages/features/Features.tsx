import { useState } from "react";
import { features } from "../../config/featuresPage";
import type { FeaturesStatus } from "../../config/featuresPage";
import { FeaturesGrid } from "./components/FeaturesGrid";
import styles from "./Features.module.scss";
import { Container, Heading, Section } from "../../components/ui";

type Filter = "all" | FeaturesStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In Progress" },
  { value: "planned", label: "Planned" },
];

export function Features() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects = activeFilter === "all" ? features : features.filter((feature) => feature.status === activeFilter);

  return (
    <Section className={styles.features}>
      <Container>
        <div className="text-center">
          <Heading element="span" variant="badge">
            Explore Projects
          </Heading>

          <Heading element="h1">
            Frontend Projects & <span>Experiments</span>
          </Heading>

          <p className={styles.description}>Explore practical frontend projects covering React, TypeScript, state management, APIs, responsive design, theming, and modern UI development.</p>
        </div>

        <div className={`${styles.filters} mt-4`} role="tablist" aria-label="Project filters">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button key={filter.value} type="button" role="tab" aria-selected={isActive} className={`${styles.filter} ${isActive ? styles.filterActive : ""}`} onClick={() => setActiveFilter(filter.value)}>
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className={styles.filterMeta}>
          Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? "project" : "projects"}
        </div>

        {filteredProjects.length > 0 ? (
          <FeaturesGrid features={filteredProjects} />
        ) : (
          <div className={styles.empty}>
            <h3>No projects found</h3>

            <p>
              There are no projects available in <strong>{activeFilter}</strong> category yet.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
