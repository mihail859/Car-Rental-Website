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
  loading: boolean = false; // New property to control loading indicator

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.loading = true; // Show loading indicator
    this.apiService.getAllCars().subscribe(cars => {
      this.cars = Object.values(cars).filter(c => c.isRented.user === "none");
      console.log(this.cars);
      setTimeout(() => {
        this.loading = false; // Hide loading indicator after 2 seconds
      }, 500);
    });
  }

  calculateWidth() {
    const screenWidth = window.innerWidth;
    const maxCarsPerRow = 5;
    const itemWidthPercentage = 100 / maxCarsPerRow;
    return `calc(${itemWidthPercentage}% - 25px)`; 
  }
}
