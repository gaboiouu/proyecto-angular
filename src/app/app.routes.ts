
import { Routes } from '@angular/router';
import { LoginComponentComponent } from './app/auth-module/login-component/login-component.component';
import { DashboardComponentComponent } from './app/dashboard-module/dashboard-component/dashboard-component.component';
import { DetailsComponentComponent } from './app/details-module/details-component/details-component.component';


export const routes: Routes = [
    {
        path:'login',component:LoginComponentComponent
    },
    {
        path:'dashboard',component:DashboardComponentComponent
    },
    {
        path:'detalles',component:DetailsComponentComponent
    },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
 
];