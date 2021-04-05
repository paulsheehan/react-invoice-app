import useRouter from "../../utilities/useRouter";
import { useState, useRef, useEffect } from "react";
import prettyDate from "../../utilities/prettyDate";
import "./invoiceList.scss";
import { ReactComponent as IconArrowDown } from "../../assets/icon-arrow-down.svg";
import { ReactComponent as IconArrowRight } from "../../assets/icon-arrow-right.svg";
import { ReactComponent as IconPlus } from "../../assets/icon-plus.svg";
import { ReactComponent as EmptyIllustration } from "../../assets/illustration-empty.svg";

const InvoiceList = (props) => {
  const router = useRouter();
  const [isFilterMenuOpen, setFilterBool] = useState(false);
  const [currentFilters, updateCurrentFilters] = useState([]);
  const filterContainerRef = useRef(null);
  const [filteredInvoices, updateFilteredInvoices] = useState(props.invoices);

  /**
   * Hook that closes menu on click-away
   */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(event.target)
      ) {
        setFilterBool(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterContainerRef]);

  useEffect(() => {
    // console.log("useEffect", filteredInvoices);
  }, [filteredInvoices]);

  const updateFilters = (filter) => {
    let filterIndexRef = currentFilters.indexOf(filter);
    if (filterIndexRef < 0) {
      const newFilters = [...currentFilters, filter];
      updateCurrentFilters(() => {
        return newFilters;
      });
      return newFilters;
    } else {
      const newFilters = [
        ...currentFilters.slice(0, filterIndexRef),
        ...currentFilters.slice(filterIndexRef + 1),
      ];
      updateCurrentFilters(() => {
        return newFilters;
      });
      return newFilters;
    }
  };

  const updateInvoices = async (filters) => {
    if (filters.length < 1) {
      await updateFilteredInvoices(() => [...props.invoices]);
    } else {
      if (filteredInvoices.length < 1) {
        await updateFilteredInvoices(() => props.invoices);
      } else {
        await updateFilteredInvoices(() => [
          ...props.invoices.filter((invoice) => {
            return filters.includes(invoice.status);
          }),
        ]);
      }
    }
  };

  const onFilterSelect = (value) => {
    let updatedFilters = updateFilters(value);
    updateInvoices(updatedFilters);
  };

  return (
    <>
      {/* Head element */}
      <div className="invoice-list-head flex-row flex-row--center">
        <div>
          <h1 className="invoice-list-head-title">Invoices</h1>
          <p className="light-text light-text--1 desktop">
            There are {props.invoices.length} total invoices
          </p>
          <p className="light-text light-text--1 mobile">
            {props.invoices.length} invoices
          </p>
        </div>

        <div className="invoice-filter-container" ref={filterContainerRef}>
          <div
            className="invoice-filter"
            role="button"
            aria-haspopup="true"
            onClick={() => setFilterBool(!isFilterMenuOpen)}
          >
            <span className="body-1 bold desktop">Filter by status</span>
            <span className="body-1 bold mobile">Filter</span>
            <IconArrowDown className="arrow" />
          </div>
          <ul
            className={"filter-menu " + (isFilterMenuOpen ? "open" : null)}
            role="group"
          >
            <li className="filter-menu-item" role="menuitem">
              <input
                type="checkbox"
                className="filter-menu-checkbox"
                value="Draft"
                name="status"
                onClick={() => onFilterSelect("draft")}
              />
              <div className="custom-checkbox"></div>
              <label className="body-1 bold">Draft</label>
            </li>
            <li className="filter-menu-item" role="menuitem">
              <input
                type="checkbox"
                className="filter-menu-checkbox"
                value="Pending"
                name="status"
                onClick={() => onFilterSelect("pending")}
              />
              <div className="custom-checkbox"></div>
              <label className="body-1 bold">Pending</label>
            </li>
            <li className="filter-menu-item" role="menuitem">
              <input
                type="checkbox"
                className="filter-menu-checkbox"
                value="Paid"
                name="status"
                onClick={() => onFilterSelect("paid")}
              />
              <div className="custom-checkbox"></div>
              <label className="body-1 bold">Paid</label>
            </li>
          </ul>
        </div>

        <button className="primary-button with-icon">
          <span className="button-icon-container">
            <IconPlus />
          </span>
          <span className="desktop">New Invoice</span>
          <span className="mobile">New</span>
        </button>
      </div>

      {filteredInvoices.length ? (
        // --- Invoice List ---
        <ul className="invoice-list">
          {filteredInvoices.map((invoice) => {
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
                <div className="invoice-list-item-value date light-text light-text--1 desktop">
                  <span className="extra-space">Due </span>{" "}
                  {prettyDate(invoice.paymentDue)}
                </div>
                <div className="invoice-list-item-value text-ellipsis name light-text light-text--2">
                  {invoice.clientName}
                </div>

                <div className="invoice-list-item-value date-price-container">
                  <span className="date light-text">
                    <span className="extra-space">Due</span>{" "}
                    {prettyDate(invoice.paymentDue)}
                  </span>
                  <span className="price">
                    £{invoice.total.toLocaleString()}
                  </span>
                </div>

                <div className="invoice-list-item-value price desktop">
                  <span className="extra-space">£</span>
                  {invoice.total.toLocaleString()}
                </div>

                <div
                  className={
                    "invoice-list-item-value invoice-status " + invoice.status
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
        // No invoices
        <div className="invoice-list-empty">
          <EmptyIllustration />
          <h2 className="invoice-list-empty-title">There is nothing here</h2>
          <p className="light-text">
            Create an invoice by clicking the{" "}
            <span className="bold">New Invoice</span> button and get started
          </p>
        </div>
      )}
    </>
  );
};

export default InvoiceList;
