import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { carInterface } from 'src/interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  newCar: carInterface = {
    id: '',
    brand: '',
    model: '',
    year: 0,
    color: '',
    price: 0,
    transmission: '',
    seats: 0,
    details: {
      engine: '',
      fuelType: '',
      mileage: 0,
      condition: '',
      description: '',
      image: ''
    },
    isRented: {
      user: 'none',
      period: 'none'
    }
  };
  id!: number;
  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(){
    this.getAllCars();
  }


  submitForm(form: NgForm) {
    if (form.valid) {
      this.newCar.id = this.id.toString();
      console.log(this.newCar); 
      this.apiService.postCar(this.newCar).subscribe(
        response => {
          console.log("new car added successfully", response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Error adding new car:', error);
        }
      )
    }
    form.resetForm();
  }
  getAllCars(){
    this.apiService.getAllCars().subscribe(cars =>{
      this.id = Object.keys(cars).length
    })
  }
}
