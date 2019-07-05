import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Buttons/Button";
import "./CheckoutSummary.css";

const checkoutSummary = props => {
  return (
    <div>
      <h1>We hope it taset well!</h1>
      <div
        className="CheckoutSummary"
        style={{ width: "100%", margin: "auto" }}
      >
        <Burger ingredients={props.ingredients} />

        <Button btnType="Danger" clickedPurchase={props.checkoutCencel}>
          Cencel
        </Button>
        <Button btnType="Success" clickedPurchase={props.checkoutContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
