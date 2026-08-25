import { Heading, Section } from "../../../components/ui";
import { Accordion, type AccordionId } from "../../../features/accordion";

const faqs: {
  id: AccordionId;
  question: string;
  answer: string;
}[] = [
  {
    id: 1,
    question: "What is Frontend Lab?",
    answer: "Frontend Lab is a practical React + TypeScript project where different frontend concepts, UI components, state-management patterns, API integrations, and interactive features are built and explored through small projects.",
  },
  {
    id: 2,
    question: "What technologies are used in Frontend Lab?",
    answer: "Frontend Lab uses React, TypeScript, Vite, React Router, Zustand, SCSS/Sass, CSS Modules, Bootstrap, Lucide React, Axios, CSS custom properties, and ESLint.",
  },
  {
    id: 3,
    question: "Is Frontend Lab a single application or a collection of projects?",
    answer: "It is a single application that acts as a frontend laboratory. It contains multiple small, focused projects and experiments that can be explored individually.",
  },
  {
    id: 4,
    question: "What features are currently available?",
    answer: "Current features include Counter, Digital Clock, Profile Card Generator, Theme Changer, Simple Calculator, and Accordion.",
  },
  {
    id: 5,
    question: "Are all planned features implemented?",
    answer: "No. Some features are still planned or in progress. The Projects page separates projects into Completed, In Progress, and Planned.",
  },
  {
    id: 6,
    question: "Why does Frontend Lab use feature-based architecture?",
    answer: "Feature-based architecture keeps each feature's components, logic, types, stores, and styles together, making individual projects easier to understand, maintain, and extend.",
  },
  {
    id: 7,
    question: "Does Frontend Lab support multiple themes?",
    answer: "Yes. The application uses semantic CSS custom properties and supports themes such as Dark, Light, Forest, Cyberpunk, Ocean, Synthwave, Matrix, and Midnight.",
  },
  {
    id: 8,
    question: "How are reusable UI components handled?",
    answer: "Common presentation components such as Button, Heading, Section, Container, Header, and Footer are kept in src/components/ui/ and reused across the application.",
  },
  {
    id: 9,
    question: "Does Frontend Lab use state management?",
    answer: "Yes. Zustand is used where shared or feature-specific state management is useful. Simpler features can use React state and hooks when a separate store is unnecessary.",
  },
  {
    id: 10,
    question: "Is Frontend Lab responsive?",
    answer: "Yes. The UI is designed to work across different screen sizes using responsive SCSS Modules, semantic layouts, and reusable components.",
  },
  {
    id: 11,
    question: "Can I explore individual projects?",
    answer: "Yes. Completed features have their own routes under /features, while the Explore Projects page provides an overview of available and planned projects.",
  },
  {
    id: 12,
    question: "Is Frontend Lab intended for production use?",
    answer: "Frontend Lab is primarily a learning and experimentation project. Its goal is to demonstrate practical frontend development patterns while maintaining clean, reusable, and scalable code.",
  },
  {
    id: 13,
    question: "Will more projects be added?",
    answer: "Yes. Frontend Lab is designed to grow progressively with more frontend experiments and practical projects.",
  },
];

export function AccordionPage() {
  return (
    <Section id="hero" className="mt-4 mb-4">
      <div className="text-center">
        <Heading element="span" variant="badge">
          React Compound Component
        </Heading>

        <Heading element="h1">
          Frontend Lab — <span>FAQs</span>
        </Heading>
      </div>

      {faqs.length > 0 && (
        <Accordion>
          {faqs.map((faq) => (
            <Accordion.Item key={faq.id} id={faq.id}>
              <Accordion.Title>{faq.question}</Accordion.Title>
              <Accordion.Content>{faq.answer}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Section>
  );
}
