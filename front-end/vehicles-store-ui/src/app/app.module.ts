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
import { LoginComponent } from './login.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer.component';
import { LogoutComponent } from './logout.component';
import { ProposalComponent } from './proposal/proposal.component';
import { LoginService } from './services/login.service';

import {AidComponent} from './ad/aid.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EditCustomerComponent,
    ErrorComponent,
    ListVehiclesComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    LogoutComponent,
    AidComponent,
    FileSelectDirective,
    LogoutComponent,
    ProposalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true
    }),
    myRoutes
  ],
  providers: [CustomerSellerService, LoginService, { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
