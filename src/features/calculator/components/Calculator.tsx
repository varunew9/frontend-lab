import { useState } from "react";
import type { CalculatorButton, CalculatorInput } from "../calculator.types";
import styles from "../Calculator.module.scss";

const buttons: CalculatorButton[] = ["C", "R", ".", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "="];

export function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: CalculatorInput) => {
    if (value === "=") {
      calculateResult();
      return;
    }

    if (value === "C") {
      clearCalculator();
      return;
    }

    if (value === "R") {
      setInput((current) => current.slice(0, -1));
      return;
    }

    setInput((current) => current + value);
  };

  const calculateResult = () => {
    if (!input.trim()) {
      return;
    }

    try {
      // Temporary implementation for this simple learning project.
      // const calculatedResult = eval(input);
      const calculatedResult = new Function(`return ${input}`)();

      setResult(String(calculatedResult));
      setInput("");
    } catch {
      setResult("Error");
    }
  };

  const clearCalculator = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div className={styles.input}>{input || "0"}</div>

        <div className={styles.result}>{result}</div>
      </div>

      <div className={styles.keypad}>
        {buttons.map((button) => {
          const isEqual = button === "=";
          const isControl = button === "C" || button === "R";

          return (
            <button key={button} type="button" className={`${styles.button} ${isEqual ? styles.equalButton : ""} ${isControl ? styles.controlButton : ""}`} onClick={() => handleClick(button)}>
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
}
