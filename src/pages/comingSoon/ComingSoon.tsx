import { Telescope } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import styles from "./ComingSoon.module.scss";

export function ComingSoon() {
  const { pathname } = useLocation();

  const slug = pathname.split("/").filter(Boolean).pop() ?? "feature";

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  console.log({ slug, title });

  return (
    <main className={styles.comingSoon}>
      <div className={styles.content}>
        <span className={styles.code}>Coming Soon</span>

        <h1 className={styles.title}>
          {title} <span>is in progress</span>
        </h1>

        <p className={styles.description}>This feature is currently being developed and will be available soon. Check back later for the completed experience.</p>

        <Link to="/features" className={styles.button}>
          <Telescope />
          &nbsp; Explore Mini Projects
        </Link>
      </div>
    </main>
  );
}
