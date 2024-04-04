import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { carInterface } from 'src/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cars: carInterface[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.apiService.getAllCars().subscribe(cars => {
      this.cars = Object.values(cars);
      console.log(this.cars)
    })
  }

  calculateWidth() {
    const screenWidth = window.innerWidth;
    const maxCarsPerRow = 5  ;
    const itemWidthPercentage = 100 / maxCarsPerRow;
    return `calc(${itemWidthPercentage}% - 25px)`; 
  }
}
