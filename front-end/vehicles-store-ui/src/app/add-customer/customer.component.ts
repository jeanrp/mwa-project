import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerSellerService } from "../services/customer-seller.service"
import { CustomerModel } from '../models/CustomerModel'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerSellerService, private toastrService : ToastrService) { }
  Repdata;
  valbutton = "Save";
  customerSellerForm: FormGroup;
  submitted = false;
  custotmer: CustomerModel;
  editForm: FormGroup;
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.required]
      })
    });

  }
  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      console.log(this.editForm.value);
      this.customerService.addCustomer(this.editForm.value).subscribe(data => {
        this.toastrService.success("You are registered!!!!", "Success");
        this.router.navigate(['/login']);
        },
        error => {
                console.log(error);
        });
    }
  }
}
