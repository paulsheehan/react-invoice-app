import { Component } from "react";
import { connect } from "react-redux";
import { requestLocalInvoices } from "../actions";

const mapStateToProps = (state) => {
  return {
    invoices: state.requestLocalInvoices.invoices,
    isPending: state.requestLocalInvoices.isPending,
    error: state.requestLocalInvoices.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestLocalInvoices: () => dispatch(requestLocalInvoices()),
  };
};
class InvoicesContainer extends Component {
  componentDidMount() {
    this.props.onRequestLocalInvoices();
  }
  render() {
    const { isPending, invoices } = this.props;

    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesContainer);
