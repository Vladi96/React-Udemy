import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

class App extends Component {
  state = {
    users: [
      {
        name: "Vladimir"
      },
      {
        name: "Nikol"
      },
      {
        name: "Martin"
      }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      users: [
        {
          name: newName
        },
        {
          name: "Nikol"
        },
        {
          name: "Martin"
        }
      ]
    });
  };

  changeNamesHandler = event => {
    this.setState({
      users: [
        {
          name: event.target.value
        },
        {
          name: "Nikol"
        },
        {
          name: "Martin"
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h2>First Assignment</h2>

        <UserInput
          name={this.state.users[0].name}
          change={this.changeNamesHandler}
        />
        <UserOutput
          name={this.state.users[0].name}
          click={this.switchNameHandler.bind(this, "Test...")}
        />

        <UserOutput name={this.state.users[1].name} />
        <UserOutput name={this.state.users[2].name} />
      </div>
    );
  }
}

export default App;
