import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
 
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerComponent } from './add-customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { ListVehiclesComponent } from './list-vehicles.component'
import { CustomerSellerService } from './services/customer-seller.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { myRoutes } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EditCustomerComponent,
    ErrorComponent,
    ListVehiclesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    myRoutes
  ],
  providers: [CustomerSellerService, { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
