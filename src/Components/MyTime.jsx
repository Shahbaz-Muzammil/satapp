import React, { useState } from "react";
import "./MyTime.css";

export const MyTime = () => {
  const [time, setTime] = useState(0);

  function* makeGenerator() {
    try {
      yield 1;
      yield 1;
      yield 1;
    } catch (e) {
      console.log(e);
    }
  }

  const gen = makeGenerator();
  gen.throw("MyTime - Error");
  setTimeout(() => {
    setTime(time + 1);
  }, 1000);
  return (
    <div className="time">
      <h1>{time}</h1>
    </div>
  );
};
