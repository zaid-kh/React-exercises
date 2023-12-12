import "./App.css";
import { Counter } from "./components/Counter";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h1>useCounter</h1>
      <Counter />
      <Counter />
    </>
  );
}

export default App;
