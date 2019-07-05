import React from "react";
import Logo from "./Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import Menu from "./Menu/Menu";

import "./Toolbar.css";

const toolbar = props => (
  <div className="Toolbar">
    <Menu clicked={props.open} />
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;
