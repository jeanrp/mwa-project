import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ListVehiclesComponent } from './list-vehicles.component';
import { CustomerComponent } from './add-customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const MY_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ListVehiclesComponent },
    { path: 'register', component: CustomerComponent },
    { path: 'edit-profile', component: EditCustomerComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/' }

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
