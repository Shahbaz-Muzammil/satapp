import React, { useState, useEffect } from "react";

export const MyLife = () => {
  const [data, setData] = useState("Birth");

  useEffect(() => {
    const result = "APi got hit";
    setData(result);
  }, []);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};
