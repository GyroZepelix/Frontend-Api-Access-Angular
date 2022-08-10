import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerStripped } from '../Customer';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RESTserviceService {

  customerStr: CustomerStripped = new CustomerStripped;

  private URL: string = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getCustomerById(id?:number): Observable<Customer> {
    return this.http.get<Customer>(this.URL + 'customers/' + id);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL + 'customers');
  }

  addCustomer(customer: Customer) {
    this.customerStr.firstName = customer.firstName; 
    this.customerStr.lastName = customer.lastName; 
    this.customerStr.active = customer.active; 
    return this.http.post<CustomerStripped>(this.URL + 'customers', this.customerStr);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.URL + 'customers/' + id);
  }

  replaceCustomer(customer: Customer) {
    this.customerStr.firstName = customer.firstName; 
    this.customerStr.lastName = customer.lastName; 
    this.customerStr.active = customer.active; 

    console.log(this.customerStr);

    return this.http.put<CustomerStripped>(this.URL + 'customers/' + customer.id, this.customerStr);
  }
}
