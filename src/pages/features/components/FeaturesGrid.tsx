import type { FeatureProject } from "../../../config/featuresPage";
import { FeaturesCard } from "./FeaturesCard";
import styles from "../Features.module.scss";

interface FeaturesGridProps {
  features: readonly FeatureProject[];
}

export function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <div className={styles.grid}>
      {features.map((feature) => (
        <FeaturesCard
          key={feature.id}
          features={feature}
        />
      ))}
    </div>
  );
}
