import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "axios";

class Orders extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        let arrayOfOrder = [];
        for (const key in res.data) {
          arrayOfOrder.push({
            id: key,
            ...res.data[key]
          });
        }

        this.setState({ orders: arrayOfOrder });
      })
      .catch(err => {});
  }
  render() {
    let orders = [];
    this.state.orders.forEach(order => {
      orders.push(
        <Order
          key={order.id}
          price={order.price}
          ingredients={order.ingredients}
        />
      );
    });

    return <div>{orders}</div>;
  }
}

export default Orders;
