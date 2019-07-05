import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.addPersons} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.deletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  persons: state.persons
});

const dispatchState = dispatch => {
  return {
    addPersons: (name, age) =>
      dispatch({ type: "SHOW_PERSONS", personData: { name, age } }),
    deletePerson: id => dispatch({ type: "DELETE_PERSON", id })
  };
};

export default connect(
  mapStateToProps,
  dispatchState
)(Persons);
