import React, { Component } from "react";
import "./Person.css";
import Authenticate from "../../../context/Authenticate";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  static contextType = Authenticate;

  componentDidMount() {
    this.inputElement.current.focus();
  }
  render() {
    return (
      // <React.Fragment className="Person">
      <div className="Person">
        {this.context.authenticate ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Log in</p>
        )}
        <p onClick={this.props.click}>
          My name is {this.props.name} and i'm {this.props.age} years old!
        </p>
        <input
          type="text"
          ref={this.inputElement}
          onChange={this.props.change}
          value={this.props.name}
        />
        {/* </React.Fragment> */}
      </div>
    );
  }
}

export default Person;
