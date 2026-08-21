import { Container } from "../../../components/ui";
import { useProfileStore } from "../profileCard.store";
import { ProfileCard } from "./ProfileCard";

function ProfileCardList() {
  const profiles = useProfileStore((state) => state.profiles);

  return (
    <Container>
      <div className="row justify-center">{profiles.length > 0 ? profiles.map((profile) => <ProfileCard key={profile.id} profile={profile} />) : <p>No profiles found.</p>}</div>
    </Container>
  );
}

export default ProfileCardList;
