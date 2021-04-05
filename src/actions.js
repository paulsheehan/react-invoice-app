import {
  REQUEST_LOCAL_INVOICES_PENDING,
  REQUEST_LOCAL_INVOICES_SUCCESS,
  REQUEST_LOCAL_INVOICES_FAILED,
  REQUEST_LOCAL_INVOICE_PENDING,
  REQUEST_LOCAL_INVOICE_SUCCESS,
  REQUEST_LOCAL_INVOICE_FAILED,
  CHANGE_THEME_SUCCESS,
} from "./constants.js";

export const requestLocalInvoices = () => async (dispatch) => {
  dispatch({ type: REQUEST_LOCAL_INVOICES_PENDING });

  try {
    let payload = await fetch("http://localhost:3004/invoices").then((data) => {
      return data.json();
    });
    dispatch({
      type: REQUEST_LOCAL_INVOICES_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    dispatch({ type: REQUEST_LOCAL_INVOICES_FAILED, payload: error });
  }
};

export const requestLocalInvoice = (invoiceId) => async (dispatch) => {
  dispatch({ type: REQUEST_LOCAL_INVOICE_PENDING });
  try {
    let payload = await fetch(
      "http://localhost:3004/invoices/" + invoiceId
    ).then((data) => {
      return data.json();
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
