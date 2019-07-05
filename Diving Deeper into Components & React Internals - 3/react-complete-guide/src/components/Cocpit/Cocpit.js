import React, { useEffect, useRef } from "react";
// import Radium from "radium";
import Authenticate from "../../context/Authenticate";

const Cocpit = props => {
  const toggleBtn = useRef(null);

  useEffect(() => {
    console.log("[Cocpit.js] useEffect.");
    console.log(props.persons);
  }, [props.persons]);

  useEffect(() => {
    toggleBtn.current.click();
  }, []);
  const style = {
    display: "block",
    fontSize: "15px",
    padding: "10px",
    backgroundColor: "green",
    border: "3px solid #555",
    margin: "5px auto",
    fontWeight: "200",
    color: "#f9f9f9",
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "#90ee90",
      border: "3px solid #444",
      color: "black",
      fontWeight: "bold"
    }
  };

  if (props.persons.length <= 2) {
    style.backgroundColor = "red";
    style[":hover"].backgroundColor = "green";
  }

  if (props.persons.length <= 1) {
    style.fontWeight = "bold";
    style[":hover"].backgroundColor = "#ff000079";
  }

  return (
    <div>
      <h1>Hi from React!</h1>
      <button ref={toggleBtn} style={style} onClick={props.togglePersons}>
        {props.showPersons ? "Hide " : "Show "}
        information.
      </button>
      <Authenticate.Consumer>
        {context => <button onClick={context.login}>Login</button>}
      </Authenticate.Consumer>
    </div>
  );
};
export default Cocpit;
