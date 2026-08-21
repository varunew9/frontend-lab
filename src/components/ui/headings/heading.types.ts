import type { ReactNode } from "react";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

export interface HeadingProps {
  children: ReactNode;
  element?: HeadingElement;
  className?: string;
  variant?: "default" | "badge" | "label";
}
