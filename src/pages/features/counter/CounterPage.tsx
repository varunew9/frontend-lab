import { Heading } from "../../../components/ui";
import { Section } from "../../../components/ui/section/Section";
import { Counter } from "../../../features/counter";

export function CounterPage() {
  return (
    <>
      {/* Hero / Demo */}
      <Section id="hero">
        <div className="text-center">
          <Heading element="span" variant="badge">
            React State Management
          </Heading>

          <Heading element="h1">
            Counter <span>App</span>
          </Heading>
        </div>

        <Counter />
      </Section>

      {/* About */}
      {/* <Section>
        <div className="col-10 mx-auto">
          <div className="text-center">
            <Heading element="span" variant="label">
              About the Project
            </Heading>

            <Heading element="h2" className="mb-3">
              Simple App, <span>Clean Architecture</span>
            </Heading>
          </div>

          <div className="text-center">
            <p>Counter App is a small React project created to demonstrate practical state management using Zustand. The application provides a simple counter interface with increment, decrement, and reset functionality.</p>

            <p>While the functionality is intentionally simple, the project focuses on maintaining a clean and scalable structure by separating state management, UI components, types, and styling into dedicated modules.</p>

            <p>The counter state is persisted locally, allowing the current value to remain available even after refreshing the page.</p>
          </div>
        </div>
      </Section> */}

      {/* Skills & Technologies */}
      {/* <Section>
        <div className="text-center">
          <Heading element="span" variant="label">
            Skills & Technologies
          </Heading>

          <Heading element="h2" className="mb-3">
            Built <span>With</span>
          </Heading>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="text-center">
              <Heading element="h3">React</Heading>

              <p>Component-based UI development and reusable interfaces.</p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="text-center">
              <Heading element="h3">TypeScript</Heading>

              <p>Type-safe components, state, and application structure.</p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="text-center">
              <Heading element="h3">Zustand</Heading>

              <p>Lightweight and centralized state management.</p>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="text-center">
              <Heading element="h3">SCSS</Heading>

              <p>Modular and maintainable component styling.</p>
            </div>
          </div>
        </div>
      </Section> */}

      {/* Architecture */}
      {/* <Section>
        <div className="col-10 mx-auto text-center">
          <Heading element="span" variant="label">
            Development Approach
          </Heading>

          <Heading element="h2" className="mb-3">
            Feature-Based <span>Architecture</span>
          </Heading>

          <p>The Counter feature follows a feature-based project structure, keeping its components, state, types, and styles together. This makes the feature easier to understand, maintain, and extend independently from the rest of the application.</p>

          <p>The UI is built using reusable components, while the business logic and state management remain isolated from the presentation layer.</p>
        </div>
      </Section> */}

      {/* GitHub */}
      {/* <Section>
        <div className="text-center col-10 mx-auto">
          <Heading element="span" variant="label">
            Source Code
          </Heading>

          <Heading element="h2" className="mb-3">
            Explore the <span>Code</span>
          </Heading>

          <p>Interested in the implementation? Explore the complete source code, project structure, and implementation details on GitHub.</p>

          <Button type="button" variant="primary" size="md">
            View on GitHub
          </Button>
        </div>
      </Section> */}
    </>
  );
}
