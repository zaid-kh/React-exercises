import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <h1>React</h1>
      <div className="card">
        <p>
          {" "}
          <a href="https://react.dev">Click Me</a>
        </p>
      </div>
      <p className="read-the-docs">Click on the React logo to learn more</p>
    </>
  );
}

export default App;
