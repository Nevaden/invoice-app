import { Injectable } from "@angular/core";
import { DataService } from "src/app/Services/data.service"; 
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { loadInvoices, loadInvoicesSuccess } from "../actions/invoices.actions";
import { exhaustMap, map } from "rxjs";


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
}