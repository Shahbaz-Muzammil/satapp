import React from "react";

export const GrandChild = (props) => {
  return (
    <div className="grandchild">
      <h1>Grand Child</h1>
      <p>
        Data C1: <h2>{props.data}</h2>
      </p>
    </div>
  );
};
