import { useState } from "react";

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const double = () => setCount((prevCount) => prevCount * 2);
  const divideInTwo = () => setCount((prevCount) => prevCount / 2);
  return [count, increment, decrement, double, divideInTwo];
};
