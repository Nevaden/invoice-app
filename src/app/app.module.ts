import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InvoicesComponent } from './Components/invoices/invoices.component';
import { ViewInvoiceComponent } from './Components/view-invoice/view-invoice.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InvoicesReducer } from './store/reducers/invoices.reducer';
import { Invoices } from './store/effects/invoices';
import { NavigationActionTiming, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { DatePipe } from './pipes/date.pipe';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    ViewInvoiceComponent,
    NavBarComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({invoices: InvoicesReducer, route: routerReducer, }, {}),
    EffectsModule.forRoot([Invoices]),
    StoreRouterConnectingModule.forRoot({navigationActionTiming: NavigationActionTiming.PostActivation,}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [DataService, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }


