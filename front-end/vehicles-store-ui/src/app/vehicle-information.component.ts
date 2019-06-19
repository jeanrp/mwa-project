import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-information',
  template: `
  <div class="row">
  <div class="col-sm-4">
      <dl>

          <dt class="label">Condition</dt><dd>Condition</dd>
          <dt class="label" *ngIf="vehic.price">Price</dt><dd>{{vehic.price | currency }}</dd>          

          <dt class="label">Brand</dt><dd>{{vehic.brand}}</dd>
          <dt class="label">Model</dt><dd>{{vehic.model}}</dd>
      </dl>
  </div>
  <div class="col-sm-4">            
      <dl>
          <dt class="label">Fuel</dt><dd>{{vehic.fuel}}</dd>
          <dt class="label">Color</dt><dd>{{vehic.color}}</dd>

          <dt class="label">Category</dt><dd>{{vehic.category}}</dd>
          <dt class="label">Year</dt><dd>{{vehic.year}}</dd>
      </dl>
  </div>
  <div class="col-sm-4">
    <dl>
          <dt class="label" *ngIf="vehic.odometer">Odometer</dt><dd>{{vehic.odometer | number: '2.'}} &nbsp;km</dd>
          <dt class="label">Vin</dt><dd>{{vehic.vin}}</dd>    

          <dt class="label">Transmission</dt><dd>{{vehic.transmission}}</dd>
    
          <div *ngIf="vehic.description">
            <dt class="label">Description</dt><dd><span title="{{vehic.description}}">{{ (vehic.description.length > 10) ? vehic.description.substr(0,9) + "..." : vehic.description }}</span></dd>
          </div>

    </dl>
  </div>
</div>    
  `,
  styles: [
    `
    .label {
      color:  rgb(11, 35, 84);
      display: block; 
      font-size: 15px;
      font-weight: bold;
      padding: 0 0 3px 0;
      text-transform: uppercase;
      font-style: italic;
  }
    `
  ]
})
export class VehicleInformationComponent implements OnInit {

  @Input() vehic;

  constructor() { }

  ngOnInit() {
  }

}
