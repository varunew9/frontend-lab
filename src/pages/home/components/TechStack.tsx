import { Code, Binary, Palette, Component, Braces, FileJson, Atom, Layers, Boxes, Workflow, RefreshCw, ClipboardList, ShieldCheck, Wind, Grid, Building, History, Zap, Globe, PenTool, Layers3, Image, FolderGit2, GitGraph, GitCommit, SquareKanban, IterationCw, Users, Terminal, Smartphone, Eye, Monitor, Activity, Gauge, Clock, Scissors, Link, Database, CheckCircle } from "lucide-react";
import { Heading, Section } from "../../../components/ui";
import styles from "../Home.module.scss";

// const stacks = [
//   {
//     title: "Frontend Technology",
//     items: ["HTML5", "Semantic HTML", "CSS3", "Sass", "JavaScript", "TypeScript", "React", "Redux", "Redux Toolkit", "Zustand", "TanStack Query", "React Hook Form", "Zod", "Tailwind CSS", "Bootstrap", "Foundation Zurb", "jQuery", "AMP HTML", "WordPress"],
//   },
//   {
//     title: "Design & Collaboration",
//     items: ["Figma", "Adobe XD", "Adobe Photoshop", "GitHub", "GitLab", "SVN", "Jira", "Agile", "Scrum", "VS Code"],
//   },
//   {
//     title: "Frontend Engineering",
//     items: ["Responsive Design", "Accessibility", "Cross-Browser Compatibility", "Core Web Vitals", "Performance Optimization", "Lazy Loading", "Code Splitting", "API Integration", "State Management", "Form Validation"],
//   },
// ];

const stacks = {
  "Frontend Technology": {
    html5: { icon: Code, label: "HTML5" },
    semanticHtml: { icon: Binary, label: "Semantic HTML" },
    css3: { icon: Palette, label: "CSS3" },
    sass: { icon: Component, label: "Sass" },
    javascript: { icon: Braces, label: "JavaScript" },
    typescript: { icon: FileJson, label: "TypeScript" },
    react: { icon: Atom, label: "React" },
    redux: { icon: Layers, label: "Redux" },
    reduxToolkit: { icon: Boxes, label: "Redux Toolkit" },
    zustand: { icon: Workflow, label: "Zustand" },
    tanstackQuery: { icon: RefreshCw, label: "TanStack Query" },
    reactHookForm: { icon: ClipboardList, label: "React Hook Form" },
    zod: { icon: ShieldCheck, label: "Zod" },
    tailwindCss: { icon: Wind, label: "Tailwind CSS" },
    bootstrap: { icon: Grid, label: "Bootstrap" },
    foundationZurb: { icon: Building, label: "Foundation Zurb" },
    jquery: { icon: History, label: "jQuery" },
    ampHtml: { icon: Zap, label: "AMP HTML" },
    wordpress: { icon: Globe, label: "WordPress" },
  },
  "Design & Collaboration": {
    figma: { icon: PenTool, label: "Figma" },
    adobeXd: { icon: Layers3, label: "Adobe XD" },
    adobePhotoshop: { icon: Image, label: "Adobe Photoshop" },
    github: { icon: GitGraph, label: "GitHub" },
    gitlab: { icon: FolderGit2, label: "GitLab" },
    svn: { icon: GitCommit, label: "SVN" },
    jira: { icon: SquareKanban, label: "Jira" },
    agile: { icon: IterationCw, label: "Agile" },
    scrum: { icon: Users, label: "Scrum" },
    vsCode: { icon: Terminal, label: "VS Code" },
  },
  "Frontend Engineering": {
    responsiveDesign: { icon: Smartphone, label: "Responsive Design" },
    accessibility: { icon: Eye, label: "Accessibility" },
    crossBrowserCompatibility: { icon: Monitor, label: "Cross-Browser Compatibility" },
    coreWebVitals: { icon: Activity, label: "Core Web Vitals" },
    performanceOptimization: { icon: Gauge, label: "Performance Optimization" },
    lazyLoading: { icon: Clock, label: "Lazy Loading" },
    codeSplitting: { icon: Scissors, label: "Code Splitting" },
    apiIntegration: { icon: Link, label: "API Integration" },
    stateManagement: { icon: Database, label: "State Management" },
    formValidation: { icon: CheckCircle, label: "Form Validation" },
  },
};

export function TechStack() {
  return (
    <Section id="tech-stack" className={styles.techStackSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Technology Stack</span>
        <Heading element="h2" className={styles.sectionTitle}>
          Modern Tools for <span>Modern Frontend Development</span>
        </Heading>
        <p className={styles.sectionSubtitle}>Explore the technologies, tools, and engineering practices used throughout the projects.</p>
      </div>

      <div className={styles.stackPanel}>
        <div className={styles.stackPanelTitle}>Frontend Engineering Stack</div>

        <div className={styles.stackGrid}>
          {Object.entries(stacks).map(([categoryTitle, itemsObj]) => (
            <div key={categoryTitle} className={styles.subPanel}>
              <h3 className={styles.subPanelTitle}>{categoryTitle}</h3>

              <div className={styles.logoGrid}>
                {Object.entries(itemsObj).map(([itemKey, itemData]) => {
                  const IconComponent = itemData.icon;
                  return (
                    <div key={itemKey} className={styles.stackItem} title={itemData.label}>
                      <div className={styles.stackIcon}>
                        <IconComponent size={20} />
                      </div>
                      <span>{itemData.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
