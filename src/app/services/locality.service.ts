import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class LocalityService {

  private apiUrl = 'http://localhost:8080/localities';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Método para obtener 
  getLocalities(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para obtener un dato por ID
  getLocalityByID(id: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getNumOfReportsByLocality(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reports/count`);
  }
}
