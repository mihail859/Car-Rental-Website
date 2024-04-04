import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private apiService: ApiService) {}

  logout(): void {
    this.apiService.logout(); 
    this.router.navigate(['/login']); 
  }

  isAuthenticated(): boolean {
    return this.apiService.updateAuthenticationStatus(); 
  }

  isAdminHere(): boolean {
    return this.apiService.isAdmin(); 
  }
}
