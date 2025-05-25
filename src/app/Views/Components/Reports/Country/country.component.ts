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

  @ViewChild(ModalSignInComponent) modalLogin!: ModalSignInComponent;

  datos: any[] = [];
  selectedCountry: any = null;

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllCountries();
  }

  // Cargar todos los países
  loadAllCountries(): void {
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

  // Método para obtener un país específico por ID
  getCountryById(countryId: number | string): void {
    this.countryService.getCountryById(countryId).subscribe(
      (res) => {
        this.selectedCountry = res;
        console.log('País obtenido por ID:', this.selectedCountry);
      },
      (err) => {
        console.error('Error al obtener el país por ID:', err);
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
      this.modalLogin.open();
    }
  }
}