import React, { useState } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";
export const Parent = () => {
  const [data, setData] = useState("No Data");
  const handleData = (txt) => {
    setData(txt);
  };
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>P1: {data}</p>
      <Child1 handleData={handleData} data={data} />
      <Child2 data={data} />
    </div>
  );
};
