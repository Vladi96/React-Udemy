import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import "./Burger.css";

const burger = props => {
  let burger = [];

  if (props.ingredients.length > 0) {
    props.ingredients.forEach((element, index) => {
      burger.push(<BurgerIngredient key={index} type={element} />);
    });
  } else {
    burger.push(<p key="_">Please start adding ingredients!</p>);
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {burger}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
