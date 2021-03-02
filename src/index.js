import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.scss";
import Invoices from "./containers/Invoices";
import reportWebVitals from "./reportWebVitals";
import { searchRobots, requestLocalInvoices } from "./reducers";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestLocalInvoices });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Invoices />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
