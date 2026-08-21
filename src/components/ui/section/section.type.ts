import type { ElementType, ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  subHeading?: string;
  heading?: string;
  id?: string;
  className?: string;
  isStrpped?: boolean;
  element?: ElementType;
}
