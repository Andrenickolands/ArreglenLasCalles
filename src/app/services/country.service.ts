import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private apiUrl = 'http://localhost:8080/countries';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Método para obtener
  getCountries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para obtener un dato por ID
  getCountryById(id: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // // Método para obtener con autorización
  // getCountries(): Observable<any> {
  //   const token = this.authService.getToken();
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });

  //   return this.http.get(this.apiUrl, { headers });
  // }

  // Método alternativo con autorización 
  // getCountryByIdWithAuth(id: number | string): Observable<any> {
  //   const token = this.authService.getToken();
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });
    
  //   return this.http.get(`${this.apiUrl}/${id}`, { headers });
  // }
}
