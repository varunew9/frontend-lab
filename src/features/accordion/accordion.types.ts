import type { ReactNode } from "react";

export type AccordionId = string | number;

export type AccordionProps = {
  children: ReactNode;
};

export type AccordionItemProps = {
  id: AccordionId;
  children: ReactNode;
};

export type AccordionTitleProps = {
  children: ReactNode;
};

export type AccordionContentProps = {
  children: ReactNode;
};

export type AccordionContextValue = {
  openItemId: AccordionId | null;
  toggleItem: (id: AccordionId) => void;
};
