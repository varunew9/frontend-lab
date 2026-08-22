import { CheckCircle2, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { FeatureProject } from "../../../config/featuresPage";
import styles from "../Features.module.scss";
import { Button } from "../../../components/ui";

interface FeaturesCardProps {
  features: FeatureProject;
}

export function FeaturesCard({ features }: FeaturesCardProps) {
  const statusIcon = features.status === "completed" ? <CheckCircle2 size={14} /> : <Clock3 size={14} />;

  const statusLabel = features.status === "completed" ? "Completed" : features.status === "in-progress" ? "In Progress" : "Planned";

  return (
    <article className={`${styles.card} ${features.featured ? styles.cardFeatured : ""} ${statusLabel !== "Completed" ? styles.opacity50 : ""}`}>
      <div className={styles.cardTop}>
        <span className={styles.category}>{features.category}</span>

        <span className={`${styles.status} ${features.status === "completed" ? styles.statusCompleted : styles.statusPending}`}>
          {statusIcon}
          {statusLabel}
        </span>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{features.title}</h3>

        <p className={styles.cardDescription}>{features.description}</p>

        <div className={styles.technologies}>
          {features.technologies.map((technology) => (
            <span key={technology} className={styles.technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        {features.path && (
          <Link to={features.path}>
            <Button size="sm">Explore Project</Button>
          </Link>
        )}

        {features.liveUrl && (
          <a href={features.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">
              Live Demo
            </Button>
          </a>
        )}

        {features.externalUrl && (
          <a href={features.externalUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm">GitHub</Button>
          </a>
        )}
      </div>
    </article>
  );
}
