import React, { useState } from "react";
import "./MyTime.css";

export const MyTime = () => {
  const [time, setTime] = useState(0);
  setTimeout(() => {
    setTime(time + 1);
  }, 1000);
  return (
    <div className="time">
      <h1>{time}</h1>
    </div>
  );
};
