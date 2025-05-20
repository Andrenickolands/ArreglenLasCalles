import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/users'; 

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario (POST)
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }


  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
