import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { carInterface } from 'src/interfaces';

@Component({
  selector: 'app-rented-car',
  templateUrl: './rented-car.component.html',
  styleUrls: ['./rented-car.component.css']
})
export class RentedCarComponent implements OnInit {
  car!: carInterface[]
  totalPrice: number = 0;
   constructor (private apiService: ApiService) {}

   ngOnInit(): void {
     this.getTheCar()
   }

   getTheCar(){
    const dataUser = this.apiService.getDataUser()
    const id = dataUser._id;
    console.log("User id: " + id)
    this.apiService.getAllCars().subscribe(cars => {
      this.car = Object.values(cars).filter(car => car.isRented.user.id === id);
      console.log(this.car)
      this.calculateTotalPrice()
    })
   }

   calculateTotalPrice(){
    this.totalPrice = 0;
    const startDate = new Date(this.car[0].isRented.period.split(" to ")[0]);
    const endDate = new Date(this.car[0].isRented.period.split(" to ")[1]);
    const daysRented = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
      this.totalPrice += this.car[0].price * daysRented;

      console.log(daysRented)
      console.log(this.car[0].price)

      console.log(this.totalPrice)
   }
   
}
