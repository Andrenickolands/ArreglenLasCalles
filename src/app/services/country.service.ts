import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  
})
export class CountryService {

  private apiUrl = 'http://localhost:8080/countries';  

  constructor(private http: HttpClient) {}

  // Método para obtener los países
  getCountries(): Observable<any> {
    return this.http.get(this.apiUrl);  
  }
}
