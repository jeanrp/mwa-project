import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ListVehiclesComponent } from './list-vehicles.component';
import { CustomerComponent } from './add-customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import {AidComponent} from "./ad/aid.component";
import { VehicleDetailsComponent } from './vehicle-details.component';
import {ProposalComponent} from "./proposal/proposal.component"
import {InteresingVehiclesComponent} from "./interesing-vehicles/interesing-vehicles.component"
import { ListAdsComponent } from './list-ads/list-ads.component';
import { AuthGuardService } from './guards/auth-guard';
import { UnauthorizedComponent } from './unauthorized.component';

const MY_ROUTES: Routes = [
    { path: '', redirectTo: 'vehicles-ads', pathMatch: 'full' },
    { path: 'vehicles-ads', component: ListVehiclesComponent },
    { path: 'register', component: CustomerComponent },
    { path: 'edit-profile', component: EditCustomerComponent, canActivate: [AuthGuardService] },
    { path: 'show-proposal', component: ProposalComponent, canActivate: [AuthGuardService] },
    { path: 'show-interesting-vehicles', component: InteresingVehiclesComponent, canActivate: [AuthGuardService]  },
    { path: 'show-my-vehicles-ads', component: ListAdsComponent, canActivate: [AuthGuardService]  },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
    { path: 'add-ad', component: AidComponent, canActivate: [AuthGuardService] },
    { path: 'vehicles-ads/:id', component: VehicleDetailsComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/' }

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
