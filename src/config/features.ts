import {
  Calculator,
  Clock,
  IdCard,
  Contrast,
  CloudSun,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  path: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    path: "/counter",
    title: "Counter",
    description: "State management with Zustand",
    icon: Calculator,
  },
  {
    path: "/digital-clock",
    title: "Digital Clock",
    description: "Real-time clock with React",
    icon: Clock,
  },
  {
    path: "/profile-card-generator",
    title: "Profile Cards",
    description: "Dynamic profile management",
    icon: IdCard,
  },
  {
    path: "/theme-changer",
    title: "Theme Toggler",
    description: "Light and dark theme",
    icon: Contrast,
  },
  {
    path: "/weather",
    title: "Weather",
    description: "Weather API integration",
    icon: CloudSun,
  },
];
