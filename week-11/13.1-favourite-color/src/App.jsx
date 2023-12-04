import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Red");

  useEffect(() => {
    setTimeout(() => {
      setColor("Green");
    }, 1000);
  }, []);
  function FavoriteColor() {
    return <h1>My favorite color is {color}</h1>;
  }

  return (
    <>
      <h1>13.1 | Favourite Color</h1>
      <div className="card">
        <FavoriteColor />
      </div>
    </>
  );
}

export default App;
