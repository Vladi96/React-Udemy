import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "Vladimir",
        age: 22
      },
      {
        name: "Nikoleta",
        age: 20
      },
      {
        name: "Simeon",
        age: 23
      }
    ]
  };

  switchNameHanlder = newName => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 22
        },
        {
          name: "Nikoleta",
          age: 20
        },
        {
          name: "Simeon",
          age: 23
        }
      ]
    });
  };

  changeNameHandler = event => {
    this.setState({
      persons: [
        {
          name: "Vladimir",
          age: 22
        },
        {
          name: event.target.value,
          age: 22
        },
        {
          name: "Simeon",
          age: 23
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi from React!</h1>
        <button onClick={this.switchNameHanlder.bind(this, "Simeon!!!!")}>
          Switch Users
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHanlder.bind(this, "Martin")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.changeNameHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
