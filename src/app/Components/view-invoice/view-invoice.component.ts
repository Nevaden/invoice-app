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
  postTest = {
    "id": "RT3080",
    "createdAt": "2021-08-18",
    "paymentDue": "2021-08-19",
    "description": "Re-branding",
    "paymentTerms": 1,
    "clientName": "Jensen Huang",
    "clientEmail": "jensenh@mail.com",
    "status": "paid",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "106 Kendell Street",
      "city": "Sharrington",
      "postCode": "NR24 5WQ",
      "country": "United Kingdom"
    },
    "items": [
      {
        "name": "Brand Guidelines",
        "quantity": 1,
        "price": 1800.90,
        "total": 1800.90
      }
    ],
    "total": 1800.90
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.invoice$ = this.store.select(oneInvoice(id))
    
    
  }


  newInvoice(){
    
  }

}
