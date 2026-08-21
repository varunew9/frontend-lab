import { UserRound, Building } from "lucide-react";
import { Button } from "../../../components/ui";
import styles from "../ProfileCard.module.scss";
import type { DummyProfileInterface } from "../profileCard.type";

interface ProfileCardProps {
  profile: DummyProfileInterface;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className={styles.card}>
        <div className={styles.imageContainerDark}>
          <img src="/userImage.jpg" alt={profile.name} />
        </div>

        <div className={styles.cardContent}>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>{profile.name}</h2>

            <span className={`${styles.badge} ${styles.badgeGreen}`}>✓</span>
          </div>

          <p className={styles.bio}>{profile.company.catchPhrase}</p>

          <div className={styles.footer}>
            <div className={styles.stats}>
              <span className={styles.stat} title="Username">
                <span>
                  <UserRound />
                </span>{" "}
                {profile.username}
              </span>

              <span className={styles.stat} title="Company">
                <span>
                  <Building />
                </span>{" "}
                {profile.company.name.split("-")[0]}
              </span>
            </div>

            <Button className={styles.btn}>Follow +</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
