import { Plus, Minus, RotateCcw } from "lucide-react";
import { useCounterStore } from "../counter.store";
import styles from "../Counter.module.scss";
import { Button } from "../../../components/ui";

export function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <section className={styles.counter}>
      <div className={styles.card}>
        <span className={styles.label}>Current count</span>

        <strong className={styles.value}>{count}</strong>

        <div className={styles.actions}>
          <Button onClick={decrement} size="md">
            <Minus />
          </Button>

          <Button onClick={reset} variant="primary" size="md">
            <RotateCcw /> Reset Count
          </Button>

          <Button onClick={increment} size="md">
            <Plus />
          </Button>
        </div>
      </div>
    </section>
  );
}
