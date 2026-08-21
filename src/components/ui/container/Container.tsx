import styles from "./Container.module.scss";
import type { ContainerProps } from "./container.types";

export function Container({ variant, size, className = "", children }: ContainerProps) {
  const variantClass = variant ? styles[`container-${variant}`] : styles.container;
  const sizeClass = size ? styles[`container-${size}`] : "";
  return <div className={`${styles.container} ${variantClass} ${sizeClass} ${className}`}>{children}</div>;
}
