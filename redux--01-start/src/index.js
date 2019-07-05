import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import counter from "./store/counter";
import results from "./store/results";

const reducer = combineReducers({
  cnt: counter,
  rsl: results
});

const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
