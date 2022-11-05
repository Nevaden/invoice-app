import { Injectable } from "@angular/core";
import { DataService } from "src/app/Services/data.service"; 
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AddInvoice, AddInvoiceSuccess, DeleteInvoice, DeleteInvoiceSuccess, loadInvoices, loadInvoicesSuccess } from "../actions/invoices.actions";
import { exhaustMap, map, switchMap } from "rxjs";


@Injectable()

export class Invoices {
    constructor(private Actions$: Actions, private dataService: DataService){}
    loadInvoices$ = createEffect(() =>
    this.Actions$.pipe(
        ofType(loadInvoices),
        exhaustMap(() => this.dataService.getAllData().pipe(
            map(invoice => loadInvoicesSuccess(invoice))
        ))
    )
    )
    addNewInvoice$ = createEffect(() => 
        this.Actions$.pipe(
        ofType(AddInvoice),
        switchMap((action) => {
           return this.dataService.addNewInvoice(action.payload)
           .pipe(map((data) => AddInvoiceSuccess({response: data}))) 
        })
        
        )
    )
    deleteInvoice$ = createEffect(() => 
        this.Actions$.pipe(
        ofType(DeleteInvoice),
        switchMap((action) => {
           return this.dataService.DeleteInvoice(action.payload)
           .pipe(map((data) => DeleteInvoiceSuccess())) 
        })
        
        )
    )
    // addNewInvoice$ = createEffect(() => 
    //     this.Actions$.pipe(
    //     ofType(AddInvoice),
    //     switchMap((action) => {
    //        return this.dataService.addNewInvoice(action.payload)
    //        .pipe(map((data) => AddInvoiceSuccess({response: data}))) 
    //     })
        
    //     )
    // )

}