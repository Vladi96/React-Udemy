import React from "react";
import BurgerControl from "./BurgerControl/BurgerControl";
import "./BurgerControls.css";

const burgerControls = props => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];

  return (
    <div className="BurgerControls">
      <p className="CurrentPrice">
        Current Price: <strong>{props.price}$</strong>
      </p>
      {controls.map(control => {
        return (
          <BurgerControl
            label={control.label}
            key={control.label}
            disabled={props.disabled[control.type]}
            addIngredient={() => props.addIngredient(control.type)}
            removeIngredient={() => props.removeIngredients(control.type)}
          />
        );
      })}

      <button
        className="OrderButton"
        disabled={!props.updatePurchase}
        onClick={props.purchasing}
      >
        Order now
      </button>
    </div>
  );
};

export default burgerControls;
