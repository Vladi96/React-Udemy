import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    value: ""
  };

  countingLengthHandler = event => {
    this.setState({
      value: event.target.value
    });
  };

  deleteCharHandler = targetIndex => {
    let text = [...this.state.value];
    text.splice(targetIndex, 1);
    this.setState({ value: text.join("") });
  };

  render() {
    const charsList = this.state.value.split("").map((el, index) => {
      return (
        <CharComponent
          char={el}
          click={() => this.deleteCharHandler(index)}
          key={index}
        />
      );
    });

    return (
      <div className="App">
        <h2>React</h2>
        <h3>Assignment-2</h3>
        <input
          type="text"
          onChange={event => this.countingLengthHandler(event)}
          value={this.state.value}
        />
        <p>{this.state.value.length}</p>
        <ValidationComponent value={this.state.value} />
        {charsList}
      </div>
    );
  }
}

export default App;
