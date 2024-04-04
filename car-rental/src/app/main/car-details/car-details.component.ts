import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { carInterface } from 'src/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  car$!: Observable<carInterface>; 

  ngOnInit() {
    this.route.params.subscribe(params => {
      const carId = params['id'];
      console.log('Car ID:', carId);
      this.car$ = this.apiService.getCarById(carId); 
    });
  }

  isUserLoggedIn(): boolean {
    return this.apiService.updateAuthenticationStatus();
  }
}
