import {Component, OnInit, Input, Output} from '@angular/core';
import {VehiclesAdsService} from "./services/vehicles-ads.service";
import {VehiclesAd} from "./models/VehiclesAd";
import {Router} from "@angular/router";
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-vehicle-ads-information',
  template: `
    <div *ngFor="let vehicle of vehicles_ads">
      <div class="card mb-3" style="max-width: 840px;" appReturnSpecificCustomerByParam
           [currentInterestType]="vehicle.interestType" [interestTypeRequested]="interestType">
        <div class="row no-gutters">
          <div class="col-md-4">
            <slideshow [height]="'200px'"
                       [minHeight]="'180px'"
                       [arrowSize]="'7px'"
                       [autoPlay]="false"
                       [showArrows]="true"
                       [imageUrls]="vehicle.images"
                       [lazyLoad]="vehicle.images?.length > 1"
                       [autoPlayWaitForLazyLoad]="true">
            </slideshow>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-center">{{vehicle.model}}</h5>
              <div class="card-text">

                <div class="row">
                  <div class="col-sm-3" style="text-align: right"><strong>Price : </strong></div>
                  <div class="col-sm-3" *ngIf="vehicle.price"> {{ vehicle.price | currency  }} </div>
                  <div class="col-sm-3" style="text-align: right"><strong>Odometer : </strong></div>
                  <div class="col-sm-3"> {{ vehicle.odometer   }} </div>
                </div>
                <div class="row">
                  <div class="col-sm-3" style="text-align: right"><strong>Brand : </strong></div>
                  <div class="col-sm-3"> {{ vehicle.brand  }} </div>
                  <div class="col-sm-3" style="text-align: right"><strong>Vin : </strong></div>
                  <div class="col-sm-3"> {{ vehicle.vin  }} </div>
                </div>

                <div class="row">
                  <div class="col-sm-3" style="text-align: right"><strong>Year : </strong></div>
                  <div class="col-sm-3"> {{ vehicle.year  }} </div>
                  <div class="col-sm-3" style="text-align: right"><strong>Fuel : </strong></div>
                  <div class="col-sm-3"> {{ vehicle.fuel  }} </div>
                </div>

                <div class="row">
                  <div class="col-sm-3" style="text-align: right"><strong>Condition : </strong></div>
                  <div class="col-sm-3"> {{ vehicle.condition   }} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class VehicleAdsInformationComponent implements OnInit {

  @Input() vehicles_ads: VehiclesAd[];
  @Input() interestType;
  @Output() newVehiclesAds = new EventEmitter();

  constructor(private vehiclesAdsService: VehiclesAdsService, private router: Router) {
  }


  delete(id) {
    this.vehiclesAdsService.removeVehicleAd(id)
      .subscribe(data => {
          const user = localStorage.getItem('user');
          this.vehicles_ads = this.vehicles_ads.filter((v) => {
              return v._id !== id;
            }
          );
          this.newVehiclesAds.emit(JSON.stringify(this.vehicles_ads));
        },
        error => {
          console.log(error);
        });
  }


  ngOnInit() {
  }

}
