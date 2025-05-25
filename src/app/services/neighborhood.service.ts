import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class NeighborhoodService {

  private apiUrl = 'http://localhost:8080/neighborhoods';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Método para obtener
  getNeighborhoods(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para obtener un dato por ID
  getNeighborhoodByID(id: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
