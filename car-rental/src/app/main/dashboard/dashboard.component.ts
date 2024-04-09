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
  car!: carInterface[];
  days!: number;
  totalPrice!: number;

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
  unrent(carId: string){
    const isConfirmed = window.confirm("Are you sure you want to unrent this car?");
      if (isConfirmed){
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

  getCarId(car: any): string {
    return car._id ? car._id : car.id;
  }

  deleteCarByID(id: string | null) {
    if (id) { 
      const isConfirmed = window.confirm("Are you sure you want to delete this car?");
      if (isConfirmed) {
        this.apiService.delete(id).subscribe(
          response => {
            console.log("Deleted");
            this.getData();
          },
          error => {
            console.log("Error: " + error);
          }
        );
      }
    } else {
      console.log("Invalid car ID");
    }
  }
  
  
  getMailtoLink(user: string | User): string | null {
    if (typeof user === 'string') {
      return null; 
    } else {
      return 'mailto:' + user.email; 
    }
  }
  calculateTotalPrice(period: string, price: number){
    const startDate = new Date(period.split(" to ")[0]);
    const endDate = new Date(period.split(" to ")[1]);
    const daysRented = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    this.days = daysRented;
    return price * daysRented;
  }
}
