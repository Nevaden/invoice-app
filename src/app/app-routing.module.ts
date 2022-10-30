import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './Components/invoices/invoices.component';
import { ViewInvoiceComponent } from './Components/view-invoice/view-invoice.component';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

const routes: Routes = [
  {path: '', redirectTo: "invoices", pathMatch: "full"},
  {path: 'invoices', component: InvoicesComponent},
  {path: 'view-invoice/:id', component: ViewInvoiceComponent},
  {path: '*', component: InvoicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{paramsInheritanceStrategy: 'always'}),
    StoreRouterConnectingModule.forRoot(),],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
