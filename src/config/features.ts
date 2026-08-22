import { Calculator, Clock, IdCard, Contrast, CloudSun, ListTodo, Quote, Search, FileText, ShoppingCart, UserCheck, Table2, Images, WalletCards, StickyNote, Wifi, Rocket, CircleHelp, MessageCircle, KanbanSquare, type LucideIcon } from "lucide-react";

export type ProjectStatus = "completed" | "in-progress" | "planned";
export interface Feature {
  path: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: ProjectStatus;
}

export type Features = readonly Feature[];

export const features: Feature[] = [
  {
    path: "/counter",
    title: "Counter",
    description: "State management with Zustand",
    icon: Calculator,
    status: "completed",
  },
  {
    path: "/digital-clock",
    title: "Digital Clock",
    description: "Real-time clock with React",
    icon: Clock,
    status: "completed",
  },
  {
    path: "/profile-card-generator",
    title: "Profile Cards",
    description: "Dynamic profile management",
    icon: IdCard,
    status: "completed",
  },
  {
    path: "/theme-changer",
    title: "Theme Toggler",
    description: "Multi-theme UI with persistence",
    icon: Contrast,
    status: "completed",
  },
  {
    path: "/weather",
    title: "Weather",
    description: "Weather API integration",
    icon: CloudSun,
    status: "planned",
  },

  // Days 4–14
  {
    path: "/accordion",
    title: "Accordion",
    description: "Expandable with React Compound Component",
    icon: ListTodo,
    status: "completed",
  },
  {
    path: "/background-changer",
    title: "Background Changer",
    description: "Dynamic colors with controlled input",
    icon: Contrast,
    status: "planned",
  },
  {
    path: "/calculator",
    title: "Calculator",
    description: "Interactive arithmetic operations",
    icon: Calculator,
    status: "completed",
  },
  {
    path: "/todo",
    title: "Todo List",
    description: "Create and manage todo items",
    icon: ListTodo,
    status: "planned",
  },
  {
    path: "/random-quote",
    title: "Random Quote",
    description: "Fetch and display random quotes",
    icon: Quote,
    status: "planned",
  },
  {
    path: "/live-search",
    title: "Live Search",
    description: "Filter data with real-time search",
    icon: Search,
    status: "planned",
  },
  {
    path: "/form-validator",
    title: "Form Validator",
    description: "Client-side form validation",
    icon: FileText,
    status: "planned",
  },
  {
    path: "/crypto-monitor",
    title: "Crypto Monitor",
    description: "Display cryptocurrency data",
    icon: WalletCards,
    status: "planned",
  },
  {
    path: "/image-gallery",
    title: "Image Gallery",
    description: "Responsive image gallery",
    icon: Images,
    status: "planned",
  },

  // Days 15–21
  {
    path: "/shopping-cart",
    title: "Shopping Cart",
    description: "Cart state with Zustand state management",
    icon: ShoppingCart,
    status: "completed",
  },
  {
    path: "/authentication",
    title: "Authentication",
    description: "Authentication with React Context",
    icon: UserCheck,
    status: "planned",
  },
  {
    path: "/data-table",
    title: "Data Table",
    description: "Sort and paginate tabular data",
    icon: Table2,
    status: "planned",
  },
  {
    path: "/form-wizard",
    title: "Form Wizard",
    description: "Multi-step form workflow",
    icon: FileText,
    status: "planned",
  },
  {
    path: "/infinite-scroll",
    title: "Infinite Scroll",
    description: "Load content while scrolling",
    icon: ListTodo,
    status: "planned",
  },

  // Days 22–30
  {
    path: "/kanban",
    title: "Kanban Board",
    description: "Drag and drop task management",
    icon: KanbanSquare,
    status: "planned",
  },
  {
    path: "/markdown-editor",
    title: "Markdown Editor",
    description: "Write and preview Markdown",
    icon: FileText,
    status: "planned",
  },
  {
    path: "/expense-tracker",
    title: "Expense Tracker",
    description: "Track and visualize expenses",
    icon: WalletCards,
    status: "planned",
  },
  {
    path: "/notes",
    title: "Notes Hub",
    description: "Persistent notes with localStorage",
    icon: StickyNote,
    status: "planned",
  },
  {
    path: "/network-status",
    title: "Network Status",
    description: "Monitor online and offline state",
    icon: Wifi,
    status: "planned",
  },
  {
    path: "/spacex",
    title: "SpaceX Explorer",
    description: "Explore SpaceX data with API caching",
    icon: Rocket,
    status: "planned",
  },
  {
    path: "/quiz",
    title: "Quiz Application",
    description: "Interactive quiz with scoring",
    icon: CircleHelp,
    status: "planned",
  },
  {
    path: "/chat",
    title: "Chat Interface",
    description: "Responsive messaging interface",
    icon: MessageCircle,
    status: "planned",
  },
];
