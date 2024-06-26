import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { LoginComponent } from '../main/login/login.component';
import { RegisterComponent } from '../main/register/register.component';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { RentedCarComponent } from '../main/rented-car/rented-car.component';
import { SearchComponent } from '../main/search/search.component';
import { CreateComponent } from '../main/create/create.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: "register", component: RegisterComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'rented', component: RentedCarComponent},
    { path: "search", component: SearchComponent},
    { path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
