import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        id: "someKey1",
        name: "Vladimir",
        age: 22
      },
      {
        id: "someKey2",
        name: "Nikoleta",
        age: 20
      },
      {
        id: "someKey3",
        name: "Simeon",
        age: 23
      }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = personIndex => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                change={event => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi from React!</h1>
        <button className="btn" onClick={this.togglePersonsHandler}>
          Show/Hide information.
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
