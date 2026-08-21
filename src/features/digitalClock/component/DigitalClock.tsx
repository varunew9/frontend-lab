import { useEffect, useState } from "react";

import styles from "../DigitalClock.module.scss";
import type { DigitalClockPops } from "../digitalClock.type";

export function DigitalClock({ title, hour12, locale = "en-IN" }: DigitalClockPops) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const time = currentTime.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12 });
  const date = currentTime.toLocaleDateString(locale, { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <section className={styles.clock}>
      <div className={styles.card}>
        <span className={styles.label}>{title}</span>
        <time className={styles.time}>{time}</time>
        <time className={styles.date}>{date}</time>
      </div>
    </section>
  );
}
