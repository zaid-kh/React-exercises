import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function Box({ id, size }) {
  return <div id={`box-${id}`} className={`box show ${size}`}></div>;
}

function App() {
  const [box1Visible, setBox1Visible] = useState(false);

  const [box2Visible, setBox2Visible] = useState(false);
  const [box3Visible, setBox3Visible] = useState(false);
  const [box4Visible, setBox4Visible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBox1Visible(true);
      setBox2Visible(true);
      setBox3Visible(true);
      setBox4Visible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBox1Visible(false);
      setBox2Visible(false);
      setBox3Visible(false);
      setBox4Visible(false);
    }, 5000);
  }, []);
  return (
    <>
      <h1>13.2 | Box Animation</h1>
      {box1Visible && <Box id={1} size={"small"} />}
      {box2Visible && <Box id={2} size={""} />}
      {box3Visible && <Box id={3} size={"big"} />}
      {box4Visible && <Box id={4} size={"large"} />}
    </>
  );
}

export default App;
