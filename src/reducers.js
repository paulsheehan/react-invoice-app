import {
  REQUEST_LOCAL_INVOICES_PENDING,
  REQUEST_LOCAL_INVOICES_SUCCESS,
  REQUEST_LOCAL_INVOICES_FAILED,
  REQUEST_LOCAL_INVOICE_PENDING,
  REQUEST_LOCAL_INVOICE_SUCCESS,
  REQUEST_LOCAL_INVOICE_FAILED,
  CHANGE_THEME_SUCCESS,
} from "./constants.js";

const initialStateInvoices = {
  isPending: false,
  invoices: [],
  currentFilters: [],
  error: "",
};

const initialStateInvoice = {
  isPending: false,
  invoice: {},
  error: "",
};

const initialStateChangeTheme = {
  theme: "light",
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
        filteredInvoices: action.payload,
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

export const changeTheme = (state = initialStateChangeTheme, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME_SUCCESS:
      if (state.theme === "dark") {
        return Object.assign({}, state, {
          theme: "light",
        });
      } else if (state.theme === "light") {
        return Object.assign({}, state, {
          theme: "dark",
        });
      }
      break;
    default:
      return state;
  }
};
