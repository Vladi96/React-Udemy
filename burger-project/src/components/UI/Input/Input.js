import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;

  let validity = props.isValid ? "" : "Invalid";

  let classes = [validity, "InputElement"];
  classes = classes.join(" ");

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={classes} value={props.value} onChange={props.change}>
          {props.elementConfig.options.map(el => (
            <option key={el.value} value={el.value}>
              {el.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }

  return (
    <div className="Input">
      {inputElement}
      <label className="Input_info">{props.label}</label>
    </div>
  );
};

export default input;
