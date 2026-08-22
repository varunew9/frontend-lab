import { Heading, Section } from "../../../components/ui";
import ProfileCardList from "../../../features/profileCardGenerator/component/ProfileCardList";

export function ProfileCardGenratorPage() {
  return (
    <>
      <Section id="hero">
        <div className="mt-2 text-center">
          <Heading element="span" variant="badge">
            React State Management
          </Heading>

          <Heading element="h1">
            Profile ID Card <span>Generator</span>
          </Heading>
        </div>

        <ProfileCardList />
      </Section>
    </>
  );
}
