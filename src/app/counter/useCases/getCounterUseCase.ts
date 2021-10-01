import type { CounterStore } from "../domain/counterStore";

type GetCounterStore = Pick<CounterStore, "loadInitialCounter">;

const getCounterUseCase = (store: GetCounterStore) => {
  store.loadInitialCounter();
};

export { getCounterUseCase };
