import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const Box = () => {
  const [color, setColor] = useState("#3333");
  const colors = ["red", "green", "yellow", "blue", "violet"];

  function getRandomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return <div className={`box`} style={{ backgroundColor: color }}></div>;
};
function App() {
  return (
    <>
      <h1>13.3| changing box</h1>
      <Box />
    </>
  );
}

export default App;
