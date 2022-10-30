import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { getItemById, oneInvoice, selectInvoice } from 'src/app/store/selectors/invoice.selectors';
import { selectRouteParams } from 'src/app/store/selectors/router.selectors';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
  id: any;
  invoice$: any;
  constructor(private store: Store, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // this.store.select(selectInvoice).subscribe(params => {
    //   console.log(params,"plz")
    // })

    const id = this.route.snapshot.params['id'];
    this.invoice$ = this.store.select(oneInvoice(id))

   
  }

}
