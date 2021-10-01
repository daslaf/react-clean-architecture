import React from "react";
import styled from "styled-components";

import Button from "../../shared/ui/Button";
import Spinner from "../../shared/ui/Spinner";

import { useCounterViewModel } from "../controller/counterViewModel";
import { useCounterStoreImplementation } from "../data/counterStoreImplementation";

const Count = styled.span`
  font-size: 1.375rem;
  min-width: 4rem;
  display: inline-block;
`;

const CounterView = () => {
  const store = useCounterStoreImplementation();
  const {
    count,
    shouldDisableButton,
    shouldShowSpinner,
    getCounter,
    incrementCounter,
    decrementCounter
  } = useCounterViewModel(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <div className="App">
      {shouldShowSpinner ? (
        <Spinner />
      ) : (
        <>
          <Button onClick={decrementCounter} disabled={shouldDisableButton}>
            dec
          </Button>
          <Count>{count}</Count>
          <Button onClick={incrementCounter}>inc</Button>
        </>
      )}
    </div>
  );
};

export default CounterView;
