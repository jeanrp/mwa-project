import { Component, OnInit } from '@angular/core';
import { CustomerSellerService } from '../services/customer-seller.service';
@Component({
  selector: 'app-interesing-vehicles',
  templateUrl: './interesing-vehicles.component.html',
  styleUrls: ['./interesing-vehicles.component.css']
})
export class InteresingVehiclesComponent implements OnInit {

  customerId: string;
  vehicles_ads: any[] = [];


  constructor(private customerService: CustomerSellerService) { }

  ngOnInit() {
    let value = localStorage.getItem('user');
    this.customerId = JSON.parse(value)._id;

    this.customerService.getCustomerById(this.customerId).subscribe(data => {

      this.vehicles_ads = JSON.parse(JSON.stringify(data.vehicles_ads));
    });
  }
}
