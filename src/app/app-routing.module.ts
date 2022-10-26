import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './Components/invoices/invoices.component';
import { ViewInvoiceComponent } from './Components/view-invoice/view-invoice.component';

const routes: Routes = [
  {path: '', redirectTo: "/invoices", pathMatch: "full"},
  {path: 'Invoices', component: InvoicesComponent},
  {path: 'View Detail/:id', component: ViewInvoiceComponent},
  {path: '*', component: InvoicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
