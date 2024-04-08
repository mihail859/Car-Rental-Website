import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newCar: any;
  carId!: string | null;
  constructor(private apiService: ApiService, private routes: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    
    this.routes.paramMap.subscribe(params => {
      this.carId = params.get('id');
    })
    this.apiService.getCarById(this.carId).subscribe(car => {
      this.newCar = car;
      console.log(this.newCar);
    })
  }
  submitForm(formEdit: NgForm){
    if (formEdit.valid){
      console.log("valid");
      const price = formEdit.value.price;
      const engine = formEdit.value.engine;
      const mileage = formEdit.value.mileage;
      const description = formEdit.value.description;
      const image = formEdit.value.image;

      const updatedInformation = {
        price, engine,mileage,description,image
      }

      this.apiService.patchCar(this.carId, updatedInformation).subscribe(
        response => {
          console.log('Patch successful:', response);
          this.router.navigate([`/dashboard`]);
        },
        error => {
          console.error('Patch error:', error);
          
        }
      );

    }
  }
}
