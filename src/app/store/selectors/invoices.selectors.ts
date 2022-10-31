import { Invoice } from "src/app/interfaces/invoice"; 
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const allInvoices = createSelector(
    createFeatureSelector('invoices'),
    (state: Invoice[]) =>{
        const invoiceState = {...state}
        const invoiceArray: Invoice[] = [];
        Object.keys(invoiceState).forEach((key: any) => {
            invoiceArray.push({ ...invoiceState[key], firebaseId: key });
        })
        invoiceArray.pop()
        console.log(invoiceArray,"what am I")
        return invoiceArray
    }
)










