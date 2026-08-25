// import { Button, Heading, Section } from "../../../components/ui";
import onePieceLuffy from "../../../assets/one-piece-luffy.webp";
import styles from "./BackgroundChanger.module.scss";
import { useState } from "react";

const emotions = [
  { id: "happy", label: "😄 Happy" },
  { id: "angry", label: "😡 Angry" },
  { id: "sad", label: "😢 Sad" },
  { id: "fear", label: "😨 Fear" },
  { id: "confident", label: "😎 Confident" },
  { id: "calm", label: "🌊 Calm" },
];

export function BackgroundChanger() {
  const [emotion, setEmotion] = useState("happy");

  const emotionClass = `scene--${emotion}`;
  console.log(emotion, emotionClass);

  return (
    <>
      <div className={`${styles.scene} ${styles[emotionClass]}`}>
        <div className={styles["background-glow"]} />
        <div className={styles["background-title"]}>
          Background <br /> Changer
        </div>

        <div className={styles["scene-content"]}>
          <div className={styles["emotion-buttons"]}>
            {emotions.map((emo) => (
              <button key={emo.id} id={emo.id} className={emotion === emo.id ? "active" : ""} onClick={() => setEmotion(emo.id)}>
                {emo.label}
              </button>
            ))}
          </div>
          <div className={styles.character}>
            <img src={onePieceLuffy} alt="one Piece Luffy" />
          </div>
        </div>
      </div>
    </>
  );
}
