import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  //constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Save";  
   
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['',Validators.required],
    phone:['',Validators.required],
    birthDate:['',Validators.required],
    creationDate:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    type:['',Validators.required],
    address: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    }),
  });
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  constructor(private fb: FormBuilder) { }
}