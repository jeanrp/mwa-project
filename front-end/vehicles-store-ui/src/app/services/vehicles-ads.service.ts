import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {CustomerModel} from '../models/CustomerModel';
import {VehiclesAd} from '../models/VehiclesAd';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class VehiclesAdsService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  private _refreshVehiclesAds$ = new Subject<void>();

  get refreshVehiclesAds$() {
    return this._refreshVehiclesAds$;
  }


  getAllAds() {
    return this.http.get<VehiclesAd[]>(this.baseUrl + 'vehicles-ads');
  }


  getVehicleById(id: string) {
    return this.http.get<VehiclesAd>(this.baseUrl + 'vehicles-ads' + '/' + id);
  }

  addVehicleAd(vehicleAd: VehiclesAd) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(this.baseUrl + 'vehicles-ads' + '/' + user._id, vehicleAd);
  }

  removeVehicleAd(vehicleAdId: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.delete(this.baseUrl + 'vehicles-ads/' + user._id + '/remove/' + vehicleAdId)
      .pipe(
        tap(() => {
          this.refreshVehiclesAds$.next();
        })
      );
  }


  updateCustomer(customer: CustomerModel) {
    return this.http.put(this.baseUrl + 'vehicles-ads/' + customer._id, customer);
  }


  getVehicleByOwner(id: string) {
    return this.http.get<VehiclesAd[]>(this.baseUrl + 'vehicles-ads');
  }
}
