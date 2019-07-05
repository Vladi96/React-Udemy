import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cocpit from "../components/Cocpit/Cocpit";
import "./App.css";
import Radium from "radium";
import Authenticate from "../context/Authenticate";

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
    showPersons: false,
    authenticate: false
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
  loginHandler = () => {
    this.setState({ authenticate: true });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            change={this.changeNameHandler}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <Authenticate.Provider
          value={{
            authenticate: this.state.authenticate,
            login: this.loginHandler
          }}
        >
          <Cocpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            togglePersons={this.togglePersonsHandler}
          />
          {persons}
        </Authenticate.Provider>
      </div>
    );
  }
}

export default Radium(App);
