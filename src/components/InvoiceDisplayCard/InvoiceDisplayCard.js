import "./invoiceDisplayCard.scss";
const InvoiceDisplayCard = (props) => {
  const { invoice } = props;

  return (
    <div className="invoice-display-card">
      {invoice ? <h1>{invoice.clientName}</h1> : null}
    </div>
  );
};

export default InvoiceDisplayCard;
