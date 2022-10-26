import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  Invoices: any;
  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.Invoices = this.OnReload();

   }
  



    OnReload(){
      console.log("UAHFDS")
        return this.data.getAllData().subscribe((data) =>{
          console.log(data)
        });
   }

  }
