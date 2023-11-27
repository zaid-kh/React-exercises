import { useState } from "react";
import { importedDataObj } from "./data/data";

import "./App.css";
import { Names } from "./components/Names";
import { Cards } from "./components/Cards";

function App() {
  const [dataObj, setDataObj] = useState(importedDataObj);
  let names = dataObj.getNames();
  return (
    <>
      <h1>9.1| Data Messaging</h1>
      <Names names={names} />
      <Cards people={dataObj.getBornBefore(1990)} />
    </>
  );
}

export default App;
