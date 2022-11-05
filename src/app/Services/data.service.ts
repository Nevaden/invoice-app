import { Inject, Injectable } from '@angular/core';
import { FirebaseApp, firebaseApp$ } from '@angular/fire/app';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Invoice } from '../interfaces/invoice';
import { DeleteInvoice } from '../store/actions/invoices.actions';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL: string = '';
  firebaseURL: string = 'https://invoice-app-7e343-default-rtdb.firebaseio.com/';
  JSON: string = '.json'
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any>{
    this.URL = `${this.firebaseURL}${this.JSON}`

    return this.http.get(this.URL);
  }

  addNewInvoice(payload: Invoice){
    this.URL = `${this.firebaseURL}${this.JSON}`
    console.log(this.URL, "my url")
    return this.http.post<Invoice>(`${this.URL}`, payload)

  }

  DeleteInvoice(id: string){
    let key = '';
    Object.values(id).forEach((identidsasdi) => {
      key += identidsasdi;
    })
    key = key.trim()
    this.URL = `${this.firebaseURL}${key}${this.JSON}`
    return this.http.delete(this.URL)
  }


}
