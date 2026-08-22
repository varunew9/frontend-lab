import styles from "../Accordion.module.scss";
import type { AccordionItemProps } from "../accordion.types";
import { AccordionItemContext } from "./AccordionContext";

export function AccordionItem({ id, children }: AccordionItemProps) {
  return (
    <AccordionItemContext value={{ id }}>
      <div id={String(id)} className={styles.item}>
        {children}
      </div>
    </AccordionItemContext>
  );
}
