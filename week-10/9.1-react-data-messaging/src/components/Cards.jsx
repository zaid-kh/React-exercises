import React from "react";

export const Cards = ({ people }) => {
  console.log("people: ", people);
  function CardList() {
    const PeopleList = people.map((person, i) => (
      <li key={i}>
        <h6>Card {i + 1}</h6>
        <p>{person.name}</p>
        <p>{person.birthday}</p>
        <ul>
          {person.favoriteFoods.meats.map((food, j) => (
            <li key={j}>{food}</li>
          ))}
          {person.favoriteFoods.fish.map((food, j) => (
            <li key={j}>{food}</li>
          ))}
        </ul>
      </li>
    ));

    return <>{PeopleList}</>;
  }

  return (
    <div className="cards">
      <h4>cards</h4>
      <ul>
        <CardList />
      </ul>
    </div>
  );
};
