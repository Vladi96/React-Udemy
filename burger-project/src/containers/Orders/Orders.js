import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "axios";

class Orders extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    if (!this.props.token) {
      return this.props.history.push("/");
    }
    axios
      .get("/orders.json?auth=" + this.props.token)
      .then(res => {
        let arrayOfOrder = [];

        for (const key in res.data) {
          if (res.data[key].userId === this.props.userId) {
            arrayOfOrder.push({
              id: key,
              ...res.data[key]
            });
          }
        }
        arrayOfOrder.reverse();
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

const mapStateToProps = state => ({
  token: state.users.token,
  userId: state.users.userId
});

export default connect(mapStateToProps)(Orders);
