import { useState } from "react";
import "./App.css";
function Box1() {
  return (
    <div className="greenBox box">
      <Box2></Box2>
    </div>
  );
}
function Box2() {
  return (
    <div className="bluebox box">
      <Box3></Box3>
    </div>
  );
}
function Box3() {
  return (
    <div className="pinkbox box">
      <Box4 />
      <Box4 />
    </div>
  );
}
function Box4() {
  return <div className="purpleBox"></div>;
}
function App() {
  return (
    <>
      <Box1></Box1>
    </>
  );
}

export default App;
