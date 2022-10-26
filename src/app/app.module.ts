import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initializeApp } from "firebase/app";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiynaomC7hGnDX02uW0c-GqeR3AmeTd2M",
  authDomain: "invoice-app-7e343.firebaseapp.com",
  databaseURL: "https://invoice-app-7e343-default-rtdb.firebaseio.com",
  projectId: "invoice-app-7e343",
  storageBucket: "invoice-app-7e343.appspot.com",
  messagingSenderId: "145612727444",
  appId: "1:145612727444:web:5beed7ad00ede318330081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);