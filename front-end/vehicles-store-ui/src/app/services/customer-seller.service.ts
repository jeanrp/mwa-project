import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
 
import { CustomerModel } from '../models/CustomerModel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerSellerService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllCustomer() {
    return this.http.get<CustomerModel[]>(this.baseUrl + 'customer-sellers');
  }

  getCustomerById(id: string) {
    return this.http.get<CustomerModel>(this.baseUrl + 'customer-sellers' + '/' + id);
  }

  addCustomer(customer: CustomerModel) {
    return this.http.post(this.baseUrl + 'customer-sellers', customer);
  }

  // deleteCustomer(id: string) {
  //   return this.http.delete(this.baseUrl + 'Products' + '/' + id);
  // }

  updateCustomer(customer: CustomerModel) {
    return this.http.put(this.baseUrl + 'customer-sellers' + '/' + customer._id, customer);
  }

  //   createCustomerSeller(empresa: Empresa): Observable<Empresa> {
  //     let response = this.http
  //         .post(this.UrlServiceV1 + "nova-conta", empresa, super.ObterJsonHeader())
  //         .map(super.extractData)
  //         .catch(super.serviceError);

  //     return response;
  // }
}
