import React, { useState, useEffect } from "react";
import "./Dashboard.css";

export const Dashboard = () => {
  const [colr, setColr] = useState("green");
  const [dist, setDist] = useState(0);
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
  useEffect(() => {
    const generator = makeGenerator();
    generator.throw("Dashboard - Error");
    // try {
    //   //   generator.throw("Error: From code");
    //   //   obj["d"] = obj["d"] ? obj["d"] + 1 : 1;
    //   generator.throw("Number Error");
    //   //   const speed = dist / time;
    //   //   speed < 40 && setColr("green");
    //   //   speed < 50 && speed > 40 && setColr("orange");
    //   //   speed > 50 && setColr("red");
    //   //   dist < 0 || (time < 0 && setColr("grey"));
    // } catch (e) {
    //   console.log(e);
    // }
  }, [dist, time]);
  return (
    <div>
      Distance :
      <input type="number" onChange={(e) => setDist(e.target.value)} />
      <br />
      <br />
      Time : <input type="number" onChange={(e) => setTime(e.target.value)} />
      <br />
      <br />
      <div className="bulb" style={{ backgroundColor: colr }}>
        <p>{dist / time} km/hr</p>
      </div>
    </div>
  );
};
