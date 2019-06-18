import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-ads-information',
  template: `
  
  <div *ngFor="let vehicle of vehicles_ads">
      <div class="card mb-3" style="max-width: 840px;" appReturnSpecificCustomerByParam   [currentInterestType]="vehicle.interestType" [interestTypeRequested]="interestType">
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
                <h5 class="card-title">{{vehicle.model}}</h5>
                <p class="card-text">
                    <strong>Price:</strong>{{ vehicle.price }},
                    <strong>Brand:</strong>{{ vehicle.brand }} 
                    <strong>Year:</strong>{{ vehicle.year }}
                    <strong>Condition:</strong>{{ vehicle.condition }} 
                </p>
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

  constructor() { }

  ngOnInit() {
  }

}
