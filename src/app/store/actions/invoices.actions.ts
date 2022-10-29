import { createAction, props } from '@ngrx/store';
import { Invoice } from 'src/app/interfaces/invoice';


export const loadInvoices = createAction(
  '[Invoices] Load Invoices'
);

export const loadInvoicesSuccess = createAction(
  '[Invoices] Load Invoices Success',
  props<{ invoices: Invoice }>()
);

export const loadInvoicessFailure = createAction(
  '[Invoices] Load Invoices Failure',
  props<{ error: any }>()
);
