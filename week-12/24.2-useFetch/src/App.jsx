import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url1 = "https://api.publicapis.org/entries";
  const { data, isLoading, error } = useFetch(url1);
  console.log("data: ", data);
  return (
    <>
      <h1>24.2 | useFetch</h1>
      {isLoading ? (
        <h3>loading ...</h3>
      ) : data ? (
        data.entries.map((api, index) => {
          return <p key={index}>{api.API}</p>;
        })
      ) : (
        <h2>No data found</h2>
      )}
    </>
  );
}

export default App;
