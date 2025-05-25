import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class CityService {

  private apiUrl = 'http://localhost:8080/cities';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Método para obtener
  getCities(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
