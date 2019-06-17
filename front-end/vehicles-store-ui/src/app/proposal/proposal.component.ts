import { Component, OnInit } from '@angular/core';
import { CustomerModel} from '../models/CustomerModel'
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerSellerService } from '../services/customer-seller.service';
@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  custotmer: CustomerModel;
  editForm: FormGroup;
  submitted = false;
 customerId ="5d06bce990004e72e4457b21";
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerSellerService) { }


  ngOnInit() {

    this.editForm = this.formBuilder.group({     
      proposals: this.formBuilder.group({
        _id:['',Validators.required],
        description: ['',Validators.required],
        proposalDate: ['',Validators.required],
        vehicle_ads_id: ['',Validators.required],
        customer_seller_id: ['',Validators.required]
    })
  })
  this.customerService.getCustomerById(this.customerId).subscribe(data=>{
    console.log(data);
    this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
  });
}
}
