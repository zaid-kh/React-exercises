import { useState } from "react";

import "./App.css";

function Card(props) {
  console.log("links: ", props.links);
  return (
    <div className="card">
      <img src={props.imageSource} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="links">
        <a href={props.links[0]} className="link">
          Share
        </a>
        <a href={props.links[1]} className="link">
          Export
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <section className="card-container">
        <Card
          imageSource="https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg"
          title="sunset"
          description="the sun goes down the west"
          links={["shareto:", "exportTo:"]}
        />
        <Card
          imageSource="https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg"
          title="sunset"
          description="the sun goes down the west"
          links={["shareto:", "exportTo:"]}
        />
        <Card
          imageSource="https://upload.wikimedia.org/wikipedia/commons/a/a4/Anatomy_of_a_Sunset-2.jpg"
          title="sunset"
          description="the sun goes down the west"
          links={["shareto:", "exportTo:"]}
        />
      </section>
    </>
  );
}

export default App;
