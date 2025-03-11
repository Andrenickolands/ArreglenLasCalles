import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private apiUrl = 'http://localhost:8080/map'; // Ajusta la URL según el backend

  constructor(private http: HttpClient) {}

  getEmbedUrl(): Observable<{ embedUrl: string }> {
    return this.http.get<{ embedUrl: string }>(this.apiUrl);
  }
}