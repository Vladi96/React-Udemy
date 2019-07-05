import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/HocContainer";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger//OrderSummary/OrderSummary";
import Spiner from "../../components/UI/Spiner/Spiner";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    spinerLoading: false
  };

  updatePurchase(ingredients) {
    return ingredients.length > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  cencelPurchasingHandler = () => {
    this.setState({ purchasing: false });
  };

  continuePurchasingHandler = () => {
    this.setState({ spinerLoading: true });

    this.props.history.push("/checkout");

    this.setState({ spinerLoading: true });
  };

  render() {
    let disabledInfo = {
      bacon: false,
      cheese: false,
      salad: false,
      meat: false
    };

    for (const key in disabledInfo) {
      if (this.props.ingredients.includes(key)) {
        disabledInfo[key] = false;
      } else {
        disabledInfo[key] = true;
      }
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.props.ingredients}
        cencelPurchase={this.cencelPurchasingHandler}
        continuePurchase={this.continuePurchasingHandler}
        price={this.props.totalPrice}
      />
    );

    if (this.state.spinerLoading) {
      orderSummary = <Spiner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          clicked={this.cencelPurchasingHandler}
        >
          {orderSummary}
        </Modal>

        <Burger ingredients={this.props.ingredients} />

        <BurgerControls
          purchasing={this.purchaseHandler}
          updatePurchase={this.updatePurchase(this.props.ingredients)}
          price={this.props.totalPrice}
          disabled={disabledInfo}
          addIngredient={this.props.addIngredient}
          removeIngredients={this.props.removeIngredient}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  totalPrice: state.totalPrice,
  ingredients: state.ingredients
});

const mapDispatchToProps = dispatch => ({
  addIngredient: value =>
    dispatch({ type: "ADD_INGREDIENT", data: { ing: value } }),
  removeIngredient: value =>
    dispatch({
      type: "REMOVE_INGREDIENT",
      data: { ing: value }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
