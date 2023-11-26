import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [sign, setSign] = useState("");
  useEffect(() => {
    setSign(() => (count > 0 ? "positive" : count < 0 ? "negative" : ""));
  }, [count]);

  function handleChange(target) {
    if (target.id === "increment") setCount((count) => count + 1);
    if (target.id === "decrement") setCount((count) => count - 1);
  }

  return (
    <>
      <h1>6.3| Increment and Decrementt</h1>
      <div className="card">
        <button id="increment" onClick={(e) => handleChange(e.target)}>
          Increment
        </button>
        <button id="decrement" onClick={(e) => handleChange(e.target)}>
          Decrement
        </button>
      </div>
      <div>
        <p>
          Count =
          <span id="count" className={sign} style={{ fontWeight: "bold" }}>
            {count}
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
