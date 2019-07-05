import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.count} />
        <CounterControl
          label="Increment"
          clicked={this.props.dispatchIncrementState}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.dispatchDecrementState}
        />
        <CounterControl label="Add 5" clicked={this.props.dispatchAddToState} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.dispatchSubtractToState}
        />
        <button
          onClick={() => this.props.dispatchOnSaveResult(this.props.count)}
        >
          Save Result
        </button>
        <ul>
          {this.props.result.map(el => {
            return (
              <li
                onClick={() => this.props.dispatchOnDelete(el.id)}
                key={el.id}
              >
                {el.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.cnt.counter,
    result: state.rsl.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchIncrementState: () => dispatch({ type: "INCREMENT" }),
    dispatchDecrementState: () => dispatch({ type: "DECREMENT" }),
    dispatchAddToState: () => dispatch({ type: "ADD_NUMBER", value: 5 }),
    dispatchSubtractToState: () => dispatch({ type: "SUBTRACT", value: 5 }),
    dispatchOnSaveResult: result =>
      dispatch({ type: "SAVE_RESULTS", value: result }),
    dispatchOnDelete: id => dispatch({ type: "DELETE_RESULT", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
