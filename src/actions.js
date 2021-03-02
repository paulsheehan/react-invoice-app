import {
  CHANGE_SEARCH_FIELD,
  REQUEST_LOCAL_INVOICES_PENDING,
  REQUEST_LOCAL_INVOICES_SUCCESS,
  REQUEST_LOCAL_INVOICES_FAILED,
} from "./constants.js";
import { localInvoiceData } from "./data/data.js";
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestLocalInvoices = () => (dispatch) => {
  dispatch({ type: REQUEST_LOCAL_INVOICES_PENDING });

  try {
    dispatch({
      type: REQUEST_LOCAL_INVOICES_SUCCESS,
      payload: localInvoiceData,
    });
  } catch (error) {
    dispatch({ type: REQUEST_LOCAL_INVOICES_FAILED, payload: error });
  }
};
