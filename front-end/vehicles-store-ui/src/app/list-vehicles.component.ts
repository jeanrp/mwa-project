import { Component, OnInit } from '@angular/core';
import { VehiclesAd } from './models/VehiclesAd';
import { VehiclesAdsService } from './services/vehicles-ads.service';
import { from, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-vehicles',
  template: `

  
  <div *ngIf="vehicles">
    <app-search-bar [vehicles]="vehicles" (newVehicle)="updateVehicles($event)"></app-search-bar>
  </div>
  <div class="row count" *ngIf="vehicles">
      <strong>{{ vehicles.length }}</strong> &nbsp; vehicles advertisements found
  </div>
    
  <div  *ngFor="let vehicle of vehicles | slice : startPage:paginationLimit" class="card" style="width: 18rem;">

  <slideshow [height]="'180px'"
           [minHeight]="'180px'"
           [arrowSize]="'7px'"
           [autoPlay]="false"
           [showArrows]="true"
           [imageUrls]="vehicle.images"
           [lazyLoad]="vehicle.images?.length > 1"
           [autoPlayWaitForLazyLoad]="true">
</slideshow>
       <div class="card-body">
        <h5 class="card-title"><b>{{ vehicle.model }}</b></h5>
        <p class="card-text"><b>Price: </b> <span id="price">{{vehicle.price | currency}}</span>&nbsp;&nbsp; <b>Year:</b> {{vehicle.year}}&nbsp;&nbsp; <br /><b>Brand:</b> {{vehicle.brand}}</p>
        <a class="btn btn-primary btn-block" [routerLink]="[ '/vehicles-ads/', vehicle._id ]">Details</a>
      </div>
  </div>

      <div id="showMoreBlock">
        <button class="btn btn-primary show-more-button" *ngIf ="paginationLimit < vehicles?.length" (click)="showMoreItems()">
            Show More
       </button> 
     </div>
  `,
  styles: [`

      .count{
            margin-left:50px;
            font-size:20px;
            line-height: 2em;
            margin-bottom:15px;
      }

      .count strong{ font-size:25px;}
    
      .card {
          float:left;
          margin-left:50px;
          margin-top:10px;
      }
      .btn-primary
      {
        color:white !important;
      }
      .show-more-button{
        margin-bottom:100px !important;        
        width:30%;
      } 
      .card-title {
        margin-bottom: .25rem !important;
    }   
    .card-body
    {
      flex: 1 1 auto;
      padding: .75rem;

    }

   #showMoreBlock{
    margin-top: 30px;
    text-align: center;
    height: 30px;
    float: left;
    width: 100%;
    }
  `]
})
export class ListVehiclesComponent implements OnInit {

  vehicles: VehiclesAd[];
  startPage: Number;
  paginationLimit: Number;

  constructor(private vehicleService: VehiclesAdsService) {
    vehicleService.getAllAds().subscribe((data: VehiclesAd[]) => {
      this.vehicles = data;
      this.startPage = 0;
      this.paginationLimit = 6;
      console.log(this.vehicles);
    });
  }

  ngOnInit() {
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 6;
  }

  updateVehicles(newVehicles: string) { 
    this.vehicles = JSON.parse(newVehicles);
  }
}
