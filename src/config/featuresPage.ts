export type FeaturesStatus = "completed" | "in-progress" | "planned";

export interface FeatureProject {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: readonly string[];

  path?: string;
  liveUrl?: string;
  externalUrl?: string;

  status: FeaturesStatus;
  featured?: boolean;
}
export const features: readonly FeatureProject[] = [
  // ============================================================
  // FRONTEND LAB — EXISTING PROJECTS
  // ============================================================

  {
    id: "theme-changer",
    title: "Theme Changer",
    description: "A multi-theme React application with persistent theme state and cross-tab synchronization using CSS variables and Zustand.",
    category: "UI & Theming",
    technologies: ["React", "TypeScript", "Zustand", "SCSS"],
    path: "/features/theme-changer",
    status: "completed",
    featured: true,
  },

  {
    id: "digital-clock",
    title: "Digital Clock",
    description: "A responsive digital clock displaying real-time date and time while demonstrating React state, effects, timers, and reusable component styling.",
    category: "React Fundamentals",
    technologies: ["React", "TypeScript", "SCSS"],
    path: "/features/digital-clock",
    status: "completed",
    featured: false,
  },

  {
    id: "counter",
    title: "Counter",
    description: "A simple counter application demonstrating predictable state updates, reusable UI components, and lightweight state management with Zustand.",
    category: "State Management",
    technologies: ["React", "TypeScript", "Zustand", "SCSS"],
    path: "/features/counter",
    status: "completed",
    featured: false,
  },

  {
    id: "profile-card-generator",
    title: "Profile Card Generator",
    description: "A reusable profile card generator for creating and managing profile information through a component-driven React interface.",
    category: "UI Components",
    technologies: ["React", "TypeScript", "Zustand", "SCSS"],
    path: "/features/profile-card-generator",
    status: "completed",
    featured: false,
  },

  // ============================================================
  // EXTERNAL PROJECTS
  // ============================================================

  {
    id: "ecommerce-react-context",
    title: "E-Commerce React Context",
    description: "An e-commerce application built with React, focusing on component architecture and application state management using the Context API.",
    category: "E-Commerce",
    technologies: ["React", "JavaScript", "Context API", "CSS"],
    externalUrl: "https://github.com/varunew9/ecommerce-react-context",
    status: "completed",
    featured: true,
  },

  {
    id: "shopnest",
    title: "ShopNest",
    description: "A complete e-commerce web application focused on building a modern shopping experience with reusable React components and responsive UI.",
    category: "E-Commerce",
    technologies: ["React", "JavaScript", "E-Commerce", "Responsive UI"],
    externalUrl: "https://github.com/varunew9/ShopNest-E-Commerce-Web-Application",
    liveUrl: "https://varunverma-shopnest.netlify.app/",
    status: "completed",
    featured: true,
  },

  {
    id: "react-auth-authorization-dashboard",
    title: "React Auth & Authorization Dashboard",
    description: "A React dashboard project focused on authentication, authorization, protected application areas, and user access control.",
    category: "Authentication",
    technologies: ["React", "JavaScript", "Authentication", "Authorization"],
    externalUrl: "https://github.com/varunew9/react-auth-authorization-dashboard",
    status: "completed",
    featured: true,
  },

  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A personal developer portfolio showcasing frontend projects, technical skills, experience, and modern web development work.",
    category: "Portfolio",
    technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
    liveUrl: "https://varunverma.netlify.app/",
    status: "completed",
    featured: true,
  },

  // ============================================================
  // DAYS 1–7
  // State, Props & Basic Component Logic
  // ============================================================

  // {
  // id: "day-01-counter-app",
  // day: 1,
  //   title: "Counter App",
  //   description: "A beginner-friendly counter application demonstrating increment, decrement, and reset operations using React useState.",
  //   category: "State & Components",
  //   technologies: ["React", "JavaScript", "useState"],
  //   status: "completed",
  //   featured: false,
  // },

  // {
  // id: "day-02-digital-clock",
  // day: 2,
  //   title: "Digital Clock App",
  //   description: "A real-time digital clock demonstrating setInterval, component lifecycle behavior, and dynamic local date and time updates.",
  //   category: "Effects & Timers",
  //   technologies: ["React", "JavaScript", "useEffect", "setInterval"],
  //   status: "completed",
  //   featured: false,
  // },

  // {
  // id: "day-03-profile-id-card",
  // day: 3,
  //   title: "Profile ID Card Generator",
  //   description: "A profile card project demonstrating how data can be passed between React components using props.",
  //   category: "Props & Components",
  //   technologies: ["React", "JavaScript", "Props"],
  //   status: "completed",
  //   featured: false,
  // },

  {
    id: "day-04-dynamic-accordion",
    // day: 4,
    title: "Accordion",
    description: "A reusable accordion component with expandable and collapsible sections controlled through React Compound Component.",
    category: "Component Logic",
    technologies: ["React", "JavaScript", "useState", "Context Api", "Conditional Rendering", "React Compound Component"],
    status: "completed",
    featured: false,
  },

  {
    id: "day-05-background-color-changer",
    // day: 5,
    title: "Dynamic Background Color Changer",
    description: "An interactive color changer demonstrating form input handling, controlled values, and dynamic styling in React.",
    category: "Events & Forms",
    technologies: ["React", "JavaScript", "Forms", "Inline Styles"],
    status: "completed",
    featured: false,
  },

  // {
  // id: "day-06-dark-mode-toggle",
  // day: 6,
  //   title: "Dark Mode Toggle",
  //   description: "A theme switching project demonstrating globally managed UI preferences and persistent interface styling.",
  //   category: "UI & Theming",
  //   technologies: ["React", "JavaScript", "Context API", "CSS Variables"],
  //   status: "completed",
  //   featured: true,
  // },

  {
    id: "day-07-calculator",
    // day: 7,
    title: "Simple Calculator",
    description: "A calculator application demonstrating input event handling, controlled inputs, arithmetic operations, and basic expression processing.",
    category: "React Fundamentals",
    technologies: ["React", "JavaScript", "Forms", "Events"],
    status: "completed",
    featured: true,
    path: "/calculator",
  },

  // ============================================================
  // DAYS 8–14
  // Effects, Forms & APIs
  // ============================================================

  {
    id: "day-08-todo-list",
    // day: 8,
    title: "Interactive To-Do List",
    description: "A task management application demonstrating list rendering, unique keys, state updates, and basic array operations.",
    category: "State & Lists",
    technologies: ["React", "JavaScript", "useState", "Array Methods"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-09-random-quote-generator",
    // day: 9,
    title: "Random Quote Generator",
    description: "A quote generator that demonstrates asynchronous data fetching and rendering data from a public REST API.",
    category: "API Integration",
    technologies: ["React", "JavaScript", "Fetch API", "REST API"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-10-live-search-filter",
    // day: 10,
    title: "Live Search Filter",
    description: "A responsive search interface that filters data in real time based on user input.",
    category: "Search & Filtering",
    technologies: ["React", "JavaScript", "useState", "Array Methods"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-11-weather-dashboard",
    // day: 11,
    title: "Real-Time Weather Dashboard",
    description: "A weather dashboard that retrieves location-based weather information from an external weather API.",
    category: "API Integration",
    technologies: ["React", "JavaScript", "REST API", "Async/Await"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-12-form-validator",
    // day: 12,
    title: "Complex Form Validator",
    description: "A registration form demonstrating controlled inputs, validation rules, error states, and user-friendly form feedback.",
    category: "Forms & Validation",
    technologies: ["React", "JavaScript", "Forms", "Validation"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-13-crypto-price-monitor",
    // day: 13,
    title: "Crypto Price Monitor",
    description: "A cryptocurrency monitoring interface displaying dynamic market data in a structured and responsive table.",
    category: "API & Data",
    technologies: ["React", "JavaScript", "REST API", "Data Tables"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-14-image-gallery",
    // day: 14,
    title: "Image Gallery Grid",
    description: "A responsive image gallery demonstrating asynchronous image loading, dynamic collections, and responsive grid layouts.",
    category: "UI & Media",
    technologies: ["React", "JavaScript", "Async Data", "CSS Grid"],
    status: "planned",
    featured: false,
  },

  // ============================================================
  // DAYS 15–21
  // Context, Performance & Routing
  // ============================================================

  {
    id: "day-15-shopping-cart",
    // day: 15,
    title: "Shopping Cart Engine",
    description: "A shopping cart engine demonstrating predictable state transitions and derived totals using the useReducer hook.",
    category: "State Management",
    technologies: ["React", "JavaScript", "useReducer", "Context API"],
    status: "completed",
    liveUrl: "https://varunverma-shopnest.netlify.app/",
    externalUrl: "https://github.com/varunew9/ShopNest-E-Commerce-Web-Application",
    featured: false,
  },

  {
    id: "day-16-business-portfolio",
    // day: 16,
    title: "Multi-Page Business Portfolio",
    description: "A responsive multi-page portfolio demonstrating declarative routing, nested pages, navigation, and route-based layouts.",
    category: "Routing",
    technologies: ["React", "JavaScript", "React Router", "Responsive Design"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-17-authentication-context",
    // day: 17,
    title: "User Authentication Context",
    description: "An authentication example demonstrating shared user state, login flows, protected content, and React Context.",
    category: "Authentication",
    technologies: ["React", "JavaScript", "Context API", "Authentication"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-18-data-table-sorter",
    // day: 18,
    title: "Client Data Table Sorter",
    description: "A reusable data table demonstrating client-side sorting, pagination, filtering, and efficient array manipulation.",
    category: "Data Management",
    technologies: ["React", "JavaScript", "Tables", "Pagination"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-19-form-wizard",
    // day: 19,
    title: "Multi-Step Form Wizard",
    description: "A multi-step form that preserves user input between stages while providing structured navigation and validation.",
    category: "Forms & UX",
    technologies: ["React", "JavaScript", "Forms", "Validation"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-20-performance-optimizer",
    // day: 20,
    title: "Performance Optimizer Checklist",
    description: "A practical React performance project demonstrating memoization techniques with useMemo and useCallback.",
    category: "Performance",
    technologies: ["React", "JavaScript", "useMemo", "useCallback"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-21-infinite-scroll",
    // day: 21,
    title: "Infinite Scrolling Feed",
    description: "A dynamic feed that loads additional content as the user approaches the end of the page using Intersection Observer.",
    category: "Performance & UX",
    technologies: ["React", "JavaScript", "Intersection Observer", "Async Data"],
    status: "planned",
    featured: false,
  },

  // ============================================================
  // DAYS 22–30
  // Full Applications & External Tools
  // ============================================================

  {
    id: "day-22-kanban-board",
    // day: 22,
    title: "Kanban Drag-and-Drop Board",
    description: "A task management board demonstrating complex list state, drag-and-drop interactions, and dynamic item movement.",
    category: "Advanced UI",
    technologies: ["React", "TypeScript", "Drag & Drop", "State Management"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-23-markdown-editor",
    // day: 23,
    title: "Rich Markdown Editor",
    description: "A reactive Markdown editor that converts user-entered text into formatted content while demonstrating controlled editor state.",
    category: "Editors",
    technologies: ["React", "JavaScript", "Markdown", "Controlled Inputs"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-24-expense-visualizer",
    // day: 24,
    title: "Budget & Expense Visualizer",
    description: "A personal finance interface that converts expense data into visual charts and summaries using Chart.js.",
    category: "Data Visualization",
    technologies: ["React", "JavaScript", "Chart.js", "Data Visualization"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-25-notes-hub",
    // day: 25,
    title: "Local Storage Notes Hub",
    description: "A browser-based notes application that persists editor content using localStorage and restores saved data between sessions.",
    category: "Browser Storage",
    technologies: ["React", "JavaScript", "localStorage", "Forms"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-26-network-status-hook",
    // day: 26,
    title: "Network Status Checker",
    description: "A reusable custom hook that monitors browser online and offline events and exposes network status to React components.",
    category: "Custom Hooks",
    technologies: ["React", "JavaScript", "Custom Hooks", "Browser APIs"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-27-spacex-history-explorer",
    // day: 27,
    title: "SpaceX History Explorer",
    description: "An API-powered SpaceX explorer demonstrating asynchronous data fetching, caching, loading states, and server-state management with TanStack Query.",
    category: "Server State",
    technologies: ["React", "TypeScript", "TanStack Query", "REST API"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-28-quiz-application",
    // day: 28,
    title: "Interactive Quiz Application",
    description: "An interactive quiz application managing questions, answers, scores, timers, and multiple game phases through structured React state.",
    category: "Interactive Applications",
    technologies: ["React", "JavaScript", "State Management", "Timers"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-29-chat-interface",
    // day: 29,
    title: "Chat Interface Simulation",
    description: "A responsive mock messaging application demonstrating conversation state, message rendering, automatic scrolling, and interactive UI behavior.",
    category: "UI Applications",
    technologies: ["React", "JavaScript", "State Management", "Responsive UI"],
    status: "planned",
    featured: false,
  },

  {
    id: "day-30-production-dashboard",
    // day: 30,
    title: "Production Dashboard",
    description: "A polished production-ready dashboard that brings together reusable components, responsive design, state management, performance optimization, and deployment workflows.",
    category: "Production Applications",
    technologies: ["React", "TypeScript", "SCSS", "State Management", "Responsive Design"],
    status: "planned",
    featured: true,
  },
] as const;
