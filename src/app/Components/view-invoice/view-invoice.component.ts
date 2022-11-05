import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddInvoice, DeleteInvoice } from 'src/app/store/actions/invoices.actions';
import { getItemById, oneInvoice, selectInvoice } from 'src/app/store/selectors/invoice.selectors';
import { selectRouteParams } from 'src/app/store/selectors/router.selectors';
import { Invoice } from 'src/app/interfaces/invoice';


@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  id: any;
  invoice$: any;
  firebaseId: any;
  
  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.invoice$ = this.store.select(oneInvoice(id))

  }


  deleteCurrentInvoice(){
    this.firebaseId = document.getElementsByClassName("delete")[0].id
    console.log(this.firebaseId)
    this.store.dispatch(DeleteInvoice({payload: {...this.firebaseId}}));
  }

}
