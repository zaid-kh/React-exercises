import { useState } from "react";
import "./App.css";
const colors = ["blue", "red", "yellow"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>7.1| child to father colors</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
