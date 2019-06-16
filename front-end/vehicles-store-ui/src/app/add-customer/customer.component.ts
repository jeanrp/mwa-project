import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {CustomerSellerService} from "../services/customer-seller.service"
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerSellerService) { } 
   Repdata;  
   valbutton ="Save";  
   addForm: FormGroup;
  submitted = false;
  
  
 

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      
        firstName: ['', Validators.required],
        lastName: ['',Validators.required],
        phone:['',Validators.required],
        birthDate:['',Validators.required],
        creationDate:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        type:['',Validators.required],
        address: this.formBuilder.group({
          street: ['',Validators.required],
          city: ['',Validators.required],
          state: ['',Validators.required],
          zip: ['',Validators.required]
        }),
      });
   
  }
  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.customerService.addCustomer(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
}
}