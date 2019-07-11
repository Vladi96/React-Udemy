import React from "react";
import { connect } from "react-redux";

import NavigationItem from "./NavigationItem/NavigationItem";

import "./NavigationItems.css";

const navigationItems = props => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" onClick={props.close}>
        Burger Builder
      </NavigationItem>
      {props.token ? (
        <NavigationItem link="/orders" onClick={props.close}>
          Orders
        </NavigationItem>
      ) : null}

      {!props.token ? (
        <NavigationItem link="/auth" onClick={props.close}>
          Authorization
        </NavigationItem>
      ) : (
        <NavigationItem link="/logout" onClick={props.close}>
          Logout
        </NavigationItem>
      )}
    </ul>
  );
};

const mapStateToProps = state => ({
  token: state.users.token
});

export default connect(mapStateToProps)(navigationItems);
