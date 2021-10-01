import debounce from "lodash.debounce";

import type { Counter } from "../domain/counterEntity";
import type { CounterStore } from "../domain/counterStore";

type UpdateCounterStore = Pick<
  CounterStore,
  "counter" | "updateCounter" | "setCounter"
>;

const debouncedTask = debounce((task) => Promise.resolve(task()), 500);

const updateCounterUseCase = (
  store: UpdateCounterStore,
  updateBy: (counter: Counter) => Counter
) => {
  const updatedCounter = store.counter
    ? updateBy(store.counter)
    : store.counter;

  if (updatedCounter) {
    store.setCounter(updatedCounter);

    return debouncedTask(() => {
      console.log('call update counter')
      return store.updateCounter(updatedCounter)
    });
  }
};

export { updateCounterUseCase };
export type { UpdateCounterStore };
