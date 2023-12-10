import { useState } from "react";

import "./App.css";

function App() {
  function changeHandler(e) {
    const input = e.target;
    const id = input.id;
    const letter = input.value;
    if (lettersArray[id] === letter) input.className = "correct";
    else input.className = "wrong";
  }
  const [inputsArray, setInputsArray] = [];

  let word = "hello"; //* add word here for now
  let lettersArray = word.split("");
  console.log("lettersArray: ", lettersArray);
  return (
    <>
      <h1>Word Game</h1>
      <h3>Word to guess {word}</h3>
      <section className="inputs-container">
        {word ? (
          lettersArray.map((letter, index) => {
            return (
              <input
                type="text"
                key={index}
                name="letter"
                id={index}
                onChange={(e) => changeHandler(e, index)}
                maxLength={1}
              />
            );
          })
        ) : (
          <h4>No word found</h4>
        )}
      </section>
    </>
  );
}

export default App;
