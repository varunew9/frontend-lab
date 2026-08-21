import styles from "./Button.module.scss";
import type { ButtonProps } from "./button.types";

export function Button({ children, variant = "outline", type = "button", size = "md", className = "", ...props }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${styles[`button-${variant}`]} ${styles[`button-${size}`]} ${className}`} {...props}>
      {children}
    </button>
  );
}
