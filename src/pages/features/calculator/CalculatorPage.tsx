import { Heading } from "../../../components/ui";
import { Section } from "../../../components/ui/section/Section";
import { Calculator } from "../../../features/calculator";

export function CalculatorPage() {
  return (
    <>
      {/* Hero / Demo */}
      <Section id="hero" className="my-3">
        <div className="text-center">
          <Heading element="span" variant="badge">
            React Basic Calculator
          </Heading>

          <Heading element="h1">
            Basic <span>Calculator</span>
          </Heading>
        </div>

        <Calculator />
      </Section>
    </>
  );
}
