import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerSellerService } from './services/customer-seller.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  template: `
    
  
  <div class="container" id="login-block">
  <h3>Login Into Your Account</h3>
  <div class="row">
    <div class="col-sm-4"></div>
    <div class="col-sm-8">
      <div class="col-sm-6">
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">        
          <div class="form-group">
            <label for="" class="control-label col-sm-4">Email</label>
            <div class="col-sm-12">
              <input type="text" class="form-control" [formControlName]="'email'">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="control-label col-sm-4">Password</label>
            <div class="col-sm-12">
              <input type="password" class="form-control" [formControlName]="'password'">
            </div>
          </div>      
          <div class="form-group"><button class="btn btn-primary btn-block" type="submit" [disabled]="!loginForm.valid"
              style="width:90%;margin-left:5%">Sign up</button></div>
        </form>
      </div>
    </div>
  </div>

</div>
  `,
  styles: [`h3 { text-align:center;} #login-block {margin-top:5%; }`]
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value)
        .subscribe(data => {
          this.onSaveComplete(data);
        },
          error => {
            this.onError(error);
          });
    }
  }

  async onSaveComplete(response: any) {
    this.loginForm.reset();
    let res = await response;
    localStorage.setItem('token', res.result.token);
    localStorage.setItem('user', JSON.stringify(res.result.data)); 
    this.toastr.success('You are logged in!', 'Welcome!!!!');
    this.router.navigate(['']);
  }


  onError(error: any) {
    console.log(error);
    this.toastr.error('Occurred an error when was processing', ':(');
  }
}
