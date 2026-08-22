import styles from "../Accordion.module.scss";
import { Plus } from "lucide-react";

import { useAccordionContext, useAccordionItemContext } from "./AccordionContext";

import type { AccordionTitleProps } from "../accordion.types";

export function AccordionTitle({ children }: AccordionTitleProps) {
  const { openItemId, toggleItem } = useAccordionContext();
  const { id } = useAccordionItemContext();

  const isOpen = openItemId === id;

  return (
    <h2 className={styles.header}>
      <button type="button" onClick={() => toggleItem(id)} className={`${styles.button} ${isOpen ? styles.active : ""}`} aria-expanded={isOpen} aria-controls={`${id}-content`}>
        <span className={styles.title}>{children}</span>

        <span className={styles.icon} aria-hidden="true">
          <Plus size={18} />
        </span>
      </button>
    </h2>
  );
}
