import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initializeApp,provideFirebaseApp} from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase,  } from '@angular/fire/database';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { list } from '@angular/fire/database';
import { InvoicesComponent } from './Components/invoices/invoices.component';
import { ViewInvoiceComponent } from './Components/view-invoice/view-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    ViewInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Initialize Firebase
//  const app = initializeApp(environment.firebase);

