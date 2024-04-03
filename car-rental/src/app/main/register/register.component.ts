import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private apiService: ApiService, private router: Router){}

  register(registerForm: NgForm){
    if (registerForm.valid){
        const email = registerForm.value.username;
        const password = registerForm.value.password;

        this.apiService.registerUser(email, password).subscribe(
          response => {
            console.log('Registered successfully', response)
            sessionStorage.setItem('userData', JSON.stringify(response))
            this.apiService.updateAuthenticationStatus();
            this.router.navigate(['/home']);
          },
          error => {
            console.log('Failed to register', error)
            alert('Failed to register')
          }
        )
    }
  }
}
