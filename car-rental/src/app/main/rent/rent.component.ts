import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { carInterface } from 'src/interfaces';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit{
  carInfo!: carInterface;
  idOfTheCar!: number;

   constructor(private routes: ActivatedRoute, private apiService: ApiService, private router: Router){}

   ngOnInit(): void {
     this.routes.params.subscribe(params => {
      const carId = params['id'];
      this.idOfTheCar = carId;
      console.log(this.idOfTheCar);
      
      this.getCarInformation(carId)
      
     })
   }

   rentACar(rentForm: NgForm){
    if (rentForm.valid){
      const firstName = rentForm.value.username;
      const lastName = rentForm.value.lastname;
      const license = rentForm.value.license;
      const dateFrom = rentForm.value.from;
      const dateTo = rentForm.value.to;
      const information = {
        firstName, lastName, license, dateFrom, dateTo
      }
      const userData = this.apiService.getDataUser();

      const id = userData._id;

      const email = userData.email;
      

      const updatedCar = {
        "isRented": {
          "user": {
              "id": id,
              "email": email,
              "license": license,
              "name": firstName + " " + lastName
          },
          "period": `From ${dateFrom} to ${dateTo}`
        }
      }; 
      console.log(updatedCar);
      
  
      this.apiService.patchCar(this.getCarId(this.carInfo), updatedCar).subscribe(
        response => {
          console.log('Patch successful:', response);
          this.router.navigate([`/rented/${this.getCarId(this.carInfo)}`]);
        },
        error => {
          console.error('Patch error:', error);
          
        }
      );
    }

    rentForm.resetForm();
   }

   getCarInformation(id: string ): void {
    this.apiService.getCarById(id).subscribe(
      (data: carInterface) => {
        this.carInfo = data; 
        console.log(this.carInfo); 
      },
      error => {
        console.log('Error:', error); 
      }
    );
  }
  getCarId(car: any): string {
    return car._id ? car._id : car.id;
  }
}
