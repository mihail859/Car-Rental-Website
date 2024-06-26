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
import { RentedCarComponent } from './rented-car/rented-car.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';





@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CarDetailsComponent,
    RentComponent,
    LoadingComponent,
    RentedCarComponent,
    SearchComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  exports: [HomeComponent, LoginComponent, RegisterComponent, DashboardComponent,
     CarDetailsComponent, RentComponent, 
     RentedCarComponent, SearchComponent, CreateComponent, EditComponent]
})
export class MainModule { }
