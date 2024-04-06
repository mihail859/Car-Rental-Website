import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { carInterface } from 'src/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  carsArr: carInterface[] = [];
  constructor(private apiService: ApiService, private router: Router){}

  search(searchForm: NgForm){
    if (searchForm.valid){
      const brand = searchForm.value.brand;
      const model = searchForm.value.model;

      this.router.navigate(['/dashboard'], { queryParams: { brand: brand, model: model} });


      // this.apiService.getAllCars().subscribe(cars => {
      // console.log(cars)
      // console.log(Object.values(cars)[1].brand)
      // console.log(Object.values(cars)[1].model)
      // console.log("Data from search")
      // console.log(brand, model)

      // this.router.navigate(['/dashboard'], { queryParams: { brand: brand, model: model} });

      // this.carsArr = Object.values(cars).filter(car => car.brand === brand && car.model === model);
      // console.log(this.carsArr)
      // searchForm.resetForm();
      // })
    }
  }
}
