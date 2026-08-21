import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <main className={styles.NotFound}>
      <div className={styles.NotFound__content}>
        <span className={styles.NotFound__code}>404</span>

        <h1 className={styles.NotFound__title}>
          Page not found
        </h1>

        <p className={styles.NotFound__description}>
          The page you're looking for doesn't exist or may have
          been moved.
        </p>

        <Link to="/" className={styles.NotFound__button}>
          Go back home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
