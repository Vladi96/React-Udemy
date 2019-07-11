import React from "react";
import Logo from "../Toolbar/Logo/Logo";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/HocContainer";

import "./SideDrawer.css";

const sideDrawer = props => {
  let sideDrawerClasses = ["SideDrawer", "Close"];

  if (props.show) {
    sideDrawerClasses = ["SideDrawer", "Open"];
  }

  return (
    <Aux>
      <Backdrop clicked={props.clicked} show={props.show} />
      <div className={sideDrawerClasses.join(" ")} onClick={props.clicked}>
        <Logo height="8%" />
        <nav>
          <NavigationItems close={props.clicked} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
