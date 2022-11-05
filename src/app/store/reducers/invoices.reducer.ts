import { Action, createReducer, on } from '@ngrx/store';
import { Invoice } from 'src/app/interfaces/invoice';
import { loadInvoicesSuccess, AddInvoice, AddInvoiceSuccess, DeleteInvoice } from "../actions/invoices.actions"


export const initialState: any = [];

export const InvoicesReducer = createReducer(
  initialState,
  on(loadInvoicesSuccess, (state, invoices) => invoices ),
  on(AddInvoiceSuccess,(state, {response: invoice}) =>{

    const invoiceState = {...state}
    const invoiceArray: Invoice[] = [];
    // console.log(invoice, "add inovice success invoice response")
    // console.log(state, 'state, succes s invoice')
    Object.keys(invoiceState).forEach((key: any) => {
      if(invoiceState[key].clientName){
        // console.log(invoiceState[key].clientName,"what is client name")
        invoiceArray.push({ ...invoiceState[key]});
      }
    })
    console.log(invoiceArray, "before push")
    Object.values(invoice).forEach((data) => {
      // console.log(invoiceArray[invoiceArray.length-1], "who am I?")
      invoiceArray[invoiceArray.length-1].firebaseId = data;
      // console.log(invoiceArray[invoiceArray.length-1])
    })
    invoiceArray.push(invoice)
    // console.log(invoiceArray, "array before return")
    return invoiceArray
  }),

  on(AddInvoice, (state, {payload}) =>{
    const invoiceState = {...state};
    const invoiceArray: Invoice[] = [];
    // console.log(state, "current state on ADD")
    // console.log(payload, "current PLAYLOAD on ADD")
    Object.keys(invoiceState).forEach((key: any) => {
      if(invoiceState[key].clientName){
        invoiceArray.push({ ...invoiceState[key]});
      }
    })
    invoiceArray.push(payload)
    return invoiceArray 
  }),

  on(DeleteInvoice, (state, payload) =>{

    const invoiceState = {...state}

    const invoiceArray: Invoice[] = [];
    let firebaseKey = '';


    Object.values(Object.values(payload)[0]).forEach((key:any) => {
      firebaseKey += key
    })
  
    
    Object.keys(invoiceState).forEach((key: any) => {
      let iterableKey = key
      console.log(invoiceState[key].firebaseId,"key in delete reduceer")
      console.log((key == firebaseKey.trim()),"true of false", key, firebaseKey.trim())
      if(iterableKey.length < 2){
        iterableKey = invoiceState[key].firebaseId
      }

      if(invoiceState[key].clientName){
        if((iterableKey !== firebaseKey.trim())){
          console.log("did I push?", )
          invoiceArray.push({ ...invoiceState[key]});
        }
        
      }

    })
    console.log(invoiceArray,"all gone?")
    return invoiceArray ;

  }),
  
  

);
