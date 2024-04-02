import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      const email = loginForm.value.username;
      const password = loginForm.value.password;
      
      this.apiService.loginFunction(email, password).subscribe(
        response => {
          console.log('Login response:', response);
          sessionStorage.setItem('userData', JSON.stringify(response));
          this.apiService.updateAuthenticationStatus(); 
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Login error:', error);
          alert('Login failed. Please check your credentials.');
        }
      );
    }
  }
}
