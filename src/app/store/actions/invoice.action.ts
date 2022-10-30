import { createAction, props } from '@ngrx/store';
import { Invoice } from 'src/app/interfaces/invoice';


export const viewInvoiceInit = createAction('[View-Invoice] Init', props<{ invoice: Invoice[] }>());