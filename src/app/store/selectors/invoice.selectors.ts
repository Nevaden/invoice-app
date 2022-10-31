import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from './router.selectors';
import { invoiceAdapter, InvoiceState } from '../reducers/invoice.reducer';
import { Invoice } from "src/app/interfaces/invoice"; 


export const invoiceFeatureSelector = createFeatureSelector<InvoiceState>('invoices')

const { selectEntities, selectAll } = invoiceAdapter.getSelectors();


export const selectInvoiceEntities = createSelector(
    invoiceFeatureSelector,
    selectEntities
);

export const selectInvoice = createSelector(
    selectInvoiceEntities,
    selectRouteParams,
    (invoices, { id }) => invoices[id]
    
  );

  export const getItems = (state: InvoiceState) => state.ids;

  export const getItemById = (id: any) => createSelector(
    getItems, 
    (items) => items[id]
  );


  export const oneInvoice = (id: any) => createSelector(
    createFeatureSelector('invoices'),
    (state: Invoice[]) =>{
        const invoiceState = {...state}
        const invoiceArray: Invoice[] = [];
        Object.keys(invoiceState).forEach((invoice: any) => {
         if(invoiceState[invoice].id == id){
            invoiceArray.push({...invoiceState[invoice], firebaseId: invoice})
            
         }
        })
        // invoiceArray.pop()
       console.log(invoiceArray,"what am I")
        return invoiceArray
    }
)