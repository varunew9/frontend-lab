import styles from "../Accordion.module.scss";

import { useState } from "react";
import type {
  AccordionContextValue,
  AccordionId,
  AccordionProps,
} from "../accordion.types";

import { AccordionItem } from "./AccordionItem";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionContent } from "./AccordionContent";
import { AccordionContext } from "./AccordionContext";

export function Accordion({ children }: AccordionProps) {
  const [openItemId, setOpenItemId] = useState<AccordionId | null>(null);

  function toggleItem(id: AccordionId) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue: AccordionContextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext value={contextValue}>
      <div className={styles.accordion}>{children}</div>
    </AccordionContext>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
