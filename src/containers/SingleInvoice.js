import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { requestLocalInvoice, changeTheme } from "../actions";
import InvoiceDisplayCard from "../components/InvoiceDisplayCard/InvoiceDisplayCard";
import Navbar from "../components/Navbar/Navbar";

const mapStateToProps = (state) => {
  return {
    isPending: state.requestLocalInvoice.isPending,
    invoice: state.requestLocalInvoice.invoice,
    error: state.requestLocalInvoice.error,
    theme: state.changeTheme.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestSingleInvoice: (id) => dispatch(requestLocalInvoice(id)),
    onChangeTheme: () => dispatch(changeTheme()),
  };
};
class SingleInvoiceContainer extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.onRequestSingleInvoice(id);
  }

  render() {
    const { isPending, invoice, onChangeTheme, theme } = this.props;

    if (Object.keys(invoice).length === 0 && this.props.error) {
      // 404 no invoice found
      return <Redirect to="/" />;
    } else {
      return (
        <>
          <Navbar onChangeTheme={onChangeTheme} theme={theme} />
          <div className="page-content-container">
            {isPending ? (
              <h1>Loading</h1>
            ) : (
              <>
                {Object.keys(invoice).length ? (
                  <InvoiceDisplayCard invoice={invoice} />
                ) : (
                  <h1>No Invoice</h1>
                )}
              </>
            )}
          </div>
        </>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleInvoiceContainer);
