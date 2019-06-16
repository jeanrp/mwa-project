import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-vehicles',
  template: `
    <a [routerLink]="[ '/register' ]">Add Customer/Seller</a>  <br />
    <a [routerLink]="[ '/edit-profile']">Edit Customer/Seller</a>     <br />
  `,
  styles: []
})
export class ListVehiclesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
