import { useState } from "react";
import "./App.css";

// let notHidden = true;
// function setVisible() {
//   notHidden = !notHidden;
//   console.log("notHidden: ", notHidden);
// }

function ShowHideComponent() {
  function changeVisibility() {
    setVisible(!notHidden);
  }
  const [notHidden, setVisible] = useState(false);

  const box = <div className="yellow-box"></div>;
  return (
    <>
      <button onClick={changeVisibility}>show/hide</button>
      {notHidden && box}
    </>
  );
}

function App() {
  return (
    <>
      <h1>Hide and Seek</h1>
      <div className="card">
        <ShowHideComponent />
      </div>
    </>
  );
}

export default App;
