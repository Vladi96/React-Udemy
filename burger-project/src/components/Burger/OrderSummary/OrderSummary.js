import React from "react";
import Button from "../../UI/Buttons/Button";

import Aux from "../../../hoc/HocContainer";

const orderSummary = props => {
  const ingredientsObject = {};
  props.ingredients.forEach(element => {
    ingredientsObject[element] = props.ingredients.filter(
      el => el === element
    ).length;
  });

  let ingredientsForPrint = [];
  for (const key in ingredientsObject) {
    ingredientsForPrint.push(
      <li key={key} style={{ listStyle: "none" }}>
        <span style={{ textTransform: "capitalize" }}>
          <strong>{key}</strong>
        </span>
        : {ingredientsObject[key]}
      </li>
    );
  }

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsForPrint}</ul>
      <p>
        {/* //Todo .toFixed(2) */}
        <strong>Total Price: {props.price}$</strong>
      </p>
      <p>Continue to Checkout?</p>

      <Button btnType="Danger" clickedPurchase={props.cencelPurchase}>
        Back
      </Button>
      <Button btnType="Success" clickedPurchase={props.continuePurchase}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
