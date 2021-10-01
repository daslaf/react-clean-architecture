import { updateCounterUseCase } from "./updateCounterUseCase";
import type { UpdateCounterStore } from "./updateCounterUseCase";
import { decrement } from "../domain/counterModel";

const decrementCounterUseCase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, decrement);
};

export { decrementCounterUseCase };
