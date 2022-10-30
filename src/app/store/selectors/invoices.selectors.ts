import { Invoice } from "src/app/interfaces/invoice"; 
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const allInvoices = createSelector(
    createFeatureSelector('invoices'),
    (state: Invoice[]) =>{
        const invoiceState = {...state}
        const invoiceArray: Invoice[] = [];
        Object.keys(invoiceState).forEach((invoice: any) => {
            invoiceArray.push({...invoiceState[invoice]})
        })
        invoiceArray.pop()
       
        return invoiceArray
    }
)










