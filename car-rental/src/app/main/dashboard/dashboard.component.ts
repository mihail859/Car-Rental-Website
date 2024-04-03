import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { carInterface } from 'src/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cars: carInterface[] = [];
  constructor( private apiService: ApiService) {}


  getData(){
    this.apiService.getAllCars().subscribe(cars => {
      console.log(cars)
    })
  }
}
