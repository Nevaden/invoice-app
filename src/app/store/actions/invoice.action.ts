import { createAction, props } from '@ngrx/store';
import { Invoice } from 'src/app/interfaces/invoice';


export const viewInvoiceInit = createAction('[View-Invoice] Init', props<{ invoice: Invoice[] }>());



export const AddInvoice = createAction('[Invoices] Add Invoice', props<Invoice>);
  
  export const AddInvoiceSuccess = createAction(
    '[Invoices] Add Invoice Success',
    props<{ invoices: Invoice }>()
  );
  
  export const AddInvoiceFailure = createAction(
    '[Invoices] Add Invoice Failure',
    props<{ error: any }>()
  );