import { create } from "zustand";
import type { CounterState } from "./counter.types";
import { persist } from "zustand/middleware";

export const useCounterStore = create<CounterState>()(persist((set) => ({ count: 0, increment: () => set((state) => ({ count: state.count + 1 })), decrement: () => set((state) => ({ count: state.count - 1 })), reset: () => set({ count: 0 }) }), { name: "counter-state" }));
