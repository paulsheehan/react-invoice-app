import "./App.scss";
import { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestLocalInvoices } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    invoices: state.requestLocalInvoices.invoices,
    isPending: state.requestLocalInvoices.isPending,
    error: state.requestLocalInvoices.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (message) => dispatch(setSearchField(message)),
    onRequestLocalInvoices: () => dispatch(requestLocalInvoices()),
  };
};
class App extends Component {
  componentDidMount() {
    this.props.onRequestLocalInvoices();
  }
  render() {
    const { isPending, invoices } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Invoice App</h1>
        </header>
        <div className="main-area">
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ul>
              {invoices.map((invoice) => {
                return <li key={invoice.id}>{invoice.clientName}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
