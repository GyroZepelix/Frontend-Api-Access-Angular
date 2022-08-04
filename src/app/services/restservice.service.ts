import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../Customer';
import { CUSTOMERS } from '../db';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RESTserviceService {

  private URL: string = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<Customer[]> {
    console.log(this.http.get<Customer[]>(this.URL + 'customers'));
    return this.http.get<Customer[]>(this.URL + 'customers');
  }
}
