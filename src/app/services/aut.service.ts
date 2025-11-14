// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // 1. Importar Router

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private tokenKey = 'token'; // 2. Definir una llave para el token

  // 3. Inyectar Router en el constructor
  constructor(private http: HttpClient, private router: Router) {}

  // 🔹 Registrar usuario
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // 🔹 Iniciar sesión
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // --- 👇 INICIO DE NUEVAS FUNCIONES ---

  /**
   * 🔹 Guarda el token en localStorage.
   * Lo llamaremos desde el login.component.ts
   */
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * 🔹 Obtiene el token guardado.
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * 🔹 Revisa si el usuario está autenticado.
   * Esta función es la que usará el AuthGuard.
   */
  isLoggedIn(): boolean {
    const token = this.getToken();
    // El '!!' convierte el valor (string o null) en booleano (true o false)
    return !!token; 
  }

  /**
   * 🔹 Cierra la sesión del usuario.
   * Esta es la función que llamará tu botón de "Cerrar Sesión".
   */
  logout() {
  localStorage.clear(); // o removeItem('token')
}

  // --- 👆 FIN DE NUEVAS FUNCIONES ---
}