import { Component } from '@angular/core';
import { DataService } from './Services/data.service';
import { Store } from '@ngrx/store';
import { loadInvoices } from './store/actions/invoices.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoice-app';


  constructor(private data: DataService, private store: Store) { 
  }

  ngOnInit(){
    this.store.dispatch(loadInvoices())
  
  }
}


