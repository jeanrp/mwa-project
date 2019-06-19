import { Component, OnInit } from '@angular/core';
import { VehiclesAdsService } from './services/vehicles-ads.service';
import { ActivatedRoute } from '@angular/router';
import { VehiclesAd } from './models/VehiclesAd';
import { CustomerSellerService } from './services/customer-seller.service';

@Component({
  selector: 'app-vehicle-details',
  template: `

  <div class="row">
  <div class="col-sm-8">               
  
        <div class="title"><h2>{{ vehicle.model }}</h2></div><br/>
                <div class="card mb-3">
                      <div id="imgBlock">
                          <slideshow [height]="'400px'"
                          [minHeight]="'180px'"
                          [arrowSize]="'7px'"
                          [autoPlay]="false"
                          [showArrows]="true"
                          [imageUrls]="vehicle.images"
                          [lazyLoad]="vehicle.images?.length > 1"
                          [autoPlayWaitForLazyLoad]="true">
                          </slideshow>
                      </div>  
              
                <div class="card-body">         
                    <app-vehicle-information [vehic]="vehicle"></app-vehicle-information> 
                </div>            
            </div>
        </div>    
   
      <div class="col-sm-4" id="contentAds">       
          <app-seller-information [seller]="user"></app-seller-information>
          <br />
          <app-send-proposal-form [seller]="user"></app-send-proposal-form>         
      </div>
  <div>
 
  `,
  styles: [`
    #imgBlock { width: 100%;margin-top:5px; }
    .title { border-bottom: .1em solid rgb(11, 35, 84); margin-top:40px;  font-size:24px;   text-shadow: 1px 1px 1px rgba(255,255,255,0.5);
      text-transform: uppercase; }
   
    #contentAds{
      margin-top: 115px;
 
    }
   
  `]
})
export class VehicleDetailsComponent implements OnInit {

  vehicle =
    {
      brand: '',
      model: '',
      images: []
    };

  user = {};
  


  constructor(private route: ActivatedRoute, private customerSellerService: CustomerSellerService) {
    this.route.params.subscribe(params => {
      customerSellerService.getCustomerVehicleByCustomerId(params["id"]).subscribe(data => {
               var dataJson = JSON.parse(JSON.stringify(data));
               this.vehicle = dataJson.vehicles_ads[0];
               this.user = dataJson; 
      });
    });
  }

  ngOnInit() {

  }
}


