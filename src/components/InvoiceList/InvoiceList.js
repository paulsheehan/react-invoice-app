import "./invoiceList.scss";
import { ReactComponent as IconArrowDown } from "../../assets/icon-arrow-down.svg";
import { ReactComponent as IconArrowRight } from "../../assets/icon-arrow-right.svg";
const InvoiceList = (props) => {
  return (
    <div className="page-content-container">
      {/* <div className="invoice-list-head">
        <div className="flex-col">
          <h1>Invoices</h1>
          <p className="body-1">
            There are {props.invoices.length} total invoices
          </p>
        </div>
        <div>
          <span className="body-1">Filter by status</span>
          <IconArrowDown />
        </div>
        <button className="button-1">
          <img /> <span className="body-1">New Invoice</span>
        </button>
      </div> */}
      <ul className="invoice-list">
        {props.invoices.map((invoice) => {
          return (
            <li className="invoice-list-item" key={invoice.id}>
              <div className="invoice-list-item-value invoice-id">
                <span className="hash">#</span>
                {invoice.id}
              </div>
              <div className="invoice-list-item-value">
                {invoice.paymentDue}
              </div>
              <div className="invoice-list-item-value">
                {invoice.clientName}
              </div>
              <div className="invoice-list-item-value price">
                £{invoice.total}
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
              <span className="invoice-list-item-value">
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
