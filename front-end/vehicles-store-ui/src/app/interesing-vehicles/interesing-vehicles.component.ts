import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerSellerService } from '../services/customer-seller.service';
@Component({
  selector: 'app-interesing-vehicles',
  templateUrl: './interesing-vehicles.component.html',
  styleUrls: ['./interesing-vehicles.component.css']
})
export class InteresingVehiclesComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  customerId: string;
  vehicles_ads : any[] = [];
  //customerId ="5d06bce990004e72e4457b21";
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerSellerService) { }


  ngOnInit() {
    let value = localStorage.getItem('user');
    this.customerId = JSON.parse(value)._id;
   
    this.customerService.getCustomerById(this.customerId).subscribe(data => {
      
      // data.vehicles_ads.
     let filteredData = data.vehicles_ads.filter((v,i) => 
     {
       return v.interestType === "customer";
     })
     
     this.vehicles_ads = JSON.parse(JSON.stringify(filteredData));
        
    });
  }
}
