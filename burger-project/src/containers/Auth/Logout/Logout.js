import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const logout = props => {
  props.removeToken();
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return <Redirect to="/" />;
};

const mapDispatchtoProps = dispatch => ({
  removeToken: () =>
    dispatch({
      type: "REMOVE_TOKEN"
    })
});

export default connect(
  null,
  mapDispatchtoProps
)(logout);
