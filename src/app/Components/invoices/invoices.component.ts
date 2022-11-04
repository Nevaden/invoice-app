import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Store } from '@ngrx/store';
import { allInvoices } from 'src/app/store/selectors/invoices.selectors';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  Invoices: any;
  constructor(private data: DataService, private store: Store) { }


  allInvoices$ = this.store.select(allInvoices)

  
  ngOnInit(): void {
    
   }
  
   createNewInvoice(){
  
   }
  }
