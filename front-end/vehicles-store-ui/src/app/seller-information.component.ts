import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seller-information',
  template: `
  <div class="card">
      <div class="card-body">
        <h5 class="card-title">Seller Information </h5>
        <p class="card-text"><strong>Name:</strong>&nbsp; {{seller.firstName}} {{seller.lastName}}</p>
        <p class="card-text"><strong>Email:</strong>&nbsp;{{seller.email}}</p>
        <p class="card-text"><strong>Phone:</strong>&nbsp;{{seller.phone | strReplace:'.':'' | phone:'US' }}</p>
        
      </div>
  </div>
  `,
  styles: [`
    .card-title{
        font-weight:bold;
    }
    p{
      margin-bottom:1px !important;
    }
  `]
})
export class SellerInformationComponent implements OnInit {

  @Input() seller : Object; 
  constructor() { 
  }

  ngOnInit() 
  { 
    
  }

}
