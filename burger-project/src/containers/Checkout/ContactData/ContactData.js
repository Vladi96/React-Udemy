import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../../../components/UI/Buttons/Button";
import Spiner from "../../../components/UI/Spiner/Spiner";
import Input from "../../../components/UI/Input/Input";
import axios from "axios";
import "./ContactData.css";

class ContactData extends Component {
  state = {
    isValidForm: false,
    orderData: {
      name: this.inputParamsHandler("input", "You are name?", "text"),
      email: this.inputParamsHandler("input", "You are email?", "text"),
      street: this.inputParamsHandler("input", "Street", "text"),
      zipCode: this.inputParamsHandler("input", "Zip-Code", "text", 4),
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "cheapest",
        valid: true
      }
    },
    spinerLoading: false
  };

  inputChangedHandler(event, key) {
    const updateForm = { ...this.state.orderData };
    updateForm[key].value = event.target.value;

    let validity = this.checkValidSubmitHandler(
      updateForm[key].value,
      updateForm[key].validity
    );
    updateForm[key].valid = validity;

    let isValidForm = true;

    for (const key in this.state.orderData) {
      if (!this.state.orderData[key].valid) {
        isValidForm = false;
      }
    }
    this.setState({ orderData: updateForm, isValidForm });
  }

  checkValidSubmitHandler(value, rules) {
    let isValid = true;

    for (const key in rules) {
      if (key === "length" && isValid) {
        isValid =
          value.trim().length === rules[key] && !isNaN(value) ? true : false;
      }
      if (isValid && key === "required") {
        isValid = value.trim() !== "";
      }
    }
    return isValid;
  }

  componentWillMount() {
    if (!this.props.ingredients || !this.props.total) {
      this.props.history.push("/");
    }
  }

  inputParamsHandler(elementType, placeholder, type, length) {
    let obj = {
      elementType,
      elementConfig: {
        placeholder,
        type
      },
      value: "",
      validity: {
        required: true
      },
      valid: false
    };

    if (length) {
      obj.validity = {
        required: true,
        length
      };
    }

    return obj;
  }

  sendPurchaseHandler = event => {
    event.preventDefault();

    this.setState({ spinerLoading: true });

    const order = {};
    const orderData = { ...this.state.orderData };

    for (const key in orderData) {
      order[key] = orderData[key].value;
    }
    order["price"] = this.props.total;
    order["ingredients"] = this.props.ingredients;

    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({
          spinerLoading: false,
          purchasing: false
        });
        this.props.history.push("/");
      })
      .catch(err => this.setState({ spinerLoading: false }));
  };

  render() {
    let formDataArray = [];

    for (const key in this.state.orderData) {
      formDataArray.push(
        <Input
          key={key}
          elementType={this.state.orderData[key].elementType}
          elementConfig={this.state.orderData[key].elementConfig}
          value={this.state.orderData[key].value}
          isValid={this.state.orderData[key].valid}
          change={event => this.inputChangedHandler(event, key)}
        />
      );
    }

    let form = (
      <form onSubmit={this.sendPurchaseHandler}>
        {formDataArray}

        <Button btnType="Success" disabled={!this.state.isValidForm}>
          Order
        </Button>
      </form>
    );

    if (this.state.spinerLoading) {
      form = <Spiner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter you are Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.totalPrice,
  ingredients: state.ingredients
});

export default connect(mapStateToProps)(withRouter(ContactData));
