import React from "react";

import type { CounterStore } from "../domain/counterStore";
import { getCounterUseCase } from "../useCases/getCounterUseCase";
import { incrementCounterUseCase } from "../useCases/incrementCounterUseCase";
import { decrementCounterUseCase } from "../useCases/decrementCounterUseCase";

function useCounterViewModel(store: CounterStore) {
  const getCounter = React.useCallback(
    function () {
      getCounterUseCase({
        loadInitialCounter: store.loadInitialCounter
      });
    },
    [store.loadInitialCounter]
  );

  const incrementCounter = React.useCallback(
    function () {
      incrementCounterUseCase({
        counter: store.counter,
        updateCounter: store.updateCounter,
        setCounter: store.setCounter
      });
    },
    [store.counter, store.updateCounter, store.setCounter]
  );

  const decrementCounter = React.useCallback(
    function () {
      decrementCounterUseCase({
        counter: store.counter,
        updateCounter: store.updateCounter,
        setCounter: store.setCounter
      });
    },
    [store.counter, store.updateCounter, store.setCounter]
  );

  return {
    count: store.counter?.value,
    isLoading: typeof store.counter === "undefined" || store.isLoading,
    canDecrement: Number(store.counter?.value) > 0,
    getCounter,
    incrementCounter,
    decrementCounter
  };
}

export { useCounterViewModel };
