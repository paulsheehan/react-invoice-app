import "./invoiceList.scss";
import { ReactComponent as IconArrowDown } from "../../assets/icon-arrow-down.svg";
import { ReactComponent as IconArrowRight } from "../../assets/icon-arrow-right.svg";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import moment from "moment";

const InvoiceList = (props) => {
  return (
    <div className="page-content-container">
      <div className="invoice-list-head flex-row">
        <div>
          <h1 className="invoice-list-head-title">Invoices</h1>
          <p className="light-text">
            There are {props.invoices.length} total invoices
          </p>
        </div>
        <div className="invoice-filter">
          <span className="body-1 bold">Filter by status</span>
          <IconArrowDown className="arrow" />
        </div>
        <button class="primary-button with-icon">
          <span className="button-icon-container">
            <IconPlus />
          </span>
          <span>New Invoice</span>
        </button>
      </div>
      <ul className="invoice-list">
        {props.invoices.map((invoice) => {
          return (
            <li className="invoice-list-item" key={invoice.id}>
              <div className="invoice-list-item-value invoice-id bold">
                <span className="hash">#</span>
                {invoice.id}
              </div>
              <div className="invoice-list-item-value date light-text">
                Due {moment(invoice.paymentDue).format("D MMM YYYY")}
              </div>
              <div className="invoice-list-item-value name light-text light-text--2">
                {invoice.clientName}
              </div>
              <div className="invoice-list-item-value price">
                £{invoice.total.toLocaleString()}
              </div>
              <div
                className={
                  "invoice-list-item-value invoice-list-status " +
                  invoice.status
                }
              >
                <div className="status-container">
                  <span className="status-point" />
                  <span className="status-text">{invoice.status}</span>
                </div>
              </div>
              <span className="invoice-list-item-value arrow">
                <IconArrowRight />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InvoiceList;
