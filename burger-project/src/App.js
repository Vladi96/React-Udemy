import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import NotFound from "./containers/NotFound/NotFound";

import "./App.css";

function App(props) {
  props.setToken(localStorage.token, localStorage.userId);
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setToken: (token, userId) =>
    dispatch({
      type: "LOG_USER",
      data: {
        token,
        userId
      }
    })
});

export default connect(
  null,
  mapDispatchToProps
)(App);
