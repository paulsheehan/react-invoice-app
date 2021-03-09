import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { requestLocalInvoice } from "../actions";
import InvoiceDisplayCard from "../components/InvoiceDisplayCard/InvoiceDisplayCard";

const mapStateToProps = (state) => {
  return {
    isPending: state.requestLocalInvoice.isPending,
    invoice: state.requestLocalInvoice.invoice,
    error: state.requestLocalInvoice.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestSingleInvoice: (id) => dispatch(requestLocalInvoice(id)),
  };
};
class SingleInvoiceContainer extends Component {
  componentDidMount() {
    this.props.onRequestSingleInvoice("RT3080");
  }
  render() {
    const { isPending, invoice, error } = this.props;
    if (Object.keys(invoice).length === 0 && this.props.error) {
      // 404 no invoice found
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <h1>Single Invoice</h1>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <InvoiceDisplayCard invoice={invoice} />
          )}
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleInvoiceContainer);
