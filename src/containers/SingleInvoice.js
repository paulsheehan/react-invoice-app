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
class SingleInvoiceContainer extends Component {
  componentDidMount() {
    this.props.onRequestLocalInvoices();
  }
  render() {
    return (
      <div>
        <h1>Single Invoice</h1>
        <div className="main-area"></div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleInvoiceContainer);
