const initialState = {
  persons: []
};

const persons = (state = initialState, action) => {
  const person = {
    id: Math.random() // not really unique but good enough here!
  };

  if (action.type === "SHOW_PERSONS") {
    return {
      persons: state.persons.concat({
        ...person,
        name: action.personData.name,
        age: action.personData.age
      })
    };
  }
  if (action.type === "DELETE_PERSON") {
    return {
      persons: state.persons.filter(person => person.id !== action.id)
    };
  }
  return state;
};

export default persons;
