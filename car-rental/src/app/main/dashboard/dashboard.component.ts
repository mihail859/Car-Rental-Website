import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User, carInterface } from 'src/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cars: carInterface[] = [];
  loading: boolean = false; 
  isAdmin: boolean = false;
  carArr!: carInterface[];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const brand = params['brand'];
      const model = params['model'];
      if (brand && model) {
        this.getData(brand, model);
      } else {
        this.getData();
      }
    });
    setInterval(() => {
      this.getData(); 
    }, 5 * 60 * 1000);
  }

  getData(brand?: string, model?: string){
    this.loading = true; 
    this.apiService.getAllCars().subscribe(cars => {
      if (brand && model) {
        this.cars = Object.values(cars).filter(car => car.brand === brand && car.model === model);
      } else {
        this.cars = Object.values(cars);
      }
      console.log(this.cars);
      setTimeout(() => {
        this.loading = false; 
      }, 500);
    });
  }

  isUser(user: string | User): user is User {
    return typeof user !== 'string';
  }
  

  calculateWidth() {
    const screenWidth = window.innerWidth;
    const maxCarsPerRow = 5;
    const itemWidthPercentage = 100 / maxCarsPerRow;
    return `calc(${itemWidthPercentage}% - 25px)`; 
  }
  isAdminHere(){
    return this.apiService.isAdmin();
  }
  unrent(carId: number){
    console.log("From unrenting...", carId);
    const updatedCar = {
      "isRented": {
        "user": "none",
        "period": `none`
      }
    }; 
    this.apiService.patchCar(carId, updatedCar).subscribe(
      response => {
        console.log('Patch successful:', response);
        this.router.navigate([`dashboard`]);
        this.getData();
      },
      error => {
        console.error('Patch error:', error);
        
      }
    )

  }
}
