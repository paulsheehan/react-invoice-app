import { Component } from "react";
import { connect } from "react-redux";
import { requestLocalInvoices, filterInvoices, changeTheme } from "../actions";
import InvoiceList from "../components/InvoiceList/InvoiceList";
import Navbar from "../components/Navbar/Navbar";

const mapStateToProps = (state) => {
  return {
    invoices: state.requestLocalInvoices.invoices,
    isPending: state.requestLocalInvoices.isPending,
    error: state.requestLocalInvoices.error,
    theme: state.changeTheme.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestLocalInvoices: () => dispatch(requestLocalInvoices()),
    onFilterInvoices: () => dispatch(filterInvoices()),
    onChangeTheme: () => dispatch(changeTheme()),
  };
};
class InvoicesContainer extends Component {
  componentDidMount() {
    this.props.onRequestLocalInvoices();
  }
  render() {
    const { isPending, invoices, onChangeTheme, theme } = this.props;
    return (
      <>
        <Navbar onChangeTheme={onChangeTheme} theme={theme} />
        <div className="page-content-container">
          {isPending ? <h1>Loading</h1> : <InvoiceList invoices={invoices} />}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesContainer);
