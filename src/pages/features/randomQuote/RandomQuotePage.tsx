import { Heading, Section } from "../../../components/ui";
import { RandomQuote } from "../../../features/randomQuote";

export function RandomQuotePage() {
  return (
    <>
      <Section id="hero">
        <div className="text-center">
          <Heading element="span" variant="badge">
            React State Management
          </Heading>

          <Heading element="h1">
            Random <span>quote</span>
          </Heading>
        </div>
        <RandomQuote />
      </Section>
    </>
  );
}
