import {
  CHANGE_SEARCH_FIELD,
  REQUEST_LOCAL_INVOICES_PENDING,
  REQUEST_LOCAL_INVOICES_SUCCESS,
  REQUEST_LOCAL_INVOICES_FAILED,
} from "./constants.js";

const initialStateSearch = {
  searchField: "",
};

const initialStateInvoices = {
  isPending: false,
  invoices: [],
  error: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
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
