import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-nav',
  template: `
  <div id="menu">
     <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light inner-menu">
        <a class="navbar-brand mum-brand" [routerLink]="[ '/' ]">MUM Vehicles</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" *ngIf="!loginService.isUserLoggedIn()" [routerLink]="[ '/register' ]">Sign up <span class="sr-only">(current)</span></a>
            </li> 
          
            <li class="nav-item">
              <a class="nav-link" *ngIf="!loginService.isUserLoggedIn()" [routerLink]="[ '/login' ]">Sign in</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" *ngIf="loginService.isUserLoggedIn()" [routerLink]="[ '/add-ad' ]">Announce Vehicle</a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" *ngIf="loginService.isUserLoggedIn()" [routerLink]="[ '/edit-profile' ]">Edit Profile <span class="sr-only">(current)</span></a>
          </li> 

          <li class="nav-item active">
          <a class="nav-link" *ngIf="loginService.isUserLoggedIn()" [routerLink]="[ '/show-proposal' ]">Proposals <span class="sr-only">(current)</span></a>
        </li> 

        <li class="nav-item active">
          <a class="nav-link" *ngIf="loginService.isUserLoggedIn()" [routerLink]="[ '/show-interesting-vehicles' ]">Requested Vehicles <span class="sr-only">(current)</span></a>
        </li> 

            <li class="nav-item active">
              <a class="nav-link" *ngIf="loginService.isUserLoggedIn()" [routerLink]="[ '/show-my-vehicles-ads' ]">My Vehicles <span class="sr-only">(current)</span></a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" *ngIf="loginService.isUserLoggedIn()" [routerLink]="[ '/logout' ]">Sign out</a>
            </li>
          </ul>
          
        </div>
    </nav>
    </div> 
  </div>
  `,
  styles: [`.mum-brand { font-weight: 600; font-size: 20px;  }
   #menu {  background-color: rgb(11, 35, 84) !important; border-bottom: 1.75px solid rgb(235, 31, 5); } 
   .inner-menu { position: relative; right: 0;  border-bottom: 0px solid rgb(235, 31, 5); }
   .bg-light {
    background-color: rgb(11, 35, 84) !important;
    }
   .navbar-light .navbar-brand, .navbar-light .navbar-nav .nav-link,
   .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color : white;
  }  
    #navbarText { position:absolute; right: 0;}`]
})
export class NavComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

}
