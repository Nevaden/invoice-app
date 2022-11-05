import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Store } from '@ngrx/store';
import { allInvoices } from 'src/app/store/selectors/invoices.selectors';
import { AddInvoice } from 'src/app/store/actions/invoices.actions';
import { oneInvoice } from 'src/app/store/selectors/invoice.selectors';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  Invoices: any;
  NewID: any;
  idCheck$: any;

  constructor(private data: DataService, private store: Store) { }


  allInvoices$ = this.store.select(allInvoices);

  
  ngOnInit(): void {
    
    
   }

   generateRandomInvoiceNumber(){
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let numbers = '0123456789';
      let charactersLength = characters.length;
      let numbersLength = numbers.length;
      for ( let i = 0; i < 2; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      for ( let i = 0; i < 4; i++ ) {
        result += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
      return result;
   }

   createNewInvoice(){
    
    this.NewID = this.generateRandomInvoiceNumber();
    
    let postTest = {
      clientAddess: {
          city: 'string',
          country: 'string',
          postCode: 'string',
          street: 'string',
      },
      clientEmail: 'string',
      clientName: 'string',
      createdAt: 'string',
  
      description: 'string',
      firebaseId: '',
      id: this.NewID,
      items: [],
      paymentDue: 'string',
      paymentTerms: 78,
      senderAddress: {
          city: 'string',
          country: 'string',
          postCode: 'string',
          street: 'string',
      },
      status: 'pending',
      total: 725,
  }
    console.log('OH YEAHHHH')
    this.store.dispatch(AddInvoice({payload: {...postTest}}))
}
  }
