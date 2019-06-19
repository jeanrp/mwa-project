import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { CustomerModel } from '../models/CustomerModel';
import { HttpClient } from '@angular/common/http';
import { UserLoginModel } from '../models/UserLoginModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerSellerService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllCustomer() {
    return this.http.get<CustomerModel[]>(this.baseUrl + 'customers-sellers');
  }

  getCustomerById(id: string) {
    return this.http.get<CustomerModel>(this.baseUrl + 'customers-sellers' + '/' + id);
  }

  getCustomerVehicleByCustomerId(id: string) { 
    return this.http.get<CustomerModel>(this.baseUrl + 'customers-sellers' + '/vehicle/' + id);
  }

  addCustomer(customer: CustomerModel) {
    return this.http.post(this.baseUrl + 'customers-sellers', customer);
  } 

  updateCustomer(customer: CustomerModel) {
    return this.http.put(this.baseUrl + 'customers-sellers' + '/' + customer._id, customer);
  }


}
