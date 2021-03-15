import {
  REQUEST_LOCAL_INVOICES_PENDING,
  REQUEST_LOCAL_INVOICES_SUCCESS,
  REQUEST_LOCAL_INVOICES_FAILED,
  REQUEST_LOCAL_INVOICE_PENDING,
  REQUEST_LOCAL_INVOICE_SUCCESS,
  REQUEST_LOCAL_INVOICE_FAILED,
  CHANGE_THEME_SUCCESS,
} from "./constants.js";
import { localInvoiceData } from "./data/data.js";

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

export const requestLocalInvoice = (invoiceId) => async (dispatch) => {
  dispatch({ type: REQUEST_LOCAL_INVOICE_PENDING });
  try {
    let payload = await new Promise(function (resolve) {
      resolve(localInvoiceData.find((invoice) => invoice.id === invoiceId));
    });

    if (payload) {
      dispatch({
        type: REQUEST_LOCAL_INVOICE_SUCCESS,
        payload: payload,
      });
    } else {
      dispatch({
        type: REQUEST_LOCAL_INVOICE_FAILED,
        payload: "404: Invoice not found",
      });
    }
  } catch (error) {
    dispatch({ type: REQUEST_LOCAL_INVOICE_FAILED, payload: error });
  }
};

export const changeTheme = () => (dispatch) => {
  dispatch({ type: CHANGE_THEME_SUCCESS });
};
