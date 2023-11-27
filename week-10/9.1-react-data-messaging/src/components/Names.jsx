import React from "react";

export const Names = ({ names }) => {
  function NameList() {
    const NamesList = names.map((name, i) => <li key={i}>{name}</li>);

    return <>{NamesList}</>;
  }

  return (
    <div>
      <h4>Names</h4>
      <ul>
        <NameList />
      </ul>
    </div>
  );
};
