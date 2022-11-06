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
  total: number = 0;
  itemList :any;
  newItemSkeleton = `<div class="singleItem">
  <h4 class="inputLabel">Item Name</h4>
  <input type="text" class="inputField bigInput">


  <div class="itemAmountsContainer">
      <div class="InputContainer">
          <h4 class="inputLabel">Qty.</h4>
          <input type="number" (change)="calTotalQty($event.target)"  class="inputField itemValues qty">
      </div>
      <div class="InputContainer">
          <h4 class="inputLabel">Price</h4>
          <input type="number" (change)="calTotalPrice($event.target)" class="inputField itemValues price">
      </div>   
      <div class="InputContainer">
          <h4 class="inputLabel">Total</h4>
          <p class="inputField itemValues totalPrice"></p>
      </div>   
      <img (click)="deleteItem($event.target)" class="deleteItem" src="../../../assets/icon-delete.svg" alt="delete Item Icon">
  </div>
</div>`
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


  openNewInvoice() {
    document.getElementById("newInvoiceOffCanvas")!.style.width = "100%";
    document.body.style.overflow = "hidden";
  }

  closeNewInvoice(){
    document.getElementById("newInvoiceOffCanvas")!.style.width = "0px";
    document.body.style.overflow = "scroll";
  }

  deleteItem(item: any){
    item.parentElement.parentElement.remove()
    
  }

  calTotalQty(item: any){
    let itemTotal = item.parentElement.parentElement.children[2].children[1]
    item.parentElement.parentElement.children[1].children[1].value
    let total = (item.value * item.parentElement.parentElement.children[1].children[1].value)
    itemTotal.value = total
    itemTotal.textContent = total
  }
  calTotalPrice(item: any){
    let itemTotal = item.parentElement.parentElement.children[2].children[1]
    item.parentElement.parentElement.children[0].children[1].value
    let total = (item.value * item.parentElement.parentElement.children[0].children[1].value)
    itemTotal.value = total
    itemTotal.textContent = total
  }

  addNewItem(){
    this.itemList = document.getElementById('itemList')?.insertAdjacentHTML("beforeend",this.newItemSkeleton)
    console.log("tis this thing on?", this.itemList)
    // this.itemList?.innerHtml

  }


  discardInvoice(){

  }
}

