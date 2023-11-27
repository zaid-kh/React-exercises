import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [sign, setSign] = useState("");
  //! another solution
  // useEffect(() => {
  //   setSign(() => (count > 0 ? "positive" : count < 0 ? "negative" : ""));
  // }, [count]);

  function handleChange(target) {
    if (target.id === "increment")
      setCount((count) => {
        const x = count + 1;
        changeSign(x);
        return x;
      });
    if (target.id === "decrement")
      setCount((count) => {
        const x = count - 1;
        changeSign(x);
        return x;
      });
  }

  function changeSign(param) {
    setSign(() => (param > 0 ? "positive" : param < 0 ? "negative" : ""));
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
