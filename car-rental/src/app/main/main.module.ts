import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MainRoutingModule } from './main-routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RentComponent } from './rent/rent.component';
import { LoadingComponent } from './loading/loading.component';





@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CarDetailsComponent,
    RentComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  exports: [HomeComponent, LoginComponent, RegisterComponent, DashboardComponent, CarDetailsComponent, RentComponent]
})
export class MainModule { }
