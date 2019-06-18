import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../models/CustomerModel'
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerSellerService } from '../services/customer-seller.service';
@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  
  editForm: FormGroup;
  submitted = false;
  customerId: string;
  proposals : any[] = [];
  //customerId ="5d06bce990004e72e4457b21";
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerSellerService) { }


  ngOnInit() {
    let value = localStorage.getItem('user');
    this.customerId = JSON.parse(value)._id;
   
    this.customerService.getCustomerById(this.customerId).subscribe(data => { 
      this.proposals = JSON.parse(JSON.stringify(data.proposals));   
    });
  }
}
