import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../../../services/country.service';
import { Router } from '@angular/router';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  datos: any[] = [];

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      (res) => {
        this.datos = res;
        console.log('Datos cargados:', this.datos);
      },
      (err) => {
        console.error('Error al cargar los datos:', err);
      }
    );
  }

  Next() {

  }

   // Método para verificar si el usuario está logueado
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Método para obtener el token del localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  Report(): void {
    if (this.isAuthenticated()) {
      this.router.navigate(['/add-report']);
    } else {
      
    }
  }
}