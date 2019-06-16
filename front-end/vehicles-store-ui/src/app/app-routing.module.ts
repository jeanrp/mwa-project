import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditCustomerComponent } from './edit-customer/edit-customer.component'
 const routes: Routes=[
   {path: 'edit-customer',component:EditCustomerComponent}
 ]
@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
