import { Heading, Section } from "../../../components/ui/index";
import { DigitalClock } from "../../../features/digitalClock";

export function DigitalClockPage() {
  return (
    <>
      <Section id="hero">
        <div className="mt-2 text-center">
          <Heading element="span" variant="badge">
            React State Management
          </Heading>

          <Heading element="h1">
            Digital Clock <span>App</span>
          </Heading>
        </div>
        <DigitalClock title="India" hour12 />
      </Section>
    </>
  );
}
