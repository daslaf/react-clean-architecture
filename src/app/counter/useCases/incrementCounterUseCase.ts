import { updateCounterUseCase } from "./updateCounterUseCase";
import type { UpdateCounterStore } from "./updateCounterUseCase";
import { increment } from "../domain/counterModel";

const incrementCounterUseCase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, increment);
};

export { incrementCounterUseCase };
