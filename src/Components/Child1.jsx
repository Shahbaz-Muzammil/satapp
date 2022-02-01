import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { GrandChild } from "./GrandChild";
export const Child1 = (props) => {
  const [txt, setTxt] = useState("");
  return (
    <div className="child">
      <h1>Child 1</h1>
      <p>
        Data C1 : <h3>{props.data}</h3>
      </p>
      <FormControl
        type="text"
        onChange={(e) => setTxt(e.target.value)}
      ></FormControl>
      <Button onClick={() => props.handleData(txt)}>Add Data</Button>
      <GrandChild data={props.data} />
    </div>
  );
};
