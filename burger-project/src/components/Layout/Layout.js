import React, { Component } from "react";

import Aux from "../../hoc/HocContainer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import "./Layout.css";

class Layout extends Component {
  state = {
    showSideDtawer: false
  };

  closeSideDrawerHandler = () => {
    this.setState({ showSideDtawer: false });
  };

  openSideDrawerhandler = () => {
    this.setState({ showSideDtawer: true });
  };

  render() {
    return (
      <Aux>
        <Toolbar open={this.openSideDrawerhandler} />
        <SideDrawer
          show={this.state.showSideDtawer}
          clicked={this.closeSideDrawerHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
