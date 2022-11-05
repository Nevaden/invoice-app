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


export const viewInvoiceInit = createAction('[View-Invoice] Init', props<{ invoice: Invoice[] }>());

export const DeleteInvoice = createAction('[Invoices] Delete Invoice', props<{payload: string}>());

export const DeleteInvoiceSuccess = createAction(
  '[Invoices] Delete Invoice Success'
);

export const AddInvoice = createAction('[Invoices] Add Invoice', props<{payload: Invoice}>());

export const AddInvoiceNGRX = createAction('[Invoices] Add Invoice NGRX', props<{payload: Invoice}>());
  
  export const AddInvoiceSuccess = createAction(
    '[Invoices] Add Invoice Success',
    props<{ response: Invoice }>()
  );
  
  export const AddInvoiceFailure = createAction(
    '[Invoices] Add Invoice Failure',
    props<{ error: any }>()
  );
