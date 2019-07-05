import React from "react";
import "./UserOutput.css";

const output = props => {
  return (
    <div className="UserOutput">
      <p onClick={props.click}>
        Hi {props.name} from Output 1 (Click here to change the name)
      </p>
      <p>Hi from Output 2</p>
    </div>
  );
};

export default output;
