import styles from "./Heading.module.scss";
import type { HeadingProps } from "./heading.types";

export function Heading({ element: Element = "h2", variant = "default", children, className = "" }: HeadingProps) {
  const elementStyle = styles[Element] ?? "";

  const variantStyle = variant === "badge" ? styles.hbadge : variant === "label" ? styles.slbl : "";

  const headingStyles = [elementStyle, variantStyle, className].filter(Boolean).join(" ");

  return (
    <Element className={headingStyles}>
      {variant === "badge" && <span className={styles.bdot} />}

      {children}
    </Element>
  );
}
