import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";
import {
  requestLocalInvoices,
  requestLocalInvoice,
  changeTheme,
} from "./reducers";
import Invoices from "./containers/Invoices";
import SingleInvoice from "./containers/SingleInvoice";

const logger = createLogger();

const rootReducer = combineReducers({
  requestLocalInvoices,
  requestLocalInvoice,
  changeTheme,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Invoices} />
          <Route exact path="/invoices/:id" component={SingleInvoice} />
          <Route component={Invoices} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
document.body.classList.add("theme-light");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
