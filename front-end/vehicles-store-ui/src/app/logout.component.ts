import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-logout',
  template: `
     <div class="container">
       <h1>You are logged out</h1>
         <p>Thank you for using the application</p> 
     </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.loginService.logout();
  }

}
