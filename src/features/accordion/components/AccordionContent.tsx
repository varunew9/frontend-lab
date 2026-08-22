import styles from "../Accordion.module.scss";

import { useAccordionContext, useAccordionItemContext } from "./AccordionContext";
import type { AccordionContentProps } from "../accordion.types";

export function AccordionContent({ children }: AccordionContentProps) {
  const { openItemId } = useAccordionContext();
  const { id } = useAccordionItemContext();

  const isOpen = openItemId === id;

  return (
    <div id={`${id}-content`} className={`${styles.content} ${isOpen ? styles.open : ""}`} aria-hidden={!isOpen}>
      <div className={styles.contentInner}>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
