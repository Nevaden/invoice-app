import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { viewInvoiceInit } from '../actions/invoice.action';
import { Invoice } from 'src/app/interfaces/invoice';
import { initialState } from './invoices.reducer';

export type InvoiceState = EntityState<Invoice>;

export const invoiceAdapter = createEntityAdapter<Invoice>({
    selectId: (invoice) => invoice.id,
  });

// export const InvoiceReducer = createReducer<Invoice>(
//     initialState,
//     on(viewInvoiceInit, (state, {invoices}) => invoiceAdapter.addMany(invoices, state))
// )
