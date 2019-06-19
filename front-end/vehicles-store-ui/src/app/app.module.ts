import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerComponent } from './add-customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
import { ListVehiclesComponent } from './list-vehicles.component';
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
import { SlideshowModule } from 'ng-simple-slideshow';
import { AidComponent } from './ad/aid.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { InteresingVehiclesComponent } from './interesing-vehicles/interesing-vehicles.component';
import { SendProposalFormComponent } from './send-proposal-form.component';
import { SellerInformationComponent } from './seller-information.component';
import { VehicleInformationComponent } from './vehicle-information.component';
import { PhonePipe } from './phone.pipe';
import { StrReplacePipe } from './str-replace.pipe';
import { ListAdsComponent } from './list-ads/list-ads.component';
import { VehiclesAdsService } from './services/vehicles-ads.service';
import { ProposalService } from './services/proposal.service';
import { VehicleAdsInformationComponent } from './vehicle-ads-information.component';
import { ReturnSpecificCustomerByParamDirective } from './return-specific-customer-by-param.directive';
import { SearchBarComponent } from './search-bar.component';
import { Ng5SliderModule } from 'ng5-slider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './guards/auth-guard';
import { UnauthorizedComponent } from './unauthorized.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EditCustomerComponent,
    SearchBarComponent,
    ErrorComponent,
    ListVehiclesComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    LogoutComponent,
    AidComponent,
    FileSelectDirective,
    LogoutComponent,
    ProposalComponent,
    VehicleDetailsComponent,
    ListAdsComponent,
    VehicleDetailsComponent,
    InteresingVehiclesComponent,
    SendProposalFormComponent,
    SellerInformationComponent,
    VehicleInformationComponent,
    PhonePipe,
    StrReplacePipe,
    VehicleAdsInformationComponent,
    ReturnSpecificCustomerByParamDirective,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlideshowModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true
    }),
    myRoutes,
    Ng5SliderModule,
    NgbModule
  ],
  providers: [VehiclesAdsService, ProposalService, CustomerSellerService, AuthGuardService, LoginService, { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true}],  
  bootstrap: [AppComponent]
})
export class AppModule { }
