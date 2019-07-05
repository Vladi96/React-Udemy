import React from "react";
import "./BurgerControl.css";

const burgerControl = props => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button
      className="Less"
      onClick={props.removeIngredient}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className="More" onClick={props.addIngredient}>
      More
    </button>
  </div>
);

export default burgerControl;
