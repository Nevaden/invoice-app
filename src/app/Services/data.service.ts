import { Inject, Injectable } from '@angular/core';
import { FirebaseApp, firebaseApp$ } from '@angular/fire/app';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

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





}
