import React from "react";

const validation = props => {
  let valueLength = props.value.length;
  return (
    <div>
      <p>{props.value}</p>
      <p>{valueLength <= 5 ? "Text too short!" : "Text long enough!"}</p>
    </div>
  );
};

export default validation;
