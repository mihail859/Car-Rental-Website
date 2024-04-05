import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RentComponent } from './rent/rent.component';
import { RentedCarComponent } from './rented-car/rented-car.component';



const routes: Routes = [
  { path: "details/:id", component: CarDetailsComponent},
  { path: "rent/:id", component: RentComponent},
  { path: "rented/:id", component: RentedCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
