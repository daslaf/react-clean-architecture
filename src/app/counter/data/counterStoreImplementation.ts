import React from "react";

import type { CounterStore } from "../domain/counterStore";
import type { Counter } from "../domain/counterEntity";

import { getCounter, updateCounter as serviceUpdateCounter } from './counterService';

// const counterSelector = (state: AppRootState) => state.counter;

const useCounterStoreImplementation = (): CounterStore => {
  const [counter, setCounter] = React.useState<Counter>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);

  // const { counter, isLoading, isUpdating } = useSelector<
  //   AppRootState,
  //   CounterStoreState
  // >(counterSelector);
  // const dispatch = useDispatch();

  // const setCounter = React.useCallback(
  //   (counter: Counter) => setCounterAction(counter)(dispatch),
  //   [dispatch]
  // );

  const loadInitialCounter = React.useCallback(
    () => {
      setIsLoading(true);

      return getCounter().then(counter => {
        setCounter(counter);
        setIsLoading(false);
        return counter;
      })
    },
    []
  );

  const updateCounter = React.useCallback(
    (counter: Counter) => {
      setIsUpdating(true);

      return serviceUpdateCounter(counter).then(() => {
        setIsUpdating(false);
        return counter;
      })
    },
    []
  );

  return {
    counter,
    isLoading,
    isUpdating,
    setCounter,
    loadInitialCounter,
    updateCounter
  };
};

export { useCounterStoreImplementation };
