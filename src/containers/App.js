import "./App.scss";
import { Component } from "react";
import { connect } from "react-redux";
import { setSearchField } from "../actions";
import InvoicesContainer from "./Invoices";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (message) => dispatch(setSearchField(message)),
  };
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Invoice App</h1>
        </header>
        <InvoicesContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
