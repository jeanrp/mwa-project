import {Component, OnInit} from '@angular/core';
import {CustomerSellerService} from '../services/customer-seller.service';
import {VehiclesAd} from "../models/VehiclesAd";

@Component({
  selector: 'app-list-ads',
  templateUrl: './list-ads.component.html',
  styleUrls: ['./list-ads.component.css']
})
export class ListAdsComponent implements OnInit {

  customerId: string;
  vehicles_ads: any[] = [];


  constructor(private customerService: CustomerSellerService) {
  }

  ngOnInit() {
    let value = localStorage.getItem('user');
    this.customerId = JSON.parse(value)._id;

    this.customerService.getCustomerById(this.customerId).subscribe(data => {

      this.vehicles_ads = JSON.parse(JSON.stringify(data.vehicles_ads));
    });
  }

  updateList($vehicles: string) {
    this.vehicles_ads = JSON.parse($vehicles);
  }
}
