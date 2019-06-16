import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from './CustomerModel';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000/";

  getAllCustomer(){
    return this.http.get<CustomerModel[]>(this.baseurl + 'customer');
  }

  getCustomerById(id: string){
    return this.http.get<CustomerModel>(this.baseurl + 'customer' + '/' + id);
  }

  addCustomer(customer: CustomerModel){
    return this.http.post(this.baseurl + 'customer', customer);
  }

  deleteCustomer(id: string){
    return this.http.delete(this.baseurl + 'Products' + '/' + id);
  }

  updateCustomer(customer: CustomerModel){
    return this.http.put(this.baseurl + 'Products' + '/' + customer._id, customer);
  }
}
