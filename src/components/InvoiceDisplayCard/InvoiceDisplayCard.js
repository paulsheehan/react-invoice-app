import "./invoiceDisplayCard.scss";
const InvoiceDisplayCard = (props) => {
  const { invoice } = props;
  return (
    <div className="invoice-display-card">
      <h1>{invoice.clientName}</h1>
    </div>
  );
};

export default InvoiceDisplayCard;
