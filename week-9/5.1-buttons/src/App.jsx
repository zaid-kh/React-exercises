import { useState } from "react";

import "./App.css";

function Button(props) {
  return <button>{props.name}</button>;
}

function App() {
  return (
    <>
      <Button name={"important"} />
      <Button name={"not important"} />
    </>
  );
}

export default App;
