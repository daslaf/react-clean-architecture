import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppRootState } from "../../main/data/appStoreImplementation";
import type { CounterStore } from "../domain/counterStore";
import type { Counter } from "../domain/counterEntity";

import type { CounterStoreState } from "./counterReducer";
import {
  getCounterAction,
  setCounterAction,
  updateCounterAction
} from "./counterActions";

const counterSelector = (state: AppRootState) => state.counter;

const useCounterStoreImplementation = (): CounterStore => {
  const { counter, isLoading, isUpdating } = useSelector<
    AppRootState,
    CounterStoreState
  >(counterSelector);
  const dispatch = useDispatch();

  const setCounter = React.useCallback(
    (counter: Counter) => setCounterAction(counter)(dispatch),
    [dispatch]
  );

  const loadInitialCounter = React.useCallback(
    () => getCounterAction()(dispatch),
    [dispatch]
  );

  const updateCounter = React.useCallback(
    (counter: Counter) => updateCounterAction(counter)(dispatch),
    [dispatch]
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