import React from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter = ({ text }) => {
  const [counter, increment, decrement, double, divideInTwo] = useCounter(0);
  return (
    <div>
      <h1>
        Counter{text}: {counter}
      </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={divideInTwo}>DivideInTwo</button>
    </div>
  );
};
