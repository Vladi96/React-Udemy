import React from "react";
import "./Button.css";

const button = props => (
  <button
    disabled={props.disabled}
    className={`Button ${props.btnType}`}
    onClick={props.clickedPurchase}
  >
    {props.children}
  </button>
);

export default button;
