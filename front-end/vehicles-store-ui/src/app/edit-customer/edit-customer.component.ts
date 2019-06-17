import { Component, OnInit } from '@angular/core';
import { CustomerModel} from '../models/CustomerModel'
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerSellerService } from '../services/customer-seller.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  custotmer: CustomerModel;
  editForm: FormGroup;
  submitted = false;
 customerId ="5d06bce990004e72e4457b21";
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerSellerService) { }

  ngOnInit() {
    //let customerId = localStorage.getItem("5d06bce990004e72e4457b21");
    // if(!customerId){
    //   //alert("Something wrong!");
    //   this.router.navigate(['']);
    //   return;
    // }

    this.editForm = this.formBuilder.group({     
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      phone:['',Validators.required],
      birthDate:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      type:['',Validators.required],
      address: this.formBuilder.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
        zipcode: ['',Validators.required]
    })
    });

    this.customerService.getCustomerById(this.customerId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });
  }

  // get the form short name to access the form fields
   // get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    console.log(this.editForm.valid);
    if(this.editForm.valid){
      let customerSeller = this.editForm.value;
      customerSeller._id = this.customerId;
      this.customerService.updateCustomer(customerSeller)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }


}
