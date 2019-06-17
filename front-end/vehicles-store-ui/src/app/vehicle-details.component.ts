import { Component, OnInit } from '@angular/core';
import { VehiclesAdsService } from './services/vehicles-ads.service';
import { ActivatedRoute } from '@angular/router';
import { VehiclesAd } from './models/VehiclesAd';

@Component({
  selector: 'app-vehicle-details',
  template: `
      DETAILS OF VEHICLE
  `,
  styles: []
})
export class VehicleDetailsComponent implements OnInit {

  vehicle: VehiclesAd;

  constructor(private route: ActivatedRoute, private vehicleService: VehiclesAdsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleService.getVehicleById(params['id']).subscribe(data => {
        this.vehicle = data;
      });
    });
  }
}
