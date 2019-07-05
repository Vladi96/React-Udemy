import React from "react";
import "./UserInput.css";

const input = props => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default input;
