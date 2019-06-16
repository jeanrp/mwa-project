import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerSellerService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  //   createCustomerSeller(empresa: Empresa): Observable<Empresa> {
  //     let response = this.http
  //         .post(this.UrlServiceV1 + "nova-conta", empresa, super.ObterJsonHeader())
  //         .map(super.extractData)
  //         .catch(super.serviceError);

  //     return response;
  // }
}
