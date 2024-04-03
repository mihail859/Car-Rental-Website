import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carInterface, loginInterface, registerInterface } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3030/users';
  private  jsonStoreUrl = 'http://localhost:3030/jsonstore/'

  constructor(private http: HttpClient) { }

  loginFunction(email: string, password: string): Observable<any>{
    const url = `${this.apiUrl}/login`;
    const data = JSON.stringify({ email, password });
    return this.http.post<loginInterface>(url, data);
  }

  logout(): void {
    sessionStorage.removeItem('userData'); 
    if (sessionStorage.getItem('isAdminLoggedIn')){
      sessionStorage.removeItem('isAdminLoggedIn')
    }
  }

  updateAuthenticationStatus(): boolean {
    return !!sessionStorage.getItem('userData'); 
  }

  registerUser(email: string, password: string): Observable<any>{
    const url = `${this.apiUrl}/register`;
    const data = JSON.stringify({ email, password });
    return this.http.post<registerInterface>(url, data);
  }

  getAllCars(){
     return this.http.get<carInterface>(`${this.jsonStoreUrl}/cars`)
  }
}
