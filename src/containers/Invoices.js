import { Component } from "react";
import { connect } from "react-redux";
import { requestLocalInvoices } from "../actions";
import InvoiceList from "../components/InvoiceList/InvoiceList";
import InvoiceDisplayCard from "../components/InvoiceDisplayCard/InvoiceDisplayCard";

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
          {isPending ? <h1>Loading</h1> : <InvoiceList invoices={invoices} />}
        </div>
        {/* <InvoiceDisplayCard invoice={invoices[1]} /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesContainer);
