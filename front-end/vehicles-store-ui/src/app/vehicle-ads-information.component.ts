import {Component, OnInit, Input} from '@angular/core';
import {VehiclesAdsService} from "./services/vehicles-ads.service";
// import {VehiclesAds} from "./models/VehiclesAd";
import {Router} from "@angular/router";

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
                  <div class="col-sm-3" style="text-align: right"> Delete this?</div>
                  <div class="col-sm-3">
                    <button class="btn btn-danger" (click)="delete(vehicle._id)">X</button>
                  </div>
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

  @Input() vehicles_ads;
  @Input() interestType;

  constructor(private vehiclesAdsService: VehiclesAdsService, private router: Router) {
  }

  delete(id) {
    this.vehiclesAdsService.removeVehicleAd(id)
      .subscribe(data => {
          console.log(data);
          // this.vehicles_ads = vehiclesAdsService.getAll();
          this.router.navigate([''], { skipLocationChange: true });
          this.router.navigate(['show-my-vehicles-ads']);
        },
        error => {
          console.log(error);
        });
  }


  ngOnInit() {
  }

}
