import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const data = ["Hello", "World"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";
  return (
    <>
      <h1>{data[0] + " " + data[1] + "!"}</h1>
      <div className="card">
        <p>
          {number1} + {number2} = {number1 + number2}{" "}
        </p>
        <p>The String's length is {string.length}</p>
      </div>
    </>
  );
}

export default App;
