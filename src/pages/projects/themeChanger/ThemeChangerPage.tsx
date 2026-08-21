import { Heading, Section } from "../../../components/ui";
import { ThemeChanger } from "../../../features/themeChanger";

export function ThemeChangerPage() {
  return (
    <>
      <Section id="hero">
        <div className="mt-2 text-center">
          <Heading element="span" variant="badge">
            React State Management
          </Heading>

          <Heading element="h1">
            Theme <span>Changer</span>
          </Heading>
        </div>
        <ThemeChanger />
      </Section>
    </>
  );
}
