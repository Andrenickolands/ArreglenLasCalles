import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3007/api/auth'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para registrar usuarios
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Método para iniciar sesión
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Método para recuperar contraseña
  lostPassword(email: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/lostpassword`, email);
  }
}
