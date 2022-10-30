import { Action, createReducer, on } from '@ngrx/store';
import { loadInvoicesSuccess } from "../actions/invoices.actions"

// export const invoiceReducer = 'invoices';

// export interface State {

// }

export const initialState: object = {};

export const InvoicesReducer = createReducer(
  initialState,
  on(loadInvoicesSuccess, (state, invoices) => invoices)

);
