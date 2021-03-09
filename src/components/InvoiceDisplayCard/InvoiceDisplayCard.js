import "./invoiceDisplayCard.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ReactComponent as IconArrowLeft } from "../../assets/icon-arrow-left.svg";
const InvoiceDisplayCard = (props) => {
  const { invoice } = props;

  return (
    <div className="page-content-container">
      <div className="invoice-display-card">
        <div className="back-nav">
          <Link to="/">
            <IconArrowLeft />
            <span className="body-1 back-nav-text">Go Back</span>
          </Link>
        </div>
        <div className="invoice-display-head">
          <span className="light-text light-text--2">Status</span>

          <div className={"status invoice-status " + invoice.status}>
            <div className="status-container">
              <span className="status-point" />
              <span className="status-text">{invoice.status}</span>
            </div>
          </div>

          <div className="buttons-menu">
            <button className="primary-button default">
              <span>Edit</span>
            </button>
            <button className="primary-button danger">
              <span>Delete</span>
            </button>
            <button className="primary-button">
              <span>Mark as Paid</span>
            </button>
          </div>
        </div>
        {invoice ? <h1>{invoice.clientName}</h1> : null}
      </div>
    </div>
  );
};

export default InvoiceDisplayCard;
