import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        My name is {props.name} and i'm {props.age} years old!
      </p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
