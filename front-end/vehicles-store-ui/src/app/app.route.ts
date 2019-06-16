import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ListVehiclesComponent } from './list-vehicles.component';

const MY_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ListVehiclesComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/' }
    
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
