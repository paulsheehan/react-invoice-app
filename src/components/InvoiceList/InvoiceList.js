import "./invoiceList.scss";
const InvoiceList = (props) => {
  return (
    <div className="invoice-list">
      <ul>
        {props.invoices.map((invoice) => {
          return <li key={invoice.id}>{invoice.clientName}</li>;
        })}
      </ul>
    </div>
  );
};

export default InvoiceList;
