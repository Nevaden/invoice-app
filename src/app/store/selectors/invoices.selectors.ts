import { Invoice } from "src/app/interfaces/invoice"; 
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const allInvoices = createSelector(
    createFeatureSelector('invoices'),
    (state: Invoice[]) =>{
        const invoiceState = {...state}
        const invoiceArray: Invoice[] = [];
        Object.keys(invoiceState).forEach((key: any) => {

            if(invoiceState[key].firebaseId == ''){
                invoiceArray.push({ ...invoiceState[key], firebaseId: key });
              } else {
                invoiceArray.push({ ...invoiceState[key] });
              }
            
            // console.log(key,"invoice key in selector")
        })
        invoiceArray.pop()
        
        return invoiceArray
    }
)












