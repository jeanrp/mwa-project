import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {CustomerModel} from '../models/CustomerModel';
import {VehiclesAd} from '../models/VehiclesAd';
import {HttpClient} from '@angular/common/http';
import {UserLoginModel} from '../models/UserLoginModel';


@Injectable({
  providedIn: 'root'
})
export class VehiclesAdsService extends BaseService {


  constructor(private http: HttpClient) {
    super();
  }

  getAllAds() {
    return this.http.get<CustomerModel[]>(this.baseUrl + 'vehicles-ads');
  }

  getCustomerById(id: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.get<CustomerModel>(this.baseUrl + 'vehicles-ads' + '/' + user._id);
  }

  addVehicleAd(vehicleAd: VehiclesAd) {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return this.http.post(this.baseUrl + 'vehicles-ads' + '/' + user._id, vehicleAd);
  }

  // deleteCustomer(id: string) {
  //   return this.http.delete(this.baseUrl + 'Products' + '/' + id);
  // }

  updateCustomer(customer: CustomerModel) {
    return this.http.put(this.baseUrl + 'vehicles-ads/' + customer._id, customer);
  }


}
