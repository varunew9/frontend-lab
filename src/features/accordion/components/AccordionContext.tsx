import { createContext, use } from "react";
import type { AccordionContextValue, AccordionId } from "../accordion.types";

export const AccordionContext = createContext<AccordionContextValue | null>(null);
export function useAccordionContext() {
  const ctx = use(AccordionContext);

  if (!ctx) {
    throw new Error("Accordion-related component must be wrapped with <Accordion>");
  }

  return ctx;
}

export const AccordionItemContext = createContext<{ id: AccordionId } | null>(null);
export function useAccordionItemContext() {
  const ctx = use(AccordionItemContext);

  if (!ctx) {
    throw new Error("Accordion.Item component must wrap Accordion.Title and Accordion.Content");
  }

  return ctx;
}
