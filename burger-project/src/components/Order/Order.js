import React from "react";
import "./Order.css";

const order = props => {
  let ingredients = {};

  // eslint-disable-next-line array-callback-return
  props.ingredients.map(ing => {
    if (ingredients.hasOwnProperty(ing)) {
      ingredients[ing] = ingredients[ing] + 1;
    } else {
      ingredients[ing] = 1;
    }
  });

  let arrayOfIngredients = [];

  for (const key in ingredients) {
    arrayOfIngredients.push(
      <li key={key}>
        {key}: <strong>{ingredients[key]}</strong>
      </li>
    );
  }

  return (
    <div className="Order">
      <ul>{arrayOfIngredients} </ul>
      <p>
        Price: <strong>{props.price}$</strong>
      </p>
    </div>
  );
};

export default order;
