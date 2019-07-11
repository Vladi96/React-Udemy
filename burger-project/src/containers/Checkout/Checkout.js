import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  componentDidMount() {
    if (this.props.ingredients.length < 1) {
      return this.props.history.push("/");
    }
    if (!this.props.token) {
      return this.props.history.push("/auth");
    }
  }

  checkoutCencelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCencel={this.checkoutCencelHandler}
          checkoutContinue={this.checkoutContinueHandler}
          ingredients={this.props.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={() => (
            <ContactData
              total={this.props.price}
              ingredients={this.props.ingredients}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients.ingredients,
  price: state.ingredients.totalPrice,
  token: state.users.token
});

export default connect(mapStateToProps)(Checkout);
