import "./invoiceDisplayCard.scss";
import prettyDate from "../../utilities/prettyDate";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ReactComponent as IconArrowLeft } from "../../assets/icon-arrow-left.svg";
const InvoiceDisplayCard = (props) => {
  const { invoice } = props;
  return (
    <>
      <div className="invoice-display-card">
        <div className="back-nav">
          <Link to="/">
            <IconArrowLeft />
            <span className="body-1 back-nav-text">Go Back</span>
          </Link>
        </div>

        <div className="invoice-display-head">
          <span className="light-text light-text--2">Status</span>

          {invoice ? (
            <div className={"status invoice-status " + invoice.status}>
              <div className="status-container">
                <span className="status-point" />
                <span className="status-text">{invoice.status}</span>
              </div>
            </div>
          ) : null}

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

        <div className="invoice-display-main">
          {invoice ? (
            <div className="flex-row invoice-top">
              <div className="flex-col">
                <h3 className="item-title invoice-item-title">
                  <span className="hash">#</span>
                  {invoice.id}
                </h3>
                <span className="light-text light-text--1">
                  {invoice.description}
                </span>
              </div>
              <div className="invoice-address">
                <span className="light-small">
                  {invoice ? invoice["senderAddress"]["street"] : null}
                </span>
                <span className="light-small">
                  {invoice ? invoice["senderAddress"]["city"] : null}
                </span>
                <span className="light-small">
                  {invoice ? invoice["senderAddress"]["postCode"] : null}
                </span>
                <span className="light-small">
                  {invoice ? invoice["senderAddress"]["country"] : null}
                </span>
              </div>
            </div>
          ) : null}

          {invoice ? (
            <div className="flex-row flex-row--stretch invoice-mid">
              <div className="flex-col flex-col--space-between">
                <div className="flex-col">
                  <span className="light-text light-text--1 invoice-item-light">
                    Invoice Date
                  </span>
                  <span className="item-title invoice-item-title">
                    {prettyDate(invoice.createdAt)}
                  </span>
                </div>
                <div className="flex-col">
                  <span className="light-text light-text--1 invoice-item-light">
                    Payment Due
                  </span>
                  <span className="item-title invoice-item-title">
                    {prettyDate(invoice.createdAt)}
                  </span>
                </div>
              </div>

              <div className="flex-col invoice-bill-col">
                <span className="light-text light-text--1 invoice-item-light">
                  Bill To
                </span>
                <span className="item-title invoice-item-title">
                  {invoice ? invoice["clientName"] : null}
                </span>
                <span className="light-small">
                  {invoice ? invoice["clientAddress"]["street"] : null}
                </span>
                <span className="light-small">
                  {invoice ? invoice["clientAddress"]["city"] : null}
                </span>
                <span className="light-small">
                  {invoice ? invoice["clientAddress"]["postCode"] : null}
                </span>
                <span className="light-small">
                  {invoice ? invoice["clientAddress"]["country"] : null}
                </span>
              </div>

              <div className="flex-col invoice-email-col">
                <span className="light-text light-text--1 invoice-item-light">
                  Sent to
                </span>
                <span className="item-title invoice-item-title word-wrap">
                  {invoice ? invoice["clientEmail"] : null}
                </span>
              </div>
            </div>
          ) : null}

          {invoice ? (
            <div className="flex-col invoice-items-balance">
              {/* List Items */}
              <ul className="flex-col invoice-list-container">
                <li className="flex-row flex-row--center invoice-list-item">
                  <span className="light-small text-ellipses invoice-list-value invoice-list-name">
                    Item Name
                  </span>
                  <span className="light-small invoice-list-value invoice-list-quantity">
                    QTY.
                  </span>
                  <span className="light-small invoice-list-value invoice-list-price">
                    Price
                  </span>
                  <span className="light-small invoice-list-value invoice-list-total">
                    Total
                  </span>
                </li>

                {invoice.items.map((item) => {
                  return (
                    <li className="flex-row flex-row--center invoice-list-item">
                      <span className="body-1 bold invoice-list-value invoice-list-name">
                        {item.name}
                      </span>
                      <span className="light-text light-text--1 bold invoice-list-value invoice-list-quantity">
                        {item.quantity}
                      </span>
                      <span className="light-small light-text--1 bold invoice-list-value invoice-list-price">
                        <span className="extra-space">£ </span>
                        {item.price}
                      </span>
                      <span className="body-1 bold invoice-list-value invoice-list-total">
                        <span className="extra-space">£ </span>
                        {item.total}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {/* List Total */}
              <div className="flex-row flex-row--center invoice-balance-total">
                <span className="body-2">Amount Due</span>
                <span className="big-total">
                  <span className="extra-space">£ </span>
                  {invoice.total}
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default InvoiceDisplayCard;
