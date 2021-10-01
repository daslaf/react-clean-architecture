import type { AnyAction } from "redux";
import type { CounterStore } from "../domain/counterStore";
import * as actionTypes from "./counterActionTypes";

type CounterStoreState = Omit<CounterStore, "loadInitialCounter" | "setCounter" | "updateCounter">;

const INITIAL_STATE: CounterStoreState = {
  counter: undefined,
  isLoading: false,
  isUpdating: false
};

const counterReducer = (state: CounterStoreState = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_COUNTER:
      return { ...state, counter: action.counter };
    case actionTypes.GET_COUNTER:
      return { ...state, isLoading: true };
    case actionTypes.GET_COUNTER_SUCCESS:
      return { ...state, isLoading: false, counter: action.counter };
    case actionTypes.UPDATE_COUNTER:
      return { ...state, isUpdating: true };
    case actionTypes.UPDATE_COUNTER_SUCCESS:
      return { ...state, isUpdating: false };
    default:
      return state;
  }
};

export { counterReducer };
export type { CounterStoreState };
