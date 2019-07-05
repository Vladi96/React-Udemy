import React from "react";

const isAuthenticate = React.createContext({
  authenticate: false,
  login: () => {}
});

export default isAuthenticate;
