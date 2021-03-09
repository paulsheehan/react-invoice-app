import {
  REQUEST_LOCAL_INVOICES_PENDING,
  REQUEST_LOCAL_INVOICES_SUCCESS,
  REQUEST_LOCAL_INVOICES_FAILED,
  REQUEST_LOCAL_INVOICE_PENDING,
  REQUEST_LOCAL_INVOICE_SUCCESS,
  REQUEST_LOCAL_INVOICE_FAILED,
} from "./constants.js";

const initialStateInvoices = {
  isPending: false,
  invoices: [],
  error: "",
};

const initialStateInvoice = {
  isPending: false,
  invoice: {},
  error: "",
};

export const requestLocalInvoices = (
  state = initialStateInvoices,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_LOCAL_INVOICES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_LOCAL_INVOICES_SUCCESS:
      return Object.assign({}, state, {
        invoices: action.payload,
        isPending: false,
      });
    case REQUEST_LOCAL_INVOICES_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};

export const requestLocalInvoice = (
  state = initialStateInvoice,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_LOCAL_INVOICE_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_LOCAL_INVOICE_SUCCESS:
      return Object.assign({}, state, {
        invoice: action.payload,
        isPending: false,
      });
    case REQUEST_LOCAL_INVOICE_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
