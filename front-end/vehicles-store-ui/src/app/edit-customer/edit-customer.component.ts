import { Component, OnInit } from '@angular/core';
import { CustomerModel} from '../CustomerModel'
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  product: CustomerModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    let customerId = localStorage.getItem("_Id");
    if(!customerId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({     
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
    })
    });

    this.customerService.getCustomerById(customerId).subscribe(data=>{
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.customerService.updateCustomer(this.editForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }


}
