// counterStore.ts
import type { Counter } from "./counterEntity";

interface CounterStore {
  // State
  counter: Counter | undefined;
  isLoading: boolean;
  isUpdating: boolean;

  // Actions
  loadInitialCounter(): Promise<Counter>;
  setCounter(counter: Counter): void;
  updateCounter(counter: Counter): Promise<Counter | undefined>;
}

export type { CounterStore };
