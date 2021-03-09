import { useMemo } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import queryString from "query-string";
import moment from "moment";

import "./invoiceList.scss";
import { ReactComponent as IconArrowDown } from "../../assets/icon-arrow-down.svg";
import { ReactComponent as IconArrowRight } from "../../assets/icon-arrow-right.svg";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import { ReactComponent as EmptyIllustration } from "../../assets/illustration-empty.svg";

// Hook
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
}

const InvoiceList = (props) => {
  const router = useRouter();
  return (
    <div className="page-content-container">
      <div className="invoice-list-head flex-row">
        <div>
          <h1 className="invoice-list-head-title">Invoices</h1>
          <p className="light-text desktop">
            There are {props.invoices.length} total invoices
          </p>
          <p className="light-text mobile">{props.invoices.length} invoices</p>
        </div>
        <div className="invoice-filter">
          <span className="body-1 bold desktop">Filter by status</span>
          <span className="body-1 bold mobile">Filter</span>
          <IconArrowDown className="arrow" />
        </div>
        <button className="primary-button with-icon">
          <span className="button-icon-container">
            <IconPlus />
          </span>
          <span className="desktop">New Invoice</span>
          <span className="mobile">New</span>
        </button>
      </div>
      {props.invoices.length ? (
        <ul className="invoice-list">
          {props.invoices.map((invoice) => {
            return (
              <li
                className="invoice-list-item"
                tabIndex="0"
                key={invoice.id}
                onClick={(e) => router.push("/invoices/" + invoice.id)}
              >
                <div className="invoice-list-item-value invoice-id body-1 bold">
                  <span className="hash">#</span>
                  {invoice.id}
                </div>
                <div className="invoice-list-item-value date light-text desktop">
                  Due {moment(invoice.paymentDue).format("D MMM YYYY")}
                </div>
                <div className="invoice-list-item-value name light-text light-text--2">
                  {invoice.clientName}
                </div>

                <div className="invoice-list-item-value date-price-container">
                  <span className="date light-text">
                    Due {moment(invoice.paymentDue).format("D MMM YYYY")}
                  </span>
                  <span className="price">
                    £{invoice.total.toLocaleString()}
                  </span>
                </div>

                <div className="invoice-list-item-value price desktop">
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
      ) : (
        <div className="invoice-list-empty">
          <EmptyIllustration />
          <h2 className="invoice-list-empty-title">There is nothing here</h2>
          <p className="light-text">
            Create an invoice by clicking the{" "}
            <span className="bold">New Invoice</span> button and get started
          </p>
        </div>
      )}
    </div>
  );
};

export default InvoiceList;
